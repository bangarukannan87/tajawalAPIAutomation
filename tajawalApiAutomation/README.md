# Tajawal API Automation

## Summary
Tajawal API Automation using Cucumber with JAVA. Cucumber and Allure reports are used.

## Prerequisites
JAVA 1.8, Maven 3+ and Allure needs to be installed

## Framework Overview
1. Test Environment is configured in src/main/resources/config/config.properties.
2. Test Runner files are present under src/test/java/runCukes/
3. Test Scenarios are present under *.feature files in src/main/java/resources/features/
4. Step Definitions are present under src/main/java/com/tajawal/step/definition/
5. Service implementation is present under src/main/java/com/tajawal/service/implementation/
6. Sample Allure and Cucumber report screenshots are present under sample-reports/

## Steps to execute the test
1. Below are the various options to execute the testcases and generate Cucumber report,
   - To generate report with specific functionality

  ```mvn clean test -P cucumberReport-test -Dtest.tagnames=calenderPricing```
   - To generate report with specific environment (default - STAGING environment)

  ```mvn clean test -P cucumberReport-test -Dtest.tagnames=hotelDetails -Dtest.environment=STAGING```
   - To generate report for all cases

  ```mvn clean test -P cucumberReport-test```

   **Note:**
  Cucumber reports will be created under target/html-reports/*/index.html Eg.(target/html-reports/HotelDetailsTest/index.html

2. To generate Allure report, please use the profile name(-P option) as 'allureReport-test'. All the above mentioned ways are applicable,

  ```mvn clean test -P allureReport-test -Dtest.tagnames=calenderPricing```

 **Note:**
  To open Allure report, please type 'allure serve' command from terminal