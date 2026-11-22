# Maximum synthetic batch

Exact equal-length bytewise XOR equations over GF(2). Received-share count is not independence. Recovered bytes satisfy reviewed equations but are not authenticated or checksummed. Any held share withholds all recovery; inconsistent equations also withhold all bytes. No files are read, repaired or uploaded.

STATUS complete | RANK 8/8 | RECEIVED 32

Count-only baseline: enough shares; false-positive sufficient claim: false

b0 [recovered] 1111111111111111111111111111111111111111111111111111111111111111 | source XOR: =row
"0"

b1 [recovered] 1111111111111111111111111111111111111111111111111111111111111111 | source XOR: =row
"1"

b2 [recovered] 1111111111111111111111111111111111111111111111111111111111111111 | source XOR: =row
"2"

b3 [recovered] 1111111111111111111111111111111111111111111111111111111111111111 | source XOR: =row
"3"

b4 [recovered] 1111111111111111111111111111111111111111111111111111111111111111 | source XOR: =row
"4"

b5 [recovered] 1111111111111111111111111111111111111111111111111111111111111111 | source XOR: =row
"5"

b6 [recovered] 1111111111111111111111111111111111111111111111111111111111111111 | source XOR: =row
"6"

b7 [recovered] 1111111111111111111111111111111111111111111111111111111111111111 | source XOR: =row
"7"

HELD: 

CONTRADICTIONS: 

## Complete original and reviewed audit

