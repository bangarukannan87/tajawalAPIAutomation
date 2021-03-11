package com.tajawal.step.definition;

import com.jayway.restassured.response.Response;
import com.tajawal.utils.HttpMethods;
import com.tajawal.utils.ReadPropertyFile;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.qameta.allure.Feature;
import io.qameta.allure.Step;
import org.apache.commons.lang3.StringUtils;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.IntStream;

import static java.lang.Integer.parseInt;

/*
* author Kannan
* created on 10-03-2021
* */
public class HotelDetailsSteps {
    private Response response;

    /**
     * This method is to initiate a GET call method for HOTEL DETAILS service
     * @param city
     * @param pageSize
     */
    @Given("I want fetch the hotel details for the {string} with {string}")
    public void callHotelDetails(String city, String pageSize) {
        Map<String, String> header = new HashMap<>();
        header.put("token", "s73827732j9$872u3lkNp");
        Map<String, String> param = new HashMap<>();
        param.put("query", city);
        if (StringUtils.isNotBlank(pageSize))
            param.put("pageSize", pageSize);
        response = HttpMethods.callGETMethod(header, param, ReadPropertyFile.getUrlProperties().getProperty("HOTEL_DETAILS"));
    }

    /**
     * This method is to validate the response statuscode to be 200
     * @param statusCode
     */
    @Then("Validate response status code as {string}")
    public void validateStatusCode(String statusCode) {
        Assert.assertTrue(String.format("STATUS CODE VALIDATION FAILED : %d", response.getStatusCode())
                , response.statusCode() == parseInt(statusCode));
    }


    /**
     * This method is to validate the number of hotels in response based on pageSize paramter
     * @param expectedPageSize
     */
    @Then("Validate pagesize {string} in response")
    public void validatePageSizeInResponse(String expectedPageSize) {
        Map<String, Object> hotels = response.jsonPath().get("hotels");
        Assert.assertEquals("Mismatch in page size ", parseInt(expectedPageSize), hotels.size());
    }


    /**
     * This method is to validate the city name to be present in each Hotel name or Hotel address field in response(Assumption)
     * @param city
     */
    @Then("Validate {string} in hotel name or address")
    public void validateCity(String city) {
        HashMap<String, Object> hotels = response.jsonPath().get("hotels");
        ArrayList<String> errorHotels = new ArrayList<>();
        hotels.entrySet().parallelStream().forEach(eachHotel -> {
            if ((((HashMap<String, Object>) eachHotel.getValue()).keySet().contains("name")) &&
                    !((HashMap<String, Object>) eachHotel.getValue()).get("name").toString().toUpperCase().contains(city)) {
                errorHotels.add(((HashMap<String, Object>) eachHotel.getValue()).get("name").toString());
            } else if ((((HashMap<String, Object>) eachHotel.getValue()).keySet().contains("address")) &&
                    !((HashMap<String, Object>) eachHotel.getValue()).get("address").toString().toUpperCase().contains(city)) {
                errorHotels.add(((HashMap<String, Object>) eachHotel.getValue()).get("address").toString());
            }
        });
        Assert.assertTrue("BASED ON ASSUMPTION, CITY NAME NOT PRESENT IN HOTEL NAME OR ADDRESS." +
                " HERE ARE THE LIST, \n" + errorHotels, errorHotels.size() == 0);
    }

    /**
     * This method is to validate the error message in response
     * @param errorMessage
     */
    @Then("Validate the error message {string} in response")
    public void validateTheErrorMessageInResponse(String errorMessage) {
        HashMap responseMap = response.getBody().jsonPath().get();
        if(responseMap.keySet().contains("error")){
            Assert.assertTrue("MISMATCH IN ERROR MESSAGE "+responseMap.get("error"),
                    responseMap.get("error").toString().equalsIgnoreCase(errorMessage));
        }else
            Assert.assertTrue("ERROR KEY NOT PRESENT IN RESPONSE",false);
    }

    /**
     * This method is to validate the image in each HOTEL in response
     */
    @Then("Validate the image appearing for each hotel")
    public void validateTheHotelImage() {
        HashMap<String, Object> hotelMap = response.getBody().jsonPath().get("hotels");
        HashMap<String, String> filteredDetails = new HashMap<>();
        hotelMap.entrySet().parallelStream().filter(eachHotel -> {
            return (!(HttpMethods.callGETMethod(((HashMap<String,Object>)eachHotel.getValue()).get("thumbnailUrl").toString()).getStatusCode()==200 &&
                    HttpMethods.callGETMethod(((HashMap<String,Object>)eachHotel.getValue()).get("thumbnailUrl").toString()).getContentType().contains("image")));
        }).
                forEach(eachHotel -> {
            HttpMethods.callGETMethod(((HashMap<String,Object>)eachHotel.getValue()).get("thumbnailUrl").toString());
            filteredDetails.put(((HashMap<String,String>)(((HashMap<String,Object>)eachHotel.getValue()).get("name"))).get("en")
                    ,((HashMap<String,Object>)eachHotel.getValue()).get("thumbnailUrl").toString());
        });
        Assert.assertTrue("IMAGE IS NOT ACCESSABLE FOR THE HOTELS -"+filteredDetails,filteredDetails.size()==0);

    }


}
