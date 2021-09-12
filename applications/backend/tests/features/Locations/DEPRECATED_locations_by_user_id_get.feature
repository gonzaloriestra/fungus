Feature: Recover all the locations
  In order to view my locations registered
  As an user
  I want to get all my locations

  Background:
    Given the location store empty

  Scenario: Get my locations
    Given a location with id "942b2922-ef5b-4369-af82-a332222a7d12" and '{ "name": "Camposagrado", "coordinates": [{ "latitude": 42.741599, "longitude": -4.885334 }], "weatherStationId": "cda55a23-ea2b-42f3-a390-c29110586b6a" }' exist
    And a location with id "15569f95-3ff3-40d7-9e78-59e0ec0486e8" and '{ "name": "Robledal de Mantinos", "coordinates": [{ "latitude": 42.741599, "longitude": -4.885334 }], "weatherStationId": "cda55a23-ea2b-42f3-a390-c29110586b6a" }' exist
    When I send a GET request to "/me/locations"
    Then the response should be 200 with payload:
    """
    [
      {
        "id": "942b2922-ef5b-4369-af82-a332222a7d12",
        "name": "Camposagrado",
        "zone":
        {
          "coordinates": [
            {
              "latitude": 42.741599,
              "longitude": -4.885334
            }
          ],
          "midpoint": {
            "latitude": 42.741599,
            "longitude": -4.885334
          }
        },
        "weatherStationId": "cda55a23-ea2b-42f3-a390-c29110586b6a",
        "userId": "cd578dee-a7d6-4c22-ae86-b8c0f74949a8"
      },
      {
        "id": "15569f95-3ff3-40d7-9e78-59e0ec0486e8",
        "name": "Robledal de Mantinos",
        "zone":
        {
          "coordinates": [
            {
              "latitude": 42.741599,
              "longitude": -4.885334
            }
          ],
          "midpoint": {
            "latitude": 42.741599,
            "longitude": -4.885334
          }
        },
        "weatherStationId": "cda55a23-ea2b-42f3-a390-c29110586b6a",
        "userId": "cd578dee-a7d6-4c22-ae86-b8c0f74949a8"
      }
    ]
    """

  Scenario: Return empty response when there are not locations registered
    When I send a GET request to "/me/locations"
    Then the response status code should be 200
    And the response should be empty
