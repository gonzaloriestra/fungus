# To-Do Move test folder with their applications
Feature: Recover all the locations
  In order to view the details of an specific location
  As an user
  I want to get a location

  Scenario: Get an existing location
    Given the location store empty
    And a location with id "942b2922-ef5b-4369-af82-a332222a7d12" already defined
    When I send a GET request to "/locations/942b2922-ef5b-4369-af82-a332222a7d12"
    Then the response status code should be 200
    And the response should be an element with id "942b2922-ef5b-4369-af82-a332222a7d12"
    And the response should contain "area" not empty

  Scenario: Not found when the location does not exist
    Given the location store empty
    When I send a GET request to "/locations/942b2922-ef5b-4369-af82-a332222a7d12"
    Then the response status code should be 404
    And the response should be empty
