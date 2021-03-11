$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/CalenderPricing.feature");
formatter.feature({
  "name": "As a user i want to retrieve the calendar fares for the given date and route",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TC_CalenderPricing"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Retrieve the Calender fares for the one way routes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@severity\u003dcritical"
    },
    {
      "name": "@issue\u003d10"
    },
    {
      "name": "@tmsLink\u003d21"
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
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@severity\u003dcritical"
    },
    {
      "name": "@issue\u003d10"
    },
    {
      "name": "@tmsLink\u003d21"
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
formatter.write("REQUEST :\n{\r\n  \"leg\" : [ {\r\n    \"originId\" : \"DXB\",\r\n    \"destinationId\" : \"MAA\",\r\n    \"departureFrom\" : \"2021-04-01\",\r\n    \"departureTo\" : \"2021-04-03\"\r\n  } ],\r\n  \"cabin\" : \"Economy\",\r\n  \"pax\" : {\r\n    \"adult\" : 1,\r\n    \"child\" : 0,\r\n    \"infant\" : 0\r\n  },\r\n  \"stops\" : [ ],\r\n  \"airline\" : [ ]\r\n}");
formatter.write("RESPONSE :\n{\n    \"2021-04-03\": {\n        \"price\": 350,\n        \"updatedAt\": \"2021-03-09T22:28:45.196Z\"\n    },\n    \"2021-04-02\": {\n        \"price\": 350,\n        \"updatedAt\": \"2021-03-09T18:06:58.893Z\"\n    },\n    \"2021-04-01\": {\n        \"price\": 393.04,\n        \"updatedAt\": \"2021-03-11T08:08:23.515Z\"\n    }\n}");
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
formatter.scenario({
  "name": "Retrieve the Calender fares for the one way routes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_CalenderPricing"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@severity\u003dcritical"
    },
    {
      "name": "@issue\u003d10"
    },
    {
      "name": "@tmsLink\u003d21"
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
formatter.write("REQUEST :\n{\r\n  \"leg\" : [ {\r\n    \"originId\" : \"JED\",\r\n    \"destinationId\" : \"DXB\",\r\n    \"departureFrom\" : \"2021-04-01\",\r\n    \"departureTo\" : \"2021-04-11\"\r\n  } ],\r\n  \"cabin\" : \"Economy\",\r\n  \"pax\" : {\r\n    \"adult\" : 1,\r\n    \"child\" : 1,\r\n    \"infant\" : 1\r\n  },\r\n  \"stops\" : [ ],\r\n  \"airline\" : [ \"EK\", \"EY\", \"QR\" ]\r\n}");
formatter.write("RESPONSE :\n{\n    \"2021-04-04\": {\n        \"price\": 1650,\n        \"updatedAt\": \"2021-03-06T00:34:13.697Z\"\n    },\n    \"2021-04-02\": {\n        \"price\": 1570,\n        \"updatedAt\": \"2021-03-11T15:08:49.391Z\"\n    }\n}");
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
formatter.scenario({
  "name": "Retrieve the Calender fares for the one way routes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_CalenderPricing"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@severity\u003dcritical"
    },
    {
      "name": "@issue\u003d10"
    },
    {
      "name": "@tmsLink\u003d21"
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
formatter.write("REQUEST :\n{\r\n  \"leg\" : [ {\r\n    \"originId\" : \"DXB\",\r\n    \"destinationId\" : \"ICN\",\r\n    \"departureFrom\" : \"2021-03-13\",\r\n    \"departureTo\" : \"2021-03-14\"\r\n  } ],\r\n  \"cabin\" : \"Economy\",\r\n  \"pax\" : {\r\n    \"adult\" : 2,\r\n    \"child\" : 0,\r\n    \"infant\" : 0\r\n  },\r\n  \"stops\" : [ 1, 2 ],\r\n  \"airline\" : [ ]\r\n}");
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
formatter.scenarioOutline({
  "name": "Retrieve the Calender fares for the round trip / multi-city routes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@severity\u003dcritical"
    },
    {
      "name": "@issue\u003d11"
    },
    {
      "name": "@tmsLink\u003d11"
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
        "DXB-MAA/MAA-DXB",
        "20-22/50-55",
        "Economy",
        "ADT-1,CHD-0,INF-0",
        "",
        ""
      ]
    },
    {
      "cells": [
        "JED-DXB/AUH-SIN",
        "20-30/90-95",
        "Economy",
        "ADT-1,CHD-1,INF-1",
        "",
        "EK,FZ"
      ]
    },
    {
      "cells": [
        "DXB-ICN/ICN-DXB",
        "1-2/50-52",
        "Economy",
        "ADT-2,CHD-0,INF-0",
        "1,2",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Retrieve the Calender fares for the round trip / multi-city routes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_CalenderPricing"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@severity\u003dcritical"
    },
    {
      "name": "@issue\u003d11"
    },
    {
      "name": "@tmsLink\u003d11"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to retrieve fares for \"DXB-MAA/MAA-DXB\", \"20-22/50-55\", \"Economy\", \"ADT-1,CHD-0,INF-0\", \"\" and \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalenderPricingSteps.callCalenderStep(String,String,String,String,String,String)"
});
formatter.write("HEADERS : {Content-Type\u003dapplication/json}");
formatter.write("ENDPONT : https://www.tajawal.ae/api/v3/flights/flight/get-fares-calender");
formatter.write("REQUEST :\n{\r\n  \"leg\" : [ {\r\n    \"originId\" : \"DXB\",\r\n    \"destinationId\" : \"MAA\",\r\n    \"departureFrom\" : \"2021-04-01\",\r\n    \"departureTo\" : \"2021-04-03\"\r\n  }, {\r\n    \"originId\" : \"MAA\",\r\n    \"destinationId\" : \"DXB\",\r\n    \"departureFrom\" : \"2021-05-01\",\r\n    \"departureTo\" : \"2021-05-06\"\r\n  } ],\r\n  \"cabin\" : \"Economy\",\r\n  \"pax\" : {\r\n    \"adult\" : 1,\r\n    \"child\" : 0,\r\n    \"infant\" : 0\r\n  },\r\n  \"stops\" : [ ],\r\n  \"airline\" : [ ]\r\n}");
formatter.write("RESPONSE :\n{\n    \"2021-04-02_2021-05-03\": {\n        \"price\": 1165,\n        \"updatedAt\": \"2020-11-22T10:55:17.146Z\"\n    },\n    \"2021-04-02_2021-05-02\": {\n        \"price\": 889,\n        \"updatedAt\": \"2021-03-02T09:35:59.775Z\"\n    },\n    \"2021-04-01_2021-05-05\": {\n        \"price\": 860.5,\n        \"updatedAt\": \"2021-03-01T18:42:55.948Z\"\n    },\n    \"2021-04-01_2021-05-01\": {\n        \"price\": 1055,\n        \"updatedAt\": \"2021-01-16T14:46:27.783Z\"\n    }\n}");
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
  "name": "Validate the response calender price date for the given \"20-22/50-55\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalenderPricingSteps.validateResponseDates(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrieve the Calender fares for the round trip / multi-city routes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_CalenderPricing"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@severity\u003dcritical"
    },
    {
      "name": "@issue\u003d11"
    },
    {
      "name": "@tmsLink\u003d11"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to retrieve fares for \"JED-DXB/AUH-SIN\", \"20-30/90-95\", \"Economy\", \"ADT-1,CHD-1,INF-1\", \"\" and \"EK,FZ\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalenderPricingSteps.callCalenderStep(String,String,String,String,String,String)"
});
formatter.write("HEADERS : {Content-Type\u003dapplication/json}");
formatter.write("ENDPONT : https://www.tajawal.ae/api/v3/flights/flight/get-fares-calender");
formatter.write("REQUEST :\n{\r\n  \"leg\" : [ {\r\n    \"originId\" : \"JED\",\r\n    \"destinationId\" : \"DXB\",\r\n    \"departureFrom\" : \"2021-04-01\",\r\n    \"departureTo\" : \"2021-04-11\"\r\n  }, {\r\n    \"originId\" : \"AUH\",\r\n    \"destinationId\" : \"SIN\",\r\n    \"departureFrom\" : \"2021-06-10\",\r\n    \"departureTo\" : \"2021-06-15\"\r\n  } ],\r\n  \"cabin\" : \"Economy\",\r\n  \"pax\" : {\r\n    \"adult\" : 1,\r\n    \"child\" : 1,\r\n    \"infant\" : 1\r\n  },\r\n  \"stops\" : [ ],\r\n  \"airline\" : [ \"EK\", \"FZ\" ]\r\n}");
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
  "name": "Validate the response calender price date for the given \"20-30/90-95\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalenderPricingSteps.validateResponseDates(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrieve the Calender fares for the round trip / multi-city routes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_CalenderPricing"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@severity\u003dcritical"
    },
    {
      "name": "@issue\u003d11"
    },
    {
      "name": "@tmsLink\u003d11"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to retrieve fares for \"DXB-ICN/ICN-DXB\", \"1-2/50-52\", \"Economy\", \"ADT-2,CHD-0,INF-0\", \"1,2\" and \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalenderPricingSteps.callCalenderStep(String,String,String,String,String,String)"
});
formatter.write("HEADERS : {Content-Type\u003dapplication/json}");
formatter.write("ENDPONT : https://www.tajawal.ae/api/v3/flights/flight/get-fares-calender");
formatter.write("REQUEST :\n{\r\n  \"leg\" : [ {\r\n    \"originId\" : \"DXB\",\r\n    \"destinationId\" : \"ICN\",\r\n    \"departureFrom\" : \"2021-03-13\",\r\n    \"departureTo\" : \"2021-03-14\"\r\n  }, {\r\n    \"originId\" : \"ICN\",\r\n    \"destinationId\" : \"DXB\",\r\n    \"departureFrom\" : \"2021-05-01\",\r\n    \"departureTo\" : \"2021-05-03\"\r\n  } ],\r\n  \"cabin\" : \"Economy\",\r\n  \"pax\" : {\r\n    \"adult\" : 2,\r\n    \"child\" : 0,\r\n    \"infant\" : 0\r\n  },\r\n  \"stops\" : [ 1, 2 ],\r\n  \"airline\" : [ ]\r\n}");
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
  "name": "Validate the response calender price date for the given \"1-2/50-52\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalenderPricingSteps.validateResponseDates(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the schema for oneway / round trip / multi-city routes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@severity\u003dblocker"
    },
    {
      "name": "@issue\u003d12"
    },
    {
      "name": "@tmsLink\u003d12"
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
        "DXB-MAA/MAA-DXB",
        "20-22/50-55",
        "Economy",
        "ADT-1,CHD-0,INF-0",
        "",
        ""
      ]
    },
    {
      "cells": [
        "JED-DXB/AUH-SIN",
        "20-30/90-95",
        "Economy",
        "ADT-1,CHD-1,INF-1",
        "",
        "EK,FZ"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate the schema for oneway / round trip / multi-city routes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_CalenderPricing"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@severity\u003dblocker"
    },
    {
      "name": "@issue\u003d12"
    },
    {
      "name": "@tmsLink\u003d12"
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
formatter.write("REQUEST :\n{\r\n  \"leg\" : [ {\r\n    \"originId\" : \"DXB\",\r\n    \"destinationId\" : \"MAA\",\r\n    \"departureFrom\" : \"2021-04-01\",\r\n    \"departureTo\" : \"2021-04-03\"\r\n  } ],\r\n  \"cabin\" : \"Economy\",\r\n  \"pax\" : {\r\n    \"adult\" : 1,\r\n    \"child\" : 0,\r\n    \"infant\" : 0\r\n  },\r\n  \"stops\" : [ ],\r\n  \"airline\" : [ ]\r\n}");
formatter.write("RESPONSE :\n{\n    \"2021-04-03\": {\n        \"price\": 350,\n        \"updatedAt\": \"2021-03-09T22:28:45.196Z\"\n    },\n    \"2021-04-02\": {\n        \"price\": 350,\n        \"updatedAt\": \"2021-03-09T18:06:58.893Z\"\n    },\n    \"2021-04-01\": {\n        \"price\": 393.04,\n        \"updatedAt\": \"2021-03-11T08:08:23.515Z\"\n    }\n}");
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
  "name": "Validate the schema for oneway / round trip / multi-city routes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_CalenderPricing"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@severity\u003dblocker"
    },
    {
      "name": "@issue\u003d12"
    },
    {
      "name": "@tmsLink\u003d12"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to retrieve fares for \"DXB-MAA/MAA-DXB\", \"20-22/50-55\", \"Economy\", \"ADT-1,CHD-0,INF-0\", \"\" and \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalenderPricingSteps.callCalenderStep(String,String,String,String,String,String)"
});
formatter.write("HEADERS : {Content-Type\u003dapplication/json}");
formatter.write("ENDPONT : https://www.tajawal.ae/api/v3/flights/flight/get-fares-calender");
formatter.write("REQUEST :\n{\r\n  \"leg\" : [ {\r\n    \"originId\" : \"DXB\",\r\n    \"destinationId\" : \"MAA\",\r\n    \"departureFrom\" : \"2021-04-01\",\r\n    \"departureTo\" : \"2021-04-03\"\r\n  }, {\r\n    \"originId\" : \"MAA\",\r\n    \"destinationId\" : \"DXB\",\r\n    \"departureFrom\" : \"2021-05-01\",\r\n    \"departureTo\" : \"2021-05-06\"\r\n  } ],\r\n  \"cabin\" : \"Economy\",\r\n  \"pax\" : {\r\n    \"adult\" : 1,\r\n    \"child\" : 0,\r\n    \"infant\" : 0\r\n  },\r\n  \"stops\" : [ ],\r\n  \"airline\" : [ ]\r\n}");
formatter.write("RESPONSE :\n{\n    \"2021-04-02_2021-05-03\": {\n        \"price\": 1165,\n        \"updatedAt\": \"2020-11-22T10:55:17.146Z\"\n    },\n    \"2021-04-02_2021-05-02\": {\n        \"price\": 889,\n        \"updatedAt\": \"2021-03-02T09:35:59.775Z\"\n    },\n    \"2021-04-01_2021-05-05\": {\n        \"price\": 860.5,\n        \"updatedAt\": \"2021-03-01T18:42:55.948Z\"\n    },\n    \"2021-04-01_2021-05-01\": {\n        \"price\": 1055,\n        \"updatedAt\": \"2021-01-16T14:46:27.783Z\"\n    }\n}");
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
  "name": "Validate the schema for oneway / round trip / multi-city routes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_CalenderPricing"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@severity\u003dblocker"
    },
    {
      "name": "@issue\u003d12"
    },
    {
      "name": "@tmsLink\u003d12"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to retrieve fares for \"JED-DXB/AUH-SIN\", \"20-30/90-95\", \"Economy\", \"ADT-1,CHD-1,INF-1\", \"\" and \"EK,FZ\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalenderPricingSteps.callCalenderStep(String,String,String,String,String,String)"
});
formatter.write("HEADERS : {Content-Type\u003dapplication/json}");
formatter.write("ENDPONT : https://www.tajawal.ae/api/v3/flights/flight/get-fares-calender");
formatter.write("REQUEST :\n{\r\n  \"leg\" : [ {\r\n    \"originId\" : \"JED\",\r\n    \"destinationId\" : \"DXB\",\r\n    \"departureFrom\" : \"2021-04-01\",\r\n    \"departureTo\" : \"2021-04-11\"\r\n  }, {\r\n    \"originId\" : \"AUH\",\r\n    \"destinationId\" : \"SIN\",\r\n    \"departureFrom\" : \"2021-06-10\",\r\n    \"departureTo\" : \"2021-06-15\"\r\n  } ],\r\n  \"cabin\" : \"Economy\",\r\n  \"pax\" : {\r\n    \"adult\" : 1,\r\n    \"child\" : 1,\r\n    \"infant\" : 1\r\n  },\r\n  \"stops\" : [ ],\r\n  \"airline\" : [ \"EK\", \"FZ\" ]\r\n}");
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