package com.tajawal.step.definition;

import com.jayway.restassured.response.Response;
import com.tajawal.constants.CalenderPricingConstants;
import com.tajawal.constants.FrameworkConstants;
import com.tajawal.pojo.calenderPricing.request.CalenderPricingRequest;
import com.tajawal.service.implementation.CalenderPricingService;
import com.tajawal.utils.DateHelper;
import com.tajawal.utils.HttpMethods;
import com.tajawal.utils.ReadPropertyFile;
import com.tajawal.utils.Utility;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
import io.cucumber.java.en.Given;
import io.qameta.allure.Description;
import io.qameta.allure.Severity;
import io.qameta.allure.SeverityLevel;
import org.junit.Assert;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import io.cucumber.java.en.Then;

import static java.lang.Integer.parseInt;

public class CalenderPricingSteps {
    private Response response;

    /**
     * This method will receive the calenderFare request from service layer and call HttpUtils method to generate the service response
     * @param sector
     * @param travelDates
     * @param cabin
     * @param passengerType
     * @param stops
     * @param airlines
     */
    @Given("I want to retrieve fares for {string}, {string}, {string}, {string}, {string} and {string}")
    public void callCalenderStep(String sector, String travelDates, String cabin, String passengerType,
                                 String stops, String airlines){
        CalenderPricingService calenderPricingService = new CalenderPricingService();
        CalenderPricingRequest calenderPricingRequest = calenderPricingService.
                createCalenderPricingReq(sector, travelDates, cabin, passengerType, stops, airlines);
        HashMap<String, String> header = new HashMap<>();
        header.put("Content-Type","application/json");
        response = HttpMethods.callPOSTMethod(header,calenderPricingRequest, ReadPropertyFile.getUrlProperties().getProperty("CALENDER_PRICING"));
    }


    /**
     * This method is to validate the calender price date for oneway/roundtrip/multi-segment
     * @param travelDates
     */
    @Then("Validate the response calender price date for the given {string}")
    public void validateResponseDates(String travelDates){
        if(!response.getBody().jsonPath().get().toString().equalsIgnoreCase("[]")){
            HashMap<String, Object> responseDetails = response.getBody().jsonPath().get();
            for(Map.Entry eachResponse: responseDetails.entrySet()){
                String firstDate = eachResponse.getKey().toString().split("_")[0];
                int actualFirstDateDiff = DateHelper.getDateDifference(DateHelper.getFutureDate(0,"yyyy-MM-dd"),firstDate,"yyyy-MM-dd");
                int expectedFirstDate = parseInt(travelDates.split("-")[0]);
                int expectedLastDate = parseInt(travelDates.split("-")[travelDates.split("-").length-1]);
                Assert.assertTrue("CALENDER PRINCING DATES ARE OUT OF RANGE -"
                        +eachResponse.getKey()+" : "+eachResponse.getValue(),(actualFirstDateDiff>=expectedFirstDate && expectedLastDate >= actualFirstDateDiff));
                if(travelDates.contains("/")){
                    String actualSecondDate = eachResponse.getKey().toString().split("_")[1];
                    int actualSecondDateDiff = DateHelper.getDateDifference(DateHelper.getFutureDate(0,"yyyy-MM-dd"),actualSecondDate,"yyyy-MM-dd");
                    Assert.assertTrue("2=CALENDER PRINCING ON END DATES ARE OUT OF RANGE -"
                            +eachResponse.getKey()+" : "+eachResponse.getValue(),(expectedFirstDate<=actualFirstDateDiff && actualSecondDateDiff <= expectedLastDate));
                }
            }
        }
    }

    /**
     * This method is to validate the response against schema
     */
    @Then("Validate the Calender fare response against schema")
    public void validateResponseWithSchema() {
            try {
                ArrayList errorList = Utility.validateSchema(FrameworkConstants.getSchemafolderpath()+ CalenderPricingConstants.getSchemafilename(),
                        response.asString());
                Assert.assertTrue("SCHEMA VALIDATION FAILED " + errorList, errorList.size() == 0);
            }catch (Exception e){
                e.printStackTrace();
            }
    }

    /**
     * This method is to validate the response status code
     * @param statusCode
     */
    @Then("Validate Calender fare response status code as {string}")
    public void validateStatusCode(String statusCode) {
        Assert.assertTrue(String.format("STATUS CODE VALIDATION FAILED : %d", response.getStatusCode())
                , response.statusCode() == parseInt(statusCode));
    }


}