```json

{
  "schema": "parity-folio/1",
  "appliedAt": "2026-11-22T22:11:20.221Z",
  "originalInput": {
    "title": "Maximum synthetic batch",
    "blocks": [
      "b0",
      "b1",
      "b2",
      "b3",
      "b4",
      "b5",
      "b6",
      "b7"
    ],
    "recipes": [
      {
        "id": "r0",
        "description": "Source block 0 alone",
        "blocks": [
          "b0"
        ]
      },
      {
        "id": "r1",
        "description": "Source block 1 alone",
        "blocks": [
          "b1"
        ]
      },
      {
        "id": "r2",
        "description": "Source block 2 alone",
        "blocks": [
          "b2"
        ]
      },
      {
        "id": "r3",
        "description": "Source block 3 alone",
        "blocks": [
          "b3"
        ]
      },
      {
        "id": "r4",
        "description": "Source block 4 alone",
        "blocks": [
          "b4"
        ]
      },
      {
        "id": "r5",
        "description": "Source block 5 alone",
        "blocks": [
          "b5"
        ]
      },
      {
        "id": "r6",
        "description": "Source block 6 alone",
        "blocks": [
          "b6"
        ]
      },
      {
        "id": "r7",
        "description": "Source block 7 alone",
        "blocks": [
          "b7"
        ]
      }
    ],
    "records": [
      {
        "id": "=row\n\"0\"",
        "note": "Source block 0 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"1\"",
        "note": "Source block 1 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"2\"",
        "note": "Source block 2 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"3\"",
        "note": "Source block 3 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"4\"",
        "note": "Source block 4 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"5\"",
        "note": "Source block 5 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"6\"",
        "note": "Source block 6 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"7\"",
        "note": "Source block 7 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"8\"",
        "note": "Source block 0 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"9\"",
        "note": "Source block 1 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"10\"",
        "note": "Source block 2 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"11\"",
        "note": "Source block 3 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"12\"",
        "note": "Source block 4 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"13\"",
        "note": "Source block 5 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"14\"",
        "note": "Source block 6 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"15\"",
        "note": "Source block 7 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"16\"",
        "note": "Source block 0 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"17\"",
        "note": "Source block 1 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"18\"",
        "note": "Source block 2 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"19\"",
        "note": "Source block 3 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"20\"",
        "note": "Source block 4 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"21\"",
        "note": "Source block 5 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"22\"",
        "note": "Source block 6 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"23\"",
        "note": "Source block 7 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"24\"",
        "note": "Source block 0 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"25\"",
        "note": "Source block 1 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"26\"",
        "note": "Source block 2 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"27\"",
        "note": "Source block 3 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"28\"",
        "note": "Source block 4 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"29\"",
        "note": "Source block 5 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"30\"",
        "note": "Source block 6 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        "id": "=row\n\"31\"",
        "note": "Source block 7 alone",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111"
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Source block 0 alone",
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998626449338
        },
        {
          "resource": "r1",
          "score": 0.8523438496770215
        },
        {
          "resource": "r4",
          "score": 0.8152194262382961
        },
        {
          "resource": "r3",
          "score": 0.8044042573503132
        },
        {
          "resource": "r5",
          "score": 0.7990524376815668
        },
        {
          "resource": "r6",
          "score": 0.795389787584924
        },
        {
          "resource": "r2",
          "score": 0.7911912579965286
        },
        {
          "resource": "r7",
          "score": 0.7643974536017063
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "Source block 1 alone",
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.999999753701691
        },
        {
          "resource": "r2",
          "score": 0.9021299588959526
        },
        {
          "resource": "r4",
          "score": 0.8865788366210887
        },
        {
          "resource": "r5",
          "score": 0.8841055997653476
        },
        {
          "resource": "r3",
          "score": 0.8774564414260313
        },
        {
          "resource": "r7",
          "score": 0.8531317648225393
        },
        {
          "resource": "r0",
          "score": 0.8523438496770215
        },
        {
          "resource": "r6",
          "score": 0.8506593826476737
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Source block 2 alone",
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9999997663910032
        },
        {
          "resource": "r1",
          "score": 0.9021299588959526
        },
        {
          "resource": "r4",
          "score": 0.8784274410288397
        },
        {
          "resource": "r3",
          "score": 0.8766013953210156
        },
        {
          "resource": "r5",
          "score": 0.8492790677014084
        },
        {
          "resource": "r6",
          "score": 0.8279560848264896
        },
        {
          "resource": "r7",
          "score": 0.8170032211610222
        },
        {
          "resource": "r0",
          "score": 0.7911912579965286
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "text": "Source block 3 alone",
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9999994647354595
        },
        {
          "resource": "r4",
          "score": 0.8805866811873542
        },
        {
          "resource": "r1",
          "score": 0.8774564414260313
        },
        {
          "resource": "r2",
          "score": 0.8766013953210156
        },
        {
          "resource": "r5",
          "score": 0.85824501768645
        },
        {
          "resource": "r6",
          "score": 0.8470791685396692
        },
        {
          "resource": "r7",
          "score": 0.8194189711726783
        },
        {
          "resource": "r0",
          "score": 0.8044042573503132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "text": "Source block 4 alone",
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.0000004443295771
        },
        {
          "resource": "r1",
          "score": 0.8865788366210887
        },
        {
          "resource": "r5",
          "score": 0.8861258724221451
        },
        {
          "resource": "r3",
          "score": 0.8805866811873542
        },
        {
          "resource": "r2",
          "score": 0.8784274410288397
        },
        {
          "resource": "r6",
          "score": 0.8658741555491167
        },
        {
          "resource": "r7",
          "score": 0.8387289141179246
        },
        {
          "resource": "r0",
          "score": 0.8152194262382961
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "text": "Source block 5 alone",
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999814671306
        },
        {
          "resource": "r6",
          "score": 0.8942682222803597
        },
        {
          "resource": "r4",
          "score": 0.8861258724221451
        },
        {
          "resource": "r1",
          "score": 0.8841055997653476
        },
        {
          "resource": "r7",
          "score": 0.8804643186185441
        },
        {
          "resource": "r3",
          "score": 0.85824501768645
        },
        {
          "resource": "r2",
          "score": 0.8492790677014084
        },
        {
          "resource": "r0",
          "score": 0.7990524376815668
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 6,
      "text": "Source block 6 alone",
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000295697537
        },
        {
          "resource": "r5",
          "score": 0.8942682222803597
        },
        {
          "resource": "r4",
          "score": 0.8658741555491167
        },
        {
          "resource": "r7",
          "score": 0.8652115534120299
        },
        {
          "resource": "r1",
          "score": 0.8506593826476737
        },
        {
          "resource": "r3",
          "score": 0.8470791685396692
        },
        {
          "resource": "r2",
          "score": 0.8279560848264896
        },
        {
          "resource": "r0",
          "score": 0.795389787584924
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 7,
      "text": "Source block 7 alone",
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999192189799
        },
        {
          "resource": "r5",
          "score": 0.8804643186185441
        },
        {
          "resource": "r6",
          "score": 0.8652115534120299
        },
        {
          "resource": "r1",
          "score": 0.8531317648225393
        },
        {
          "resource": "r4",
          "score": 0.8387289141179246
        },
        {
          "resource": "r3",
          "score": 0.8194189711726783
        },
        {
          "resource": "r2",
          "score": 0.8170032211610222
        },
        {
          "resource": "r0",
          "score": 0.7643974536017063
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 8,
      "text": "Source block 0 alone",
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998626449338
        },
        {
          "resource": "r1",
          "score": 0.8523438496770215
        },
        {
          "resource": "r4",
          "score": 0.8152194262382961
        },
        {
          "resource": "r3",
          "score": 0.8044042573503132
        },
        {
          "resource": "r5",
          "score": 0.7990524376815668
        },
        {
          "resource": "r6",
          "score": 0.795389787584924
        },
        {
          "resource": "r2",
          "score": 0.7911912579965286
        },
        {
          "resource": "r7",
          "score": 0.7643974536017063
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 9,
      "text": "Source block 1 alone",
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.999999753701691
        },
        {
          "resource": "r2",
          "score": 0.9021299588959526
        },
        {
          "resource": "r4",
          "score": 0.8865788366210887
        },
        {
          "resource": "r5",
          "score": 0.8841055997653476
        },
        {
          "resource": "r3",
          "score": 0.8774564414260313
        },
        {
          "resource": "r7",
          "score": 0.8531317648225393
        },
        {
          "resource": "r0",
          "score": 0.8523438496770215
        },
        {
          "resource": "r6",
          "score": 0.8506593826476737
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 10,
      "text": "Source block 2 alone",
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9999997663910032
        },
        {
          "resource": "r1",
          "score": 0.9021299588959526
        },
        {
          "resource": "r4",
          "score": 0.8784274410288397
        },
        {
          "resource": "r3",
          "score": 0.8766013953210156
        },
        {
          "resource": "r5",
          "score": 0.8492790677014084
        },
        {
          "resource": "r6",
          "score": 0.8279560848264896
        },
        {
          "resource": "r7",
          "score": 0.8170032211610222
        },
        {
          "resource": "r0",
          "score": 0.7911912579965286
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 11,
      "text": "Source block 3 alone",
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9999994647354595
        },
        {
          "resource": "r4",
          "score": 0.8805866811873542
        },
        {
          "resource": "r1",
          "score": 0.8774564414260313
        },
        {
          "resource": "r2",
          "score": 0.8766013953210156
        },
        {
          "resource": "r5",
          "score": 0.85824501768645
        },
        {
          "resource": "r6",
          "score": 0.8470791685396692
        },
        {
          "resource": "r7",
          "score": 0.8194189711726783
        },
        {
          "resource": "r0",
          "score": 0.8044042573503132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 12,
      "text": "Source block 4 alone",
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.0000004443295771
        },
        {
          "resource": "r1",
          "score": 0.8865788366210887
        },
        {
          "resource": "r5",
          "score": 0.8861258724221451
        },
        {
          "resource": "r3",
          "score": 0.8805866811873542
        },
        {
          "resource": "r2",
          "score": 0.8784274410288397
        },
        {
          "resource": "r6",
          "score": 0.8658741555491167
        },
        {
          "resource": "r7",
          "score": 0.8387289141179246
        },
        {
          "resource": "r0",
          "score": 0.8152194262382961
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 13,
      "text": "Source block 5 alone",
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999814671306
        },
        {
          "resource": "r6",
          "score": 0.8942682222803597
        },
        {
          "resource": "r4",
          "score": 0.8861258724221451
        },
        {
          "resource": "r1",
          "score": 0.8841055997653476
        },
        {
          "resource": "r7",
          "score": 0.8804643186185441
        },
        {
          "resource": "r3",
          "score": 0.85824501768645
        },
        {
          "resource": "r2",
          "score": 0.8492790677014084
        },
        {
          "resource": "r0",
          "score": 0.7990524376815668
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 14,
      "text": "Source block 6 alone",
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000295697537
        },
        {
          "resource": "r5",
          "score": 0.8942682222803597
        },
        {
          "resource": "r4",
          "score": 0.8658741555491167
        },
        {
          "resource": "r7",
          "score": 0.8652115534120299
        },
        {
          "resource": "r1",
          "score": 0.8506593826476737
        },
        {
          "resource": "r3",
          "score": 0.8470791685396692
        },
        {
          "resource": "r2",
          "score": 0.8279560848264896
        },
        {
          "resource": "r0",
          "score": 0.795389787584924
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 15,
      "text": "Source block 7 alone",
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999192189799
        },
        {
          "resource": "r5",
          "score": 0.8804643186185441
        },
        {
          "resource": "r6",
          "score": 0.8652115534120299
        },
        {
          "resource": "r1",
          "score": 0.8531317648225393
        },
        {
          "resource": "r4",
          "score": 0.8387289141179246
        },
        {
          "resource": "r3",
          "score": 0.8194189711726783
        },
        {
          "resource": "r2",
          "score": 0.8170032211610222
        },
        {
          "resource": "r0",
          "score": 0.7643974536017063
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 16,
      "text": "Source block 0 alone",
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998626449338
        },
        {
          "resource": "r1",
          "score": 0.8523438496770215
        },
        {
          "resource": "r4",
          "score": 0.8152194262382961
        },
        {
          "resource": "r3",
          "score": 0.8044042573503132
        },
        {
          "resource": "r5",
          "score": 0.7990524376815668
        },
        {
          "resource": "r6",
          "score": 0.795389787584924
        },
        {
          "resource": "r2",
          "score": 0.7911912579965286
        },
        {
          "resource": "r7",
          "score": 0.7643974536017063
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 17,
      "text": "Source block 1 alone",
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.999999753701691
        },
        {
          "resource": "r2",
          "score": 0.9021299588959526
        },
        {
          "resource": "r4",
          "score": 0.8865788366210887
        },
        {
          "resource": "r5",
          "score": 0.8841055997653476
        },
        {
          "resource": "r3",
          "score": 0.8774564414260313
        },
        {
          "resource": "r7",
          "score": 0.8531317648225393
        },
        {
          "resource": "r0",
          "score": 0.8523438496770215
        },
        {
          "resource": "r6",
          "score": 0.8506593826476737
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 18,
      "text": "Source block 2 alone",
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9999997663910032
        },
        {
          "resource": "r1",
          "score": 0.9021299588959526
        },
        {
          "resource": "r4",
          "score": 0.8784274410288397
        },
        {
          "resource": "r3",
          "score": 0.8766013953210156
        },
        {
          "resource": "r5",
          "score": 0.8492790677014084
        },
        {
          "resource": "r6",
          "score": 0.8279560848264896
        },
        {
          "resource": "r7",
          "score": 0.8170032211610222
        },
        {
          "resource": "r0",
          "score": 0.7911912579965286
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 19,
      "text": "Source block 3 alone",
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9999994647354595
        },
        {
          "resource": "r4",
          "score": 0.8805866811873542
        },
        {
          "resource": "r1",
          "score": 0.8774564414260313
        },
        {
          "resource": "r2",
          "score": 0.8766013953210156
        },
        {
          "resource": "r5",
          "score": 0.85824501768645
        },
        {
          "resource": "r6",
          "score": 0.8470791685396692
        },
        {
          "resource": "r7",
          "score": 0.8194189711726783
        },
        {
          "resource": "r0",
          "score": 0.8044042573503132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 20,
      "text": "Source block 4 alone",
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.0000004443295771
        },
        {
          "resource": "r1",
          "score": 0.8865788366210887
        },
        {
          "resource": "r5",
          "score": 0.8861258724221451
        },
        {
          "resource": "r3",
          "score": 0.8805866811873542
        },
        {
          "resource": "r2",
          "score": 0.8784274410288397
        },
        {
          "resource": "r6",
          "score": 0.8658741555491167
        },
        {
          "resource": "r7",
          "score": 0.8387289141179246
        },
        {
          "resource": "r0",
          "score": 0.8152194262382961
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 21,
      "text": "Source block 5 alone",
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999814671306
        },
        {
          "resource": "r6",
          "score": 0.8942682222803597
        },
        {
          "resource": "r4",
          "score": 0.8861258724221451
        },
        {
          "resource": "r1",
          "score": 0.8841055997653476
        },
        {
          "resource": "r7",
          "score": 0.8804643186185441
        },
        {
          "resource": "r3",
          "score": 0.85824501768645
        },
        {
          "resource": "r2",
          "score": 0.8492790677014084
        },
        {
          "resource": "r0",
          "score": 0.7990524376815668
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 22,
      "text": "Source block 6 alone",
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000295697537
        },
        {
          "resource": "r5",
          "score": 0.8942682222803597
        },
        {
          "resource": "r4",
          "score": 0.8658741555491167
        },
        {
          "resource": "r7",
          "score": 0.8652115534120299
        },
        {
          "resource": "r1",
          "score": 0.8506593826476737
        },
        {
          "resource": "r3",
          "score": 0.8470791685396692
        },
        {
          "resource": "r2",
          "score": 0.8279560848264896
        },
        {
          "resource": "r0",
          "score": 0.795389787584924
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 23,
      "text": "Source block 7 alone",
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999192189799
        },
        {
          "resource": "r5",
          "score": 0.8804643186185441
        },
        {
          "resource": "r6",
          "score": 0.8652115534120299
        },
        {
          "resource": "r1",
          "score": 0.8531317648225393
        },
        {
          "resource": "r4",
          "score": 0.8387289141179246
        },
        {
          "resource": "r3",
          "score": 0.8194189711726783
        },
        {
          "resource": "r2",
          "score": 0.8170032211610222
        },
        {
          "resource": "r0",
          "score": 0.7643974536017063
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 24,
      "text": "Source block 0 alone",
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998626449338
        },
        {
          "resource": "r1",
          "score": 0.8523438496770215
        },
        {
          "resource": "r4",
          "score": 0.8152194262382961
        },
        {
          "resource": "r3",
          "score": 0.8044042573503132
        },
        {
          "resource": "r5",
          "score": 0.7990524376815668
        },
        {
          "resource": "r6",
          "score": 0.795389787584924
        },
        {
          "resource": "r2",
          "score": 0.7911912579965286
        },
        {
          "resource": "r7",
          "score": 0.7643974536017063
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 25,
      "text": "Source block 1 alone",
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.999999753701691
        },
        {
          "resource": "r2",
          "score": 0.9021299588959526
        },
        {
          "resource": "r4",
          "score": 0.8865788366210887
        },
        {
          "resource": "r5",
          "score": 0.8841055997653476
        },
        {
          "resource": "r3",
          "score": 0.8774564414260313
        },
        {
          "resource": "r7",
          "score": 0.8531317648225393
        },
        {
          "resource": "r0",
          "score": 0.8523438496770215
        },
        {
          "resource": "r6",
          "score": 0.8506593826476737
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 26,
      "text": "Source block 2 alone",
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 0.9999997663910032
        },
        {
          "resource": "r1",
          "score": 0.9021299588959526
        },
        {
          "resource": "r4",
          "score": 0.8784274410288397
        },
        {
          "resource": "r3",
          "score": 0.8766013953210156
        },
        {
          "resource": "r5",
          "score": 0.8492790677014084
        },
        {
          "resource": "r6",
          "score": 0.8279560848264896
        },
        {
          "resource": "r7",
          "score": 0.8170032211610222
        },
        {
          "resource": "r0",
          "score": 0.7911912579965286
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 27,
      "text": "Source block 3 alone",
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9999994647354595
        },
        {
          "resource": "r4",
          "score": 0.8805866811873542
        },
        {
          "resource": "r1",
          "score": 0.8774564414260313
        },
        {
          "resource": "r2",
          "score": 0.8766013953210156
        },
        {
          "resource": "r5",
          "score": 0.85824501768645
        },
        {
          "resource": "r6",
          "score": 0.8470791685396692
        },
        {
          "resource": "r7",
          "score": 0.8194189711726783
        },
        {
          "resource": "r0",
          "score": 0.8044042573503132
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 28,
      "text": "Source block 4 alone",
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.0000004443295771
        },
        {
          "resource": "r1",
          "score": 0.8865788366210887
        },
        {
          "resource": "r5",
          "score": 0.8861258724221451
        },
        {
          "resource": "r3",
          "score": 0.8805866811873542
        },
        {
          "resource": "r2",
          "score": 0.8784274410288397
        },
        {
          "resource": "r6",
          "score": 0.8658741555491167
        },
        {
          "resource": "r7",
          "score": 0.8387289141179246
        },
        {
          "resource": "r0",
          "score": 0.8152194262382961
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 29,
      "text": "Source block 5 alone",
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999814671306
        },
        {
          "resource": "r6",
          "score": 0.8942682222803597
        },
        {
          "resource": "r4",
          "score": 0.8861258724221451
        },
        {
          "resource": "r1",
          "score": 0.8841055997653476
        },
        {
          "resource": "r7",
          "score": 0.8804643186185441
        },
        {
          "resource": "r3",
          "score": 0.85824501768645
        },
        {
          "resource": "r2",
          "score": 0.8492790677014084
        },
        {
          "resource": "r0",
          "score": 0.7990524376815668
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 30,
      "text": "Source block 6 alone",
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000295697537
        },
        {
          "resource": "r5",
          "score": 0.8942682222803597
        },
        {
          "resource": "r4",
          "score": 0.8658741555491167
        },
        {
          "resource": "r7",
          "score": 0.8652115534120299
        },
        {
          "resource": "r1",
          "score": 0.8506593826476737
        },
        {
          "resource": "r3",
          "score": 0.8470791685396692
        },
        {
          "resource": "r2",
          "score": 0.8279560848264896
        },
        {
          "resource": "r0",
          "score": 0.795389787584924
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 31,
      "text": "Source block 7 alone",
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999192189799
        },
        {
          "resource": "r5",
          "score": 0.8804643186185441
        },
        {
          "resource": "r6",
          "score": 0.8652115534120299
        },
        {
          "resource": "r1",
          "score": 0.8531317648225393
        },
        {
          "resource": "r4",
          "score": 0.8387289141179246
        },
        {
          "resource": "r3",
          "score": 0.8194189711726783
        },
        {
          "resource": "r2",
          "score": 0.8170032211610222
        },
        {
          "resource": "r0",
          "score": 0.7643974536017063
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "analysis": {
    "status": "complete",
    "rank": 8,
    "unknowns": 8,
    "deficit": 0,
    "received": 32,
    "recovered": 8,
    "held": [],
    "contradictions": [],
    "blocks": [
      {
        "id": "b0",
        "status": "recovered",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"0\""
        ]
      },
      {
        "id": "b1",
        "status": "recovered",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"1\""
        ]
      },
      {
        "id": "b2",
        "status": "recovered",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"2\""
        ]
      },
      {
        "id": "b3",
        "status": "recovered",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"3\""
        ]
      },
      {
        "id": "b4",
        "status": "recovered",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"4\""
        ]
      },
      {
        "id": "b5",
        "status": "recovered",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"5\""
        ]
      },
      {
        "id": "b6",
        "status": "recovered",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"6\""
        ]
      },
      {
        "id": "b7",
        "status": "recovered",
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"7\""
        ]
      }
    ],
    "equations": [
      {
        "blocks": [
          "b0"
        ],
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"0\""
        ]
      },
      {
        "blocks": [
          "b1"
        ],
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"1\""
        ]
      },
      {
        "blocks": [
          "b2"
        ],
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"2\""
        ]
      },
      {
        "blocks": [
          "b3"
        ],
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"3\""
        ]
      },
      {
        "blocks": [
          "b4"
        ],
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"4\""
        ]
      },
      {
        "blocks": [
          "b5"
        ],
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"5\""
        ]
      },
      {
        "blocks": [
          "b6"
        ],
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"6\""
        ]
      },
      {
        "blocks": [
          "b7"
        ],
        "hex": "1111111111111111111111111111111111111111111111111111111111111111",
        "sources": [
          "=row\n\"7\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"8\"",
          "=row\n\"0\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"9\"",
          "=row\n\"1\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"10\"",
          "=row\n\"2\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"11\"",
          "=row\n\"3\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"12\"",
          "=row\n\"4\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"13\"",
          "=row\n\"5\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"14\"",
          "=row\n\"6\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"15\"",
          "=row\n\"7\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"16\"",
          "=row\n\"0\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"17\"",
          "=row\n\"1\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"18\"",
          "=row\n\"2\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"19\"",
          "=row\n\"3\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"20\"",
          "=row\n\"4\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"21\"",
          "=row\n\"5\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"22\"",
          "=row\n\"6\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"23\"",
          "=row\n\"7\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"24\"",
          "=row\n\"0\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"25\"",
          "=row\n\"1\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"26\"",
          "=row\n\"2\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"27\"",
          "=row\n\"3\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"28\"",
          "=row\n\"4\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"29\"",
          "=row\n\"5\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"30\"",
          "=row\n\"6\""
        ]
      },
      {
        "blocks": [],
        "hex": "0000000000000000000000000000000000000000000000000000000000000000",
        "sources": [
          "=row\n\"31\"",
          "=row\n\"7\""
        ]
      }
    ],
    "steps": [
      {
        "pivotBlock": "b0",
        "pivotSources": [
          "=row\n\"0\""
        ]
      },
      {
        "pivotBlock": "b1",
        "pivotSources": [
          "=row\n\"1\""
        ]
      },
      {
        "pivotBlock": "b2",
        "pivotSources": [
          "=row\n\"2\""
        ]
      },
      {
        "pivotBlock": "b3",
        "pivotSources": [
          "=row\n\"3\""
        ]
      },
      {
        "pivotBlock": "b4",
        "pivotSources": [
          "=row\n\"4\""
        ]
      },
      {
        "pivotBlock": "b5",
        "pivotSources": [
          "=row\n\"5\""
        ]
      },
      {
        "pivotBlock": "b6",
        "pivotSources": [
          "=row\n\"6\""
        ]
      },
      {
        "pivotBlock": "b7",
        "pivotSources": [
          "=row\n\"7\""
        ]
      }
    ],
    "baselineEnough": true,
    "baselineFalsePositive": false,
    "scope": "Exact equal-length bytewise XOR equations over GF(2). Received-share count is not independence. Recovered bytes satisfy reviewed equations but are not authenticated or checksummed. Any held share withholds all recovery; inconsistent equations also withhold all bytes. No files are read, repaired or uploaded."
  }
}

```

