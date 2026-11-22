# Synthetic account-service lock notes

Neural similarity is not mutex identity. Holds withhold the entire audit; originals are preserved. No code or system is changed.

## Reviewed lock-order audit

Potential lock-order inversion only. Assumes non-reentrant exclusive mutexes, acquired in listed order and all retained until trace end. A cycle is not proof of a reachable runtime deadlock; an acyclic graph covers only supplied notes. No source analysis, scheduling, code execution or automatic reordering.

TRACES RETAINED: 3 / ACQUISITIONS: 6

PAIRWISE-REVERSAL BASELINE: 0 opposite lock pairs. Does not find longer cycles.

FULL DIRECTED AUDIT: Acyclic supplied order. One compatible catalog ordering: account → billing → audit

Do not automatically reorder code. Review semantics and all missing execution paths.

REVIEWED ACQUISITIONS
Checkout: account → billing
Invoice log: billing → audit
Profile log: account → audit

ALL HELD-BEFORE-ACQUIRED EDGES
account → billing | Checkout [1 before 2]
billing → audit | Invoice log [1 before 2]
account → audit | Profile log [1 before 2]

## Complete original and review audit

{
  "schema": "lock-orchard/1",
  "originalInput": {
    "title": "Synthetic account-service lock notes",
    "locks": [
      {
        "id": "account",
        "description": "Customer account profile records mutex"
      },
      {
        "id": "billing",
        "description": "Invoice billing ledger mutex"
      },
      {
        "id": "audit",
        "description": "Audit activity journal mutex"
      }
    ],
    "traces": [
      {
        "id": "Checkout",
        "acquire": [
          "Customer account profile records",
          "Invoice billing ledger"
        ]
      },
      {
        "id": "Invoice log",
        "acquire": [
          "Invoice billing ledger",
          "Audit activity journal"
        ]
      },
      {
        "id": "Profile log",
        "acquire": [
          "Customer account profile records",
          "Audit activity journal"
        ]
      }
    ]
  },
  "reviews": [
    {
      "rule": 0,
      "position": 0,
      "text": "Customer account profile records",
      "index": 0,
      "resource": "account",
      "aiResource": "account",
      "evidence": [
        {
          "resource": "account",
          "score": 0.667819200775011
        },
        {
          "resource": "billing",
          "score": 0.11250724997396802
        },
        {
          "resource": "audit",
          "score": 0.09436659400261274
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 1,
      "text": "Invoice billing ledger",
      "index": 1,
      "resource": "billing",
      "aiResource": "billing",
      "evidence": [
        {
          "resource": "billing",
          "score": 0.7709021103306444
        },
        {
          "resource": "account",
          "score": 0.20270532270031102
        },
        {
          "resource": "audit",
          "score": 0.16571026355649326
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 0,
      "text": "Invoice billing ledger",
      "index": 2,
      "resource": "billing",
      "aiResource": "billing",
      "evidence": [
        {
          "resource": "billing",
          "score": 0.7709021103306444
        },
        {
          "resource": "account",
          "score": 0.20270532270031102
        },
        {
          "resource": "audit",
          "score": 0.16571026355649326
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 1,
      "text": "Audit activity journal",
      "index": 3,
      "resource": "audit",
      "aiResource": "audit",
      "evidence": [
        {
          "resource": "audit",
          "score": 0.7880503990951874
        },
        {
          "resource": "billing",
          "score": 0.1995863820276743
        },
        {
          "resource": "account",
          "score": 0.16665587233431825
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 0,
      "text": "Customer account profile records",
      "index": 4,
      "resource": "account",
      "aiResource": "account",
      "evidence": [
        {
          "resource": "account",
          "score": 0.6613922956838076
        },
        {
          "resource": "billing",
          "score": 0.11817082312110493
        },
        {
          "resource": "audit",
          "score": 0.08710937986088345
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 1,
      "text": "Audit activity journal",
      "index": 5,
      "resource": "audit",
      "aiResource": "audit",
      "evidence": [
        {
          "resource": "audit",
          "score": 0.7933977681876307
        },
        {
          "resource": "billing",
          "score": 0.19309898981242457
        },
        {
          "resource": "account",
          "score": 0.16935685946087278
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Neural similarity is not mutex identity. Holds withhold the entire audit; originals are preserved. No code or system is changed.",
  "analysis": {
    "status": "ready",
    "traces": [
      {
        "id": "Checkout",
        "acquire": [
          "account",
          "billing"
        ]
      },
      {
        "id": "Invoice log",
        "acquire": [
          "billing",
          "audit"
        ]
      },
      {
        "id": "Profile log",
        "acquire": [
          "account",
          "audit"
        ]
      }
    ],
    "edges": [
      {
        "from": "account",
        "to": "billing",
        "witnesses": [
          {
            "trace": "Checkout",
            "fromPosition": 1,
            "toPosition": 2
          }
        ]
      },
      {
        "from": "billing",
        "to": "audit",
        "witnesses": [
          {
            "trace": "Invoice log",
            "fromPosition": 1,
            "toPosition": 2
          }
        ]
      },
      {
        "from": "account",
        "to": "audit",
        "witnesses": [
          {
            "trace": "Profile log",
            "fromPosition": 1,
            "toPosition": 2
          }
        ]
      }
    ],
    "reversedPairs": [],
    "cycle": null,
    "order": [
      "account",
      "billing",
      "audit"
    ],
    "cycleEdges": [],
    "traceCount": 3,
    "acquisitionCount": 6,
    "scope": "Potential lock-order inversion only. Assumes non-reentrant exclusive mutexes, acquired in listed order and all retained until trace end. A cycle is not proof of a reachable runtime deadlock; an acyclic graph covers only supplied notes. No source analysis, scheduling, code execution or automatic reordering."
  }
}

