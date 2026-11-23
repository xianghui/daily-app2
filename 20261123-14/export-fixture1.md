# Synthetic international event directory

FR-a [ready] FR
"01 42 34 56 78" → +33142345678
Whole-field parse, metadata validity and reviewed country agree. Not proof of ownership or reachability.

JP-a [collision] JP
"03-1234-5678" → +81312345678
Same E.164 number and extension as JP-b. Hold duplicate records explicitly; no automatic merge.

DE-a [collision] DE
"030 123456" → +4930123456
Same E.164 number and extension as DE-b. Hold duplicate records explicitly; no automatic merge.

FR-b [ready] FR
"+33 1 42 34 56 78 ext. 7" → +33142345678 ext. 7
Whole-field parse, metadata validity and reviewed country agree. Not proof of ownership or reachability.

JP-b [collision] JP
"+81 3 1234 5678" → +81312345678
Same E.164 number and extension as JP-a. Hold duplicate records explicitly; no automatic merge.

DE-b [collision] DE
"+49 30 123456" → +4930123456
Same E.164 number and extension as DE-a. Hold duplicate records explicitly; no automatic merge.

## Complete source and review audit

```json

{
  "schema": "dial-ledger/1",
  "appliedAt": "2026-11-23T05:07:32.467Z",
  "originalInput": {
    "title": "Synthetic international event directory",
    "profiles": [
      {
        "id": "paris",
        "description": "France Paris art exhibition contact telephone directory",
        "country": "FR"
      },
      {
        "id": "tokyo",
        "description": "Japan Tokyo robotics demonstration contact telephone directory",
        "country": "JP"
      },
      {
        "id": "berlin",
        "description": "Germany Berlin music festival contact telephone directory",
        "country": "DE"
      }
    ],
    "records": [
      {
        "id": "FR-a",
        "note": "Paris art exhibition telephone contact in France",
        "value": "01 42 34 56 78"
      },
      {
        "id": "JP-a",
        "note": "Tokyo robotics demonstration telephone in Japan",
        "value": "03-1234-5678"
      },
      {
        "id": "DE-a",
        "note": "Berlin music festival contact number in Germany",
        "value": "030 123456"
      },
      {
        "id": "FR-b",
        "note": "French art exhibition in Paris directory",
        "value": "+33 1 42 34 56 78 ext. 7"
      },
      {
        "id": "JP-b",
        "note": "Japanese robotics demonstration in Tokyo phone",
        "value": "+81 3 1234 5678"
      },
      {
        "id": "DE-b",
        "note": "German music festival in Berlin telephone",
        "value": "+49 30 123456"
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Paris art exhibition telephone contact in France",
      "resource": "paris",
      "aiResource": "paris",
      "evidence": [
        {
          "resource": "paris",
          "score": 0.9423996813473606
        },
        {
          "resource": "tokyo",
          "score": 0.4271762818057141
        },
        {
          "resource": "berlin",
          "score": 0.4267659228529713
        }
      ],
      "value": "01 42 34 56 78",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "Tokyo robotics demonstration telephone in Japan",
      "resource": "tokyo",
      "aiResource": "tokyo",
      "evidence": [
        {
          "resource": "tokyo",
          "score": 0.873608748859883
        },
        {
          "resource": "paris",
          "score": 0.3377034836166307
        },
        {
          "resource": "berlin",
          "score": 0.2612002770827007
        }
      ],
      "value": "03-1234-5678",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Berlin music festival contact number in Germany",
      "resource": "berlin",
      "aiResource": "berlin",
      "evidence": [
        {
          "resource": "berlin",
          "score": 0.9333301130384255
        },
        {
          "resource": "paris",
          "score": 0.3682457265324736
        },
        {
          "resource": "tokyo",
          "score": 0.31492428483351353
        }
      ],
      "value": "030 123456",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "text": "French art exhibition in Paris directory",
      "resource": "paris",
      "aiResource": "paris",
      "evidence": [
        {
          "resource": "paris",
          "score": 0.8335045491519016
        },
        {
          "resource": "berlin",
          "score": 0.28588013995280415
        },
        {
          "resource": "tokyo",
          "score": 0.21253058875471212
        }
      ],
      "value": "+33 1 42 34 56 78 ext. 7",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "text": "Japanese robotics demonstration in Tokyo phone",
      "resource": "tokyo",
      "aiResource": "tokyo",
      "evidence": [
        {
          "resource": "tokyo",
          "score": 0.7886406856430734
        },
        {
          "resource": "paris",
          "score": 0.22062574302090734
        },
        {
          "resource": "berlin",
          "score": 0.1427939618263795
        }
      ],
      "value": "+81 3 1234 5678",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "text": "German music festival in Berlin telephone",
      "resource": "berlin",
      "aiResource": "berlin",
      "evidence": [
        {
          "resource": "berlin",
          "score": 0.8816244168071463
        },
        {
          "resource": "paris",
          "score": 0.39158418076729085
        },
        {
          "resource": "tokyo",
          "score": 0.3188656883528842
        }
      ],
      "value": "+49 30 123456",
      "decision": "approve",
      "note": ""
    }
  ],
  "analysis": {
    "checks": [
      {
        "index": 0,
        "id": "FR-a",
        "profile": "paris",
        "country": "FR",
        "raw": "01 42 34 56 78",
        "number": "+33142345678",
        "extension": "",
        "uri": "tel:+33142345678",
        "international": "+33 1 42 34 56 78",
        "key": "[\"+33142345678\",\"\"]",
        "status": "ready",
        "reason": "Whole-field parse, metadata validity and reviewed country agree. Not proof of ownership or reachability.",
        "collidesWith": []
      },
      {
        "index": 1,
        "id": "JP-a",
        "profile": "tokyo",
        "country": "JP",
        "raw": "03-1234-5678",
        "number": "+81312345678",
        "extension": "",
        "uri": "tel:+81312345678",
        "international": "+81 3 1234 5678",
        "key": "[\"+81312345678\",\"\"]",
        "status": "collision",
        "reason": "Same E.164 number and extension as JP-b. Hold duplicate records explicitly; no automatic merge.",
        "collidesWith": [
          "JP-b"
        ]
      },
      {
        "index": 2,
        "id": "DE-a",
        "profile": "berlin",
        "country": "DE",
        "raw": "030 123456",
        "number": "+4930123456",
        "extension": "",
        "uri": "tel:+4930123456",
        "international": "+49 30 123456",
        "key": "[\"+4930123456\",\"\"]",
        "status": "collision",
        "reason": "Same E.164 number and extension as DE-b. Hold duplicate records explicitly; no automatic merge.",
        "collidesWith": [
          "DE-b"
        ]
      },
      {
        "index": 3,
        "id": "FR-b",
        "profile": "paris",
        "country": "FR",
        "raw": "+33 1 42 34 56 78 ext. 7",
        "number": "+33142345678",
        "extension": "7",
        "uri": "tel:+33142345678;ext=7",
        "international": "+33 1 42 34 56 78 ext. 7",
        "key": "[\"+33142345678\",\"7\"]",
        "status": "ready",
        "reason": "Whole-field parse, metadata validity and reviewed country agree. Not proof of ownership or reachability.",
        "collidesWith": []
      },
      {
        "index": 4,
        "id": "JP-b",
        "profile": "tokyo",
        "country": "JP",
        "raw": "+81 3 1234 5678",
        "number": "+81312345678",
        "extension": "",
        "uri": "tel:+81312345678",
        "international": "+81 3 1234 5678",
        "key": "[\"+81312345678\",\"\"]",
        "status": "collision",
        "reason": "Same E.164 number and extension as JP-a. Hold duplicate records explicitly; no automatic merge.",
        "collidesWith": [
          "JP-a"
        ]
      },
      {
        "index": 5,
        "id": "DE-b",
        "profile": "berlin",
        "country": "DE",
        "raw": "+49 30 123456",
        "number": "+4930123456",
        "extension": "",
        "uri": "tel:+4930123456",
        "international": "+49 30 123456",
        "key": "[\"+4930123456\",\"\"]",
        "status": "collision",
        "reason": "Same E.164 number and extension as DE-a. Hold duplicate records explicitly; no automatic merge.",
        "collidesWith": [
          "DE-a"
        ]
      }
    ],
    "ready": 2,
    "held": 0,
    "invalid": 0,
    "collisionRows": 4,
    "pairs": 2,
    "rawPairs": 0,
    "extraPairs": 2,
    "falsePairs": 0,
    "compared": 6
  }
}

```

