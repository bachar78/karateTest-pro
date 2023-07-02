
Feature: Hooks

Background: hooks
  # * def results = callonce read('classpath:helpers/Dummy.feature')
  # * def username = results.randomName

##after hook
# * configure afterFeature = function() { karate.call('classpath:helpers/Dummy.feature')}
* configure afterScenario = function() { karate.call('classpath:helpers/Dummy.feature')}
* configure afterFeature = 
"""
  function() {
    karate.log("Print this after each feature")
  }
"""

Scenario: First Scenario
  * print 'This is the firs tscenario'

Scenario: Second Scenario
  * print "This is the second Scenario"