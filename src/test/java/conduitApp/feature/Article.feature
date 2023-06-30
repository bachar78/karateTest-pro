Feature: Articales
Background: Define URL 
  Given url 'https://api.realworld.io/api/'
* def tokenResponse = callonce read('classpath:helpers/CreateToken.feature') {"email": "bassam@test.com", "password":"12345678"}
    * def token = tokenResponse.authToken


Scenario: Create a new article 
  Given header Authorization = 'Token ' + token
  Given path 'articles'
  And request {article: {"tagList":[], "title": "Test Karate", "description": "It is about Karate framework", "body": "How to test code using Karate"}}
  When method Post
  Then status 200
  And match response.article.title == "Test Karate"

@debug
Scenario: Create and delete article 
  Given header Authorization = 'Token ' + token
  Given path 'articles'
  And request {article: {"tagList":[], "title": "Test Create & Delete", "description": "It is about deleting Scenarios", "body": "How to Create and delete account using Karate"}}
  When method Post
  Then status 200
  And match response.article.title == "Test Create & Delete"
  * def articleId = response.article.slug

  Given path 'articles',articleId
  When method Get
  Then status 200
  And match response.article.title == "Test Create & Delete"

  Given header Authorization = 'Token ' + token
  Given path 'articles',articleId
  When method Delete
  Then status 204

  Given path 'articles',articleId
  When method Get
  Then status 404
  And match response.errors.article == "#array"
  And match response.errors.article[0] == "not found"