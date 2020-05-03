Feature: Register a new harvest
  In order to have harvests in the platform
  As a user
  I want to define a new harvest

  Scenario: A valid new harvest
    Given A mushroom with id "841d8c5e-bcac-43e3-9961-3ac28096a495" already defined
#    Given A status code 201 from a PUT request already executed to "/mushrooms/841d8c5e-bcac-43e3-9961-3ac28096a495" with body:
#    """
#    {
#      "scientificName": "Amanita muscaria"
#    }
#    """
    When I send a PUT request to "/harvests/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "date": "2019-10-15",
      "mushroomId": "841d8c5e-bcac-43e3-9961-3ac28096a495",
      "quantity": "5"
    }
    """
    Then the response status code should be 201
    And the response should be empty

  Scenario: Mushroom associated does not exist yet
    When I send a PUT request to "/harvests/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "date": "2019-10-15",
      "mushroomId": "a8c433d7-3d5f-4d75-b92d-f5be820bf76f",
      "quantity": "5"
    }
    """
    Then the response status code should be 400