Feature: Recover all the mushrooms
  In order to view all the mushrooms registered
  As an user
  I want to get all mushrooms

  Scenario: Get all mushrooms
    Given the mushroom store empty
    And a mushroom with id "430092b9-8a72-4e02-b14a-a99d6e0b2d8c" already defined
    And a mushroom with id "60009cff-f2de-4c7d-82b9-b1046d8ba1b2" already defined
    When I send a GET request to "/mushrooms"
    Then the response status code should be 200
    And the response should contains an element with id "430092b9-8a72-4e02-b14a-a99d6e0b2d8c"
    And the response should contains an element with id "60009cff-f2de-4c7d-82b9-b1046d8ba1b2"

  Scenario: Return empty response when there are not mushrooms registered
    Given the mushroom store empty
    When I send a GET request to "/mushrooms"
    Then the response status code should be 200
    And the response should be an empty array
