@ignore
Feature: Sign Up new user

Background: Preconditions 
  Given url apiUrl

Scenario: New User Sign Up
  Given def userData = {"email": "bla@test.com", "username": "bla Tst"}
  Given path 'users'
  And request 
  """
    {
      "user": {
          "email": #(userData.email),
          "password": "12345678",
          "username": #(userData.username)
      }
    }
  """
  When method Post
  Then status 200
  And match response.user.username == userData.username