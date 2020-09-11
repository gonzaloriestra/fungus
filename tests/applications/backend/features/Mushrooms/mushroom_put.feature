Feature: Register a new mushroom
  In order to have mushrooms in the platform
  As an user
  I want to define a new mushroom

  Scenario: A valid new mushroom
    When I send a PUT request to "/mushrooms/a52785bc-55da-402b-8b14-675b174195ca" with body:
    """
    {
      "scientificName": "Amanita caesarea"
    }
    """
    Then the response status code should be 201
    And the response should be empty