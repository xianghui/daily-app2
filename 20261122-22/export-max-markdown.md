# Maximum grammar

Neural similarity is not symbol identity. Holds withhold the entire grammar audit; originals are preserved. No parser code is generated or run.

## Reviewed grammar audit

LL(1) table collisions for this reviewed token grammar, not proof of language ambiguity, full parser correctness or security. $ denotes end of input; empty rhs denotes epsilon. No grammar rewriting or code execution.

PRODUCTIONS RETAINED: 24

DIRECT-FIRST-TERMINAL BASELINE: 0 duplicate cells. Only checks rules starting with a literal token.

FULL FIRST/FOLLOW AUDIT: 0 conflicting cells. Every conflicting cell retains all alternatives.

SYMBOL SETS
r0 | nullable false | FIRST [] | FOLLOW ["$"] | productive false | reachable true | defined true
r1 | nullable false | FIRST [] | FOLLOW ["$"] | productive false | reachable true | defined true
r2 | nullable false | FIRST [] | FOLLOW ["$"] | productive false | reachable true | defined true
r3 | nullable false | FIRST [] | FOLLOW ["$"] | productive false | reachable true | defined true
r4 | nullable false | FIRST [] | FOLLOW ["$"] | productive false | reachable true | defined true
r5 | nullable false | FIRST [] | FOLLOW ["$"] | productive false | reachable true | defined true
r6 | nullable false | FIRST [] | FOLLOW ["$"] | productive false | reachable true | defined true
r7 | nullable false | FIRST [] | FOLLOW ["$"] | productive false | reachable true | defined true

REVIEWED RULES
=rule
"0": r0 → ⟨r0⟩ ⟨r1⟩ ⟨r2⟩ ⟨r3⟩ ⟨r4⟩ ⟨r5⟩ ⟨r6⟩ ⟨r7⟩
=rule
"1": r1 → ⟨r1⟩ ⟨r2⟩ ⟨r3⟩ ⟨r4⟩ ⟨r5⟩ ⟨r6⟩ ⟨r7⟩ ⟨r0⟩
=rule
"2": r2 → ⟨r2⟩ ⟨r3⟩ ⟨r4⟩ ⟨r5⟩ ⟨r6⟩ ⟨r7⟩ ⟨r0⟩ ⟨r1⟩
=rule
"3": r3 → ⟨r3⟩ ⟨r4⟩ ⟨r5⟩ ⟨r6⟩ ⟨r7⟩ ⟨r0⟩ ⟨r1⟩ ⟨r2⟩
=rule
"4": r4 → ⟨r4⟩ ⟨r5⟩ ⟨r6⟩ ⟨r7⟩ ⟨r0⟩ ⟨r1⟩ ⟨r2⟩ ⟨r3⟩
=rule
"5": r5 → ⟨r5⟩ ⟨r6⟩ ⟨r7⟩ ⟨r0⟩ ⟨r1⟩ ⟨r2⟩ ⟨r3⟩ ⟨r4⟩
=rule
"6": r6 → ⟨r6⟩ ⟨r7⟩ ⟨r0⟩ ⟨r1⟩ ⟨r2⟩ ⟨r3⟩ ⟨r4⟩ ⟨r5⟩
=rule
"7": r7 → ⟨r7⟩ ⟨r0⟩ ⟨r1⟩ ⟨r2⟩ ⟨r3⟩ ⟨r4⟩ ⟨r5⟩ ⟨r6⟩
=rule
"8": r0 → ⟨r0⟩ ⟨r1⟩ ⟨r2⟩ ⟨r3⟩ ⟨r4⟩ ⟨r5⟩ ⟨r6⟩ ⟨r7⟩
=rule
"9": r1 → ⟨r1⟩ ⟨r2⟩ ⟨r3⟩ ⟨r4⟩ ⟨r5⟩ ⟨r6⟩ ⟨r7⟩ ⟨r0⟩
=rule
"10": r2 → ⟨r2⟩ ⟨r3⟩ ⟨r4⟩ ⟨r5⟩ ⟨r6⟩ ⟨r7⟩ ⟨r0⟩ ⟨r1⟩
=rule
"11": r3 → ⟨r3⟩ ⟨r4⟩ ⟨r5⟩ ⟨r6⟩ ⟨r7⟩ ⟨r0⟩ ⟨r1⟩ ⟨r2⟩
=rule
"12": r4 → ⟨r4⟩ ⟨r5⟩ ⟨r6⟩ ⟨r7⟩ ⟨r0⟩ ⟨r1⟩ ⟨r2⟩ ⟨r3⟩
=rule
"13": r5 → ⟨r5⟩ ⟨r6⟩ ⟨r7⟩ ⟨r0⟩ ⟨r1⟩ ⟨r2⟩ ⟨r3⟩ ⟨r4⟩
=rule
"14": r6 → ⟨r6⟩ ⟨r7⟩ ⟨r0⟩ ⟨r1⟩ ⟨r2⟩ ⟨r3⟩ ⟨r4⟩ ⟨r5⟩
=rule
"15": r7 → ⟨r7⟩ ⟨r0⟩ ⟨r1⟩ ⟨r2⟩ ⟨r3⟩ ⟨r4⟩ ⟨r5⟩ ⟨r6⟩
=rule
"16": r0 → ⟨r0⟩ ⟨r1⟩ ⟨r2⟩ ⟨r3⟩ ⟨r4⟩ ⟨r5⟩ ⟨r6⟩ ⟨r7⟩
=rule
"17": r1 → ⟨r1⟩ ⟨r2⟩ ⟨r3⟩ ⟨r4⟩ ⟨r5⟩ ⟨r6⟩ ⟨r7⟩ ⟨r0⟩
=rule
"18": r2 → ⟨r2⟩ ⟨r3⟩ ⟨r4⟩ ⟨r5⟩ ⟨r6⟩ ⟨r7⟩ ⟨r0⟩ ⟨r1⟩
=rule
"19": r3 → ⟨r3⟩ ⟨r4⟩ ⟨r5⟩ ⟨r6⟩ ⟨r7⟩ ⟨r0⟩ ⟨r1⟩ ⟨r2⟩
=rule
"20": r4 → ⟨r4⟩ ⟨r5⟩ ⟨r6⟩ ⟨r7⟩ ⟨r0⟩ ⟨r1⟩ ⟨r2⟩ ⟨r3⟩
=rule
"21": r5 → ⟨r5⟩ ⟨r6⟩ ⟨r7⟩ ⟨r0⟩ ⟨r1⟩ ⟨r2⟩ ⟨r3⟩ ⟨r4⟩
=rule
"22": r6 → ⟨r6⟩ ⟨r7⟩ ⟨r0⟩ ⟨r1⟩ ⟨r2⟩ ⟨r3⟩ ⟨r4⟩ ⟨r5⟩
=rule
"23": r7 → ⟨r7⟩ ⟨r0⟩ ⟨r1⟩ ⟨r2⟩ ⟨r3⟩ ⟨r4⟩ ⟨r5⟩ ⟨r6⟩

CONFLICTS
No table collisions in supplied grammar.

PREDICT SETS
=rule
"0" → []
=rule
"1" → []
=rule
"2" → []
=rule
"3" → []
=rule
"4" → []
=rule
"5" → []
=rule
"6" → []
=rule
"7" → []
=rule
"8" → []
=rule
"9" → []
=rule
"10" → []
=rule
"11" → []
=rule
"12" → []
=rule
"13" → []
=rule
"14" → []
=rule
"15" → []
=rule
"16" → []
=rule
"17" → []
=rule
"18" → []
=rule
"19" → []
=rule
"20" → []
=rule
"21" → []
=rule
"22" → []
=rule
"23" → []

## Complete original and review audit

