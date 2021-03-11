
Feature: As a user i want to fetch Hotel Details for a given city
  @TC_CalenderPricing
  Scenario Outline: Retrieve the Calender fares for the one way routes
    Given I want to retrieve fares for "<SECTOR>", "<TRAVELDATE>", "<CABIN>", "<PAX_TYPE>", "<STOPS>" and "<AIRLINES>"
    Then Validate Calender fare response status code as "200"
    Then Validate the response calender price date for the given "<TRAVELDATE>"
    Then Validate the Calender fare response against schema

    Examples:
      | SECTOR  | TRAVELDATE | CABIN   | PAX_TYPE          | STOPS | AIRLINES |
      | DXB-MAA | 20-22      | Economy | ADT-1,CHD-0,INF-0 |       |          |
      | JED-DXB | 20-30      | Economy | ADT-1,CHD-1,INF-1 |       | EK,EY,QR |
      | DXB-ICN | 1-2        | Economy | ADT-2,CHD-0,INF-0 | 1,2   |          |


  Scenario Outline: Retrieve the Calender fares for the round trip / multi-city routes
    Given I want to retrieve fares for "<SECTOR>", "<TRAVELDATE>", "<CABIN>", "<PAX_TYPE>", "<STOPS>" and "<AIRLINES>"
    Then Validate Calender fare response status code as "200"
    Then Validate the response calender price date for the given "<TRAVELDATE>"
    Then Validate the Calender fare response against schema

    Examples:
      | SECTOR          | TRAVELDATE  | CABIN   | PAX_TYPE          | STOPS | AIRLINES |
      | DXB-MAA/MAA-DXB | 20-22/50-55 | Economy | ADT-1,CHD-0,INF-0 |       |          |
      | JED-DXB/AUH-SIN | 20-30/90-95 | Economy | ADT-1,CHD-1,INF-1 |       | EK,FZ    |
      | DXB-ICN/ICN-DXB | 1-2/50-52   | Economy | ADT-2,CHD-0,INF-0 | 1,2   |          |