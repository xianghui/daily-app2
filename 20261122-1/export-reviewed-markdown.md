# Course offering register — provisional campus/course/term grain

Observed-batch audit only. Unique tuples do not prove business identity, causal dependencies, future uniqueness or a safe database constraint. AI proposes field roles from descriptions, never from cell values. Exact case-sensitive strings are retained without trimming or normalization; whitespace-only cells are missing. Repeated events may be legitimate. Verify row grain before correcting data. No records are removed or merged; no external database changes.

## Exact key analysis
{
  "recordCount": 9,
  "candidateColumns": [
    "campus",
    "course",
    "term"
  ],
  "tested": 7,
  "uniqueCombinations": 0,
  "minimalKeys": [],
  "singles": [
    {
      "key": [
        "campus"
      ],
      "missingRows": [],
      "duplicateGroups": [
        {
          "tuple": [
            "N"
          ],
          "rows": [
            1,
            2,
            3,
            4,
            9
          ],
          "differingColumns": [
            "course",
            "term",
            "room",
            "seats"
          ]
        },
        {
          "tuple": [
            "S"
          ],
          "rows": [
            5,
            6,
            7,
            8
          ],
          "differingColumns": [
            "course",
            "term",
            "room"
          ]
        }
      ],
      "collisionRows": 9,
      "distinctCompleteTuples": 2,
      "valid": false
    },
    {
      "key": [
        "course"
      ],
      "missingRows": [],
      "duplicateGroups": [
        {
          "tuple": [
            "ENG"
          ],
          "rows": [
            1,
            2,
            5,
            6,
            9
          ],
          "differingColumns": [
            "campus",
            "term",
            "room",
            "seats"
          ]
        },
        {
          "tuple": [
            "ART"
          ],
          "rows": [
            3,
            4,
            7,
            8
          ],
          "differingColumns": [
            "campus",
            "term"
          ]
        }
      ],
      "collisionRows": 9,
      "distinctCompleteTuples": 2,
      "valid": false
    },
    {
      "key": [
        "term"
      ],
      "missingRows": [],
      "duplicateGroups": [
        {
          "tuple": [
            "T1"
          ],
          "rows": [
            1,
            3,
            5,
            7,
            9
          ],
          "differingColumns": [
            "campus",
            "course",
            "room",
            "seats"
          ]
        },
        {
          "tuple": [
            "T2"
          ],
          "rows": [
            2,
            4,
            6,
            8
          ],
          "differingColumns": [
            "campus",
            "course",
            "room"
          ]
        }
      ],
      "collisionRows": 9,
      "distinctCompleteTuples": 2,
      "valid": false
    }
  ],
  "audit": {
    "key": [
      "campus",
      "course",
      "term"
    ],
    "missingRows": [],
    "duplicateGroups": [
      {
        "tuple": [
          "N",
          "ENG",
          "T1"
        ],
        "rows": [
          1,
          9
        ],
        "differingColumns": [
          "room",
          "seats"
        ]
      }
    ],
    "collisionRows": 2,
    "distinctCompleteTuples": 8,
    "valid": false
  }
}

## Column review
### campus
Stable campus identifier code, an identity key component.
AI: identifier; reviewed: identifier; approve
=SUM(1,2)
Reviewed "source", preserved.

### course
Stable course catalog identifier code, an identity key component.
AI: identifier; reviewed: identifier; approve


### term
Academic term identifier code, a stable key component identifying the course offering semester.
AI: identifier; reviewed: identifier; approve


### room
Descriptive human-readable room display label, not a stable identifier key.
AI: attribute; reviewed: attribute; approve


### seats
Changing numeric capacity count of available seats, not an identity code.
AI: measure; reviewed: measure; approve


## Every source record
Row 1: {"campus":"N","course":"ENG","term":"T1","room":"Language studio","seats":"20"}
Row 2: {"campus":"N","course":"ENG","term":"T2","room":"Language studio","seats":"20"}
Row 3: {"campus":"N","course":"ART","term":"T1","room":"Drawing room","seats":"20"}
Row 4: {"campus":"N","course":"ART","term":"T2","room":"Drawing room","seats":"20"}
Row 5: {"campus":"S","course":"ENG","term":"T1","room":"Language studio","seats":"20"}
Row 6: {"campus":"S","course":"ENG","term":"T2","room":"Language studio","seats":"20"}
Row 7: {"campus":"S","course":"ART","term":"T1","room":"Drawing room","seats":"20"}
Row 8: {"campus":"S","course":"ART","term":"T2","room":"Drawing room","seats":"20"}
Row 9: {"campus":"N","course":"ENG","term":"T1","room":"Temporary classroom","seats":"18"}

## Method
MiniLM mean-pooled normalized q8 embeddings compare supplied column descriptions with three role anchors. Review identifies eligible key fields; no cell values enter AI inference. Enumerate every nonempty subset of at most 8 approved identifier fields (255 maximum). A key is valid in this batch only when no row has a blank component and every exact string tuple is distinct. Report inclusion-minimal valid subsets; exclude all supersets of another valid key from that list. Single-column baseline uses the same records and missing-value rule. Selected audit key is an independent reviewed investigation target; repeated nonblank tuples include row numbers and differing nonkey fields. Missing-key records are listed separately, never merged together. No accuracy or time-saving claim.
