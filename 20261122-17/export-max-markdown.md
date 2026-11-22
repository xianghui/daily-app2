# Maximum ordered trace

AI similarity is not record identity. Whole-trace analysis withheld for any held operation. Array order is the supplied total execution order. No values, locks, commits, aborts, range reads or database connection. No operations executed or repaired.

## Reviewed trace worksheet

CONFLICT SERIALIZABILITY: ACYCLIC — equivalent serial order exists

Conflict serializability of the supplied single-version total R/W trace only. Not view serializability, isolation, recoverability, durability or a database execution guarantee.

FIRST-APPEARANCE BASELINE: t0 → t1 → t2 → t3 → t4 → t5 → t6 → t7; reversed conflict pairs: 0.

CONFLICT PAIRS: 24; precedence edges: 12; harmless read/read pairs ignored: 24.

SERIAL ORDER: t0 → t1 → t2 → t3 → t4 → t5 → t6 → t7

SOURCE-LINKED PRECEDENCE:
t0 → t2: =row
"1" < =row
"9" [r1 WW]; =row
"3" < =row
"11" [r3 WW]
t0 → t4: =row
"1" < =row
"17" [r1 WW]; =row
"3" < =row
"19" [r3 WW]
t0 → t6: =row
"1" < =row
"25" [r1 WW]; =row
"3" < =row
"27" [r3 WW]
t1 → t3: =row
"5" < =row
"13" [r5 WW]; =row
"7" < =row
"15" [r7 WW]
t1 → t5: =row
"5" < =row
"21" [r5 WW]; =row
"7" < =row
"23" [r7 WW]
t1 → t7: =row
"5" < =row
"29" [r5 WW]; =row
"7" < =row
"31" [r7 WW]
t2 → t4: =row
"9" < =row
"17" [r1 WW]; =row
"11" < =row
"19" [r3 WW]
t2 → t6: =row
"9" < =row
"25" [r1 WW]; =row
"11" < =row
"27" [r3 WW]
t3 → t5: =row
"13" < =row
"21" [r5 WW]; =row
"15" < =row
"23" [r7 WW]
t3 → t7: =row
"13" < =row
"29" [r5 WW]; =row
"15" < =row
"31" [r7 WW]
t4 → t6: =row
"17" < =row
"25" [r1 WW]; =row
"19" < =row
"27" [r3 WW]
t5 → t7: =row
"21" < =row
"29" [r5 WW]; =row
"23" < =row
"31" [r7 WW]

Counts describe this supplied trace, not measured time savings or model accuracy.

## Complete source-linked audit

