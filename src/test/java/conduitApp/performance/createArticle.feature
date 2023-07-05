
Feature: Articales
Background: Define URL 
  * url apiUrl
  * def articleRequestBody = read("classpath:conduitApp/json/newArticleRequest.json")
  * def dataGenerator = Java.type('helpers.DataGenerator')
  * set articleRequestBody.article.title = __gatling.Title
  * set articleRequestBody.article.description = __gatling.Description 
  * set articleRequestBody.article.body = dataGenerator.getRandomArticleValues().body

Scenario: Create and delete article 
  * configure headers = {"Authorization": #('Token ' + __gatling.token)}
  Given path 'articles'
  And request articleRequestBody
  And header karate-name = "Create article"
  When method Post
  Then status 200
  And match response.article.title == articleRequestBody.article.title 
  * def articleId = response.article.slug
  * print articleId

  * karate.pause(5000)

  Given path 'articles',articleId
  When method Delete
  Then status 204
