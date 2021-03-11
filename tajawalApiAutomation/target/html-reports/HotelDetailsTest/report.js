$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/HotelDetails.feature");
formatter.feature({
  "name": "As a user i want to fetch Hotel Details for a given city",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify the hotel details for a given city",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "Validate \"\u003cCITY\u003e\" in hotel name or address",
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
  "name": "Verify the hotel details for a given city",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    }
  ]
});
formatter.step({
  "name": "I want fetch the hotel details for the \"DUBAI\" with \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
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
  "name": "Validate \"DUBAI\" in hotel name or address",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateCity(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: BASED ON ASSUMPTION, CITY NAME NOT PRESENT IN HOTEL NAME OR ADDRESS. HERE ARE THE LIST, \n[{ar\u003dجراند الإمارات للشقق الفندقية, en\u003dEmirates Grand Hotel Apartments}, {ar\u003dجيه إيه أوشن فيو هوتل, en\u003dJA Ocean View Hotel}, {ar\u003dالعنوان داونتاون, en\u003dAddress Downtown }, {ar\u003dفندق كمبينسكي مول الإمارات , en\u003dKempinski Hotel Mall of the Emirates}]\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.tajawal.step.definition.HotelDetailsSteps.validateCity(HotelDetailsSteps.java:107)\r\n\tat ✽.Validate \"DUBAI\" in hotel name or address(file:src/main/resources/features/HotelDetails.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify the hotel details for a given city",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    }
  ]
});
formatter.step({
  "name": "I want fetch the hotel details for the \"DELHI\" with \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
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
  "name": "Validate \"DELHI\" in hotel name or address",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateCity(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: BASED ON ASSUMPTION, CITY NAME NOT PRESENT IN HOTEL NAME OR ADDRESS. HERE ARE THE LIST, \n[{ar\u003dAsset No 2, Aerocity Hospitality District, en\u003dAsset No 2, Aerocity Hospitality District}, {ar\u003d7 Sham Nath Marg, en\u003d7 Sham Nath Marg}, {ar\u003dجايبي فاسانت كونتننتال, en\u003dJaypee Vasant Continental}, {ar\u003dفندق بوتيك بالم سبرينج, en\u003dPalm Springs Stays}, {ar\u003dذا لودي - آيه ميمبر أوف ذا ليدنج هوتلز أوف ذا وورلد, en\u003dThe Lodhi - A member of The Leading Hotels Of The World}, {ar\u003dذا أشتان ساروفار بورتيكو, en\u003dThe Ashtan Sarovar Portico}, {ar\u003dروزيات هاوس, en\u003dRoseate House}, {ar\u003dذا تاج ماهال هوتل, en\u003dThe Taj Mahal Hotel}, {ar\u003dويلكوم هوتل دواركا - ميمبر آي تي سي هوتل غروب, en\u003dWelcomHotel Dwarka - Member ITC Hotel Group}, {ar\u003dSamalkha, NH-8, en\u003dSamalkha, NH-8}, {ar\u003dحياة بليس جورجاون/أوديوج فيهار, en\u003dHyatt Place Gurgaon/Udyog Vihar}, {ar\u003dBarakhamba Avenue, Connaught Place, en\u003dBarakhamba Avenue, Connaught Place}, {ar\u003dJanpath Road, en\u003dJanpath Road}, {ar\u003dراديسون جوروجرام يوديوج فيهار, en\u003dRadisson Gurugram Udyog Vihar}, {ar\u003dفندق \u0026 ريزيدنس ذا ليلا أمبيانس جورجاون, en\u003dThe Leela Ambience Hotel \u0026 Residences, Gurugram}, {ar\u003dDiplomatic Enclave, Sadar Patel, en\u003dDiplomatic Enclave, Sadar Patel}]\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.tajawal.step.definition.HotelDetailsSteps.validateCity(HotelDetailsSteps.java:107)\r\n\tat ✽.Validate \"DELHI\" in hotel name or address(file:src/main/resources/features/HotelDetails.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify the hotel details for a given city",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    }
  ]
});
formatter.step({
  "name": "I want fetch the hotel details for the \"LONDON\" with \"5\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
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
  "name": "Validate \"LONDON\" in hotel name or address",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateCity(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: BASED ON ASSUMPTION, CITY NAME NOT PRESENT IN HOTEL NAME OR ADDRESS. HERE ARE THE LIST, \n[{ar\u003dأمبا هوتل ماربل آرش, en\u003dAmba Hotel Marble Arch}, {ar\u003d(هيثرو, المملكة المتحدة)  M4J4, Cherry Lane, UB7 9HJ,, en\u003dM4J4, Cherry Lane, Heathrow, UB7 9HJ, United Kingdom}, {ar\u003d(هيلينغدون, المملكة المتحدة)  Highpoint Village, Station Approach, , UB3 4FL,, en\u003dHighpoint Village, Station Approach, Hillingdon, UB3 4FL, United Kingdom}]\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.tajawal.step.definition.HotelDetailsSteps.validateCity(HotelDetailsSteps.java:107)\r\n\tat ✽.Validate \"LONDON\" in hotel name or address(file:src/main/resources/features/HotelDetails.feature:7)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Verify the number of Hotel response as per the request",
  "description": "",
  "keyword": "Scenario Outline"
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
    }
  ]
});
formatter.step({
  "name": "I want fetch the hotel details for the \"JEDDAH\" with \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
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
    }
  ]
});
formatter.step({
  "name": "I want fetch the hotel details for the \"SEYCHELLES\" with \"25\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
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
  "name": "Verify the hotel name in arabic language",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.step({
  "name": "Validate the hotelname in arabic",
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
        "SYDNEY",
        "10"
      ]
    },
    {
      "cells": [
        "CHENNAI",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the hotel name in arabic language",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    }
  ]
});
formatter.step({
  "name": "I want fetch the hotel details for the \"SYDNEY\" with \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
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
formatter.step({
  "name": "Validate the hotelname in arabic",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateArabicLanguage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the hotel name in arabic language",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_HotelDetails"
    }
  ]
});
formatter.step({
  "name": "I want fetch the hotel details for the \"CHENNAI\" with \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
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
  "name": "Validate pagesize \"\" in response",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validatePageSizeInResponse(String)"
});
formatter.result({
  "error_message": "java.lang.NumberFormatException: For input string: \"\"\r\n\tat java.lang.NumberFormatException.forInputString(NumberFormatException.java:65)\r\n\tat java.lang.Integer.parseInt(Integer.java:592)\r\n\tat java.lang.Integer.parseInt(Integer.java:615)\r\n\tat com.tajawal.step.definition.HotelDetailsSteps.validatePageSizeInResponse(HotelDetailsSteps.java:70)\r\n\tat ✽.Validate pagesize \"\" in response(file:src/main/resources/features/HotelDetails.feature:28)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Validate the hotelname in arabic",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateArabicLanguage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Test the error scenarios with invalid dataset",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.step({
  "name": "I want fetch the hotel details for the \"SINGAPORE\" with \"0\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.tajawal.step.definition.HotelDetailsSteps.validateArabicLanguage(HotelDetailsSteps.java:115)\r\n\tat com.tajawal.step.definition.HotelDetailsSteps.callHotelDetails(HotelDetailsSteps.java:46)\r\n\tat ✽.I want fetch the hotel details for the \"SINGAPORE\" with \"0\"(file:src/main/resources/features/HotelDetails.feature:37)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Validate response status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateStatusCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate the error message \"BAD REQUEST\" in response",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateTheErrorMessageInResponse(String)"
});
formatter.result({
  "status": "skipped"
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
formatter.step({
  "name": "I want fetch the hotel details for the \"\" with \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.tajawal.step.definition.HotelDetailsSteps.validateArabicLanguage(HotelDetailsSteps.java:115)\r\n\tat com.tajawal.step.definition.HotelDetailsSteps.callHotelDetails(HotelDetailsSteps.java:46)\r\n\tat ✽.I want fetch the hotel details for the \"\" with \"10\"(file:src/main/resources/features/HotelDetails.feature:37)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Validate response status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateStatusCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate the error message \"BAD REQUEST\" in response",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateTheErrorMessageInResponse(String)"
});
formatter.result({
  "status": "skipped"
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
formatter.step({
  "name": "I want fetch the hotel details for the \"\" with \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelDetailsSteps.callHotelDetails(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.tajawal.step.definition.HotelDetailsSteps.validateArabicLanguage(HotelDetailsSteps.java:115)\r\n\tat com.tajawal.step.definition.HotelDetailsSteps.callHotelDetails(HotelDetailsSteps.java:46)\r\n\tat ✽.I want fetch the hotel details for the \"\" with \"\"(file:src/main/resources/features/HotelDetails.feature:37)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Validate response status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateStatusCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate the error message \"BAD REQUEST\" in response",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelDetailsSteps.validateTheErrorMessageInResponse(String)"
});
formatter.result({
  "status": "skipped"
});
});