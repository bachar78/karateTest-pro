@debug
Feature: Sign Up new user

Background: Preconditions 
  * def dataGenerator = Java.type('helpers.DataGenerator')
  Given url apiUrl

Scenario: New User Sign Up
  * def randomEmail = dataGenerator.getRandomEmail()
  * def randomName = dataGenerator.getRandomUserName()
  Given path 'users'
  And request 
  """
    {
      "user": {
          "email": #(randomEmail),
          "password": "12345678",
          "username": #(randomName)
      }
    }
  """
  When method Post
  Then status 200
  And match response.user ==
  """
    {
        "email": #(randomEmail),
        "username": #(randomName),
        "bio": "##string",
        "image": "#string",
        "token": "#string"
    }
  """