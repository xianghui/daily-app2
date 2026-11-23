# Synthetic multilingual content import

a [encoded] url / url
"a%2Bb%20%26%20c%3Fd%3D%F0%9F%8C%BF"
Reviewed url encoding; exact decode reproduces the reviewed raw string.

b [encoded] html / html
"&lt;script&gt;alert(\"synthetic\")&lt;/script&gt;"
Reviewed html encoding; exact decode reproduces the reviewed raw string.

c [encoded] json / json
"\"\\u0000\\\"\\\\\\nend\""
Reviewed json encoding; exact decode reproduces the reviewed raw string.

d [encoded] url / url
"literal%20%2526%20%26%20%3F"
Reviewed url encoding; exact decode reproduces the reviewed raw string.

e [encoded] html / html
"=SUM(1,2)\n\"quoted\", café"
Reviewed html encoding; exact decode reproduces the reviewed raw string.

f [encoded] json / json
"\"\""
Reviewed json encoding; exact decode reproduces the reviewed raw string.

## Complete source and review audit

```json

{
  "schema": "escape-ledger/1",
  "appliedAt": "2026-11-23T03:08:22.655Z",
  "originalInput": {
    "title": "Synthetic multilingual content import",
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
        "id": "a",
        "note": "A search link URL query parameter value in an address",
        "value": "a+b & c?d=🌿"
      },
      {
        "id": "b",
        "note": "Website HTML paragraph visible text between markup tags",
        "value": "<script>alert(\"synthetic\")</script>"
      },
      {
        "id": "c",
        "note": "Serialized JSON string literal in a configuration file",
        "value": "\u0000\"\\\nend"
      },
      {
        "id": "d",
        "note": "Search URL address query parameter value",
        "value": "literal %26 & ?"
      },
      {
        "id": "e",
        "note": "Visible HTML paragraph text on a web page",
        "value": "=SUM(1,2)\n\"quoted\", café"
      },
      {
        "id": "f",
        "note": "JSON data configuration document serialized string literal",
        "value": ""
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "A search link URL query parameter value in an address",
      "resource": "url",
      "aiResource": "url",
      "evidence": [
        {
          "resource": "url",
          "score": 0.963211699895057
        },
        {
          "resource": "json",
          "score": 0.20938764502181126
        },
        {
          "resource": "html",
          "score": 0.0681915872941488
        }
      ],
      "value": "a+b & c?d=🌿",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "Website HTML paragraph visible text between markup tags",
      "resource": "html",
      "aiResource": "html",
      "evidence": [
        {
          "resource": "html",
          "score": 0.9634459460410889
        },
        {
          "resource": "url",
          "score": 0.03858728957559086
        },
        {
          "resource": "json",
          "score": 0.026118779073576858
        }
      ],
      "value": "<script>alert(\"synthetic\")</script>",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Serialized JSON string literal in a configuration file",
      "resource": "json",
      "aiResource": "json",
      "evidence": [
        {
          "resource": "json",
          "score": 0.9381113074825154
        },
        {
          "resource": "url",
          "score": 0.18927066062277048
        },
        {
          "resource": "html",
          "score": -0.06477669865050645
        }
      ],
      "value": "\u0000\"\\\nend",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "text": "Search URL address query parameter value",
      "resource": "url",
      "aiResource": "url",
      "evidence": [
        {
          "resource": "url",
          "score": 0.919662922346721
        },
        {
          "resource": "json",
          "score": 0.2044273541360912
        },
        {
          "resource": "html",
          "score": 0.00945140964505394
        }
      ],
      "value": "literal %26 & ?",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "text": "Visible HTML paragraph text on a web page",
      "resource": "html",
      "aiResource": "html",
      "evidence": [
        {
          "resource": "html",
          "score": 0.8916401484448756
        },
        {
          "resource": "url",
          "score": -0.007592234077811258
        },
        {
          "resource": "json",
          "score": -0.009153647491704775
        }
      ],
      "value": "=SUM(1,2)\n\"quoted\", café",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "text": "JSON data configuration document serialized string literal",
      "resource": "json",
      "aiResource": "json",
      "evidence": [
        {
          "resource": "json",
          "score": 0.9660197788289133
        },
        {
          "resource": "url",
          "score": 0.1960624132165003
        },
        {
          "resource": "html",
          "score": -0.008011890444448689
        }
      ],
      "value": "",
      "decision": "approve",
      "note": ""
    }
  ],
  "analysis": {
    "checks": [
      {
        "index": 0,
        "id": "a",
        "profile": "url",
        "encoder": "url",
        "value": "a+b & c?d=🌿",
        "status": "encoded",
        "output": "a%2Bb%20%26%20c%3Fd%3D%F0%9F%8C%BF",
        "roundTrip": true,
        "baseline": "a+b &amp; c?d=🌿",
        "baselineError": null,
        "baselineRoundTrip": false,
        "reason": "Reviewed url encoding; exact decode reproduces the reviewed raw string."
      },
      {
        "index": 1,
        "id": "b",
        "profile": "html",
        "encoder": "html",
        "value": "<script>alert(\"synthetic\")</script>",
        "status": "encoded",
        "output": "&lt;script&gt;alert(\"synthetic\")&lt;/script&gt;",
        "roundTrip": true,
        "baseline": "&lt;script&gt;alert(\"synthetic\")&lt;/script&gt;",
        "baselineError": null,
        "baselineRoundTrip": true,
        "reason": "Reviewed html encoding; exact decode reproduces the reviewed raw string."
      },
      {
        "index": 2,
        "id": "c",
        "profile": "json",
        "encoder": "json",
        "value": "\u0000\"\\\nend",
        "status": "encoded",
        "output": "\"\\u0000\\\"\\\\\\nend\"",
        "roundTrip": true,
        "baseline": null,
        "baselineError": "HTML text cannot round-trip NUL or unpaired Unicode surrogates",
        "baselineRoundTrip": false,
        "reason": "Reviewed json encoding; exact decode reproduces the reviewed raw string."
      },
      {
        "index": 3,
        "id": "d",
        "profile": "url",
        "encoder": "url",
        "value": "literal %26 & ?",
        "status": "encoded",
        "output": "literal%20%2526%20%26%20%3F",
        "roundTrip": true,
        "baseline": "literal %26 &amp; ?",
        "baselineError": null,
        "baselineRoundTrip": false,
        "reason": "Reviewed url encoding; exact decode reproduces the reviewed raw string."
      },
      {
        "index": 4,
        "id": "e",
        "profile": "html",
        "encoder": "html",
        "value": "=SUM(1,2)\n\"quoted\", café",
        "status": "encoded",
        "output": "=SUM(1,2)\n\"quoted\", café",
        "roundTrip": true,
        "baseline": "=SUM(1,2)\n\"quoted\", café",
        "baselineError": null,
        "baselineRoundTrip": true,
        "reason": "Reviewed html encoding; exact decode reproduces the reviewed raw string."
      },
      {
        "index": 5,
        "id": "f",
        "profile": "json",
        "encoder": "json",
        "value": "",
        "status": "encoded",
        "output": "\"\"",
        "roundTrip": true,
        "baseline": "",
        "baselineError": "Unexpected end of JSON input",
        "baselineRoundTrip": false,
        "reason": "Reviewed json encoding; exact decode reproduces the reviewed raw string."
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

