# Synthetic media workshop

Worksheet only. Every candidate is tested independently from the ORIGINAL state; never combine grants from this report. Safe means a completion sequence exists under declared maximum claims, not guaranteed deadlock freedom in a real system. Jobs must release all resources on completion; units are interchangeable and reusable. Unsafe is not proof of an existing deadlock. Holds withhold the whole plan. No equipment or accounts are changed.

## Completion-safety checks
{
  "jobs": [
    "film",
    "photo"
  ],
  "resources": [
    "camera",
    "projector"
  ],
  "total": [
    3,
    2
  ],
  "allocated": [
    [
      1,
      0
    ],
    [
      1,
      1
    ]
  ],
  "max": [
    [
      3,
      1
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
      "photo",
      "film"
    ],
    "steps": [
      {
        "job": "photo",
        "freeBefore": [
          1,
          1
        ],
        "remainingNeed": [
          1,
          0
        ],
        "freeAfter": [
          2,
          2
        ]
      },
      {
        "job": "film",
        "freeBefore": [
          2,
          2
        ],
        "remainingNeed": [
          2,
          1
        ],
        "freeAfter": [
          3,
          2
        ]
      }
    ],
    "blocked": [],
    "finalFree": [
      3,
      2
    ]
  },
  "candidates": [
    {
      "job": "film",
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
          "film",
          "photo"
        ],
        "finalFree": [
          0,
          1
        ]
      }
    },
    {
      "job": "photo",
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
          "photo",
          "film"
        ],
        "steps": [
          {
            "job": "photo",
            "freeBefore": [
              0,
              1
            ],
            "remainingNeed": [
              0,
              0
            ],
            "freeAfter": [
              2,
              2
            ]
          },
          {
            "job": "film",
            "freeBefore": [
              2,
              2
            ],
            "remainingNeed": [
              2,
              1
            ],
            "freeAfter": [
              3,
              2
            ]
          }
        ],
        "blocked": [],
        "finalFree": [
          3,
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
### M1 / film
Camera equipment for filming a short video
AI: camera; reviewed: camera; allocated 1; maximum 3; proposed additional 1; approve


### M2 / photo
Digital photographic camera for still pictures
AI: camera; reviewed: camera; allocated 1; maximum 2; proposed additional 1; approve


### M3 / film
Presentation video projector display
AI: projector; reviewed: projector; allocated 0; maximum 1; proposed additional 0; approve


### M4 / photo
Projection equipment for the image presentation
AI: projector; reviewed: projector; allocated 1; maximum 1; proposed additional 0; approve


## Method
Real MiniLM neural cosine matching reconciles resource descriptions. Similarity is not confidence or identity proof. Deterministic Banker safety checks repeatedly finish any job whose remaining maximum need fits the free vector, then release its current allocation. A sequence proves existence only under declared assumptions. Immediate-fit baseline ignores future completion. Missing job/resource cells mean zero claims. Every proposed grant is independent, NOT a combined schedule.
