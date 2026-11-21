# Synthetic library digitization

Worksheet only. Every candidate is tested independently from the ORIGINAL state; never combine grants from this report. Safe means a completion sequence exists under declared maximum claims, not guaranteed deadlock freedom in a real system. Jobs must release all resources on completion; units are interchangeable and reusable. Unsafe is not proof of an existing deadlock. Holds withhold the whole plan. No equipment or accounts are changed.

## Completion-safety checks
{
  "jobs": [
    "archive",
    "index"
  ],
  "resources": [
    "laptop",
    "scanner"
  ],
  "total": [
    4,
    2
  ],
  "allocated": [
    [
      2,
      1
    ],
    [
      1,
      0
    ]
  ],
  "max": [
    [
      4,
      2
    ],
    [
      2,
      1
    ]
  ],
  "request": [
    [
      1,
      0
    ],
    [
      1,
      0
    ]
  ],
  "current": {
    "safe": true,
    "initialFree": [
      1,
      1
    ],
    "sequence": [
      "index",
      "archive"
    ],
    "steps": [
      {
        "job": "index",
        "freeBefore": [
          1,
          1
        ],
        "remainingNeed": [
          1,
          1
        ],
        "freeAfter": [
          2,
          1
        ]
      },
      {
        "job": "archive",
        "freeBefore": [
          2,
          1
        ],
        "remainingNeed": [
          2,
          1
        ],
        "freeAfter": [
          4,
          2
        ]
      }
    ],
    "blocked": [],
    "finalFree": [
      4,
      2
    ]
  },
  "candidates": [
    {
      "job": "archive",
      "request": [
        1,
        0
      ],
      "requested": true,
      "fitsNow": true,
      "completionSafe": false,
      "witness": {
        "safe": false,
        "initialFree": [
          0,
          1
        ],
        "sequence": [],
        "steps": [],
        "blocked": [
          "archive",
          "index"
        ],
        "finalFree": [
          0,
          1
        ]
      }
    },
    {
      "job": "index",
      "request": [
        1,
        0
      ],
      "requested": true,
      "fitsNow": true,
      "completionSafe": true,
      "witness": {
        "safe": true,
        "initialFree": [
          0,
          1
        ],
        "sequence": [
          "index",
          "archive"
        ],
        "steps": [
          {
            "job": "index",
            "freeBefore": [
              0,
              1
            ],
            "remainingNeed": [
              0,
              1
            ],
            "freeAfter": [
              2,
              1
            ]
          },
          {
            "job": "archive",
            "freeBefore": [
              2,
              1
            ],
            "remainingNeed": [
              2,
              1
            ],
            "freeAfter": [
              4,
              2
            ]
          }
        ],
        "blocked": [],
        "finalFree": [
          4,
          2
        ]
      }
    }
  ],
  "baselineEligible": 2,
  "safeEligible": 1,
  "unsafeFits": 1
}

## Every reviewed source claim
### L1 / archive
Portable computer for entering archive catalog records
AI: laptop; reviewed: laptop; allocated 2; maximum 4; proposed additional 1; approve


### L2 / index
Laptop computer for typing the catalog index
AI: laptop; reviewed: laptop; allocated 1; maximum 2; proposed additional 1; approve


### L3 / archive
Flatbed scanner to digitize paper documents
AI: scanner; reviewed: scanner; allocated 1; maximum 2; proposed additional 0; approve


### L4 / index
Document scanning machine for paper pages
AI: scanner; reviewed: scanner; allocated 0; maximum 1; proposed additional 0; approve


## Method
Real MiniLM neural cosine matching reconciles resource descriptions. Similarity is not confidence or identity proof. Deterministic Banker safety checks repeatedly finish any job whose remaining maximum need fits the free vector, then release its current allocation. A sequence proves existence only under declared assumptions. Immediate-fit baseline ignores future completion. Missing job/resource cells mean zero claims. Every proposed grant is independent, NOT a combined schedule.
