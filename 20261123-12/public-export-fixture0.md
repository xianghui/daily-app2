# Synthetic publishing handoff

hero [encoded] html / html
"Tea &amp; cake &lt;today&gt;"
Reviewed html encoding; exact decode reproduces the reviewed raw string.

setting [encoded] json / json
"\"Say \\\"hello\\\"\\nC:\\\\draft\""
Reviewed json encoding; exact decode reproduces the reviewed raw string.

search [encoded] url / url
"tea%20%26%20cake%3D2%20%23new"
Reviewed url encoding; exact decode reproduces the reviewed raw string.

caption [encoded] html / html
"Already &amp;amp; literal &lt;b&gt; not markup"
Reviewed html encoding; exact decode reproduces the reviewed raw string.

label [encoded] json / json
"\"Tab\\there\\nNew line\""
Reviewed json encoding; exact decode reproduces the reviewed raw string.

filter [encoded] url / url
"caf%C3%A9%20%2F%20%E6%9D%B1%E4%BA%AC%20%2B%2050%25"
Reviewed url encoding; exact decode reproduces the reviewed raw string.

## Complete source and review audit

```json

{
  "schema": "escape-ledger/1",
  "appliedAt": "2026-11-23T03:12:15.563Z",
  "originalInput": {
    "title": "Synthetic publishing handoff",
    "profiles": [
      {
        "id": "html",
        "description": "HTML web page visible paragraph text between markup tags",
        "encoder": "html"
      },
      {
        "id": "json",
        "description": "JSON serialized data string literal in configuration document",
        "encoder": "json"
      },
      {
        "id": "url",
        "description": "URL query parameter value in a search link address",
        "encoder": "url"
      }
    ],
    "records": [
      {
        "id": "hero",
        "note": "Visible paragraph text on a web page between HTML tags",
        "value": "Tea & cake <today>"
      },
      {
        "id": "setting",
        "note": "String literal inside a serialized JSON configuration document",
        "value": "Say \"hello\"\nC:\\draft"
      },
      {
        "id": "search",
        "note": "Search link address URL query parameter value",
        "value": "tea & cake=2 #new"
      },
      {
        "id": "caption",
        "note": "HTML markup paragraph showing visible website text",
        "value": "Already &amp; literal <b> not markup"
      },
      {
        "id": "label",
        "note": "JSON configuration document serialized string literal",
        "value": "Tab\there\nNew line"
      },
      {
        "id": "filter",
        "note": "URL address query parameter for a search link",
        "value": "café / 東京 + 50%"
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Visible paragraph text on a web page between HTML tags",
      "resource": "html",
      "aiResource": "html",
      "evidence": [
        {
          "resource": "html",
          "score": 0.9435841848284788
        },
        {
          "resource": "url",
          "score": 0.03603662466556288
        },
        {
          "resource": "json",
          "score": -0.01792990024827195
        }
      ],
      "value": "Tea & cake <today>",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "String literal inside a serialized JSON configuration document",
      "resource": "json",
      "aiResource": "json",
      "evidence": [
        {
          "resource": "json",
          "score": 0.9456783987156632
        },
        {
          "resource": "url",
          "score": 0.19154975237811786
        },
        {
          "resource": "html",
          "score": 0.033648100033470206
        }
      ],
      "value": "Say \"hello\"\nC:\\draft",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Search link address URL query parameter value",
      "resource": "url",
      "aiResource": "url",
      "evidence": [
        {
          "resource": "url",
          "score": 0.9728532639674047
        },
        {
          "resource": "json",
          "score": 0.1962749385296367
        },
        {
          "resource": "html",
          "score": 0.0481684866380854
        }
      ],
      "value": "tea & cake=2 #new",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "text": "HTML markup paragraph showing visible website text",
      "resource": "html",
      "aiResource": "html",
      "evidence": [
        {
          "resource": "html",
          "score": 0.865039183766597
        },
        {
          "resource": "json",
          "score": 0.04997157668360521
        },
        {
          "resource": "url",
          "score": 0.04135848319828483
        }
      ],
      "value": "Already &amp; literal <b> not markup",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "text": "JSON configuration document serialized string literal",
      "resource": "json",
      "aiResource": "json",
      "evidence": [
        {
          "resource": "json",
          "score": 0.9547530903278877
        },
        {
          "resource": "url",
          "score": 0.20536901339976044
        },
        {
          "resource": "html",
          "score": 0.013368245345186595
        }
      ],
      "value": "Tab\there\nNew line",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "text": "URL address query parameter for a search link",
      "resource": "url",
      "aiResource": "url",
      "evidence": [
        {
          "resource": "url",
          "score": 0.9285933696200905
        },
        {
          "resource": "json",
          "score": 0.13012697673343024
        },
        {
          "resource": "html",
          "score": 0.04306142805630166
        }
      ],
      "value": "café / 東京 + 50%",
      "decision": "approve",
      "note": ""
    }
  ],
  "analysis": {
    "checks": [
      {
        "index": 0,
        "id": "hero",
        "profile": "html",
        "encoder": "html",
        "value": "Tea & cake <today>",
        "status": "encoded",
        "output": "Tea &amp; cake &lt;today&gt;",
        "roundTrip": true,
        "baseline": "Tea &amp; cake &lt;today&gt;",
        "baselineError": null,
        "baselineRoundTrip": true,
        "reason": "Reviewed html encoding; exact decode reproduces the reviewed raw string."
      },
      {
        "index": 1,
        "id": "setting",
        "profile": "json",
        "encoder": "json",
        "value": "Say \"hello\"\nC:\\draft",
        "status": "encoded",
        "output": "\"Say \\\"hello\\\"\\nC:\\\\draft\"",
        "roundTrip": true,
        "baseline": "Say \"hello\"\nC:\\draft",
        "baselineError": "Unexpected token 'S', \"Say \"hello\"\nC:\\draft\" is not valid JSON",
        "baselineRoundTrip": false,
        "reason": "Reviewed json encoding; exact decode reproduces the reviewed raw string."
      },
      {
        "index": 2,
        "id": "search",
        "profile": "url",
        "encoder": "url",
        "value": "tea & cake=2 #new",
        "status": "encoded",
        "output": "tea%20%26%20cake%3D2%20%23new",
        "roundTrip": true,
        "baseline": "tea &amp; cake=2 #new",
        "baselineError": null,
        "baselineRoundTrip": false,
        "reason": "Reviewed url encoding; exact decode reproduces the reviewed raw string."
      },
      {
        "index": 3,
        "id": "caption",
        "profile": "html",
        "encoder": "html",
        "value": "Already &amp; literal <b> not markup",
        "status": "encoded",
        "output": "Already &amp;amp; literal &lt;b&gt; not markup",
        "roundTrip": true,
        "baseline": "Already &amp;amp; literal &lt;b&gt; not markup",
        "baselineError": null,
        "baselineRoundTrip": true,
        "reason": "Reviewed html encoding; exact decode reproduces the reviewed raw string."
      },
      {
        "index": 4,
        "id": "label",
        "profile": "json",
        "encoder": "json",
        "value": "Tab\there\nNew line",
        "status": "encoded",
        "output": "\"Tab\\there\\nNew line\"",
        "roundTrip": true,
        "baseline": "Tab\there\nNew line",
        "baselineError": "Unexpected token 'T', \"Tab\there\nNew line\" is not valid JSON",
        "baselineRoundTrip": false,
        "reason": "Reviewed json encoding; exact decode reproduces the reviewed raw string."
      },
      {
        "index": 5,
        "id": "filter",
        "profile": "url",
        "encoder": "url",
        "value": "café / 東京 + 50%",
        "status": "encoded",
        "output": "caf%C3%A9%20%2F%20%E6%9D%B1%E4%BA%AC%20%2B%2050%25",
        "roundTrip": true,
        "baseline": "café / 東京 + 50%",
        "baselineError": "URI malformed",
        "baselineRoundTrip": false,
        "reason": "Reviewed url encoding; exact decode reproduces the reviewed raw string."
      }
    ],
    "encoded": 6,
    "held": 0,
    "invalid": 0,
    "baselineFailures": 4,
    "different": 4
  }
}

```

