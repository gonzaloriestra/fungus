Feature: Register a new harvest
  In order to have harvests in the platform
  As a user
  I want to define a new harvest

  Scenario: A valid new harvest
    Given A mushroom with id "841d8c5e-bcac-43e3-9961-3ac28096a495" already defined
    Given A location with id "85c2cec-f362-432e-a136-5440816a584b" already defined
    When I send a PUT request to "/harvests/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "date": "2019-10-15",
      "mushroomId": "841d8c5e-bcac-43e3-9961-3ac28096a495",
      "locationId": "85c2cec-f362-432e-a136-5440816a584b",
      "quantity": "5"
    }
    """
    Then the response status code should be 201
    And the response should be empty

  Scenario: Mushroom associated does not exist yet
    Given A location with id "57aab6f2-440c-4a91-973c-217f2af3f054" already defined
    When I send a PUT request to "/harvests/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "date": "2019-10-15",
      "mushroomId": "a8c433d7-3d5f-4d75-b92d-f5be820bf76f",
      "quantity": "5"
    }
    """
    Then the response status code should be 400

  Scenario: Location associated does not exist yet
    Given A mushroom with id "63b3a7af-3938-4ce8-a2f2-51871dad6381" already defined
    When I send a PUT request to "/harvests/6621ae2c-ad1b-4e19-b3f3-3ca86f6bd3dc" with body:
    """
    {
      "date": "2019-10-15",
      "mushroomId": "63b3a7af-3938-4ce8-a2f2-51871dad6381",
      "locationId": "7930dbdc-0ac0-4382-a766-86cd0654d008",
      "quantity": "5"
    }
    """
    Then the response status code should be 400