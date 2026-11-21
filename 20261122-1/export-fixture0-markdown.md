# Branch inventory snapshot — one row per depot and SKU

Observed-batch audit only. Unique tuples do not prove business identity, causal dependencies, future uniqueness or a safe database constraint. AI proposes field roles from descriptions, never from cell values. Exact case-sensitive strings are retained without trimming or normalization; whitespace-only cells are missing. Repeated events may be legitimate. Verify row grain before correcting data. No records are removed or merged; no external database changes.

## Exact key analysis
{
  "recordCount": 6,
  "candidateColumns": [
    "depot",
    "sku"
  ],
  "tested": 3,
  "uniqueCombinations": 1,
  "minimalKeys": [
    [
      "depot",
      "sku"
    ]
  ],
  "singles": [
    {
      "key": [
        "depot"
      ],
      "missingRows": [],
      "duplicateGroups": [
        {
          "tuple": [
            "N"
          ],
          "rows": [
            1,
            2
          ],
          "differingColumns": [
            "sku",
            "name",
            "units"
          ]
        },
        {
          "tuple": [
            "S"
          ],
          "rows": [
            3,
            4
          ],
          "differingColumns": [
            "sku",
            "name",
            "units"
          ]
        },
        {
          "tuple": [
            "E"
          ],
          "rows": [
            5,
            6
          ],
          "differingColumns": [
            "sku",
            "name",
            "units"
          ]
        }
      ],
      "collisionRows": 6,
      "distinctCompleteTuples": 3,
      "valid": false
    },
    {
      "key": [
        "sku"
      ],
      "missingRows": [],
      "duplicateGroups": [
        {
          "tuple": [
            "A"
          ],
          "rows": [
            1,
            3,
            5
          ],
          "differingColumns": [
            "depot",
            "units"
          ]
        },
        {
          "tuple": [
            "B"
          ],
          "rows": [
            2,
            4,
            6
          ],
          "differingColumns": [
            "depot",
            "units"
          ]
        }
      ],
      "collisionRows": 6,
      "distinctCompleteTuples": 2,
      "valid": false
    }
  ],
  "audit": {
    "key": [
      "sku"
    ],
    "missingRows": [],
    "duplicateGroups": [
      {
        "tuple": [
          "A"
        ],
        "rows": [
          1,
          3,
          5
        ],
        "differingColumns": [
          "depot",
          "units"
        ]
      },
      {
        "tuple": [
          "B"
        ],
        "rows": [
          2,
          4,
          6
        ],
        "differingColumns": [
          "depot",
          "units"
        ]
      }
    ],
    "collisionRows": 6,
    "distinctCompleteTuples": 2,
    "valid": false
  }
}

## Column review
### depot
Stable warehouse branch identifier code, identifies which depot holds the stock.
AI: identifier; reviewed: identifier; approve


### sku
Stable product catalog item identifier code, reused between warehouses.
AI: identifier; reviewed: identifier; approve


### name
Descriptive human-readable item display name, not a stable identity code.
AI: attribute; reviewed: attribute; approve


### units
Changing numeric quantity of stock units counted today, not an identity code.
AI: measure; reviewed: measure; approve


## Every source record
Row 1: {"depot":"N","sku":"A","name":"Ceramic cup","units":"11"}
Row 2: {"depot":"N","sku":"B","name":"Cotton towel","units":"12"}
Row 3: {"depot":"S","sku":"A","name":"Ceramic cup","units":"13"}
Row 4: {"depot":"S","sku":"B","name":"Cotton towel","units":"14"}
Row 5: {"depot":"E","sku":"A","name":"Ceramic cup","units":"15"}
Row 6: {"depot":"E","sku":"B","name":"Cotton towel","units":"16"}

## Method
MiniLM mean-pooled normalized q8 embeddings compare supplied column descriptions with three role anchors. Review identifies eligible key fields; no cell values enter AI inference. Enumerate every nonempty subset of at most 8 approved identifier fields (255 maximum). A key is valid in this batch only when no row has a blank component and every exact string tuple is distinct. Report inclusion-minimal valid subsets; exclude all supersets of another valid key from that list. Single-column baseline uses the same records and missing-value rule. Selected audit key is an independent reviewed investigation target; repeated nonblank tuples include row numbers and differing nonkey fields. Missing-key records are listed separately, never merged together. No accuracy or time-saving claim.
