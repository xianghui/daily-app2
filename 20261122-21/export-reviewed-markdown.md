# Synthetic library lookup filters

Semantic similarity is not filter identity. Any held batch withholds the whole allocation. Counts from overlapping key sets must not be added. No actual Bloom filter, backend benchmark or service changes.

## Reviewed memory plan

Analytical estimates, not measured latency or accuracy. Standard independent uniform hash approximation; append-only sets, disjoint distinct-key batches, truly absent query counts and fixed backend costs. No filter construction, configuration, deletion or live service access.

TOTAL MEMORY: 10 KiB; distinct keys: 12500; absent queries: 81000

EQUAL-MEMORY BASELINE: 20644.88 estimated backend ms / 4128.98 false lookups.

OPTIMIZED: 5848.45 estimated backend ms / 1123.82 false lookups.

ALLOCATION
books | 9 KiB | k=4 | estimated FPR=5.2423e-2 | sources: L1, L3 | equal-memory baseline 5 KiB, k=2
loans | 1 KiB | k=11 | estimated FPR=3.8230e-4 | sources: L2 | equal-memory baseline 5 KiB, k=12

## Complete original and review audit

{
  "schema": "filter-budget/1",
  "originalInput": {
    "title": "Synthetic library lookup filters",
    "budgetKiB": 10,
    "filters": [
      {
        "id": "books",
        "description": "Library books ISBN published volume catalog lookup",
        "lookupMs": 5
      },
      {
        "id": "loans",
        "description": "Reader borrowing library loan checkout transaction lookup",
        "lookupMs": 15
      }
    ],
    "batches": [
      {
        "id": "L1",
        "filterNote": "Published book volumes ISBN bibliography",
        "distinct": 10000,
        "absentQueries": 20000
      },
      {
        "id": "L2",
        "filterNote": "Borrower loan checkout transactions",
        "distinct": 500,
        "absentQueries": 60000
      },
      {
        "id": "L3",
        "filterNote": "Book ISBN volumes catalog",
        "distinct": 2000,
        "absentQueries": 1000
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "id": "L1",
      "resource": "books",
      "aiResource": "books",
      "distinct": 10000,
      "absentQueries": 20000,
      "evidence": [
        {
          "resource": "books",
          "score": 0.7795766464117696
        },
        {
          "resource": "loans",
          "score": 0.3375852945371835
        }
      ],
      "decision": "approve",
      "note": "=SUM(1,2)\nReviewed \"source\", preserved."
    },
    {
      "index": 1,
      "id": "L2",
      "resource": "loans",
      "aiResource": "loans",
      "distinct": 500,
      "absentQueries": 60000,
      "evidence": [
        {
          "resource": "loans",
          "score": 0.7129294563374557
        },
        {
          "resource": "books",
          "score": 0.1213066684428145
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "id": "L3",
      "resource": "books",
      "aiResource": "books",
      "distinct": 2000,
      "absentQueries": 1000,
      "evidence": [
        {
          "resource": "books",
          "score": 0.8687909591680223
        },
        {
          "resource": "loans",
          "score": 0.3155988880309813
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Semantic similarity is not filter identity. Any held batch withholds the whole allocation. Counts from overlapping key sets must not be added. No actual Bloom filter, backend benchmark or service changes.",
  "analysis": {
    "status": "ready",
    "optimal": [
      {
        "id": "books",
        "description": "Library books ISBN published volume catalog lookup",
        "lookupMs": 5,
        "distinct": 12000,
        "absentQueries": 21000,
        "sourceIDs": [
          "L1",
          "L3"
        ],
        "blocks": 9,
        "bytes": 9216,
        "hashes": 4,
        "probability": 0.05242272055684853,
        "falseLookups": 1100.8771316938191,
        "costMs": 5504.385658469096
      },
      {
        "id": "loans",
        "description": "Reader borrowing library loan checkout transaction lookup",
        "lookupMs": 15,
        "distinct": 500,
        "absentQueries": 60000,
        "sourceIDs": [
          "L2"
        ],
        "blocks": 1,
        "bytes": 1024,
        "hashes": 11,
        "probability": 0.00038229849835792713,
        "falseLookups": 22.937909901475628,
        "costMs": 344.0686485221344
      }
    ],
    "baseline": [
      {
        "id": "books",
        "description": "Library books ISBN published volume catalog lookup",
        "lookupMs": 5,
        "distinct": 12000,
        "absentQueries": 21000,
        "sourceIDs": [
          "L1",
          "L3"
        ],
        "blocks": 5,
        "bytes": 5120,
        "hashes": 2,
        "probability": 0.19661790885238564,
        "falseLookups": 4128.976085900098,
        "costMs": 20644.88042950049
      },
      {
        "id": "loans",
        "description": "Reader borrowing library loan checkout transaction lookup",
        "lookupMs": 15,
        "distinct": 500,
        "absentQueries": 60000,
        "sourceIDs": [
          "L2"
        ],
        "blocks": 5,
        "bytes": 5120,
        "hashes": 12,
        "probability": 4.096850685830055e-11,
        "falseLookups": 0.000002458110411498033,
        "costMs": 0.00003687165617247049
      }
    ],
    "budgetKiB": 10,
    "optimalMs": 5848.45430699123,
    "baselineMs": 20644.880466372146,
    "optimalLookups": 1123.8150415952948,
    "baselineLookups": 4128.9760883582085,
    "distinct": 12500,
    "absentQueries": 81000,
    "scope": "Analytical estimates, not measured latency or accuracy. Standard independent uniform hash approximation; append-only sets, disjoint distinct-key batches, truly absent query counts and fixed backend costs. No filter construction, configuration, deletion or live service access."
  }
}

