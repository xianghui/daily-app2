# Synthetic customer platform cutover

Neural similarity is not service identity. Verify the complete revision history and all assumptions. No DNS lookup, configuration or shutdown is performed.

## Reviewed cutover worksheet

Hypothetical positive-answer TTL upper bounds only. All authoritative changes are simultaneous, caches honor TTL, no refresh before second 0, no serve-stale, negative caches, CNAME chains, clock skew or connections outliving DNS. Each old revision can be fetched arbitrarily close to its next change; next-change + old TTL is a conservative expiry bound. Equality clears the bound. Final new answer is permanent. This is not proof of live propagation or permission to shut down a service.

LATEST-OLD-TTL BASELINE: 0 / 3 retirement plans fall before switch + last old TTL.

ALL-HISTORY BOUND: 1 / 3 fall before the old-answer expiry bound. 1 risk(s) missed by baseline. These are worksheet checks, not live measurements.

RECORD CHECKLIST (seconds relative to history start)
shop.example.test → store | permanent switch 900 | baseline 960 | history safe-after 4200 | planned retirement 1000 | WAIT 3200 seconds
mail.example.test → mail | permanent switch 600 | baseline 900 | history safe-after 900 | planned retirement 1000 | meets modeled bound
video.example.test → media | permanent switch 1200 | baseline 1800 | history safe-after 1800 | planned retirement 1800 | meets modeled bound

OLD-ANSWER WITNESSES
shop.example.test revision 0: fetch in [0, 600); TTL 3600; expiry bound 4200
shop.example.test revision 1: fetch in [600, 900); TTL 60; expiry bound 960
mail.example.test revision 0: fetch in [0, 600); TTL 300; expiry bound 900
video.example.test revision 0: fetch in [0, 1200); TTL 600; expiry bound 1800

SERVICE CHECKPOINTS
store: all listed record bounds cleared at 4200 seconds | shop.example.test
mail: all listed record bounds cleared at 900 seconds | mail.example.test
media: all listed record bounds cleared at 1800 seconds | video.example.test

## Complete original and review audit

{
  "schema": "ttl-harbor/1",
  "originalInput": {
    "title": "Synthetic customer platform cutover",
    "services": [
      {
        "id": "store",
        "description": "Online shopping storefront checkout service"
      },
      {
        "id": "mail",
        "description": "Employee email messaging service"
      },
      {
        "id": "media",
        "description": "Video streaming media service"
      }
    ],
    "records": [
      {
        "id": "shop.example.test",
        "serviceNote": "Shopping cart checkout storefront",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 3600,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 60,
            "target": "old"
          },
          {
            "at": 900,
            "ttl": 60,
            "target": "new"
          }
        ]
      },
      {
        "id": "mail.example.test",
        "serviceNote": "Staff email messaging",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 300,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 60,
            "target": "new"
          }
        ]
      },
      {
        "id": "video.example.test",
        "serviceNote": "Streaming video media",
        "retireAt": 1800,
        "revisions": [
          {
            "at": 0,
            "ttl": 600,
            "target": "old"
          },
          {
            "at": 1200,
            "ttl": 60,
            "target": "new"
          }
        ]
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Shopping cart checkout storefront",
      "resource": "store",
      "aiResource": "store",
      "evidence": [
        {
          "resource": "store",
          "score": 0.775030915996614
        },
        {
          "resource": "mail",
          "score": 0.07151719567158613
        },
        {
          "resource": "media",
          "score": 0.019646904594820866
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "Staff email messaging",
      "resource": "mail",
      "aiResource": "mail",
      "evidence": [
        {
          "resource": "mail",
          "score": 0.8149853050600342
        },
        {
          "resource": "media",
          "score": 0.1322663363696338
        },
        {
          "resource": "store",
          "score": 0.10037640140918849
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Streaming video media",
      "resource": "media",
      "aiResource": "media",
      "evidence": [
        {
          "resource": "media",
          "score": 0.8595134003960121
        },
        {
          "resource": "store",
          "score": 0.07213170005566556
        },
        {
          "resource": "mail",
          "score": 0.040326665664725606
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Neural similarity is not service identity. Verify the complete revision history and all assumptions. No DNS lookup, configuration or shutdown is performed.",
  "analysis": {
    "status": "ready",
    "records": [
      {
        "id": "shop.example.test",
        "service": "store",
        "retireAt": 1000,
        "switchAt": 900,
        "baselineAfter": 960,
        "safeAfter": 4200,
        "extraWait": 3240,
        "deadlineGap": 3200,
        "baselinePass": true,
        "historyPass": false,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 600,
            "ttl": 3600,
            "expiryBound": 4200
          },
          {
            "revision": 1,
            "from": 600,
            "until": 900,
            "ttl": 60,
            "expiryBound": 960
          }
        ]
      },
      {
        "id": "mail.example.test",
        "service": "mail",
        "retireAt": 1000,
        "switchAt": 600,
        "baselineAfter": 900,
        "safeAfter": 900,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 600,
            "ttl": 300,
            "expiryBound": 900
          }
        ]
      },
      {
        "id": "video.example.test",
        "service": "media",
        "retireAt": 1800,
        "switchAt": 1200,
        "baselineAfter": 1800,
        "safeAfter": 1800,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 1200,
            "ttl": 600,
            "expiryBound": 1800
          }
        ]
      }
    ],
    "services": [
      {
        "id": "store",
        "recordIds": [
          "shop.example.test"
        ],
        "safeAfter": 4200
      },
      {
        "id": "mail",
        "recordIds": [
          "mail.example.test"
        ],
        "safeAfter": 900
      },
      {
        "id": "media",
        "recordIds": [
          "video.example.test"
        ],
        "safeAfter": 1800
      }
    ],
    "baselineRisk": 0,
    "historyRisk": 1,
    "missedByBaseline": 1,
    "maxExtraWait": 3240,
    "scope": "Hypothetical positive-answer TTL upper bounds only. All authoritative changes are simultaneous, caches honor TTL, no refresh before second 0, no serve-stale, negative caches, CNAME chains, clock skew or connections outliving DNS. Each old revision can be fetched arbitrarily close to its next change; next-change + old TTL is a conservative expiry bound. Equality clears the bound. Final new answer is permanent. This is not proof of live propagation or permission to shut down a service."
  }
}

