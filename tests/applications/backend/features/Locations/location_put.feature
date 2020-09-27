Feature: Register a new location
  In order to have locations registered in the application
  As an user
  I want to define new locations

  Scenario: A valid new location
    Given the location store empty
    When I send a PUT request to "/locations/102f7781-b348-4909-be47-866c99c308f6" with body:
    """
    {
      "name": "Pinar de Riocamba",
      "coordinates":
      [
        {
          "latitude": "42.741599",
          "longitude": "-4.885334"
        },
        {
          "latitude": "42.736840",
          "longitude": "-4.886794"
        },
        {
          "latitude": "42.735547",
          "longitude": "-4.883187"
        },
        {
          "latitude": "42.741442",
          "longitude": "-4.882156"
        }
      ]
    }
    """
    Then the response status code should be 201
    And the response should be empty

  Scenario: The location to be registered, already exists in the application
    Given the location store empty
    And a location with id "102f7781-b348-4909-be47-866c99c308f6" already defined
    When I send a PUT request to "/locations/102f7781-b348-4909-be47-866c99c308f6" with body:
    """
    {
      "name": "Pinar de Riocamba",
      "coordinates":
      [
        {
          "latitude": "42.741599",
          "longitude": "-4.885334"
        },
        {
          "latitude": "42.736840",
          "longitude": "-4.886794"
        },
        {
          "latitude": "42.735547",
          "longitude": "-4.883187"
        },
        {
          "latitude": "42.741442",
          "longitude": "-4.882156"
        }
      ]
    }
    """
    Then the response status code should be 404
    And the response should be empty