{
  "schema": "grammar-harbor/1",
  "originalInput": {
    "title": "Maximum grammar",
    "start": "r0",
    "nonterminals": [
      {
        "id": "r0",
        "description": "Synthetic symbol 0"
      },
      {
        "id": "r1",
        "description": "Synthetic symbol 1"
      },
      {
        "id": "r2",
        "description": "Synthetic symbol 2"
      },
      {
        "id": "r3",
        "description": "Synthetic symbol 3"
      },
      {
        "id": "r4",
        "description": "Synthetic symbol 4"
      },
      {
        "id": "r5",
        "description": "Synthetic symbol 5"
      },
      {
        "id": "r6",
        "description": "Synthetic symbol 6"
      },
      {
        "id": "r7",
        "description": "Synthetic symbol 7"
      }
    ],
    "rules": [
      {
        "id": "=rule\n\"0\"",
        "lhs": "Synthetic symbol 0",
        "rhs": [
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          }
        ]
      },
      {
        "id": "=rule\n\"1\"",
        "lhs": "Synthetic symbol 1",
        "rhs": [
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          }
        ]
      },
      {
        "id": "=rule\n\"2\"",
        "lhs": "Synthetic symbol 2",
        "rhs": [
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          }
        ]
      },
      {
        "id": "=rule\n\"3\"",
        "lhs": "Synthetic symbol 3",
        "rhs": [
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          }
        ]
      },
      {
        "id": "=rule\n\"4\"",
        "lhs": "Synthetic symbol 4",
        "rhs": [
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          }
        ]
      },
      {
        "id": "=rule\n\"5\"",
        "lhs": "Synthetic symbol 5",
        "rhs": [
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          }
        ]
      },
      {
        "id": "=rule\n\"6\"",
        "lhs": "Synthetic symbol 6",
        "rhs": [
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          }
        ]
      },
      {
        "id": "=rule\n\"7\"",
        "lhs": "Synthetic symbol 7",
        "rhs": [
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          }
        ]
      },
      {
        "id": "=rule\n\"8\"",
        "lhs": "Synthetic symbol 0",
        "rhs": [
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          }
        ]
      },
      {
        "id": "=rule\n\"9\"",
        "lhs": "Synthetic symbol 1",
        "rhs": [
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          }
        ]
      },
      {
        "id": "=rule\n\"10\"",
        "lhs": "Synthetic symbol 2",
        "rhs": [
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          }
        ]
      },
      {
        "id": "=rule\n\"11\"",
        "lhs": "Synthetic symbol 3",
        "rhs": [
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          }
        ]
      },
      {
        "id": "=rule\n\"12\"",
        "lhs": "Synthetic symbol 4",
        "rhs": [
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          }
        ]
      },
      {
        "id": "=rule\n\"13\"",
        "lhs": "Synthetic symbol 5",
        "rhs": [
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          }
        ]
      },
      {
        "id": "=rule\n\"14\"",
        "lhs": "Synthetic symbol 6",
        "rhs": [
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          }
        ]
      },
      {
        "id": "=rule\n\"15\"",
        "lhs": "Synthetic symbol 7",
        "rhs": [
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          }
        ]
      },
      {
        "id": "=rule\n\"16\"",
        "lhs": "Synthetic symbol 0",
        "rhs": [
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          }
        ]
      },
      {
        "id": "=rule\n\"17\"",
        "lhs": "Synthetic symbol 1",
        "rhs": [
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          }
        ]
      },
      {
        "id": "=rule\n\"18\"",
        "lhs": "Synthetic symbol 2",
        "rhs": [
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          }
        ]
      },
      {
        "id": "=rule\n\"19\"",
        "lhs": "Synthetic symbol 3",
        "rhs": [
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          }
        ]
      },
      {
        "id": "=rule\n\"20\"",
        "lhs": "Synthetic symbol 4",
        "rhs": [
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          }
        ]
      },
      {
        "id": "=rule\n\"21\"",
        "lhs": "Synthetic symbol 5",
        "rhs": [
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          }
        ]
      },
      {
        "id": "=rule\n\"22\"",
        "lhs": "Synthetic symbol 6",
        "rhs": [
          {
            "ref": "Synthetic symbol 6"
          },
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          }
        ]
      },
      {
        "id": "=rule\n\"23\"",
        "lhs": "Synthetic symbol 7",
        "rhs": [
          {
            "ref": "Synthetic symbol 7"
          },
          {
            "ref": "Synthetic symbol 0"
          },
          {
            "ref": "Synthetic symbol 1"
          },
          {
            "ref": "Synthetic symbol 2"
          },
          {
            "ref": "Synthetic symbol 3"
          },
          {
            "ref": "Synthetic symbol 4"
          },
          {
            "ref": "Synthetic symbol 5"
          },
          {
            "ref": "Synthetic symbol 6"
          }
        ]
      }
    ]
  },
  "reviews": [
    {
      "rule": 0,
      "position": -1,
      "text": "Synthetic symbol 0",
      "index": 0,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.992786479668352
        },
        {
          "resource": "r1",
          "score": 0.7834483057318612
        },
        {
          "resource": "r4",
          "score": 0.7322494438187095
        },
        {
          "resource": "r6",
          "score": 0.726730321014568
        },
        {
          "resource": "r3",
          "score": 0.7050257030874515
        },
        {
          "resource": "r2",
          "score": 0.7049126486995437
        },
        {
          "resource": "r5",
          "score": 0.7028218354157292
        },
        {
          "resource": "r7",
          "score": 0.679392013036925
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 0,
      "text": "Synthetic symbol 0",
      "index": 1,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.992786479668352
        },
        {
          "resource": "r1",
          "score": 0.7834483057318612
        },
        {
          "resource": "r4",
          "score": 0.7322494438187095
        },
        {
          "resource": "r6",
          "score": 0.726730321014568
        },
        {
          "resource": "r3",
          "score": 0.7050257030874515
        },
        {
          "resource": "r2",
          "score": 0.7049126486995437
        },
        {
          "resource": "r5",
          "score": 0.7028218354157292
        },
        {
          "resource": "r7",
          "score": 0.679392013036925
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 1,
      "text": "Synthetic symbol 1",
      "index": 2,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9932435081116034
        },
        {
          "resource": "r2",
          "score": 0.8451126521156893
        },
        {
          "resource": "r3",
          "score": 0.8020133279837091
        },
        {
          "resource": "r4",
          "score": 0.7950907934061794
        },
        {
          "resource": "r6",
          "score": 0.7927909029922884
        },
        {
          "resource": "r0",
          "score": 0.7825671313048707
        },
        {
          "resource": "r7",
          "score": 0.778545967127576
        },
        {
          "resource": "r5",
          "score": 0.7699310548943702
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 2,
      "text": "Synthetic symbol 2",
      "index": 3,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9915508725836096
        },
        {
          "resource": "r1",
          "score": 0.8592938006710855
        },
        {
          "resource": "r4",
          "score": 0.8192457929918217
        },
        {
          "resource": "r3",
          "score": 0.8113281480692005
        },
        {
          "resource": "r6",
          "score": 0.7868155615781749
        },
        {
          "resource": "r7",
          "score": 0.7648228895496202
        },
        {
          "resource": "r5",
          "score": 0.7540054373420761
        },
        {
          "resource": "r0",
          "score": 0.7264634697246304
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 3,
      "text": "Synthetic symbol 3",
      "index": 4,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9931165868930689
        },
        {
          "resource": "r4",
          "score": 0.8360492610903941
        },
        {
          "resource": "r2",
          "score": 0.8158385228939433
        },
        {
          "resource": "r1",
          "score": 0.814033491541631
        },
        {
          "resource": "r6",
          "score": 0.8131185072780203
        },
        {
          "resource": "r5",
          "score": 0.7803417552068117
        },
        {
          "resource": "r7",
          "score": 0.7748146780464764
        },
        {
          "resource": "r0",
          "score": 0.7103984206052132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 4,
      "text": "Synthetic symbol 4",
      "index": 5,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9945123047516012
        },
        {
          "resource": "r3",
          "score": 0.8295076372584242
        },
        {
          "resource": "r6",
          "score": 0.8194836646574378
        },
        {
          "resource": "r2",
          "score": 0.8113366204492398
        },
        {
          "resource": "r5",
          "score": 0.8092863226909881
        },
        {
          "resource": "r1",
          "score": 0.7927374690674485
        },
        {
          "resource": "r7",
          "score": 0.7707432138712453
        },
        {
          "resource": "r0",
          "score": 0.7262401247978224
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 5,
      "text": "Synthetic symbol 5",
      "index": 6,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9939083287795734
        },
        {
          "resource": "r6",
          "score": 0.8409481667025739
        },
        {
          "resource": "r7",
          "score": 0.8094445862672526
        },
        {
          "resource": "r4",
          "score": 0.8034590290503504
        },
        {
          "resource": "r1",
          "score": 0.7683896810643727
        },
        {
          "resource": "r3",
          "score": 0.7648385057159552
        },
        {
          "resource": "r2",
          "score": 0.7409185203642927
        },
        {
          "resource": "r0",
          "score": 0.6973134811988947
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 6,
      "text": "Synthetic symbol 6",
      "index": 7,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9949654792999252
        },
        {
          "resource": "r5",
          "score": 0.8494655814532546
        },
        {
          "resource": "r7",
          "score": 0.841699354197766
        },
        {
          "resource": "r4",
          "score": 0.8264041271527592
        },
        {
          "resource": "r3",
          "score": 0.8103811833312967
        },
        {
          "resource": "r1",
          "score": 0.8046525341352583
        },
        {
          "resource": "r2",
          "score": 0.796135856197955
        },
        {
          "resource": "r0",
          "score": 0.7316370121198481
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 7,
      "text": "Synthetic symbol 7",
      "index": 8,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9919568310982413
        },
        {
          "resource": "r6",
          "score": 0.8343741923500004
        },
        {
          "resource": "r5",
          "score": 0.816735627871341
        },
        {
          "resource": "r1",
          "score": 0.7739380765682807
        },
        {
          "resource": "r4",
          "score": 0.769374286252168
        },
        {
          "resource": "r3",
          "score": 0.7662350237655344
        },
        {
          "resource": "r2",
          "score": 0.7496268569447914
        },
        {
          "resource": "r0",
          "score": 0.6745948733166723
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": -1,
      "text": "Synthetic symbol 1",
      "index": 9,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9919494894029011
        },
        {
          "resource": "r2",
          "score": 0.8421932747279615
        },
        {
          "resource": "r3",
          "score": 0.7963956144608413
        },
        {
          "resource": "r4",
          "score": 0.7897244489015395
        },
        {
          "resource": "r6",
          "score": 0.7893710684377303
        },
        {
          "resource": "r0",
          "score": 0.7799392351369379
        },
        {
          "resource": "r7",
          "score": 0.7794908066610733
        },
        {
          "resource": "r5",
          "score": 0.764948935592982
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 0,
      "text": "Synthetic symbol 1",
      "index": 10,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9919494894029011
        },
        {
          "resource": "r2",
          "score": 0.8421932747279615
        },
        {
          "resource": "r3",
          "score": 0.7963956144608413
        },
        {
          "resource": "r4",
          "score": 0.7897244489015395
        },
        {
          "resource": "r6",
          "score": 0.7893710684377303
        },
        {
          "resource": "r0",
          "score": 0.7799392351369379
        },
        {
          "resource": "r7",
          "score": 0.7794908066610733
        },
        {
          "resource": "r5",
          "score": 0.764948935592982
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 1,
      "text": "Synthetic symbol 2",
      "index": 11,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9900594093847187
        },
        {
          "resource": "r1",
          "score": 0.8403699528189511
        },
        {
          "resource": "r4",
          "score": 0.8038749839399727
        },
        {
          "resource": "r3",
          "score": 0.7965252024902071
        },
        {
          "resource": "r6",
          "score": 0.7748289877110256
        },
        {
          "resource": "r7",
          "score": 0.7589862641532991
        },
        {
          "resource": "r5",
          "score": 0.740604423234194
        },
        {
          "resource": "r0",
          "score": 0.7103494255157528
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 2,
      "text": "Synthetic symbol 3",
      "index": 12,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9931165868930689
        },
        {
          "resource": "r4",
          "score": 0.8360492610903941
        },
        {
          "resource": "r2",
          "score": 0.8158385228939433
        },
        {
          "resource": "r1",
          "score": 0.814033491541631
        },
        {
          "resource": "r6",
          "score": 0.8131185072780203
        },
        {
          "resource": "r5",
          "score": 0.7803417552068117
        },
        {
          "resource": "r7",
          "score": 0.7748146780464764
        },
        {
          "resource": "r0",
          "score": 0.7103984206052132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 3,
      "text": "Synthetic symbol 4",
      "index": 13,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9945123047516012
        },
        {
          "resource": "r3",
          "score": 0.8295076372584242
        },
        {
          "resource": "r6",
          "score": 0.8194836646574378
        },
        {
          "resource": "r2",
          "score": 0.8113366204492398
        },
        {
          "resource": "r5",
          "score": 0.8092863226909881
        },
        {
          "resource": "r1",
          "score": 0.7927374690674485
        },
        {
          "resource": "r7",
          "score": 0.7707432138712453
        },
        {
          "resource": "r0",
          "score": 0.7262401247978224
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 4,
      "text": "Synthetic symbol 5",
      "index": 14,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9939083287795734
        },
        {
          "resource": "r6",
          "score": 0.8409481667025739
        },
        {
          "resource": "r7",
          "score": 0.8094445862672526
        },
        {
          "resource": "r4",
          "score": 0.8034590290503504
        },
        {
          "resource": "r1",
          "score": 0.7683896810643727
        },
        {
          "resource": "r3",
          "score": 0.7648385057159552
        },
        {
          "resource": "r2",
          "score": 0.7409185203642927
        },
        {
          "resource": "r0",
          "score": 0.6973134811988947
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 5,
      "text": "Synthetic symbol 6",
      "index": 15,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9949654792999252
        },
        {
          "resource": "r5",
          "score": 0.8494655814532546
        },
        {
          "resource": "r7",
          "score": 0.841699354197766
        },
        {
          "resource": "r4",
          "score": 0.8264041271527592
        },
        {
          "resource": "r3",
          "score": 0.8103811833312967
        },
        {
          "resource": "r1",
          "score": 0.8046525341352583
        },
        {
          "resource": "r2",
          "score": 0.796135856197955
        },
        {
          "resource": "r0",
          "score": 0.7316370121198481
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 6,
      "text": "Synthetic symbol 7",
      "index": 16,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9923332182675378
        },
        {
          "resource": "r6",
          "score": 0.8375079472357874
        },
        {
          "resource": "r5",
          "score": 0.8207336333254557
        },
        {
          "resource": "r1",
          "score": 0.7783106374801244
        },
        {
          "resource": "r4",
          "score": 0.7675326469573636
        },
        {
          "resource": "r3",
          "score": 0.7662319168644738
        },
        {
          "resource": "r2",
          "score": 0.7574754747796701
        },
        {
          "resource": "r0",
          "score": 0.6785939117164903
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 7,
      "text": "Synthetic symbol 0",
      "index": 17,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9932167605531519
        },
        {
          "resource": "r1",
          "score": 0.7877855261831199
        },
        {
          "resource": "r4",
          "score": 0.7341065330666797
        },
        {
          "resource": "r6",
          "score": 0.7301149255276969
        },
        {
          "resource": "r2",
          "score": 0.7111447033206596
        },
        {
          "resource": "r3",
          "score": 0.7091388529047266
        },
        {
          "resource": "r5",
          "score": 0.7087018804786334
        },
        {
          "resource": "r7",
          "score": 0.6862890172171058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": -1,
      "text": "Synthetic symbol 2",
      "index": 18,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9913080655363385
        },
        {
          "resource": "r1",
          "score": 0.8409073052070998
        },
        {
          "resource": "r4",
          "score": 0.8049342619010795
        },
        {
          "resource": "r3",
          "score": 0.7949485244086778
        },
        {
          "resource": "r6",
          "score": 0.7730048601071303
        },
        {
          "resource": "r7",
          "score": 0.7539664960234894
        },
        {
          "resource": "r5",
          "score": 0.7387976057165646
        },
        {
          "resource": "r0",
          "score": 0.7133988245131181
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 0,
      "text": "Synthetic symbol 2",
      "index": 19,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9913080655363385
        },
        {
          "resource": "r1",
          "score": 0.8409073052070998
        },
        {
          "resource": "r4",
          "score": 0.8049342619010795
        },
        {
          "resource": "r3",
          "score": 0.7949485244086778
        },
        {
          "resource": "r6",
          "score": 0.7730048601071303
        },
        {
          "resource": "r7",
          "score": 0.7539664960234894
        },
        {
          "resource": "r5",
          "score": 0.7387976057165646
        },
        {
          "resource": "r0",
          "score": 0.7133988245131181
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 1,
      "text": "Synthetic symbol 3",
      "index": 20,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9931165868930689
        },
        {
          "resource": "r4",
          "score": 0.8360492610903941
        },
        {
          "resource": "r2",
          "score": 0.8158385228939433
        },
        {
          "resource": "r1",
          "score": 0.814033491541631
        },
        {
          "resource": "r6",
          "score": 0.8131185072780203
        },
        {
          "resource": "r5",
          "score": 0.7803417552068117
        },
        {
          "resource": "r7",
          "score": 0.7748146780464764
        },
        {
          "resource": "r0",
          "score": 0.7103984206052132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 2,
      "text": "Synthetic symbol 4",
      "index": 21,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9945123047516012
        },
        {
          "resource": "r3",
          "score": 0.8295076372584242
        },
        {
          "resource": "r6",
          "score": 0.8194836646574378
        },
        {
          "resource": "r2",
          "score": 0.8113366204492398
        },
        {
          "resource": "r5",
          "score": 0.8092863226909881
        },
        {
          "resource": "r1",
          "score": 0.7927374690674485
        },
        {
          "resource": "r7",
          "score": 0.7707432138712453
        },
        {
          "resource": "r0",
          "score": 0.7262401247978224
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 3,
      "text": "Synthetic symbol 5",
      "index": 22,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9939083287795734
        },
        {
          "resource": "r6",
          "score": 0.8409481667025739
        },
        {
          "resource": "r7",
          "score": 0.8094445862672526
        },
        {
          "resource": "r4",
          "score": 0.8034590290503504
        },
        {
          "resource": "r1",
          "score": 0.7683896810643727
        },
        {
          "resource": "r3",
          "score": 0.7648385057159552
        },
        {
          "resource": "r2",
          "score": 0.7409185203642927
        },
        {
          "resource": "r0",
          "score": 0.6973134811988947
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 4,
      "text": "Synthetic symbol 6",
      "index": 23,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9949654792999252
        },
        {
          "resource": "r5",
          "score": 0.8494655814532546
        },
        {
          "resource": "r7",
          "score": 0.841699354197766
        },
        {
          "resource": "r4",
          "score": 0.8264041271527592
        },
        {
          "resource": "r3",
          "score": 0.8103811833312967
        },
        {
          "resource": "r1",
          "score": 0.8046525341352583
        },
        {
          "resource": "r2",
          "score": 0.796135856197955
        },
        {
          "resource": "r0",
          "score": 0.7316370121198481
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 5,
      "text": "Synthetic symbol 7",
      "index": 24,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9935852008046252
        },
        {
          "resource": "r6",
          "score": 0.8362845648380262
        },
        {
          "resource": "r5",
          "score": 0.8213043212645131
        },
        {
          "resource": "r1",
          "score": 0.7783762312146214
        },
        {
          "resource": "r4",
          "score": 0.7690878115817054
        },
        {
          "resource": "r3",
          "score": 0.7634314800811728
        },
        {
          "resource": "r2",
          "score": 0.7530959679432472
        },
        {
          "resource": "r0",
          "score": 0.6832753580367283
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 6,
      "text": "Synthetic symbol 0",
      "index": 25,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9916774523110944
        },
        {
          "resource": "r1",
          "score": 0.7867628230891405
        },
        {
          "resource": "r4",
          "score": 0.7356160204471299
        },
        {
          "resource": "r6",
          "score": 0.727231172227105
        },
        {
          "resource": "r2",
          "score": 0.7115503566716227
        },
        {
          "resource": "r3",
          "score": 0.7075661710598778
        },
        {
          "resource": "r5",
          "score": 0.7049610746590492
        },
        {
          "resource": "r7",
          "score": 0.678429680090799
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 7,
      "text": "Synthetic symbol 1",
      "index": 26,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9905123016297175
        },
        {
          "resource": "r2",
          "score": 0.8397071755589018
        },
        {
          "resource": "r3",
          "score": 0.800122806339309
        },
        {
          "resource": "r4",
          "score": 0.791667592304117
        },
        {
          "resource": "r6",
          "score": 0.7855233987527963
        },
        {
          "resource": "r0",
          "score": 0.783169208290199
        },
        {
          "resource": "r7",
          "score": 0.7713995585734978
        },
        {
          "resource": "r5",
          "score": 0.7670486340170499
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": -1,
      "text": "Synthetic symbol 3",
      "index": 27,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9927718016206546
        },
        {
          "resource": "r4",
          "score": 0.8271198952172077
        },
        {
          "resource": "r2",
          "score": 0.8097613043480323
        },
        {
          "resource": "r6",
          "score": 0.8054563779203405
        },
        {
          "resource": "r1",
          "score": 0.8020476321796384
        },
        {
          "resource": "r5",
          "score": 0.7708357717483181
        },
        {
          "resource": "r7",
          "score": 0.7658757490377192
        },
        {
          "resource": "r0",
          "score": 0.6971758845691509
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 0,
      "text": "Synthetic symbol 3",
      "index": 28,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9931165868930689
        },
        {
          "resource": "r4",
          "score": 0.8360492610903941
        },
        {
          "resource": "r2",
          "score": 0.8158385228939433
        },
        {
          "resource": "r1",
          "score": 0.814033491541631
        },
        {
          "resource": "r6",
          "score": 0.8131185072780203
        },
        {
          "resource": "r5",
          "score": 0.7803417552068117
        },
        {
          "resource": "r7",
          "score": 0.7748146780464764
        },
        {
          "resource": "r0",
          "score": 0.7103984206052132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 1,
      "text": "Synthetic symbol 4",
      "index": 29,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9945123047516012
        },
        {
          "resource": "r3",
          "score": 0.8295076372584242
        },
        {
          "resource": "r6",
          "score": 0.8194836646574378
        },
        {
          "resource": "r2",
          "score": 0.8113366204492398
        },
        {
          "resource": "r5",
          "score": 0.8092863226909881
        },
        {
          "resource": "r1",
          "score": 0.7927374690674485
        },
        {
          "resource": "r7",
          "score": 0.7707432138712453
        },
        {
          "resource": "r0",
          "score": 0.7262401247978224
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 2,
      "text": "Synthetic symbol 5",
      "index": 30,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9939083287795734
        },
        {
          "resource": "r6",
          "score": 0.8409481667025739
        },
        {
          "resource": "r7",
          "score": 0.8094445862672526
        },
        {
          "resource": "r4",
          "score": 0.8034590290503504
        },
        {
          "resource": "r1",
          "score": 0.7683896810643727
        },
        {
          "resource": "r3",
          "score": 0.7648385057159552
        },
        {
          "resource": "r2",
          "score": 0.7409185203642927
        },
        {
          "resource": "r0",
          "score": 0.6973134811988947
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 3,
      "text": "Synthetic symbol 6",
      "index": 31,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9949654792999252
        },
        {
          "resource": "r5",
          "score": 0.8494655814532546
        },
        {
          "resource": "r7",
          "score": 0.841699354197766
        },
        {
          "resource": "r4",
          "score": 0.8264041271527592
        },
        {
          "resource": "r3",
          "score": 0.8103811833312967
        },
        {
          "resource": "r1",
          "score": 0.8046525341352583
        },
        {
          "resource": "r2",
          "score": 0.796135856197955
        },
        {
          "resource": "r0",
          "score": 0.7316370121198481
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 4,
      "text": "Synthetic symbol 7",
      "index": 32,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.993006518260197
        },
        {
          "resource": "r6",
          "score": 0.8333366940404612
        },
        {
          "resource": "r5",
          "score": 0.8162001655186559
        },
        {
          "resource": "r1",
          "score": 0.7776577748540908
        },
        {
          "resource": "r3",
          "score": 0.7689125580466311
        },
        {
          "resource": "r4",
          "score": 0.7684808822325528
        },
        {
          "resource": "r2",
          "score": 0.7531647722496133
        },
        {
          "resource": "r0",
          "score": 0.6763698523671049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 5,
      "text": "Synthetic symbol 0",
      "index": 33,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9925909676249947
        },
        {
          "resource": "r1",
          "score": 0.7810021499699059
        },
        {
          "resource": "r4",
          "score": 0.7276926495563175
        },
        {
          "resource": "r6",
          "score": 0.7184030459098176
        },
        {
          "resource": "r2",
          "score": 0.7039386072009333
        },
        {
          "resource": "r3",
          "score": 0.6996409711625718
        },
        {
          "resource": "r5",
          "score": 0.6976003670039832
        },
        {
          "resource": "r7",
          "score": 0.6745302254995135
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 6,
      "text": "Synthetic symbol 1",
      "index": 34,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9912039924161593
        },
        {
          "resource": "r2",
          "score": 0.8471297051548475
        },
        {
          "resource": "r3",
          "score": 0.7949198773982907
        },
        {
          "resource": "r4",
          "score": 0.7871289394722099
        },
        {
          "resource": "r6",
          "score": 0.7820035693822491
        },
        {
          "resource": "r0",
          "score": 0.7808333584390627
        },
        {
          "resource": "r7",
          "score": 0.766575753771333
        },
        {
          "resource": "r5",
          "score": 0.7612821705826225
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 7,
      "text": "Synthetic symbol 2",
      "index": 35,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9905581266843702
        },
        {
          "resource": "r1",
          "score": 0.8501339150648408
        },
        {
          "resource": "r4",
          "score": 0.8152118047555991
        },
        {
          "resource": "r3",
          "score": 0.8072679612806862
        },
        {
          "resource": "r6",
          "score": 0.7852070814819463
        },
        {
          "resource": "r7",
          "score": 0.7642843141732684
        },
        {
          "resource": "r5",
          "score": 0.7497831996276274
        },
        {
          "resource": "r0",
          "score": 0.7208389774078019
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": -1,
      "text": "Synthetic symbol 4",
      "index": 36,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9943287123217278
        },
        {
          "resource": "r3",
          "score": 0.8302960732947733
        },
        {
          "resource": "r6",
          "score": 0.8199446904610748
        },
        {
          "resource": "r2",
          "score": 0.8128332513328685
        },
        {
          "resource": "r5",
          "score": 0.8086605786033846
        },
        {
          "resource": "r1",
          "score": 0.7959419222491407
        },
        {
          "resource": "r7",
          "score": 0.7766637867669189
        },
        {
          "resource": "r0",
          "score": 0.7285238683015826
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 0,
      "text": "Synthetic symbol 4",
      "index": 37,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9943287123217278
        },
        {
          "resource": "r3",
          "score": 0.8302960732947733
        },
        {
          "resource": "r6",
          "score": 0.8199446904610748
        },
        {
          "resource": "r2",
          "score": 0.8128332513328685
        },
        {
          "resource": "r5",
          "score": 0.8086605786033846
        },
        {
          "resource": "r1",
          "score": 0.7959419222491407
        },
        {
          "resource": "r7",
          "score": 0.7766637867669189
        },
        {
          "resource": "r0",
          "score": 0.7285238683015826
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 1,
      "text": "Synthetic symbol 5",
      "index": 38,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9952592479500212
        },
        {
          "resource": "r6",
          "score": 0.8472236656208565
        },
        {
          "resource": "r4",
          "score": 0.8151840785729592
        },
        {
          "resource": "r7",
          "score": 0.814750139268377
        },
        {
          "resource": "r1",
          "score": 0.7807122671593615
        },
        {
          "resource": "r3",
          "score": 0.7755798866274856
        },
        {
          "resource": "r2",
          "score": 0.7506525394952772
        },
        {
          "resource": "r0",
          "score": 0.7138312303066534
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 2,
      "text": "Synthetic symbol 6",
      "index": 39,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9936209133919899
        },
        {
          "resource": "r5",
          "score": 0.8525556139295422
        },
        {
          "resource": "r7",
          "score": 0.8430676301006436
        },
        {
          "resource": "r4",
          "score": 0.8280433513729724
        },
        {
          "resource": "r3",
          "score": 0.8079814197819943
        },
        {
          "resource": "r1",
          "score": 0.8067042891387939
        },
        {
          "resource": "r2",
          "score": 0.7911600095019771
        },
        {
          "resource": "r0",
          "score": 0.7406857150350493
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 3,
      "text": "Synthetic symbol 7",
      "index": 40,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.993006518260197
        },
        {
          "resource": "r6",
          "score": 0.8333366940404612
        },
        {
          "resource": "r5",
          "score": 0.8162001655186559
        },
        {
          "resource": "r1",
          "score": 0.7776577748540908
        },
        {
          "resource": "r3",
          "score": 0.7689125580466311
        },
        {
          "resource": "r4",
          "score": 0.7684808822325528
        },
        {
          "resource": "r2",
          "score": 0.7531647722496133
        },
        {
          "resource": "r0",
          "score": 0.6763698523671049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 4,
      "text": "Synthetic symbol 0",
      "index": 41,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9925909676249947
        },
        {
          "resource": "r1",
          "score": 0.7810021499699059
        },
        {
          "resource": "r4",
          "score": 0.7276926495563175
        },
        {
          "resource": "r6",
          "score": 0.7184030459098176
        },
        {
          "resource": "r2",
          "score": 0.7039386072009333
        },
        {
          "resource": "r3",
          "score": 0.6996409711625718
        },
        {
          "resource": "r5",
          "score": 0.6976003670039832
        },
        {
          "resource": "r7",
          "score": 0.6745302254995135
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 5,
      "text": "Synthetic symbol 1",
      "index": 42,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9912039924161593
        },
        {
          "resource": "r2",
          "score": 0.8471297051548475
        },
        {
          "resource": "r3",
          "score": 0.7949198773982907
        },
        {
          "resource": "r4",
          "score": 0.7871289394722099
        },
        {
          "resource": "r6",
          "score": 0.7820035693822491
        },
        {
          "resource": "r0",
          "score": 0.7808333584390627
        },
        {
          "resource": "r7",
          "score": 0.766575753771333
        },
        {
          "resource": "r5",
          "score": 0.7612821705826225
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 6,
      "text": "Synthetic symbol 2",
      "index": 43,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9905581266843702
        },
        {
          "resource": "r1",
          "score": 0.8501339150648408
        },
        {
          "resource": "r4",
          "score": 0.8152118047555991
        },
        {
          "resource": "r3",
          "score": 0.8072679612806862
        },
        {
          "resource": "r6",
          "score": 0.7852070814819463
        },
        {
          "resource": "r7",
          "score": 0.7642843141732684
        },
        {
          "resource": "r5",
          "score": 0.7497831996276274
        },
        {
          "resource": "r0",
          "score": 0.7208389774078019
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 7,
      "text": "Synthetic symbol 3",
      "index": 44,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9918902266057421
        },
        {
          "resource": "r4",
          "score": 0.8443363100519325
        },
        {
          "resource": "r2",
          "score": 0.8300005026264367
        },
        {
          "resource": "r6",
          "score": 0.8249496543108519
        },
        {
          "resource": "r1",
          "score": 0.8240254724176161
        },
        {
          "resource": "r5",
          "score": 0.7910652209260249
        },
        {
          "resource": "r7",
          "score": 0.7848381546083224
        },
        {
          "resource": "r0",
          "score": 0.7174204743155028
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": -1,
      "text": "Synthetic symbol 5",
      "index": 45,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9922672223237384
        },
        {
          "resource": "r6",
          "score": 0.8478637461318372
        },
        {
          "resource": "r7",
          "score": 0.8155650365264735
        },
        {
          "resource": "r4",
          "score": 0.8149212532177305
        },
        {
          "resource": "r3",
          "score": 0.7760283361455261
        },
        {
          "resource": "r1",
          "score": 0.7746868788699
        },
        {
          "resource": "r2",
          "score": 0.755463178338135
        },
        {
          "resource": "r0",
          "score": 0.7003050345203049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 0,
      "text": "Synthetic symbol 5",
      "index": 46,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9922672223237384
        },
        {
          "resource": "r6",
          "score": 0.8478637461318372
        },
        {
          "resource": "r7",
          "score": 0.8155650365264735
        },
        {
          "resource": "r4",
          "score": 0.8149212532177305
        },
        {
          "resource": "r3",
          "score": 0.7760283361455261
        },
        {
          "resource": "r1",
          "score": 0.7746868788699
        },
        {
          "resource": "r2",
          "score": 0.755463178338135
        },
        {
          "resource": "r0",
          "score": 0.7003050345203049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 1,
      "text": "Synthetic symbol 6",
      "index": 47,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9933726859213171
        },
        {
          "resource": "r5",
          "score": 0.8488105063609777
        },
        {
          "resource": "r7",
          "score": 0.841209277507337
        },
        {
          "resource": "r4",
          "score": 0.8240858286608281
        },
        {
          "resource": "r3",
          "score": 0.8086035169141111
        },
        {
          "resource": "r1",
          "score": 0.8018959653424547
        },
        {
          "resource": "r2",
          "score": 0.7880576899510499
        },
        {
          "resource": "r0",
          "score": 0.7332854613683464
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 2,
      "text": "Synthetic symbol 7",
      "index": 48,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.993006518260197
        },
        {
          "resource": "r6",
          "score": 0.8333366940404612
        },
        {
          "resource": "r5",
          "score": 0.8162001655186559
        },
        {
          "resource": "r1",
          "score": 0.7776577748540908
        },
        {
          "resource": "r3",
          "score": 0.7689125580466311
        },
        {
          "resource": "r4",
          "score": 0.7684808822325528
        },
        {
          "resource": "r2",
          "score": 0.7531647722496133
        },
        {
          "resource": "r0",
          "score": 0.6763698523671049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 3,
      "text": "Synthetic symbol 0",
      "index": 49,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9925909676249947
        },
        {
          "resource": "r1",
          "score": 0.7810021499699059
        },
        {
          "resource": "r4",
          "score": 0.7276926495563175
        },
        {
          "resource": "r6",
          "score": 0.7184030459098176
        },
        {
          "resource": "r2",
          "score": 0.7039386072009333
        },
        {
          "resource": "r3",
          "score": 0.6996409711625718
        },
        {
          "resource": "r5",
          "score": 0.6976003670039832
        },
        {
          "resource": "r7",
          "score": 0.6745302254995135
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 4,
      "text": "Synthetic symbol 1",
      "index": 50,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9912039924161593
        },
        {
          "resource": "r2",
          "score": 0.8471297051548475
        },
        {
          "resource": "r3",
          "score": 0.7949198773982907
        },
        {
          "resource": "r4",
          "score": 0.7871289394722099
        },
        {
          "resource": "r6",
          "score": 0.7820035693822491
        },
        {
          "resource": "r0",
          "score": 0.7808333584390627
        },
        {
          "resource": "r7",
          "score": 0.766575753771333
        },
        {
          "resource": "r5",
          "score": 0.7612821705826225
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 5,
      "text": "Synthetic symbol 2",
      "index": 51,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9905581266843702
        },
        {
          "resource": "r1",
          "score": 0.8501339150648408
        },
        {
          "resource": "r4",
          "score": 0.8152118047555991
        },
        {
          "resource": "r3",
          "score": 0.8072679612806862
        },
        {
          "resource": "r6",
          "score": 0.7852070814819463
        },
        {
          "resource": "r7",
          "score": 0.7642843141732684
        },
        {
          "resource": "r5",
          "score": 0.7497831996276274
        },
        {
          "resource": "r0",
          "score": 0.7208389774078019
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 6,
      "text": "Synthetic symbol 3",
      "index": 52,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9923603567897
        },
        {
          "resource": "r4",
          "score": 0.830132065459913
        },
        {
          "resource": "r2",
          "score": 0.8236290640035295
        },
        {
          "resource": "r6",
          "score": 0.8161585676265125
        },
        {
          "resource": "r1",
          "score": 0.8113130130271314
        },
        {
          "resource": "r5",
          "score": 0.778955061361178
        },
        {
          "resource": "r7",
          "score": 0.7758828872926244
        },
        {
          "resource": "r0",
          "score": 0.7064848014874942
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 7,
      "text": "Synthetic symbol 4",
      "index": 53,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9926026849366908
        },
        {
          "resource": "r3",
          "score": 0.8307280771954509
        },
        {
          "resource": "r6",
          "score": 0.8194486454239378
        },
        {
          "resource": "r2",
          "score": 0.8090871478192388
        },
        {
          "resource": "r5",
          "score": 0.8090022727282877
        },
        {
          "resource": "r1",
          "score": 0.795270100699599
        },
        {
          "resource": "r7",
          "score": 0.7732781767400244
        },
        {
          "resource": "r0",
          "score": 0.7284397467795704
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": -1,
      "text": "Synthetic symbol 6",
      "index": 54,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9939926444221304
        },
        {
          "resource": "r5",
          "score": 0.8491138738109392
        },
        {
          "resource": "r7",
          "score": 0.8329608304610081
        },
        {
          "resource": "r4",
          "score": 0.8183641166018146
        },
        {
          "resource": "r3",
          "score": 0.8026762158674955
        },
        {
          "resource": "r1",
          "score": 0.7928929503267096
        },
        {
          "resource": "r2",
          "score": 0.7797937253081718
        },
        {
          "resource": "r0",
          "score": 0.7263465637844557
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 0,
      "text": "Synthetic symbol 6",
      "index": 55,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9939926444221304
        },
        {
          "resource": "r5",
          "score": 0.8491138738109392
        },
        {
          "resource": "r7",
          "score": 0.8329608304610081
        },
        {
          "resource": "r4",
          "score": 0.8183641166018146
        },
        {
          "resource": "r3",
          "score": 0.8026762158674955
        },
        {
          "resource": "r1",
          "score": 0.7928929503267096
        },
        {
          "resource": "r2",
          "score": 0.7797937253081718
        },
        {
          "resource": "r0",
          "score": 0.7263465637844557
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 1,
      "text": "Synthetic symbol 7",
      "index": 56,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.993006518260197
        },
        {
          "resource": "r6",
          "score": 0.8333366940404612
        },
        {
          "resource": "r5",
          "score": 0.8162001655186559
        },
        {
          "resource": "r1",
          "score": 0.7776577748540908
        },
        {
          "resource": "r3",
          "score": 0.7689125580466311
        },
        {
          "resource": "r4",
          "score": 0.7684808822325528
        },
        {
          "resource": "r2",
          "score": 0.7531647722496133
        },
        {
          "resource": "r0",
          "score": 0.6763698523671049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 2,
      "text": "Synthetic symbol 0",
      "index": 57,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9925909676249947
        },
        {
          "resource": "r1",
          "score": 0.7810021499699059
        },
        {
          "resource": "r4",
          "score": 0.7276926495563175
        },
        {
          "resource": "r6",
          "score": 0.7184030459098176
        },
        {
          "resource": "r2",
          "score": 0.7039386072009333
        },
        {
          "resource": "r3",
          "score": 0.6996409711625718
        },
        {
          "resource": "r5",
          "score": 0.6976003670039832
        },
        {
          "resource": "r7",
          "score": 0.6745302254995135
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 3,
      "text": "Synthetic symbol 1",
      "index": 58,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9912039924161593
        },
        {
          "resource": "r2",
          "score": 0.8471297051548475
        },
        {
          "resource": "r3",
          "score": 0.7949198773982907
        },
        {
          "resource": "r4",
          "score": 0.7871289394722099
        },
        {
          "resource": "r6",
          "score": 0.7820035693822491
        },
        {
          "resource": "r0",
          "score": 0.7808333584390627
        },
        {
          "resource": "r7",
          "score": 0.766575753771333
        },
        {
          "resource": "r5",
          "score": 0.7612821705826225
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 4,
      "text": "Synthetic symbol 2",
      "index": 59,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9905581266843702
        },
        {
          "resource": "r1",
          "score": 0.8501339150648408
        },
        {
          "resource": "r4",
          "score": 0.8152118047555991
        },
        {
          "resource": "r3",
          "score": 0.8072679612806862
        },
        {
          "resource": "r6",
          "score": 0.7852070814819463
        },
        {
          "resource": "r7",
          "score": 0.7642843141732684
        },
        {
          "resource": "r5",
          "score": 0.7497831996276274
        },
        {
          "resource": "r0",
          "score": 0.7208389774078019
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 5,
      "text": "Synthetic symbol 3",
      "index": 60,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9935026170517427
        },
        {
          "resource": "r4",
          "score": 0.8313234912580616
        },
        {
          "resource": "r2",
          "score": 0.8189096809853333
        },
        {
          "resource": "r6",
          "score": 0.8168264858170101
        },
        {
          "resource": "r1",
          "score": 0.8146100488842983
        },
        {
          "resource": "r5",
          "score": 0.7782501050628814
        },
        {
          "resource": "r7",
          "score": 0.7776877171717919
        },
        {
          "resource": "r0",
          "score": 0.7115249738672568
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 6,
      "text": "Synthetic symbol 4",
      "index": 61,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9952671098323791
        },
        {
          "resource": "r3",
          "score": 0.8224083366097458
        },
        {
          "resource": "r6",
          "score": 0.8160227399485216
        },
        {
          "resource": "r5",
          "score": 0.8108519720410131
        },
        {
          "resource": "r2",
          "score": 0.8065257391933568
        },
        {
          "resource": "r1",
          "score": 0.7910132310908597
        },
        {
          "resource": "r7",
          "score": 0.7715374272734112
        },
        {
          "resource": "r0",
          "score": 0.7244441947523466
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 7,
      "text": "Synthetic symbol 5",
      "index": 62,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9942550395982549
        },
        {
          "resource": "r6",
          "score": 0.8510502585942482
        },
        {
          "resource": "r7",
          "score": 0.8168673300399092
        },
        {
          "resource": "r4",
          "score": 0.8079480703302309
        },
        {
          "resource": "r1",
          "score": 0.781342542258557
        },
        {
          "resource": "r3",
          "score": 0.776693367598821
        },
        {
          "resource": "r2",
          "score": 0.7520021962326854
        },
        {
          "resource": "r0",
          "score": 0.7139309473641323
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": -1,
      "text": "Synthetic symbol 7",
      "index": 63,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9946691113597865
        },
        {
          "resource": "r6",
          "score": 0.8332191209837889
        },
        {
          "resource": "r5",
          "score": 0.8184086003009119
        },
        {
          "resource": "r1",
          "score": 0.7748453167416285
        },
        {
          "resource": "r4",
          "score": 0.7669297079594015
        },
        {
          "resource": "r3",
          "score": 0.7650438017240093
        },
        {
          "resource": "r2",
          "score": 0.7503944603784752
        },
        {
          "resource": "r0",
          "score": 0.6701862032976433
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 0,
      "text": "Synthetic symbol 7",
      "index": 64,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.993006518260197
        },
        {
          "resource": "r6",
          "score": 0.8333366940404612
        },
        {
          "resource": "r5",
          "score": 0.8162001655186559
        },
        {
          "resource": "r1",
          "score": 0.7776577748540908
        },
        {
          "resource": "r3",
          "score": 0.7689125580466311
        },
        {
          "resource": "r4",
          "score": 0.7684808822325528
        },
        {
          "resource": "r2",
          "score": 0.7531647722496133
        },
        {
          "resource": "r0",
          "score": 0.6763698523671049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 1,
      "text": "Synthetic symbol 0",
      "index": 65,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9925909676249947
        },
        {
          "resource": "r1",
          "score": 0.7810021499699059
        },
        {
          "resource": "r4",
          "score": 0.7276926495563175
        },
        {
          "resource": "r6",
          "score": 0.7184030459098176
        },
        {
          "resource": "r2",
          "score": 0.7039386072009333
        },
        {
          "resource": "r3",
          "score": 0.6996409711625718
        },
        {
          "resource": "r5",
          "score": 0.6976003670039832
        },
        {
          "resource": "r7",
          "score": 0.6745302254995135
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 2,
      "text": "Synthetic symbol 1",
      "index": 66,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9912039924161593
        },
        {
          "resource": "r2",
          "score": 0.8471297051548475
        },
        {
          "resource": "r3",
          "score": 0.7949198773982907
        },
        {
          "resource": "r4",
          "score": 0.7871289394722099
        },
        {
          "resource": "r6",
          "score": 0.7820035693822491
        },
        {
          "resource": "r0",
          "score": 0.7808333584390627
        },
        {
          "resource": "r7",
          "score": 0.766575753771333
        },
        {
          "resource": "r5",
          "score": 0.7612821705826225
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 3,
      "text": "Synthetic symbol 2",
      "index": 67,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9905581266843702
        },
        {
          "resource": "r1",
          "score": 0.8501339150648408
        },
        {
          "resource": "r4",
          "score": 0.8152118047555991
        },
        {
          "resource": "r3",
          "score": 0.8072679612806862
        },
        {
          "resource": "r6",
          "score": 0.7852070814819463
        },
        {
          "resource": "r7",
          "score": 0.7642843141732684
        },
        {
          "resource": "r5",
          "score": 0.7497831996276274
        },
        {
          "resource": "r0",
          "score": 0.7208389774078019
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 4,
      "text": "Synthetic symbol 3",
      "index": 68,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9931165868930689
        },
        {
          "resource": "r4",
          "score": 0.8360492610903941
        },
        {
          "resource": "r2",
          "score": 0.8158385228939433
        },
        {
          "resource": "r1",
          "score": 0.814033491541631
        },
        {
          "resource": "r6",
          "score": 0.8131185072780203
        },
        {
          "resource": "r5",
          "score": 0.7803417552068117
        },
        {
          "resource": "r7",
          "score": 0.7748146780464764
        },
        {
          "resource": "r0",
          "score": 0.7103984206052132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 5,
      "text": "Synthetic symbol 4",
      "index": 69,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9945123047516012
        },
        {
          "resource": "r3",
          "score": 0.8295076372584242
        },
        {
          "resource": "r6",
          "score": 0.8194836646574378
        },
        {
          "resource": "r2",
          "score": 0.8113366204492398
        },
        {
          "resource": "r5",
          "score": 0.8092863226909881
        },
        {
          "resource": "r1",
          "score": 0.7927374690674485
        },
        {
          "resource": "r7",
          "score": 0.7707432138712453
        },
        {
          "resource": "r0",
          "score": 0.7262401247978224
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 6,
      "text": "Synthetic symbol 5",
      "index": 70,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9939083287795734
        },
        {
          "resource": "r6",
          "score": 0.8409481667025739
        },
        {
          "resource": "r7",
          "score": 0.8094445862672526
        },
        {
          "resource": "r4",
          "score": 0.8034590290503504
        },
        {
          "resource": "r1",
          "score": 0.7683896810643727
        },
        {
          "resource": "r3",
          "score": 0.7648385057159552
        },
        {
          "resource": "r2",
          "score": 0.7409185203642927
        },
        {
          "resource": "r0",
          "score": 0.6973134811988947
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 7,
      "text": "Synthetic symbol 6",
      "index": 71,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9949654792999252
        },
        {
          "resource": "r5",
          "score": 0.8494655814532546
        },
        {
          "resource": "r7",
          "score": 0.841699354197766
        },
        {
          "resource": "r4",
          "score": 0.8264041271527592
        },
        {
          "resource": "r3",
          "score": 0.8103811833312967
        },
        {
          "resource": "r1",
          "score": 0.8046525341352583
        },
        {
          "resource": "r2",
          "score": 0.796135856197955
        },
        {
          "resource": "r0",
          "score": 0.7316370121198481
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": -1,
      "text": "Synthetic symbol 0",
      "index": 72,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.992786479668352
        },
        {
          "resource": "r1",
          "score": 0.7834483057318612
        },
        {
          "resource": "r4",
          "score": 0.7322494438187095
        },
        {
          "resource": "r6",
          "score": 0.726730321014568
        },
        {
          "resource": "r3",
          "score": 0.7050257030874515
        },
        {
          "resource": "r2",
          "score": 0.7049126486995437
        },
        {
          "resource": "r5",
          "score": 0.7028218354157292
        },
        {
          "resource": "r7",
          "score": 0.679392013036925
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 0,
      "text": "Synthetic symbol 0",
      "index": 73,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.992786479668352
        },
        {
          "resource": "r1",
          "score": 0.7834483057318612
        },
        {
          "resource": "r4",
          "score": 0.7322494438187095
        },
        {
          "resource": "r6",
          "score": 0.726730321014568
        },
        {
          "resource": "r3",
          "score": 0.7050257030874515
        },
        {
          "resource": "r2",
          "score": 0.7049126486995437
        },
        {
          "resource": "r5",
          "score": 0.7028218354157292
        },
        {
          "resource": "r7",
          "score": 0.679392013036925
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 1,
      "text": "Synthetic symbol 1",
      "index": 74,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9932435081116034
        },
        {
          "resource": "r2",
          "score": 0.8451126521156893
        },
        {
          "resource": "r3",
          "score": 0.8020133279837091
        },
        {
          "resource": "r4",
          "score": 0.7950907934061794
        },
        {
          "resource": "r6",
          "score": 0.7927909029922884
        },
        {
          "resource": "r0",
          "score": 0.7825671313048707
        },
        {
          "resource": "r7",
          "score": 0.778545967127576
        },
        {
          "resource": "r5",
          "score": 0.7699310548943702
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 2,
      "text": "Synthetic symbol 2",
      "index": 75,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9915508725836096
        },
        {
          "resource": "r1",
          "score": 0.8592938006710855
        },
        {
          "resource": "r4",
          "score": 0.8192457929918217
        },
        {
          "resource": "r3",
          "score": 0.8113281480692005
        },
        {
          "resource": "r6",
          "score": 0.7868155615781749
        },
        {
          "resource": "r7",
          "score": 0.7648228895496202
        },
        {
          "resource": "r5",
          "score": 0.7540054373420761
        },
        {
          "resource": "r0",
          "score": 0.7264634697246304
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 3,
      "text": "Synthetic symbol 3",
      "index": 76,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9931165868930689
        },
        {
          "resource": "r4",
          "score": 0.8360492610903941
        },
        {
          "resource": "r2",
          "score": 0.8158385228939433
        },
        {
          "resource": "r1",
          "score": 0.814033491541631
        },
        {
          "resource": "r6",
          "score": 0.8131185072780203
        },
        {
          "resource": "r5",
          "score": 0.7803417552068117
        },
        {
          "resource": "r7",
          "score": 0.7748146780464764
        },
        {
          "resource": "r0",
          "score": 0.7103984206052132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 4,
      "text": "Synthetic symbol 4",
      "index": 77,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9945123047516012
        },
        {
          "resource": "r3",
          "score": 0.8295076372584242
        },
        {
          "resource": "r6",
          "score": 0.8194836646574378
        },
        {
          "resource": "r2",
          "score": 0.8113366204492398
        },
        {
          "resource": "r5",
          "score": 0.8092863226909881
        },
        {
          "resource": "r1",
          "score": 0.7927374690674485
        },
        {
          "resource": "r7",
          "score": 0.7707432138712453
        },
        {
          "resource": "r0",
          "score": 0.7262401247978224
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 5,
      "text": "Synthetic symbol 5",
      "index": 78,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9939083287795734
        },
        {
          "resource": "r6",
          "score": 0.8409481667025739
        },
        {
          "resource": "r7",
          "score": 0.8094445862672526
        },
        {
          "resource": "r4",
          "score": 0.8034590290503504
        },
        {
          "resource": "r1",
          "score": 0.7683896810643727
        },
        {
          "resource": "r3",
          "score": 0.7648385057159552
        },
        {
          "resource": "r2",
          "score": 0.7409185203642927
        },
        {
          "resource": "r0",
          "score": 0.6973134811988947
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 6,
      "text": "Synthetic symbol 6",
      "index": 79,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9949654792999252
        },
        {
          "resource": "r5",
          "score": 0.8494655814532546
        },
        {
          "resource": "r7",
          "score": 0.841699354197766
        },
        {
          "resource": "r4",
          "score": 0.8264041271527592
        },
        {
          "resource": "r3",
          "score": 0.8103811833312967
        },
        {
          "resource": "r1",
          "score": 0.8046525341352583
        },
        {
          "resource": "r2",
          "score": 0.796135856197955
        },
        {
          "resource": "r0",
          "score": 0.7316370121198481
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 7,
      "text": "Synthetic symbol 7",
      "index": 80,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9919568310982413
        },
        {
          "resource": "r6",
          "score": 0.8343741923500004
        },
        {
          "resource": "r5",
          "score": 0.816735627871341
        },
        {
          "resource": "r1",
          "score": 0.7739380765682807
        },
        {
          "resource": "r4",
          "score": 0.769374286252168
        },
        {
          "resource": "r3",
          "score": 0.7662350237655344
        },
        {
          "resource": "r2",
          "score": 0.7496268569447914
        },
        {
          "resource": "r0",
          "score": 0.6745948733166723
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": -1,
      "text": "Synthetic symbol 1",
      "index": 81,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9919494894029011
        },
        {
          "resource": "r2",
          "score": 0.8421932747279615
        },
        {
          "resource": "r3",
          "score": 0.7963956144608413
        },
        {
          "resource": "r4",
          "score": 0.7897244489015395
        },
        {
          "resource": "r6",
          "score": 0.7893710684377303
        },
        {
          "resource": "r0",
          "score": 0.7799392351369379
        },
        {
          "resource": "r7",
          "score": 0.7794908066610733
        },
        {
          "resource": "r5",
          "score": 0.764948935592982
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 0,
      "text": "Synthetic symbol 1",
      "index": 82,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9919494894029011
        },
        {
          "resource": "r2",
          "score": 0.8421932747279615
        },
        {
          "resource": "r3",
          "score": 0.7963956144608413
        },
        {
          "resource": "r4",
          "score": 0.7897244489015395
        },
        {
          "resource": "r6",
          "score": 0.7893710684377303
        },
        {
          "resource": "r0",
          "score": 0.7799392351369379
        },
        {
          "resource": "r7",
          "score": 0.7794908066610733
        },
        {
          "resource": "r5",
          "score": 0.764948935592982
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 1,
      "text": "Synthetic symbol 2",
      "index": 83,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9900594093847187
        },
        {
          "resource": "r1",
          "score": 0.8403699528189511
        },
        {
          "resource": "r4",
          "score": 0.8038749839399727
        },
        {
          "resource": "r3",
          "score": 0.7965252024902071
        },
        {
          "resource": "r6",
          "score": 0.7748289877110256
        },
        {
          "resource": "r7",
          "score": 0.7589862641532991
        },
        {
          "resource": "r5",
          "score": 0.740604423234194
        },
        {
          "resource": "r0",
          "score": 0.7103494255157528
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 2,
      "text": "Synthetic symbol 3",
      "index": 84,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9931165868930689
        },
        {
          "resource": "r4",
          "score": 0.8360492610903941
        },
        {
          "resource": "r2",
          "score": 0.8158385228939433
        },
        {
          "resource": "r1",
          "score": 0.814033491541631
        },
        {
          "resource": "r6",
          "score": 0.8131185072780203
        },
        {
          "resource": "r5",
          "score": 0.7803417552068117
        },
        {
          "resource": "r7",
          "score": 0.7748146780464764
        },
        {
          "resource": "r0",
          "score": 0.7103984206052132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 3,
      "text": "Synthetic symbol 4",
      "index": 85,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9945123047516012
        },
        {
          "resource": "r3",
          "score": 0.8295076372584242
        },
        {
          "resource": "r6",
          "score": 0.8194836646574378
        },
        {
          "resource": "r2",
          "score": 0.8113366204492398
        },
        {
          "resource": "r5",
          "score": 0.8092863226909881
        },
        {
          "resource": "r1",
          "score": 0.7927374690674485
        },
        {
          "resource": "r7",
          "score": 0.7707432138712453
        },
        {
          "resource": "r0",
          "score": 0.7262401247978224
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 4,
      "text": "Synthetic symbol 5",
      "index": 86,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9939083287795734
        },
        {
          "resource": "r6",
          "score": 0.8409481667025739
        },
        {
          "resource": "r7",
          "score": 0.8094445862672526
        },
        {
          "resource": "r4",
          "score": 0.8034590290503504
        },
        {
          "resource": "r1",
          "score": 0.7683896810643727
        },
        {
          "resource": "r3",
          "score": 0.7648385057159552
        },
        {
          "resource": "r2",
          "score": 0.7409185203642927
        },
        {
          "resource": "r0",
          "score": 0.6973134811988947
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 5,
      "text": "Synthetic symbol 6",
      "index": 87,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9949654792999252
        },
        {
          "resource": "r5",
          "score": 0.8494655814532546
        },
        {
          "resource": "r7",
          "score": 0.841699354197766
        },
        {
          "resource": "r4",
          "score": 0.8264041271527592
        },
        {
          "resource": "r3",
          "score": 0.8103811833312967
        },
        {
          "resource": "r1",
          "score": 0.8046525341352583
        },
        {
          "resource": "r2",
          "score": 0.796135856197955
        },
        {
          "resource": "r0",
          "score": 0.7316370121198481
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 6,
      "text": "Synthetic symbol 7",
      "index": 88,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9923332182675378
        },
        {
          "resource": "r6",
          "score": 0.8375079472357874
        },
        {
          "resource": "r5",
          "score": 0.8207336333254557
        },
        {
          "resource": "r1",
          "score": 0.7783106374801244
        },
        {
          "resource": "r4",
          "score": 0.7675326469573636
        },
        {
          "resource": "r3",
          "score": 0.7662319168644738
        },
        {
          "resource": "r2",
          "score": 0.7574754747796701
        },
        {
          "resource": "r0",
          "score": 0.6785939117164903
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 7,
      "text": "Synthetic symbol 0",
      "index": 89,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9932167605531519
        },
        {
          "resource": "r1",
          "score": 0.7877855261831199
        },
        {
          "resource": "r4",
          "score": 0.7341065330666797
        },
        {
          "resource": "r6",
          "score": 0.7301149255276969
        },
        {
          "resource": "r2",
          "score": 0.7111447033206596
        },
        {
          "resource": "r3",
          "score": 0.7091388529047266
        },
        {
          "resource": "r5",
          "score": 0.7087018804786334
        },
        {
          "resource": "r7",
          "score": 0.6862890172171058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": -1,
      "text": "Synthetic symbol 2",
      "index": 90,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9913080655363385
        },
        {
          "resource": "r1",
          "score": 0.8409073052070998
        },
        {
          "resource": "r4",
          "score": 0.8049342619010795
        },
        {
          "resource": "r3",
          "score": 0.7949485244086778
        },
        {
          "resource": "r6",
          "score": 0.7730048601071303
        },
        {
          "resource": "r7",
          "score": 0.7539664960234894
        },
        {
          "resource": "r5",
          "score": 0.7387976057165646
        },
        {
          "resource": "r0",
          "score": 0.7133988245131181
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 0,
      "text": "Synthetic symbol 2",
      "index": 91,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9913080655363385
        },
        {
          "resource": "r1",
          "score": 0.8409073052070998
        },
        {
          "resource": "r4",
          "score": 0.8049342619010795
        },
        {
          "resource": "r3",
          "score": 0.7949485244086778
        },
        {
          "resource": "r6",
          "score": 0.7730048601071303
        },
        {
          "resource": "r7",
          "score": 0.7539664960234894
        },
        {
          "resource": "r5",
          "score": 0.7387976057165646
        },
        {
          "resource": "r0",
          "score": 0.7133988245131181
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 1,
      "text": "Synthetic symbol 3",
      "index": 92,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9931165868930689
        },
        {
          "resource": "r4",
          "score": 0.8360492610903941
        },
        {
          "resource": "r2",
          "score": 0.8158385228939433
        },
        {
          "resource": "r1",
          "score": 0.814033491541631
        },
        {
          "resource": "r6",
          "score": 0.8131185072780203
        },
        {
          "resource": "r5",
          "score": 0.7803417552068117
        },
        {
          "resource": "r7",
          "score": 0.7748146780464764
        },
        {
          "resource": "r0",
          "score": 0.7103984206052132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 2,
      "text": "Synthetic symbol 4",
      "index": 93,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9945123047516012
        },
        {
          "resource": "r3",
          "score": 0.8295076372584242
        },
        {
          "resource": "r6",
          "score": 0.8194836646574378
        },
        {
          "resource": "r2",
          "score": 0.8113366204492398
        },
        {
          "resource": "r5",
          "score": 0.8092863226909881
        },
        {
          "resource": "r1",
          "score": 0.7927374690674485
        },
        {
          "resource": "r7",
          "score": 0.7707432138712453
        },
        {
          "resource": "r0",
          "score": 0.7262401247978224
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 3,
      "text": "Synthetic symbol 5",
      "index": 94,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9939083287795734
        },
        {
          "resource": "r6",
          "score": 0.8409481667025739
        },
        {
          "resource": "r7",
          "score": 0.8094445862672526
        },
        {
          "resource": "r4",
          "score": 0.8034590290503504
        },
        {
          "resource": "r1",
          "score": 0.7683896810643727
        },
        {
          "resource": "r3",
          "score": 0.7648385057159552
        },
        {
          "resource": "r2",
          "score": 0.7409185203642927
        },
        {
          "resource": "r0",
          "score": 0.6973134811988947
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 4,
      "text": "Synthetic symbol 6",
      "index": 95,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9949654792999252
        },
        {
          "resource": "r5",
          "score": 0.8494655814532546
        },
        {
          "resource": "r7",
          "score": 0.841699354197766
        },
        {
          "resource": "r4",
          "score": 0.8264041271527592
        },
        {
          "resource": "r3",
          "score": 0.8103811833312967
        },
        {
          "resource": "r1",
          "score": 0.8046525341352583
        },
        {
          "resource": "r2",
          "score": 0.796135856197955
        },
        {
          "resource": "r0",
          "score": 0.7316370121198481
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 5,
      "text": "Synthetic symbol 7",
      "index": 96,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9935852008046252
        },
        {
          "resource": "r6",
          "score": 0.8362845648380262
        },
        {
          "resource": "r5",
          "score": 0.8213043212645131
        },
        {
          "resource": "r1",
          "score": 0.7783762312146214
        },
        {
          "resource": "r4",
          "score": 0.7690878115817054
        },
        {
          "resource": "r3",
          "score": 0.7634314800811728
        },
        {
          "resource": "r2",
          "score": 0.7530959679432472
        },
        {
          "resource": "r0",
          "score": 0.6832753580367283
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 6,
      "text": "Synthetic symbol 0",
      "index": 97,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9916774523110944
        },
        {
          "resource": "r1",
          "score": 0.7867628230891405
        },
        {
          "resource": "r4",
          "score": 0.7356160204471299
        },
        {
          "resource": "r6",
          "score": 0.727231172227105
        },
        {
          "resource": "r2",
          "score": 0.7115503566716227
        },
        {
          "resource": "r3",
          "score": 0.7075661710598778
        },
        {
          "resource": "r5",
          "score": 0.7049610746590492
        },
        {
          "resource": "r7",
          "score": 0.678429680090799
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 7,
      "text": "Synthetic symbol 1",
      "index": 98,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9905123016297175
        },
        {
          "resource": "r2",
          "score": 0.8397071755589018
        },
        {
          "resource": "r3",
          "score": 0.800122806339309
        },
        {
          "resource": "r4",
          "score": 0.791667592304117
        },
        {
          "resource": "r6",
          "score": 0.7855233987527963
        },
        {
          "resource": "r0",
          "score": 0.783169208290199
        },
        {
          "resource": "r7",
          "score": 0.7713995585734978
        },
        {
          "resource": "r5",
          "score": 0.7670486340170499
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": -1,
      "text": "Synthetic symbol 3",
      "index": 99,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9927718016206546
        },
        {
          "resource": "r4",
          "score": 0.8271198952172077
        },
        {
          "resource": "r2",
          "score": 0.8097613043480323
        },
        {
          "resource": "r6",
          "score": 0.8054563779203405
        },
        {
          "resource": "r1",
          "score": 0.8020476321796384
        },
        {
          "resource": "r5",
          "score": 0.7708357717483181
        },
        {
          "resource": "r7",
          "score": 0.7658757490377192
        },
        {
          "resource": "r0",
          "score": 0.6971758845691509
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 0,
      "text": "Synthetic symbol 3",
      "index": 100,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9931165868930689
        },
        {
          "resource": "r4",
          "score": 0.8360492610903941
        },
        {
          "resource": "r2",
          "score": 0.8158385228939433
        },
        {
          "resource": "r1",
          "score": 0.814033491541631
        },
        {
          "resource": "r6",
          "score": 0.8131185072780203
        },
        {
          "resource": "r5",
          "score": 0.7803417552068117
        },
        {
          "resource": "r7",
          "score": 0.7748146780464764
        },
        {
          "resource": "r0",
          "score": 0.7103984206052132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 1,
      "text": "Synthetic symbol 4",
      "index": 101,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9945123047516012
        },
        {
          "resource": "r3",
          "score": 0.8295076372584242
        },
        {
          "resource": "r6",
          "score": 0.8194836646574378
        },
        {
          "resource": "r2",
          "score": 0.8113366204492398
        },
        {
          "resource": "r5",
          "score": 0.8092863226909881
        },
        {
          "resource": "r1",
          "score": 0.7927374690674485
        },
        {
          "resource": "r7",
          "score": 0.7707432138712453
        },
        {
          "resource": "r0",
          "score": 0.7262401247978224
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 2,
      "text": "Synthetic symbol 5",
      "index": 102,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9939083287795734
        },
        {
          "resource": "r6",
          "score": 0.8409481667025739
        },
        {
          "resource": "r7",
          "score": 0.8094445862672526
        },
        {
          "resource": "r4",
          "score": 0.8034590290503504
        },
        {
          "resource": "r1",
          "score": 0.7683896810643727
        },
        {
          "resource": "r3",
          "score": 0.7648385057159552
        },
        {
          "resource": "r2",
          "score": 0.7409185203642927
        },
        {
          "resource": "r0",
          "score": 0.6973134811988947
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 3,
      "text": "Synthetic symbol 6",
      "index": 103,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9949654792999252
        },
        {
          "resource": "r5",
          "score": 0.8494655814532546
        },
        {
          "resource": "r7",
          "score": 0.841699354197766
        },
        {
          "resource": "r4",
          "score": 0.8264041271527592
        },
        {
          "resource": "r3",
          "score": 0.8103811833312967
        },
        {
          "resource": "r1",
          "score": 0.8046525341352583
        },
        {
          "resource": "r2",
          "score": 0.796135856197955
        },
        {
          "resource": "r0",
          "score": 0.7316370121198481
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 4,
      "text": "Synthetic symbol 7",
      "index": 104,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.993006518260197
        },
        {
          "resource": "r6",
          "score": 0.8333366940404612
        },
        {
          "resource": "r5",
          "score": 0.8162001655186559
        },
        {
          "resource": "r1",
          "score": 0.7776577748540908
        },
        {
          "resource": "r3",
          "score": 0.7689125580466311
        },
        {
          "resource": "r4",
          "score": 0.7684808822325528
        },
        {
          "resource": "r2",
          "score": 0.7531647722496133
        },
        {
          "resource": "r0",
          "score": 0.6763698523671049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 5,
      "text": "Synthetic symbol 0",
      "index": 105,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9925909676249947
        },
        {
          "resource": "r1",
          "score": 0.7810021499699059
        },
        {
          "resource": "r4",
          "score": 0.7276926495563175
        },
        {
          "resource": "r6",
          "score": 0.7184030459098176
        },
        {
          "resource": "r2",
          "score": 0.7039386072009333
        },
        {
          "resource": "r3",
          "score": 0.6996409711625718
        },
        {
          "resource": "r5",
          "score": 0.6976003670039832
        },
        {
          "resource": "r7",
          "score": 0.6745302254995135
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 6,
      "text": "Synthetic symbol 1",
      "index": 106,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9912039924161593
        },
        {
          "resource": "r2",
          "score": 0.8471297051548475
        },
        {
          "resource": "r3",
          "score": 0.7949198773982907
        },
        {
          "resource": "r4",
          "score": 0.7871289394722099
        },
        {
          "resource": "r6",
          "score": 0.7820035693822491
        },
        {
          "resource": "r0",
          "score": 0.7808333584390627
        },
        {
          "resource": "r7",
          "score": 0.766575753771333
        },
        {
          "resource": "r5",
          "score": 0.7612821705826225
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 7,
      "text": "Synthetic symbol 2",
      "index": 107,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9905581266843702
        },
        {
          "resource": "r1",
          "score": 0.8501339150648408
        },
        {
          "resource": "r4",
          "score": 0.8152118047555991
        },
        {
          "resource": "r3",
          "score": 0.8072679612806862
        },
        {
          "resource": "r6",
          "score": 0.7852070814819463
        },
        {
          "resource": "r7",
          "score": 0.7642843141732684
        },
        {
          "resource": "r5",
          "score": 0.7497831996276274
        },
        {
          "resource": "r0",
          "score": 0.7208389774078019
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": -1,
      "text": "Synthetic symbol 4",
      "index": 108,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9943287123217278
        },
        {
          "resource": "r3",
          "score": 0.8302960732947733
        },
        {
          "resource": "r6",
          "score": 0.8199446904610748
        },
        {
          "resource": "r2",
          "score": 0.8128332513328685
        },
        {
          "resource": "r5",
          "score": 0.8086605786033846
        },
        {
          "resource": "r1",
          "score": 0.7959419222491407
        },
        {
          "resource": "r7",
          "score": 0.7766637867669189
        },
        {
          "resource": "r0",
          "score": 0.7285238683015826
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 0,
      "text": "Synthetic symbol 4",
      "index": 109,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9943287123217278
        },
        {
          "resource": "r3",
          "score": 0.8302960732947733
        },
        {
          "resource": "r6",
          "score": 0.8199446904610748
        },
        {
          "resource": "r2",
          "score": 0.8128332513328685
        },
        {
          "resource": "r5",
          "score": 0.8086605786033846
        },
        {
          "resource": "r1",
          "score": 0.7959419222491407
        },
        {
          "resource": "r7",
          "score": 0.7766637867669189
        },
        {
          "resource": "r0",
          "score": 0.7285238683015826
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 1,
      "text": "Synthetic symbol 5",
      "index": 110,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9952592479500212
        },
        {
          "resource": "r6",
          "score": 0.8472236656208565
        },
        {
          "resource": "r4",
          "score": 0.8151840785729592
        },
        {
          "resource": "r7",
          "score": 0.814750139268377
        },
        {
          "resource": "r1",
          "score": 0.7807122671593615
        },
        {
          "resource": "r3",
          "score": 0.7755798866274856
        },
        {
          "resource": "r2",
          "score": 0.7506525394952772
        },
        {
          "resource": "r0",
          "score": 0.7138312303066534
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 2,
      "text": "Synthetic symbol 6",
      "index": 111,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9936209133919899
        },
        {
          "resource": "r5",
          "score": 0.8525556139295422
        },
        {
          "resource": "r7",
          "score": 0.8430676301006436
        },
        {
          "resource": "r4",
          "score": 0.8280433513729724
        },
        {
          "resource": "r3",
          "score": 0.8079814197819943
        },
        {
          "resource": "r1",
          "score": 0.8067042891387939
        },
        {
          "resource": "r2",
          "score": 0.7911600095019771
        },
        {
          "resource": "r0",
          "score": 0.7406857150350493
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 3,
      "text": "Synthetic symbol 7",
      "index": 112,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.993006518260197
        },
        {
          "resource": "r6",
          "score": 0.8333366940404612
        },
        {
          "resource": "r5",
          "score": 0.8162001655186559
        },
        {
          "resource": "r1",
          "score": 0.7776577748540908
        },
        {
          "resource": "r3",
          "score": 0.7689125580466311
        },
        {
          "resource": "r4",
          "score": 0.7684808822325528
        },
        {
          "resource": "r2",
          "score": 0.7531647722496133
        },
        {
          "resource": "r0",
          "score": 0.6763698523671049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 4,
      "text": "Synthetic symbol 0",
      "index": 113,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9925909676249947
        },
        {
          "resource": "r1",
          "score": 0.7810021499699059
        },
        {
          "resource": "r4",
          "score": 0.7276926495563175
        },
        {
          "resource": "r6",
          "score": 0.7184030459098176
        },
        {
          "resource": "r2",
          "score": 0.7039386072009333
        },
        {
          "resource": "r3",
          "score": 0.6996409711625718
        },
        {
          "resource": "r5",
          "score": 0.6976003670039832
        },
        {
          "resource": "r7",
          "score": 0.6745302254995135
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 5,
      "text": "Synthetic symbol 1",
      "index": 114,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9912039924161593
        },
        {
          "resource": "r2",
          "score": 0.8471297051548475
        },
        {
          "resource": "r3",
          "score": 0.7949198773982907
        },
        {
          "resource": "r4",
          "score": 0.7871289394722099
        },
        {
          "resource": "r6",
          "score": 0.7820035693822491
        },
        {
          "resource": "r0",
          "score": 0.7808333584390627
        },
        {
          "resource": "r7",
          "score": 0.766575753771333
        },
        {
          "resource": "r5",
          "score": 0.7612821705826225
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 6,
      "text": "Synthetic symbol 2",
      "index": 115,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9905581266843702
        },
        {
          "resource": "r1",
          "score": 0.8501339150648408
        },
        {
          "resource": "r4",
          "score": 0.8152118047555991
        },
        {
          "resource": "r3",
          "score": 0.8072679612806862
        },
        {
          "resource": "r6",
          "score": 0.7852070814819463
        },
        {
          "resource": "r7",
          "score": 0.7642843141732684
        },
        {
          "resource": "r5",
          "score": 0.7497831996276274
        },
        {
          "resource": "r0",
          "score": 0.7208389774078019
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 7,
      "text": "Synthetic symbol 3",
      "index": 116,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9918902266057421
        },
        {
          "resource": "r4",
          "score": 0.8443363100519325
        },
        {
          "resource": "r2",
          "score": 0.8300005026264367
        },
        {
          "resource": "r6",
          "score": 0.8249496543108519
        },
        {
          "resource": "r1",
          "score": 0.8240254724176161
        },
        {
          "resource": "r5",
          "score": 0.7910652209260249
        },
        {
          "resource": "r7",
          "score": 0.7848381546083224
        },
        {
          "resource": "r0",
          "score": 0.7174204743155028
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": -1,
      "text": "Synthetic symbol 5",
      "index": 117,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9922672223237384
        },
        {
          "resource": "r6",
          "score": 0.8478637461318372
        },
        {
          "resource": "r7",
          "score": 0.8155650365264735
        },
        {
          "resource": "r4",
          "score": 0.8149212532177305
        },
        {
          "resource": "r3",
          "score": 0.7760283361455261
        },
        {
          "resource": "r1",
          "score": 0.7746868788699
        },
        {
          "resource": "r2",
          "score": 0.755463178338135
        },
        {
          "resource": "r0",
          "score": 0.7003050345203049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 0,
      "text": "Synthetic symbol 5",
      "index": 118,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9922672223237384
        },
        {
          "resource": "r6",
          "score": 0.8478637461318372
        },
        {
          "resource": "r7",
          "score": 0.8155650365264735
        },
        {
          "resource": "r4",
          "score": 0.8149212532177305
        },
        {
          "resource": "r3",
          "score": 0.7760283361455261
        },
        {
          "resource": "r1",
          "score": 0.7746868788699
        },
        {
          "resource": "r2",
          "score": 0.755463178338135
        },
        {
          "resource": "r0",
          "score": 0.7003050345203049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 1,
      "text": "Synthetic symbol 6",
      "index": 119,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9933726859213171
        },
        {
          "resource": "r5",
          "score": 0.8488105063609777
        },
        {
          "resource": "r7",
          "score": 0.841209277507337
        },
        {
          "resource": "r4",
          "score": 0.8240858286608281
        },
        {
          "resource": "r3",
          "score": 0.8086035169141111
        },
        {
          "resource": "r1",
          "score": 0.8018959653424547
        },
        {
          "resource": "r2",
          "score": 0.7880576899510499
        },
        {
          "resource": "r0",
          "score": 0.7332854613683464
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 2,
      "text": "Synthetic symbol 7",
      "index": 120,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.993006518260197
        },
        {
          "resource": "r6",
          "score": 0.8333366940404612
        },
        {
          "resource": "r5",
          "score": 0.8162001655186559
        },
        {
          "resource": "r1",
          "score": 0.7776577748540908
        },
        {
          "resource": "r3",
          "score": 0.7689125580466311
        },
        {
          "resource": "r4",
          "score": 0.7684808822325528
        },
        {
          "resource": "r2",
          "score": 0.7531647722496133
        },
        {
          "resource": "r0",
          "score": 0.6763698523671049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 3,
      "text": "Synthetic symbol 0",
      "index": 121,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9925909676249947
        },
        {
          "resource": "r1",
          "score": 0.7810021499699059
        },
        {
          "resource": "r4",
          "score": 0.7276926495563175
        },
        {
          "resource": "r6",
          "score": 0.7184030459098176
        },
        {
          "resource": "r2",
          "score": 0.7039386072009333
        },
        {
          "resource": "r3",
          "score": 0.6996409711625718
        },
        {
          "resource": "r5",
          "score": 0.6976003670039832
        },
        {
          "resource": "r7",
          "score": 0.6745302254995135
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 4,
      "text": "Synthetic symbol 1",
      "index": 122,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9912039924161593
        },
        {
          "resource": "r2",
          "score": 0.8471297051548475
        },
        {
          "resource": "r3",
          "score": 0.7949198773982907
        },
        {
          "resource": "r4",
          "score": 0.7871289394722099
        },
        {
          "resource": "r6",
          "score": 0.7820035693822491
        },
        {
          "resource": "r0",
          "score": 0.7808333584390627
        },
        {
          "resource": "r7",
          "score": 0.766575753771333
        },
        {
          "resource": "r5",
          "score": 0.7612821705826225
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 5,
      "text": "Synthetic symbol 2",
      "index": 123,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9905581266843702
        },
        {
          "resource": "r1",
          "score": 0.8501339150648408
        },
        {
          "resource": "r4",
          "score": 0.8152118047555991
        },
        {
          "resource": "r3",
          "score": 0.8072679612806862
        },
        {
          "resource": "r6",
          "score": 0.7852070814819463
        },
        {
          "resource": "r7",
          "score": 0.7642843141732684
        },
        {
          "resource": "r5",
          "score": 0.7497831996276274
        },
        {
          "resource": "r0",
          "score": 0.7208389774078019
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 6,
      "text": "Synthetic symbol 3",
      "index": 124,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9923603567897
        },
        {
          "resource": "r4",
          "score": 0.830132065459913
        },
        {
          "resource": "r2",
          "score": 0.8236290640035295
        },
        {
          "resource": "r6",
          "score": 0.8161585676265125
        },
        {
          "resource": "r1",
          "score": 0.8113130130271314
        },
        {
          "resource": "r5",
          "score": 0.778955061361178
        },
        {
          "resource": "r7",
          "score": 0.7758828872926244
        },
        {
          "resource": "r0",
          "score": 0.7064848014874942
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 7,
      "text": "Synthetic symbol 4",
      "index": 125,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9926026849366908
        },
        {
          "resource": "r3",
          "score": 0.8307280771954509
        },
        {
          "resource": "r6",
          "score": 0.8194486454239378
        },
        {
          "resource": "r2",
          "score": 0.8090871478192388
        },
        {
          "resource": "r5",
          "score": 0.8090022727282877
        },
        {
          "resource": "r1",
          "score": 0.795270100699599
        },
        {
          "resource": "r7",
          "score": 0.7732781767400244
        },
        {
          "resource": "r0",
          "score": 0.7284397467795704
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": -1,
      "text": "Synthetic symbol 6",
      "index": 126,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9939926444221304
        },
        {
          "resource": "r5",
          "score": 0.8491138738109392
        },
        {
          "resource": "r7",
          "score": 0.8329608304610081
        },
        {
          "resource": "r4",
          "score": 0.8183641166018146
        },
        {
          "resource": "r3",
          "score": 0.8026762158674955
        },
        {
          "resource": "r1",
          "score": 0.7928929503267096
        },
        {
          "resource": "r2",
          "score": 0.7797937253081718
        },
        {
          "resource": "r0",
          "score": 0.7263465637844557
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 0,
      "text": "Synthetic symbol 6",
      "index": 127,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9939926444221304
        },
        {
          "resource": "r5",
          "score": 0.8491138738109392
        },
        {
          "resource": "r7",
          "score": 0.8329608304610081
        },
        {
          "resource": "r4",
          "score": 0.8183641166018146
        },
        {
          "resource": "r3",
          "score": 0.8026762158674955
        },
        {
          "resource": "r1",
          "score": 0.7928929503267096
        },
        {
          "resource": "r2",
          "score": 0.7797937253081718
        },
        {
          "resource": "r0",
          "score": 0.7263465637844557
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 1,
      "text": "Synthetic symbol 7",
      "index": 128,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.993006518260197
        },
        {
          "resource": "r6",
          "score": 0.8333366940404612
        },
        {
          "resource": "r5",
          "score": 0.8162001655186559
        },
        {
          "resource": "r1",
          "score": 0.7776577748540908
        },
        {
          "resource": "r3",
          "score": 0.7689125580466311
        },
        {
          "resource": "r4",
          "score": 0.7684808822325528
        },
        {
          "resource": "r2",
          "score": 0.7531647722496133
        },
        {
          "resource": "r0",
          "score": 0.6763698523671049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 2,
      "text": "Synthetic symbol 0",
      "index": 129,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9925909676249947
        },
        {
          "resource": "r1",
          "score": 0.7810021499699059
        },
        {
          "resource": "r4",
          "score": 0.7276926495563175
        },
        {
          "resource": "r6",
          "score": 0.7184030459098176
        },
        {
          "resource": "r2",
          "score": 0.7039386072009333
        },
        {
          "resource": "r3",
          "score": 0.6996409711625718
        },
        {
          "resource": "r5",
          "score": 0.6976003670039832
        },
        {
          "resource": "r7",
          "score": 0.6745302254995135
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 3,
      "text": "Synthetic symbol 1",
      "index": 130,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9912039924161593
        },
        {
          "resource": "r2",
          "score": 0.8471297051548475
        },
        {
          "resource": "r3",
          "score": 0.7949198773982907
        },
        {
          "resource": "r4",
          "score": 0.7871289394722099
        },
        {
          "resource": "r6",
          "score": 0.7820035693822491
        },
        {
          "resource": "r0",
          "score": 0.7808333584390627
        },
        {
          "resource": "r7",
          "score": 0.766575753771333
        },
        {
          "resource": "r5",
          "score": 0.7612821705826225
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 4,
      "text": "Synthetic symbol 2",
      "index": 131,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9905581266843702
        },
        {
          "resource": "r1",
          "score": 0.8501339150648408
        },
        {
          "resource": "r4",
          "score": 0.8152118047555991
        },
        {
          "resource": "r3",
          "score": 0.8072679612806862
        },
        {
          "resource": "r6",
          "score": 0.7852070814819463
        },
        {
          "resource": "r7",
          "score": 0.7642843141732684
        },
        {
          "resource": "r5",
          "score": 0.7497831996276274
        },
        {
          "resource": "r0",
          "score": 0.7208389774078019
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 5,
      "text": "Synthetic symbol 3",
      "index": 132,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9935026170517427
        },
        {
          "resource": "r4",
          "score": 0.8313234912580616
        },
        {
          "resource": "r2",
          "score": 0.8189096809853333
        },
        {
          "resource": "r6",
          "score": 0.8168264858170101
        },
        {
          "resource": "r1",
          "score": 0.8146100488842983
        },
        {
          "resource": "r5",
          "score": 0.7782501050628814
        },
        {
          "resource": "r7",
          "score": 0.7776877171717919
        },
        {
          "resource": "r0",
          "score": 0.7115249738672568
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 6,
      "text": "Synthetic symbol 4",
      "index": 133,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9952671098323791
        },
        {
          "resource": "r3",
          "score": 0.8224083366097458
        },
        {
          "resource": "r6",
          "score": 0.8160227399485216
        },
        {
          "resource": "r5",
          "score": 0.8108519720410131
        },
        {
          "resource": "r2",
          "score": 0.8065257391933568
        },
        {
          "resource": "r1",
          "score": 0.7910132310908597
        },
        {
          "resource": "r7",
          "score": 0.7715374272734112
        },
        {
          "resource": "r0",
          "score": 0.7244441947523466
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 7,
      "text": "Synthetic symbol 5",
      "index": 134,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9942550395982549
        },
        {
          "resource": "r6",
          "score": 0.8510502585942482
        },
        {
          "resource": "r7",
          "score": 0.8168673300399092
        },
        {
          "resource": "r4",
          "score": 0.8079480703302309
        },
        {
          "resource": "r1",
          "score": 0.781342542258557
        },
        {
          "resource": "r3",
          "score": 0.776693367598821
        },
        {
          "resource": "r2",
          "score": 0.7520021962326854
        },
        {
          "resource": "r0",
          "score": 0.7139309473641323
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": -1,
      "text": "Synthetic symbol 7",
      "index": 135,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9946691113597865
        },
        {
          "resource": "r6",
          "score": 0.8332191209837889
        },
        {
          "resource": "r5",
          "score": 0.8184086003009119
        },
        {
          "resource": "r1",
          "score": 0.7748453167416285
        },
        {
          "resource": "r4",
          "score": 0.7669297079594015
        },
        {
          "resource": "r3",
          "score": 0.7650438017240093
        },
        {
          "resource": "r2",
          "score": 0.7503944603784752
        },
        {
          "resource": "r0",
          "score": 0.6701862032976433
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 0,
      "text": "Synthetic symbol 7",
      "index": 136,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.993006518260197
        },
        {
          "resource": "r6",
          "score": 0.8333366940404612
        },
        {
          "resource": "r5",
          "score": 0.8162001655186559
        },
        {
          "resource": "r1",
          "score": 0.7776577748540908
        },
        {
          "resource": "r3",
          "score": 0.7689125580466311
        },
        {
          "resource": "r4",
          "score": 0.7684808822325528
        },
        {
          "resource": "r2",
          "score": 0.7531647722496133
        },
        {
          "resource": "r0",
          "score": 0.6763698523671049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 1,
      "text": "Synthetic symbol 0",
      "index": 137,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9925909676249947
        },
        {
          "resource": "r1",
          "score": 0.7810021499699059
        },
        {
          "resource": "r4",
          "score": 0.7276926495563175
        },
        {
          "resource": "r6",
          "score": 0.7184030459098176
        },
        {
          "resource": "r2",
          "score": 0.7039386072009333
        },
        {
          "resource": "r3",
          "score": 0.6996409711625718
        },
        {
          "resource": "r5",
          "score": 0.6976003670039832
        },
        {
          "resource": "r7",
          "score": 0.6745302254995135
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 2,
      "text": "Synthetic symbol 1",
      "index": 138,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9912039924161593
        },
        {
          "resource": "r2",
          "score": 0.8471297051548475
        },
        {
          "resource": "r3",
          "score": 0.7949198773982907
        },
        {
          "resource": "r4",
          "score": 0.7871289394722099
        },
        {
          "resource": "r6",
          "score": 0.7820035693822491
        },
        {
          "resource": "r0",
          "score": 0.7808333584390627
        },
        {
          "resource": "r7",
          "score": 0.766575753771333
        },
        {
          "resource": "r5",
          "score": 0.7612821705826225
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 3,
      "text": "Synthetic symbol 2",
      "index": 139,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9905581266843702
        },
        {
          "resource": "r1",
          "score": 0.8501339150648408
        },
        {
          "resource": "r4",
          "score": 0.8152118047555991
        },
        {
          "resource": "r3",
          "score": 0.8072679612806862
        },
        {
          "resource": "r6",
          "score": 0.7852070814819463
        },
        {
          "resource": "r7",
          "score": 0.7642843141732684
        },
        {
          "resource": "r5",
          "score": 0.7497831996276274
        },
        {
          "resource": "r0",
          "score": 0.7208389774078019
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 4,
      "text": "Synthetic symbol 3",
      "index": 140,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9931165868930689
        },
        {
          "resource": "r4",
          "score": 0.8360492610903941
        },
        {
          "resource": "r2",
          "score": 0.8158385228939433
        },
        {
          "resource": "r1",
          "score": 0.814033491541631
        },
        {
          "resource": "r6",
          "score": 0.8131185072780203
        },
        {
          "resource": "r5",
          "score": 0.7803417552068117
        },
        {
          "resource": "r7",
          "score": 0.7748146780464764
        },
        {
          "resource": "r0",
          "score": 0.7103984206052132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 5,
      "text": "Synthetic symbol 4",
      "index": 141,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9945123047516012
        },
        {
          "resource": "r3",
          "score": 0.8295076372584242
        },
        {
          "resource": "r6",
          "score": 0.8194836646574378
        },
        {
          "resource": "r2",
          "score": 0.8113366204492398
        },
        {
          "resource": "r5",
          "score": 0.8092863226909881
        },
        {
          "resource": "r1",
          "score": 0.7927374690674485
        },
        {
          "resource": "r7",
          "score": 0.7707432138712453
        },
        {
          "resource": "r0",
          "score": 0.7262401247978224
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 6,
      "text": "Synthetic symbol 5",
      "index": 142,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9939083287795734
        },
        {
          "resource": "r6",
          "score": 0.8409481667025739
        },
        {
          "resource": "r7",
          "score": 0.8094445862672526
        },
        {
          "resource": "r4",
          "score": 0.8034590290503504
        },
        {
          "resource": "r1",
          "score": 0.7683896810643727
        },
        {
          "resource": "r3",
          "score": 0.7648385057159552
        },
        {
          "resource": "r2",
          "score": 0.7409185203642927
        },
        {
          "resource": "r0",
          "score": 0.6973134811988947
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 7,
      "text": "Synthetic symbol 6",
      "index": 143,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9949654792999252
        },
        {
          "resource": "r5",
          "score": 0.8494655814532546
        },
        {
          "resource": "r7",
          "score": 0.841699354197766
        },
        {
          "resource": "r4",
          "score": 0.8264041271527592
        },
        {
          "resource": "r3",
          "score": 0.8103811833312967
        },
        {
          "resource": "r1",
          "score": 0.8046525341352583
        },
        {
          "resource": "r2",
          "score": 0.796135856197955
        },
        {
          "resource": "r0",
          "score": 0.7316370121198481
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": -1,
      "text": "Synthetic symbol 0",
      "index": 144,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.992786479668352
        },
        {
          "resource": "r1",
          "score": 0.7834483057318612
        },
        {
          "resource": "r4",
          "score": 0.7322494438187095
        },
        {
          "resource": "r6",
          "score": 0.726730321014568
        },
        {
          "resource": "r3",
          "score": 0.7050257030874515
        },
        {
          "resource": "r2",
          "score": 0.7049126486995437
        },
        {
          "resource": "r5",
          "score": 0.7028218354157292
        },
        {
          "resource": "r7",
          "score": 0.679392013036925
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 0,
      "text": "Synthetic symbol 0",
      "index": 145,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.992786479668352
        },
        {
          "resource": "r1",
          "score": 0.7834483057318612
        },
        {
          "resource": "r4",
          "score": 0.7322494438187095
        },
        {
          "resource": "r6",
          "score": 0.726730321014568
        },
        {
          "resource": "r3",
          "score": 0.7050257030874515
        },
        {
          "resource": "r2",
          "score": 0.7049126486995437
        },
        {
          "resource": "r5",
          "score": 0.7028218354157292
        },
        {
          "resource": "r7",
          "score": 0.679392013036925
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 1,
      "text": "Synthetic symbol 1",
      "index": 146,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9932435081116034
        },
        {
          "resource": "r2",
          "score": 0.8451126521156893
        },
        {
          "resource": "r3",
          "score": 0.8020133279837091
        },
        {
          "resource": "r4",
          "score": 0.7950907934061794
        },
        {
          "resource": "r6",
          "score": 0.7927909029922884
        },
        {
          "resource": "r0",
          "score": 0.7825671313048707
        },
        {
          "resource": "r7",
          "score": 0.778545967127576
        },
        {
          "resource": "r5",
          "score": 0.7699310548943702
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 2,
      "text": "Synthetic symbol 2",
      "index": 147,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9915508725836096
        },
        {
          "resource": "r1",
          "score": 0.8592938006710855
        },
        {
          "resource": "r4",
          "score": 0.8192457929918217
        },
        {
          "resource": "r3",
          "score": 0.8113281480692005
        },
        {
          "resource": "r6",
          "score": 0.7868155615781749
        },
        {
          "resource": "r7",
          "score": 0.7648228895496202
        },
        {
          "resource": "r5",
          "score": 0.7540054373420761
        },
        {
          "resource": "r0",
          "score": 0.7264634697246304
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 3,
      "text": "Synthetic symbol 3",
      "index": 148,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9931165868930689
        },
        {
          "resource": "r4",
          "score": 0.8360492610903941
        },
        {
          "resource": "r2",
          "score": 0.8158385228939433
        },
        {
          "resource": "r1",
          "score": 0.814033491541631
        },
        {
          "resource": "r6",
          "score": 0.8131185072780203
        },
        {
          "resource": "r5",
          "score": 0.7803417552068117
        },
        {
          "resource": "r7",
          "score": 0.7748146780464764
        },
        {
          "resource": "r0",
          "score": 0.7103984206052132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 4,
      "text": "Synthetic symbol 4",
      "index": 149,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9945123047516012
        },
        {
          "resource": "r3",
          "score": 0.8295076372584242
        },
        {
          "resource": "r6",
          "score": 0.8194836646574378
        },
        {
          "resource": "r2",
          "score": 0.8113366204492398
        },
        {
          "resource": "r5",
          "score": 0.8092863226909881
        },
        {
          "resource": "r1",
          "score": 0.7927374690674485
        },
        {
          "resource": "r7",
          "score": 0.7707432138712453
        },
        {
          "resource": "r0",
          "score": 0.7262401247978224
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 5,
      "text": "Synthetic symbol 5",
      "index": 150,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9939083287795734
        },
        {
          "resource": "r6",
          "score": 0.8409481667025739
        },
        {
          "resource": "r7",
          "score": 0.8094445862672526
        },
        {
          "resource": "r4",
          "score": 0.8034590290503504
        },
        {
          "resource": "r1",
          "score": 0.7683896810643727
        },
        {
          "resource": "r3",
          "score": 0.7648385057159552
        },
        {
          "resource": "r2",
          "score": 0.7409185203642927
        },
        {
          "resource": "r0",
          "score": 0.6973134811988947
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 6,
      "text": "Synthetic symbol 6",
      "index": 151,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9949654792999252
        },
        {
          "resource": "r5",
          "score": 0.8494655814532546
        },
        {
          "resource": "r7",
          "score": 0.841699354197766
        },
        {
          "resource": "r4",
          "score": 0.8264041271527592
        },
        {
          "resource": "r3",
          "score": 0.8103811833312967
        },
        {
          "resource": "r1",
          "score": 0.8046525341352583
        },
        {
          "resource": "r2",
          "score": 0.796135856197955
        },
        {
          "resource": "r0",
          "score": 0.7316370121198481
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 7,
      "text": "Synthetic symbol 7",
      "index": 152,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9919568310982413
        },
        {
          "resource": "r6",
          "score": 0.8343741923500004
        },
        {
          "resource": "r5",
          "score": 0.816735627871341
        },
        {
          "resource": "r1",
          "score": 0.7739380765682807
        },
        {
          "resource": "r4",
          "score": 0.769374286252168
        },
        {
          "resource": "r3",
          "score": 0.7662350237655344
        },
        {
          "resource": "r2",
          "score": 0.7496268569447914
        },
        {
          "resource": "r0",
          "score": 0.6745948733166723
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": -1,
      "text": "Synthetic symbol 1",
      "index": 153,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9919494894029011
        },
        {
          "resource": "r2",
          "score": 0.8421932747279615
        },
        {
          "resource": "r3",
          "score": 0.7963956144608413
        },
        {
          "resource": "r4",
          "score": 0.7897244489015395
        },
        {
          "resource": "r6",
          "score": 0.7893710684377303
        },
        {
          "resource": "r0",
          "score": 0.7799392351369379
        },
        {
          "resource": "r7",
          "score": 0.7794908066610733
        },
        {
          "resource": "r5",
          "score": 0.764948935592982
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 0,
      "text": "Synthetic symbol 1",
      "index": 154,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9919494894029011
        },
        {
          "resource": "r2",
          "score": 0.8421932747279615
        },
        {
          "resource": "r3",
          "score": 0.7963956144608413
        },
        {
          "resource": "r4",
          "score": 0.7897244489015395
        },
        {
          "resource": "r6",
          "score": 0.7893710684377303
        },
        {
          "resource": "r0",
          "score": 0.7799392351369379
        },
        {
          "resource": "r7",
          "score": 0.7794908066610733
        },
        {
          "resource": "r5",
          "score": 0.764948935592982
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 1,
      "text": "Synthetic symbol 2",
      "index": 155,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9900594093847187
        },
        {
          "resource": "r1",
          "score": 0.8403699528189511
        },
        {
          "resource": "r4",
          "score": 0.8038749839399727
        },
        {
          "resource": "r3",
          "score": 0.7965252024902071
        },
        {
          "resource": "r6",
          "score": 0.7748289877110256
        },
        {
          "resource": "r7",
          "score": 0.7589862641532991
        },
        {
          "resource": "r5",
          "score": 0.740604423234194
        },
        {
          "resource": "r0",
          "score": 0.7103494255157528
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 2,
      "text": "Synthetic symbol 3",
      "index": 156,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9931165868930689
        },
        {
          "resource": "r4",
          "score": 0.8360492610903941
        },
        {
          "resource": "r2",
          "score": 0.8158385228939433
        },
        {
          "resource": "r1",
          "score": 0.814033491541631
        },
        {
          "resource": "r6",
          "score": 0.8131185072780203
        },
        {
          "resource": "r5",
          "score": 0.7803417552068117
        },
        {
          "resource": "r7",
          "score": 0.7748146780464764
        },
        {
          "resource": "r0",
          "score": 0.7103984206052132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 3,
      "text": "Synthetic symbol 4",
      "index": 157,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9945123047516012
        },
        {
          "resource": "r3",
          "score": 0.8295076372584242
        },
        {
          "resource": "r6",
          "score": 0.8194836646574378
        },
        {
          "resource": "r2",
          "score": 0.8113366204492398
        },
        {
          "resource": "r5",
          "score": 0.8092863226909881
        },
        {
          "resource": "r1",
          "score": 0.7927374690674485
        },
        {
          "resource": "r7",
          "score": 0.7707432138712453
        },
        {
          "resource": "r0",
          "score": 0.7262401247978224
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 4,
      "text": "Synthetic symbol 5",
      "index": 158,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9939083287795734
        },
        {
          "resource": "r6",
          "score": 0.8409481667025739
        },
        {
          "resource": "r7",
          "score": 0.8094445862672526
        },
        {
          "resource": "r4",
          "score": 0.8034590290503504
        },
        {
          "resource": "r1",
          "score": 0.7683896810643727
        },
        {
          "resource": "r3",
          "score": 0.7648385057159552
        },
        {
          "resource": "r2",
          "score": 0.7409185203642927
        },
        {
          "resource": "r0",
          "score": 0.6973134811988947
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 5,
      "text": "Synthetic symbol 6",
      "index": 159,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9949654792999252
        },
        {
          "resource": "r5",
          "score": 0.8494655814532546
        },
        {
          "resource": "r7",
          "score": 0.841699354197766
        },
        {
          "resource": "r4",
          "score": 0.8264041271527592
        },
        {
          "resource": "r3",
          "score": 0.8103811833312967
        },
        {
          "resource": "r1",
          "score": 0.8046525341352583
        },
        {
          "resource": "r2",
          "score": 0.796135856197955
        },
        {
          "resource": "r0",
          "score": 0.7316370121198481
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 6,
      "text": "Synthetic symbol 7",
      "index": 160,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9923332182675378
        },
        {
          "resource": "r6",
          "score": 0.8375079472357874
        },
        {
          "resource": "r5",
          "score": 0.8207336333254557
        },
        {
          "resource": "r1",
          "score": 0.7783106374801244
        },
        {
          "resource": "r4",
          "score": 0.7675326469573636
        },
        {
          "resource": "r3",
          "score": 0.7662319168644738
        },
        {
          "resource": "r2",
          "score": 0.7574754747796701
        },
        {
          "resource": "r0",
          "score": 0.6785939117164903
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 7,
      "text": "Synthetic symbol 0",
      "index": 161,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9932167605531519
        },
        {
          "resource": "r1",
          "score": 0.7877855261831199
        },
        {
          "resource": "r4",
          "score": 0.7341065330666797
        },
        {
          "resource": "r6",
          "score": 0.7301149255276969
        },
        {
          "resource": "r2",
          "score": 0.7111447033206596
        },
        {
          "resource": "r3",
          "score": 0.7091388529047266
        },
        {
          "resource": "r5",
          "score": 0.7087018804786334
        },
        {
          "resource": "r7",
          "score": 0.6862890172171058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": -1,
      "text": "Synthetic symbol 2",
      "index": 162,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9913080655363385
        },
        {
          "resource": "r1",
          "score": 0.8409073052070998
        },
        {
          "resource": "r4",
          "score": 0.8049342619010795
        },
        {
          "resource": "r3",
          "score": 0.7949485244086778
        },
        {
          "resource": "r6",
          "score": 0.7730048601071303
        },
        {
          "resource": "r7",
          "score": 0.7539664960234894
        },
        {
          "resource": "r5",
          "score": 0.7387976057165646
        },
        {
          "resource": "r0",
          "score": 0.7133988245131181
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 0,
      "text": "Synthetic symbol 2",
      "index": 163,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9913080655363385
        },
        {
          "resource": "r1",
          "score": 0.8409073052070998
        },
        {
          "resource": "r4",
          "score": 0.8049342619010795
        },
        {
          "resource": "r3",
          "score": 0.7949485244086778
        },
        {
          "resource": "r6",
          "score": 0.7730048601071303
        },
        {
          "resource": "r7",
          "score": 0.7539664960234894
        },
        {
          "resource": "r5",
          "score": 0.7387976057165646
        },
        {
          "resource": "r0",
          "score": 0.7133988245131181
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 1,
      "text": "Synthetic symbol 3",
      "index": 164,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9931165868930689
        },
        {
          "resource": "r4",
          "score": 0.8360492610903941
        },
        {
          "resource": "r2",
          "score": 0.8158385228939433
        },
        {
          "resource": "r1",
          "score": 0.814033491541631
        },
        {
          "resource": "r6",
          "score": 0.8131185072780203
        },
        {
          "resource": "r5",
          "score": 0.7803417552068117
        },
        {
          "resource": "r7",
          "score": 0.7748146780464764
        },
        {
          "resource": "r0",
          "score": 0.7103984206052132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 2,
      "text": "Synthetic symbol 4",
      "index": 165,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9945123047516012
        },
        {
          "resource": "r3",
          "score": 0.8295076372584242
        },
        {
          "resource": "r6",
          "score": 0.8194836646574378
        },
        {
          "resource": "r2",
          "score": 0.8113366204492398
        },
        {
          "resource": "r5",
          "score": 0.8092863226909881
        },
        {
          "resource": "r1",
          "score": 0.7927374690674485
        },
        {
          "resource": "r7",
          "score": 0.7707432138712453
        },
        {
          "resource": "r0",
          "score": 0.7262401247978224
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 3,
      "text": "Synthetic symbol 5",
      "index": 166,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9939083287795734
        },
        {
          "resource": "r6",
          "score": 0.8409481667025739
        },
        {
          "resource": "r7",
          "score": 0.8094445862672526
        },
        {
          "resource": "r4",
          "score": 0.8034590290503504
        },
        {
          "resource": "r1",
          "score": 0.7683896810643727
        },
        {
          "resource": "r3",
          "score": 0.7648385057159552
        },
        {
          "resource": "r2",
          "score": 0.7409185203642927
        },
        {
          "resource": "r0",
          "score": 0.6973134811988947
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 4,
      "text": "Synthetic symbol 6",
      "index": 167,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9949654792999252
        },
        {
          "resource": "r5",
          "score": 0.8494655814532546
        },
        {
          "resource": "r7",
          "score": 0.841699354197766
        },
        {
          "resource": "r4",
          "score": 0.8264041271527592
        },
        {
          "resource": "r3",
          "score": 0.8103811833312967
        },
        {
          "resource": "r1",
          "score": 0.8046525341352583
        },
        {
          "resource": "r2",
          "score": 0.796135856197955
        },
        {
          "resource": "r0",
          "score": 0.7316370121198481
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 5,
      "text": "Synthetic symbol 7",
      "index": 168,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9935852008046252
        },
        {
          "resource": "r6",
          "score": 0.8362845648380262
        },
        {
          "resource": "r5",
          "score": 0.8213043212645131
        },
        {
          "resource": "r1",
          "score": 0.7783762312146214
        },
        {
          "resource": "r4",
          "score": 0.7690878115817054
        },
        {
          "resource": "r3",
          "score": 0.7634314800811728
        },
        {
          "resource": "r2",
          "score": 0.7530959679432472
        },
        {
          "resource": "r0",
          "score": 0.6832753580367283
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 6,
      "text": "Synthetic symbol 0",
      "index": 169,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9916774523110944
        },
        {
          "resource": "r1",
          "score": 0.7867628230891405
        },
        {
          "resource": "r4",
          "score": 0.7356160204471299
        },
        {
          "resource": "r6",
          "score": 0.727231172227105
        },
        {
          "resource": "r2",
          "score": 0.7115503566716227
        },
        {
          "resource": "r3",
          "score": 0.7075661710598778
        },
        {
          "resource": "r5",
          "score": 0.7049610746590492
        },
        {
          "resource": "r7",
          "score": 0.678429680090799
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 7,
      "text": "Synthetic symbol 1",
      "index": 170,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9905123016297175
        },
        {
          "resource": "r2",
          "score": 0.8397071755589018
        },
        {
          "resource": "r3",
          "score": 0.800122806339309
        },
        {
          "resource": "r4",
          "score": 0.791667592304117
        },
        {
          "resource": "r6",
          "score": 0.7855233987527963
        },
        {
          "resource": "r0",
          "score": 0.783169208290199
        },
        {
          "resource": "r7",
          "score": 0.7713995585734978
        },
        {
          "resource": "r5",
          "score": 0.7670486340170499
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": -1,
      "text": "Synthetic symbol 3",
      "index": 171,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9927718016206546
        },
        {
          "resource": "r4",
          "score": 0.8271198952172077
        },
        {
          "resource": "r2",
          "score": 0.8097613043480323
        },
        {
          "resource": "r6",
          "score": 0.8054563779203405
        },
        {
          "resource": "r1",
          "score": 0.8020476321796384
        },
        {
          "resource": "r5",
          "score": 0.7708357717483181
        },
        {
          "resource": "r7",
          "score": 0.7658757490377192
        },
        {
          "resource": "r0",
          "score": 0.6971758845691509
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 0,
      "text": "Synthetic symbol 3",
      "index": 172,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9931165868930689
        },
        {
          "resource": "r4",
          "score": 0.8360492610903941
        },
        {
          "resource": "r2",
          "score": 0.8158385228939433
        },
        {
          "resource": "r1",
          "score": 0.814033491541631
        },
        {
          "resource": "r6",
          "score": 0.8131185072780203
        },
        {
          "resource": "r5",
          "score": 0.7803417552068117
        },
        {
          "resource": "r7",
          "score": 0.7748146780464764
        },
        {
          "resource": "r0",
          "score": 0.7103984206052132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 1,
      "text": "Synthetic symbol 4",
      "index": 173,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9945123047516012
        },
        {
          "resource": "r3",
          "score": 0.8295076372584242
        },
        {
          "resource": "r6",
          "score": 0.8194836646574378
        },
        {
          "resource": "r2",
          "score": 0.8113366204492398
        },
        {
          "resource": "r5",
          "score": 0.8092863226909881
        },
        {
          "resource": "r1",
          "score": 0.7927374690674485
        },
        {
          "resource": "r7",
          "score": 0.7707432138712453
        },
        {
          "resource": "r0",
          "score": 0.7262401247978224
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 2,
      "text": "Synthetic symbol 5",
      "index": 174,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9939083287795734
        },
        {
          "resource": "r6",
          "score": 0.8409481667025739
        },
        {
          "resource": "r7",
          "score": 0.8094445862672526
        },
        {
          "resource": "r4",
          "score": 0.8034590290503504
        },
        {
          "resource": "r1",
          "score": 0.7683896810643727
        },
        {
          "resource": "r3",
          "score": 0.7648385057159552
        },
        {
          "resource": "r2",
          "score": 0.7409185203642927
        },
        {
          "resource": "r0",
          "score": 0.6973134811988947
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 3,
      "text": "Synthetic symbol 6",
      "index": 175,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9949654792999252
        },
        {
          "resource": "r5",
          "score": 0.8494655814532546
        },
        {
          "resource": "r7",
          "score": 0.841699354197766
        },
        {
          "resource": "r4",
          "score": 0.8264041271527592
        },
        {
          "resource": "r3",
          "score": 0.8103811833312967
        },
        {
          "resource": "r1",
          "score": 0.8046525341352583
        },
        {
          "resource": "r2",
          "score": 0.796135856197955
        },
        {
          "resource": "r0",
          "score": 0.7316370121198481
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 4,
      "text": "Synthetic symbol 7",
      "index": 176,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.993006518260197
        },
        {
          "resource": "r6",
          "score": 0.8333366940404612
        },
        {
          "resource": "r5",
          "score": 0.8162001655186559
        },
        {
          "resource": "r1",
          "score": 0.7776577748540908
        },
        {
          "resource": "r3",
          "score": 0.7689125580466311
        },
        {
          "resource": "r4",
          "score": 0.7684808822325528
        },
        {
          "resource": "r2",
          "score": 0.7531647722496133
        },
        {
          "resource": "r0",
          "score": 0.6763698523671049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 5,
      "text": "Synthetic symbol 0",
      "index": 177,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9925909676249947
        },
        {
          "resource": "r1",
          "score": 0.7810021499699059
        },
        {
          "resource": "r4",
          "score": 0.7276926495563175
        },
        {
          "resource": "r6",
          "score": 0.7184030459098176
        },
        {
          "resource": "r2",
          "score": 0.7039386072009333
        },
        {
          "resource": "r3",
          "score": 0.6996409711625718
        },
        {
          "resource": "r5",
          "score": 0.6976003670039832
        },
        {
          "resource": "r7",
          "score": 0.6745302254995135
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 6,
      "text": "Synthetic symbol 1",
      "index": 178,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9912039924161593
        },
        {
          "resource": "r2",
          "score": 0.8471297051548475
        },
        {
          "resource": "r3",
          "score": 0.7949198773982907
        },
        {
          "resource": "r4",
          "score": 0.7871289394722099
        },
        {
          "resource": "r6",
          "score": 0.7820035693822491
        },
        {
          "resource": "r0",
          "score": 0.7808333584390627
        },
        {
          "resource": "r7",
          "score": 0.766575753771333
        },
        {
          "resource": "r5",
          "score": 0.7612821705826225
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 7,
      "text": "Synthetic symbol 2",
      "index": 179,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9905581266843702
        },
        {
          "resource": "r1",
          "score": 0.8501339150648408
        },
        {
          "resource": "r4",
          "score": 0.8152118047555991
        },
        {
          "resource": "r3",
          "score": 0.8072679612806862
        },
        {
          "resource": "r6",
          "score": 0.7852070814819463
        },
        {
          "resource": "r7",
          "score": 0.7642843141732684
        },
        {
          "resource": "r5",
          "score": 0.7497831996276274
        },
        {
          "resource": "r0",
          "score": 0.7208389774078019
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": -1,
      "text": "Synthetic symbol 4",
      "index": 180,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9943287123217278
        },
        {
          "resource": "r3",
          "score": 0.8302960732947733
        },
        {
          "resource": "r6",
          "score": 0.8199446904610748
        },
        {
          "resource": "r2",
          "score": 0.8128332513328685
        },
        {
          "resource": "r5",
          "score": 0.8086605786033846
        },
        {
          "resource": "r1",
          "score": 0.7959419222491407
        },
        {
          "resource": "r7",
          "score": 0.7766637867669189
        },
        {
          "resource": "r0",
          "score": 0.7285238683015826
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 0,
      "text": "Synthetic symbol 4",
      "index": 181,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9943287123217278
        },
        {
          "resource": "r3",
          "score": 0.8302960732947733
        },
        {
          "resource": "r6",
          "score": 0.8199446904610748
        },
        {
          "resource": "r2",
          "score": 0.8128332513328685
        },
        {
          "resource": "r5",
          "score": 0.8086605786033846
        },
        {
          "resource": "r1",
          "score": 0.7959419222491407
        },
        {
          "resource": "r7",
          "score": 0.7766637867669189
        },
        {
          "resource": "r0",
          "score": 0.7285238683015826
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 1,
      "text": "Synthetic symbol 5",
      "index": 182,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9952592479500212
        },
        {
          "resource": "r6",
          "score": 0.8472236656208565
        },
        {
          "resource": "r4",
          "score": 0.8151840785729592
        },
        {
          "resource": "r7",
          "score": 0.814750139268377
        },
        {
          "resource": "r1",
          "score": 0.7807122671593615
        },
        {
          "resource": "r3",
          "score": 0.7755798866274856
        },
        {
          "resource": "r2",
          "score": 0.7506525394952772
        },
        {
          "resource": "r0",
          "score": 0.7138312303066534
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 2,
      "text": "Synthetic symbol 6",
      "index": 183,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9936209133919899
        },
        {
          "resource": "r5",
          "score": 0.8525556139295422
        },
        {
          "resource": "r7",
          "score": 0.8430676301006436
        },
        {
          "resource": "r4",
          "score": 0.8280433513729724
        },
        {
          "resource": "r3",
          "score": 0.8079814197819943
        },
        {
          "resource": "r1",
          "score": 0.8067042891387939
        },
        {
          "resource": "r2",
          "score": 0.7911600095019771
        },
        {
          "resource": "r0",
          "score": 0.7406857150350493
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 3,
      "text": "Synthetic symbol 7",
      "index": 184,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.993006518260197
        },
        {
          "resource": "r6",
          "score": 0.8333366940404612
        },
        {
          "resource": "r5",
          "score": 0.8162001655186559
        },
        {
          "resource": "r1",
          "score": 0.7776577748540908
        },
        {
          "resource": "r3",
          "score": 0.7689125580466311
        },
        {
          "resource": "r4",
          "score": 0.7684808822325528
        },
        {
          "resource": "r2",
          "score": 0.7531647722496133
        },
        {
          "resource": "r0",
          "score": 0.6763698523671049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 4,
      "text": "Synthetic symbol 0",
      "index": 185,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9925909676249947
        },
        {
          "resource": "r1",
          "score": 0.7810021499699059
        },
        {
          "resource": "r4",
          "score": 0.7276926495563175
        },
        {
          "resource": "r6",
          "score": 0.7184030459098176
        },
        {
          "resource": "r2",
          "score": 0.7039386072009333
        },
        {
          "resource": "r3",
          "score": 0.6996409711625718
        },
        {
          "resource": "r5",
          "score": 0.6976003670039832
        },
        {
          "resource": "r7",
          "score": 0.6745302254995135
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 5,
      "text": "Synthetic symbol 1",
      "index": 186,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9912039924161593
        },
        {
          "resource": "r2",
          "score": 0.8471297051548475
        },
        {
          "resource": "r3",
          "score": 0.7949198773982907
        },
        {
          "resource": "r4",
          "score": 0.7871289394722099
        },
        {
          "resource": "r6",
          "score": 0.7820035693822491
        },
        {
          "resource": "r0",
          "score": 0.7808333584390627
        },
        {
          "resource": "r7",
          "score": 0.766575753771333
        },
        {
          "resource": "r5",
          "score": 0.7612821705826225
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 6,
      "text": "Synthetic symbol 2",
      "index": 187,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9905581266843702
        },
        {
          "resource": "r1",
          "score": 0.8501339150648408
        },
        {
          "resource": "r4",
          "score": 0.8152118047555991
        },
        {
          "resource": "r3",
          "score": 0.8072679612806862
        },
        {
          "resource": "r6",
          "score": 0.7852070814819463
        },
        {
          "resource": "r7",
          "score": 0.7642843141732684
        },
        {
          "resource": "r5",
          "score": 0.7497831996276274
        },
        {
          "resource": "r0",
          "score": 0.7208389774078019
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 7,
      "text": "Synthetic symbol 3",
      "index": 188,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9918902266057421
        },
        {
          "resource": "r4",
          "score": 0.8443363100519325
        },
        {
          "resource": "r2",
          "score": 0.8300005026264367
        },
        {
          "resource": "r6",
          "score": 0.8249496543108519
        },
        {
          "resource": "r1",
          "score": 0.8240254724176161
        },
        {
          "resource": "r5",
          "score": 0.7910652209260249
        },
        {
          "resource": "r7",
          "score": 0.7848381546083224
        },
        {
          "resource": "r0",
          "score": 0.7174204743155028
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": -1,
      "text": "Synthetic symbol 5",
      "index": 189,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9922672223237384
        },
        {
          "resource": "r6",
          "score": 0.8478637461318372
        },
        {
          "resource": "r7",
          "score": 0.8155650365264735
        },
        {
          "resource": "r4",
          "score": 0.8149212532177305
        },
        {
          "resource": "r3",
          "score": 0.7760283361455261
        },
        {
          "resource": "r1",
          "score": 0.7746868788699
        },
        {
          "resource": "r2",
          "score": 0.755463178338135
        },
        {
          "resource": "r0",
          "score": 0.7003050345203049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 0,
      "text": "Synthetic symbol 5",
      "index": 190,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9922672223237384
        },
        {
          "resource": "r6",
          "score": 0.8478637461318372
        },
        {
          "resource": "r7",
          "score": 0.8155650365264735
        },
        {
          "resource": "r4",
          "score": 0.8149212532177305
        },
        {
          "resource": "r3",
          "score": 0.7760283361455261
        },
        {
          "resource": "r1",
          "score": 0.7746868788699
        },
        {
          "resource": "r2",
          "score": 0.755463178338135
        },
        {
          "resource": "r0",
          "score": 0.7003050345203049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 1,
      "text": "Synthetic symbol 6",
      "index": 191,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9933726859213171
        },
        {
          "resource": "r5",
          "score": 0.8488105063609777
        },
        {
          "resource": "r7",
          "score": 0.841209277507337
        },
        {
          "resource": "r4",
          "score": 0.8240858286608281
        },
        {
          "resource": "r3",
          "score": 0.8086035169141111
        },
        {
          "resource": "r1",
          "score": 0.8018959653424547
        },
        {
          "resource": "r2",
          "score": 0.7880576899510499
        },
        {
          "resource": "r0",
          "score": 0.7332854613683464
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 2,
      "text": "Synthetic symbol 7",
      "index": 192,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.993006518260197
        },
        {
          "resource": "r6",
          "score": 0.8333366940404612
        },
        {
          "resource": "r5",
          "score": 0.8162001655186559
        },
        {
          "resource": "r1",
          "score": 0.7776577748540908
        },
        {
          "resource": "r3",
          "score": 0.7689125580466311
        },
        {
          "resource": "r4",
          "score": 0.7684808822325528
        },
        {
          "resource": "r2",
          "score": 0.7531647722496133
        },
        {
          "resource": "r0",
          "score": 0.6763698523671049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 3,
      "text": "Synthetic symbol 0",
      "index": 193,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9925909676249947
        },
        {
          "resource": "r1",
          "score": 0.7810021499699059
        },
        {
          "resource": "r4",
          "score": 0.7276926495563175
        },
        {
          "resource": "r6",
          "score": 0.7184030459098176
        },
        {
          "resource": "r2",
          "score": 0.7039386072009333
        },
        {
          "resource": "r3",
          "score": 0.6996409711625718
        },
        {
          "resource": "r5",
          "score": 0.6976003670039832
        },
        {
          "resource": "r7",
          "score": 0.6745302254995135
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 4,
      "text": "Synthetic symbol 1",
      "index": 194,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9912039924161593
        },
        {
          "resource": "r2",
          "score": 0.8471297051548475
        },
        {
          "resource": "r3",
          "score": 0.7949198773982907
        },
        {
          "resource": "r4",
          "score": 0.7871289394722099
        },
        {
          "resource": "r6",
          "score": 0.7820035693822491
        },
        {
          "resource": "r0",
          "score": 0.7808333584390627
        },
        {
          "resource": "r7",
          "score": 0.766575753771333
        },
        {
          "resource": "r5",
          "score": 0.7612821705826225
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 5,
      "text": "Synthetic symbol 2",
      "index": 195,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9905581266843702
        },
        {
          "resource": "r1",
          "score": 0.8501339150648408
        },
        {
          "resource": "r4",
          "score": 0.8152118047555991
        },
        {
          "resource": "r3",
          "score": 0.8072679612806862
        },
        {
          "resource": "r6",
          "score": 0.7852070814819463
        },
        {
          "resource": "r7",
          "score": 0.7642843141732684
        },
        {
          "resource": "r5",
          "score": 0.7497831996276274
        },
        {
          "resource": "r0",
          "score": 0.7208389774078019
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 6,
      "text": "Synthetic symbol 3",
      "index": 196,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9923603567897
        },
        {
          "resource": "r4",
          "score": 0.830132065459913
        },
        {
          "resource": "r2",
          "score": 0.8236290640035295
        },
        {
          "resource": "r6",
          "score": 0.8161585676265125
        },
        {
          "resource": "r1",
          "score": 0.8113130130271314
        },
        {
          "resource": "r5",
          "score": 0.778955061361178
        },
        {
          "resource": "r7",
          "score": 0.7758828872926244
        },
        {
          "resource": "r0",
          "score": 0.7064848014874942
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 7,
      "text": "Synthetic symbol 4",
      "index": 197,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9926026849366908
        },
        {
          "resource": "r3",
          "score": 0.8307280771954509
        },
        {
          "resource": "r6",
          "score": 0.8194486454239378
        },
        {
          "resource": "r2",
          "score": 0.8090871478192388
        },
        {
          "resource": "r5",
          "score": 0.8090022727282877
        },
        {
          "resource": "r1",
          "score": 0.795270100699599
        },
        {
          "resource": "r7",
          "score": 0.7732781767400244
        },
        {
          "resource": "r0",
          "score": 0.7284397467795704
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": -1,
      "text": "Synthetic symbol 6",
      "index": 198,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9939926444221304
        },
        {
          "resource": "r5",
          "score": 0.8491138738109392
        },
        {
          "resource": "r7",
          "score": 0.8329608304610081
        },
        {
          "resource": "r4",
          "score": 0.8183641166018146
        },
        {
          "resource": "r3",
          "score": 0.8026762158674955
        },
        {
          "resource": "r1",
          "score": 0.7928929503267096
        },
        {
          "resource": "r2",
          "score": 0.7797937253081718
        },
        {
          "resource": "r0",
          "score": 0.7263465637844557
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 0,
      "text": "Synthetic symbol 6",
      "index": 199,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9939926444221304
        },
        {
          "resource": "r5",
          "score": 0.8491138738109392
        },
        {
          "resource": "r7",
          "score": 0.8329608304610081
        },
        {
          "resource": "r4",
          "score": 0.8183641166018146
        },
        {
          "resource": "r3",
          "score": 0.8026762158674955
        },
        {
          "resource": "r1",
          "score": 0.7928929503267096
        },
        {
          "resource": "r2",
          "score": 0.7797937253081718
        },
        {
          "resource": "r0",
          "score": 0.7263465637844557
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 1,
      "text": "Synthetic symbol 7",
      "index": 200,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.993006518260197
        },
        {
          "resource": "r6",
          "score": 0.8333366940404612
        },
        {
          "resource": "r5",
          "score": 0.8162001655186559
        },
        {
          "resource": "r1",
          "score": 0.7776577748540908
        },
        {
          "resource": "r3",
          "score": 0.7689125580466311
        },
        {
          "resource": "r4",
          "score": 0.7684808822325528
        },
        {
          "resource": "r2",
          "score": 0.7531647722496133
        },
        {
          "resource": "r0",
          "score": 0.6763698523671049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 2,
      "text": "Synthetic symbol 0",
      "index": 201,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9925909676249947
        },
        {
          "resource": "r1",
          "score": 0.7810021499699059
        },
        {
          "resource": "r4",
          "score": 0.7276926495563175
        },
        {
          "resource": "r6",
          "score": 0.7184030459098176
        },
        {
          "resource": "r2",
          "score": 0.7039386072009333
        },
        {
          "resource": "r3",
          "score": 0.6996409711625718
        },
        {
          "resource": "r5",
          "score": 0.6976003670039832
        },
        {
          "resource": "r7",
          "score": 0.6745302254995135
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 3,
      "text": "Synthetic symbol 1",
      "index": 202,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9912039924161593
        },
        {
          "resource": "r2",
          "score": 0.8471297051548475
        },
        {
          "resource": "r3",
          "score": 0.7949198773982907
        },
        {
          "resource": "r4",
          "score": 0.7871289394722099
        },
        {
          "resource": "r6",
          "score": 0.7820035693822491
        },
        {
          "resource": "r0",
          "score": 0.7808333584390627
        },
        {
          "resource": "r7",
          "score": 0.766575753771333
        },
        {
          "resource": "r5",
          "score": 0.7612821705826225
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 4,
      "text": "Synthetic symbol 2",
      "index": 203,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9905581266843702
        },
        {
          "resource": "r1",
          "score": 0.8501339150648408
        },
        {
          "resource": "r4",
          "score": 0.8152118047555991
        },
        {
          "resource": "r3",
          "score": 0.8072679612806862
        },
        {
          "resource": "r6",
          "score": 0.7852070814819463
        },
        {
          "resource": "r7",
          "score": 0.7642843141732684
        },
        {
          "resource": "r5",
          "score": 0.7497831996276274
        },
        {
          "resource": "r0",
          "score": 0.7208389774078019
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 5,
      "text": "Synthetic symbol 3",
      "index": 204,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9935026170517427
        },
        {
          "resource": "r4",
          "score": 0.8313234912580616
        },
        {
          "resource": "r2",
          "score": 0.8189096809853333
        },
        {
          "resource": "r6",
          "score": 0.8168264858170101
        },
        {
          "resource": "r1",
          "score": 0.8146100488842983
        },
        {
          "resource": "r5",
          "score": 0.7782501050628814
        },
        {
          "resource": "r7",
          "score": 0.7776877171717919
        },
        {
          "resource": "r0",
          "score": 0.7115249738672568
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 6,
      "text": "Synthetic symbol 4",
      "index": 205,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9952671098323791
        },
        {
          "resource": "r3",
          "score": 0.8224083366097458
        },
        {
          "resource": "r6",
          "score": 0.8160227399485216
        },
        {
          "resource": "r5",
          "score": 0.8108519720410131
        },
        {
          "resource": "r2",
          "score": 0.8065257391933568
        },
        {
          "resource": "r1",
          "score": 0.7910132310908597
        },
        {
          "resource": "r7",
          "score": 0.7715374272734112
        },
        {
          "resource": "r0",
          "score": 0.7244441947523466
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 7,
      "text": "Synthetic symbol 5",
      "index": 206,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9942550395982549
        },
        {
          "resource": "r6",
          "score": 0.8510502585942482
        },
        {
          "resource": "r7",
          "score": 0.8168673300399092
        },
        {
          "resource": "r4",
          "score": 0.8079480703302309
        },
        {
          "resource": "r1",
          "score": 0.781342542258557
        },
        {
          "resource": "r3",
          "score": 0.776693367598821
        },
        {
          "resource": "r2",
          "score": 0.7520021962326854
        },
        {
          "resource": "r0",
          "score": 0.7139309473641323
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": -1,
      "text": "Synthetic symbol 7",
      "index": 207,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9946691113597865
        },
        {
          "resource": "r6",
          "score": 0.8332191209837889
        },
        {
          "resource": "r5",
          "score": 0.8184086003009119
        },
        {
          "resource": "r1",
          "score": 0.7748453167416285
        },
        {
          "resource": "r4",
          "score": 0.7669297079594015
        },
        {
          "resource": "r3",
          "score": 0.7650438017240093
        },
        {
          "resource": "r2",
          "score": 0.7503944603784752
        },
        {
          "resource": "r0",
          "score": 0.6701862032976433
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 0,
      "text": "Synthetic symbol 7",
      "index": 208,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.993006518260197
        },
        {
          "resource": "r6",
          "score": 0.8333366940404612
        },
        {
          "resource": "r5",
          "score": 0.8162001655186559
        },
        {
          "resource": "r1",
          "score": 0.7776577748540908
        },
        {
          "resource": "r3",
          "score": 0.7689125580466311
        },
        {
          "resource": "r4",
          "score": 0.7684808822325528
        },
        {
          "resource": "r2",
          "score": 0.7531647722496133
        },
        {
          "resource": "r0",
          "score": 0.6763698523671049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 1,
      "text": "Synthetic symbol 0",
      "index": 209,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9925909676249947
        },
        {
          "resource": "r1",
          "score": 0.7810021499699059
        },
        {
          "resource": "r4",
          "score": 0.7276926495563175
        },
        {
          "resource": "r6",
          "score": 0.7184030459098176
        },
        {
          "resource": "r2",
          "score": 0.7039386072009333
        },
        {
          "resource": "r3",
          "score": 0.6996409711625718
        },
        {
          "resource": "r5",
          "score": 0.6976003670039832
        },
        {
          "resource": "r7",
          "score": 0.6745302254995135
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 2,
      "text": "Synthetic symbol 1",
      "index": 210,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9912039924161593
        },
        {
          "resource": "r2",
          "score": 0.8471297051548475
        },
        {
          "resource": "r3",
          "score": 0.7949198773982907
        },
        {
          "resource": "r4",
          "score": 0.7871289394722099
        },
        {
          "resource": "r6",
          "score": 0.7820035693822491
        },
        {
          "resource": "r0",
          "score": 0.7808333584390627
        },
        {
          "resource": "r7",
          "score": 0.766575753771333
        },
        {
          "resource": "r5",
          "score": 0.7612821705826225
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 3,
      "text": "Synthetic symbol 2",
      "index": 211,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9905581266843702
        },
        {
          "resource": "r1",
          "score": 0.8501339150648408
        },
        {
          "resource": "r4",
          "score": 0.8152118047555991
        },
        {
          "resource": "r3",
          "score": 0.8072679612806862
        },
        {
          "resource": "r6",
          "score": 0.7852070814819463
        },
        {
          "resource": "r7",
          "score": 0.7642843141732684
        },
        {
          "resource": "r5",
          "score": 0.7497831996276274
        },
        {
          "resource": "r0",
          "score": 0.7208389774078019
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 4,
      "text": "Synthetic symbol 3",
      "index": 212,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9931165868930689
        },
        {
          "resource": "r4",
          "score": 0.8360492610903941
        },
        {
          "resource": "r2",
          "score": 0.8158385228939433
        },
        {
          "resource": "r1",
          "score": 0.814033491541631
        },
        {
          "resource": "r6",
          "score": 0.8131185072780203
        },
        {
          "resource": "r5",
          "score": 0.7803417552068117
        },
        {
          "resource": "r7",
          "score": 0.7748146780464764
        },
        {
          "resource": "r0",
          "score": 0.7103984206052132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 5,
      "text": "Synthetic symbol 4",
      "index": 213,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 0.9945123047516012
        },
        {
          "resource": "r3",
          "score": 0.8295076372584242
        },
        {
          "resource": "r6",
          "score": 0.8194836646574378
        },
        {
          "resource": "r2",
          "score": 0.8113366204492398
        },
        {
          "resource": "r5",
          "score": 0.8092863226909881
        },
        {
          "resource": "r1",
          "score": 0.7927374690674485
        },
        {
          "resource": "r7",
          "score": 0.7707432138712453
        },
        {
          "resource": "r0",
          "score": 0.7262401247978224
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 6,
      "text": "Synthetic symbol 5",
      "index": 214,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.9939083287795734
        },
        {
          "resource": "r6",
          "score": 0.8409481667025739
        },
        {
          "resource": "r7",
          "score": 0.8094445862672526
        },
        {
          "resource": "r4",
          "score": 0.8034590290503504
        },
        {
          "resource": "r1",
          "score": 0.7683896810643727
        },
        {
          "resource": "r3",
          "score": 0.7648385057159552
        },
        {
          "resource": "r2",
          "score": 0.7409185203642927
        },
        {
          "resource": "r0",
          "score": 0.6973134811988947
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 7,
      "text": "Synthetic symbol 6",
      "index": 215,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9949654792999252
        },
        {
          "resource": "r5",
          "score": 0.8494655814532546
        },
        {
          "resource": "r7",
          "score": 0.841699354197766
        },
        {
          "resource": "r4",
          "score": 0.8264041271527592
        },
        {
          "resource": "r3",
          "score": 0.8103811833312967
        },
        {
          "resource": "r1",
          "score": 0.8046525341352583
        },
        {
          "resource": "r2",
          "score": 0.796135856197955
        },
        {
          "resource": "r0",
          "score": 0.7316370121198481
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
        "id": "=rule\n\"0\"",
        "lhs": "r0",
        "rhs": [
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          }
        ]
      },
      {
        "id": "=rule\n\"1\"",
        "lhs": "r1",
        "rhs": [
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          }
        ]
      },
      {
        "id": "=rule\n\"2\"",
        "lhs": "r2",
        "rhs": [
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          }
        ]
      },
      {
        "id": "=rule\n\"3\"",
        "lhs": "r3",
        "rhs": [
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          }
        ]
      },
      {
        "id": "=rule\n\"4\"",
        "lhs": "r4",
        "rhs": [
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          }
        ]
      },
      {
        "id": "=rule\n\"5\"",
        "lhs": "r5",
        "rhs": [
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          }
        ]
      },
      {
        "id": "=rule\n\"6\"",
        "lhs": "r6",
        "rhs": [
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          }
        ]
      },
      {
        "id": "=rule\n\"7\"",
        "lhs": "r7",
        "rhs": [
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          }
        ]
      },
      {
        "id": "=rule\n\"8\"",
        "lhs": "r0",
        "rhs": [
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          }
        ]
      },
      {
        "id": "=rule\n\"9\"",
        "lhs": "r1",
        "rhs": [
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          }
        ]
      },
      {
        "id": "=rule\n\"10\"",
        "lhs": "r2",
        "rhs": [
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          }
        ]
      },
      {
        "id": "=rule\n\"11\"",
        "lhs": "r3",
        "rhs": [
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          }
        ]
      },
      {
        "id": "=rule\n\"12\"",
        "lhs": "r4",
        "rhs": [
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          }
        ]
      },
      {
        "id": "=rule\n\"13\"",
        "lhs": "r5",
        "rhs": [
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          }
        ]
      },
      {
        "id": "=rule\n\"14\"",
        "lhs": "r6",
        "rhs": [
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          }
        ]
      },
      {
        "id": "=rule\n\"15\"",
        "lhs": "r7",
        "rhs": [
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          }
        ]
      },
      {
        "id": "=rule\n\"16\"",
        "lhs": "r0",
        "rhs": [
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          }
        ]
      },
      {
        "id": "=rule\n\"17\"",
        "lhs": "r1",
        "rhs": [
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          }
        ]
      },
      {
        "id": "=rule\n\"18\"",
        "lhs": "r2",
        "rhs": [
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          }
        ]
      },
      {
        "id": "=rule\n\"19\"",
        "lhs": "r3",
        "rhs": [
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          }
        ]
      },
      {
        "id": "=rule\n\"20\"",
        "lhs": "r4",
        "rhs": [
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          }
        ]
      },
      {
        "id": "=rule\n\"21\"",
        "lhs": "r5",
        "rhs": [
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          }
        ]
      },
      {
        "id": "=rule\n\"22\"",
        "lhs": "r6",
        "rhs": [
          {
            "ref": "r6"
          },
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          }
        ]
      },
      {
        "id": "=rule\n\"23\"",
        "lhs": "r7",
        "rhs": [
          {
            "ref": "r7"
          },
          {
            "ref": "r0"
          },
          {
            "ref": "r1"
          },
          {
            "ref": "r2"
          },
          {
            "ref": "r3"
          },
          {
            "ref": "r4"
          },
          {
            "ref": "r5"
          },
          {
            "ref": "r6"
          }
        ]
      }
    ],
    "sets": [
      {
        "id": "r0",
        "nullable": false,
        "first": [],
        "follow": [
          "$"
        ],
        "productive": false,
        "reachable": true,
        "hasRule": true
      },
      {
        "id": "r1",
        "nullable": false,
        "first": [],
        "follow": [
          "$"
        ],
        "productive": false,
        "reachable": true,
        "hasRule": true
      },
      {
        "id": "r2",
        "nullable": false,
        "first": [],
        "follow": [
          "$"
        ],
        "productive": false,
        "reachable": true,
        "hasRule": true
      },
      {
        "id": "r3",
        "nullable": false,
        "first": [],
        "follow": [
          "$"
        ],
        "productive": false,
        "reachable": true,
        "hasRule": true
      },
      {
        "id": "r4",
        "nullable": false,
        "first": [],
        "follow": [
          "$"
        ],
        "productive": false,
        "reachable": true,
        "hasRule": true
      },
      {
        "id": "r5",
        "nullable": false,
        "first": [],
        "follow": [
          "$"
        ],
        "productive": false,
        "reachable": true,
        "hasRule": true
      },
      {
        "id": "r6",
        "nullable": false,
        "first": [],
        "follow": [
          "$"
        ],
        "productive": false,
        "reachable": true,
        "hasRule": true
      },
      {
        "id": "r7",
        "nullable": false,
        "first": [],
        "follow": [
          "$"
        ],
        "productive": false,
        "reachable": true,
        "hasRule": true
      }
    ],
    "predict": [
      {
        "rule": "=rule\n\"0\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"1\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"2\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"3\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"4\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"5\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"6\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"7\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"8\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"9\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"10\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"11\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"12\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"13\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"14\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"15\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"16\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"17\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"18\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"19\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"20\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"21\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"22\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      },
      {
        "rule": "=rule\n\"23\"",
        "nullable": false,
        "first": [],
        "lookahead": []
      }
    ],
    "table": [],
    "conflicts": [],
    "directConflicts": 0,
    "ruleCount": 24,
    "scope": "LL(1) table collisions for this reviewed token grammar, not proof of language ambiguity, full parser correctness or security. $ denotes end of input; empty rhs denotes epsilon. No grammar rewriting or code execution."
  }
}

