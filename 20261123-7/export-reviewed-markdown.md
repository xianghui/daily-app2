# Synthetic workshop rank deficit

Exact equal-length bytewise XOR equations over GF(2). Received-share count is not independence. Recovered bytes satisfy reviewed equations but are not authenticated or checksummed. Any held share withholds all recovery; inconsistent equations also withhold all bytes. No files are read, repaired or uploaded.

STATUS partial | RANK 2/3 | RECEIVED 4

Count-only baseline: enough shares; false-positive sufficient claim: true

T [recovered] 0102 | source XOR: w1

P [underdetermined] no bytes released | source XOR: 

H [underdetermined] no bytes released | source XOR: 

HELD: 

CONTRADICTIONS: 

## Complete original and reviewed audit

```json

{
  "schema": "parity-folio/1",
  "appliedAt": "2026-11-22T22:05:45.468Z",
  "originalInput": {
    "title": "Synthetic workshop rank deficit",
    "blocks": [
      "T",
      "P",
      "H"
    ],
    "recipes": [
      {
        "id": "temp",
        "description": "Temperature thermometer sensor original readings alone",
        "blocks": [
          "T"
        ]
      },
      {
        "id": "mixed",
        "description": "Pressure and humidity combined XOR parity share",
        "blocks": [
          "P",
          "H"
        ]
      },
      {
        "id": "humidity",
        "description": "Humidity moisture hygrometer original readings alone",
        "blocks": [
          "H"
        ]
      }
    ],
    "records": [
      {
        "id": "w1",
        "note": "Thermometer temperature original readings",
        "hex": "0102"
      },
      {
        "id": "w2",
        "note": "Pressure humidity XOR combined parity",
        "hex": "0304"
      },
      {
        "id": "w3",
        "note": "Combined humidity pressure XOR backup",
        "hex": "0304"
      },
      {
        "id": "w4",
        "note": "Pressure plus humidity combined parity share",
        "hex": "0304"
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Thermometer temperature original readings",
      "resource": "temp",
      "aiResource": "temp",
      "evidence": [
        {
          "resource": "temp",
          "score": 0.8807058097999181
        },
        {
          "resource": "humidity",
          "score": 0.49453706784418994
        },
        {
          "resource": "mixed",
          "score": 0.11614416117644615
        }
      ],
      "decision": "approve",
      "note": "=SUM(1,2)\nReview \"complete\", preserved. ⊕"
    },
    {
      "index": 1,
      "text": "Pressure humidity XOR combined parity",
      "resource": "mixed",
      "aiResource": "mixed",
      "evidence": [
        {
          "resource": "mixed",
          "score": 0.9382573858145207
        },
        {
          "resource": "humidity",
          "score": 0.43305367513616866
        },
        {
          "resource": "temp",
          "score": 0.11824270777986276
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Combined humidity pressure XOR backup",
      "resource": "mixed",
      "aiResource": "mixed",
      "evidence": [
        {
          "resource": "mixed",
          "score": 0.77033654347319
        },
        {
          "resource": "humidity",
          "score": 0.4423816225585225
        },
        {
          "resource": "temp",
          "score": 0.15237712971435352
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "text": "Pressure plus humidity combined parity share",
      "resource": "mixed",
      "aiResource": "mixed",
      "evidence": [
        {
          "resource": "mixed",
          "score": 0.8395596739106213
        },
        {
          "resource": "humidity",
          "score": 0.4209624506291234
        },
        {
          "resource": "temp",
          "score": 0.10529560421284286
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "analysis": {
    "status": "partial",
    "rank": 2,
    "unknowns": 3,
    "deficit": 1,
    "received": 4,
    "recovered": 1,
    "held": [],
    "contradictions": [],
    "blocks": [
      {
        "id": "T",
        "status": "recovered",
        "hex": "0102",
        "sources": [
          "w1"
        ]
      },
      {
        "id": "P",
        "status": "underdetermined",
        "hex": null,
        "sources": []
      },
      {
        "id": "H",
        "status": "underdetermined",
        "hex": null,
        "sources": []
      }
    ],
    "equations": [
      {
        "blocks": [
          "T"
        ],
        "hex": "0102",
        "sources": [
          "w1"
        ]
      },
      {
        "blocks": [
          "P",
          "H"
        ],
        "hex": "0304",
        "sources": [
          "w2"
        ]
      },
      {
        "blocks": [],
        "hex": "0000",
        "sources": [
          "w3",
          "w2"
        ]
      },
      {
        "blocks": [],
        "hex": "0000",
        "sources": [
          "w4",
          "w2"
        ]
      }
    ],
    "steps": [
      {
        "pivotBlock": "T",
        "pivotSources": [
          "w1"
        ]
      },
      {
        "pivotBlock": "P",
        "pivotSources": [
          "w2"
        ]
      }
    ],
    "baselineEnough": true,
    "baselineFalsePositive": true,
    "scope": "Exact equal-length bytewise XOR equations over GF(2). Received-share count is not independence. Recovered bytes satisfy reviewed equations but are not authenticated or checksummed. Any held share withholds all recovery; inconsistent equations also withhold all bytes. No files are read, repaired or uploaded."
  }
}

```

