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
formatter.uri("file:src/main/resources/features/HotelDetails.feature");
formatter.feature({
  "name": "As a user i want to fetch Hotel Details for a given city",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify the valid image display to each hotel in response",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@issue\u003d1"
    },
    {
      "name": "@tmsLink\u003d1"
    },
    {
      "name": "@severiy\u003dblocker"
    }
  ]
});
formatter.step({
  "name": "I want fetch the hotel details for the \"\u003cCITY\u003e\" with \"\u003cPAGE_SIZE\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Validate response status code as \"200\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Validate the image appearing for each hotel",
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
        "PAGE_SIZE"
      ]
    },
    {
      "cells": [
        "DUBAI",
        "10"
      ]
    },
    {
      "cells": [
        "DELHI",
        ""
      ]
    },
    {
      "cells": [
        "LONDON",
        "5"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the valid image display to each hotel in response",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@issue\u003d1"
    },
    {
      "name": "@tmsLink\u003d1"
    },
    {
      "name": "@severiy\u003dblocker"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want fetch the hotel details for the \"DUBAI\" with \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
formatter.write("GET URL : https://www.tajawal.ae/api/enigma/content/hotels/summaries?query\u003dDUBAI\u0026pageSize\u003d10");
formatter.write("HEADERS : {token\u003ds73827732j9$872u3lkNp}");
formatter.write("{\n    \"sortBy\": \"priority\",\n    \"distanceShow\": true,\n    \"countryCode\": \"AE\",\n    \"hotels\": {\n        \"1014668\": {\n            \"atgHotelId\": 1014668,\n            \"chainBrandId\": 109,\n            \"hotelChainId\": 15,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Holiday Inn Express Dubai Safa Park\",\n                \"ar\": \"هوليداي إن اكسبرس دبي- حديقة الصفا\"\n            },\n            \"starRating\": 2,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4020941/asd_1.jpg\",\n            \"area\": null,\n            \"rank\": 1997,\n            \"longitude\": 55.255155644757224,\n            \"latitude\": 25.188708108800128,\n            \"distance\": 2.4,\n            \"distanceInMeters\": 2386.7,\n            \"address\": {\n                \"en\": \"Sheikh Zayed Road, Al Wasl, Dubai, United Arab Emirates\",\n                \"ar\": \"شارع الشيخ زايد, الوصل‎, دبي, الإمارات العربية المتحدة\"\n            },\n            \"distanceScore\": 0.946962,\n            \"priorityScore\": 0.9985,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                38,\n                54,\n                55,\n                59,\n                63,\n                65,\n                67,\n                69,\n                70,\n                77,\n                80,\n                85,\n                87,\n                94,\n                97,\n                99,\n                100,\n                101,\n                122,\n                8000,\n                8001,\n                8002,\n                8004,\n                8005,\n                8006,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8013,\n                8014,\n                8015,\n                8016,\n                8017,\n                8020,\n                8021,\n                8023,\n                8024,\n                8025\n            ],\n            \"review\": {\n                \"hotelId\": 1014668,\n                \"count\": 2953,\n                \"name\": \"Holiday Inn Express Dubai Safa Park\",\n                \"sourcesCount\": 33,\n                \"score\": 8.2,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1437862\": {\n            \"atgHotelId\": 1437862,\n            \"chainBrandId\": 58,\n            \"hotelChainId\": 197,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"V Hotel Dubai, Curio Collection by Hilton \",\n                \"ar\": \"في هوتل دبي، كوريو كوليكشن باي هيلتون\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/7efa7ae3-4d95-4cb3-b1c4-7a05c70357d0.JPG\",\n            \"area\": null,\n            \"rank\": 1993,\n            \"longitude\": 55.25440122420431,\n            \"latitude\": 25.184465141063814,\n            \"distance\": 2.8,\n            \"distanceInMeters\": 2797.5,\n            \"address\": {\n                \"en\": \"Al Habtoor City, Sheikh Zayed Road, Dubai, United Arab Emirates\",\n                \"ar\": \"مدينة الحبتور ، شارع الشيخ زايد ، دبي ، الإمارات العربية المتحدة\"\n            },\n            \"distanceScore\": 0.937833,\n            \"priorityScore\": 0.9965,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                4,\n                18,\n                32,\n                37,\n                38,\n                39,\n                42,\n                43,\n                44,\n                46,\n                47,\n                59,\n                60,\n                63,\n                64,\n                65,\n                66,\n                67,\n                68,\n                69,\n                70,\n                71,\n                74,\n                75,\n                77,\n                85,\n                89,\n                90,\n                92,\n                93,\n                94,\n                97,\n                99,\n                100,\n                108,\n                112,\n                117,\n                8000,\n                8002,\n                8003,\n                8005,\n                8006,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8013,\n                8014,\n                8015,\n                8016,\n                8017,\n                8018,\n                8019,\n                8020,\n                8021,\n                8023,\n                8024,\n                8025\n            ],\n            \"review\": {\n                \"hotelId\": 1437862,\n                \"count\": 2626,\n                \"name\": \"V Hotel Dubai, Curio Collection by Hilton\",\n                \"sourcesCount\": 13,\n                \"score\": 8.3,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1587023\": {\n            \"atgHotelId\": 1587023,\n            \"chainBrandId\": 109,\n            \"hotelChainId\": 15,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Holiday Inn - Dubai Festival City\",\n                \"ar\": \"هوليداي إن دبي فستيفال سيتي\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/f52df0e4-9d78-40da-b57c-6e3d0b3921be.jpg\",\n            \"area\": null,\n            \"rank\": 1994,\n            \"longitude\": 55.35814774603272,\n            \"latitude\": 25.22189891105262,\n            \"distance\": 9.0,\n            \"distanceInMeters\": 8993.5,\n            \"address\": {\n                \"en\": \"Gateway Avenue, Dubai Festival City, Dubai, United Arab Emirates\",\n                \"ar\": \"شارع البوابة ، دبي فستيفال سيتي ، دبي ، الإمارات العربية المتحدة\"\n            },\n            \"distanceScore\": 0.800144,\n            \"priorityScore\": 0.997,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                3,\n                4,\n                38,\n                39,\n                42,\n                48,\n                50,\n                51,\n                55,\n                57,\n                59,\n                63,\n                64,\n                65,\n                67,\n                68,\n                69,\n                70,\n                71,\n                74,\n                75,\n                77,\n                83,\n                85,\n                87,\n                89,\n                91,\n                92,\n                93,\n                94,\n                97,\n                99,\n                108,\n                117,\n                8000,\n                8001,\n                8002,\n                8004,\n                8005,\n                8006,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8013,\n                8014,\n                8015,\n                8016,\n                8017,\n                8020,\n                8021,\n                8022,\n                8023,\n                8024,\n                8025\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1448462\": {\n            \"atgHotelId\": 1448462,\n            \"chainBrandId\": 241,\n            \"hotelChainId\": 13,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Address Downtown \",\n                \"ar\": \"العنوان داونتاون\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/207bf34f-a17f-4441-9f1b-e0bc2592ea13.jpg\",\n            \"area\": {\n                \"id\": 59,\n                \"nameEn\": \"Downtown Dubai\",\n                \"nameAr\": \"وسط مدينة دبي\"\n            },\n            \"rank\": 1995,\n            \"longitude\": 55.27907066472386,\n            \"latitude\": 25.193634527479862,\n            \"distance\": 1.5,\n            \"distanceInMeters\": 1500.6,\n            \"address\": {\n                \"en\": \"Sheikh Mohamed Bin Rashid Boulevard, Downtown , PO Box 123234, Downtown Dubai, Dubai, United \",\n                \"ar\": \"بوليفارد الشيخ محمد بن راشد، وسط المدينة، صندوق بريد 123234، وسط مدينة دبي، دبي، الولايات المتحدة\"\n            },\n            \"distanceScore\": 0.966653,\n            \"priorityScore\": 0.9975,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                38,\n                39,\n                40,\n                42,\n                43,\n                46,\n                54,\n                55,\n                57,\n                59,\n                63,\n                64,\n                65,\n                67,\n                68,\n                69,\n                70,\n                71,\n                74,\n                75,\n                77,\n                82,\n                83,\n                85,\n                87,\n                91,\n                93,\n                96,\n                97,\n                99,\n                101,\n                107,\n                108,\n                117,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1448462,\n                \"count\": 1230,\n                \"name\": \"The Address Downtown Dubai\",\n                \"sourcesCount\": 31,\n                \"score\": 9.1,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1088328\": {\n            \"atgHotelId\": 1088328,\n            \"chainBrandId\": 124,\n            \"hotelChainId\": 137,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"JA Ocean View Hotel\",\n                \"ar\": \"جيه إيه أوشن فيو هوتل\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/dd693cd6-a854-4209-8546-24c725a26581.jpg\",\n            \"area\": {\n                \"id\": 65,\n                \"nameEn\": \"Jumeirah Beach Residence\",\n                \"nameAr\": \"جميرة بيتش ريزيدنس\"\n            },\n            \"rank\": 1992,\n            \"longitude\": 55.13013721593859,\n            \"latitude\": 25.073154768947436,\n            \"distance\": 20.0,\n            \"distanceInMeters\": 20374.4,\n            \"address\": {\n                \"en\": \"The Walk, Dubai Marina, Jumeirah Beach Residence, Dubai, United Arab Emirates\",\n                \"ar\": \"الممشى, دبي مارينا, جميرا بيتش ريسيدينس, دبي, الإمارات العربية المتحدة\"\n            },\n            \"distanceScore\": 0.547236,\n            \"priorityScore\": 0.996,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                23,\n                37,\n                38,\n                40,\n                42,\n                43,\n                46,\n                49,\n                51,\n                55,\n                63,\n                65,\n                67,\n                69,\n                70,\n                77,\n                80,\n                87,\n                88,\n                97,\n                99,\n                100,\n                101,\n                103,\n                108,\n                109,\n                112,\n                125,\n                8000,\n                8002,\n                8005,\n                8006,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8014,\n                8015,\n                8016,\n                8017,\n                8018,\n                8019,\n                8020,\n                8021,\n                8023,\n                8024,\n                8025\n            ],\n            \"review\": {\n                \"hotelId\": 1088328,\n                \"count\": 5288,\n                \"name\": \"JA Ocean View Hotel\",\n                \"sourcesCount\": 23,\n                \"score\": 8.9,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1427356\": {\n            \"atgHotelId\": 1427356,\n            \"chainBrandId\": 180,\n            \"hotelChainId\": 19,\n            \"propertyTypeId\": 15,\n            \"name\": {\n                \"en\": \"Emirates Grand Hotel Apartments\",\n                \"ar\": \"جراند الإمارات للشقق الفندقية\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/51ea9945-d3b8-49e3-8f14-afbbbcc52014.jpg\",\n            \"area\": {\n                \"id\": 33,\n                \"nameEn\": \"Trade Center\",\n                \"nameAr\": \"المركز التجاري\"\n            },\n            \"rank\": 1996,\n            \"longitude\": 55.2741302806278,\n            \"latitude\": 25.211431526149486,\n            \"distance\": 0.81,\n            \"distanceInMeters\": 806.5,\n            \"address\": {\n                \"en\": \"Sheikh Zayed Road, Trade Center District, Dubai, United Arab Emirates\",\n                \"ar\": \"شارع الشيخ زايد, منطقة المركز التجاري, دبي, الإمارات العربية المتحدة\"\n            },\n            \"distanceScore\": 0.982078,\n            \"priorityScore\": 0.998,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                3,\n                4,\n                38,\n                59,\n                63,\n                64,\n                65,\n                67,\n                68,\n                69,\n                74,\n                77,\n                85,\n                87,\n                89,\n                91,\n                92,\n                93,\n                94,\n                97,\n                99,\n                101,\n                107,\n                117,\n                8000,\n                8002,\n                8004,\n                8005,\n                8006,\n                8007,\n                8008,\n                8011,\n                8012,\n                8013,\n                8014,\n                8015,\n                8016,\n                8017,\n                8021,\n                8023,\n                8024,\n                8025\n            ],\n            \"review\": {\n                \"hotelId\": 1427356,\n                \"count\": 4331,\n                \"name\": \"Emirates Grand Hotel Apartments\",\n                \"sourcesCount\": 10,\n                \"score\": 6.9,\n                \"scoreDescription\": {\n                    \"en\": \"Good\",\n                    \"ar\": \"جيد\"\n                },\n                \"scoreColor\": \"#A1CC4F\"\n            },\n            \"topPicks\": null\n        },\n        \"1133211\": {\n            \"atgHotelId\": 1133211,\n            \"chainBrandId\": 163,\n            \"hotelChainId\": 119,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Anantara The Palm Dubai Resort\",\n                \"ar\": \"أنتارا ذا بالم دبي ريزورت\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/ebd4eb60-4746-4a01-9fac-a948106b1215.jpg\",\n            \"area\": {\n                \"id\": 6,\n                \"nameEn\": \"Palm Jumeirah\",\n                \"nameAr\": \"نخلة جميرا\"\n            },\n            \"rank\": 1999,\n            \"longitude\": 55.15314692930883,\n            \"latitude\": 25.129476849583433,\n            \"distance\": 15.0,\n            \"distanceInMeters\": 14509.3,\n            \"address\": {\n                \"en\": \"East Crescent, The Palm Jumeirah, 71607 Dubai, United Arab Emirates\",\n                \"ar\": \"الهلال الشرقي ، نخلة جميرا ، 71607 دبي ، الإمارات العربية المتحدة\"\n            },\n            \"distanceScore\": 0.677571,\n            \"priorityScore\": 0.9995,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                6,\n                32,\n                42,\n                44,\n                49,\n                51,\n                54,\n                55,\n                63,\n                65,\n                67,\n                70,\n                76,\n                77,\n                82,\n                85,\n                87,\n                94,\n                97,\n                98,\n                101,\n                103,\n                108,\n                109,\n                110,\n                120,\n                8000,\n                8002,\n                8003,\n                8004,\n                8005,\n                8006,\n                8007,\n                8008,\n                8009,\n                8011,\n                8012,\n                8013,\n                8014,\n                8015,\n                8016,\n                8017,\n                8018,\n                8020,\n                8021,\n                8022,\n                8023,\n                8024,\n                8025\n            ],\n            \"review\": {\n                \"hotelId\": 1133211,\n                \"count\": 9430,\n                \"name\": \"Sofitel Dubai The Palm Resort \u0026 Spa\",\n                \"sourcesCount\": 23,\n                \"score\": 9.0,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1469530\": {\n            \"atgHotelId\": 1469530,\n            \"chainBrandId\": 131,\n            \"hotelChainId\": 186,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Kempinski Hotel Mall of the Emirates\",\n                \"ar\": \"فندق كمبينسكي مول الإمارات \"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/7122369/al_mosafer_1.jpg\",\n            \"area\": {\n                \"id\": 32,\n                \"nameEn\": \"Al Barsha 1\",\n                \"nameAr\": \"البرشاء 1\"\n            },\n            \"rank\": 2000,\n            \"longitude\": 55.197505394887436,\n            \"latitude\": 25.11900510118507,\n            \"distance\": 12.0,\n            \"distanceInMeters\": 12066.1,\n            \"address\": {\n                \"en\": \"Sheikh Zayed Road, Al Barsha, Dubai, United Arab Emirates\",\n                \"ar\": \"شارع الشيخ زايد, البرشاء‎, دبي, الإمارات العربية المتحدة\"\n            },\n            \"distanceScore\": 0.731864,\n            \"priorityScore\": 1.0,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                17,\n                23,\n                27,\n                32,\n                37,\n                38,\n                46,\n                48,\n                54,\n                55,\n                59,\n                60,\n                63,\n                64,\n                65,\n                67,\n                68,\n                69,\n                70,\n                71,\n                74,\n                75,\n                77,\n                80,\n                85,\n                87,\n                89,\n                91,\n                93,\n                94,\n                96,\n                97,\n                99,\n                100,\n                108,\n                109,\n                112,\n                114,\n                117,\n                8000,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8014,\n                8015,\n                8017,\n                8018,\n                8020,\n                8021,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1469530,\n                \"count\": 4633,\n                \"name\": \"Kempinski Hotel Mall of the Emirates Dubai\",\n                \"sourcesCount\": 32,\n                \"score\": 9.1,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1417225\": {\n            \"atgHotelId\": 1417225,\n            \"chainBrandId\": 106,\n            \"hotelChainId\": 197,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Hilton Dubai Al Habtoor City \",\n                \"ar\": \"هيلتون دبي مدينة الحبتور \"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/72cf5371-5bb2-4835-8d15-409e719f7c0d.jpg\",\n            \"area\": null,\n            \"rank\": 1998,\n            \"longitude\": 55.255024526920806,\n            \"latitude\": 25.18468323826599,\n            \"distance\": 2.7,\n            \"distanceInMeters\": 2746.9,\n            \"address\": {\n                \"en\": \"Al Habtoor City, Sheikh Zayed Road, Dubai, United Arab Emirates\",\n                \"ar\": \"مدينة الحبتور ، شارع الشيخ زايد ، دبي ، الإمارات العربية المتحدة\"\n            },\n            \"distanceScore\": 0.938958,\n            \"priorityScore\": 0.999,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                37,\n                38,\n                42,\n                43,\n                44,\n                46,\n                49,\n                51,\n                55,\n                57,\n                63,\n                65,\n                67,\n                70,\n                75,\n                76,\n                77,\n                80,\n                85,\n                87,\n                94,\n                97,\n                100,\n                103,\n                109,\n                120,\n                8000,\n                8002,\n                8003,\n                8004,\n                8005,\n                8006,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8013,\n                8014,\n                8016,\n                8017,\n                8018,\n                8019,\n                8020,\n                8021,\n                8022,\n                8023,\n                8024,\n                8025\n            ],\n            \"review\": {\n                \"hotelId\": 1417225,\n                \"count\": 3297,\n                \"name\": \"Hilton Dubai Al Habtoor City\",\n                \"sourcesCount\": 11,\n                \"score\": 8.2,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1014691\": {\n            \"atgHotelId\": 1014691,\n            \"chainBrandId\": 200,\n            \"hotelChainId\": 188,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Ramada Downtown Dubai\",\n                \"ar\": \"رامادا داون تاون دبي\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/1093d05c-6e37-4080-a37d-ba665e88a482.jpg\",\n            \"area\": {\n                \"id\": 59,\n                \"nameEn\": \"Downtown Dubai\",\n                \"nameAr\": \"وسط مدينة دبي\"\n            },\n            \"rank\": 1991,\n            \"longitude\": 55.27254457118124,\n            \"latitude\": 25.193568016870067,\n            \"distance\": 1.3,\n            \"distanceInMeters\": 1267.3000000000002,\n            \"address\": {\n                \"en\": \"Boulevard Street Downtown Burj Khalifa, Downtown Dubai, Dubai, United Arab Emirates\",\n                \"ar\": \"شارع للبوليفارد وسط مدينة - برج خليفة, وسط مدينة دبي, دبي, الإمارات العربية المتحدة\"\n            },\n            \"distanceScore\": 0.971838,\n            \"priorityScore\": 0.9955,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                38,\n                42,\n                51,\n                55,\n                57,\n                59,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                77,\n                80,\n                82,\n                85,\n                87,\n                94,\n                97,\n                98,\n                99,\n                100,\n                101,\n                103,\n                108,\n                125,\n                8000,\n                8002,\n                8003,\n                8004,\n                8005,\n                8006,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8013,\n                8014,\n                8015,\n                8016,\n                8017,\n                8020,\n                8021,\n                8022,\n                8023,\n                8024,\n                8025\n            ],\n            \"review\": {\n                \"hotelId\": 1014691,\n                \"count\": 4928,\n                \"name\": \"Ramada Downtown Dubai\",\n                \"sourcesCount\": 23,\n                \"score\": 8.2,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        }\n    },\n    \"distanceDetails\": {\n        \"en\": \" km from city center of Dubai\",\n        \"ar\": \" كم من مركز مدينة ‬دبي\"\n    },\n    \"pagination\": {\n        \"nextPageId\": \"CwEBAAwBAcYb9ABxNDlADoTYr9io2YpEdWJh6WxvY2FsaXT5Ad8owwKpoktAARQBFAGQvwUBAAEA\",\n        \"pageNo\": 1,\n        \"pageSize\": 10,\n        \"totalResultsCount\": 1682\n    },\n    \"geoCoordinate\": {\n        \"latitude\": 25.2048493,\n        \"longitude\": 55.2707828,\n        \"radiusInMeters\": 45000\n    }\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the image appearing for each hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateTheHotelImage()"
});
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/51ea9945-d3b8-49e3-8f14-afbbbcc52014.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/ebd4eb60-4746-4a01-9fac-a948106b1215.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4020941/asd_1.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/72cf5371-5bb2-4835-8d15-409e719f7c0d.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/72cf5371-5bb2-4835-8d15-409e719f7c0d.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/51ea9945-d3b8-49e3-8f14-afbbbcc52014.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/ebd4eb60-4746-4a01-9fac-a948106b1215.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/f52df0e4-9d78-40da-b57c-6e3d0b3921be.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/207bf34f-a17f-4441-9f1b-e0bc2592ea13.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/7efa7ae3-4d95-4cb3-b1c4-7a05c70357d0.JPG");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/f52df0e4-9d78-40da-b57c-6e3d0b3921be.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/207bf34f-a17f-4441-9f1b-e0bc2592ea13.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/7efa7ae3-4d95-4cb3-b1c4-7a05c70357d0.JPG");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/7122369/al_mosafer_1.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/1093d05c-6e37-4080-a37d-ba665e88a482.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/1093d05c-6e37-4080-a37d-ba665e88a482.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4020941/asd_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/7122369/al_mosafer_1.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/dd693cd6-a854-4209-8546-24c725a26581.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/dd693cd6-a854-4209-8546-24c725a26581.jpg");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the valid image display to each hotel in response",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@issue\u003d1"
    },
    {
      "name": "@tmsLink\u003d1"
    },
    {
      "name": "@severiy\u003dblocker"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want fetch the hotel details for the \"DELHI\" with \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
formatter.write("GET URL : https://www.tajawal.ae/api/enigma/content/hotels/summaries?query\u003dDELHI");
formatter.write("HEADERS : {token\u003ds73827732j9$872u3lkNp}");
formatter.write("{\n    \"sortBy\": \"priority\",\n    \"distanceShow\": true,\n    \"countryCode\": \"IN\",\n    \"hotels\": {\n        \"1361686\": {\n            \"atgHotelId\": 1361686,\n            \"chainBrandId\": 238,\n            \"hotelChainId\": 69,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Vivanta Dwarka, New Delhi\",\n                \"ar\": \"فيفانتا دواركا، نيو دلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6047924/z_1.jpg\",\n            \"area\": {\n                \"id\": 10290,\n                \"nameEn\": \"South West\",\n                \"nameAr\": \"الجنوب الغربي\"\n            },\n            \"rank\": 817,\n            \"longitude\": 77.063254,\n            \"latitude\": 28.559364,\n            \"distance\": 21.0,\n            \"distanceInMeters\": 20948.0,\n            \"address\": {\n                \"en\": \"Metro Station Complex, Sector - 21, Dwarka, 110075 New Delhi, India\",\n                \"ar\": \"Metro Station Complex, Sector - 21, Dwarka, 110075  (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.534489,\n            \"priorityScore\": 0.4085,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                37,\n                38,\n                40,\n                42,\n                43,\n                46,\n                51,\n                54,\n                55,\n                57,\n                63,\n                65,\n                67,\n                69,\n                70,\n                77,\n                80,\n                85,\n                87,\n                94,\n                97,\n                99,\n                103,\n                108,\n                109,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1361686,\n                \"count\": 11158,\n                \"name\": \"Vivanta Dwarka, New Delhi\",\n                \"sourcesCount\": 17,\n                \"score\": 8.9,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1399958\": {\n            \"atgHotelId\": 1399958,\n            \"chainBrandId\": 138,\n            \"hotelChainId\": 168,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Le Méridien Gurgaon, Delhi NCR\",\n                \"ar\": \"لو ميريديان جورجاون، ديلهي إن سي آر\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/4000000/3850000/3844100/3844019/4c19e573_z.jpg\",\n            \"area\": {\n                \"id\": 11762,\n                \"nameEn\": \"DLF Phase 3\",\n                \"nameAr\": \"دي إل إف المرحلة الثالثة\"\n            },\n            \"rank\": 801,\n            \"longitude\": 77.10882,\n            \"latitude\": 28.482354,\n            \"distance\": 25.0,\n            \"distanceInMeters\": 25222.5,\n            \"address\": {\n                \"en\": \"Sector 26, M.G. Road, Delhi-Gurgaon Border\",\n                \"ar\": \"Sector 26, M.G. Road, Delhi-Gurgaon Border\"\n            },\n            \"distanceScore\": 0.4395,\n            \"priorityScore\": 0.4005,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                6,\n                23,\n                37,\n                38,\n                42,\n                43,\n                46,\n                49,\n                51,\n                55,\n                57,\n                62,\n                63,\n                65,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                82,\n                85,\n                94,\n                97,\n                101,\n                103,\n                108,\n                109,\n                112,\n                120,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1399958,\n                \"count\": 4695,\n                \"name\": \"Le Meridien Gurgaon, Delhi NCR\",\n                \"sourcesCount\": 28,\n                \"score\": 8.8,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1037833\": {\n            \"atgHotelId\": 1037833,\n            \"chainBrandId\": 198,\n            \"hotelChainId\": 85,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Radisson Blu Plaza Delhi Airport\",\n                \"ar\": \"راديسون بلو بالازا ديلهي أيربورت\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4106247/1_17.jpg\",\n            \"area\": {\n                \"id\": 10290,\n                \"nameEn\": \"South West\",\n                \"nameAr\": \"الجنوب الغربي\"\n            },\n            \"rank\": 799,\n            \"longitude\": 77.119533,\n            \"latitude\": 28.543977,\n            \"distance\": 19.0,\n            \"distanceInMeters\": 18713.0,\n            \"address\": {\n                \"en\": \"National Highway #8 Opp International Airport Near Mahipalpur Extension, Mahipalpur, 110037 New Delhi, India\",\n                \"ar\": \"(نيو دلهي, الهند)  National Highway #8 Opp International Airport Near Mahipalpur Extension, Mahipalpur, 110037\"\n            },\n            \"distanceScore\": 0.584156,\n            \"priorityScore\": 0.3995,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                37,\n                38,\n                40,\n                42,\n                43,\n                44,\n                46,\n                51,\n                55,\n                57,\n                66,\n                67,\n                69,\n                70,\n                75,\n                76,\n                77,\n                80,\n                85,\n                87,\n                94,\n                97,\n                101,\n                103,\n                108,\n                120,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1037833,\n                \"count\": 8565,\n                \"name\": \"Radisson Blue Plaza Delhi Airport\",\n                \"sourcesCount\": 23,\n                \"score\": 8.7,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1026567\": {\n            \"atgHotelId\": 1026567,\n            \"chainBrandId\": 175,\n            \"hotelChainId\": 83,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Maidens Hotel, Delhi\",\n                \"ar\": \"ميدينز هوتل، دلهي\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/20000/14700/14700/6031a8e6_b.jpg\",\n            \"area\": {\n                \"id\": 12514,\n                \"nameEn\": \"Civil Lines\",\n                \"nameAr\": \"سيفيل لاينز\"\n            },\n            \"rank\": 790,\n            \"longitude\": 77.226047,\n            \"latitude\": 28.67482,\n            \"distance\": 1.3,\n            \"distanceInMeters\": 1340.2,\n            \"address\": {\n                \"en\": \"7 Sham Nath Marg\",\n                \"ar\": \"7 Sham Nath Marg\"\n            },\n            \"distanceScore\": 0.970218,\n            \"priorityScore\": 0.395,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                38,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                67,\n                70,\n                76,\n                80,\n                82,\n                85,\n                97,\n                99,\n                101,\n                103,\n                108,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026567,\n                \"count\": 1056,\n                \"name\": \"Maidens Hotel\",\n                \"sourcesCount\": 31,\n                \"score\": 9.1,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1026564\": {\n            \"atgHotelId\": 1026564,\n            \"chainBrandId\": 62,\n            \"hotelChainId\": 168,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"The Park New Delhi\",\n                \"ar\": \"ذا بارك نيودلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4061974/0_1.jpg\",\n            \"area\": {\n                \"id\": 11751,\n                \"nameEn\": \"Connaught Place\",\n                \"nameAr\": \"كونوت بليس\"\n            },\n            \"rank\": 782,\n            \"longitude\": 77.216378,\n            \"latitude\": 28.628805,\n            \"distance\": 6.4,\n            \"distanceInMeters\": 6413.8,\n            \"address\": {\n                \"en\": \"15 Parliament Street, Near Connaught Place, Connaught Place, 110001 New Delhi, India\",\n                \"ar\": \"(نيو دلهي, الهند)  15 Parliament Street, Near Connaught Place, Connaught Place, 110001\"\n            },\n            \"distanceScore\": 0.857471,\n            \"priorityScore\": 0.391,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                23,\n                37,\n                40,\n                42,\n                43,\n                46,\n                55,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                77,\n                80,\n                85,\n                87,\n                94,\n                97,\n                99,\n                103,\n                108,\n                109,\n                120,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026564,\n                \"count\": 3507,\n                \"name\": \"The Park New Delhi\",\n                \"sourcesCount\": 31,\n                \"score\": 7.6,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1026563\": {\n            \"atgHotelId\": 1026563,\n            \"chainBrandId\": 180,\n            \"hotelChainId\": 19,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"The Claridges New Delhi\",\n                \"ar\": \"ذا كلاريدجز نيودلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4061970/0_1.jpg\",\n            \"area\": null,\n            \"rank\": 806,\n            \"longitude\": 77.216803,\n            \"latitude\": 28.600216,\n            \"distance\": 9.6,\n            \"distanceInMeters\": 9584.300000000001,\n            \"address\": {\n                \"en\": \"12 Dr APJ Abdul Kalam New Delhi - 110011 , 110011 New Delhi, India\",\n                \"ar\": \"12 Dr APJ Abdul Kalam New Delhi - 110011 , 110011 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.787016,\n            \"priorityScore\": 0.403,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                42,\n                46,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                77,\n                80,\n                82,\n                84,\n                85,\n                87,\n                88,\n                97,\n                98,\n                99,\n                100,\n                101,\n                103,\n                108,\n                120,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026563,\n                \"count\": 4864,\n                \"name\": \"The Claridges Hotel New Delhi\",\n                \"sourcesCount\": 32,\n                \"score\": 8.8,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1159709\": {\n            \"atgHotelId\": 1159709,\n            \"chainBrandId\": 109,\n            \"hotelChainId\": 15,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Holiday Inn New Delhi International Airport\",\n                \"ar\": \"هوليداي إن نيودلهي إنترناشيونال إيربورت\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4639313/1_1.jpg\",\n            \"area\": {\n                \"id\": 10290,\n                \"nameEn\": \"South West\",\n                \"nameAr\": \"الجنوب الغربي\"\n            },\n            \"rank\": 799,\n            \"longitude\": 77.123357,\n            \"latitude\": 28.550044,\n            \"distance\": 18.0,\n            \"distanceInMeters\": 17943.0,\n            \"address\": {\n                \"en\": \"Asset Area 12, Hospitality District, Aerocity, Delhi International Airport, 110037 New Delhi, India\",\n                \"ar\": \"(نيو دلهي, الهند)  Asset Area 12, Hospitality District, Aerocity, Delhi International Airport, 110037\"\n            },\n            \"distanceScore\": 0.601267,\n            \"priorityScore\": 0.3995,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                37,\n                38,\n                40,\n                42,\n                43,\n                46,\n                49,\n                54,\n                55,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                85,\n                88,\n                97,\n                99,\n                103,\n                108,\n                120,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8016,\n                8017,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1159709,\n                \"count\": 7253,\n                \"name\": \"Holiday Inn New Delhi International Airport\",\n                \"sourcesCount\": 18,\n                \"score\": 8.7,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1437080\": {\n            \"atgHotelId\": 1437080,\n            \"chainBrandId\": 189,\n            \"hotelChainId\": 135,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"WelcomHotel Dwarka - Member ITC Hotel Group\",\n                \"ar\": \"ويلكوم هوتل دواركا - ميمبر آي تي سي هوتل غروب\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6691360/0_1.jpg\",\n            \"area\": {\n                \"id\": 12477,\n                \"nameEn\": \"Dwarka\",\n                \"nameAr\": \"دواركا\"\n            },\n            \"rank\": 799,\n            \"longitude\": 77.056767,\n            \"latitude\": 28.578991,\n            \"distance\": 20.0,\n            \"distanceInMeters\": 20047.7,\n            \"address\": {\n                \"en\": \"Plot No 3, District Centre, Sector 10, Dwarka, Dwarka, 110075 New Delhi, India\",\n                \"ar\": \"(نيو دلهي, الهند)  Plot No 3, District Centre, Sector 10, Dwarka, Dwarka, 110075\"\n            },\n            \"distanceScore\": 0.554496,\n            \"priorityScore\": 0.3995,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                37,\n                38,\n                40,\n                42,\n                51,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                82,\n                85,\n                87,\n                94,\n                97,\n                98,\n                99,\n                100,\n                101,\n                103,\n                108,\n                120,\n                122,\n                125,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011\n            ],\n            \"review\": {\n                \"hotelId\": 1437080,\n                \"count\": 8440,\n                \"name\": \"WelcomHotel Dwarka\",\n                \"sourcesCount\": 21,\n                \"score\": 8.2,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1407515\": {\n            \"atgHotelId\": 1407515,\n            \"chainBrandId\": 57,\n            \"hotelChainId\": 15,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Crowne Plaza New Delhi Mayur Vihar Noida\",\n                \"ar\": \"كرون بلازا نيو ديلهي مايور فيهار نويدا\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6430691/0_1.jpg\",\n            \"area\": {\n                \"id\": 12449,\n                \"nameEn\": \"Mayur Vihar Phase 1\",\n                \"nameAr\": \"مايور فيار المرحلة الأولى\"\n            },\n            \"rank\": 800,\n            \"longitude\": 77.298206,\n            \"latitude\": 28.5896,\n            \"distance\": 13.0,\n            \"distanceInMeters\": 13087.1,\n            \"address\": {\n                \"en\": \"13 B Mayur Vihar, District Centre, Mayur Vihar Phase 1, 110091 New Delhi, India\",\n                \"ar\": \"13 B Mayur Vihar, District Centre, Mayur Vihar Phase 1, 110091 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.709176,\n            \"priorityScore\": 0.4,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                37,\n                38,\n                42,\n                46,\n                49,\n                54,\n                55,\n                57,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                77,\n                85,\n                87,\n                94,\n                97,\n                98,\n                99,\n                101,\n                103,\n                108,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1407515,\n                \"count\": 3997,\n                \"name\": \"Crowne Plaza New Delhi Mayur Vihar Noida\",\n                \"sourcesCount\": 16,\n                \"score\": 8.6,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1426694\": {\n            \"atgHotelId\": 1426694,\n            \"chainBrandId\": 180,\n            \"hotelChainId\": 19,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Pride Plaza Hotel Aerocity New Delhi\",\n                \"ar\": \"برايد بلازا هوتل أيروسيتي نيو ديلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6592222/al_mosafer_1.jpg\",\n            \"area\": {\n                \"id\": 10290,\n                \"nameEn\": \"South West\",\n                \"nameAr\": \"الجنوب الغربي\"\n            },\n            \"rank\": 799,\n            \"longitude\": 77.121148,\n            \"latitude\": 28.549219,\n            \"distance\": 18.0,\n            \"distanceInMeters\": 18136.5,\n            \"address\": {\n                \"en\": \"Asset 5-A, Hospitality District, Aerocity, Indra Gandhi International Airport, 110037 New Delhi, India\",\n                \"ar\": \"Asset 5-A, Hospitality District, Aerocity, Indra Gandhi International Airport, 110037 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.596967,\n            \"priorityScore\": 0.3995,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                42,\n                54,\n                55,\n                57,\n                63,\n                65,\n                67,\n                69,\n                70,\n                76,\n                77,\n                85,\n                94,\n                97,\n                99,\n                103,\n                108,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011\n            ],\n            \"review\": {\n                \"hotelId\": 1426694,\n                \"count\": 6902,\n                \"name\": \"The Pride Plaza Hotel\",\n                \"sourcesCount\": 15,\n                \"score\": 8.2,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1256838\": {\n            \"atgHotelId\": 1256838,\n            \"chainBrandId\": 235,\n            \"hotelChainId\": 91,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Lemon Tree Premier, Delhi Airport\",\n                \"ar\": \"ليمون تري بريمير، مطار دلهي\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/5059996/sddd.jpg\",\n            \"area\": {\n                \"id\": 10290,\n                \"nameEn\": \"South West\",\n                \"nameAr\": \"الجنوب الغربي\"\n            },\n            \"rank\": 785,\n            \"longitude\": 77.120434,\n            \"latitude\": 28.552061,\n            \"distance\": 18.0,\n            \"distanceInMeters\": 17910.0,\n            \"address\": {\n                \"en\": \"Asset No. 6, Aerocity Hospitality District, Indira Gandhi International Airport, 110037 New Delhi, India\",\n                \"ar\": \"Asset No. 6, Aerocity Hospitality District, Indira Gandhi International Airport, 110037  (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.602,\n            \"priorityScore\": 0.3925,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                42,\n                54,\n                55,\n                57,\n                65,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                85,\n                87,\n                97,\n                101,\n                103,\n                108,\n                109,\n                8000,\n                8007,\n                8008,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1256838,\n                \"count\": 5328,\n                \"name\": \"Lemon Tree Premier Delhi Airport\",\n                \"sourcesCount\": 19,\n                \"score\": 8.2,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1026581\": {\n            \"atgHotelId\": 1026581,\n            \"chainBrandId\": 107,\n            \"hotelChainId\": 197,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Hilton Garden Inn New Delhi/Saket\",\n                \"ar\": \"نزل هيلتون غاردن نيودلهي/ساكيت\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062029/0_1.jpg\",\n            \"area\": null,\n            \"rank\": 788,\n            \"longitude\": 77.216214,\n            \"latitude\": 28.528215,\n            \"distance\": 18.0,\n            \"distanceInMeters\": 17588.8,\n            \"address\": {\n                \"en\": \"A4, DLF PLace Saket District Centre, Saket, 110017 New Delhi, India\",\n                \"ar\": \"(نيو دلهي, الهند)  A4, DLF PLace Saket District Centre, Saket, 110017\"\n            },\n            \"distanceScore\": 0.609138,\n            \"priorityScore\": 0.394,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                38,\n                51,\n                54,\n                55,\n                57,\n                59,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                77,\n                85,\n                94,\n                97,\n                99,\n                101,\n                103,\n                108,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026581,\n                \"count\": 1156,\n                \"name\": \"Hilton Garden Inn New Delhi / Saket\",\n                \"sourcesCount\": 18,\n                \"score\": 8.4,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1026706\": {\n            \"atgHotelId\": 1026706,\n            \"chainBrandId\": 180,\n            \"hotelChainId\": 19,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Jaypee Vasant Continental\",\n                \"ar\": \"جايبي فاسانت كونتننتال\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062303/3_1.jpg\",\n            \"area\": {\n                \"id\": 12521,\n                \"nameEn\": \"Vasant Vihar\",\n                \"nameAr\": \"فاسانت فيهار\"\n            },\n            \"rank\": 785,\n            \"longitude\": 77.163953,\n            \"latitude\": 28.556207,\n            \"distance\": 16.0,\n            \"distanceInMeters\": 15529.5,\n            \"address\": {\n                \"en\": \"Vasant Vihar, 110057 New Delhi, India\",\n                \"ar\": \"Vasant Vihar, 110057 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.6549,\n            \"priorityScore\": 0.3925,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                23,\n                37,\n                40,\n                42,\n                43,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                75,\n                77,\n                82,\n                85,\n                87,\n                94,\n                98,\n                99,\n                101,\n                108,\n                120,\n                8002,\n                8007,\n                8009,\n                8010,\n                8011\n            ],\n            \"review\": {\n                \"hotelId\": 1026706,\n                \"count\": 886,\n                \"name\": \"Jaypee Vasant Continental\",\n                \"sourcesCount\": 20,\n                \"score\": 8.1,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1026576\": {\n            \"atgHotelId\": 1026576,\n            \"chainBrandId\": 238,\n            \"hotelChainId\": 69,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"The Taj Mahal Hotel\",\n                \"ar\": \"ذا تاج ماهال هوتل\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062009/almosafer_1.jpg\",\n            \"area\": null,\n            \"rank\": 804,\n            \"longitude\": 77.224228,\n            \"latitude\": 28.604728,\n            \"distance\": 9.1,\n            \"distanceInMeters\": 9073.2,\n            \"address\": {\n                \"en\": \"No 1 Mansingh Road, 110011 New Delhi, India\",\n                \"ar\": \"No 1 Mansingh Road, 110011 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.798373,\n            \"priorityScore\": 0.402,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                37,\n                38,\n                40,\n                42,\n                43,\n                44,\n                46,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                75,\n                76,\n                77,\n                80,\n                82,\n                85,\n                87,\n                94,\n                97,\n                98,\n                99,\n                101,\n                103,\n                108,\n                120,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026576,\n                \"count\": 11340,\n                \"name\": \"Taj Mahal Hotel, New Delhi\",\n                \"sourcesCount\": 26,\n                \"score\": 9.1,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1106738\": {\n            \"atgHotelId\": 1106738,\n            \"chainBrandId\": 90,\n            \"hotelChainId\": 50,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Fraser Suites New Delhi\",\n                \"ar\": \"فراسير سويتس نيو دلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4400691/almosafer_1.jpg\",\n            \"area\": {\n                \"id\": 12449,\n                \"nameEn\": \"Mayur Vihar Phase 1\",\n                \"nameAr\": \"مايور فيار المرحلة الأولى\"\n            },\n            \"rank\": 784,\n            \"longitude\": 77.29908,\n            \"latitude\": 28.60012,\n            \"distance\": 12.0,\n            \"distanceInMeters\": 12196.5,\n            \"address\": {\n                \"en\": \"Plot No-4A,District Center, Mayur Vihar Phase 1, 110091 New Delhi, India\",\n                \"ar\": \"Plot No-4A,District Center, Mayur Vihar Phase 1, 110091 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.728967,\n            \"priorityScore\": 0.392,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                6,\n                37,\n                38,\n                40,\n                42,\n                44,\n                46,\n                49,\n                54,\n                55,\n                57,\n                59,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                77,\n                80,\n                82,\n                84,\n                85,\n                94,\n                97,\n                98,\n                99,\n                100,\n                101,\n                103,\n                108,\n                122,\n                125,\n                8007,\n                8008,\n                8011\n            ],\n            \"review\": {\n                \"hotelId\": 1106738,\n                \"count\": 3051,\n                \"name\": \"Fraser Suites New Delhi\",\n                \"sourcesCount\": 23,\n                \"score\": 8.2,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1106745\": {\n            \"atgHotelId\": 1106745,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Four Points by Sheraton New Delhi, Airport Highway\",\n                \"ar\": \"فور بوينتس باي شيراتون نيودلهي، إيربورت هاي واي\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4400698/a_1.jpg\",\n            \"area\": {\n                \"id\": 10290,\n                \"nameEn\": \"South West\",\n                \"nameAr\": \"الجنوب الغربي\"\n            },\n            \"rank\": 788,\n            \"longitude\": 77.100117,\n            \"latitude\": 28.528562,\n            \"distance\": 21.0,\n            \"distanceInMeters\": 21186.3,\n            \"address\": {\n                \"en\": \"Plot  9, Samalka, National Highway- 8, 110037 New Delhi, India\",\n                \"ar\": \"Plot  9, Samalka, National Highway- 8, 110037 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.529193,\n            \"priorityScore\": 0.394,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                24,\n                38,\n                51,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                82,\n                85,\n                94,\n                97,\n                99,\n                103,\n                108,\n                120,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8016,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1106745,\n                \"count\": 1054,\n                \"name\": \"Four Points by Sheraton New Delhi, Airport Highway\",\n                \"sourcesCount\": 19,\n                \"score\": 8.5,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1026721\": {\n            \"atgHotelId\": 1026721,\n            \"chainBrandId\": 220,\n            \"hotelChainId\": 168,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Sheraton New Delhi Hotel\",\n                \"ar\": \"فندق شيراتون نيو دلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062321/sheraton_new_delhi_hotel_-_member_of_itc_hotel_group_2.jpg\",\n            \"area\": {\n                \"id\": 12519,\n                \"nameEn\": \"Saket\",\n                \"nameAr\": \"ساكت\"\n            },\n            \"rank\": 796,\n            \"longitude\": 77.214181,\n            \"latitude\": 28.521831,\n            \"distance\": 18.0,\n            \"distanceInMeters\": 18305.3,\n            \"address\": {\n                \"en\": \"District Centre, Saket, Saket, 110017 New Delhi, India\",\n                \"ar\": \"District Centre, Saket, Saket, 110017  (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.593216,\n            \"priorityScore\": 0.398,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                37,\n                40,\n                42,\n                46,\n                51,\n                54,\n                55,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                76,\n                77,\n                80,\n                82,\n                84,\n                85,\n                87,\n                88,\n                97,\n                98,\n                99,\n                103,\n                108,\n                120,\n                8007,\n                8011\n            ],\n            \"review\": {\n                \"hotelId\": 1026721,\n                \"count\": 3099,\n                \"name\": \"Sheraton New Delhi Hotel\",\n                \"sourcesCount\": 25,\n                \"score\": 8.8,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1106720\": {\n            \"atgHotelId\": 1106720,\n            \"chainBrandId\": 244,\n            \"hotelChainId\": 193,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"The Leela Ambience Convention Hotel, Delhi\",\n                \"ar\": \"فندق ذا ليلا أمبيانس كونفينشن دلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4400664/1_1_-_copy.jpg\",\n            \"area\": null,\n            \"rank\": 801,\n            \"longitude\": 77.303018,\n            \"latitude\": 28.661714,\n            \"distance\": 8.4,\n            \"distanceInMeters\": 8385.1,\n            \"address\": {\n                \"en\": \"1,CBD, Maharaja Surajmal Road,  near Yamuna Sports Complex,, 110032 New Delhi, India\",\n                \"ar\": \"1,CBD, Maharaja Surajmal Road,  near Yamuna Sports Complex,, 110032  (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.813664,\n            \"priorityScore\": 0.4005,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                42,\n                44,\n                46,\n                55,\n                57,\n                63,\n                65,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                82,\n                85,\n                94,\n                97,\n                99,\n                101,\n                103,\n                108,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8017,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1106720,\n                \"count\": 5683,\n                \"name\": \"The Leela Ambience Convention Hotel, Delhi\",\n                \"sourcesCount\": 11,\n                \"score\": 8.8,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1026620\": {\n            \"atgHotelId\": 1026620,\n            \"chainBrandId\": 57,\n            \"hotelChainId\": 15,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Crowne Plaza New Delhi Rohini\",\n                \"ar\": \"كراون بلازا نيو دلهي روهني\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062102/zz_30.jpg\",\n            \"area\": {\n                \"id\": 12444,\n                \"nameEn\": \"Rohini\",\n                \"nameAr\": \"روهينى\"\n            },\n            \"rank\": 795,\n            \"longitude\": 77.110183,\n            \"latitude\": 28.71951,\n            \"distance\": 11.0,\n            \"distanceInMeters\": 11498.300000000001,\n            \"address\": {\n                \"en\": \"Twin District Centre, Sector - 10, Rohini,110085 New Delhi, India\",\n                \"ar\": \"Twin District Centre, Sector - 10, Rohini,110085 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.744482,\n            \"priorityScore\": 0.3975,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                37,\n                42,\n                54,\n                55,\n                63,\n                65,\n                69,\n                70,\n                76,\n                77,\n                80,\n                87,\n                97,\n                99,\n                103,\n                108,\n                120,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026620,\n                \"count\": 698,\n                \"name\": \"Crowne Plaza New Delhi Rohini\",\n                \"sourcesCount\": 18,\n                \"score\": 8.5,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1020730\": {\n            \"atgHotelId\": 1020730,\n            \"chainBrandId\": 198,\n            \"hotelChainId\": 85,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Radisson Gurugram Udyog Vihar\",\n                \"ar\": \"راديسون جوروجرام يوديوج فيهار\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4040209/a_1.jpg\",\n            \"area\": {\n                \"id\": 12054,\n                \"nameEn\": \"Udyog Vihar\",\n                \"nameAr\": \"أوديوج فيهار\"\n            },\n            \"rank\": 788,\n            \"longitude\": 77.09269,\n            \"latitude\": 28.510733,\n            \"distance\": 23.0,\n            \"distanceInMeters\": 23241.0,\n            \"address\": {\n                \"en\": \"Adjacent to Plot No 406, Udyog Vihar Phase 3, 122016 Gurgaon, India\",\n                \"ar\": \"Adjacent to Plot No 406, Udyog Vihar Phase 3, 122016 (غورغاون, الهند)\"\n            },\n            \"distanceScore\": 0.483533,\n            \"priorityScore\": 0.394,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                38,\n                42,\n                46,\n                54,\n                57,\n                59,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                77,\n                80,\n                85,\n                87,\n                94,\n                97,\n                98,\n                99,\n                100,\n                101,\n                103,\n                108,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1020730,\n                \"count\": 1069,\n                \"name\": \"Country Inn \u0026 Suites by Carlson Udyog Vihar\",\n                \"sourcesCount\": 13,\n                \"score\": 8.5,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1026615\": {\n            \"atgHotelId\": 1026615,\n            \"chainBrandId\": 175,\n            \"hotelChainId\": 83,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"The Oberoi, New Delhi\",\n                \"ar\": \"ذا أوبروي، نيودلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062094/s_1.jpg\",\n            \"area\": null,\n            \"rank\": 816,\n            \"longitude\": 77.23975,\n            \"latitude\": 28.59629,\n            \"distance\": 10.0,\n            \"distanceInMeters\": 10161.099999999999,\n            \"address\": {\n                \"en\": \"Dr. Zakir Hussain Marg, 110003 New Delhi, India\",\n                \"ar\": \"Dr. Zakir Hussain Marg, 110003 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.774198,\n            \"priorityScore\": 0.408,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                37,\n                38,\n                40,\n                42,\n                43,\n                46,\n                55,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                77,\n                82,\n                85,\n                88,\n                97,\n                99,\n                103,\n                108,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026615,\n                \"count\": 3306,\n                \"name\": \"The Oberoi New Delhi\",\n                \"sourcesCount\": 25,\n                \"score\": 9.3,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1353263\": {\n            \"atgHotelId\": 1353263,\n            \"chainBrandId\": 117,\n            \"hotelChainId\": 181,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Hyatt Place Gurgaon/Udyog Vihar\",\n                \"ar\": \"حياة بليس جورجاون/أوديوج فيهار\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6000327/1_1.jpg\",\n            \"area\": {\n                \"id\": 12054,\n                \"nameEn\": \"Udyog Vihar\",\n                \"nameAr\": \"أوديوج فيهار\"\n            },\n            \"rank\": 789,\n            \"longitude\": 77.080115,\n            \"latitude\": 28.517639,\n            \"distance\": 23.0,\n            \"distanceInMeters\": 23306.7,\n            \"address\": {\n                \"en\": \"15/1, Old Delhi Gurgaon Road, Sector-18, 122015 Gurgaon, India\",\n                \"ar\": \"15/1, Old Delhi Gurgaon Road, Sector-18, 122015 (غورغاون, الهند)\"\n            },\n            \"distanceScore\": 0.482073,\n            \"priorityScore\": 0.3945,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                38,\n                54,\n                55,\n                57,\n                59,\n                63,\n                65,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                82,\n                85,\n                88,\n                97,\n                99,\n                108,\n                112,\n                8000,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1353263,\n                \"count\": 2794,\n                \"name\": \"Hyatt Place Gurgaon/Udyog Vihar\",\n                \"sourcesCount\": 15,\n                \"score\": 8.3,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1133356\": {\n            \"atgHotelId\": 1133356,\n            \"chainBrandId\": 155,\n            \"hotelChainId\": 168,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"JW Marriott Hotel New Delhi Aerocity\",\n                \"ar\": \"جيه دبليو ماريوت هوتل نيودلهي آيروسيتي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4477304/1_1.jpg\",\n            \"area\": {\n                \"id\": 10290,\n                \"nameEn\": \"South West\",\n                \"nameAr\": \"الجنوب الغربي\"\n            },\n            \"rank\": 805,\n            \"longitude\": 77.122438,\n            \"latitude\": 28.553208,\n            \"distance\": 18.0,\n            \"distanceInMeters\": 17695.8,\n            \"address\": {\n                \"en\": \"Asset Area, AeroCity, 110037 New Delhi, India\",\n                \"ar\": \"(نيو دلهي, الهند)  Asset Area, AeroCity, 110037\"\n            },\n            \"distanceScore\": 0.60676,\n            \"priorityScore\": 0.4025,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                37,\n                38,\n                40,\n                42,\n                43,\n                46,\n                55,\n                57,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                75,\n                76,\n                77,\n                80,\n                82,\n                85,\n                87,\n                94,\n                97,\n                99,\n                101,\n                103,\n                108,\n                109,\n                112,\n                120,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8016,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1133356,\n                \"count\": 7067,\n                \"name\": \"JW Marriott Hotel New Delhi Aerocity\",\n                \"sourcesCount\": 20,\n                \"score\": 9.1,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1026608\": {\n            \"atgHotelId\": 1026608,\n            \"chainBrandId\": 180,\n            \"hotelChainId\": 19,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"The Suryaa New Delhi\",\n                \"ar\": \"ذا سوريا نيودلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062078/a_15.jpg\",\n            \"area\": {\n                \"id\": 11755,\n                \"nameEn\": \"New Friends Colony\",\n                \"nameAr\": \"مستعمرة نيو فريندس\"\n            },\n            \"rank\": 793,\n            \"longitude\": 77.269694,\n            \"latitude\": 28.560985,\n            \"distance\": 15.0,\n            \"distanceInMeters\": 14699.400000000001,\n            \"address\": {\n                \"en\": \"New Friends Colony, New Friends Colony, 110025 New Delhi, India\",\n                \"ar\": \"New Friends Colony, New Friends Colony, 110025  (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.673347,\n            \"priorityScore\": 0.3965,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                23,\n                37,\n                38,\n                40,\n                42,\n                43,\n                46,\n                49,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                85,\n                87,\n                94,\n                97,\n                98,\n                99,\n                101,\n                103,\n                108,\n                120,\n                122,\n                8007\n            ],\n            \"review\": {\n                \"hotelId\": 1026608,\n                \"count\": 7434,\n                \"name\": \"The Suryaa New Delhi\",\n                \"sourcesCount\": 19,\n                \"score\": 8.4,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1026639\": {\n            \"atgHotelId\": 1026639,\n            \"chainBrandId\": 189,\n            \"hotelChainId\": 135,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"The Imperial New Delhi\",\n                \"ar\": \"ذا إمبريال نيودلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/80000/75800/75755/4a82b200_z.jpg\",\n            \"area\": {\n                \"id\": 11751,\n                \"nameEn\": \"Connaught Place\",\n                \"nameAr\": \"كونوت بليس\"\n            },\n            \"rank\": 806,\n            \"longitude\": 77.219194,\n            \"latitude\": 28.625324,\n            \"distance\": 6.8,\n            \"distanceInMeters\": 6783.8,\n            \"address\": {\n                \"en\": \"Janpath Road\",\n                \"ar\": \"Janpath Road\"\n            },\n            \"distanceScore\": 0.849249,\n            \"priorityScore\": 0.403,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                37,\n                40,\n                42,\n                43,\n                44,\n                49,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                82,\n                85,\n                87,\n                94,\n                97,\n                99,\n                103,\n                108,\n                109,\n                120,\n                122,\n                8000,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026639,\n                \"count\": 2758,\n                \"name\": \"The Imperial\",\n                \"sourcesCount\": 24,\n                \"score\": 9.3,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1026638\": {\n            \"atgHotelId\": 1026638,\n            \"chainBrandId\": 219,\n            \"hotelChainId\": 144,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Shangri-La\u0027s - Eros Hotel, New Delhi\",\n                \"ar\": \"شانجريلاس - فندق إيروس، نيو دلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062145/0_1.jpg\",\n            \"area\": {\n                \"id\": 11751,\n                \"nameEn\": \"Connaught Place\",\n                \"nameAr\": \"كونوت بليس\"\n            },\n            \"rank\": 817,\n            \"longitude\": 77.213684,\n            \"latitude\": 28.622936,\n            \"distance\": 7.1,\n            \"distanceInMeters\": 7089.0,\n            \"address\": {\n                \"en\": \"19 Ashoka Road, Connaught Place, 110001 New Delhi, India\",\n                \"ar\": \"19 Ashoka Road, Connaught Place, 110001 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.842467,\n            \"priorityScore\": 0.4085,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                37,\n                38,\n                40,\n                42,\n                43,\n                46,\n                51,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                75,\n                76,\n                77,\n                80,\n                82,\n                85,\n                94,\n                97,\n                98,\n                99,\n                101,\n                103,\n                108,\n                120,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8016,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026638,\n                \"count\": 15705,\n                \"name\": \"Shangri-La\u0027s - Eros Hotel, New Delhi\",\n                \"sourcesCount\": 28,\n                \"score\": 9.0,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1026636\": {\n            \"atgHotelId\": 1026636,\n            \"chainBrandId\": 198,\n            \"hotelChainId\": 85,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Radisson Blu Hotel New Delhi Dwarka\",\n                \"ar\": \"راديسون بلو هوتل نيو دلهي دواركا\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062140/1_1.jpg\",\n            \"area\": {\n                \"id\": 12477,\n                \"nameEn\": \"Dwarka\",\n                \"nameAr\": \"دواركا\"\n            },\n            \"rank\": 789,\n            \"longitude\": 77.037106,\n            \"latitude\": 28.595761,\n            \"distance\": 21.0,\n            \"distanceInMeters\": 20648.0,\n            \"address\": {\n                \"en\": \"Plot no 4, Sector 13, Dwarka City Center, Near IGI Airport, Dwarka, 110075 New Delhi, India\",\n                \"ar\": \"(نيو دلهي, الهند)  Plot no 4, Sector 13, Dwarka City Center, Near IGI Airport, Dwarka, 110075 New Delhi, India\"\n            },\n            \"distanceScore\": 0.541156,\n            \"priorityScore\": 0.3945,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                6,\n                23,\n                37,\n                40,\n                42,\n                43,\n                46,\n                51,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                69,\n                70,\n                77,\n                80,\n                82,\n                85,\n                87,\n                94,\n                97,\n                98,\n                99,\n                100,\n                101,\n                103,\n                108,\n                120,\n                125,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026636,\n                \"count\": 8376,\n                \"name\": \"Radisson Blu Hotel New Delhi Dwarka\",\n                \"sourcesCount\": 21,\n                \"score\": 8.3,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1501778\": {\n            \"atgHotelId\": 1501778,\n            \"chainBrandId\": 243,\n            \"hotelChainId\": 2,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"The Lodhi - A member of The Leading Hotels Of The World\",\n                \"ar\": \"ذا لودي - آيه ميمبر أوف ذا ليدنج هوتلز أوف ذا وورلد\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/8340603/asd_1.jpg\",\n            \"area\": null,\n            \"rank\": 801,\n            \"longitude\": 77.237998,\n            \"latitude\": 28.592586,\n            \"distance\": 11.0,\n            \"distanceInMeters\": 10540.1,\n            \"address\": {\n                \"en\": \"Lodhi Road, 110003 New Delhi, India\",\n                \"ar\": \"Lodhi Road, 110003 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.765776,\n            \"priorityScore\": 0.4005,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                32,\n                37,\n                38,\n                40,\n                42,\n                43,\n                44,\n                54,\n                55,\n                57,\n                59,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                77,\n                82,\n                84,\n                85,\n                87,\n                94,\n                97,\n                98,\n                99,\n                101,\n                103,\n                108,\n                109,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1501778,\n                \"count\": 1043,\n                \"name\": \"The Lodhi\",\n                \"sourcesCount\": 18,\n                \"score\": 9.1,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1106773\": {\n            \"atgHotelId\": 1106773,\n            \"chainBrandId\": 109,\n            \"hotelChainId\": 15,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Holiday Inn New Delhi Mayur Vihar Noida\",\n                \"ar\": \"فندق هوليداي إن نيودلهي مايور فيهار نويدا\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4400785/1_1.jpg\",\n            \"area\": null,\n            \"rank\": 805,\n            \"longitude\": 77.298788,\n            \"latitude\": 28.590316,\n            \"distance\": 13.0,\n            \"distanceInMeters\": 13054.6,\n            \"address\": {\n                \"en\": \"13A Mayur Vihar, District Centre, Mayur Vihar Phase 1, 110091 New Delhi, India\",\n                \"ar\": \"13A Mayur Vihar, District Centre, Mayur Vihar Phase 1, 110091 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.709898,\n            \"priorityScore\": 0.4025,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                42,\n                46,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                85,\n                87,\n                94,\n                97,\n                98,\n                99,\n                103,\n                108,\n                120,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1106773,\n                \"count\": 5150,\n                \"name\": \"Holiday Inn New Delhi Mayur Vihar Noida\",\n                \"sourcesCount\": 16,\n                \"score\": 8.5,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1026762\": {\n            \"atgHotelId\": 1026762,\n            \"chainBrandId\": 180,\n            \"hotelChainId\": 19,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"The Ashtan Sarovar Portico\",\n                \"ar\": \"ذا أشتان ساروفار بورتيكو\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062432/z_1.jpg\",\n            \"area\": {\n                \"id\": 12440,\n                \"nameEn\": \"Green Park\",\n                \"nameAr\": \"الحديقة الخضراء\"\n            },\n            \"rank\": 784,\n            \"longitude\": 77.203811,\n            \"latitude\": 28.5596,\n            \"distance\": 14.0,\n            \"distanceInMeters\": 14198.4,\n            \"address\": {\n                \"en\": \"C-2,Green Park Extension, 110016 New Delhi, India\",\n                \"ar\": \"C-2,Green Park Extension, 110016  (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.68448,\n            \"priorityScore\": 0.392,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                55,\n                57,\n                59,\n                62,\n                63,\n                65,\n                67,\n                69,\n                70,\n                77,\n                85,\n                88,\n                97,\n                98,\n                99,\n                101,\n                103,\n                8007\n            ],\n            \"review\": {\n                \"hotelId\": 1026762,\n                \"count\": 1284,\n                \"name\": \"The Ashtan Sarovar Portico\",\n                \"sourcesCount\": 21,\n                \"score\": 7.9,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1026633\": {\n            \"atgHotelId\": 1026633,\n            \"chainBrandId\": 117,\n            \"hotelChainId\": 181,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Hyatt Regency Delhi\",\n                \"ar\": \"حياة ريجنسي دلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062131/al_mosafer_1.jpg\",\n            \"area\": {\n                \"id\": 12518,\n                \"nameEn\": \"RK Puram\",\n                \"nameAr\": \"آي كاي بورام\"\n            },\n            \"rank\": 813,\n            \"longitude\": 77.185103,\n            \"latitude\": 28.568316,\n            \"distance\": 14.0,\n            \"distanceInMeters\": 13599.9,\n            \"address\": {\n                \"en\": \"Bhikaji Cama Place, Ring Road, 110066 New Delhi, India\",\n                \"ar\": \"Bhikaji Cama Place, Ring Road, 110066 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.69778,\n            \"priorityScore\": 0.4065,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                37,\n                40,\n                42,\n                43,\n                46,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                82,\n                85,\n                87,\n                94,\n                97,\n                98,\n                101,\n                103,\n                108,\n                109,\n                120,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026633,\n                \"count\": 7279,\n                \"name\": \"Hyatt Regency Delhi\",\n                \"sourcesCount\": 27,\n                \"score\": 8.7,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1160790\": {\n            \"atgHotelId\": 1160790,\n            \"chainBrandId\": 244,\n            \"hotelChainId\": 193,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"The Leela Ambience Hotel \u0026 Residences, Gurugram\",\n                \"ar\": \"فندق \u0026 ريزيدنس ذا ليلا أمبيانس جورجاون\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4641715/12032653.jpg\",\n            \"area\": null,\n            \"rank\": 815,\n            \"longitude\": 77.097448,\n            \"latitude\": 28.504747,\n            \"distance\": 24.0,\n            \"distanceInMeters\": 23560.5,\n            \"address\": {\n                \"en\": \"National Highway 8, 122002 Gurgaon, India\",\n                \"ar\": \"(غورغاون, الهند)  National Highway 8, 122002 Gurgaon, India\"\n            },\n            \"distanceScore\": 0.476433,\n            \"priorityScore\": 0.4075,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                37,\n                38,\n                40,\n                42,\n                43,\n                46,\n                49,\n                54,\n                55,\n                57,\n                62,\n                66,\n                76,\n                77,\n                80,\n                85,\n                87,\n                94,\n                98,\n                99,\n                100,\n                101,\n                103,\n                108,\n                109,\n                120,\n                122,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011\n            ],\n            \"review\": {\n                \"hotelId\": 1160790,\n                \"count\": 5979,\n                \"name\": \"The Leela Ambience Gurugram Hotel \u0026 Residences\",\n                \"sourcesCount\": 19,\n                \"score\": 9.1,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1026759\": {\n            \"atgHotelId\": 1026759,\n            \"chainBrandId\": 146,\n            \"hotelChainId\": 168,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"ITC Maurya, a Luxury Collection Hotel, New Delhi\",\n                \"ar\": \"آي تي سي مايوريا، أحد فنادق لوكشري كولكشن، نيودلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/10000/3800/3793/896a0c4a_z.jpg\",\n            \"area\": {\n                \"id\": 12524,\n                \"nameEn\": \"Chanakyapuri\",\n                \"nameAr\": \"تشاناكيابوري\"\n            },\n            \"rank\": 819,\n            \"longitude\": 77.172982,\n            \"latitude\": 28.596081,\n            \"distance\": 11.0,\n            \"distanceInMeters\": 11105.4,\n            \"address\": {\n                \"en\": \"Diplomatic Enclave, Sadar Patel\",\n                \"ar\": \"Diplomatic Enclave, Sadar Patel\"\n            },\n            \"distanceScore\": 0.753213,\n            \"priorityScore\": 0.4095,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                37,\n                38,\n                42,\n                46,\n                54,\n                55,\n                57,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                75,\n                76,\n                77,\n                80,\n                84,\n                85,\n                87,\n                94,\n                97,\n                101,\n                103,\n                108,\n                109,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026759,\n                \"count\": 7817,\n                \"name\": \"ITC Maurya New Delhi\",\n                \"sourcesCount\": 23,\n                \"score\": 9.2,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1026758\": {\n            \"atgHotelId\": 1026758,\n            \"chainBrandId\": 180,\n            \"hotelChainId\": 19,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Eros Hotel New Delhi, Nehru Place\",\n                \"ar\": \"فندق ايروس نيوديلهي، نيهرو بليس\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062415/0_1.jpg\",\n            \"area\": {\n                \"id\": 12433,\n                \"nameEn\": \"Nehru Place\",\n                \"nameAr\": \"تيهيرو بليس\"\n            },\n            \"rank\": 798,\n            \"longitude\": 77.249116,\n            \"latitude\": 28.549618,\n            \"distance\": 15.0,\n            \"distanceInMeters\": 15432.2,\n            \"address\": {\n                \"en\": \"Nehru Place, Nehru Place, 110019 New Delhi, India\",\n                \"ar\": \"Nehru Place, Nehru Place, 110019 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.657062,\n            \"priorityScore\": 0.399,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                37,\n                38,\n                40,\n                42,\n                43,\n                51,\n                54,\n                55,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                75,\n                76,\n                77,\n                80,\n                85,\n                87,\n                94,\n                97,\n                99,\n                100,\n                101,\n                103,\n                108,\n                120,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8016,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026758,\n                \"count\": 2519,\n                \"name\": \"Eros Hotel\",\n                \"sourcesCount\": 20,\n                \"score\": 8.4,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1026651\": {\n            \"atgHotelId\": 1026651,\n            \"chainBrandId\": 180,\n            \"hotelChainId\": 19,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"The Grand New Delhi\",\n                \"ar\": \"ذا جراند نيودلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062172/a_1.jpg\",\n            \"area\": {\n                \"id\": 12481,\n                \"nameEn\": \"Vasant Kunj\",\n                \"nameAr\": \"فاسانت كونج\"\n            },\n            \"rank\": 796,\n            \"longitude\": 77.152766,\n            \"latitude\": 28.539378,\n            \"distance\": 18.0,\n            \"distanceInMeters\": 17673.9,\n            \"address\": {\n                \"en\": \"Nelson Mandela Road, Vasant Kunj, Phase II, 110070 New Delhi, India\",\n                \"ar\": \"Nelson Mandela Road, Vasant Kunj, Phase II, 110070 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.607247,\n            \"priorityScore\": 0.398,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                23,\n                37,\n                40,\n                42,\n                43,\n                46,\n                51,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                77,\n                80,\n                82,\n                85,\n                87,\n                94,\n                98,\n                99,\n                100,\n                101,\n                103,\n                108,\n                109,\n                120,\n                122,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011\n            ],\n            \"review\": {\n                \"hotelId\": 1026651,\n                \"count\": 2647,\n                \"name\": \"The Grand New Delhi\",\n                \"sourcesCount\": 17,\n                \"score\": 8.3,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1136708\": {\n            \"atgHotelId\": 1136708,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Palm Springs Stays\",\n                \"ar\": \"فندق بوتيك بالم سبرينج\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/7000000/6050000/6049600/6049583/7bd3e7b5_z.jpg\",\n            \"area\": {\n                \"id\": 12535,\n                \"nameEn\": \"Naraina\",\n                \"nameAr\": \"نارينا\"\n            },\n            \"rank\": 1054,\n            \"longitude\": 77.13709,\n            \"latitude\": 28.631942,\n            \"distance\": 10.0,\n            \"distanceInMeters\": 10239.5,\n            \"address\": {\n                \"en\": \"60, Community Centre, Naraina Phase-1, Near PVR Cinema\",\n                \"ar\": \"60, Community Centre, Naraina Phase-1, Near PVR Cinema\"\n            },\n            \"distanceScore\": 0.772456,\n            \"priorityScore\": 0.527,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                40,\n                42,\n                55,\n                59,\n                66,\n                67,\n                69,\n                70,\n                82,\n                85,\n                88,\n                99,\n                101\n            ],\n            \"review\": {\n                \"hotelId\": 1136708,\n                \"count\": 203,\n                \"name\": \"Palm Spring a Boutique Hotel\",\n                \"sourcesCount\": 6,\n                \"score\": 6.5,\n                \"scoreDescription\": {\n                    \"en\": \"Good\",\n                    \"ar\": \"جيد\"\n                },\n                \"scoreColor\": \"#A1CC4F\"\n            },\n            \"topPicks\": null\n        },\n        \"1084613\": {\n            \"atgHotelId\": 1084613,\n            \"chainBrandId\": 57,\n            \"hotelChainId\": 15,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Crowne Plaza Hotel New Delhi Okhla\",\n                \"ar\": \"كراون بلازا هوتل نيو دلهي أوكلا\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4303017/48482485.jpg\",\n            \"area\": null,\n            \"rank\": 792,\n            \"longitude\": 77.27195,\n            \"latitude\": 28.528595,\n            \"distance\": 18.0,\n            \"distanceInMeters\": 18209.399999999998,\n            \"address\": {\n                \"en\": \"Plot No 1, Community Centre Okhla, Phase-1, 110020 New Delhi, India\",\n                \"ar\": \"Plot No 1, Community Centre Okhla, Phase-1, 110020 نيو دلهي, الهند\"\n            },\n            \"distanceScore\": 0.595347,\n            \"priorityScore\": 0.396,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                37,\n                40,\n                42,\n                46,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                85,\n                94,\n                97,\n                98,\n                99,\n                100,\n                103,\n                108,\n                120,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8011,\n                8012,\n                8016,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1084613,\n                \"count\": 1494,\n                \"name\": \"Crowne Plaza Hotel New Delhi Okhla\",\n                \"sourcesCount\": 21,\n                \"score\": 8.6,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1084614\": {\n            \"atgHotelId\": 1084614,\n            \"chainBrandId\": 138,\n            \"hotelChainId\": 168,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Le Meridien New Delhi\",\n                \"ar\": \"لو ميريديان نيودلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4303024/1_1.jpg\",\n            \"area\": null,\n            \"rank\": 806,\n            \"longitude\": 77.217563,\n            \"latitude\": 28.619287,\n            \"distance\": 7.5,\n            \"distanceInMeters\": 7462.1,\n            \"address\": {\n                \"en\": \"Windsor Place  , 110001 New Delhi, India\",\n                \"ar\": \"(نيو دلهي, الهند)  Windsor Place , 110001\"\n            },\n            \"distanceScore\": 0.834176,\n            \"priorityScore\": 0.403,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                37,\n                40,\n                42,\n                43,\n                46,\n                54,\n                55,\n                57,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                75,\n                76,\n                77,\n                80,\n                85,\n                87,\n                94,\n                97,\n                99,\n                101,\n                103,\n                108,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1084614,\n                \"count\": 10409,\n                \"name\": \"Le Mu00e9ridien New Delhi\",\n                \"sourcesCount\": 31,\n                \"score\": 9.0,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1501249\": {\n            \"atgHotelId\": 1501249,\n            \"chainBrandId\": 117,\n            \"hotelChainId\": 181,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Andaz Delhi - a concept by Hyatt\",\n                \"ar\": \"أنداز ديلهي - إيه كونسيبت باي حياة\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/8312892/zz_1.jpg\",\n            \"area\": {\n                \"id\": 10290,\n                \"nameEn\": \"South West\",\n                \"nameAr\": \"الجنوب الغربي\"\n            },\n            \"rank\": 816,\n            \"longitude\": 77.121491,\n            \"latitude\": 28.554933,\n            \"distance\": 18.0,\n            \"distanceInMeters\": 17586.9,\n            \"address\": {\n                \"en\": \"Aerocity, New Delhi, 110037 New Delhi, India\",\n                \"ar\": \"Aerocity, New Delhi, 110037  (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.60918,\n            \"priorityScore\": 0.408,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                37,\n                38,\n                42,\n                46,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                82,\n                84,\n                85,\n                94,\n                97,\n                98,\n                99,\n                101,\n                103,\n                108,\n                112,\n                120,\n                8000,\n                8007,\n                8008,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1501249,\n                \"count\": 4241,\n                \"name\": \"Andaz Delhi - A concept by Hyatt\",\n                \"sourcesCount\": 13,\n                \"score\": 9.1,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1026644\": {\n            \"atgHotelId\": 1026644,\n            \"chainBrandId\": 238,\n            \"hotelChainId\": 69,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Taj Palace, New Delhi\",\n                \"ar\": \"تاج بالاس، نيو ديلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062154/wooow.jpg\",\n            \"area\": null,\n            \"rank\": 810,\n            \"longitude\": 77.170013,\n            \"latitude\": 28.596333,\n            \"distance\": 11.0,\n            \"distanceInMeters\": 11207.7,\n            \"address\": {\n                \"en\": \"Sardar Patel Marg, Chanakyapuri, 110021 New Delhi, India\",\n                \"ar\": \"(نيو دلهي, الهند)  Sardar Patel Marg, Chanakyapuri, 110021 New Delhi, India\"\n            },\n            \"distanceScore\": 0.75094,\n            \"priorityScore\": 0.405,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                23,\n                37,\n                40,\n                42,\n                43,\n                46,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                75,\n                76,\n                77,\n                80,\n                82,\n                85,\n                87,\n                94,\n                97,\n                99,\n                101,\n                103,\n                108,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8016,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026644,\n                \"count\": 11243,\n                \"name\": \"Taj Palace, New Delhi\",\n                \"sourcesCount\": 32,\n                \"score\": 9.2,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1501770\": {\n            \"atgHotelId\": 1501770,\n            \"chainBrandId\": 271,\n            \"hotelChainId\": 200,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"The LaLiT New Delhi\",\n                \"ar\": \"ذا لاليت نيودلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/440000/437300/437268/e2c691be_z.jpg\",\n            \"area\": null,\n            \"rank\": 800,\n            \"longitude\": 77.226103,\n            \"latitude\": 28.631275,\n            \"distance\": 6.1,\n            \"distanceInMeters\": 6131.700000000001,\n            \"address\": {\n                \"en\": \"Barakhamba Avenue, Connaught Place\",\n                \"ar\": \"Barakhamba Avenue, Connaught Place\"\n            },\n            \"distanceScore\": 0.86374,\n            \"priorityScore\": 0.4,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                23,\n                37,\n                40,\n                42,\n                43,\n                46,\n                49,\n                51,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                77,\n                80,\n                82,\n                84,\n                85,\n                87,\n                94,\n                97,\n                98,\n                99,\n                101,\n                103,\n                108,\n                109,\n                120,\n                122,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011\n            ],\n            \"review\": {\n                \"hotelId\": 1501770,\n                \"count\": 14739,\n                \"name\": \"The Lalit New Delhi\",\n                \"sourcesCount\": 23,\n                \"score\": 8.7,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1026790\": {\n            \"atgHotelId\": 1026790,\n            \"chainBrandId\": 198,\n            \"hotelChainId\": 85,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Radisson Blu Hotel New Delhi Paschim Vihar\",\n                \"ar\": \"راديسون بلو هوتل نيو دلهي باشيم فيهار\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062490/1_1.jpg\",\n            \"area\": {\n                \"id\": 12528,\n                \"nameEn\": \"Pashim Vihar\",\n                \"nameAr\": \"باشيم فيار\"\n            },\n            \"rank\": 801,\n            \"longitude\": 77.090748,\n            \"latitude\": 28.666854,\n            \"distance\": 13.0,\n            \"distanceInMeters\": 12967.800000000001,\n            \"address\": {\n                \"en\": \"Outer Ring Road, Paschim Vihar, Pashim Vihar, 110063 New Delhi, India\",\n                \"ar\": \"(نيو دلهي, الهند)  Outer Ring Road, Paschim Vihar, Pashim Vihar, 110063\"\n            },\n            \"distanceScore\": 0.711827,\n            \"priorityScore\": 0.4005,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                37,\n                38,\n                42,\n                51,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                76,\n                77,\n                85,\n                87,\n                94,\n                97,\n                98,\n                101,\n                103,\n                108,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8016,\n                8017,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026790,\n                \"count\": 5899,\n                \"name\": \"Radisson Blu Hotel New Delhi Paschim Vihar\",\n                \"sourcesCount\": 19,\n                \"score\": 8.4,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1026659\": {\n            \"atgHotelId\": 1026659,\n            \"chainBrandId\": 180,\n            \"hotelChainId\": 19,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"The Metropolitan Hotel and Spa New Delhi\",\n                \"ar\": \"ذا متروبوليتان هوتل آند سبا نيودلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062185/esd_7.jpg\",\n            \"area\": {\n                \"id\": 12480,\n                \"nameEn\": \"Hanuman Road Area\",\n                \"nameAr\": \"Hanuman Road Area\"\n            },\n            \"rank\": 789,\n            \"longitude\": 77.208398,\n            \"latitude\": 28.63153,\n            \"distance\": 6.2,\n            \"distanceInMeters\": 6227.599999999999,\n            \"address\": {\n                \"en\": \"Bangla Saheb Road, Connaught Place, 110001 New Delhi, India\",\n                \"ar\": \"Bangla Saheb Road, Connaught Place, 110001 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.861609,\n            \"priorityScore\": 0.3945,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                38,\n                42,\n                43,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                85,\n                87,\n                94,\n                97,\n                99,\n                101,\n                103,\n                108,\n                120,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8016,\n                8017,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1026659,\n                \"count\": 5625,\n                \"name\": \"The Metropolitan Hotel New Delhi\",\n                \"sourcesCount\": 19,\n                \"score\": 8.2,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1159932\": {\n            \"atgHotelId\": 1159932,\n            \"chainBrandId\": 244,\n            \"hotelChainId\": 193,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"The Leela Palace New Delhi\",\n                \"ar\": \"ذه ليلا بالاس نيودلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4639820/1_18.jpg\",\n            \"area\": {\n                \"id\": 12499,\n                \"nameEn\": \"Diplomatic Enclave\",\n                \"nameAr\": \"ديبلوماتيك إنكلاف\"\n            },\n            \"rank\": 789,\n            \"longitude\": 77.186237,\n            \"latitude\": 28.600866,\n            \"distance\": 10.0,\n            \"distanceInMeters\": 10113.300000000001,\n            \"address\": {\n                \"en\": \"Diplomatic Enclave, Chanakyapuri, 110023 New Delhi, India\",\n                \"ar\": \"(نيو دلهي, الهند)  Diplomatic Enclave, Chanakyapuri, 110023\"\n            },\n            \"distanceScore\": 0.77526,\n            \"priorityScore\": 0.3945,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                40,\n                42,\n                43,\n                46,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                82,\n                85,\n                87,\n                94,\n                97,\n                99,\n                101,\n                103,\n                108,\n                122,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011\n            ],\n            \"review\": {\n                \"hotelId\": 1159932,\n                \"count\": 6094,\n                \"name\": \"The Leela Palace New Delhi\",\n                \"sourcesCount\": 22,\n                \"score\": 9.2,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1143934\": {\n            \"atgHotelId\": 1143934,\n            \"chainBrandId\": 180,\n            \"hotelChainId\": 19,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"bloomrooms @ New Delhi Railway Station\",\n                \"ar\": \"بلومرومز @ نيودلهي ريلواي ستاشن\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4530317/al_mosafer_1.jpg\",\n            \"area\": {\n                \"id\": 11791,\n                \"nameEn\": \"Paharganj\",\n                \"nameAr\": \"باهارجانج\"\n            },\n            \"rank\": 780,\n            \"longitude\": 77.217635,\n            \"latitude\": 28.645621,\n            \"distance\": 4.5,\n            \"distanceInMeters\": 4539.799999999999,\n            \"address\": {\n                \"en\": \"8591, Arakashan Road, Opp Railway Station, Paharganj, 110055 New Delhi, India\",\n                \"ar\": \"8591, Arakashan Road, Opp Railway Station, Paharganj, 110055 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.899116,\n            \"priorityScore\": 0.39,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                55,\n                57,\n                63,\n                66,\n                67,\n                69,\n                70,\n                77,\n                85,\n                94,\n                97,\n                99,\n                101,\n                8000,\n                8007,\n                8008,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1143934,\n                \"count\": 1760,\n                \"name\": \"bloomrooms @ New Delhi Railway Station\",\n                \"sourcesCount\": 10,\n                \"score\": 8.3,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1125857\": {\n            \"atgHotelId\": 1125857,\n            \"chainBrandId\": 238,\n            \"hotelChainId\": 69,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Vivanta Ambassador, New Delhi\",\n                \"ar\": \"فيفانتا أمباسادور، نيو دلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4456993/al_mosafer_1.jpg\",\n            \"area\": null,\n            \"rank\": 808,\n            \"longitude\": 77.231907,\n            \"latitude\": 28.602651,\n            \"distance\": 9.4,\n            \"distanceInMeters\": 9353.300000000001,\n            \"address\": {\n                \"en\": \"Sujan Singh Park, Subramania Bharti Marg, 110003 New Delhi, India\",\n                \"ar\": \"Sujan Singh Park, Subramania Bharti Marg, 110003 (نيو دلهي, الهند)\"\n            },\n            \"distanceScore\": 0.792149,\n            \"priorityScore\": 0.404,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                37,\n                38,\n                42,\n                46,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                82,\n                84,\n                85,\n                87,\n                94,\n                97,\n                98,\n                99,\n                103,\n                120,\n                122,\n                125,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1125857,\n                \"count\": 3719,\n                \"name\": \"Vivanta Ambassador, New Delhi\",\n                \"sourcesCount\": 18,\n                \"score\": 8.9,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1338592\": {\n            \"atgHotelId\": 1338592,\n            \"chainBrandId\": 180,\n            \"hotelChainId\": 19,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Roseate House\",\n                \"ar\": \"روزيات هاوس\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/11000000/10220000/10210200/10210101/922029ee_z.jpg\",\n            \"area\": {\n                \"id\": 10290,\n                \"nameEn\": \"South West\",\n                \"nameAr\": \"الجنوب الغربي\"\n            },\n            \"rank\": 809,\n            \"longitude\": 77.120706,\n            \"latitude\": 28.551256,\n            \"distance\": 18.0,\n            \"distanceInMeters\": 17970.1,\n            \"address\": {\n                \"en\": \"Plot No. 10, GMR Hospitality District, Indira Gandhi International Airport\",\n                \"ar\": \"Plot No. 10, GMR Hospitality District, Indira Gandhi International Airport\"\n            },\n            \"distanceScore\": 0.600664,\n            \"priorityScore\": 0.4045,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                38,\n                42,\n                46,\n                49,\n                51,\n                55,\n                57,\n                63,\n                65,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                88,\n                97,\n                99,\n                101,\n                103,\n                108,\n                109,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011\n            ],\n            \"review\": {\n                \"hotelId\": 1338592,\n                \"count\": 5124,\n                \"name\": \"Roseate House New Delhi\",\n                \"sourcesCount\": 14,\n                \"score\": 8.9,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1134436\": {\n            \"atgHotelId\": 1134436,\n            \"chainBrandId\": 189,\n            \"hotelChainId\": 135,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"The Roseate New Delhi\",\n                \"ar\": \"ذا روزيت نيودلهي\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/7000000/6450000/6441400/6441374/1a620168_z.jpg\",\n            \"area\": {\n                \"id\": 10290,\n                \"nameEn\": \"South West\",\n                \"nameAr\": \"الجنوب الغربي\"\n            },\n            \"rank\": 794,\n            \"longitude\": 77.104861,\n            \"latitude\": 28.531807,\n            \"distance\": 21.0,\n            \"distanceInMeters\": 20628.5,\n            \"address\": {\n                \"en\": \"Samalkha, NH-8\",\n                \"ar\": \"Samalkha, NH-8\"\n            },\n            \"distanceScore\": 0.541589,\n            \"priorityScore\": 0.397,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                37,\n                38,\n                42,\n                46,\n                49,\n                51,\n                54,\n                55,\n                57,\n                63,\n                65,\n                66,\n                69,\n                70,\n                76,\n                77,\n                80,\n                82,\n                84,\n                85,\n                87,\n                97,\n                99,\n                100,\n                101,\n                103,\n                108,\n                120,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011\n            ],\n            \"review\": {\n                \"hotelId\": 1134436,\n                \"count\": 1898,\n                \"name\": \"The Roseate New Delhi\",\n                \"sourcesCount\": 12,\n                \"score\": 8.8,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1377890\": {\n            \"atgHotelId\": 1377890,\n            \"chainBrandId\": 3,\n            \"hotelChainId\": 9,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Novotel New Delhi Aerocity - An AccorHotels Brand\",\n                \"ar\": \"نوفوتيل نيو ديلهي أيروسيتي  - آن أكور هوتلز براند\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6193341/4_31.jpg\",\n            \"area\": {\n                \"id\": 10290,\n                \"nameEn\": \"South West\",\n                \"nameAr\": \"الجنوب الغربي\"\n            },\n            \"rank\": 795,\n            \"longitude\": 77.12301,\n            \"latitude\": 28.55323,\n            \"distance\": 18.0,\n            \"distanceInMeters\": 17663.0,\n            \"address\": {\n                \"en\": \"Asset No 2 Aerocity Hospitality District IGI Airport New Delhi, 110037 New Delhi, India\",\n                \"ar\": \"Asset No 2 Aerocity Hospitality District IGI Airport New Delhi, 110037 نيو دلهي, الهند\"\n            },\n            \"distanceScore\": 0.607489,\n            \"priorityScore\": 0.3975,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                38,\n                54,\n                55,\n                59,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                75,\n                76,\n                77,\n                80,\n                82,\n                85,\n                88,\n                97,\n                99,\n                103,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1377890,\n                \"count\": 8048,\n                \"name\": \"Novotel New Delhi Aerocity\",\n                \"sourcesCount\": 24,\n                \"score\": 8.5,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1369070\": {\n            \"atgHotelId\": 1369070,\n            \"chainBrandId\": 193,\n            \"hotelChainId\": 9,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Pullman New Delhi Aerocity - An AccorHotels Brand\",\n                \"ar\": \"بولمان نيو ديلهي أيروسيتي  - آن أكور هوتلز براند\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/10000000/10000000/9994600/9994586/addf1e5e_z.jpg\",\n            \"area\": {\n                \"id\": 10290,\n                \"nameEn\": \"South West\",\n                \"nameAr\": \"الجنوب الغربي\"\n            },\n            \"rank\": 805,\n            \"longitude\": 77.12305,\n            \"latitude\": 28.55453,\n            \"distance\": 18.0,\n            \"distanceInMeters\": 17539.899999999998,\n            \"address\": {\n                \"en\": \"Asset No 2, Aerocity Hospitality District\",\n                \"ar\": \"Asset No 2, Aerocity Hospitality District\"\n            },\n            \"distanceScore\": 0.610224,\n            \"priorityScore\": 0.4025,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                37,\n                40,\n                42,\n                46,\n                51,\n                54,\n                55,\n                57,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                75,\n                76,\n                77,\n                82,\n                85,\n                94,\n                97,\n                99,\n                103,\n                108,\n                109,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1369070,\n                \"count\": 8031,\n                \"name\": \"Pullman New Delhi Aerocity\",\n                \"sourcesCount\": 21,\n                \"score\": 9.0,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        }\n    },\n    \"distanceDetails\": {\n        \"en\": \" km from city center of Delhi\",\n        \"ar\": \" كم من مركز مدينة ‬دلهي\"\n    },\n    \"pagination\": {\n        \"nextPageId\": \"CwEBAAwBAQUax6OvrzxADoXYr9mE2YfZikRlbGjpbG9jYWxpdPkBjVO-sTFOU0ABZAFkAZC_BQEAAQA\u003d\",\n        \"pageNo\": 1,\n        \"pageSize\": 50,\n        \"totalResultsCount\": 3113\n    },\n    \"geoCoordinate\": {\n        \"latitude\": 28.6862738,\n        \"longitude\": 77.2217831,\n        \"radiusInMeters\": 45000\n    }\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the image appearing for each hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateTheHotelImage()"
});
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/10000000/10000000/9994600/9994586/addf1e5e_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4106247/1_17.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4639313/1_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062490/1_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4639313/1_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4106247/1_17.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/10000000/10000000/9994600/9994586/addf1e5e_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062490/1_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4400691/almosafer_1.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/80000/75800/75755/4a82b200_z.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/7000000/6050000/6049600/6049583/7bd3e7b5_z.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/10000000/10000000/9994600/9994586/addf1e5e_z.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/80000/75800/75755/4a82b200_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4400691/almosafer_1.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/7000000/6050000/6049600/6049583/7bd3e7b5_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062303/3_1.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/80000/75800/75755/4a82b200_z.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/7000000/6050000/6049600/6049583/7bd3e7b5_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062303/3_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062172/a_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4641715/12032653.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4477304/1_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/8340603/asd_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062172/a_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4641715/12032653.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4477304/1_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/8340603/asd_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6047924/z_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062145/0_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4400785/1_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6047924/z_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4639820/1_18.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062145/0_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4400785/1_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4639820/1_18.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4456993/al_mosafer_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062009/almosafer_1.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/10000/3800/3793/896a0c4a_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062102/zz_30.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4456993/al_mosafer_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062009/almosafer_1.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/10000/3800/3793/896a0c4a_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4530317/al_mosafer_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062102/zz_30.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062094/s_1.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/10000/3800/3793/896a0c4a_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4530317/al_mosafer_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4400664/1_1_-_copy.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062094/s_1.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/4000000/3850000/3844100/3844019/4c19e573_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4061970/0_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4400664/1_1_-_copy.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062185/esd_7.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/4000000/3850000/3844100/3844019/4c19e573_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4061970/0_1.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/11000000/10220000/10210200/10210101/922029ee_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062185/esd_7.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4400698/a_1.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/4000000/3850000/3844100/3844019/4c19e573_z.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/11000000/10220000/10210200/10210101/922029ee_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062131/al_mosafer_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4400698/a_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/8312892/zz_1.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/11000000/10220000/10210200/10210101/922029ee_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062131/al_mosafer_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062078/a_15.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/8312892/zz_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062029/0_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062415/0_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6691360/0_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062078/a_15.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062029/0_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062415/0_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6592222/al_mosafer_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6691360/0_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4303024/1_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062140/1_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6000327/1_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6592222/al_mosafer_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4303024/1_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062140/1_1.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/20000/14700/14700/6031a8e6_b.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6000327/1_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4303017/48482485.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4040209/a_1.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/20000/14700/14700/6031a8e6_b.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6193341/4_31.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4303017/48482485.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4040209/a_1.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/20000/14700/14700/6031a8e6_b.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6193341/4_31.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/5059996/sddd.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062321/sheraton_new_delhi_hotel_-_member_of_itc_hotel_group_2.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/440000/437300/437268/e2c691be_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/5059996/sddd.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062321/sheraton_new_delhi_hotel_-_member_of_itc_hotel_group_2.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/440000/437300/437268/e2c691be_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062154/wooow.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/440000/437300/437268/e2c691be_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062154/wooow.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4061974/0_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4061974/0_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062432/z_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4062432/z_1.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/7000000/6450000/6441400/6441374/1a620168_z.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/7000000/6450000/6441400/6441374/1a620168_z.jpg");
formatter.write("GET URL : https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/7000000/6450000/6441400/6441374/1a620168_z.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6430691/0_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6430691/0_1.jpg");
formatter.result({
  "error_message": "java.lang.AssertionError: IMAGE IS NOT ACCESSABLE FOR THE HOTELS -{Pullman New Delhi Aerocity - An AccorHotels Brand\u003dhttps://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/10000000/10000000/9994600/9994586/addf1e5e_z.jpg, The Imperial New Delhi\u003dhttps://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/80000/75800/75755/4a82b200_z.jpg, Roseate House\u003dhttps://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/11000000/10220000/10210200/10210101/922029ee_z.jpg, ITC Maurya, a Luxury Collection Hotel, New Delhi\u003dhttps://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/10000/3800/3793/896a0c4a_z.jpg, Le Méridien Gurgaon, Delhi NCR\u003dhttps://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/4000000/3850000/3844100/3844019/4c19e573_z.jpg, The Roseate New Delhi\u003dhttps://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/7000000/6450000/6441400/6441374/1a620168_z.jpg, The LaLiT New Delhi\u003dhttps://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/440000/437300/437268/e2c691be_z.jpg, Maidens Hotel, Delhi\u003dhttps://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/1000000/20000/14700/14700/6031a8e6_b.jpg, Palm Springs Stays\u003dhttps://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/7000000/6050000/6049600/6049583/7bd3e7b5_z.jpg}\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.tajawal.step.definition.HotelDetailsSteps.validateTheHotelImage(HotelDetailsSteps.java:116)\r\n\tat ✽.Validate the image appearing for each hotel(file:src/main/resources/features/HotelDetails.feature:11)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify the valid image display to each hotel in response",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@issue\u003d1"
    },
    {
      "name": "@tmsLink\u003d1"
    },
    {
      "name": "@severiy\u003dblocker"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want fetch the hotel details for the \"LONDON\" with \"5\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
formatter.write("GET URL : https://www.tajawal.ae/api/enigma/content/hotels/summaries?query\u003dLONDON\u0026pageSize\u003d5");
formatter.write("HEADERS : {token\u003ds73827732j9$872u3lkNp}");
formatter.write("{\n    \"sortBy\": \"priority\",\n    \"distanceShow\": true,\n    \"countryCode\": \"GB\",\n    \"hotels\": {\n        \"1798142\": {\n            \"atgHotelId\": 1798142,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 2,\n            \"name\": {\n                \"en\": \"Imperial College London \",\n                \"ar\": \"Imperial College London\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/cfe212c8-010b-413b-9642-936b47dcd275.PNG\",\n            \"area\": {\n                \"id\": 9996,\n                \"nameEn\": \"Knightsbridge and Belgravia\",\n                \"nameAr\": \"Knightsbridge and Belgravia\"\n            },\n            \"rank\": 286,\n            \"longitude\": -0.1748772,\n            \"latitude\": 51.4987997,\n            \"distance\": 3.4,\n            \"distanceInMeters\": 3398.1,\n            \"address\": {\n                \"en\": \"Kensington London Sw7 2Az Uk\",\n                \"ar\": null\n            },\n            \"distanceScore\": 0.924487,\n            \"priorityScore\": 0.143,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                29,\n                38,\n                40,\n                41,\n                42,\n                43,\n                67,\n                82,\n                97,\n                112\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1054869\": {\n            \"atgHotelId\": 1054869,\n            \"chainBrandId\": 247,\n            \"hotelChainId\": 51,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Amba Hotel Marble Arch\",\n                \"ar\": \"أمبا هوتل ماربل آرش\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4175163/0_1.jpg\",\n            \"area\": {\n                \"id\": 10482,\n                \"nameEn\": \"City of Westminster\",\n                \"nameAr\": \"مدينة ويستمنستر\"\n            },\n            \"rank\": 2000,\n            \"longitude\": -0.15654770304104204,\n            \"latitude\": 51.51440341309781,\n            \"distance\": 2.1,\n            \"distanceInMeters\": 2141.7000000000003,\n            \"address\": {\n                \"en\": \"Bryanston Street, Marble Arch, Westminster Borough, London, W1H 7EH, United Kingdom\",\n                \"ar\": \"Bryanston Street, Marble Arch, Westminster Borough, W1H 7EH (لندن, المملكة المتحدة)\"\n            },\n            \"distanceScore\": 0.952407,\n            \"priorityScore\": 0.1,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                38,\n                55,\n                57,\n                59,\n                63,\n                65,\n                67,\n                69,\n                70,\n                77,\n                80,\n                88,\n                97,\n                99,\n                8000,\n                8002,\n                8007,\n                8008,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1054869,\n                \"count\": 5839,\n                \"name\": \"Amba Hotel Marble Arch\",\n                \"sourcesCount\": 33,\n                \"score\": 8.2,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1061528\": {\n            \"atgHotelId\": 1061528,\n            \"chainBrandId\": 113,\n            \"hotelChainId\": 153,\n            \"propertyTypeId\": 13,\n            \"name\": {\n                \"en\": \"Staycity Aparthotels London Heathrow\",\n                \"ar\": \"شقق ستاي سيتي لندن هيثرو الفندقية\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4202911/1_18.jpg\",\n            \"area\": {\n                \"id\": 10967,\n                \"nameEn\": \"Botwell\",\n                \"nameAr\": \"Botwell\"\n            },\n            \"rank\": 2000,\n            \"longitude\": -0.419916,\n            \"latitude\": 51.503443,\n            \"distance\": 20.0,\n            \"distanceInMeters\": 20231.4,\n            \"address\": {\n                \"en\": \"Highpoint Village, Station Approach, Hillingdon, UB3 4FL, United Kingdom\",\n                \"ar\": \"(هيلينغدون, المملكة المتحدة)  Highpoint Village, Station Approach, , UB3 4FL,\"\n            },\n            \"distanceScore\": 0.550413,\n            \"priorityScore\": 0.1,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                38,\n                54,\n                55,\n                57,\n                59,\n                65,\n                67,\n                69,\n                70,\n                85,\n                87,\n                88,\n                97,\n                99,\n                125,\n                8002,\n                8007,\n                8015\n            ],\n            \"review\": {\n                \"hotelId\": 1061528,\n                \"count\": 4888,\n                \"name\": \"Staycity Aparthotels London Heathrow\",\n                \"sourcesCount\": 14,\n                \"score\": 8.7,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1054777\": {\n            \"atgHotelId\": 1054777,\n            \"chainBrandId\": 106,\n            \"hotelChainId\": 197,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"London Hilton on Park Lane\",\n                \"ar\": \"لندن هيلتون أون بارك لين\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/b862ba86-9f75-45f9-beea-3e71d29ad91e.jpg\",\n            \"area\": {\n                \"id\": 9998,\n                \"nameEn\": \"Mayfair\",\n                \"nameAr\": \"مايفير\"\n            },\n            \"rank\": 1999,\n            \"longitude\": -0.1501698057589973,\n            \"latitude\": 51.505549639426384,\n            \"distance\": 1.6,\n            \"distanceInMeters\": 1580.8,\n            \"address\": {\n                \"en\": \"22 Park Lane, Westminster Borough, London, W1K 1BE, United Kingdom\",\n                \"ar\": \"22 Park Lane, Westminster Borough, W1K 1BE, (لندن, المملكة المتحدة)\"\n            },\n            \"distanceScore\": 0.964871,\n            \"priorityScore\": 0.09995,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                14,\n                38,\n                39,\n                40,\n                42,\n                44,\n                46,\n                50,\n                54,\n                59,\n                60,\n                63,\n                64,\n                65,\n                66,\n                67,\n                68,\n                69,\n                70,\n                71,\n                74,\n                75,\n                77,\n                83,\n                85,\n                87,\n                89,\n                90,\n                92,\n                93,\n                94,\n                96,\n                97,\n                99,\n                101,\n                117,\n                124,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1054777,\n                \"count\": 3748,\n                \"name\": \"London Hilton On Park Lane\",\n                \"sourcesCount\": 40,\n                \"score\": 8.5,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1126191\": {\n            \"atgHotelId\": 1126191,\n            \"chainBrandId\": 3,\n            \"hotelChainId\": 9,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Novotel London Heathrow Airport - M4 Jct 4\",\n                \"ar\": \"نوفوتيل مطار لندن هيثرو ام 4 جكت. 4\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4457628/1_1.jpg\",\n            \"area\": {\n                \"id\": 10053,\n                \"nameEn\": \"Heathrow Villages\",\n                \"nameAr\": \"هيثرو\"\n            },\n            \"rank\": 2000,\n            \"longitude\": -0.454535,\n            \"latitude\": 51.498237,\n            \"distance\": 23.0,\n            \"distanceInMeters\": 22647.300000000003,\n            \"address\": {\n                \"en\": \"M4J4, Cherry Lane, Heathrow, UB7 9HJ, United Kingdom\",\n                \"ar\": \"(هيثرو, المملكة المتحدة)  M4J4, Cherry Lane, UB7 9HJ,\"\n            },\n            \"distanceScore\": 0.496727,\n            \"priorityScore\": 0.1,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                6,\n                38,\n                54,\n                55,\n                59,\n                65,\n                66,\n                67,\n                69,\n                70,\n                77,\n                80,\n                82,\n                85,\n                87,\n                88,\n                97,\n                99,\n                101,\n                105,\n                120,\n                8000,\n                8002,\n                8007,\n                8008,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1126191,\n                \"count\": 9055,\n                \"name\": \"Novotel London Heathrow Airport - M4 Jct 4\",\n                \"sourcesCount\": 22,\n                \"score\": 7.8,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        }\n    },\n    \"distanceDetails\": {\n        \"en\": \" km from city center of London\",\n        \"ar\": \" كم من مركز مدينة ‬لندن\"\n    },\n    \"pagination\": {\n        \"nextPageId\": \"CwEBAAwBAU-M0d_wwElADoXZhNmG2K_ZhkxvbmRv7mxvY2FsaXT5AYByJUxiWsC_AQoBCgGQvwUBAAEA\",\n        \"pageNo\": 1,\n        \"pageSize\": 5,\n        \"totalResultsCount\": 7638\n    },\n    \"geoCoordinate\": {\n        \"latitude\": 51.5073509,\n        \"longitude\": -0.1277583,\n        \"radiusInMeters\": 45000\n    }\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the image appearing for each hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateTheHotelImage()"
});
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4457628/1_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4202911/1_18.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4175163/0_1.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/b862ba86-9f75-45f9-beea-3e71d29ad91e.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/b862ba86-9f75-45f9-beea-3e71d29ad91e.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4202911/1_18.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4175163/0_1.jpg");
formatter.write("GET URL : https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4457628/1_1.jpg");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/cfe212c8-010b-413b-9642-936b47dcd275.PNG");
formatter.write("GET URL : http://hotelcms-contents-live.tajawal.com/cfe212c8-010b-413b-9642-936b47dcd275.PNG");
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify the number of Hotel response as per the request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@issue\u003d2"
    },
    {
      "name": "@tmsLink\u003d5"
    },
    {
      "name": "@severiy\u003dcritical"
    }
  ]
});
formatter.step({
  "name": "I want fetch the hotel details for the \"\u003cCITY\u003e\" with \"\u003cPAGE_SIZE\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Validate response status code as \"200\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Validate pagesize \"\u003cPAGE_SIZE\u003e\" in response",
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
        "PAGE_SIZE"
      ]
    },
    {
      "cells": [
        "JEDDAH",
        "10"
      ]
    },
    {
      "cells": [
        "SEYCHELLES",
        "25"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the number of Hotel response as per the request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@issue\u003d2"
    },
    {
      "name": "@tmsLink\u003d5"
    },
    {
      "name": "@severiy\u003dcritical"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want fetch the hotel details for the \"JEDDAH\" with \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
formatter.write("GET URL : https://www.tajawal.ae/api/enigma/content/hotels/summaries?query\u003dJEDDAH\u0026pageSize\u003d10");
formatter.write("HEADERS : {token\u003ds73827732j9$872u3lkNp}");
formatter.write("{\n    \"sortBy\": \"priority\",\n    \"distanceShow\": true,\n    \"countryCode\": \"SA\",\n    \"hotels\": {\n        \"1057840\": {\n            \"atgHotelId\": 1057840,\n            \"chainBrandId\": 220,\n            \"hotelChainId\": 168,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Sheraton Jeddah Hotel\",\n                \"ar\": \"فندق شيراتون جدة\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/182a822d-e4d1-41bd-ad91-510befc4b86f.jpg\",\n            \"area\": {\n                \"id\": 17512,\n                \"nameEn\": \"Ash Shati\",\n                \"nameAr\": \"آش شاتي\"\n            },\n            \"rank\": 1992,\n            \"longitude\": 39.10858201292558,\n            \"latitude\": 21.614175485725635,\n            \"distance\": 17.0,\n            \"distanceInMeters\": 16709.7,\n            \"address\": {\n                \"en\": \"Northern Corniche, Al Shati, 21432 Jeddah, Saudi Arabia\",\n                \"ar\": \"الكورنيش الشمالي, الشاطئ, 21432 جدة, المملكة العربية السعودية\"\n            },\n            \"distanceScore\": 0.628673,\n            \"priorityScore\": 0.996,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                6,\n                32,\n                37,\n                40,\n                42,\n                43,\n                49,\n                51,\n                55,\n                62,\n                65,\n                66,\n                67,\n                69,\n                70,\n                76,\n                77,\n                80,\n                85,\n                94,\n                97,\n                99,\n                101,\n                103,\n                108,\n                112,\n                120,\n                122,\n                8000,\n                8001,\n                8002,\n                8004,\n                8005,\n                8006,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8013,\n                8014,\n                8015,\n                8018,\n                8019,\n                8021,\n                8023,\n                8024,\n                8025\n            ],\n            \"review\": {\n                \"hotelId\": 1057840,\n                \"count\": 3510,\n                \"name\": \"Sheraton Jeddah Hotel\",\n                \"sourcesCount\": 21,\n                \"score\": 7.8,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1650264\": {\n            \"atgHotelId\": 1650264,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 31,\n            \"name\": {\n                \"en\": \"Narcissus Resort \u0026 Spa Obhur Jeddah\",\n                \"ar\": \"منتجع وسبا نارسس أبحر جدة\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/10367601/1_1.jpg\",\n            \"area\": null,\n            \"rank\": 1999,\n            \"longitude\": 39.07931263033056,\n            \"latitude\": 21.722280062382566,\n            \"distance\": 29.0,\n            \"distanceInMeters\": 28788.8,\n            \"address\": {\n                \"en\": \"Prince Abdullah Al-Faisal Road, Obhur, 23811, Jeddah, Saudi Arabia\",\n                \"ar\": \"طريق الأمير عبدالله الفيصل, أبحر, 23811 جدة, المملكة العربية السعودية\"\n            },\n            \"distanceScore\": 0.360249,\n            \"priorityScore\": 0.9995,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                38,\n                42,\n                51,\n                55,\n                63,\n                65,\n                77,\n                82,\n                88,\n                99,\n                101,\n                108,\n                8000,\n                8002,\n                8004,\n                8005,\n                8006,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8013,\n                8014,\n                8015,\n                8016,\n                8017,\n                8018,\n                8019,\n                8020,\n                8021,\n                8023,\n                8024,\n                8025\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1547686\": {\n            \"atgHotelId\": 1547686,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Beyab Al Hamra Hotel\",\n                \"ar\": \"فندق بياب الحمراء\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/8968a535-73d8-4429-987e-7ab8acd5af33.jpg\",\n            \"area\": null,\n            \"rank\": 1994,\n            \"longitude\": 39.15756525921872,\n            \"latitude\": 21.516935074968845,\n            \"distance\": 5.0,\n            \"distanceInMeters\": 5005.7,\n            \"address\": {\n                \"en\": \"Hussien Ba Salamah , Al Hamra District, Al Hamra, 23212 Jeddah, Saudi Arabia \",\n                \"ar\": \"شارع حسين باسلامة , حى الحمرا, الحمراء, 23212 جدة, المملكة العربية السعودية\"\n            },\n            \"distanceScore\": 0.888762,\n            \"priorityScore\": 0.997,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                31,\n                55,\n                57,\n                59,\n                63,\n                66,\n                67,\n                68,\n                70,\n                71,\n                74,\n                83,\n                85,\n                89,\n                91,\n                92,\n                93,\n                96,\n                97,\n                99,\n                101\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1085875\": {\n            \"atgHotelId\": 1085875,\n            \"chainBrandId\": 106,\n            \"hotelChainId\": 197,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Jeddah Hilton\",\n                \"ar\": \"هيلتون جدة\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/de179f3f-1e53-4328-b0a1-0a2101086396.jpg\",\n            \"area\": {\n                \"id\": 17512,\n                \"nameEn\": \"Ash Shati\",\n                \"nameAr\": \"آش شاتي\"\n            },\n            \"rank\": 2000,\n            \"longitude\": 39.109170046627035,\n            \"latitude\": 21.604687615734548,\n            \"distance\": 16.0,\n            \"distanceInMeters\": 15784.599999999999,\n            \"address\": {\n                \"en\": \"Corniche Road, Al Shatiea, Jeddah, Saudi Arabia\",\n                \"ar\": \"طريق الكورنيش, الشاطئ, جدة, المملكة العربية السعودية\"\n            },\n            \"distanceScore\": 0.649231,\n            \"priorityScore\": 1.0,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                3,\n                4,\n                29,\n                32,\n                37,\n                38,\n                39,\n                40,\n                48,\n                55,\n                57,\n                59,\n                63,\n                64,\n                65,\n                67,\n                68,\n                69,\n                70,\n                71,\n                74,\n                75,\n                77,\n                82,\n                87,\n                89,\n                91,\n                93,\n                97,\n                99,\n                105,\n                107,\n                108,\n                112,\n                114,\n                117,\n                122,\n                124,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1085875,\n                \"count\": 8370,\n                \"name\": \"Jeddah Hilton Hotel\",\n                \"sourcesCount\": 20,\n                \"score\": 8.6,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1492981\": {\n            \"atgHotelId\": 1492981,\n            \"chainBrandId\": 3,\n            \"hotelChainId\": 9,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Novotel Jeddah Tahlia \",\n                \"ar\": \"نوفوتيل جدة التحلية \"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/c1270de9-e65a-4835-aeb9-9c551de9418d.jpg\",\n            \"area\": null,\n            \"rank\": 1990,\n            \"longitude\": 39.1724333816147,\n            \"latitude\": 21.554819859946893,\n            \"distance\": 8.0,\n            \"distanceInMeters\": 7951.5,\n            \"address\": {\n                \"en\": \"Al Andalus District, Muruat Al Islam Street, Al Andalus, 21493 Jeddah, Saudi Arabia\",\n                \"ar\": \"حي الاندلس, شارع مروؤة الاسلام،, الأندلس, 21493 جدة, المملكة العربية السعودية\"\n            },\n            \"distanceScore\": 0.8233,\n            \"priorityScore\": 0.995,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                38,\n                40,\n                42,\n                43,\n                44,\n                46,\n                49,\n                54,\n                55,\n                56,\n                59,\n                60,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                74,\n                77,\n                85,\n                87,\n                88,\n                91,\n                97,\n                99,\n                100,\n                101,\n                103,\n                108,\n                114,\n                117,\n                122,\n                8000,\n                8001,\n                8002,\n                8004,\n                8005,\n                8006,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8013,\n                8014,\n                8015,\n                8016,\n                8017,\n                8018,\n                8019,\n                8020,\n                8021,\n                8022,\n                8023,\n                8024,\n                8025\n            ],\n            \"review\": {\n                \"hotelId\": 1492981,\n                \"count\": 5764,\n                \"name\": \"Novotel Jeddah Tahlia\",\n                \"sourcesCount\": 14,\n                \"score\": 8.4,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1619645\": {\n            \"atgHotelId\": 1619645,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Velvet Hotel\",\n                \"ar\": \"فندق فيلفيت\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/10070058/0_1.jpg\",\n            \"area\": null,\n            \"rank\": 1996,\n            \"longitude\": 39.18808921593859,\n            \"latitude\": 21.55298462462187,\n            \"distance\": 7.5,\n            \"distanceInMeters\": 7485.299999999999,\n            \"address\": {\n                \"en\": \"Aziziyah District, King Fahd Branch Road, 21361 Jeddah, Saudi Arabia\",\n                \"ar\": \" حي العزيزية , طريق الملك فهد الفرعي , 21361 جدة, المملكة العربية السعودية\"\n            },\n            \"distanceScore\": 0.83366,\n            \"priorityScore\": 0.998,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                38,\n                51,\n                55,\n                57,\n                59,\n                62,\n                63,\n                65,\n                67,\n                69,\n                70,\n                76,\n                77,\n                85,\n                97,\n                99,\n                101,\n                103,\n                105,\n                8000,\n                8002,\n                8005,\n                8006,\n                8007,\n                8008,\n                8011,\n                8015,\n                8021,\n                8023,\n                8024\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1447651\": {\n            \"atgHotelId\": 1447651,\n            \"chainBrandId\": 212,\n            \"hotelChainId\": 39,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Centro Shaheen Jeddah by Rotana \",\n                \"ar\": \"سنترو شاهين جدة من روتانا\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/07b06305-eaf0-43ec-b8d4-168551d9eea6.jpg\",\n            \"area\": null,\n            \"rank\": 1995,\n            \"longitude\": 39.18124550152923,\n            \"latitude\": 21.52381307061582,\n            \"distance\": 4.4,\n            \"distanceInMeters\": 4384.599999999999,\n            \"address\": {\n                \"en\": \"Medina Road opposite King Saud Mosque, 23218 Jeddah, Saudi Arabia\",\n                \"ar\": \" طريق المدينة المنورة مقابل جامع الملك سعود, 23218 جدة, المملكة العربية السعودية\"\n            },\n            \"distanceScore\": 0.902564,\n            \"priorityScore\": 0.9975,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                38,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                77,\n                80,\n                85,\n                87,\n                94,\n                97,\n                99,\n                101,\n                103,\n                109,\n                122,\n                125,\n                8000,\n                8001,\n                8002,\n                8004,\n                8005,\n                8006,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8014,\n                8015,\n                8017,\n                8020,\n                8021,\n                8022,\n                8023,\n                8024,\n                8025\n            ],\n            \"review\": {\n                \"hotelId\": 1447651,\n                \"count\": 3961,\n                \"name\": \"Centro Shaheen by Rotana\",\n                \"sourcesCount\": 13,\n                \"score\": 8.1,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1127385\": {\n            \"atgHotelId\": 1127385,\n            \"chainBrandId\": 120,\n            \"hotelChainId\": 15,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"InterContinental Jeddah\",\n                \"ar\": \"إنتركونتيننتال جدة\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/bcf6257c-3859-4a75-a18e-1f0b47efcfb9.jpg\",\n            \"area\": null,\n            \"rank\": 1998,\n            \"longitude\": 39.155746950314516,\n            \"latitude\": 21.515627374723902,\n            \"distance\": 5.0,\n            \"distanceInMeters\": 5046.5,\n            \"address\": {\n                \"en\": \"Corniche Al Hamra, Al Hamra, 21000 Jeddah, Saudi Arabia\",\n                \"ar\": \"كورنيش الحمرا, الحمراء, 21000 جدة, المملكة العربية السعودية \"\n            },\n            \"distanceScore\": 0.887856,\n            \"priorityScore\": 0.999,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                29,\n                37,\n                38,\n                39,\n                40,\n                42,\n                43,\n                44,\n                54,\n                55,\n                57,\n                59,\n                60,\n                63,\n                64,\n                65,\n                67,\n                69,\n                70,\n                71,\n                73,\n                74,\n                75,\n                77,\n                82,\n                85,\n                87,\n                89,\n                91,\n                94,\n                97,\n                99,\n                108,\n                109,\n                112,\n                114,\n                117,\n                122,\n                124,\n                8000,\n                8002,\n                8004,\n                8005,\n                8006,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8013,\n                8014,\n                8015,\n                8016,\n                8017,\n                8021,\n                8023,\n                8024,\n                8025\n            ],\n            \"review\": {\n                \"hotelId\": 1127385,\n                \"count\": 3271,\n                \"name\": \"InterContinental Jeddah\",\n                \"sourcesCount\": 21,\n                \"score\": 8.6,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1327144\": {\n            \"atgHotelId\": 1327144,\n            \"chainBrandId\": null,\n            \"hotelChainId\": 72,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Mira Waterfront Hotel Jeddah\",\n                \"ar\": \"فندق ميرا الواجهة البحرية جدة\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"http://hotelcms-contents-live.tajawal.com/6c743442-b4ff-4099-86f8-d025494e098a.jpg\",\n            \"area\": null,\n            \"rank\": 1993,\n            \"longitude\": 39.163865521495836,\n            \"latitude\": 21.50909358728637,\n            \"distance\": 3.9,\n            \"distanceInMeters\": 3935.8,\n            \"address\": {\n                \"en\": \"Corniche Street, 21412 Jeddah, Saudi Arabia \",\n                \"ar\": \"شارع الكورنيش ، 21412 جدة ، المملكة العربية السعودية\"\n            },\n            \"distanceScore\": 0.912538,\n            \"priorityScore\": 0.9965,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                3,\n                4,\n                24,\n                38,\n                43,\n                48,\n                59,\n                63,\n                65,\n                67,\n                68,\n                69,\n                70,\n                71,\n                74,\n                77,\n                85,\n                87,\n                88,\n                89,\n                91,\n                92,\n                93,\n                97,\n                100,\n                101,\n                114,\n                117\n            ],\n            \"review\": {\n                \"hotelId\": 1327144,\n                \"count\": 2717,\n                \"name\": \"Mira Waterfront Hotel Jeddah\",\n                \"sourcesCount\": 2,\n                \"score\": 7.0,\n                \"scoreDescription\": {\n                    \"en\": \"Good\",\n                    \"ar\": \"جيد\"\n                },\n                \"scoreColor\": \"#A1CC4F\"\n            },\n            \"topPicks\": null\n        },\n        \"1057823\": {\n            \"atgHotelId\": 1057823,\n            \"chainBrandId\": 167,\n            \"hotelChainId\": 9,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Movenpick Hotel Jeddah\",\n                \"ar\": \"فندق موڤنبيك جدة\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4187423/asd_1.jpg\",\n            \"area\": null,\n            \"rank\": 1991,\n            \"longitude\": 39.179281557505185,\n            \"latitude\": 21.53525326375507,\n            \"distance\": 5.7,\n            \"distanceInMeters\": 5667.0,\n            \"address\": {\n                \"en\": \"Medina Street, Opposite Ministry of Interior, 21211 Jeddah, Saudi Arabia\",\n                \"ar\": \"شارع المدينة, مقابل وزارة الداخلية, 21211 جدة, المملكة العربية السعودية\"\n            },\n            \"distanceScore\": 0.874067,\n            \"priorityScore\": 0.9955,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                37,\n                38,\n                42,\n                49,\n                51,\n                55,\n                57,\n                59,\n                62,\n                63,\n                65,\n                66,\n                67,\n                69,\n                70,\n                75,\n                76,\n                77,\n                80,\n                87,\n                88,\n                97,\n                98,\n                99,\n                108,\n                112,\n                120,\n                122,\n                8000,\n                8001,\n                8002,\n                8004,\n                8005,\n                8006,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8012,\n                8013,\n                8014,\n                8015,\n                8016,\n                8017,\n                8020,\n                8021,\n                8022,\n                8023,\n                8024,\n                8025\n            ],\n            \"review\": {\n                \"hotelId\": 1057823,\n                \"count\": 4221,\n                \"name\": \"Mu00f6venpick Hotel Jeddah\",\n                \"sourcesCount\": 25,\n                \"score\": 7.9,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        }\n    },\n    \"distanceDetails\": {\n        \"en\": \" km from city center of Jeddah\",\n        \"ar\": \" كم من مركز مدينة ‬جدة\"\n    },\n    \"pagination\": {\n        \"nextPageId\": \"CwEBAAwBAX0JFRxefDVADoTYrNiv2KlKZWRkYehsb2NhbGl0-QFXKU7_o5hDQAEUARQBkL8FAQABAA\u003d\u003d\",\n        \"pageNo\": 1,\n        \"pageSize\": 10,\n        \"totalResultsCount\": 661\n    },\n    \"geoCoordinate\": {\n        \"latitude\": 21.485811,\n        \"longitude\": 39.19250479999999,\n        \"radiusInMeters\": 45000\n    }\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate pagesize \"10\" in response",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validatePageSizeInResponse(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the number of Hotel response as per the request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@issue\u003d2"
    },
    {
      "name": "@tmsLink\u003d5"
    },
    {
      "name": "@severiy\u003dcritical"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want fetch the hotel details for the \"SEYCHELLES\" with \"25\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
formatter.write("GET URL : https://www.tajawal.ae/api/enigma/content/hotels/summaries?query\u003dSEYCHELLES\u0026pageSize\u003d25");
formatter.write("HEADERS : {token\u003ds73827732j9$872u3lkNp}");
formatter.write("{\n    \"sortBy\": \"priority\",\n    \"distanceShow\": false,\n    \"countryCode\": \"SC\",\n    \"hotels\": {\n        \"1141265\": {\n            \"atgHotelId\": 1141265,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 35,\n            \"name\": {\n                \"en\": \"Villa Anse La Blague\",\n                \"ar\": \"فيلا أنس لا بلاج\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/18000000/17950000/17941600/17941547/bc7740d2_z.jpg\",\n            \"area\": null,\n            \"rank\": 464,\n            \"longitude\": 55.779678,\n            \"latitude\": -4.325847,\n            \"distance\": 51.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Anse La Blague\",\n                \"ar\": \"Anse La Blague\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.23,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                55,\n                59,\n                65,\n                67,\n                70,\n                87,\n                94,\n                97,\n                99,\n                101\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1141267\": {\n            \"atgHotelId\": 1141267,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 35,\n            \"name\": {\n                \"en\": \"Villas De Mer\",\n                \"ar\": \"فيلاز دي مير\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4509111/a_29.jpg\",\n            \"area\": null,\n            \"rank\": 2000,\n            \"longitude\": 55.701072,\n            \"latitude\": -4.324544,\n            \"distance\": 46.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Grand Anse Beach, Grand\u0027Anse Praslin, Seychelles\",\n                \"ar\": \"Grand Anse Beach (غراند آنس براسلين, سيشيل)\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 1.0,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                55,\n                59,\n                65,\n                67,\n                70,\n                82,\n                84,\n                88,\n                97,\n                99,\n                100,\n                108,\n                8000,\n                8007,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1141267,\n                \"count\": 66,\n                \"name\": \"Hotel Villas de Mer\",\n                \"sourcesCount\": 7,\n                \"score\": 8.7,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1359894\": {\n            \"atgHotelId\": 1359894,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 13,\n            \"name\": {\n                \"en\": \"Villa Luana Yuna\",\n                \"ar\": \"Villa Luana Yuna\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/images/full/c8454d79-75cd-48cb-98c5-7b2e391f3fd2.jpeg\",\n            \"area\": null,\n            \"rank\": 421,\n            \"longitude\": 55.52261,\n            \"latitude\": -4.71437,\n            \"distance\": 5.1,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Au Cap Pointe Au Sel\",\n                \"ar\": null\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.21,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                13,\n                16,\n                17,\n                18,\n                26,\n                30,\n                94,\n                95,\n                97,\n                100,\n                110,\n                114\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1134098\": {\n            \"atgHotelId\": 1134098,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 13,\n            \"name\": {\n                \"en\": \"Divers Lodge\",\n                \"ar\": \"Divers Lodge\"\n            },\n            \"starRating\": 2,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/images/full/d97e8ca9-cba8-477b-9908-d1b9e324e0ee.jpeg\",\n            \"area\": null,\n            \"rank\": 365,\n            \"longitude\": 55.4325,\n            \"latitude\": -4.60782,\n            \"distance\": 10.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Beau Vallon Mare Anglaise Mahe Mahe Island\",\n                \"ar\": null\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.18,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                13,\n                16,\n                26,\n                66,\n                68,\n                84,\n                95,\n                97,\n                114\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1141266\": {\n            \"atgHotelId\": 1141266,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 13,\n            \"name\": {\n                \"en\": \"Casa Tara Villas\",\n                \"ar\": \"كازا تارا فيلاز\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4509108/1_1.jpg\",\n            \"area\": null,\n            \"rank\": 476,\n            \"longitude\": 55.685238,\n            \"latitude\": -4.313057,\n            \"distance\": 46.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Anse Kerlan, Grand\u0027Anse Praslin, Seychelles\",\n                \"ar\": \"Anse Kerlan, (غراند آنس براسلين, سيشيل)\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.24,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                24,\n                46,\n                63,\n                69,\n                70,\n                82,\n                94,\n                97,\n                99\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1141269\": {\n            \"atgHotelId\": 1141269,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Bayview Apartment\",\n                \"ar\": \"Bayview Apartment\"\n            },\n            \"starRating\": 2,\n            \"thumbnailUrl\": \"https://az712897.vo.msecnd.net/images/full/4fd4f622-dd9e-48ba-aeac-542060b3adb9.jpeg\",\n            \"area\": null,\n            \"rank\": 375,\n            \"longitude\": 55.46603,\n            \"latitude\": -4.64438,\n            \"distance\": 4.9,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"La Louisela Misere Road\",\n                \"ar\": null\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.19,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                66,\n                94,\n                95,\n                97,\n                99,\n                100\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1351696\": {\n            \"atgHotelId\": 1351696,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 35,\n            \"name\": {\n                \"en\": \"Chez Muriel Guest House\",\n                \"ar\": \"شي ميوريل جيست هاوس\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/5991599/1_1.jpg\",\n            \"area\": null,\n            \"rank\": 464,\n            \"longitude\": 55.744081,\n            \"latitude\": -4.316839,\n            \"distance\": 49.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Anse Volbert, Baie Sainte Anne, Seychelles\",\n                \"ar\": \"Anse Volbert (باي سانت آن, سيشيل)\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.23,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                55,\n                82,\n                97,\n                99\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1141268\": {\n            \"atgHotelId\": 1141268,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 13,\n            \"name\": {\n                \"en\": \"Acquario Guesthouse\",\n                \"ar\": \"Acquario Guesthouse\"\n            },\n            \"starRating\": 2,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/images/full/2d87f38f-3822-4051-969d-e98ccd7cdcd9.jpeg\",\n            \"area\": null,\n            \"rank\": 410,\n            \"longitude\": 55.73931,\n            \"latitude\": -4.31153,\n            \"distance\": 49.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Anse Petit Court Praslin\",\n                \"ar\": null\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.2,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                59,\n                68,\n                94,\n                95,\n                114\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1141271\": {\n            \"atgHotelId\": 1141271,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Carpe Diem\",\n                \"ar\": \"Carpe Diem\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4509132/a_5.jpg\",\n            \"area\": null,\n            \"rank\": 446,\n            \"longitude\": 55.45441,\n            \"latitude\": -4.59414,\n            \"distance\": 10.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Anse Etoile, 248 Anse Etoile, Seychelles\",\n                \"ar\": \"Anse Etoile, 248 (آنس إيتويل, سيشيل)\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.22,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                94,\n                99,\n                100,\n                114\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1141270\": {\n            \"atgHotelId\": 1141270,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 13,\n            \"name\": {\n                \"en\": \"Stephna Residence\",\n                \"ar\": \"Stephna Residence\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4509125/a.jpg\",\n            \"area\": null,\n            \"rank\": 436,\n            \"longitude\": 55.49792,\n            \"latitude\": -4.73662,\n            \"distance\": 6.4,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Les Cannelles Road, Anse La Mouche, Anse Boileau, Seychelles\",\n                \"ar\": \"Les Cannelles Road, Anse La Mouche, (آنس بوالو, سيشيل)\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.22,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                13,\n                16,\n                17,\n                18,\n                26,\n                68,\n                95,\n                100,\n                108,\n                112,\n                114\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1141273\": {\n            \"atgHotelId\": 1141273,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 12,\n            \"name\": {\n                \"en\": \"Le surmer self catering chalets\",\n                \"ar\": \"لو سيرمر سيلف كاتيرينج شاليه\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4509145/1_5.jpg\",\n            \"area\": null,\n            \"rank\": 1370,\n            \"longitude\": 55.82561,\n            \"latitude\": -4.358431,\n            \"distance\": 51.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Anse Reunion, La Digue, Seychelles\",\n                \"ar\": \"Anse Reunion, (لا ديج, سيشيل)\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.69,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                55,\n                59,\n                63,\n                66,\n                67,\n                69,\n                82,\n                87,\n                94,\n                97,\n                101,\n                110\n            ],\n            \"review\": {\n                \"hotelId\": 1141273,\n                \"count\": 59,\n                \"name\": \"Le Surmer Self Catering Chalets\",\n                \"sourcesCount\": 3,\n                \"score\": 9.0,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1414173\": {\n            \"atgHotelId\": 1414173,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Carana Beach Hotel\",\n                \"ar\": \"كارانا بيتش هوتل\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6486920/1_1-1.jpg\",\n            \"area\": null,\n            \"rank\": 786,\n            \"longitude\": 55.45204,\n            \"latitude\": -4.566065,\n            \"distance\": 13.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"North East Point, Anse Etoile, Seychelles\",\n                \"ar\": \"(أنس إيتوال, سيشيل)  North East Point,\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.39,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                42,\n                46,\n                51,\n                55,\n                62,\n                65,\n                67,\n                69,\n                70,\n                82,\n                87,\n                94,\n                97,\n                99,\n                108,\n                109,\n                120,\n                8000,\n                8002,\n                8007,\n                8008,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1414173,\n                \"count\": 256,\n                \"name\": \"CaranaBeach Hotel\",\n                \"sourcesCount\": 6,\n                \"score\": 9.0,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1141272\": {\n            \"atgHotelId\": 1141272,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 35,\n            \"name\": {\n                \"en\": \"Lemongrass Lodge\",\n                \"ar\": \"ليمونجراس لودج\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4509142/almosafer_5.jpg\",\n            \"area\": null,\n            \"rank\": 767,\n            \"longitude\": 55.436221,\n            \"latitude\": -4.602142,\n            \"distance\": 11.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"La Batie Road, Beau Vallon, Seychelles\",\n                \"ar\": \"La Batie Road, (بيو فالون, سيشيل)\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.38,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                24,\n                55,\n                70,\n                82,\n                94,\n                97,\n                99,\n                101\n            ],\n            \"review\": {\n                \"hotelId\": 1141272,\n                \"count\": 311,\n                \"name\": \"Lemongrass Lodge\",\n                \"sourcesCount\": 3,\n                \"score\": 8.4,\n                \"scoreDescription\": {\n                    \"en\": \"Very good\",\n                    \"ar\": \"جيد جدا\"\n                },\n                \"scoreColor\": \"#71BC4C\"\n            },\n            \"topPicks\": null\n        },\n        \"1141275\": {\n            \"atgHotelId\": 1141275,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 35,\n            \"name\": {\n                \"en\": \"Kot Babi Guesthouse\",\n                \"ar\": \"كوت بابي جست هاوس\"\n            },\n            \"starRating\": 2,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/19000000/18050000/18049300/18049239/ef6585dd_b.jpg\",\n            \"area\": null,\n            \"rank\": 353,\n            \"longitude\": 55.830392,\n            \"latitude\": -4.347574,\n            \"distance\": 53.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"La Passe\",\n                \"ar\": \"La Passe\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.18,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                55,\n                67,\n                69,\n                82,\n                99,\n                8000,\n                8002,\n                8007,\n                8008,\n                8011,\n                8012,\n                8016,\n                8017,\n                8023\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1173019\": {\n            \"atgHotelId\": 1173019,\n            \"chainBrandId\": 180,\n            \"hotelChainId\": 19,\n            \"propertyTypeId\": 35,\n            \"name\": {\n                \"en\": \"Le Relax Self-Catering\",\n                \"ar\": \"لو ريلاكس سيلف كيترينج\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4676187/a_31.jpg\",\n            \"area\": null,\n            \"rank\": 578,\n            \"longitude\": 55.825422,\n            \"latitude\": -4.359532,\n            \"distance\": 51.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Anse Reunion, La Digue, Seychelles\",\n                \"ar\": \"Anse Reunion (لا ديج, سيشيل)\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.29,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                65,\n                82,\n                87,\n                94,\n                97,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1173019,\n                \"count\": 8,\n                \"name\": \"Le Relax Self Catering Apartment\",\n                \"sourcesCount\": 5,\n                \"score\": 0.0,\n                \"scoreDescription\": {\n                    \"en\": \"\",\n                    \"ar\": \"\"\n                },\n                \"scoreColor\": \"#F77D12\"\n            },\n            \"topPicks\": null\n        },\n        \"1141274\": {\n            \"atgHotelId\": 1141274,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 13,\n            \"name\": {\n                \"en\": \"Paodise Guesthouse\",\n                \"ar\": \"Paodise Guesthouse\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/images/full/73706c9d-c0b1-4d08-a899-bc78b8986842.jpeg\",\n            \"area\": null,\n            \"rank\": 421,\n            \"longitude\": 55.82884,\n            \"latitude\": -4.3531,\n            \"distance\": 52.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Anse Reunion\",\n                \"ar\": null\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.21,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                68,\n                86,\n                113\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1173018\": {\n            \"atgHotelId\": 1173018,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 13,\n            \"name\": {\n                \"en\": \"La Diguoise Guest House\",\n                \"ar\": \"La Diguoise Guest House\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://az712897.vo.msecnd.net/images/full/d7bc93d6-55dc-44d5-8116-f4e3c5d6491a.jpeg\",\n            \"area\": null,\n            \"rank\": 426,\n            \"longitude\": 55.82884,\n            \"latitude\": -4.35846,\n            \"distance\": 52.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Anse Reunion\",\n                \"ar\": null\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.21,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                54,\n                59,\n                95,\n                97,\n                100,\n                108,\n                112,\n                113\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1141277\": {\n            \"atgHotelId\": 1141277,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 13,\n            \"name\": {\n                \"en\": \"Island Bungalow\",\n                \"ar\": \"Island Bungalow\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/images/full/80432e52-1d6a-4c02-a3f0-ecce1b878c12.jpeg\",\n            \"area\": null,\n            \"rank\": 421,\n            \"longitude\": 55.83143,\n            \"latitude\": -4.34247,\n            \"distance\": 53.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Anse Severe\",\n                \"ar\": null\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.21,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                97,\n                113\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1141276\": {\n            \"atgHotelId\": 1141276,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 35,\n            \"name\": {\n                \"en\": \"Chalet D Anse Reunion\",\n                \"ar\": \"شاليه دي أنس ريونيون\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4509149/a_24.jpg\",\n            \"area\": null,\n            \"rank\": 519,\n            \"longitude\": 55.827677,\n            \"latitude\": -4.35292,\n            \"distance\": 52.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Anse Reunion, La Digue, Seychelles\",\n                \"ar\": \"Anse Reunion (لا ديج, سيشيل)\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.26,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                55,\n                65,\n                69,\n                70,\n                82,\n                97,\n                99\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1141279\": {\n            \"atgHotelId\": 1141279,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 35,\n            \"name\": {\n                \"en\": \"Le Triskell\",\n                \"ar\": \"لو تريسكيل\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4509179/aaa.png\",\n            \"area\": null,\n            \"rank\": 509,\n            \"longitude\": 55.515745,\n            \"latitude\": -4.698745,\n            \"distance\": 3.4,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Au Cap, off 5th June Avenue, 98000 Anse aux Pins, Seychelles\",\n                \"ar\": \"Au Cap, off 5th June Avenue, 98000 (أنس أو برينس, سيشيل)\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.25,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                54,\n                55,\n                57,\n                59,\n                67,\n                69,\n                82,\n                87,\n                94,\n                97,\n                99,\n                100,\n                101,\n                120\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1301021\": {\n            \"atgHotelId\": 1301021,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 17,\n            \"name\": {\n                \"en\": \"Le Repaire - Boutique Hotel \u0026 Restaurant\",\n                \"ar\": \"لو ريباير - بوتيك هوتل آند ريستورانت\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/6000000/5460000/5457200/5457177/cf685618_z.jpg\",\n            \"area\": null,\n            \"rank\": 514,\n            \"longitude\": 55.82679,\n            \"latitude\": -4.3529,\n            \"distance\": 52.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Anse Reunion\",\n                \"ar\": \"Anse Reunion\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.26,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                55,\n                59,\n                62,\n                65,\n                67,\n                70,\n                82,\n                88,\n                97,\n                108,\n                8000,\n                8007,\n                8008,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1301021,\n                \"count\": 499,\n                \"name\": \"Le Repaire Boutique Hotel\",\n                \"sourcesCount\": 6,\n                \"score\": 9.0,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1141278\": {\n            \"atgHotelId\": 1141278,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 35,\n            \"name\": {\n                \"en\": \"Belle Des Iles\",\n                \"ar\": \"بيل ديز ييل\"\n            },\n            \"starRating\": 2,\n            \"thumbnailUrl\": \"https://hotelcmsimages.s3-eu-west-1.amazonaws.com/hotel/hotels/23000000/22380000/22377400/22377355/00f9b5f8_z.jpg\",\n            \"area\": null,\n            \"rank\": 453,\n            \"longitude\": 55.83433,\n            \"latitude\": -4.361942,\n            \"distance\": 52.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Anse Reunion, SEZ La Digue\",\n                \"ar\": \"Anse Reunion, SEZ La Digue\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.23,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                55,\n                62,\n                67,\n                69,\n                70,\n                82,\n                87,\n                94,\n                97\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1429018\": {\n            \"atgHotelId\": 1429018,\n            \"chainBrandId\": 513,\n            \"hotelChainId\": 257,\n            \"propertyTypeId\": 20,\n            \"name\": {\n                \"en\": \"Chez Bea Luxury Villa\",\n                \"ar\": \"شيز بي لاكشري فيلا\"\n            },\n            \"starRating\": 3,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/6611777/a_1.jpg\",\n            \"area\": null,\n            \"rank\": 561,\n            \"longitude\": 55.760134,\n            \"latitude\": -4.326196,\n            \"distance\": 49.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Marie-Jeanne Estate, Baie Sainte Anne, Seychelles\",\n                \"ar\": \"Marie-Jeanne Estate, (باي سانت آن, سيشيل)\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.28,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                42,\n                55,\n                59,\n                65,\n                67,\n                69,\n                70,\n                82,\n                87,\n                94,\n                97,\n                99\n            ],\n            \"review\": null,\n            \"topPicks\": null\n        },\n        \"1068544\": {\n            \"atgHotelId\": 1068544,\n            \"chainBrandId\": 106,\n            \"hotelChainId\": 197,\n            \"propertyTypeId\": 31,\n            \"name\": {\n                \"en\": \"Hilton Seychelles Northolme Resort \u0026 Spa\",\n                \"ar\": \"هيلتون سيشيليز نورث هولم ريزورت آند سبا\"\n            },\n            \"starRating\": 5,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/4231065/4_32.jpg\",\n            \"area\": null,\n            \"rank\": 1516,\n            \"longitude\": 55.432516,\n            \"latitude\": -4.592229,\n            \"distance\": 12.0,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Glacis, Glacis, Seychelles\",\n                \"ar\": \"(جلاكيه, سيشيل)  Glacis\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.76,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                5,\n                38,\n                42,\n                43,\n                54,\n                55,\n                57,\n                62,\n                63,\n                65,\n                69,\n                70,\n                77,\n                80,\n                82,\n                84,\n                87,\n                88,\n                97,\n                99,\n                100,\n                101,\n                108,\n                110,\n                120,\n                122,\n                8000,\n                8002,\n                8007,\n                8008,\n                8009,\n                8010,\n                8011,\n                8023\n            ],\n            \"review\": {\n                \"hotelId\": 1068544,\n                \"count\": 558,\n                \"name\": \"Hilton Seychelles Northolme Resort \u0026 Spa\",\n                \"sourcesCount\": 21,\n                \"score\": 9.1,\n                \"scoreDescription\": {\n                    \"en\": \"Excellent\",\n                    \"ar\": \"ممتاز\"\n                },\n                \"scoreColor\": \"#129911\"\n            },\n            \"topPicks\": null\n        },\n        \"1283075\": {\n            \"atgHotelId\": 1283075,\n            \"chainBrandId\": 180,\n            \"hotelChainId\": 19,\n            \"propertyTypeId\": 31,\n            \"name\": {\n                \"en\": \"Berjaya Beau Vallon Bay Resort \u0026 Casino\",\n                \"ar\": \"بيرجايا بيو فالون باي ريزورت آند كازينو\"\n            },\n            \"starRating\": 4,\n            \"thumbnailUrl\": \"https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/5270514/asd_1.jpg\",\n            \"area\": null,\n            \"rank\": 764,\n            \"longitude\": 55.428315,\n            \"latitude\": -4.617234,\n            \"distance\": 9.9,\n            \"distanceInMeters\": null,\n            \"address\": {\n                \"en\": \"Bel Ombre Road, Beau Vallon, Seychelles\",\n                \"ar\": \"Bel Ombre Road, (بيو فالون, سيشيل)\"\n            },\n            \"distanceScore\": 1.0,\n            \"priorityScore\": 0.38,\n            \"similarityScore\": 0.0,\n            \"facilityIds\": [\n                2,\n                5,\n                6,\n                14,\n                24,\n                32,\n                37,\n                38,\n                42,\n                46,\n                51,\n                54,\n                55,\n                62,\n                65,\n                67,\n                69,\n                70,\n                80,\n                87,\n                88,\n                97,\n                99,\n                108,\n                109,\n                110,\n                120,\n                122,\n                8002,\n                8007,\n                8008,\n                8011\n            ],\n            \"review\": {\n                \"hotelId\": 1283075,\n                \"count\": 1701,\n                \"name\": \"Berjaya Beau Vallon Bay Resort \u0026 Casino\",\n                \"sourcesCount\": 23,\n                \"score\": 7.3,\n                \"scoreDescription\": {\n                    \"en\": \"Good\",\n                    \"ar\": \"جيد\"\n                },\n                \"scoreColor\": \"#A1CC4F\"\n            },\n            \"topPicks\": null\n        }\n    },\n    \"distanceDetails\": null,\n    \"pagination\": {\n        \"nextPageId\": \"CwEBAAx6BaKoiwGmqIsBrICmAaSoiwGkuIoBqqiLAaCApQGoqIsBrqiLAayoiwG60KwBsqiLAbCoiwG2qIsBtpiPAbSoiwG0mI8BuqiLAbioiwG66J4BvqiLAbyoiwG0uK4BhtCcAYC4ggGE0JwBgriCAYyIqQGOmKUBiNibAZjgqAGe2J0BjrDLAYywywHg6KYB_LDTAeKwpQH-sNMB9qidAfjooQH44IEB-uCBAfzggQHywLMB_uCBAcCQowHQyKIB2oifAaS5sQGkkbsBtvGcAbqJowGwwaUBtKmgAYqZrgGA4YEBguGBAYThgQGG4YEBiOGBAYrhgQGY-dABmvnQAZihpAGA-c0BhqnQAYCx0wGCsdMBjvHVAeqRsAHkybAB-qGmAf7hnQH66ZsB1PHRAcjxoAHQ8dEB0vHRAcCRoAHOoZwByOmdAcbZpQHe0bEB0pGeAdChnAHSiakB0NmsAdT5oQGg-qEBtKqBAbzKoQG2qoEBuKqBAbqqgQG8qoEBvqqBAbTKqAGK2qABjvKuAYrisgGImp4BnoqfAeTikQHm4pEB4OKRAeLikQHs4pEB7uKRAeairwHo4pEB6uKRAeDawgH04pEB4trCAfbikQH-6qgB5NrCAfDikQHm2sIB8uKRAfzikQH-4pEB-OKRAfrikQHO4rwBzOK8AcKqgQHCmp8BxqqBAdbawgHIqoEB2NrCAcqqgQHa2sIBzKqBAdzawgHe2sIB3uK8AdTikQHc4rwB1uKRAdrivAHQ4pEB2OK8Ad7KpAHS4pEB1uK8AdzikQHU4rwB3uKRAdLivAHU0qIB2OKRAdKitAHQ4rwB2uKRAa7LtgGE45EBhuORAY6jqwGA45EBguORAYCzpAGM45EBhMuxAY7jkQGI45EBiuORAZTjkQGW45EBmPuoAZDjkQGS45EBlJOyAZKrowGY45EBlIOvAZrjkQHs65wB4rumAfqDowH244QB-OOEAe7b0QH644QB-pueAfTToAH844QB_uOEAc7LugHM07sBzMu6AcrLugHK07sByMu6AcrTswHGy7oBxMu6AcLLugHAy7oB2POuAdzbrAHUy7oB0su6AdDLugGspKgBoISvAbDMowGwvKIBsqSgAbKksQGKpKwBgOSEAYLkhAGE5IQBhuSEAYr8iQGI5IQBiuSEAY78iQGM5IQBjPyJAZL8iQGYhKMBkPyJAZT8iQGevKUBmpSBAZyUgQGWhKsB4oSIAeCEiAHmhIgB5ISIAeqEiAHohIgB7oSIAeyEiAHwhIgB_oSIAfaEpQHSrMwBxuScAcqMqAHE9J4BysSkAcqMpgHCjJ0B1KzMAc7EnwHI5JwB2JSpAcT82QHehIgB3ISIAaDloAGg_aABoOWrAaLloAG4taIBsv2bAb6NoAGw_ZsBtKWhAZSF2QGShdkBkIXZAZ7dywGc3csBmK2kAZydqwGSpa0BkrWjAZzFnQGUtaMB7K22AfKFwgHurbYB6K22AeqttgH6rckB5K22AfityQHmrbYB6o2dAeCttgHkxacB_K3JAeKttgH69aAB8u2eAeyN1QH0rbYB7o3VAfCttgHyrbYBzMWnAcLlpgHI9Z0B3K22Ad6ttgHYrbYB3s2lAd7logHarbYB2tWKAdDVrQHWrbYB2NWKAab2nwGs5p8Bvva-AbjOoQG89r4Buva-Abj2vgG29r4BtPa-AbL2vgGw9r4BirauAZKe2wGC1p8BnJajAZyeoAHgzoIB6LagAeq-oAHi5p4B_L7HAejGnwHm5tYB_o6pAfLerwHyzrsByJajAcj2vgHG9r4BxPa-AcL2vgHA9r4Bwp7PAcCezwHGns8B0O6cAd72oAHEns8B0ratAbi_sQGw56cBtN-lAYyPpQGUz8UBls_FAYDXpAGYz8UBgK-0AYa_1wGep4QB6Ke0AeiPtwHuz58B4M-nAeavowHyt4IB-LeCAfq3ggH6_5wB_LeCAf63ggHA95wBxv_ZAdCfigHE_9kBwv_ZAdDXpwHI_9kBAf3YJD_itxLADobYs9mK2LTZitmEU2V5Y2hlbGxl82NvdW50cvkBLbEyGvm-S0ABMgEyAaD3NgEAAQA\u003d\",\n        \"pageNo\": 0,\n        \"pageSize\": 25,\n        \"totalResultsCount\": 377\n    },\n    \"geoCoordinate\": null\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate pagesize \"25\" in response",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validatePageSizeInResponse(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test the error scenarios with invalid dataset",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@issue\u003d3"
    },
    {
      "name": "@tmsLink\u003d3"
    },
    {
      "name": "@severiy\u003dnormal"
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
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@issue\u003d3"
    },
    {
      "name": "@tmsLink\u003d3"
    },
    {
      "name": "@severiy\u003dnormal"
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
formatter.write("GET URL : https://www.tajawal.ae/api/enigma/content/hotels/summaries?query\u003dSINGAPORE\u0026pageSize\u003d0");
formatter.write("HEADERS : {token\u003ds73827732j9$872u3lkNp}");
formatter.write("{\n    \"timestamp\": \"2021-03-12T01:06:20.784+0000\",\n    \"path\": \"/content/summary\",\n    \"status\": 400,\n    \"error\": \"Bad Request\",\n    \"message\": null,\n    \"requestId\": \"15c97f55\",\n    \"exception\": \"com.seera.exception.ValidationException\",\n    \"trace\": null,\n    \"traceId\": \"90e0cbdecb6ed928\",\n    \"serviceName\": \"hotel-core-service\",\n    \"errorCodes\": [\n        \"1028\"\n    ],\n    \"errorType\": \"Validation error\",\n    \"code\": 106\n}");
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
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@issue\u003d3"
    },
    {
      "name": "@tmsLink\u003d3"
    },
    {
      "name": "@severiy\u003dnormal"
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
formatter.write("GET URL : https://www.tajawal.ae/api/enigma/content/hotels/summaries?query\u003d\u0026pageSize\u003d10");
formatter.write("HEADERS : {token\u003ds73827732j9$872u3lkNp}");
formatter.write("{\n    \"timestamp\": \"2021-03-12T01:06:21.156+0000\",\n    \"path\": \"/content/summary\",\n    \"status\": 400,\n    \"error\": \"Bad Request\",\n    \"message\": null,\n    \"requestId\": \"09993d03\",\n    \"exception\": \"com.seera.exception.ValidationException\",\n    \"trace\": null,\n    \"traceId\": \"bdf6defc66f29a36\",\n    \"serviceName\": \"hotel-core-service\",\n    \"errorCodes\": [\n        \"1018\"\n    ],\n    \"errorType\": \"Validation error\",\n    \"code\": 106\n}");
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
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@issue\u003d3"
    },
    {
      "name": "@tmsLink\u003d3"
    },
    {
      "name": "@severiy\u003dnormal"
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
formatter.write("GET URL : https://www.tajawal.ae/api/enigma/content/hotels/summaries?query\u003d");
formatter.write("HEADERS : {token\u003ds73827732j9$872u3lkNp}");
formatter.write("{\n    \"timestamp\": \"2021-03-12T01:06:21.548+0000\",\n    \"path\": \"/content/summary\",\n    \"status\": 400,\n    \"error\": \"Bad Request\",\n    \"message\": null,\n    \"requestId\": \"e3037657\",\n    \"exception\": \"com.seera.exception.ValidationException\",\n    \"trace\": null,\n    \"traceId\": \"2cfcd17b1a2f0bec\",\n    \"serviceName\": \"hotel-core-service\",\n    \"errorCodes\": [\n        \"1018\"\n    ],\n    \"errorType\": \"Validation error\",\n    \"code\": 106\n}");
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
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@issue\u003d3"
    },
    {
      "name": "@tmsLink\u003d3"
    },
    {
      "name": "@severiy\u003dnormal"
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
formatter.write("GET URL : https://www.tajawal.ae/api/enigma/content/hotels/summaries?query\u003dSINGAPORE\u0026pageSize\u003d-1");
formatter.write("HEADERS : {token\u003ds73827732j9$872u3lkNp}");
formatter.write("{\n    \"timestamp\": \"2021-03-12T01:06:22.037+0000\",\n    \"path\": \"/content/summary\",\n    \"status\": 400,\n    \"error\": \"Bad Request\",\n    \"message\": null,\n    \"requestId\": \"803dda69\",\n    \"exception\": \"com.seera.exception.ValidationException\",\n    \"trace\": null,\n    \"traceId\": \"5eafb3c71def0a5d\",\n    \"serviceName\": \"hotel-core-service\",\n    \"errorCodes\": [\n        \"1028\"\n    ],\n    \"errorType\": \"Validation error\",\n    \"code\": 106\n}");
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