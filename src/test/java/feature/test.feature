@featuretag
Feature: Google Functionality

  Background: First Step of Every Scenario
    Given User should be navigated to the Google Search page

  @smoke @regression @abc
  Scenario: Google Search Functionality
    When He enter any value in the Search Box
    And Click on Search Button
    Then Related Results will be displayed

  @smoke @xyz
  Scenario Outline: Write String in Google Search Textbox for background example
    When He enter any value "<variable1>" in the Search Box
    And Click on Search Button
    Then Related Results like "<variable 2>" and "<variable 3>" will be displayed
    Then Related Results will be displayed

    Examples: 
      | variable1 | variable 2 | variable 3 |
      | value1    | value2     | value3     |
      | value3    | value4     | value5     |
      | value6    | value7     | value8     |
