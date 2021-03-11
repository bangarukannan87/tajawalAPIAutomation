$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/HotelDetails.feature");
formatter.feature({
  "name": "As a user i want to fetch Hotel Details for a given city",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test the error scenarios with invalid dataset",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    }
  ]
});
formatter.step({
  "name": "I want fetch the hotel details for the \"\u003cCITY\u003e\" with \"\u003cPAGE_SIZE\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Validate response status code as \"400\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Validate the error message \"\u003cERROR\u003e\" in response",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CITY",
        "PAGE_SIZE",
        "ERROR"
      ]
    },
    {
      "cells": [
        "SINGAPORE",
        "0",
        "BAD REQUEST"
      ]
    },
    {
      "cells": [
        "",
        "10",
        "BAD REQUEST"
      ]
    },
    {
      "cells": [
        "",
        "",
        "BAD REQUEST"
      ]
    },
    {
      "cells": [
        "SINGAPORE",
        "-1",
        "BAD REQUEST"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test the error scenarios with invalid dataset",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want fetch the hotel details for the \"SINGAPORE\" with \"0\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
formatter.write("HEADERS : {token\u003ds73827732j9$872u3lkNp}");
formatter.write("{\n    \"timestamp\": \"2021-03-11T17:08:54.668+0000\",\n    \"path\": \"/content/summary\",\n    \"status\": 400,\n    \"error\": \"Bad Request\",\n    \"message\": null,\n    \"requestId\": \"a8cda194\",\n    \"exception\": \"com.seera.exception.ValidationException\",\n    \"trace\": null,\n    \"traceId\": \"01dfe2dd5a5b3a4e\",\n    \"serviceName\": \"hotel-core-service\",\n    \"errorCodes\": [\n        \"1028\"\n    ],\n    \"errorType\": \"Validation error\",\n    \"code\": 106\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the error message \"BAD REQUEST\" in response",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateTheErrorMessageInResponse(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test the error scenarios with invalid dataset",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want fetch the hotel details for the \"\" with \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
formatter.write("HEADERS : {token\u003ds73827732j9$872u3lkNp}");
formatter.write("{\n    \"timestamp\": \"2021-03-11T17:08:55.612+0000\",\n    \"path\": \"/content/summary\",\n    \"status\": 400,\n    \"error\": \"Bad Request\",\n    \"message\": null,\n    \"requestId\": \"09a42f5c\",\n    \"exception\": \"com.seera.exception.ValidationException\",\n    \"trace\": null,\n    \"traceId\": \"f8614bbf6cbaddd7\",\n    \"serviceName\": \"hotel-core-service\",\n    \"errorCodes\": [\n        \"1018\"\n    ],\n    \"errorType\": \"Validation error\",\n    \"code\": 106\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the error message \"BAD REQUEST\" in response",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateTheErrorMessageInResponse(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test the error scenarios with invalid dataset",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want fetch the hotel details for the \"\" with \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
formatter.write("HEADERS : {token\u003ds73827732j9$872u3lkNp}");
formatter.write("{\n    \"timestamp\": \"2021-03-11T17:08:56.033+0000\",\n    \"path\": \"/content/summary\",\n    \"status\": 400,\n    \"error\": \"Bad Request\",\n    \"message\": null,\n    \"requestId\": \"7f4e361d\",\n    \"exception\": \"com.seera.exception.ValidationException\",\n    \"trace\": null,\n    \"traceId\": \"b22e928dd5cc5b9c\",\n    \"serviceName\": \"hotel-core-service\",\n    \"errorCodes\": [\n        \"1018\"\n    ],\n    \"errorType\": \"Validation error\",\n    \"code\": 106\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the error message \"BAD REQUEST\" in response",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateTheErrorMessageInResponse(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test the error scenarios with invalid dataset",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want fetch the hotel details for the \"SINGAPORE\" with \"-1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
formatter.write("HEADERS : {token\u003ds73827732j9$872u3lkNp}");
formatter.write("{\n    \"timestamp\": \"2021-03-11T17:08:56.479+0000\",\n    \"path\": \"/content/summary\",\n    \"status\": 400,\n    \"error\": \"Bad Request\",\n    \"message\": null,\n    \"requestId\": \"8b100d5f\",\n    \"exception\": \"com.seera.exception.ValidationException\",\n    \"trace\": null,\n    \"traceId\": \"3a38184686073307\",\n    \"serviceName\": \"hotel-core-service\",\n    \"errorCodes\": [\n        \"1028\"\n    ],\n    \"errorType\": \"Validation error\",\n    \"code\": 106\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the error message \"BAD REQUEST\" in response",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateTheErrorMessageInResponse(String)"
});
formatter.result({
  "status": "passed"
});
});