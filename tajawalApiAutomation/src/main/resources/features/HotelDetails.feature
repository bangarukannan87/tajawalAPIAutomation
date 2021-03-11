@TC_HotelDetails
@Regression
Feature: As a user i want to fetch Hotel Details for a given city

  @issue=1
  @tmsLink=1
  @severiy=blocker
  Scenario Outline: Verify the valid image display to each hotel in response
    Given I want fetch the hotel details for the "<CITY>" with "<PAGE_SIZE>"
    Then Validate response status code as "200"
    Then Validate the image appearing for each hotel
    Examples:
      | CITY   | PAGE_SIZE |
      | DUBAI  | 10        |
      | DELHI  |           |
      | LONDON | 5         |

  @issue=2
  @tmsLink=5
  @severiy=critical
  Scenario Outline: Verify the number of Hotel response as per the request
    Given I want fetch the hotel details for the "<CITY>" with "<PAGE_SIZE>"
    Then Validate response status code as "200"
    Then Validate pagesize "<PAGE_SIZE>" in response
    Examples:
      | CITY       | PAGE_SIZE |
      | JEDDAH     | 10        |
      | SEYCHELLES | 25        |


  @issue=3
  @tmsLink=3
  @severiy=normal
  Scenario Outline: Test the error scenarios with invalid dataset
    Given I want fetch the hotel details for the "<CITY>" with "<PAGE_SIZE>"
    Then Validate response status code as "400"
    Then Validate the error message "<ERROR>" in response
    Examples:
      | CITY      | PAGE_SIZE | ERROR       |
      | SINGAPORE | 0         | BAD REQUEST |
      |           | 10        | BAD REQUEST |
      |           |           | BAD REQUEST |
      | SINGAPORE | -1        | BAD REQUEST |