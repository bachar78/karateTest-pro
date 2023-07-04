
Feature: Test for the home page
Background: Define URL 
  Given url apiUrl

  
Scenario: Get all tags
  Given path 'tags'
  When method Get
  Then status 200
  And match response.tags contains ['codebaseShow', 'welcome']
  And match each response.tags !contains 'car'
  And match response.tags == "#array"
  And match response.tags contains any ['bla bla', 'implementations', 'blou blou']
  And match response.tags contains only ["implementations", "welcome", "introduction", "codebaseShow", "ipsum", "qui", "cupiditate", "et", "quia","deserunt"]
  And match each response.tags == "#string"
  And match response == {"tags":'#array'}

Scenario: Get 10 articles from the page
 * def timeValidator = read('classpath:helpers/timeValidator.js')


  Given params {limit:10, offset: 0}
  Given path 'articles'
  When method Get
  Then status 200
  And match response.articles == "#[10]"
  # And match each response.articles == "#object"
  # And match each response..tagList == "#array"
  # And match each response.articles..following == false
  # And match each response.articles..following != true
  # And match each response.articles..following == "#boolean"
  # And match response.articles == '#array'
  # And match response.articlesCount != 196
  # And match response.articles[0].createdAt contains '2023'
  # And match response.articles[0].createdAt !contains '2021'
  # And match response.articles[*].title contains 'Use the auxiliary EXE monitor, then you can hack the haptic port!'
  # And match each response.articles..bio == "##string"
  And match each response.articles ==
  """
     {
            "slug": "#string",
            "title": "#string",
            "description": "#string",
            "body": "#string",
            "tagList": "#array",
            "createdAt": '#? timeValidator(_)',
            "updatedAt": "#? timeValidator(_)",
            "favorited": "#boolean",
            "favoritesCount": "#number",
            "author": {
                "username": "#string",
                "bio": "##string",
                "image": "#string",
                "following": "#boolean"
            }
        }
  """
@debug 
Scenario: Conditional logic
    Given params {limit:10, offset: 0}
    Given path 'articles'
    When method Get
    Then status 200
    * def favoritesCount = response.articles[0].favoritesCount
    * def article = response.articles[0]
    # * if(favoritesCount == 0) karate.call('classpath:helpers/Addlikes.feature', article)
    * def result = favoritesCount == 0 ? karate.call('classpath:helpers/Addlikes.feature', article).likesCount : favoritesCount

    Given params {limit:10, offset: 0}
    Given path 'articles'
    When method Get
    Then status 200
    And match response.articles[0].favoritesCount == result 