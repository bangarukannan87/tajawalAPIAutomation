@TC_CalenderPricing
Feature: As a user i want to fetch Hotel Details for a given city

  Scenario Outline: Retrieve the Calender fares for the one way routes
    Given I want to retrieve fares for "<SECTOR>", "<TRAVELDATE>", "<CABIN>", "<PAX_TYPE>", "<STOPS>" and "<AIRLINES>"
    Then Validate the response calender price date for the given "<TRAVELDATE>"
#  String sector, String travelDates, String cabin, String passengerType,
#  String stops, String airlines
#    Then Validate response status code as "200"
##    Then Validate "<CITY>" in hotel name or address
#    Then Validate the image appearing for each hotel
    Examples:
      | SECTOR  | TRAVELDATE | CABIN   | PAX_TYPE          | STOPS | AIRLINES |
      | DXB-MAA | 20-22      | Economy | ADT-1,CHD-0,INF-0 |       |          |
      | JED-DXB | 20-30      | Economy | ADT-1,CHD-1,INF-1 |       | EK,EY,QR |
      | DXB-ICN | 1-2        | Economy | ADT-2,CHD-0,INF-0 | 1,2   |          |


  Scenario Outline: Retrieve the Calender fares for the round trip / multi-city routes
    Given I want to retrieve fares for "<SECTOR>", "<TRAVELDATE>", "<CABIN>", "<PAX_TYPE>", "<STOPS>" and "<AIRLINES>"
#  String sector, String travelDates, String cabin, String passengerType,
#  String stops, String airlines
#    Then Validate response status code as "200"
##    Then Validate "<CITY>" in hotel name or address
#    Then Validate the image appearing for each hotel
    Examples:
      | SECTOR          | TRAVELDATE  | CABIN   | PAX_TYPE          | STOPS | AIRLINES |
      | DXB-MAA/MAA-DXB | 20-22/50-55 | Economy | ADT-1,CHD-0,INF-0 |       |          |
      | JED-DXB/AUH-SIN | 20-30/90-95 | Economy | ADT-1,CHD-1,INF-1 |       | EK,FZ    |
      | DXB-ICN/ICN-DXB | 1-2/50-52   | Economy | ADT-2,CHD-0,INF-0 | 1,2   |          |