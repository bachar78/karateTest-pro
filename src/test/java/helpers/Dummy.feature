
Feature: Dummy

Scenario: Dummy
  * def dataGenerator = Java.type('helpers.DataGenerator')
  * def randomName = dataGenerator.getRandomUserName();
  * print randomName
