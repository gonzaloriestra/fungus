Feature: Recover all the locations
  In order to view all the locations registered
  As an user
  I want to get all locations

  Scenario: Get all locations
    Given the location store empty
    And a location with id "942b2922-ef5b-4369-af82-a332222a7d12" already defined
    And a location with id "c251b9a5-e840-4c5f-859d-c2f5422a7fa3" already defined
    When I send a GET request to "/locations"
    Then the response status code should be 200
    And the response should contains an element with id "942b2922-ef5b-4369-af82-a332222a7d12"
    And the response should contains an element with id "c251b9a5-e840-4c5f-859d-c2f5422a7fa3"

  Scenario: Return empty response when there are not locations registered
    Given the location store empty
    When I send a GET request to "/locations"
    Then the response status code should be 200
    And the response should be empty
