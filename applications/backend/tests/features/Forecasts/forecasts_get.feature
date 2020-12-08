Feature: Get forecasts
  In order to know where I can find mushrooms
  As a user
  I want to get some forecasts based on historical data and mycological conditions

  Scenario: Get forescasts for a specific date with a 100% of probability
    Given a mushroom with id "841d8c5e-bcac-43e3-9961-3ac28096a495" already defined
    Given a location with id "85c2cec-f362-432e-a136-5440816a584b" already defined
    And a harvest of mushroom "841d8c5e-bcac-43e3-9961-3ac28096a495" with id "4149c8de-24ca-4524-bf8b-e3e1be551cea" in the location "85c2cec-f362-432e-a136-5440816a584b" and date "2020-11-10"
    When I send a GET request to "/forecasts?date=2020-11-10"
    Then the response status code should be 200
    And the response should be:
    """
    {
      "date": "2020-11-10",
      "forecasts": [
        {
          "locationId": "85c2cec-f362-432e-a136-5440816a584b",
          "probability": 10000
        }
      ]
    }
    """

  Scenario: Get forescasts for a specific date with multiple harvests to consider
    Given a mushroom with id "841d8c5e-bcac-43e3-9961-3ac28096a495" already defined
    And a harvest of mushroom "841d8c5e-bcac-43e3-9961-3ac28096a495" with id "4149c8de-24ca-4524-bf8b-e3e1be551cea" in the location "85c2cec-f362-432e-a136-5440816a584b" and date "2020-11-10"
    And a harvest of mushroom "841d8c5e-bcac-43e3-9961-3ac28096a495" with id "9456221e-b92e-4719-b82a-484937be1bff" in the location "85c2cec-f362-432e-a136-5440816a584b" and date "2020-11-01"
    When I send a GET request to "/forecasts?date=2020-11-10"
    Then the response status code should be 200
    And the response should be:
    """
    {
      "date": "2020-11-10",
      "forecasts": [
        {
          "locationId": "85c2cec-f362-432e-a136-5440816a584b",
          "probability": 1320
        }
      ]
    }
    """
