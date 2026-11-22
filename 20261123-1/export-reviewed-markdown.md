# Synthetic operations cutover

Neural similarity is not service identity. Verify the complete revision history and all assumptions. No DNS lookup, configuration or shutdown is performed.

## Reviewed cutover worksheet

Hypothetical positive-answer TTL upper bounds only. All authoritative changes are simultaneous, caches honor TTL, no refresh before second 0, no serve-stale, negative caches, CNAME chains, clock skew or connections outliving DNS. Each old revision can be fetched arbitrarily close to its next change; next-change + old TTL is a conservative expiry bound. Equality clears the bound. Final new answer is permanent. This is not proof of live propagation or permission to shut down a service.

LATEST-OLD-TTL BASELINE: 1 / 3 retirement plans fall before switch + last old TTL.

ALL-HISTORY BOUND: 1 / 3 fall before the old-answer expiry bound. 0 risk(s) missed by baseline. These are worksheet checks, not live measurements.

RECORD CHECKLIST (seconds relative to history start)
stock.example.test → stock | permanent switch 2400 | baseline 2520 | history safe-after 2520 | planned retirement 2500 | WAIT 20 seconds
camera.example.test → camera | permanent switch 800 | baseline 800 | history safe-after 800 | planned retirement 2000 | meets modeled bound
pay.example.test → pay | permanent switch 600 | baseline 1500 | history safe-after 1500 | planned retirement 1500 | meets modeled bound

OLD-ANSWER WITNESSES
stock.example.test revision 0: fetch in [0, 300); TTL 1800; expiry bound 2100
stock.example.test revision 1: fetch in [300, 2400); TTL 120; expiry bound 2520
camera.example.test revision 0: fetch in [0, 100); TTL 600; expiry bound 700
camera.example.test revision 1: fetch in [100, 800); TTL 0; expiry bound 800
pay.example.test revision 0: fetch in [0, 600); TTL 900; expiry bound 1500

SERVICE CHECKPOINTS
stock: all listed record bounds cleared at 2520 seconds | stock.example.test
camera: all listed record bounds cleared at 800 seconds | camera.example.test
pay: all listed record bounds cleared at 1500 seconds | pay.example.test

## Complete original and review audit

{
  "schema": "ttl-harbor/1",
  "originalInput": {
    "title": "Synthetic operations cutover",
    "services": [
      {
        "id": "stock",
        "description": "Warehouse inventory stock management service"
      },
      {
        "id": "camera",
        "description": "Security camera video monitoring service"
      },
      {
        "id": "pay",
        "description": "Payroll employee salary payment service"
      }
    ],
    "records": [
      {
        "id": "stock.example.test",
        "serviceNote": "Warehouse inventory stock tracking",
        "retireAt": 2500,
        "revisions": [
          {
            "at": 0,
            "ttl": 1800,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 2400,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "camera.example.test",
        "serviceNote": "Security cameras video monitoring",
        "retireAt": 2000,
        "revisions": [
          {
            "at": 0,
            "ttl": 600,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 0,
            "target": "old"
          },
          {
            "at": 800,
            "ttl": 0,
            "target": "new"
          }
        ]
      },
      {
        "id": "pay.example.test",
        "serviceNote": "Employee payroll salary payments",
        "retireAt": 1500,
        "revisions": [
          {
            "at": 0,
            "ttl": 900,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 90,
            "target": "new"
          }
        ]
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Warehouse inventory stock tracking",
      "resource": "stock",
      "aiResource": "stock",
      "evidence": [
        {
          "resource": "stock",
          "score": 0.8359302477639405
        },
        {
          "resource": "pay",
          "score": 0.1947147266526642
        },
        {
          "resource": "camera",
          "score": 0.15633195890897883
        }
      ],
      "decision": "approve",
      "note": "=SUM(1,2)\nReviewed \"history\", preserved."
    },
    {
      "index": 1,
      "text": "Security cameras video monitoring",
      "resource": "camera",
      "aiResource": "camera",
      "evidence": [
        {
          "resource": "camera",
          "score": 0.9222259177332396
        },
        {
          "resource": "pay",
          "score": 0.10871861404856169
        },
        {
          "resource": "stock",
          "score": 0.07429538627160845
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Employee payroll salary payments",
      "resource": "pay",
      "aiResource": "pay",
      "evidence": [
        {
          "resource": "pay",
          "score": 0.8710067332041478
        },
        {
          "resource": "stock",
          "score": 0.08743786039981957
        },
        {
          "resource": "camera",
          "score": 0.03543706591510945
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
        "id": "stock.example.test",
        "service": "stock",
        "retireAt": 2500,
        "switchAt": 2400,
        "baselineAfter": 2520,
        "safeAfter": 2520,
        "extraWait": 0,
        "deadlineGap": 20,
        "baselinePass": false,
        "historyPass": false,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 300,
            "ttl": 1800,
            "expiryBound": 2100
          },
          {
            "revision": 1,
            "from": 300,
            "until": 2400,
            "ttl": 120,
            "expiryBound": 2520
          }
        ]
      },
      {
        "id": "camera.example.test",
        "service": "camera",
        "retireAt": 2000,
        "switchAt": 800,
        "baselineAfter": 800,
        "safeAfter": 800,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 600,
            "expiryBound": 700
          },
          {
            "revision": 1,
            "from": 100,
            "until": 800,
            "ttl": 0,
            "expiryBound": 800
          }
        ]
      },
      {
        "id": "pay.example.test",
        "service": "pay",
        "retireAt": 1500,
        "switchAt": 600,
        "baselineAfter": 1500,
        "safeAfter": 1500,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 600,
            "ttl": 900,
            "expiryBound": 1500
          }
        ]
      }
    ],
    "services": [
      {
        "id": "stock",
        "recordIds": [
          "stock.example.test"
        ],
        "safeAfter": 2520
      },
      {
        "id": "camera",
        "recordIds": [
          "camera.example.test"
        ],
        "safeAfter": 800
      },
      {
        "id": "pay",
        "recordIds": [
          "pay.example.test"
        ],
        "safeAfter": 1500
      }
    ],
    "baselineRisk": 1,
    "historyRisk": 1,
    "missedByBaseline": 0,
    "maxExtraWait": 0,
    "scope": "Hypothetical positive-answer TTL upper bounds only. All authoritative changes are simultaneous, caches honor TTL, no refresh before second 0, no serve-stale, negative caches, CNAME chains, clock skew or connections outliving DNS. Each old revision can be fetched arbitrarily close to its next change; next-change + old TTL is a conservative expiry bound. Equality clears the bound. Final new answer is permanent. This is not proof of live propagation or permission to shut down a service."
  }
}

