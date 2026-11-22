# Maximum recovery trace

AI similarity is not record identity. Whole analysis withheld for any held operation. Verify the explicit commit boundaries before approving. No database connection or changes.

## Reviewed recovery worksheet

RECOVERABLE: true | CASCADELESS: true | STRICT: false

Single-version latest-preceding-write semantics; all transactions commit. No rollback, MVCC, locking, isolation certification or execution.

TERMINAL-ONLY BASELINE: 8/8 committed. Terminal-only baseline sees all supplied transactions commit; it ignores who read an uncommitted write.

EARLY READER COMMIT WITNESSES:
None in the reviewed trace.

READ-FROM LEDGER:
=row
"0" reads r0 from INITIAL
=row
"2" reads r2 from INITIAL
=row
"4" reads r4 from INITIAL
=row
"6" reads r6 from INITIAL
=row
"8" reads r0 from INITIAL
=row
"10" reads r2 from INITIAL
=row
"12" reads r4 from INITIAL
=row
"14" reads r6 from INITIAL
=row
"16" reads r0 from INITIAL
=row
"18" reads r2 from INITIAL
=row
"20" reads r4 from INITIAL
=row
"22" reads r6 from INITIAL
=row
"24" reads r0 from INITIAL
=row
"26" reads r2 from INITIAL
=row
"28" reads r4 from INITIAL
=row
"30" reads r6 from INITIAL

DIRTY OVERWRITES:
=row
"9" overwrites uncommitted =row
"1" on r1
=row
"11" overwrites uncommitted =row
"3" on r3
=row
"13" overwrites uncommitted =row
"5" on r5
=row
"15" overwrites uncommitted =row
"7" on r7
=row
"17" overwrites uncommitted =row
"9" on r1
=row
"19" overwrites uncommitted =row
"11" on r3
=row
"21" overwrites uncommitted =row
"13" on r5
=row
"23" overwrites uncommitted =row
"15" on r7
=row
"25" overwrites uncommitted =row
"17" on r1
=row
"27" overwrites uncommitted =row
"19" on r3
=row
"29" overwrites uncommitted =row
"21" on r5
=row
"31" overwrites uncommitted =row
"23" on r7

EVENT ORDER:
1. t0 R =row
"0" r0
2. t0 W =row
"1" r1
3. t0 R =row
"2" r2
4. t0 W =row
"3" r3
5. t1 R =row
"4" r4
6. t1 W =row
"5" r5
7. t1 R =row
"6" r6
8. t1 W =row
"7" r7
9. t2 R =row
"8" r0
10. t2 W =row
"9" r1
11. t2 R =row
"10" r2
12. t2 W =row
"11" r3
13. t3 R =row
"12" r4
14. t3 W =row
"13" r5
15. t3 R =row
"14" r6
16. t3 W =row
"15" r7
17. t4 R =row
"16" r0
18. t4 W =row
"17" r1
19. t4 R =row
"18" r2
20. t4 W =row
"19" r3
21. t5 R =row
"20" r4
22. t5 W =row
"21" r5
23. t5 R =row
"22" r6
24. t5 W =row
"23" r7
25. t6 R =row
"24" r0
26. t6 W =row
"25" r1
27. t6 R =row
"26" r2
28. t6 W =row
"27" r3
29. t7 R =row
"28" r4
30. t7 W =row
"29" r5
31. t7 R =row
"30" r6
32. t7 W =row
"31" r7
33. t0 C after operation 32 
34. t1 C after operation 32 
35. t2 C after operation 32 
36. t3 C after operation 32 
37. t4 C after operation 32 
38. t5 C after operation 32 
39. t6 C after operation 32 
40. t7 C after operation 32 

Counts describe this supplied trace, not measured time savings or model accuracy.

## Complete source-linked audit

