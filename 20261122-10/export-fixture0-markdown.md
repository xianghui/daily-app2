# Helpdesk runbook directory

Lookup-frequency planning, not observed usability. Assumes successful lookup, equal-cost binary branch decisions and the supplied fixed destination order. Similarity is not confidence. All counts and identities require review.

## Ordered binary menu
- Is the requested destination at or before “account” in the supplied order?
  - YES
    - Open account: Account password reset and login access
  - NO
    - Is the requested destination at or before “billing” in the supplied order?
      - YES
        - Open billing: Invoices payment billing and receipts
      - NO
        - Is the requested destination at or before “network” in the supplied order?
          - YES
            - Open network: Wireless internet network connection
          - NO
            - Open printing: Printer paper ink and print queue

## Computed comparison
Weighted decisions: 135 vs balanced 200; total lookups: 100. Expected decisions: 1.35 vs 2. Estimates under supplied frequencies; not measured time savings.

## Complete original and reviewed audit
{
  "schema": "index-canopy/1",
  "originalInput": {
    "title": "Helpdesk runbook directory",
    "destinations": [
      {
        "id": "account",
        "description": "Account password reset and login access"
      },
      {
        "id": "billing",
        "description": "Invoices payment billing and receipts"
      },
      {
        "id": "network",
        "description": "Wireless internet network connection"
      },
      {
        "id": "printing",
        "description": "Printer paper ink and print queue"
      }
    ],
    "tallies": [
      {
        "id": "t1",
        "subject": "Forgotten password cannot log in",
        "count": 80
      },
      {
        "id": "t2",
        "subject": "Need a payment invoice receipt",
        "count": 5
      },
      {
        "id": "t3",
        "subject": "WiFi internet keeps disconnecting",
        "count": 10
      },
      {
        "id": "t4",
        "subject": "Printer stuck paper jam",
        "count": 5
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "tally": "t1",
      "destination": "account",
      "aiDestination": "account",
      "count": 80,
      "evidence": [
        {
          "destination": "account",
          "score": 0.7063017708756175
        },
        {
          "destination": "network",
          "score": -0.009486661510192129
        },
        {
          "destination": "billing",
          "score": -0.033484625826227854
        },
        {
          "destination": "printing",
          "score": -0.11134030427298203
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "tally": "t2",
      "destination": "billing",
      "aiDestination": "billing",
      "count": 5,
      "evidence": [
        {
          "destination": "billing",
          "score": 0.7354904379976424
        },
        {
          "destination": "printing",
          "score": 0.1944619902030509
        },
        {
          "destination": "account",
          "score": 0.0475964172221388
        },
        {
          "destination": "network",
          "score": 0.04691246136110459
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "tally": "t3",
      "destination": "network",
      "aiDestination": "network",
      "count": 10,
      "evidence": [
        {
          "destination": "network",
          "score": 0.5299065342144589
        },
        {
          "destination": "account",
          "score": 0.06826800530066392
        },
        {
          "destination": "printing",
          "score": 0.0006514639652627774
        },
        {
          "destination": "billing",
          "score": -0.006621450684852093
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "tally": "t4",
      "destination": "printing",
      "aiDestination": "printing",
      "count": 5,
      "evidence": [
        {
          "destination": "printing",
          "score": 0.5679313503280409
        },
        {
          "destination": "account",
          "score": 0.09820145268995839
        },
        {
          "destination": "billing",
          "score": 0.04307886230046608
        },
        {
          "destination": "network",
          "score": -0.00511205543968473
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Lookup-frequency planning, not observed usability. Assumes successful lookup, equal-cost binary branch decisions and the supplied fixed destination order. Similarity is not confidence. All counts and identities require review.",
  "analysis": {
    "status": "ready",
    "total": 100,
    "weights": [
      80,
      5,
      10,
      5
    ],
    "optimal": {
      "root": {
        "lo": 0,
        "hi": 3,
        "split": 0,
        "cost": 135,
        "left": {
          "lo": 0,
          "hi": 0,
          "cost": 0
        },
        "right": {
          "lo": 1,
          "hi": 3,
          "split": 1,
          "cost": 35,
          "left": {
            "lo": 1,
            "hi": 1,
            "cost": 0
          },
          "right": {
            "lo": 2,
            "hi": 3,
            "split": 2,
            "cost": 15,
            "left": {
              "lo": 2,
              "hi": 2,
              "cost": 0
            },
            "right": {
              "lo": 3,
              "hi": 3,
              "cost": 0
            }
          }
        }
      },
      "paths": [
        [
          {
            "split": 0,
            "side": "left"
          }
        ],
        [
          {
            "split": 0,
            "side": "right"
          },
          {
            "split": 1,
            "side": "left"
          }
        ],
        [
          {
            "split": 0,
            "side": "right"
          },
          {
            "split": 1,
            "side": "right"
          },
          {
            "split": 2,
            "side": "left"
          }
        ],
        [
          {
            "split": 0,
            "side": "right"
          },
          {
            "split": 1,
            "side": "right"
          },
          {
            "split": 2,
            "side": "right"
          }
        ]
      ],
      "cost": 135
    },
    "baseline": {
      "root": {
        "lo": 0,
        "hi": 3,
        "split": 1,
        "cost": 200,
        "left": {
          "lo": 0,
          "hi": 1,
          "split": 0,
          "cost": 85,
          "left": {
            "lo": 0,
            "hi": 0,
            "cost": 0
          },
          "right": {
            "lo": 1,
            "hi": 1,
            "cost": 0
          }
        },
        "right": {
          "lo": 2,
          "hi": 3,
          "split": 2,
          "cost": 15,
          "left": {
            "lo": 2,
            "hi": 2,
            "cost": 0
          },
          "right": {
            "lo": 3,
            "hi": 3,
            "cost": 0
          }
        }
      },
      "paths": [
        [
          {
            "split": 1,
            "side": "left"
          },
          {
            "split": 0,
            "side": "left"
          }
        ],
        [
          {
            "split": 1,
            "side": "left"
          },
          {
            "split": 0,
            "side": "right"
          }
        ],
        [
          {
            "split": 1,
            "side": "right"
          },
          {
            "split": 2,
            "side": "left"
          }
        ],
        [
          {
            "split": 1,
            "side": "right"
          },
          {
            "split": 2,
            "side": "right"
          }
        ]
      ],
      "cost": 200
    },
    "leaves": [
      {
        "id": "account",
        "description": "Account password reset and login access",
        "weight": 80,
        "depth": 1,
        "baselineDepth": 2,
        "path": [
          {
            "split": 0,
            "side": "left"
          }
        ]
      },
      {
        "id": "billing",
        "description": "Invoices payment billing and receipts",
        "weight": 5,
        "depth": 2,
        "baselineDepth": 2,
        "path": [
          {
            "split": 0,
            "side": "right"
          },
          {
            "split": 1,
            "side": "left"
          }
        ]
      },
      {
        "id": "network",
        "description": "Wireless internet network connection",
        "weight": 10,
        "depth": 3,
        "baselineDepth": 2,
        "path": [
          {
            "split": 0,
            "side": "right"
          },
          {
            "split": 1,
            "side": "right"
          },
          {
            "split": 2,
            "side": "left"
          }
        ]
      },
      {
        "id": "printing",
        "description": "Printer paper ink and print queue",
        "weight": 5,
        "depth": 3,
        "baselineDepth": 2,
        "path": [
          {
            "split": 0,
            "side": "right"
          },
          {
            "split": 1,
            "side": "right"
          },
          {
            "split": 2,
            "side": "right"
          }
        ]
      }
    ],
    "expectedChoices": 1.35,
    "baselineExpected": 2,
    "literalMatches": 0
  }
}
