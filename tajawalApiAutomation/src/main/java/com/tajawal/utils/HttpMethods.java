package com.tajawal.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jayway.restassured.RestAssured;
import com.jayway.restassured.response.Response;
import org.junit.Assert;

import java.util.Map;
import java.util.stream.Collectors;

public class HttpMethods {
    private static Response response;

    public static Response callPOSTMethod(Map<String, String> headers, Object request, String endpoint){
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            String requestData = objectMapper.writeValueAsString(request);
            System.out.println(requestData);
            System.out.println(endpoint);
            System.out.println("https://www.tajawal.ae/api/v3/flights/flight/get-fares-calender");
            response = RestAssured.given().headers(headers).body(requestData).when().post(endpoint);
            response.prettyPrint();
        }catch (Exception e){
            Assert.assertTrue(String.format("ERROR OCCURRED ON POST METHOD : %s",e),false);
        }
        return response;
    }

    public static Response callGETMethod(Map<String, String> headers, Map<String, String> params, String endpoint){
        try {
            System.out.println("GET URL : "+endpoint+"?"+params.entrySet().stream().map( each ->
                    each.getKey()+"="+each.getValue()).collect(Collectors.joining("&")));
            System.out.println("HEADERS : "+headers);
            response = RestAssured.given().headers(headers).params(params).when().get(endpoint);
            response.prettyPrint();
        }catch (Exception e){
            Assert.assertTrue(String.format("ERROR OCCURRED ON POST METHOD : %s",e),false);
        }
        return response;
    }

    public static Response callGETMethod( String endpoint){
        try {
            System.out.println("GET URL : "+endpoint);
            response = RestAssured.given().get(endpoint);
            response.prettyPrint();
        }catch (Exception e){
            Assert.assertTrue(String.format("ERROR OCCURRED ON POST METHOD : %s",e),false);
        }
        return response;
    }
}
