# Synthetic library desk cards

desk-1 [ready] arrival · 25 columns / 6 lines
Welcome to the library.
Please register at
the front desk before
your first visit.

desk-2 [ready] quiet · 20 columns / 5 lines
Quiet study space.
Silence your phone
and use headphones
at a low volume.

desk-3 [ready] arrival · 25 columns / 6 lines
New visitors please
check in here.
Our team will help
you get started.

## Lossless source and review audit

```json

{
  "schema": "linecraft-desk/1",
  "appliedAt": "2026-11-22T23:12:26.109Z",
  "originalInput": {
    "title": "Synthetic library desk cards",
    "profiles": [
      {
        "id": "arrival",
        "description": "Visitor welcome reception registration check in arrival directions",
        "columns": 25,
        "maxLines": 6
      },
      {
        "id": "quiet",
        "description": "Quiet reading room silence phones headphones noise study etiquette",
        "columns": 20,
        "maxLines": 5
      },
      {
        "id": "return",
        "description": "Returning borrowed library books renewal loans overdue items",
        "columns": 28,
        "maxLines": 5
      }
    ],
    "records": [
      {
        "id": "desk-1",
        "note": "Welcome new visitors to the reception desk for registration",
        "copy": "Welcome to the library. Please register at the front desk before your first visit."
      },
      {
        "id": "desk-2",
        "note": "Please silence mobile phones in the quiet study reading room",
        "copy": "Quiet study space. Silence your phone and use headphones at a low volume."
      },
      {
        "id": "desk-3",
        "note": "Visitor arrival check in registration directions",
        "copy": "New visitors please check in here.\nOur team will help you get started."
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Welcome new visitors to the reception desk for registration",
      "resource": "arrival",
      "aiResource": "arrival",
      "evidence": [
        {
          "resource": "arrival",
          "score": 0.5994628530476079
        },
        {
          "resource": "quiet",
          "score": 0.20128621151327306
        },
        {
          "resource": "return",
          "score": 0.19787193103861694
        }
      ],
      "copy": "Welcome to the library. Please register at the front desk before your first visit.",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "Please silence mobile phones in the quiet study reading room",
      "resource": "quiet",
      "aiResource": "quiet",
      "evidence": [
        {
          "resource": "quiet",
          "score": 0.7690668202596763
        },
        {
          "resource": "return",
          "score": 0.10394773078632454
        },
        {
          "resource": "arrival",
          "score": 0.07797599109028507
        }
      ],
      "copy": "Quiet study space. Silence your phone and use headphones at a low volume.",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Visitor arrival check in registration directions",
      "resource": "arrival",
      "aiResource": "arrival",
      "evidence": [
        {
          "resource": "arrival",
          "score": 0.7858282469599788
        },
        {
          "resource": "quiet",
          "score": 0.04855555241524691
        },
        {
          "resource": "return",
          "score": -0.006495182250709988
        }
      ],
      "copy": "New visitors please check in here.\nOur team will help you get started.",
      "decision": "approve",
      "note": ""
    }
  ],
  "analysis": {
    "cards": [
      {
        "id": "desk-1",
        "profile": "arrival",
        "columns": 25,
        "maxLines": 6,
        "status": "ready",
        "error": null,
        "reviewedCopy": "Welcome to the library. Please register at the front desk before your first visit.",
        "lines": [
          "Welcome to the library.",
          "Please register at",
          "the front desk before",
          "your first visit."
        ],
        "greedy": [
          "Welcome to the library.",
          "Please register at the",
          "front desk before your",
          "first visit."
        ],
        "score": 133,
        "greedyScore": 191,
        "wordCount": 14
      },
      {
        "id": "desk-2",
        "profile": "quiet",
        "columns": 20,
        "maxLines": 5,
        "status": "ready",
        "error": null,
        "reviewedCopy": "Quiet study space. Silence your phone and use headphones at a low volume.",
        "lines": [
          "Quiet study space.",
          "Silence your phone",
          "and use headphones",
          "at a low volume."
        ],
        "greedy": [
          "Quiet study space.",
          "Silence your phone",
          "and use headphones",
          "at a low volume."
        ],
        "score": 28,
        "greedyScore": 28,
        "wordCount": 13
      },
      {
        "id": "desk-3",
        "profile": "arrival",
        "columns": 25,
        "maxLines": 6,
        "status": "ready",
        "error": null,
        "reviewedCopy": "New visitors please check in here.\nOur team will help you get started.",
        "lines": [
          "New visitors please",
          "check in here.",
          "Our team will help",
          "you get started."
        ],
        "greedy": [
          "New visitors please check",
          "in here.",
          "Our team will help you",
          "get started."
        ],
        "score": 287,
        "greedyScore": 467,
        "wordCount": 13
      }
    ],
    "ready": 3,
    "held": 0,
    "blocked": 0,
    "score": 448,
    "greedyScore": 686
  }
}

```

