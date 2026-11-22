# Synthetic editorial trace

AI similarity is not record identity. Whole-trace analysis withheld for any held operation. Array order is the supplied total execution order. No values, locks, commits, aborts, range reads or database connection. No operations executed or repaired.

## Reviewed trace worksheet

CONFLICT SERIALIZABILITY: ACYCLIC — equivalent serial order exists

Conflict serializability of the supplied single-version total R/W trace only. Not view serializability, isolation, recoverability, durability or a database execution guarantee.

FIRST-APPEARANCE BASELINE: publish → revise → credit; reversed conflict pairs: 2.

CONFLICT PAIRS: 2; precedence edges: 2; harmless read/read pairs ignored: 1.

SERIAL ORDER: revise → credit → publish

SOURCE-LINKED PRECEDENCE:
revise → publish: e2 < e3 [headline WR]
credit → publish: e4 < e5 [author WR]

Counts describe this supplied trace, not measured time savings or model accuracy.

## Complete source-linked audit

{
  "schema": "serial-atelier/1",
  "originalInput": {
    "title": "Synthetic editorial trace",
    "resources": [
      {
        "id": "headline",
        "description": "News article headline title"
      },
      {
        "id": "caption",
        "description": "Photograph image caption text"
      },
      {
        "id": "author",
        "description": "Writer author biography profile"
      }
    ],
    "transactions": [
      "publish",
      "revise",
      "credit"
    ],
    "operations": [
      {
        "id": "e1",
        "transaction": "publish",
        "mode": "R",
        "resourceNote": "Caption text under photograph"
      },
      {
        "id": "e2",
        "transaction": "revise",
        "mode": "W",
        "resourceNote": "Article news headline title"
      },
      {
        "id": "e3",
        "transaction": "publish",
        "mode": "R",
        "resourceNote": "Article news headline title"
      },
      {
        "id": "e4",
        "transaction": "credit",
        "mode": "W",
        "resourceNote": "Biography of article writer"
      },
      {
        "id": "e5",
        "transaction": "publish",
        "mode": "R",
        "resourceNote": "Biography of article writer"
      },
      {
        "id": "e6",
        "transaction": "revise",
        "mode": "R",
        "resourceNote": "Caption text under photograph"
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "id": "e1",
      "resource": "caption",
      "aiResource": "caption",
      "transaction": "publish",
      "mode": "R",
      "evidence": [
        {
          "resource": "caption",
          "score": 0.9255336223418996
        },
        {
          "resource": "headline",
          "score": 0.2412142673218397
        },
        {
          "resource": "author",
          "score": 0.024103076777951902
        }
      ],
      "decision": "approve",
      "note": "=SUM(1,2)\nReviewed \"source\", preserved."
    },
    {
      "index": 1,
      "id": "e2",
      "resource": "headline",
      "aiResource": "headline",
      "transaction": "revise",
      "mode": "W",
      "evidence": [
        {
          "resource": "headline",
          "score": 0.986251082266191
        },
        {
          "resource": "caption",
          "score": 0.23429586940961866
        },
        {
          "resource": "author",
          "score": 0.11326881799441874
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "id": "e3",
      "resource": "headline",
      "aiResource": "headline",
      "transaction": "publish",
      "mode": "R",
      "evidence": [
        {
          "resource": "headline",
          "score": 0.986251082266191
        },
        {
          "resource": "caption",
          "score": 0.23429586940961866
        },
        {
          "resource": "author",
          "score": 0.11326881799441874
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "id": "e4",
      "resource": "author",
      "aiResource": "author",
      "transaction": "credit",
      "mode": "W",
      "evidence": [
        {
          "resource": "author",
          "score": 0.7558761692267086
        },
        {
          "resource": "headline",
          "score": 0.3417277200371823
        },
        {
          "resource": "caption",
          "score": 0.0689973400915704
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "id": "e5",
      "resource": "author",
      "aiResource": "author",
      "transaction": "publish",
      "mode": "R",
      "evidence": [
        {
          "resource": "author",
          "score": 0.7558761692267086
        },
        {
          "resource": "headline",
          "score": 0.3417277200371823
        },
        {
          "resource": "caption",
          "score": 0.0689973400915704
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "id": "e6",
      "resource": "caption",
      "aiResource": "caption",
      "transaction": "revise",
      "mode": "R",
      "evidence": [
        {
          "resource": "caption",
          "score": 0.9330320048528901
        },
        {
          "resource": "headline",
          "score": 0.2494114409086688
        },
        {
          "resource": "author",
          "score": 0.039811207912852795
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "AI similarity is not record identity. Whole-trace analysis withheld for any held operation. Array order is the supplied total execution order. No values, locks, commits, aborts, range reads or database connection. No operations executed or repaired.",
  "analysis": {
    "status": "ready",
    "serializable": true,
    "sharedCrossTransactionPairs": 3,
    "readReadPairsIgnored": 1,
    "conflictingPairs": 2,
    "edges": [
      {
        "from": "revise",
        "to": "publish",
        "witnesses": [
          {
            "from": "revise",
            "to": "publish",
            "resource": "headline",
            "before": "e2",
            "after": "e3",
            "beforeIndex": 1,
            "afterIndex": 2,
            "modes": "WR"
          }
        ]
      },
      {
        "from": "credit",
        "to": "publish",
        "witnesses": [
          {
            "from": "credit",
            "to": "publish",
            "resource": "author",
            "before": "e4",
            "after": "e5",
            "beforeIndex": 3,
            "afterIndex": 4,
            "modes": "WR"
          }
        ]
      }
    ],
    "conflicts": [
      {
        "from": "revise",
        "to": "publish",
        "resource": "headline",
        "before": "e2",
        "after": "e3",
        "beforeIndex": 1,
        "afterIndex": 2,
        "modes": "WR"
      },
      {
        "from": "credit",
        "to": "publish",
        "resource": "author",
        "before": "e4",
        "after": "e5",
        "beforeIndex": 3,
        "afterIndex": 4,
        "modes": "WR"
      }
    ],
    "baselineOrder": [
      "publish",
      "revise",
      "credit"
    ],
    "baselineViolations": [
      {
        "from": "revise",
        "to": "publish",
        "resource": "headline",
        "before": "e2",
        "after": "e3",
        "beforeIndex": 1,
        "afterIndex": 2,
        "modes": "WR"
      },
      {
        "from": "credit",
        "to": "publish",
        "resource": "author",
        "before": "e4",
        "after": "e5",
        "beforeIndex": 3,
        "afterIndex": 4,
        "modes": "WR"
      }
    ],
    "serialOrder": [
      "revise",
      "credit",
      "publish"
    ],
    "serialOperations": [
      {
        "sourceIndex": 1,
        "id": "e2",
        "transaction": "revise",
        "mode": "W",
        "resource": "headline"
      },
      {
        "sourceIndex": 5,
        "id": "e6",
        "transaction": "revise",
        "mode": "R",
        "resource": "caption"
      },
      {
        "sourceIndex": 3,
        "id": "e4",
        "transaction": "credit",
        "mode": "W",
        "resource": "author"
      },
      {
        "sourceIndex": 0,
        "id": "e1",
        "transaction": "publish",
        "mode": "R",
        "resource": "caption"
      },
      {
        "sourceIndex": 2,
        "id": "e3",
        "transaction": "publish",
        "mode": "R",
        "resource": "headline"
      },
      {
        "sourceIndex": 4,
        "id": "e5",
        "transaction": "publish",
        "mode": "R",
        "resource": "author"
      }
    ],
    "cycle": [],
    "scope": "Conflict serializability of the supplied single-version total R/W trace only. Not view serializability, isolation, recoverability, durability or a database execution guarantee."
  }
}

