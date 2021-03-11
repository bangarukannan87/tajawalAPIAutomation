@TC_CalenderPricing
@Regression
Feature: As a user i want to retrieve the calendar fares for the given date and route

  @severity=critical
  @issue=10
  @tmsLink=21
  Scenario Outline: Retrieve the Calender fares for the one way routes
    Given I want to retrieve fares for "<SECTOR>", "<TRAVELDATE>", "<CABIN>", "<PAX_TYPE>", "<STOPS>" and "<AIRLINES>"
    Then Validate Calender fare response status code as "200"
    Then Validate the response calender price date for the given "<TRAVELDATE>"

    Examples:
      | SECTOR  | TRAVELDATE | CABIN   | PAX_TYPE          | STOPS | AIRLINES |
      | DXB-MAA | 20-22      | Economy | ADT-1,CHD-0,INF-0 |       |          |
      | JED-DXB | 20-30      | Economy | ADT-1,CHD-1,INF-1 |       | EK,EY,QR |
      | DXB-ICN | 1-2        | Economy | ADT-2,CHD-0,INF-0 | 1,2   |          |

  @severity=critical
  @issue=11
  @tmsLink=11
  Scenario Outline: Retrieve the Calender fares for the round trip / multi-city routes
    Given I want to retrieve fares for "<SECTOR>", "<TRAVELDATE>", "<CABIN>", "<PAX_TYPE>", "<STOPS>" and "<AIRLINES>"
    Then Validate Calender fare response status code as "200"
    Then Validate the response calender price date for the given "<TRAVELDATE>"


    Examples:
      | SECTOR          | TRAVELDATE  | CABIN   | PAX_TYPE          | STOPS | AIRLINES |
      | DXB-MAA/MAA-DXB | 20-22/50-55 | Economy | ADT-1,CHD-0,INF-0 |       |          |
      | JED-DXB/AUH-SIN | 20-30/90-95 | Economy | ADT-1,CHD-1,INF-1 |       | EK,FZ    |
      | DXB-ICN/ICN-DXB | 1-2/50-52   | Economy | ADT-2,CHD-0,INF-0 | 1,2   |          |

  @severity=blocker
  @issue=12
  @tmsLink=12
  Scenario Outline: Validate the schema for oneway / round trip / multi-city routes
    Given I want to retrieve fares for "<SECTOR>", "<TRAVELDATE>", "<CABIN>", "<PAX_TYPE>", "<STOPS>" and "<AIRLINES>"
    Then Validate Calender fare response status code as "200"
    Then Validate the Calender fare response against schema

    Examples:
      | SECTOR          | TRAVELDATE  | CABIN   | PAX_TYPE          | STOPS | AIRLINES |
      | DXB-MAA         | 20-22       | Economy | ADT-1,CHD-0,INF-0 |       |          |
      | DXB-MAA/MAA-DXB | 20-22/50-55 | Economy | ADT-1,CHD-0,INF-0 |       |          |
      | JED-DXB/AUH-SIN | 20-30/90-95 | Economy | ADT-1,CHD-1,INF-1 |       | EK,FZ    |
