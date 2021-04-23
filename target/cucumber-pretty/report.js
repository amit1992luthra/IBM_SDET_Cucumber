$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 2,
  "name": "Google Functionality",
  "description": "",
  "id": "google-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@featuretag"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "First Step of Every Scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User should be navigated to the Google Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_should_be_navigated_to_the_Google_Search_page()"
});
formatter.result({
  "duration": 119331501,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Google Search Functionality",
  "description": "",
  "id": "google-functionality;google-search-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    },
    {
      "line": 7,
      "name": "@abc"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "He enter any value in the Search Box",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Related Results will be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.he_enter_any_value_in_the_Search_Box()"
});
formatter.result({
  "duration": 92800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_on_Search_Button()"
});
formatter.result({
  "duration": 92799,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.related_Results_will_be_displayed()"
});
formatter.result({
  "duration": 90900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Write String in Google Search Textbox for background example",
  "description": "",
  "id": "google-functionality;write-string-in-google-search-textbox-for-background-example",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@xyz"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "He enter any value \"\u003cvariable1\u003e\" in the Search Box",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Related Results like \"\u003cvariable 2\u003e\" and \"\u003cvariable 3\u003e\" will be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Related Results will be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "google-functionality;write-string-in-google-search-textbox-for-background-example;",
  "rows": [
    {
      "cells": [
        "variable1",
        "variable 2",
        "variable 3"
      ],
      "line": 21,
      "id": "google-functionality;write-string-in-google-search-textbox-for-background-example;;1"
    },
    {
      "cells": [
        "value1",
        "value2",
        "value3"
      ],
      "line": 22,
      "id": "google-functionality;write-string-in-google-search-textbox-for-background-example;;2"
    },
    {
      "cells": [
        "value3",
        "value4",
        "value5"
      ],
      "line": 23,
      "id": "google-functionality;write-string-in-google-search-textbox-for-background-example;;3"
    },
    {
      "cells": [
        "value6",
        "value7",
        "value8"
      ],
      "line": 24,
      "id": "google-functionality;write-string-in-google-search-textbox-for-background-example;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "First Step of Every Scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User should be navigated to the Google Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_should_be_navigated_to_the_Google_Search_page()"
});
formatter.result({
  "duration": 176100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Write String in Google Search Textbox for background example",
  "description": "",
  "id": "google-functionality;write-string-in-google-search-textbox-for-background-example;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@featuretag"
    },
    {
      "line": 13,
      "name": "@xyz"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "He enter any value \"value1\" in the Search Box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Related Results like \"value2\" and \"value3\" will be displayed",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Related Results will be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "value1",
      "offset": 20
    }
  ],
  "location": "StepDefination.he_enter_any_value_in_the_Search_Box(String)"
});
formatter.result({
  "duration": 5279101,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_on_Search_Button()"
});
formatter.result({
  "duration": 84500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "value2",
      "offset": 22
    },
    {
      "val": "value3",
      "offset": 35
    }
  ],
  "location": "StepDefination.related_Results_like_and_will_be_displayed(String,String)"
});
formatter.result({
  "duration": 199000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.related_Results_will_be_displayed()"
});
formatter.result({
  "duration": 128999,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "First Step of Every Scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User should be navigated to the Google Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_should_be_navigated_to_the_Google_Search_page()"
});
formatter.result({
  "duration": 64500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Write String in Google Search Textbox for background example",
  "description": "",
  "id": "google-functionality;write-string-in-google-search-textbox-for-background-example;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@featuretag"
    },
    {
      "line": 13,
      "name": "@xyz"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "He enter any value \"value3\" in the Search Box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Related Results like \"value4\" and \"value5\" will be displayed",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Related Results will be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "value3",
      "offset": 20
    }
  ],
  "location": "StepDefination.he_enter_any_value_in_the_Search_Box(String)"
});
formatter.result({
  "duration": 107500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_on_Search_Button()"
});
formatter.result({
  "duration": 48000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "value4",
      "offset": 22
    },
    {
      "val": "value5",
      "offset": 35
    }
  ],
  "location": "StepDefination.related_Results_like_and_will_be_displayed(String,String)"
});
formatter.result({
  "duration": 107900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.related_Results_will_be_displayed()"
});
formatter.result({
  "duration": 50400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "First Step of Every Scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User should be navigated to the Google Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_should_be_navigated_to_the_Google_Search_page()"
});
formatter.result({
  "duration": 91600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Write String in Google Search Textbox for background example",
  "description": "",
  "id": "google-functionality;write-string-in-google-search-textbox-for-background-example;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@featuretag"
    },
    {
      "line": 13,
      "name": "@xyz"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "He enter any value \"value6\" in the Search Box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Related Results like \"value7\" and \"value8\" will be displayed",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Related Results will be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "value6",
      "offset": 20
    }
  ],
  "location": "StepDefination.he_enter_any_value_in_the_Search_Box(String)"
});
formatter.result({
  "duration": 133300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_on_Search_Button()"
});
formatter.result({
  "duration": 79000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "value7",
      "offset": 22
    },
    {
      "val": "value8",
      "offset": 35
    }
  ],
  "location": "StepDefination.related_Results_like_and_will_be_displayed(String,String)"
});
formatter.result({
  "duration": 156500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.related_Results_will_be_displayed()"
});
formatter.result({
  "duration": 99800,
  "status": "passed"
});
});