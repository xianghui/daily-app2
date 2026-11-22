# Synthetic menu parser conflict

Neural similarity is not symbol identity. Holds withhold the entire grammar audit; originals are preserved. No parser code is generated or run.

## Reviewed grammar audit

LL(1) table collisions for this reviewed token grammar, not proof of language ambiguity, full parser correctness or security. $ denotes end of input; empty rhs denotes epsilon. No grammar rewriting or code execution.

PRODUCTIONS RETAINED: 4

DIRECT-FIRST-TERMINAL BASELINE: 0 duplicate cells. Only checks rules starting with a literal token.

FULL FIRST/FOLLOW AUDIT: 1 conflicting cells. Every conflicting cell retains all alternatives.

SYMBOL SETS
order | nullable false | FIRST ["meal","tea"] | FOLLOW ["$"] | productive true | reachable true | defined true
drink | nullable true | FIRST ["tea"] | FOLLOW ["meal"] | productive true | reachable true | defined true

REVIEWED RULES
M1: order → ⟨drink⟩ "meal"
M2: order → "meal"
D1: drink → "tea"
D2: drink → ε

CONFLICTS
order / "meal" → M1, M2

PREDICT SETS
M1 → ["meal","tea"]
M2 → ["meal"]
D1 → ["tea"]
D2 → ["meal"]

## Complete original and review audit

{
  "schema": "grammar-harbor/1",
  "originalInput": {
    "title": "Synthetic menu parser conflict",
    "start": "order",
    "nonterminals": [
      {
        "id": "order",
        "description": "Restaurant meal order request"
      },
      {
        "id": "drink",
        "description": "Beverage drink selection"
      }
    ],
    "rules": [
      {
        "id": "M1",
        "lhs": "Restaurant meal order request",
        "rhs": [
          {
            "ref": "Beverage drink selection"
          },
          {
            "terminal": "meal"
          }
        ]
      },
      {
        "id": "M2",
        "lhs": "Restaurant meal order request",
        "rhs": [
          {
            "terminal": "meal"
          }
        ]
      },
      {
        "id": "D1",
        "lhs": "Beverage drink selection",
        "rhs": [
          {
            "terminal": "tea"
          }
        ]
      },
      {
        "id": "D2",
        "lhs": "Beverage drink selection",
        "rhs": []
      }
    ]
  },
  "reviews": [
    {
      "rule": 0,
      "position": -1,
      "text": "Restaurant meal order request",
      "index": 0,
      "resource": "order",
      "aiResource": "order",
      "evidence": [
        {
          "resource": "order",
          "score": 1.0000000870793908
        },
        {
          "resource": "drink",
          "score": 0.25029047539923266
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 0,
      "text": "Beverage drink selection",
      "index": 1,
      "resource": "drink",
      "aiResource": "drink",
      "evidence": [
        {
          "resource": "drink",
          "score": 0.9999994899551734
        },
        {
          "resource": "order",
          "score": 0.25029047539923266
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": -1,
      "text": "Restaurant meal order request",
      "index": 2,
      "resource": "order",
      "aiResource": "order",
      "evidence": [
        {
          "resource": "order",
          "score": 1.0000000870793908
        },
        {
          "resource": "drink",
          "score": 0.25029047539923266
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": -1,
      "text": "Beverage drink selection",
      "index": 3,
      "resource": "drink",
      "aiResource": "drink",
      "evidence": [
        {
          "resource": "drink",
          "score": 0.9999994899551734
        },
        {
          "resource": "order",
          "score": 0.25029047539923266
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": -1,
      "text": "Beverage drink selection",
      "index": 4,
      "resource": "drink",
      "aiResource": "drink",
      "evidence": [
        {
          "resource": "drink",
          "score": 0.9999994899551734
        },
        {
          "resource": "order",
          "score": 0.25029047539923266
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Neural similarity is not symbol identity. Holds withhold the entire grammar audit; originals are preserved. No parser code is generated or run.",
  "analysis": {
    "status": "ready",
    "rules": [
      {
        "id": "M1",
        "lhs": "order",
        "rhs": [
          {
            "ref": "drink"
          },
          {
            "terminal": "meal"
          }
        ]
      },
      {
        "id": "M2",
        "lhs": "order",
        "rhs": [
          {
            "terminal": "meal"
          }
        ]
      },
      {
        "id": "D1",
        "lhs": "drink",
        "rhs": [
          {
            "terminal": "tea"
          }
        ]
      },
      {
        "id": "D2",
        "lhs": "drink",
        "rhs": []
      }
    ],
    "sets": [
      {
        "id": "order",
        "nullable": false,
        "first": [
          "meal",
          "tea"
        ],
        "follow": [
          "$"
        ],
        "productive": true,
        "reachable": true,
        "hasRule": true
      },
      {
        "id": "drink",
        "nullable": true,
        "first": [
          "tea"
        ],
        "follow": [
          "meal"
        ],
        "productive": true,
        "reachable": true,
        "hasRule": true
      }
    ],
    "predict": [
      {
        "rule": "M1",
        "nullable": false,
        "first": [
          "meal",
          "tea"
        ],
        "lookahead": [
          "meal",
          "tea"
        ]
      },
      {
        "rule": "M2",
        "nullable": false,
        "first": [
          "meal"
        ],
        "lookahead": [
          "meal"
        ]
      },
      {
        "rule": "D1",
        "nullable": false,
        "first": [
          "tea"
        ],
        "lookahead": [
          "tea"
        ]
      },
      {
        "rule": "D2",
        "nullable": true,
        "first": [],
        "lookahead": [
          "meal"
        ]
      }
    ],
    "table": [
      {
        "nonterminal": "drink",
        "lookahead": "meal",
        "rules": [
          "D2"
        ]
      },
      {
        "nonterminal": "drink",
        "lookahead": "tea",
        "rules": [
          "D1"
        ]
      },
      {
        "nonterminal": "order",
        "lookahead": "meal",
        "rules": [
          "M1",
          "M2"
        ]
      },
      {
        "nonterminal": "order",
        "lookahead": "tea",
        "rules": [
          "M1"
        ]
      }
    ],
    "conflicts": [
      {
        "nonterminal": "order",
        "lookahead": "meal",
        "rules": [
          "M1",
          "M2"
        ]
      }
    ],
    "directConflicts": 0,
    "ruleCount": 4,
    "scope": "LL(1) table collisions for this reviewed token grammar, not proof of language ambiguity, full parser correctness or security. $ denotes end of input; empty rhs denotes epsilon. No grammar rewriting or code execution."
  }
}

