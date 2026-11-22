# Workshop admission rulebook

Unordered Boolean rulebook worksheet, not policy enforcement. All fact combinations assumed feasible. Rules are AND conjunctions; no priority/default/unknown-value semantics. Review every AI fact mapping and truth value. Similarity is not confidence.

## Decision-table worksheet
All 8 combinations: 1 gaps, 3 conflicts, 4 consistent.

First-match assigns 7 cases but masks 3 outcome conflicts. No hidden default.

C003 GAP: booked=false, trained=true, full=false
  Rules: none → no outcome
  Next: Draft an explicit rule or document why this combination is infeasible.

C005 CONFLICT: booked=false, trained=false, full=true
  Rules: room-limit, needs-induction → wait / train
  Next: Resolve precedence or narrow rule conditions; do not assume the first answer is correct.

C006 CONFLICT: booked=true, trained=false, full=true
  Rules: room-limit, needs-induction → wait / train
  Next: Resolve precedence or narrow rule conditions; do not assume the first answer is correct.

C008 CONFLICT: booked=true, trained=true, full=true
  Rules: reserved-seat, room-limit → admit / wait
  Next: Resolve precedence or narrow rule conditions; do not assume the first answer is correct.



Computed combination counts, not productivity or accuracy claims. First-match is source-order comparison only.

## Complete original and reviewed audit
{
  "schema": "rule-lantern/1",
  "originalInput": {
    "title": "Workshop admission rulebook",
    "facts": [
      {
        "id": "booked",
        "description": "Attendee has an advance reservation or booking"
      },
      {
        "id": "trained",
        "description": "Attendee completed the required safety induction training"
      },
      {
        "id": "full",
        "description": "Workshop has reached maximum room capacity"
      }
    ],
    "outcomes": [
      {
        "id": "admit",
        "description": "Admit attendee to the workshop"
      },
      {
        "id": "wait",
        "description": "Place attendee on the waiting list"
      },
      {
        "id": "train",
        "description": "Request completion of safety training"
      }
    ],
    "rules": [
      {
        "id": "reserved-seat",
        "outcome": "admit",
        "conditions": [
          {
            "fact": "Person made a reservation in advance",
            "value": true
          },
          {
            "fact": "Safety induction has been completed",
            "value": true
          }
        ]
      },
      {
        "id": "room-limit",
        "outcome": "wait",
        "conditions": [
          {
            "fact": "All available room places are occupied",
            "value": true
          }
        ]
      },
      {
        "id": "needs-induction",
        "outcome": "train",
        "conditions": [
          {
            "fact": "Safety induction has been completed",
            "value": false
          }
        ]
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "rule": "reserved-seat",
      "ruleIndex": 0,
      "condition": 0,
      "fact": "booked",
      "aiFact": "booked",
      "value": true,
      "evidence": [
        {
          "fact": "booked",
          "score": 0.6692129493934074
        },
        {
          "fact": "trained",
          "score": 0.270823607076266
        },
        {
          "fact": "full",
          "score": 0.21403614010617084
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "rule": "reserved-seat",
      "ruleIndex": 0,
      "condition": 1,
      "fact": "trained",
      "aiFact": "trained",
      "value": true,
      "evidence": [
        {
          "fact": "trained",
          "score": 0.6626195043792831
        },
        {
          "fact": "full",
          "score": 0.11181091729865332
        },
        {
          "fact": "booked",
          "score": 0.059703476779927656
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "rule": "room-limit",
      "ruleIndex": 1,
      "condition": 0,
      "fact": "full",
      "aiFact": "full",
      "value": true,
      "evidence": [
        {
          "fact": "full",
          "score": 0.5101497846552661
        },
        {
          "fact": "booked",
          "score": 0.32206686501416726
        },
        {
          "fact": "trained",
          "score": 0.0224994058411957
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "rule": "needs-induction",
      "ruleIndex": 2,
      "condition": 0,
      "fact": "trained",
      "aiFact": "trained",
      "value": false,
      "evidence": [
        {
          "fact": "trained",
          "score": 0.6626195043792831
        },
        {
          "fact": "full",
          "score": 0.11181091729865332
        },
        {
          "fact": "booked",
          "score": 0.059703476779927656
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Unordered Boolean rulebook worksheet, not policy enforcement. All fact combinations assumed feasible. Rules are AND conjunctions; no priority/default/unknown-value semantics. Review every AI fact mapping and truth value. Similarity is not confidence.",
  "analysis": {
    "status": "ready",
    "cases": [
      {
        "case": "C001",
        "facts": {
          "booked": false,
          "trained": false,
          "full": false
        },
        "rules": [
          "needs-induction"
        ],
        "outcomes": [
          "train"
        ],
        "firstOutcome": "train",
        "kind": "consistent"
      },
      {
        "case": "C002",
        "facts": {
          "booked": true,
          "trained": false,
          "full": false
        },
        "rules": [
          "needs-induction"
        ],
        "outcomes": [
          "train"
        ],
        "firstOutcome": "train",
        "kind": "consistent"
      },
      {
        "case": "C003",
        "facts": {
          "booked": false,
          "trained": true,
          "full": false
        },
        "rules": [],
        "outcomes": [],
        "firstOutcome": null,
        "kind": "gap"
      },
      {
        "case": "C004",
        "facts": {
          "booked": true,
          "trained": true,
          "full": false
        },
        "rules": [
          "reserved-seat"
        ],
        "outcomes": [
          "admit"
        ],
        "firstOutcome": "admit",
        "kind": "consistent"
      },
      {
        "case": "C005",
        "facts": {
          "booked": false,
          "trained": false,
          "full": true
        },
        "rules": [
          "room-limit",
          "needs-induction"
        ],
        "outcomes": [
          "wait",
          "train"
        ],
        "firstOutcome": "wait",
        "kind": "conflict"
      },
      {
        "case": "C006",
        "facts": {
          "booked": true,
          "trained": false,
          "full": true
        },
        "rules": [
          "room-limit",
          "needs-induction"
        ],
        "outcomes": [
          "wait",
          "train"
        ],
        "firstOutcome": "wait",
        "kind": "conflict"
      },
      {
        "case": "C007",
        "facts": {
          "booked": false,
          "trained": true,
          "full": true
        },
        "rules": [
          "room-limit"
        ],
        "outcomes": [
          "wait"
        ],
        "firstOutcome": "wait",
        "kind": "consistent"
      },
      {
        "case": "C008",
        "facts": {
          "booked": true,
          "trained": true,
          "full": true
        },
        "rules": [
          "reserved-seat",
          "room-limit"
        ],
        "outcomes": [
          "admit",
          "wait"
        ],
        "firstOutcome": "admit",
        "kind": "conflict"
      }
    ],
    "gaps": 1,
    "conflicts": 3,
    "consistent": 4,
    "firstMatchAssigned": 7,
    "rules": [
      {
        "id": "reserved-seat",
        "outcome": "admit",
        "matches": 2,
        "exclusive": 1
      },
      {
        "id": "room-limit",
        "outcome": "wait",
        "matches": 4,
        "exclusive": 1
      },
      {
        "id": "needs-induction",
        "outcome": "train",
        "matches": 4,
        "exclusive": 2
      }
    ],
    "literalMatches": 0
  }
}
