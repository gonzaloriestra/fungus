Feature: Register a new harvest
  In order to have harvests in the platform
  As a user
  I want to define a new harvest

  Scenario: A valid new harvest
    Given I send a PUT request to "/harvests/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "date": "2019-10-15",
      "quantity": "5"
    }
    """
    Then the response status code should be 201
    And the response should be empty