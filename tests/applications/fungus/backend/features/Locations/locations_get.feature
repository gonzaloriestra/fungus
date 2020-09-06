Feature: Recover all the locations
  In order to view all the locations registered
  As an user
  I want to get all locations

  Scenario: Get all locations
    When I send a GET request to "/locations"
    Then the response status code should be 200