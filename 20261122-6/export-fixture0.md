# Editorial rework forecast

Descriptive stationary-transition scenario, not a guaranteed completion time or causal forecast. Counts must represent comparable transitions, not stage population totals. Selection bias, changing workflows and history-dependent behavior violate assumptions. Holds block the forecast instead of silently dropping records.

## Reviewed rework scenario
{
  "status": "ready",
  "expectedHandoffs": 3.3333333333333335,
  "onePassBaseline": 2,
  "extraExpected": 1.3333333333333335,
  "outcomes": [
    {
      "id": "published",
      "probability": 1
    }
  ],
  "visits": [
    {
      "id": "draft",
      "expectedVisits": 1.6666666666666667,
      "reachable": true
    },
    {
      "id": "review",
      "expectedVisits": 1.6666666666666667,
      "reachable": true
    }
  ],
  "edges": [
    {
      "index": 0,
      "from": "draft",
      "to": "review",
      "aiFrom": "draft",
      "aiTo": "review",
      "fromEvidence": [
        {
          "id": "draft",
          "score": 0.8141312691662914
        },
        {
          "id": "published",
          "score": 0.5328036185216511
        },
        {
          "id": "review",
          "score": 0.5326587777069793
        }
      ],
      "toEvidence": [
        {
          "id": "review",
          "score": 0.866468085930659
        },
        {
          "id": "draft",
          "score": 0.4531275873943299
        },
        {
          "id": "published",
          "score": 0.36238684721492254
        }
      ],
      "count": 100,
      "decision": "approve",
      "note": "",
      "probability": 1
    },
    {
      "index": 1,
      "from": "review",
      "to": "draft",
      "aiFrom": "draft",
      "aiTo": "draft",
      "fromEvidence": [
        {
          "id": "draft",
          "score": 0.5464148266884138
        },
        {
          "id": "review",
          "score": 0.43052927773278166
        },
        {
          "id": "published",
          "score": 0.22788534409996736
        }
      ],
      "toEvidence": [
        {
          "id": "draft",
          "score": 0.6788978175274434
        },
        {
          "id": "review",
          "score": 0.46084500890625946
        },
        {
          "id": "published",
          "score": 0.45430183448651534
        }
      ],
      "count": 40,
      "decision": "approve",
      "note": "",
      "probability": 0.4
    },
    {
      "index": 2,
      "from": "review",
      "to": "published",
      "aiFrom": "review",
      "aiTo": "published",
      "fromEvidence": [
        {
          "id": "review",
          "score": 0.7331062112872704
        },
        {
          "id": "published",
          "score": 0.43222801119049176
        },
        {
          "id": "draft",
          "score": 0.39493463750006996
        }
      ],
      "toEvidence": [
        {
          "id": "published",
          "score": 0.8828592420382237
        },
        {
          "id": "review",
          "score": 0.5002544848400845
        },
        {
          "id": "draft",
          "score": 0.4010785162996888
        }
      ],
      "count": 60,
      "decision": "approve",
      "note": "",
      "probability": 0.6
    }
  ],
  "residual": 0,
  "sourceRows": 3,
  "originalCount": 200,
  "reviewedCount": 200
}

## Complete originals and reviews
{
  "originalInput": {
    "title": "Editorial rework forecast",
    "start": "draft",
    "states": [
      {
        "id": "draft",
        "description": "Writing and drafting the article manuscript",
        "terminal": false
      },
      {
        "id": "review",
        "description": "Editorial review and proofreading of the article",
        "terminal": false
      },
      {
        "id": "published",
        "description": "Published article, finished and released",
        "terminal": true
      }
    ],
    "transitions": [
      {
        "from": "Writing the article draft",
        "to": "Editorial proofreading review",
        "count": 100
      },
      {
        "from": "Editor reviews manuscript",
        "to": "Rewrite the article draft",
        "count": 40
      },
      {
        "from": "Editorial review",
        "to": "Article published and released",
        "count": 60
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "from": "draft",
      "to": "review",
      "aiFrom": "draft",
      "aiTo": "review",
      "fromEvidence": [
        {
          "id": "draft",
          "score": 0.8141312691662914
        },
        {
          "id": "published",
          "score": 0.5328036185216511
        },
        {
          "id": "review",
          "score": 0.5326587777069793
        }
      ],
      "toEvidence": [
        {
          "id": "review",
          "score": 0.866468085930659
        },
        {
          "id": "draft",
          "score": 0.4531275873943299
        },
        {
          "id": "published",
          "score": 0.36238684721492254
        }
      ],
      "count": 100,
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "from": "review",
      "to": "draft",
      "aiFrom": "draft",
      "aiTo": "draft",
      "fromEvidence": [
        {
          "id": "draft",
          "score": 0.5464148266884138
        },
        {
          "id": "review",
          "score": 0.43052927773278166
        },
        {
          "id": "published",
          "score": 0.22788534409996736
        }
      ],
      "toEvidence": [
        {
          "id": "draft",
          "score": 0.6788978175274434
        },
        {
          "id": "review",
          "score": 0.46084500890625946
        },
        {
          "id": "published",
          "score": 0.45430183448651534
        }
      ],
      "count": 40,
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "from": "review",
      "to": "published",
      "aiFrom": "review",
      "aiTo": "published",
      "fromEvidence": [
        {
          "id": "review",
          "score": 0.7331062112872704
        },
        {
          "id": "published",
          "score": 0.43222801119049176
        },
        {
          "id": "draft",
          "score": 0.39493463750006996
        }
      ],
      "toEvidence": [
        {
          "id": "published",
          "score": 0.8828592420382237
        },
        {
          "id": "review",
          "score": 0.5002544848400845
        },
        {
          "id": "draft",
          "score": 0.4010785162996888
        }
      ],
      "count": 60,
      "decision": "approve",
      "note": ""
    }
  ]
}
