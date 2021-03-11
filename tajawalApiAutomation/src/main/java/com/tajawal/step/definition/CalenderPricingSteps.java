package com.tajawal.step.definition;

import com.jayway.restassured.response.Response;
import com.tajawal.pojo.calenderPricing.request.CalenderPricingRequest;
import com.tajawal.service.implementation.CalenderPricingService;
import com.tajawal.utils.DateHelper;
import com.tajawal.utils.HttpMethods;
import com.tajawal.utils.ReadPropertyFile;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;

import static java.lang.Integer.parseInt;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class CalenderPricingSteps {
    private Response response;

    @Given("I want to retrieve fares for {string}, {string}, {string}, {string}, {string} and {string}")
    public void callCalenderStep(String sector, String travelDates, String cabin, String passengerType,
                                 String stops, String airlines){
        CalenderPricingService calenderPricingService = new CalenderPricingService();
        CalenderPricingRequest calenderPricingRequest = calenderPricingService.
                createCalenderPricingReq(sector, travelDates, cabin, passengerType, stops, airlines);
        HashMap<String, String> header = new HashMap<>();
        header.put("Content-Type","application/json");
        response = HttpMethods.callPOSTMethod(header,calenderPricingRequest, ReadPropertyFile.getUrlProperties().getProperty("CALENDER_PRICING"));
        validateFields();
    }

    /*
    * This method is to validate the calender price date for oneway/roundtrip/multi-segment
    * @param travelDates
    *
    * */
    @Then("Validate the response calender price date for the given {string}")
    public void validateResponseDates(String travelDates){
        if(!response.getBody().jsonPath().get().toString().equalsIgnoreCase("[]")){
            HashMap<String, Object> responseDetails = response.getBody().jsonPath().get();
            for(Map.Entry eachResponse: responseDetails.entrySet()){
                String firstDate = eachResponse.getKey().toString().split("_")[0];
                int actualFirstDateDiff = DateHelper.getDateDifference(DateHelper.getFutureDate(0,"yyyy-MM-dd"),firstDate,"yyyy-MM-dd");
                int expectedFirstDate = parseInt(travelDates.split("-")[0]);
                int expectedLastDate = parseInt(travelDates.split("-")[travelDates.split("-").length-1]);
                Assert.assertTrue("1=CALENDER PRINCING DATES ARE OUT OF RANGE -"
                        +eachResponse.getKey()+" : "+eachResponse.getValue(),(actualFirstDateDiff>=expectedFirstDate && expectedLastDate >= actualFirstDateDiff));
                if(travelDates.contains("/")){
                    String actualSecondDate = eachResponse.getKey().toString().split("_")[1];
                    int actualSecondDateDiff = DateHelper.getDateDifference(DateHelper.getFutureDate(0,"yyyy-MM-dd"),actualSecondDate,"yyyy-MM-dd");
                    Assert.assertTrue("2=CALENDER PRINCING DATES ARE OUT OF RANGE -"
                            +eachResponse.getKey()+" : "+eachResponse.getValue(),(expectedFirstDate<=actualFirstDateDiff && actualSecondDateDiff <= expectedLastDate));
                }
            }
        }
    }


    public void validateFields(){
        if(!response.getBody().jsonPath().get().toString().equalsIgnoreCase("[]")) {
            HashMap<String, Object> responseDetails = response.getBody().jsonPath().get();
            for(Map.Entry eachResponse: responseDetails.entrySet()){
                ArrayList<String> expectedKeys = new ArrayList<>();
                expectedKeys.add("price");
                expectedKeys.add("updatedAt");
                expectedKeys.removeAll(((HashMap<String, String> )eachResponse.getValue()).keySet());
                Assert.assertTrue("MISSING KEYS ARE "+ expectedKeys,expectedKeys.size()==0);
            }
        }
    }

    public static void main(String[] args){
        new CalenderPricingSteps().callCalenderStep("DXB-MAA/MAA-DXB","100-101/105-107","Economy",
                "ADT-1,CHD-1,INF-1","1,2","");
    }

}
