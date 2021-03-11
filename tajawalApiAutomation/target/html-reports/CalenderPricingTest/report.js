$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/CalenderPricing.feature");
formatter.feature({
  "name": "As a user i want to fetch Hotel Details for a given city",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Retrieve the Calender fares for the one way routes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_CalenderPricing"
    }
  ]
});
formatter.step({
  "name": "I want to retrieve fares for \"\u003cSECTOR\u003e\", \"\u003cTRAVELDATE\u003e\", \"\u003cCABIN\u003e\", \"\u003cPAX_TYPE\u003e\", \"\u003cSTOPS\u003e\" and \"\u003cAIRLINES\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Validate Calender fare response status code as \"200\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Validate the response calender price date for the given \"\u003cTRAVELDATE\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Validate the Calender fare response against schema",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SECTOR",
        "TRAVELDATE",
        "CABIN",
        "PAX_TYPE",
        "STOPS",
        "AIRLINES"
      ]
    },
    {
      "cells": [
        "DXB-MAA",
        "20-22",
        "Economy",
        "ADT-1,CHD-0,INF-0",
        "",
        ""
      ]
    },
    {
      "cells": [
        "JED-DXB",
        "20-30",
        "Economy",
        "ADT-1,CHD-1,INF-1",
        "",
        "EK,EY,QR"
      ]
    },
    {
      "cells": [
        "DXB-ICN",
        "1-2",
        "Economy",
        "ADT-2,CHD-0,INF-0",
        "1,2",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Retrieve the Calender fares for the one way routes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_CalenderPricing"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to retrieve fares for \"DXB-MAA\", \"20-22\", \"Economy\", \"ADT-1,CHD-0,INF-0\", \"\" and \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalenderPricingSteps.callCalenderStep(String,String,String,String,String,String)"
});
formatter.write("HEADERS : {Content-Type\u003dapplication/json}");
formatter.write("ENDPONT : https://www.tajawal.ae/api/v3/flights/flight/get-fares-calender");
formatter.write("REQUEST :\n{\r\n  \"leg\" : [ {\r\n    \"originId\" : \"DXB\",\r\n    \"destinationId\" : \"MAA\",\r\n    \"departureFrom\" : \"2021-03-31\",\r\n    \"departureTo\" : \"2021-04-02\"\r\n  } ],\r\n  \"cabin\" : \"Economy\",\r\n  \"pax\" : {\r\n    \"adult\" : 1,\r\n    \"child\" : 0,\r\n    \"infant\" : 0\r\n  },\r\n  \"stops\" : [ ],\r\n  \"airline\" : [ ]\r\n}");
formatter.write("RESPONSE :\n{\n    \"2021-04-02\": {\n        \"price\": 350,\n        \"updatedAt\": \"2021-03-09T18:06:58.893Z\"\n    },\n    \"2021-04-01\": {\n        \"price\": 393.04,\n        \"updatedAt\": \"2021-03-11T08:08:23.515Z\"\n    },\n    \"2021-03-31\": {\n        \"price\": 350,\n        \"updatedAt\": \"2021-03-11T09:32:08.683Z\"\n    }\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Calender fare response status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalenderPricingSteps.validateStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the response calender price date for the given \"20-22\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalenderPricingSteps.validateResponseDates(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Calender fare response against schema",
  "keyword": "Then "
});
formatter.match({
  "location": "CalenderPricingSteps.validateResponseWithSchema()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrieve the Calender fares for the one way routes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_CalenderPricing"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to retrieve fares for \"JED-DXB\", \"20-30\", \"Economy\", \"ADT-1,CHD-1,INF-1\", \"\" and \"EK,EY,QR\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalenderPricingSteps.callCalenderStep(String,String,String,String,String,String)"
});
formatter.write("HEADERS : {Content-Type\u003dapplication/json}");
formatter.write("ENDPONT : https://www.tajawal.ae/api/v3/flights/flight/get-fares-calender");
formatter.write("REQUEST :\n{\r\n  \"leg\" : [ {\r\n    \"originId\" : \"JED\",\r\n    \"destinationId\" : \"DXB\",\r\n    \"departureFrom\" : \"2021-03-31\",\r\n    \"departureTo\" : \"2021-04-10\"\r\n  } ],\r\n  \"cabin\" : \"Economy\",\r\n  \"pax\" : {\r\n    \"adult\" : 1,\r\n    \"child\" : 1,\r\n    \"infant\" : 1\r\n  },\r\n  \"stops\" : [ ],\r\n  \"airline\" : [ \"EK\", \"EY\", \"QR\" ]\r\n}");
formatter.write("RESPONSE :\n{\n    \"2021-04-04\": {\n        \"price\": 1650,\n        \"updatedAt\": \"2021-03-06T00:34:13.697Z\"\n    },\n    \"2021-04-02\": {\n        \"price\": 1570,\n        \"updatedAt\": \"2021-03-11T15:08:49.391Z\"\n    },\n    \"2021-03-31\": {\n        \"price\": 1050,\n        \"updatedAt\": \"2021-03-08T21:09:44.306Z\"\n    }\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Calender fare response status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalenderPricingSteps.validateStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the response calender price date for the given \"20-30\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalenderPricingSteps.validateResponseDates(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Calender fare response against schema",
  "keyword": "Then "
});
formatter.match({
  "location": "CalenderPricingSteps.validateResponseWithSchema()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrieve the Calender fares for the one way routes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_CalenderPricing"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to retrieve fares for \"DXB-ICN\", \"1-2\", \"Economy\", \"ADT-2,CHD-0,INF-0\", \"1,2\" and \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalenderPricingSteps.callCalenderStep(String,String,String,String,String,String)"
});
formatter.write("HEADERS : {Content-Type\u003dapplication/json}");
formatter.write("ENDPONT : https://www.tajawal.ae/api/v3/flights/flight/get-fares-calender");
formatter.write("REQUEST :\n{\r\n  \"leg\" : [ {\r\n    \"originId\" : \"DXB\",\r\n    \"destinationId\" : \"ICN\",\r\n    \"departureFrom\" : \"2021-03-12\",\r\n    \"departureTo\" : \"2021-03-13\"\r\n  } ],\r\n  \"cabin\" : \"Economy\",\r\n  \"pax\" : {\r\n    \"adult\" : 2,\r\n    \"child\" : 0,\r\n    \"infant\" : 0\r\n  },\r\n  \"stops\" : [ 1, 2 ],\r\n  \"airline\" : [ ]\r\n}");
formatter.write("RESPONSE :\n[\n    \n]");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Calender fare response status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalenderPricingSteps.validateStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the response calender price date for the given \"1-2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalenderPricingSteps.validateResponseDates(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Calender fare response against schema",
  "keyword": "Then "
});
formatter.match({
  "location": "CalenderPricingSteps.validateResponseWithSchema()"
});
formatter.result({
  "status": "passed"
});
});