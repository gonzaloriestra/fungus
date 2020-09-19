Feature: Recover harvests associated to a location
  In order to view all the harvests I did in a location
  As an user
  I want to get the harvest associated to an specific location

  Scenario: Get all the harvests of a location
    Given the harvest store empty
    And a location with id "2787d79f-eda8-43b7-91a8-504884a7a616" already defined
    And a mushroom with id "efa541e6-36cd-4833-90d7-5f2485e40be8" already defined
    And a harvest of mushroom "efa541e6-36cd-4833-90d7-5f2485e40be8" with id "1431829c-0cb3-493f-b101-ea3e3202215a" in the location "2787d79f-eda8-43b7-91a8-504884a7a616"
    And a harvest of mushroom "efa541e6-36cd-4833-90d7-5f2485e40be8" with id "94996a63-27ae-412f-bfb2-94c27ebe0422" in the location "2787d79f-eda8-43b7-91a8-504884a7a616"
    When I send a GET request to "/locations/942b2922-ef5b-4369-af82-a332222a7d12/harvests"
    Then the response status code should be 200
    And the response should be an element with id "1431829c-0cb3-493f-b101-ea3e3202215a"
    And the response should be an element with id "94996a63-27ae-412f-bfb2-94c27ebe0422"

  Scenario: Get empty response when there is not any harvest defined
    Given the harvest store empty
    And a location with id "ef849db6-be6c-4b90-95f2-09a823b2cd25" already defined
    When I send a GET request to "/locations/ef849db6-be6c-4b90-95f2-09a823b2cd25/harvests"
    Then the response status code should be 200
    And the response should be empty
