@debug
Feature: Articales
Background: Define URL 
  * url apiUrl
  * def articleRequestBody = read("classpath:conduitApp/json/newArticleRequest.json")
  * def dataGenerator = Java.type('helpers.DataGenerator')
  * set articleRequestBody.article.title = dataGenerator.getRandomArticleValues().title
  * set articleRequestBody.article.description = dataGenerator.getRandomArticleValues().description
  * set articleRequestBody.article.body = dataGenerator.getRandomArticleValues().body
Scenario: Create a new article 
  Given path 'articles'
  And request articleRequestBody;
  When method Post
  Then status 200
  And match response.article.title == articleRequestBody.article.title

Scenario: Create and delete article 
  Given path 'articles'
  And request articleRequestBody;
  When method Post
  Then status 200
  And match response.article.title == articleRequestBody.article.title 
  * def articleId = response.article.slug

  Given path 'articles',articleId
  When method Get
  Then status 200
  And match response.article.title == articleRequestBody.article.title 

  Given path 'articles',articleId
  When method Delete
  Then status 204

  Given path 'articles',articleId
  When method Get
  Then status 404
  And match response.errors.article == "#array"
  And match response.errors.article[0] == "not found"