{
  "schema": "commit-cove/1",
  "originalInput": {
    "title": "Maximum recovery trace",
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
    ],
    "commits": [
      {
        "transaction": "t0",
        "after": 32
      },
      {
        "transaction": "t1",
        "after": 32
      },
      {
        "transaction": "t2",
        "after": 32
      },
      {
        "transaction": "t3",
        "after": 32
      },
      {
        "transaction": "t4",
        "after": 32
      },
      {
        "transaction": "t5",
        "after": 32
      },
      {
        "transaction": "t6",
        "after": 32
      },
      {
        "transaction": "t7",
        "after": 32
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
  "warning": "AI similarity is not record identity. Whole analysis withheld for any held operation. Verify the explicit commit boundaries before approving. No database connection or changes.",
  "analysis": {
    "status": "ready",
    "recoverable": true,
    "cascadeless": true,
    "strict": false,
    "reads": [
      {
        "read": "=row\n\"0\"",
        "reader": "t0",
        "resource": "r0",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "=row\n\"2\"",
        "reader": "t0",
        "resource": "r2",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "=row\n\"4\"",
        "reader": "t1",
        "resource": "r4",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "=row\n\"6\"",
        "reader": "t1",
        "resource": "r6",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "=row\n\"8\"",
        "reader": "t2",
        "resource": "r0",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "=row\n\"10\"",
        "reader": "t2",
        "resource": "r2",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "=row\n\"12\"",
        "reader": "t3",
        "resource": "r4",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "=row\n\"14\"",
        "reader": "t3",
        "resource": "r6",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "=row\n\"16\"",
        "reader": "t4",
        "resource": "r0",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "=row\n\"18\"",
        "reader": "t4",
        "resource": "r2",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "=row\n\"20\"",
        "reader": "t5",
        "resource": "r4",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "=row\n\"22\"",
        "reader": "t5",
        "resource": "r6",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "=row\n\"24\"",
        "reader": "t6",
        "resource": "r0",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "=row\n\"26\"",
        "reader": "t6",
        "resource": "r2",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "=row\n\"28\"",
        "reader": "t7",
        "resource": "r4",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "=row\n\"30\"",
        "reader": "t7",
        "resource": "r6",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      }
    ],
    "dirtyReads": [],
    "dirtyWrites": [
      {
        "write": "=row\n\"9\"",
        "transaction": "t2",
        "resource": "r1",
        "previousWrite": "=row\n\"1\"",
        "previousTransaction": "t0"
      },
      {
        "write": "=row\n\"11\"",
        "transaction": "t2",
        "resource": "r3",
        "previousWrite": "=row\n\"3\"",
        "previousTransaction": "t0"
      },
      {
        "write": "=row\n\"13\"",
        "transaction": "t3",
        "resource": "r5",
        "previousWrite": "=row\n\"5\"",
        "previousTransaction": "t1"
      },
      {
        "write": "=row\n\"15\"",
        "transaction": "t3",
        "resource": "r7",
        "previousWrite": "=row\n\"7\"",
        "previousTransaction": "t1"
      },
      {
        "write": "=row\n\"17\"",
        "transaction": "t4",
        "resource": "r1",
        "previousWrite": "=row\n\"9\"",
        "previousTransaction": "t2"
      },
      {
        "write": "=row\n\"19\"",
        "transaction": "t4",
        "resource": "r3",
        "previousWrite": "=row\n\"11\"",
        "previousTransaction": "t2"
      },
      {
        "write": "=row\n\"21\"",
        "transaction": "t5",
        "resource": "r5",
        "previousWrite": "=row\n\"13\"",
        "previousTransaction": "t3"
      },
      {
        "write": "=row\n\"23\"",
        "transaction": "t5",
        "resource": "r7",
        "previousWrite": "=row\n\"15\"",
        "previousTransaction": "t3"
      },
      {
        "write": "=row\n\"25\"",
        "transaction": "t6",
        "resource": "r1",
        "previousWrite": "=row\n\"17\"",
        "previousTransaction": "t4"
      },
      {
        "write": "=row\n\"27\"",
        "transaction": "t6",
        "resource": "r3",
        "previousWrite": "=row\n\"19\"",
        "previousTransaction": "t4"
      },
      {
        "write": "=row\n\"29\"",
        "transaction": "t7",
        "resource": "r5",
        "previousWrite": "=row\n\"21\"",
        "previousTransaction": "t5"
      },
      {
        "write": "=row\n\"31\"",
        "transaction": "t7",
        "resource": "r7",
        "previousWrite": "=row\n\"23\"",
        "previousTransaction": "t5"
      }
    ],
    "violations": [],
    "events": [
      {
        "kind": "R",
        "sourceIndex": 0,
        "id": "=row\n\"0\"",
        "transaction": "t0",
        "resource": "r0"
      },
      {
        "kind": "W",
        "sourceIndex": 1,
        "id": "=row\n\"1\"",
        "transaction": "t0",
        "resource": "r1"
      },
      {
        "kind": "R",
        "sourceIndex": 2,
        "id": "=row\n\"2\"",
        "transaction": "t0",
        "resource": "r2"
      },
      {
        "kind": "W",
        "sourceIndex": 3,
        "id": "=row\n\"3\"",
        "transaction": "t0",
        "resource": "r3"
      },
      {
        "kind": "R",
        "sourceIndex": 4,
        "id": "=row\n\"4\"",
        "transaction": "t1",
        "resource": "r4"
      },
      {
        "kind": "W",
        "sourceIndex": 5,
        "id": "=row\n\"5\"",
        "transaction": "t1",
        "resource": "r5"
      },
      {
        "kind": "R",
        "sourceIndex": 6,
        "id": "=row\n\"6\"",
        "transaction": "t1",
        "resource": "r6"
      },
      {
        "kind": "W",
        "sourceIndex": 7,
        "id": "=row\n\"7\"",
        "transaction": "t1",
        "resource": "r7"
      },
      {
        "kind": "R",
        "sourceIndex": 8,
        "id": "=row\n\"8\"",
        "transaction": "t2",
        "resource": "r0"
      },
      {
        "kind": "W",
        "sourceIndex": 9,
        "id": "=row\n\"9\"",
        "transaction": "t2",
        "resource": "r1"
      },
      {
        "kind": "R",
        "sourceIndex": 10,
        "id": "=row\n\"10\"",
        "transaction": "t2",
        "resource": "r2"
      },
      {
        "kind": "W",
        "sourceIndex": 11,
        "id": "=row\n\"11\"",
        "transaction": "t2",
        "resource": "r3"
      },
      {
        "kind": "R",
        "sourceIndex": 12,
        "id": "=row\n\"12\"",
        "transaction": "t3",
        "resource": "r4"
      },
      {
        "kind": "W",
        "sourceIndex": 13,
        "id": "=row\n\"13\"",
        "transaction": "t3",
        "resource": "r5"
      },
      {
        "kind": "R",
        "sourceIndex": 14,
        "id": "=row\n\"14\"",
        "transaction": "t3",
        "resource": "r6"
      },
      {
        "kind": "W",
        "sourceIndex": 15,
        "id": "=row\n\"15\"",
        "transaction": "t3",
        "resource": "r7"
      },
      {
        "kind": "R",
        "sourceIndex": 16,
        "id": "=row\n\"16\"",
        "transaction": "t4",
        "resource": "r0"
      },
      {
        "kind": "W",
        "sourceIndex": 17,
        "id": "=row\n\"17\"",
        "transaction": "t4",
        "resource": "r1"
      },
      {
        "kind": "R",
        "sourceIndex": 18,
        "id": "=row\n\"18\"",
        "transaction": "t4",
        "resource": "r2"
      },
      {
        "kind": "W",
        "sourceIndex": 19,
        "id": "=row\n\"19\"",
        "transaction": "t4",
        "resource": "r3"
      },
      {
        "kind": "R",
        "sourceIndex": 20,
        "id": "=row\n\"20\"",
        "transaction": "t5",
        "resource": "r4"
      },
      {
        "kind": "W",
        "sourceIndex": 21,
        "id": "=row\n\"21\"",
        "transaction": "t5",
        "resource": "r5"
      },
      {
        "kind": "R",
        "sourceIndex": 22,
        "id": "=row\n\"22\"",
        "transaction": "t5",
        "resource": "r6"
      },
      {
        "kind": "W",
        "sourceIndex": 23,
        "id": "=row\n\"23\"",
        "transaction": "t5",
        "resource": "r7"
      },
      {
        "kind": "R",
        "sourceIndex": 24,
        "id": "=row\n\"24\"",
        "transaction": "t6",
        "resource": "r0"
      },
      {
        "kind": "W",
        "sourceIndex": 25,
        "id": "=row\n\"25\"",
        "transaction": "t6",
        "resource": "r1"
      },
      {
        "kind": "R",
        "sourceIndex": 26,
        "id": "=row\n\"26\"",
        "transaction": "t6",
        "resource": "r2"
      },
      {
        "kind": "W",
        "sourceIndex": 27,
        "id": "=row\n\"27\"",
        "transaction": "t6",
        "resource": "r3"
      },
      {
        "kind": "R",
        "sourceIndex": 28,
        "id": "=row\n\"28\"",
        "transaction": "t7",
        "resource": "r4"
      },
      {
        "kind": "W",
        "sourceIndex": 29,
        "id": "=row\n\"29\"",
        "transaction": "t7",
        "resource": "r5"
      },
      {
        "kind": "R",
        "sourceIndex": 30,
        "id": "=row\n\"30\"",
        "transaction": "t7",
        "resource": "r6"
      },
      {
        "kind": "W",
        "sourceIndex": 31,
        "id": "=row\n\"31\"",
        "transaction": "t7",
        "resource": "r7"
      },
      {
        "kind": "C",
        "transaction": "t0",
        "boundary": 32
      },
      {
        "kind": "C",
        "transaction": "t1",
        "boundary": 32
      },
      {
        "kind": "C",
        "transaction": "t2",
        "boundary": 32
      },
      {
        "kind": "C",
        "transaction": "t3",
        "boundary": 32
      },
      {
        "kind": "C",
        "transaction": "t4",
        "boundary": 32
      },
      {
        "kind": "C",
        "transaction": "t5",
        "boundary": 32
      },
      {
        "kind": "C",
        "transaction": "t6",
        "boundary": 32
      },
      {
        "kind": "C",
        "transaction": "t7",
        "boundary": 32
      }
    ],
    "baseline": {
      "committed": 8,
      "total": 8,
      "description": "Terminal-only baseline sees all supplied transactions commit; it ignores who read an uncommitted write."
    },
    "scope": "Single-version latest-preceding-write semantics; all transactions commit. No rollback, MVCC, locking, isolation certification or execution."
  }
}