{
  "schema": "serial-atelier/1",
  "originalInput": {
    "title": "Maximum ordered trace",
    "resources": [
      {
        "id": "r0",
        "description": "Synthetic record 0"
      },
      {
        "id": "r1",
        "description": "Synthetic record 1"
      },
      {
        "id": "r2",
        "description": "Synthetic record 2"
      },
      {
        "id": "r3",
        "description": "Synthetic record 3"
      },
      {
        "id": "r4",
        "description": "Synthetic record 4"
      },
      {
        "id": "r5",
        "description": "Synthetic record 5"
      },
      {
        "id": "r6",
        "description": "Synthetic record 6"
      },
      {
        "id": "r7",
        "description": "Synthetic record 7"
      }
    ],
    "transactions": [
      "t0",
      "t1",
      "t2",
      "t3",
      "t4",
      "t5",
      "t6",
      "t7"
    ],
    "operations": [
      {
        "id": "=row\n\"0\"",
        "transaction": "t0",
        "mode": "R",
        "resourceNote": "Synthetic record 0"
      },
      {
        "id": "=row\n\"1\"",
        "transaction": "t0",
        "mode": "W",
        "resourceNote": "Synthetic record 1"
      },
      {
        "id": "=row\n\"2\"",
        "transaction": "t0",
        "mode": "R",
        "resourceNote": "Synthetic record 2"
      },
      {
        "id": "=row\n\"3\"",
        "transaction": "t0",
        "mode": "W",
        "resourceNote": "Synthetic record 3"
      },
      {
        "id": "=row\n\"4\"",
        "transaction": "t1",
        "mode": "R",
        "resourceNote": "Synthetic record 4"
      },
      {
        "id": "=row\n\"5\"",
        "transaction": "t1",
        "mode": "W",
        "resourceNote": "Synthetic record 5"
      },
      {
        "id": "=row\n\"6\"",
        "transaction": "t1",
        "mode": "R",
        "resourceNote": "Synthetic record 6"
      },
      {
        "id": "=row\n\"7\"",
        "transaction": "t1",
        "mode": "W",
        "resourceNote": "Synthetic record 7"
      },
      {
        "id": "=row\n\"8\"",
        "transaction": "t2",
        "mode": "R",
        "resourceNote": "Synthetic record 0"
      },
      {
        "id": "=row\n\"9\"",
        "transaction": "t2",
        "mode": "W",
        "resourceNote": "Synthetic record 1"
      },
      {
        "id": "=row\n\"10\"",
        "transaction": "t2",
        "mode": "R",
        "resourceNote": "Synthetic record 2"
      },
      {
        "id": "=row\n\"11\"",
        "transaction": "t2",
        "mode": "W",
        "resourceNote": "Synthetic record 3"
      },
      {
        "id": "=row\n\"12\"",
        "transaction": "t3",
        "mode": "R",
        "resourceNote": "Synthetic record 4"
      },
      {
        "id": "=row\n\"13\"",
        "transaction": "t3",
        "mode": "W",
        "resourceNote": "Synthetic record 5"
      },
      {
        "id": "=row\n\"14\"",
        "transaction": "t3",
        "mode": "R",
        "resourceNote": "Synthetic record 6"
      },
      {
        "id": "=row\n\"15\"",
        "transaction": "t3",
        "mode": "W",
        "resourceNote": "Synthetic record 7"
      },
      {
        "id": "=row\n\"16\"",
        "transaction": "t4",
        "mode": "R",
        "resourceNote": "Synthetic record 0"
      },
      {
        "id": "=row\n\"17\"",
        "transaction": "t4",
        "mode": "W",
        "resourceNote": "Synthetic record 1"
      },
      {
        "id": "=row\n\"18\"",
        "transaction": "t4",
        "mode": "R",
        "resourceNote": "Synthetic record 2"
      },
      {
        "id": "=row\n\"19\"",
        "transaction": "t4",
        "mode": "W",
        "resourceNote": "Synthetic record 3"
      },
      {
        "id": "=row\n\"20\"",
        "transaction": "t5",
        "mode": "R",
        "resourceNote": "Synthetic record 4"
      },
      {
        "id": "=row\n\"21\"",
        "transaction": "t5",
        "mode": "W",
        "resourceNote": "Synthetic record 5"
      },
      {
        "id": "=row\n\"22\"",
        "transaction": "t5",
        "mode": "R",
        "resourceNote": "Synthetic record 6"
      },
      {
        "id": "=row\n\"23\"",
        "transaction": "t5",
        "mode": "W",
        "resourceNote": "Synthetic record 7"
      },
      {
        "id": "=row\n\"24\"",
        "transaction": "t6",
        "mode": "R",
        "resourceNote": "Synthetic record 0"
      },
      {
        "id": "=row\n\"25\"",
        "transaction": "t6",
        "mode": "W",
        "resourceNote": "Synthetic record 1"
      },
      {
        "id": "=row\n\"26\"",
        "transaction": "t6",
        "mode": "R",
        "resourceNote": "Synthetic record 2"
      },
      {
        "id": "=row\n\"27\"",
        "transaction": "t6",
        "mode": "W",
        "resourceNote": "Synthetic record 3"
      },
      {
        "id": "=row\n\"28\"",
        "transaction": "t7",
        "mode": "R",
        "resourceNote": "Synthetic record 4"
      },
      {
        "id": "=row\n\"29\"",
        "transaction": "t7",
        "mode": "W",
        "resourceNote": "Synthetic record 5"
      },
      {
        "id": "=row\n\"30\"",
        "transaction": "t7",
        "mode": "R",
        "resourceNote": "Synthetic record 6"
      },
      {
        "id": "=row\n\"31\"",
        "transaction": "t7",
        "mode": "W",
        "resourceNote": "Synthetic record 7"
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "id": "=row\n\"0\"",
      "resource": "r0",
      "aiResource": "r0",
      "transaction": "t0",
      "mode": "R",
      "evidence": [
        {
          "resource": "r0",
          "score": 1.0000002125658305
        },
        {
          "resource": "r1",
          "score": 0.8325586838734158
        },
        {
          "resource": "r4",
          "score": 0.8089705284115511
        },
        {
          "resource": "r2",
          "score": 0.8001413595090661
        },
        {
          "resource": "r3",
          "score": 0.7952264914093827
        },
        {
          "resource": "r5",
          "score": 0.7852165608156456
        },
        {
          "resource": "r6",
          "score": 0.7748925019360268
        },
        {
          "resource": "r7",
          "score": 0.7485649084353498
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "id": "=row\n\"1\"",
      "resource": "r1",
      "aiResource": "r1",
      "transaction": "t0",
      "mode": "W",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999999454449807
        },
        {
          "resource": "r2",
          "score": 0.9585032542585419
        },
        {
          "resource": "r3",
          "score": 0.9417963320707277
        },
        {
          "resource": "r4",
          "score": 0.9344243248361579
        },
        {
          "resource": "r6",
          "score": 0.896781219146485
        },
        {
          "resource": "r5",
          "score": 0.8803048060228513
        },
        {
          "resource": "r7",
          "score": 0.8692701205783271
        },
        {
          "resource": "r0",
          "score": 0.8325586838734158
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "id": "=row\n\"2\"",
      "resource": "r2",
      "aiResource": "r2",
      "transaction": "t0",
      "mode": "R",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000046135264
        },
        {
          "resource": "r1",
          "score": 0.9585032542585419
        },
        {
          "resource": "r3",
          "score": 0.940002599172405
        },
        {
          "resource": "r4",
          "score": 0.9313783986900817
        },
        {
          "resource": "r6",
          "score": 0.8891232805621893
        },
        {
          "resource": "r5",
          "score": 0.8729237968725578
        },
        {
          "resource": "r7",
          "score": 0.8508245169523697
        },
        {
          "resource": "r0",
          "score": 0.8001413595090661
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "id": "=row\n\"3\"",
      "resource": "r3",
      "aiResource": "r3",
      "transaction": "t0",
      "mode": "W",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9999999396302537
        },
        {
          "resource": "r4",
          "score": 0.9456980664044816
        },
        {
          "resource": "r1",
          "score": 0.9417963320707277
        },
        {
          "resource": "r2",
          "score": 0.940002599172405
        },
        {
          "resource": "r6",
          "score": 0.9032678211967752
        },
        {
          "resource": "r5",
          "score": 0.8939573939448826
        },
        {
          "resource": "r7",
          "score": 0.8613371938607695
        },
        {
          "resource": "r0",
          "score": 0.7952264914093827
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "id": "=row\n\"4\"",
      "resource": "r4",
      "aiResource": "r4",
      "transaction": "t1",
      "mode": "R",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.0000000323574778
        },
        {
          "resource": "r3",
          "score": 0.9456980664044816
        },
        {
          "resource": "r1",
          "score": 0.9344243248361579
        },
        {
          "resource": "r2",
          "score": 0.9313783986900817
        },
        {
          "resource": "r6",
          "score": 0.9091879163847827
        },
        {
          "resource": "r5",
          "score": 0.9061301432813375
        },
        {
          "resource": "r7",
          "score": 0.87721041511249
        },
        {
          "resource": "r0",
          "score": 0.8089705284115511
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "id": "=row\n\"5\"",
      "resource": "r5",
      "aiResource": "r5",
      "transaction": "t1",
      "mode": "W",
      "evidence": [
        {
          "resource": "r5",
          "score": 1.0000002101178302
        },
        {
          "resource": "r6",
          "score": 0.9084369988603231
        },
        {
          "resource": "r4",
          "score": 0.9061301432813375
        },
        {
          "resource": "r3",
          "score": 0.8939573939448826
        },
        {
          "resource": "r7",
          "score": 0.8873488482515675
        },
        {
          "resource": "r1",
          "score": 0.8803048060228513
        },
        {
          "resource": "r2",
          "score": 0.8729237968725578
        },
        {
          "resource": "r0",
          "score": 0.7852165608156456
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 6,
      "id": "=row\n\"6\"",
      "resource": "r6",
      "aiResource": "r6",
      "transaction": "t1",
      "mode": "R",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9999996843639248
        },
        {
          "resource": "r4",
          "score": 0.9091879163847827
        },
        {
          "resource": "r5",
          "score": 0.9084369988603231
        },
        {
          "resource": "r3",
          "score": 0.9032678211967752
        },
        {
          "resource": "r7",
          "score": 0.8986272822936323
        },
        {
          "resource": "r1",
          "score": 0.896781219146485
        },
        {
          "resource": "r2",
          "score": 0.8891232805621893
        },
        {
          "resource": "r0",
          "score": 0.7748925019360268
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 7,
      "id": "=row\n\"7\"",
      "resource": "r7",
      "aiResource": "r7",
      "transaction": "t1",
      "mode": "W",
      "evidence": [
        {
          "resource": "r7",
          "score": 1.0000001142086132
        },
        {
          "resource": "r6",
          "score": 0.8986272822936323
        },
        {
          "resource": "r5",
          "score": 0.8873488482515675
        },
        {
          "resource": "r4",
          "score": 0.87721041511249
        },
        {
          "resource": "r1",
          "score": 0.8692701205783271
        },
        {
          "resource": "r3",
          "score": 0.8613371938607695
        },
        {
          "resource": "r2",
          "score": 0.8508245169523697
        },
        {
          "resource": "r0",
          "score": 0.7485649084353498
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 8,
      "id": "=row\n\"8\"",
      "resource": "r0",
      "aiResource": "r0",
      "transaction": "t2",
      "mode": "R",
      "evidence": [
        {
          "resource": "r0",
          "score": 1.0000002125658305
        },
        {
          "resource": "r1",
          "score": 0.8325586838734158
        },
        {
          "resource": "r4",
          "score": 0.8089705284115511
        },
        {
          "resource": "r2",
          "score": 0.8001413595090661
        },
        {
          "resource": "r3",
          "score": 0.7952264914093827
        },
        {
          "resource": "r5",
          "score": 0.7852165608156456
        },
        {
          "resource": "r6",
          "score": 0.7748925019360268
        },
        {
          "resource": "r7",
          "score": 0.7485649084353498
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 9,
      "id": "=row\n\"9\"",
      "resource": "r1",
      "aiResource": "r1",
      "transaction": "t2",
      "mode": "W",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999999454449807
        },
        {
          "resource": "r2",
          "score": 0.9585032542585419
        },
        {
          "resource": "r3",
          "score": 0.9417963320707277
        },
        {
          "resource": "r4",
          "score": 0.9344243248361579
        },
        {
          "resource": "r6",
          "score": 0.896781219146485
        },
        {
          "resource": "r5",
          "score": 0.8803048060228513
        },
        {
          "resource": "r7",
          "score": 0.8692701205783271
        },
        {
          "resource": "r0",
          "score": 0.8325586838734158
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 10,
      "id": "=row\n\"10\"",
      "resource": "r2",
      "aiResource": "r2",
      "transaction": "t2",
      "mode": "R",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000046135264
        },
        {
          "resource": "r1",
          "score": 0.9585032542585419
        },
        {
          "resource": "r3",
          "score": 0.940002599172405
        },
        {
          "resource": "r4",
          "score": 0.9313783986900817
        },
        {
          "resource": "r6",
          "score": 0.8891232805621893
        },
        {
          "resource": "r5",
          "score": 0.8729237968725578
        },
        {
          "resource": "r7",
          "score": 0.8508245169523697
        },
        {
          "resource": "r0",
          "score": 0.8001413595090661
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 11,
      "id": "=row\n\"11\"",
      "resource": "r3",
      "aiResource": "r3",
      "transaction": "t2",
      "mode": "W",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9999999396302537
        },
        {
          "resource": "r4",
          "score": 0.9456980664044816
        },
        {
          "resource": "r1",
          "score": 0.9417963320707277
        },
        {
          "resource": "r2",
          "score": 0.940002599172405
        },
        {
          "resource": "r6",
          "score": 0.9032678211967752
        },
        {
          "resource": "r5",
          "score": 0.8939573939448826
        },
        {
          "resource": "r7",
          "score": 0.8613371938607695
        },
        {
          "resource": "r0",
          "score": 0.7952264914093827
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 12,
      "id": "=row\n\"12\"",
      "resource": "r4",
      "aiResource": "r4",
      "transaction": "t3",
      "mode": "R",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.0000000323574778
        },
        {
          "resource": "r3",
          "score": 0.9456980664044816
        },
        {
          "resource": "r1",
          "score": 0.9344243248361579
        },
        {
          "resource": "r2",
          "score": 0.9313783986900817
        },
        {
          "resource": "r6",
          "score": 0.9091879163847827
        },
        {
          "resource": "r5",
          "score": 0.9061301432813375
        },
        {
          "resource": "r7",
          "score": 0.87721041511249
        },
        {
          "resource": "r0",
          "score": 0.8089705284115511
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 13,
      "id": "=row\n\"13\"",
      "resource": "r5",
      "aiResource": "r5",
      "transaction": "t3",
      "mode": "W",
      "evidence": [
        {
          "resource": "r5",
          "score": 1.0000002101178302
        },
        {
          "resource": "r6",
          "score": 0.9084369988603231
        },
        {
          "resource": "r4",
          "score": 0.9061301432813375
        },
        {
          "resource": "r3",
          "score": 0.8939573939448826
        },
        {
          "resource": "r7",
          "score": 0.8873488482515675
        },
        {
          "resource": "r1",
          "score": 0.8803048060228513
        },
        {
          "resource": "r2",
          "score": 0.8729237968725578
        },
        {
          "resource": "r0",
          "score": 0.7852165608156456
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 14,
      "id": "=row\n\"14\"",
      "resource": "r6",
      "aiResource": "r6",
      "transaction": "t3",
      "mode": "R",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9999996843639248
        },
        {
          "resource": "r4",
          "score": 0.9091879163847827
        },
        {
          "resource": "r5",
          "score": 0.9084369988603231
        },
        {
          "resource": "r3",
          "score": 0.9032678211967752
        },
        {
          "resource": "r7",
          "score": 0.8986272822936323
        },
        {
          "resource": "r1",
          "score": 0.896781219146485
        },
        {
          "resource": "r2",
          "score": 0.8891232805621893
        },
        {
          "resource": "r0",
          "score": 0.7748925019360268
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 15,
      "id": "=row\n\"15\"",
      "resource": "r7",
      "aiResource": "r7",
      "transaction": "t3",
      "mode": "W",
      "evidence": [
        {
          "resource": "r7",
          "score": 1.0000001142086132
        },
        {
          "resource": "r6",
          "score": 0.8986272822936323
        },
        {
          "resource": "r5",
          "score": 0.8873488482515675
        },
        {
          "resource": "r4",
          "score": 0.87721041511249
        },
        {
          "resource": "r1",
          "score": 0.8692701205783271
        },
        {
          "resource": "r3",
          "score": 0.8613371938607695
        },
        {
          "resource": "r2",
          "score": 0.8508245169523697
        },
        {
          "resource": "r0",
          "score": 0.7485649084353498
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 16,
      "id": "=row\n\"16\"",
      "resource": "r0",
      "aiResource": "r0",
      "transaction": "t4",
      "mode": "R",
      "evidence": [
        {
          "resource": "r0",
          "score": 1.0000002125658305
        },
        {
          "resource": "r1",
          "score": 0.8325586838734158
        },
        {
          "resource": "r4",
          "score": 0.8089705284115511
        },
        {
          "resource": "r2",
          "score": 0.8001413595090661
        },
        {
          "resource": "r3",
          "score": 0.7952264914093827
        },
        {
          "resource": "r5",
          "score": 0.7852165608156456
        },
        {
          "resource": "r6",
          "score": 0.7748925019360268
        },
        {
          "resource": "r7",
          "score": 0.7485649084353498
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 17,
      "id": "=row\n\"17\"",
      "resource": "r1",
      "aiResource": "r1",
      "transaction": "t4",
      "mode": "W",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999999454449807
        },
        {
          "resource": "r2",
          "score": 0.9585032542585419
        },
        {
          "resource": "r3",
          "score": 0.9417963320707277
        },
        {
          "resource": "r4",
          "score": 0.9344243248361579
        },
        {
          "resource": "r6",
          "score": 0.896781219146485
        },
        {
          "resource": "r5",
          "score": 0.8803048060228513
        },
        {
          "resource": "r7",
          "score": 0.8692701205783271
        },
        {
          "resource": "r0",
          "score": 0.8325586838734158
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 18,
      "id": "=row\n\"18\"",
      "resource": "r2",
      "aiResource": "r2",
      "transaction": "t4",
      "mode": "R",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000046135264
        },
        {
          "resource": "r1",
          "score": 0.9585032542585419
        },
        {
          "resource": "r3",
          "score": 0.940002599172405
        },
        {
          "resource": "r4",
          "score": 0.9313783986900817
        },
        {
          "resource": "r6",
          "score": 0.8891232805621893
        },
        {
          "resource": "r5",
          "score": 0.8729237968725578
        },
        {
          "resource": "r7",
          "score": 0.8508245169523697
        },
        {
          "resource": "r0",
          "score": 0.8001413595090661
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 19,
      "id": "=row\n\"19\"",
      "resource": "r3",
      "aiResource": "r3",
      "transaction": "t4",
      "mode": "W",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9999999396302537
        },
        {
          "resource": "r4",
          "score": 0.9456980664044816
        },
        {
          "resource": "r1",
          "score": 0.9417963320707277
        },
        {
          "resource": "r2",
          "score": 0.940002599172405
        },
        {
          "resource": "r6",
          "score": 0.9032678211967752
        },
        {
          "resource": "r5",
          "score": 0.8939573939448826
        },
        {
          "resource": "r7",
          "score": 0.8613371938607695
        },
        {
          "resource": "r0",
          "score": 0.7952264914093827
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 20,
      "id": "=row\n\"20\"",
      "resource": "r4",
      "aiResource": "r4",
      "transaction": "t5",
      "mode": "R",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.0000000323574778
        },
        {
          "resource": "r3",
          "score": 0.9456980664044816
        },
        {
          "resource": "r1",
          "score": 0.9344243248361579
        },
        {
          "resource": "r2",
          "score": 0.9313783986900817
        },
        {
          "resource": "r6",
          "score": 0.9091879163847827
        },
        {
          "resource": "r5",
          "score": 0.9061301432813375
        },
        {
          "resource": "r7",
          "score": 0.87721041511249
        },
        {
          "resource": "r0",
          "score": 0.8089705284115511
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 21,
      "id": "=row\n\"21\"",
      "resource": "r5",
      "aiResource": "r5",
      "transaction": "t5",
      "mode": "W",
      "evidence": [
        {
          "resource": "r5",
          "score": 1.0000002101178302
        },
        {
          "resource": "r6",
          "score": 0.9084369988603231
        },
        {
          "resource": "r4",
          "score": 0.9061301432813375
        },
        {
          "resource": "r3",
          "score": 0.8939573939448826
        },
        {
          "resource": "r7",
          "score": 0.8873488482515675
        },
        {
          "resource": "r1",
          "score": 0.8803048060228513
        },
        {
          "resource": "r2",
          "score": 0.8729237968725578
        },
        {
          "resource": "r0",
          "score": 0.7852165608156456
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 22,
      "id": "=row\n\"22\"",
      "resource": "r6",
      "aiResource": "r6",
      "transaction": "t5",
      "mode": "R",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9999996843639248
        },
        {
          "resource": "r4",
          "score": 0.9091879163847827
        },
        {
          "resource": "r5",
          "score": 0.9084369988603231
        },
        {
          "resource": "r3",
          "score": 0.9032678211967752
        },
        {
          "resource": "r7",
          "score": 0.8986272822936323
        },
        {
          "resource": "r1",
          "score": 0.896781219146485
        },
        {
          "resource": "r2",
          "score": 0.8891232805621893
        },
        {
          "resource": "r0",
          "score": 0.7748925019360268
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 23,
      "id": "=row\n\"23\"",
      "resource": "r7",
      "aiResource": "r7",
      "transaction": "t5",
      "mode": "W",
      "evidence": [
        {
          "resource": "r7",
          "score": 1.0000001142086132
        },
        {
          "resource": "r6",
          "score": 0.8986272822936323
        },
        {
          "resource": "r5",
          "score": 0.8873488482515675
        },
        {
          "resource": "r4",
          "score": 0.87721041511249
        },
        {
          "resource": "r1",
          "score": 0.8692701205783271
        },
        {
          "resource": "r3",
          "score": 0.8613371938607695
        },
        {
          "resource": "r2",
          "score": 0.8508245169523697
        },
        {
          "resource": "r0",
          "score": 0.7485649084353498
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 24,
      "id": "=row\n\"24\"",
      "resource": "r0",
      "aiResource": "r0",
      "transaction": "t6",
      "mode": "R",
      "evidence": [
        {
          "resource": "r0",
          "score": 1.0000002125658305
        },
        {
          "resource": "r1",
          "score": 0.8325586838734158
        },
        {
          "resource": "r4",
          "score": 0.8089705284115511
        },
        {
          "resource": "r2",
          "score": 0.8001413595090661
        },
        {
          "resource": "r3",
          "score": 0.7952264914093827
        },
        {
          "resource": "r5",
          "score": 0.7852165608156456
        },
        {
          "resource": "r6",
          "score": 0.7748925019360268
        },
        {
          "resource": "r7",
          "score": 0.7485649084353498
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 25,
      "id": "=row\n\"25\"",
      "resource": "r1",
      "aiResource": "r1",
      "transaction": "t6",
      "mode": "W",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999999454449807
        },
        {
          "resource": "r2",
          "score": 0.9585032542585419
        },
        {
          "resource": "r3",
          "score": 0.9417963320707277
        },
        {
          "resource": "r4",
          "score": 0.9344243248361579
        },
        {
          "resource": "r6",
          "score": 0.896781219146485
        },
        {
          "resource": "r5",
          "score": 0.8803048060228513
        },
        {
          "resource": "r7",
          "score": 0.8692701205783271
        },
        {
          "resource": "r0",
          "score": 0.8325586838734158
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 26,
      "id": "=row\n\"26\"",
      "resource": "r2",
      "aiResource": "r2",
      "transaction": "t6",
      "mode": "R",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000046135264
        },
        {
          "resource": "r1",
          "score": 0.9585032542585419
        },
        {
          "resource": "r3",
          "score": 0.940002599172405
        },
        {
          "resource": "r4",
          "score": 0.9313783986900817
        },
        {
          "resource": "r6",
          "score": 0.8891232805621893
        },
        {
          "resource": "r5",
          "score": 0.8729237968725578
        },
        {
          "resource": "r7",
          "score": 0.8508245169523697
        },
        {
          "resource": "r0",
          "score": 0.8001413595090661
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 27,
      "id": "=row\n\"27\"",
      "resource": "r3",
      "aiResource": "r3",
      "transaction": "t6",
      "mode": "W",
      "evidence": [
        {
          "resource": "r3",
          "score": 0.9999999396302537
        },
        {
          "resource": "r4",
          "score": 0.9456980664044816
        },
        {
          "resource": "r1",
          "score": 0.9417963320707277
        },
        {
          "resource": "r2",
          "score": 0.940002599172405
        },
        {
          "resource": "r6",
          "score": 0.9032678211967752
        },
        {
          "resource": "r5",
          "score": 0.8939573939448826
        },
        {
          "resource": "r7",
          "score": 0.8613371938607695
        },
        {
          "resource": "r0",
          "score": 0.7952264914093827
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 28,
      "id": "=row\n\"28\"",
      "resource": "r4",
      "aiResource": "r4",
      "transaction": "t7",
      "mode": "R",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.0000000323574778
        },
        {
          "resource": "r3",
          "score": 0.9456980664044816
        },
        {
          "resource": "r1",
          "score": 0.9344243248361579
        },
        {
          "resource": "r2",
          "score": 0.9313783986900817
        },
        {
          "resource": "r6",
          "score": 0.9091879163847827
        },
        {
          "resource": "r5",
          "score": 0.9061301432813375
        },
        {
          "resource": "r7",
          "score": 0.87721041511249
        },
        {
          "resource": "r0",
          "score": 0.8089705284115511
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 29,
      "id": "=row\n\"29\"",
      "resource": "r5",
      "aiResource": "r5",
      "transaction": "t7",
      "mode": "W",
      "evidence": [
        {
          "resource": "r5",
          "score": 1.0000002101178302
        },
        {
          "resource": "r6",
          "score": 0.9084369988603231
        },
        {
          "resource": "r4",
          "score": 0.9061301432813375
        },
        {
          "resource": "r3",
          "score": 0.8939573939448826
        },
        {
          "resource": "r7",
          "score": 0.8873488482515675
        },
        {
          "resource": "r1",
          "score": 0.8803048060228513
        },
        {
          "resource": "r2",
          "score": 0.8729237968725578
        },
        {
          "resource": "r0",
          "score": 0.7852165608156456
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 30,
      "id": "=row\n\"30\"",
      "resource": "r6",
      "aiResource": "r6",
      "transaction": "t7",
      "mode": "R",
      "evidence": [
        {
          "resource": "r6",
          "score": 0.9999996843639248
        },
        {
          "resource": "r4",
          "score": 0.9091879163847827
        },
        {
          "resource": "r5",
          "score": 0.9084369988603231
        },
        {
          "resource": "r3",
          "score": 0.9032678211967752
        },
        {
          "resource": "r7",
          "score": 0.8986272822936323
        },
        {
          "resource": "r1",
          "score": 0.896781219146485
        },
        {
          "resource": "r2",
          "score": 0.8891232805621893
        },
        {
          "resource": "r0",
          "score": 0.7748925019360268
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 31,
      "id": "=row\n\"31\"",
      "resource": "r7",
      "aiResource": "r7",
      "transaction": "t7",
      "mode": "W",
      "evidence": [
        {
          "resource": "r7",
          "score": 1.0000001142086132
        },
        {
          "resource": "r6",
          "score": 0.8986272822936323
        },
        {
          "resource": "r5",
          "score": 0.8873488482515675
        },
        {
          "resource": "r4",
          "score": 0.87721041511249
        },
        {
          "resource": "r1",
          "score": 0.8692701205783271
        },
        {
          "resource": "r3",
          "score": 0.8613371938607695
        },
        {
          "resource": "r2",
          "score": 0.8508245169523697
        },
        {
          "resource": "r0",
          "score": 0.7485649084353498
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "AI similarity is not record identity. Whole-trace analysis withheld for any held operation. Array order is the supplied total execution order. No values, locks, commits, aborts, range reads or database connection. No operations executed or repaired.",
  "analysis": {
    "status": "ready",
    "serializable": true,
    "sharedCrossTransactionPairs": 48,
    "readReadPairsIgnored": 24,
    "conflictingPairs": 24,
    "edges": [
      {
        "from": "t0",
        "to": "t2",
        "witnesses": [
          {
            "from": "t0",
            "to": "t2",
            "resource": "r1",
            "before": "=row\n\"1\"",
            "after": "=row\n\"9\"",
            "beforeIndex": 1,
            "afterIndex": 9,
            "modes": "WW"
          },
          {
            "from": "t0",
            "to": "t2",
            "resource": "r3",
            "before": "=row\n\"3\"",
            "after": "=row\n\"11\"",
            "beforeIndex": 3,
            "afterIndex": 11,
            "modes": "WW"
          }
        ]
      },
      {
        "from": "t0",
        "to": "t4",
        "witnesses": [
          {
            "from": "t0",
            "to": "t4",
            "resource": "r1",
            "before": "=row\n\"1\"",
            "after": "=row\n\"17\"",
            "beforeIndex": 1,
            "afterIndex": 17,
            "modes": "WW"
          },
          {
            "from": "t0",
            "to": "t4",
            "resource": "r3",
            "before": "=row\n\"3\"",
            "after": "=row\n\"19\"",
            "beforeIndex": 3,
            "afterIndex": 19,
            "modes": "WW"
          }
        ]
      },
      {
        "from": "t0",
        "to": "t6",
        "witnesses": [
          {
            "from": "t0",
            "to": "t6",
            "resource": "r1",
            "before": "=row\n\"1\"",
            "after": "=row\n\"25\"",
            "beforeIndex": 1,
            "afterIndex": 25,
            "modes": "WW"
          },
          {
            "from": "t0",
            "to": "t6",
            "resource": "r3",
            "before": "=row\n\"3\"",
            "after": "=row\n\"27\"",
            "beforeIndex": 3,
            "afterIndex": 27,
            "modes": "WW"
          }
        ]
      },
      {
        "from": "t1",
        "to": "t3",
        "witnesses": [
          {
            "from": "t1",
            "to": "t3",
            "resource": "r5",
            "before": "=row\n\"5\"",
            "after": "=row\n\"13\"",
            "beforeIndex": 5,
            "afterIndex": 13,
            "modes": "WW"
          },
          {
            "from": "t1",
            "to": "t3",
            "resource": "r7",
            "before": "=row\n\"7\"",
            "after": "=row\n\"15\"",
            "beforeIndex": 7,
            "afterIndex": 15,
            "modes": "WW"
          }
        ]
      },
      {
        "from": "t1",
        "to": "t5",
        "witnesses": [
          {
            "from": "t1",
            "to": "t5",
            "resource": "r5",
            "before": "=row\n\"5\"",
            "after": "=row\n\"21\"",
            "beforeIndex": 5,
            "afterIndex": 21,
            "modes": "WW"
          },
          {
            "from": "t1",
            "to": "t5",
            "resource": "r7",
            "before": "=row\n\"7\"",
            "after": "=row\n\"23\"",
            "beforeIndex": 7,
            "afterIndex": 23,
            "modes": "WW"
          }
        ]
      },
      {
        "from": "t1",
        "to": "t7",
        "witnesses": [
          {
            "from": "t1",
            "to": "t7",
            "resource": "r5",
            "before": "=row\n\"5\"",
            "after": "=row\n\"29\"",
            "beforeIndex": 5,
            "afterIndex": 29,
            "modes": "WW"
          },
          {
            "from": "t1",
            "to": "t7",
            "resource": "r7",
            "before": "=row\n\"7\"",
            "after": "=row\n\"31\"",
            "beforeIndex": 7,
            "afterIndex": 31,
            "modes": "WW"
          }
        ]
      },
      {
        "from": "t2",
        "to": "t4",
        "witnesses": [
          {
            "from": "t2",
            "to": "t4",
            "resource": "r1",
            "before": "=row\n\"9\"",
            "after": "=row\n\"17\"",
            "beforeIndex": 9,
            "afterIndex": 17,
            "modes": "WW"
          },
          {
            "from": "t2",
            "to": "t4",
            "resource": "r3",
            "before": "=row\n\"11\"",
            "after": "=row\n\"19\"",
            "beforeIndex": 11,
            "afterIndex": 19,
            "modes": "WW"
          }
        ]
      },
      {
        "from": "t2",
        "to": "t6",
        "witnesses": [
          {
            "from": "t2",
            "to": "t6",
            "resource": "r1",
            "before": "=row\n\"9\"",
            "after": "=row\n\"25\"",
            "beforeIndex": 9,
            "afterIndex": 25,
            "modes": "WW"
          },
          {
            "from": "t2",
            "to": "t6",
            "resource": "r3",
            "before": "=row\n\"11\"",
            "after": "=row\n\"27\"",
            "beforeIndex": 11,
            "afterIndex": 27,
            "modes": "WW"
          }
        ]
      },
      {
        "from": "t3",
        "to": "t5",
        "witnesses": [
          {
            "from": "t3",
            "to": "t5",
            "resource": "r5",
            "before": "=row\n\"13\"",
            "after": "=row\n\"21\"",
            "beforeIndex": 13,
            "afterIndex": 21,
            "modes": "WW"
          },
          {
            "from": "t3",
            "to": "t5",
            "resource": "r7",
            "before": "=row\n\"15\"",
            "after": "=row\n\"23\"",
            "beforeIndex": 15,
            "afterIndex": 23,
            "modes": "WW"
          }
        ]
      },
      {
        "from": "t3",
        "to": "t7",
        "witnesses": [
          {
            "from": "t3",
            "to": "t7",
            "resource": "r5",
            "before": "=row\n\"13\"",
            "after": "=row\n\"29\"",
            "beforeIndex": 13,
            "afterIndex": 29,
            "modes": "WW"
          },
          {
            "from": "t3",
            "to": "t7",
            "resource": "r7",
            "before": "=row\n\"15\"",
            "after": "=row\n\"31\"",
            "beforeIndex": 15,
            "afterIndex": 31,
            "modes": "WW"
          }
        ]
      },
      {
        "from": "t4",
        "to": "t6",
        "witnesses": [
          {
            "from": "t4",
            "to": "t6",
            "resource": "r1",
            "before": "=row\n\"17\"",
            "after": "=row\n\"25\"",
            "beforeIndex": 17,
            "afterIndex": 25,
            "modes": "WW"
          },
          {
            "from": "t4",
            "to": "t6",
            "resource": "r3",
            "before": "=row\n\"19\"",
            "after": "=row\n\"27\"",
            "beforeIndex": 19,
            "afterIndex": 27,
            "modes": "WW"
          }
        ]
      },
      {
        "from": "t5",
        "to": "t7",
        "witnesses": [
          {
            "from": "t5",
            "to": "t7",
            "resource": "r5",
            "before": "=row\n\"21\"",
            "after": "=row\n\"29\"",
            "beforeIndex": 21,
            "afterIndex": 29,
            "modes": "WW"
          },
          {
            "from": "t5",
            "to": "t7",
            "resource": "r7",
            "before": "=row\n\"23\"",
            "after": "=row\n\"31\"",
            "beforeIndex": 23,
            "afterIndex": 31,
            "modes": "WW"
          }
        ]
      }
    ],
    "conflicts": [
      {
        "from": "t0",
        "to": "t2",
        "resource": "r1",
        "before": "=row\n\"1\"",
        "after": "=row\n\"9\"",
        "beforeIndex": 1,
        "afterIndex": 9,
        "modes": "WW"
      },
      {
        "from": "t0",
        "to": "t4",
        "resource": "r1",
        "before": "=row\n\"1\"",
        "after": "=row\n\"17\"",
        "beforeIndex": 1,
        "afterIndex": 17,
        "modes": "WW"
      },
      {
        "from": "t0",
        "to": "t6",
        "resource": "r1",
        "before": "=row\n\"1\"",
        "after": "=row\n\"25\"",
        "beforeIndex": 1,
        "afterIndex": 25,
        "modes": "WW"
      },
      {
        "from": "t0",
        "to": "t2",
        "resource": "r3",
        "before": "=row\n\"3\"",
        "after": "=row\n\"11\"",
        "beforeIndex": 3,
        "afterIndex": 11,
        "modes": "WW"
      },
      {
        "from": "t0",
        "to": "t4",
        "resource": "r3",
        "before": "=row\n\"3\"",
        "after": "=row\n\"19\"",
        "beforeIndex": 3,
        "afterIndex": 19,
        "modes": "WW"
      },
      {
        "from": "t0",
        "to": "t6",
        "resource": "r3",
        "before": "=row\n\"3\"",
        "after": "=row\n\"27\"",
        "beforeIndex": 3,
        "afterIndex": 27,
        "modes": "WW"
      },
      {
        "from": "t1",
        "to": "t3",
        "resource": "r5",
        "before": "=row\n\"5\"",
        "after": "=row\n\"13\"",
        "beforeIndex": 5,
        "afterIndex": 13,
        "modes": "WW"
      },
      {
        "from": "t1",
        "to": "t5",
        "resource": "r5",
        "before": "=row\n\"5\"",
        "after": "=row\n\"21\"",
        "beforeIndex": 5,
        "afterIndex": 21,
        "modes": "WW"
      },
      {
        "from": "t1",
        "to": "t7",
        "resource": "r5",
        "before": "=row\n\"5\"",
        "after": "=row\n\"29\"",
        "beforeIndex": 5,
        "afterIndex": 29,
        "modes": "WW"
      },
      {
        "from": "t1",
        "to": "t3",
        "resource": "r7",
        "before": "=row\n\"7\"",
        "after": "=row\n\"15\"",
        "beforeIndex": 7,
        "afterIndex": 15,
        "modes": "WW"
      },
      {
        "from": "t1",
        "to": "t5",
        "resource": "r7",
        "before": "=row\n\"7\"",
        "after": "=row\n\"23\"",
        "beforeIndex": 7,
        "afterIndex": 23,
        "modes": "WW"
      },
      {
        "from": "t1",
        "to": "t7",
        "resource": "r7",
        "before": "=row\n\"7\"",
        "after": "=row\n\"31\"",
        "beforeIndex": 7,
        "afterIndex": 31,
        "modes": "WW"
      },
      {
        "from": "t2",
        "to": "t4",
        "resource": "r1",
        "before": "=row\n\"9\"",
        "after": "=row\n\"17\"",
        "beforeIndex": 9,
        "afterIndex": 17,
        "modes": "WW"
      },
      {
        "from": "t2",
        "to": "t6",
        "resource": "r1",
        "before": "=row\n\"9\"",
        "after": "=row\n\"25\"",
        "beforeIndex": 9,
        "afterIndex": 25,
        "modes": "WW"
      },
      {
        "from": "t2",
        "to": "t4",
        "resource": "r3",
        "before": "=row\n\"11\"",
        "after": "=row\n\"19\"",
        "beforeIndex": 11,
        "afterIndex": 19,
        "modes": "WW"
      },
      {
        "from": "t2",
        "to": "t6",
        "resource": "r3",
        "before": "=row\n\"11\"",
        "after": "=row\n\"27\"",
        "beforeIndex": 11,
        "afterIndex": 27,
        "modes": "WW"
      },
      {
        "from": "t3",
        "to": "t5",
        "resource": "r5",
        "before": "=row\n\"13\"",
        "after": "=row\n\"21\"",
        "beforeIndex": 13,
        "afterIndex": 21,
        "modes": "WW"
      },
      {
        "from": "t3",
        "to": "t7",
        "resource": "r5",
        "before": "=row\n\"13\"",
        "after": "=row\n\"29\"",
        "beforeIndex": 13,
        "afterIndex": 29,
        "modes": "WW"
      },
      {
        "from": "t3",
        "to": "t5",
        "resource": "r7",
        "before": "=row\n\"15\"",
        "after": "=row\n\"23\"",
        "beforeIndex": 15,
        "afterIndex": 23,
        "modes": "WW"
      },
      {
        "from": "t3",
        "to": "t7",
        "resource": "r7",
        "before": "=row\n\"15\"",
        "after": "=row\n\"31\"",
        "beforeIndex": 15,
        "afterIndex": 31,
        "modes": "WW"
      },
      {
        "from": "t4",
        "to": "t6",
        "resource": "r1",
        "before": "=row\n\"17\"",
        "after": "=row\n\"25\"",
        "beforeIndex": 17,
        "afterIndex": 25,
        "modes": "WW"
      },
      {
        "from": "t4",
        "to": "t6",
        "resource": "r3",
        "before": "=row\n\"19\"",
        "after": "=row\n\"27\"",
        "beforeIndex": 19,
        "afterIndex": 27,
        "modes": "WW"
      },
      {
        "from": "t5",
        "to": "t7",
        "resource": "r5",
        "before": "=row\n\"21\"",
        "after": "=row\n\"29\"",
        "beforeIndex": 21,
        "afterIndex": 29,
        "modes": "WW"
      },
      {
        "from": "t5",
        "to": "t7",
        "resource": "r7",
        "before": "=row\n\"23\"",
        "after": "=row\n\"31\"",
        "beforeIndex": 23,
        "afterIndex": 31,
        "modes": "WW"
      }
    ],
    "baselineOrder": [
      "t0",
      "t1",
      "t2",
      "t3",
      "t4",
      "t5",
      "t6",
      "t7"
    ],
    "baselineViolations": [],
    "serialOrder": [
      "t0",
      "t1",
      "t2",
      "t3",
      "t4",
      "t5",
      "t6",
      "t7"
    ],
    "serialOperations": [
      {
        "sourceIndex": 0,
        "id": "=row\n\"0\"",
        "transaction": "t0",
        "mode": "R",
        "resource": "r0"
      },
      {
        "sourceIndex": 1,
        "id": "=row\n\"1\"",
        "transaction": "t0",
        "mode": "W",
        "resource": "r1"
      },
      {
        "sourceIndex": 2,
        "id": "=row\n\"2\"",
        "transaction": "t0",
        "mode": "R",
        "resource": "r2"
      },
      {
        "sourceIndex": 3,
        "id": "=row\n\"3\"",
        "transaction": "t0",
        "mode": "W",
        "resource": "r3"
      },
      {
        "sourceIndex": 4,
        "id": "=row\n\"4\"",
        "transaction": "t1",
        "mode": "R",
        "resource": "r4"
      },
      {
        "sourceIndex": 5,
        "id": "=row\n\"5\"",
        "transaction": "t1",
        "mode": "W",
        "resource": "r5"
      },
      {
        "sourceIndex": 6,
        "id": "=row\n\"6\"",
        "transaction": "t1",
        "mode": "R",
        "resource": "r6"
      },
      {
        "sourceIndex": 7,
        "id": "=row\n\"7\"",
        "transaction": "t1",
        "mode": "W",
        "resource": "r7"
      },
      {
        "sourceIndex": 8,
        "id": "=row\n\"8\"",
        "transaction": "t2",
        "mode": "R",
        "resource": "r0"
      },
      {
        "sourceIndex": 9,
        "id": "=row\n\"9\"",
        "transaction": "t2",
        "mode": "W",
        "resource": "r1"
      },
      {
        "sourceIndex": 10,
        "id": "=row\n\"10\"",
        "transaction": "t2",
        "mode": "R",
        "resource": "r2"
      },
      {
        "sourceIndex": 11,
        "id": "=row\n\"11\"",
        "transaction": "t2",
        "mode": "W",
        "resource": "r3"
      },
      {
        "sourceIndex": 12,
        "id": "=row\n\"12\"",
        "transaction": "t3",
        "mode": "R",
        "resource": "r4"
      },
      {
        "sourceIndex": 13,
        "id": "=row\n\"13\"",
        "transaction": "t3",
        "mode": "W",
        "resource": "r5"
      },
      {
        "sourceIndex": 14,
        "id": "=row\n\"14\"",
        "transaction": "t3",
        "mode": "R",
        "resource": "r6"
      },
      {
        "sourceIndex": 15,
        "id": "=row\n\"15\"",
        "transaction": "t3",
        "mode": "W",
        "resource": "r7"
      },
      {
        "sourceIndex": 16,
        "id": "=row\n\"16\"",
        "transaction": "t4",
        "mode": "R",
        "resource": "r0"
      },
      {
        "sourceIndex": 17,
        "id": "=row\n\"17\"",
        "transaction": "t4",
        "mode": "W",
        "resource": "r1"
      },
      {
        "sourceIndex": 18,
        "id": "=row\n\"18\"",
        "transaction": "t4",
        "mode": "R",
        "resource": "r2"
      },
      {
        "sourceIndex": 19,
        "id": "=row\n\"19\"",
        "transaction": "t4",
        "mode": "W",
        "resource": "r3"
      },
      {
        "sourceIndex": 20,
        "id": "=row\n\"20\"",
        "transaction": "t5",
        "mode": "R",
        "resource": "r4"
      },
      {
        "sourceIndex": 21,
        "id": "=row\n\"21\"",
        "transaction": "t5",
        "mode": "W",
        "resource": "r5"
      },
      {
        "sourceIndex": 22,
        "id": "=row\n\"22\"",
        "transaction": "t5",
        "mode": "R",
        "resource": "r6"
      },
      {
        "sourceIndex": 23,
        "id": "=row\n\"23\"",
        "transaction": "t5",
        "mode": "W",
        "resource": "r7"
      },
      {
        "sourceIndex": 24,
        "id": "=row\n\"24\"",
        "transaction": "t6",
        "mode": "R",
        "resource": "r0"
      },
      {
        "sourceIndex": 25,
        "id": "=row\n\"25\"",
        "transaction": "t6",
        "mode": "W",
        "resource": "r1"
      },
      {
        "sourceIndex": 26,
        "id": "=row\n\"26\"",
        "transaction": "t6",
        "mode": "R",
        "resource": "r2"
      },
      {
        "sourceIndex": 27,
        "id": "=row\n\"27\"",
        "transaction": "t6",
        "mode": "W",
        "resource": "r3"
      },
      {
        "sourceIndex": 28,
        "id": "=row\n\"28\"",
        "transaction": "t7",
        "mode": "R",
        "resource": "r4"
      },
      {
        "sourceIndex": 29,
        "id": "=row\n\"29\"",
        "transaction": "t7",
        "mode": "W",
        "resource": "r5"
      },
      {
        "sourceIndex": 30,
        "id": "=row\n\"30\"",
        "transaction": "t7",
        "mode": "R",
        "resource": "r6"
      },
      {
        "sourceIndex": 31,
        "id": "=row\n\"31\"",
        "transaction": "t7",
        "mode": "W",
        "resource": "r7"
      }
    ],
    "cycle": [],
    "scope": "Conflict serializability of the supplied single-version total R/W trace only. Not view serializability, isolation, recoverability, durability or a database execution guarantee."
  }
}

