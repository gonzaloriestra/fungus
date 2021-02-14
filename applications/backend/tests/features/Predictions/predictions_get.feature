Feature: Get prediction
  In order to know where I can find mushrooms
  As a user
  I want to get some predictions based on mycological conditions

  Scenario: Get prediction 0 for a specific date, location and mushrooms without myco conditions
    Given a location with id "85c2cec-f362-432e-a136-5440816a584b" already defined
    And a mushroom with id "841d8c5e-bcac-43e3-9961-3ac28096a495" already defined
    When I send a GET request to "/locations/85c2cec-f362-432e-a136-5440816a584b/mushrooms/841d8c5e-bcac-43e3-9961-3ac28096a495/predictions?date=2020-11-10"
    Then the response should be 200 with payload:
    """
    {
      "probability": 0
    }
    """
  Scenario: Return expection LocationDoesNotExist when the location has not been defined
    Given a mushroom with id "7d5663a2-6979-4e43-931c-1d7afcbc41f8" already defined
    When I send a GET request to "/locations/b096aefd-6303-482b-8797-8af9b3159345/mushrooms/7d5663a2-6979-4e43-931c-1d7afcbc41f8/predictions?date=2020-11-10"
    Then the response status code should be 404
#To-do define test when mushroom does not exist happy path..