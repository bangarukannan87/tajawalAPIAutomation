package com.tajawal.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jayway.restassured.RestAssured;
import com.jayway.restassured.response.Response;
import org.junit.Assert;

import java.util.Map;
import java.util.stream.Collectors;

public class HttpMethods {
    private static Response response;

    /**
     * This method is to call POST method using RestAssured
     * @param headers
     * @param request
     * @param endpoint
     * @return
     */
    public static Response callPOSTMethod(Map<String, String> headers, Object request, String endpoint){
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            String requestData = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(request);
            ScenarioHooks.scenario.write("HEADERS : "+headers);
            ScenarioHooks.scenario.write("ENDPONT : "+endpoint);
            ScenarioHooks.scenario.write("REQUEST :\n"+requestData);
            response = RestAssured.given().headers(headers).body(requestData).when().post(endpoint);
            ScenarioHooks.scenario.write("RESPONSE :\n"+response.prettyPrint());
        }catch (Exception e){
            Assert.assertTrue(String.format("ERROR OCCURRED ON POST METHOD : %s",e),false);
        }
        return response;
    }

    /**
     * This method is to call GET method using RestAssured
     * @param headers
     * @param params
     * @param endpoint
     * @return
     */
    public static Response callGETMethod(Map<String, String> headers, Map<String, String> params, String endpoint){
        try {
            ScenarioHooks.scenario.write("GET URL : "+endpoint+"?"+params.entrySet().stream().map( each ->
                    each.getKey()+"="+each.getValue()).collect(Collectors.joining("&")));
            ScenarioHooks.scenario.write("HEADERS : "+headers);
            response = RestAssured.given().headers(headers).params(params).when().get(endpoint);
            ScenarioHooks.scenario.write(response.prettyPrint());
        }catch (Exception e){
            Assert.assertTrue(String.format("ERROR OCCURRED ON GET METHOD : %s",e),false);
        }
        return response;
    }

    /**
     * This method is to call GET method (without header & params) using RestAssured
     * @param endpoint
     * @return
     */
    public static Response callGETMethod( String endpoint){
        try {
            ScenarioHooks.scenario.write("GET URL : "+endpoint);
            response = RestAssured.given().get(endpoint);
            if(response.getContentType().contains("json"))
                ScenarioHooks.scenario.write(response.prettyPrint());
        }catch (Exception e){
            Assert.assertTrue(String.format("ERROR OCCURRED ON GET METHOD : %s",e),false);
        }
        return response;
    }
}
