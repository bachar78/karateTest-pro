##@parallel=false
@debug 
Feature: Sign Up new user
Background: Preconditions 
  * def dataGenerator = Java.type('helpers.DataGenerator')
  * def randomEmail = dataGenerator.getRandomEmail()
  * def randomName = dataGenerator.getRandomUserName()
   Given url apiUrl


Scenario: New User Sign Up
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

Scenario Outline: Sign Up Error (UserName or Email is already taken)
  Given path 'users'
  And request 
  """
    {
      "user": {
          "email": <email>,
          "password": <password>,
          "username": <username>
      }
    }
  """
  When method Post
  Then status 422
  And match response == <errorMessage>
  
  Examples:
  | email              | password  | username       | errorMessage                                     |
  |#(randomEmail)      | '12345678'|'Bassam'        |{"errors":{"username":["has already been taken"]}}|
  # |"bassam@test.com"   | '12345678'|#(randomName)   | {"errors":{"email":["has already been taken"]}}|
  # |""                  | '12345678'|#(randomName)   | {"errors":{"email": ["can't be blank"]}}|
  # |#(randomEmail)      | '12345678'|""              | {"errors":{"username": ["can't be blank"]}}|
  # |#(randomEmail)      | ''        |#(randomName)   | {"errors":{"password": ["can't be blank"]}}|