# Helpdesk runbook directory

Lookup-frequency planning, not observed usability. Assumes successful lookup, equal-cost binary branch decisions and the supplied fixed destination order. Similarity is not confidence. All counts and identities require review.

## Ordered binary menu
- Is the requested destination at or before “d3” in the supplied order?
  - YES
    - Is the requested destination at or before “d1” in the supplied order?
      - YES
        - Is the requested destination at or before “d0” in the supplied order?
          - YES
            - Open d0: Directory topic 0
          - NO
            - Open d1: Directory topic 1
      - NO
        - Is the requested destination at or before “d2” in the supplied order?
          - YES
            - Open d2: Directory topic 2
          - NO
            - Open d3: Directory topic 3
  - NO
    - Is the requested destination at or before “d7” in the supplied order?
      - YES
        - Is the requested destination at or before “d5” in the supplied order?
          - YES
            - Is the requested destination at or before “d4” in the supplied order?
              - YES
                - Open d4: Directory topic 4
              - NO
                - Open d5: Directory topic 5
          - NO
            - Is the requested destination at or before “d6” in the supplied order?
              - YES
                - Open d6: Directory topic 6
              - NO
                - Open d7: Directory topic 7
      - NO
        - Is the requested destination at or before “d9” in the supplied order?
          - YES
            - Is the requested destination at or before “d8” in the supplied order?
              - YES
                - Open d8: Directory topic 8
              - NO
                - Open d9: Directory topic 9
          - NO
            - Is the requested destination at or before “d10” in the supplied order?
              - YES
                - Open d10: Directory topic 10
              - NO
                - Open d11: Directory topic 11

## Computed comparison
Weighted decisions: 2952 vs balanced 3007; total lookups: 820. Expected decisions: 3.6 vs 3.6670731707317072. Estimates under supplied frequencies; not measured time savings.

## Complete original and reviewed audit
{
  "schema": "index-canopy/1",
  "originalInput": {
    "title": "Helpdesk runbook directory",
    "destinations": [
      {
        "id": "d0",
        "description": "Directory topic 0"
      },
      {
        "id": "d1",
        "description": "Directory topic 1"
      },
      {
        "id": "d2",
        "description": "Directory topic 2"
      },
      {
        "id": "d3",
        "description": "Directory topic 3"
      },
      {
        "id": "d4",
        "description": "Directory topic 4"
      },
      {
        "id": "d5",
        "description": "Directory topic 5"
      },
      {
        "id": "d6",
        "description": "Directory topic 6"
      },
      {
        "id": "d7",
        "description": "Directory topic 7"
      },
      {
        "id": "d8",
        "description": "Directory topic 8"
      },
      {
        "id": "d9",
        "description": "Directory topic 9"
      },
      {
        "id": "d10",
        "description": "Directory topic 10"
      },
      {
        "id": "d11",
        "description": "Directory topic 11"
      }
    ],
    "tallies": [
      {
        "id": "=SUM(1,2)\n\"tally 0\"",
        "subject": "Directory topic 0",
        "count": 1
      },
      {
        "id": "=SUM(1,2)\n\"tally 1\"",
        "subject": "Directory topic 1",
        "count": 2
      },
      {
        "id": "=SUM(1,2)\n\"tally 2\"",
        "subject": "Directory topic 2",
        "count": 3
      },
      {
        "id": "=SUM(1,2)\n\"tally 3\"",
        "subject": "Directory topic 3",
        "count": 4
      },
      {
        "id": "=SUM(1,2)\n\"tally 4\"",
        "subject": "Directory topic 4",
        "count": 5
      },
      {
        "id": "=SUM(1,2)\n\"tally 5\"",
        "subject": "Directory topic 5",
        "count": 6
      },
      {
        "id": "=SUM(1,2)\n\"tally 6\"",
        "subject": "Directory topic 6",
        "count": 7
      },
      {
        "id": "=SUM(1,2)\n\"tally 7\"",
        "subject": "Directory topic 7",
        "count": 8
      },
      {
        "id": "=SUM(1,2)\n\"tally 8\"",
        "subject": "Directory topic 8",
        "count": 9
      },
      {
        "id": "=SUM(1,2)\n\"tally 9\"",
        "subject": "Directory topic 9",
        "count": 10
      },
      {
        "id": "=SUM(1,2)\n\"tally 10\"",
        "subject": "Directory topic 10",
        "count": 11
      },
      {
        "id": "=SUM(1,2)\n\"tally 11\"",
        "subject": "Directory topic 11",
        "count": 12
      },
      {
        "id": "=SUM(1,2)\n\"tally 12\"",
        "subject": "Directory topic 0",
        "count": 13
      },
      {
        "id": "=SUM(1,2)\n\"tally 13\"",
        "subject": "Directory topic 1",
        "count": 14
      },
      {
        "id": "=SUM(1,2)\n\"tally 14\"",
        "subject": "Directory topic 2",
        "count": 15
      },
      {
        "id": "=SUM(1,2)\n\"tally 15\"",
        "subject": "Directory topic 3",
        "count": 16
      },
      {
        "id": "=SUM(1,2)\n\"tally 16\"",
        "subject": "Directory topic 4",
        "count": 17
      },
      {
        "id": "=SUM(1,2)\n\"tally 17\"",
        "subject": "Directory topic 5",
        "count": 18
      },
      {
        "id": "=SUM(1,2)\n\"tally 18\"",
        "subject": "Directory topic 6",
        "count": 19
      },
      {
        "id": "=SUM(1,2)\n\"tally 19\"",
        "subject": "Directory topic 7",
        "count": 20
      },
      {
        "id": "=SUM(1,2)\n\"tally 20\"",
        "subject": "Directory topic 8",
        "count": 21
      },
      {
        "id": "=SUM(1,2)\n\"tally 21\"",
        "subject": "Directory topic 9",
        "count": 22
      },
      {
        "id": "=SUM(1,2)\n\"tally 22\"",
        "subject": "Directory topic 10",
        "count": 23
      },
      {
        "id": "=SUM(1,2)\n\"tally 23\"",
        "subject": "Directory topic 11",
        "count": 24
      },
      {
        "id": "=SUM(1,2)\n\"tally 24\"",
        "subject": "Directory topic 0",
        "count": 25
      },
      {
        "id": "=SUM(1,2)\n\"tally 25\"",
        "subject": "Directory topic 1",
        "count": 26
      },
      {
        "id": "=SUM(1,2)\n\"tally 26\"",
        "subject": "Directory topic 2",
        "count": 27
      },
      {
        "id": "=SUM(1,2)\n\"tally 27\"",
        "subject": "Directory topic 3",
        "count": 28
      },
      {
        "id": "=SUM(1,2)\n\"tally 28\"",
        "subject": "Directory topic 4",
        "count": 29
      },
      {
        "id": "=SUM(1,2)\n\"tally 29\"",
        "subject": "Directory topic 5",
        "count": 30
      },
      {
        "id": "=SUM(1,2)\n\"tally 30\"",
        "subject": "Directory topic 6",
        "count": 31
      },
      {
        "id": "=SUM(1,2)\n\"tally 31\"",
        "subject": "Directory topic 7",
        "count": 32
      },
      {
        "id": "=SUM(1,2)\n\"tally 32\"",
        "subject": "Directory topic 8",
        "count": 33
      },
      {
        "id": "=SUM(1,2)\n\"tally 33\"",
        "subject": "Directory topic 9",
        "count": 34
      },
      {
        "id": "=SUM(1,2)\n\"tally 34\"",
        "subject": "Directory topic 10",
        "count": 35
      },
      {
        "id": "=SUM(1,2)\n\"tally 35\"",
        "subject": "Directory topic 11",
        "count": 36
      },
      {
        "id": "=SUM(1,2)\n\"tally 36\"",
        "subject": "Directory topic 0",
        "count": 37
      },
      {
        "id": "=SUM(1,2)\n\"tally 37\"",
        "subject": "Directory topic 1",
        "count": 38
      },
      {
        "id": "=SUM(1,2)\n\"tally 38\"",
        "subject": "Directory topic 2",
        "count": 39
      },
      {
        "id": "=SUM(1,2)\n\"tally 39\"",
        "subject": "Directory topic 3",
        "count": 40
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "tally": "=SUM(1,2)\n\"tally 0\"",
      "destination": "d0",
      "aiDestination": "d0",
      "count": 1,
      "evidence": [
        {
          "destination": "d0",
          "score": 1.0000000311110706
        },
        {
          "destination": "d10",
          "score": 0.8418763037571522
        },
        {
          "destination": "d6",
          "score": 0.8283916194932508
        },
        {
          "destination": "d9",
          "score": 0.8219962184719816
        },
        {
          "destination": "d4",
          "score": 0.8170526531294602
        },
        {
          "destination": "d1",
          "score": 0.8088910397359674
        },
        {
          "destination": "d11",
          "score": 0.8011193611636888
        },
        {
          "destination": "d8",
          "score": 0.7971448550520417
        },
        {
          "destination": "d7",
          "score": 0.793717296987714
        },
        {
          "destination": "d2",
          "score": 0.7920697904308867
        },
        {
          "destination": "d5",
          "score": 0.7802736576799675
        },
        {
          "destination": "d3",
          "score": 0.7646243847951371
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "tally": "=SUM(1,2)\n\"tally 1\"",
      "destination": "d1",
      "aiDestination": "d1",
      "count": 2,
      "evidence": [
        {
          "destination": "d1",
          "score": 1.0000000684630184
        },
        {
          "destination": "d2",
          "score": 0.9723208419705796
        },
        {
          "destination": "d4",
          "score": 0.9591416954737
        },
        {
          "destination": "d3",
          "score": 0.9569584045334777
        },
        {
          "destination": "d5",
          "score": 0.9538367449177639
        },
        {
          "destination": "d11",
          "score": 0.9284021305249386
        },
        {
          "destination": "d6",
          "score": 0.922939254349991
        },
        {
          "destination": "d7",
          "score": 0.9228811579107583
        },
        {
          "destination": "d10",
          "score": 0.9169865217628015
        },
        {
          "destination": "d9",
          "score": 0.9090936913499832
        },
        {
          "destination": "d8",
          "score": 0.9061416828892933
        },
        {
          "destination": "d0",
          "score": 0.8088910397359674
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "tally": "=SUM(1,2)\n\"tally 2\"",
      "destination": "d2",
      "aiDestination": "d2",
      "count": 3,
      "evidence": [
        {
          "destination": "d2",
          "score": 0.9999999162069517
        },
        {
          "destination": "d1",
          "score": 0.9723208419705796
        },
        {
          "destination": "d4",
          "score": 0.9600773400805833
        },
        {
          "destination": "d3",
          "score": 0.9582715139407827
        },
        {
          "destination": "d5",
          "score": 0.9481873741913281
        },
        {
          "destination": "d11",
          "score": 0.9235134306890717
        },
        {
          "destination": "d7",
          "score": 0.9165676335752309
        },
        {
          "destination": "d6",
          "score": 0.9155308095145689
        },
        {
          "destination": "d8",
          "score": 0.9137611286682461
        },
        {
          "destination": "d10",
          "score": 0.9062381297223612
        },
        {
          "destination": "d9",
          "score": 0.9032889938234268
        },
        {
          "destination": "d0",
          "score": 0.7920697904308867
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "tally": "=SUM(1,2)\n\"tally 3\"",
      "destination": "d3",
      "aiDestination": "d3",
      "count": 4,
      "evidence": [
        {
          "destination": "d3",
          "score": 0.999999565719679
        },
        {
          "destination": "d4",
          "score": 0.9649719050914277
        },
        {
          "destination": "d2",
          "score": 0.9582715139407827
        },
        {
          "destination": "d5",
          "score": 0.9572972686741859
        },
        {
          "destination": "d1",
          "score": 0.9569584045334777
        },
        {
          "destination": "d11",
          "score": 0.9318162504127423
        },
        {
          "destination": "d6",
          "score": 0.9271255177276573
        },
        {
          "destination": "d7",
          "score": 0.9232567065575398
        },
        {
          "destination": "d9",
          "score": 0.9172131113907153
        },
        {
          "destination": "d8",
          "score": 0.9127815562184934
        },
        {
          "destination": "d10",
          "score": 0.9119212525361821
        },
        {
          "destination": "d0",
          "score": 0.7646243847951371
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "tally": "=SUM(1,2)\n\"tally 4\"",
      "destination": "d4",
      "aiDestination": "d4",
      "count": 5,
      "evidence": [
        {
          "destination": "d4",
          "score": 0.9999995385576714
        },
        {
          "destination": "d3",
          "score": 0.9649719050914277
        },
        {
          "destination": "d5",
          "score": 0.9630926840783172
        },
        {
          "destination": "d2",
          "score": 0.9600773400805833
        },
        {
          "destination": "d1",
          "score": 0.9591416954737
        },
        {
          "destination": "d6",
          "score": 0.9442170468767838
        },
        {
          "destination": "d11",
          "score": 0.9383665364466209
        },
        {
          "destination": "d7",
          "score": 0.9368103641614361
        },
        {
          "destination": "d9",
          "score": 0.9325049591610357
        },
        {
          "destination": "d10",
          "score": 0.930183709660215
        },
        {
          "destination": "d8",
          "score": 0.9290405246069763
        },
        {
          "destination": "d0",
          "score": 0.8170526531294602
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "tally": "=SUM(1,2)\n\"tally 5\"",
      "destination": "d5",
      "aiDestination": "d5",
      "count": 6,
      "evidence": [
        {
          "destination": "d5",
          "score": 1.0000001926380926
        },
        {
          "destination": "d4",
          "score": 0.9630926840783172
        },
        {
          "destination": "d3",
          "score": 0.9572972686741859
        },
        {
          "destination": "d1",
          "score": 0.9538367449177639
        },
        {
          "destination": "d2",
          "score": 0.9481873741913281
        },
        {
          "destination": "d11",
          "score": 0.9461242913132725
        },
        {
          "destination": "d6",
          "score": 0.9433004167513312
        },
        {
          "destination": "d7",
          "score": 0.9431902343444581
        },
        {
          "destination": "d10",
          "score": 0.9384828365392084
        },
        {
          "destination": "d8",
          "score": 0.9224627657616071
        },
        {
          "destination": "d9",
          "score": 0.9217046849780735
        },
        {
          "destination": "d0",
          "score": 0.7802736576799675
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 6,
      "tally": "=SUM(1,2)\n\"tally 6\"",
      "destination": "d6",
      "aiDestination": "d6",
      "count": 7,
      "evidence": [
        {
          "destination": "d6",
          "score": 0.9999999487695647
        },
        {
          "destination": "d4",
          "score": 0.9442170468767838
        },
        {
          "destination": "d5",
          "score": 0.9433004167513312
        },
        {
          "destination": "d7",
          "score": 0.9378361195724242
        },
        {
          "destination": "d11",
          "score": 0.9377119826452994
        },
        {
          "destination": "d10",
          "score": 0.933323956671809
        },
        {
          "destination": "d9",
          "score": 0.9312899899919064
        },
        {
          "destination": "d3",
          "score": 0.9271255177276573
        },
        {
          "destination": "d1",
          "score": 0.922939254349991
        },
        {
          "destination": "d8",
          "score": 0.9219510436665034
        },
        {
          "destination": "d2",
          "score": 0.9155308095145689
        },
        {
          "destination": "d0",
          "score": 0.8283916194932508
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 7,
      "tally": "=SUM(1,2)\n\"tally 7\"",
      "destination": "d7",
      "aiDestination": "d7",
      "count": 8,
      "evidence": [
        {
          "destination": "d7",
          "score": 0.9999998736864855
        },
        {
          "destination": "d5",
          "score": 0.9431902343444581
        },
        {
          "destination": "d6",
          "score": 0.9378361195724242
        },
        {
          "destination": "d4",
          "score": 0.9368103641614361
        },
        {
          "destination": "d11",
          "score": 0.9354373550961608
        },
        {
          "destination": "d8",
          "score": 0.9296559391093836
        },
        {
          "destination": "d9",
          "score": 0.9276111514618974
        },
        {
          "destination": "d3",
          "score": 0.9232567065575398
        },
        {
          "destination": "d1",
          "score": 0.9228811579107583
        },
        {
          "destination": "d10",
          "score": 0.9219559039114497
        },
        {
          "destination": "d2",
          "score": 0.9165676335752309
        },
        {
          "destination": "d0",
          "score": 0.793717296987714
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 8,
      "tally": "=SUM(1,2)\n\"tally 8\"",
      "destination": "d8",
      "aiDestination": "d8",
      "count": 9,
      "evidence": [
        {
          "destination": "d8",
          "score": 1.0000000052451257
        },
        {
          "destination": "d11",
          "score": 0.93513453224333
        },
        {
          "destination": "d9",
          "score": 0.9330960610103818
        },
        {
          "destination": "d7",
          "score": 0.9296559391093836
        },
        {
          "destination": "d4",
          "score": 0.9290405246069763
        },
        {
          "destination": "d5",
          "score": 0.9224627657616071
        },
        {
          "destination": "d6",
          "score": 0.9219510436665034
        },
        {
          "destination": "d10",
          "score": 0.9213449920676818
        },
        {
          "destination": "d2",
          "score": 0.9137611286682461
        },
        {
          "destination": "d3",
          "score": 0.9127815562184934
        },
        {
          "destination": "d1",
          "score": 0.9061416828892933
        },
        {
          "destination": "d0",
          "score": 0.7971448550520417
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 9,
      "tally": "=SUM(1,2)\n\"tally 9\"",
      "destination": "d9",
      "aiDestination": "d9",
      "count": 10,
      "evidence": [
        {
          "destination": "d9",
          "score": 0.9999998410322164
        },
        {
          "destination": "d10",
          "score": 0.9572504165483093
        },
        {
          "destination": "d11",
          "score": 0.9476949833199698
        },
        {
          "destination": "d8",
          "score": 0.9330960610103818
        },
        {
          "destination": "d4",
          "score": 0.9325049591610357
        },
        {
          "destination": "d6",
          "score": 0.9312899899919064
        },
        {
          "destination": "d7",
          "score": 0.9276111514618974
        },
        {
          "destination": "d5",
          "score": 0.9217046849780735
        },
        {
          "destination": "d3",
          "score": 0.9172131113907153
        },
        {
          "destination": "d1",
          "score": 0.9090936913499832
        },
        {
          "destination": "d2",
          "score": 0.9032889938234268
        },
        {
          "destination": "d0",
          "score": 0.8219962184719816
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 10,
      "tally": "=SUM(1,2)\n\"tally 10\"",
      "destination": "d10",
      "aiDestination": "d10",
      "count": 11,
      "evidence": [
        {
          "destination": "d10",
          "score": 0.9999997212738722
        },
        {
          "destination": "d9",
          "score": 0.9572504165483093
        },
        {
          "destination": "d11",
          "score": 0.9522787520151292
        },
        {
          "destination": "d5",
          "score": 0.9384828365392084
        },
        {
          "destination": "d6",
          "score": 0.933323956671809
        },
        {
          "destination": "d4",
          "score": 0.930183709660215
        },
        {
          "destination": "d7",
          "score": 0.9219559039114497
        },
        {
          "destination": "d8",
          "score": 0.9213449920676818
        },
        {
          "destination": "d1",
          "score": 0.9169865217628015
        },
        {
          "destination": "d3",
          "score": 0.9119212525361821
        },
        {
          "destination": "d2",
          "score": 0.9062381297223612
        },
        {
          "destination": "d0",
          "score": 0.8418763037571522
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 11,
      "tally": "=SUM(1,2)\n\"tally 11\"",
      "destination": "d11",
      "aiDestination": "d11",
      "count": 12,
      "evidence": [
        {
          "destination": "d11",
          "score": 1.0000001899213464
        },
        {
          "destination": "d10",
          "score": 0.9522787520151292
        },
        {
          "destination": "d9",
          "score": 0.9476949833199698
        },
        {
          "destination": "d5",
          "score": 0.9461242913132725
        },
        {
          "destination": "d4",
          "score": 0.9383665364466209
        },
        {
          "destination": "d6",
          "score": 0.9377119826452994
        },
        {
          "destination": "d7",
          "score": 0.9354373550961608
        },
        {
          "destination": "d8",
          "score": 0.93513453224333
        },
        {
          "destination": "d3",
          "score": 0.9318162504127423
        },
        {
          "destination": "d1",
          "score": 0.9284021305249386
        },
        {
          "destination": "d2",
          "score": 0.9235134306890717
        },
        {
          "destination": "d0",
          "score": 0.8011193611636888
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 12,
      "tally": "=SUM(1,2)\n\"tally 12\"",
      "destination": "d0",
      "aiDestination": "d0",
      "count": 13,
      "evidence": [
        {
          "destination": "d0",
          "score": 1.0000000311110706
        },
        {
          "destination": "d10",
          "score": 0.8418763037571522
        },
        {
          "destination": "d6",
          "score": 0.8283916194932508
        },
        {
          "destination": "d9",
          "score": 0.8219962184719816
        },
        {
          "destination": "d4",
          "score": 0.8170526531294602
        },
        {
          "destination": "d1",
          "score": 0.8088910397359674
        },
        {
          "destination": "d11",
          "score": 0.8011193611636888
        },
        {
          "destination": "d8",
          "score": 0.7971448550520417
        },
        {
          "destination": "d7",
          "score": 0.793717296987714
        },
        {
          "destination": "d2",
          "score": 0.7920697904308867
        },
        {
          "destination": "d5",
          "score": 0.7802736576799675
        },
        {
          "destination": "d3",
          "score": 0.7646243847951371
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 13,
      "tally": "=SUM(1,2)\n\"tally 13\"",
      "destination": "d1",
      "aiDestination": "d1",
      "count": 14,
      "evidence": [
        {
          "destination": "d1",
          "score": 1.0000000684630184
        },
        {
          "destination": "d2",
          "score": 0.9723208419705796
        },
        {
          "destination": "d4",
          "score": 0.9591416954737
        },
        {
          "destination": "d3",
          "score": 0.9569584045334777
        },
        {
          "destination": "d5",
          "score": 0.9538367449177639
        },
        {
          "destination": "d11",
          "score": 0.9284021305249386
        },
        {
          "destination": "d6",
          "score": 0.922939254349991
        },
        {
          "destination": "d7",
          "score": 0.9228811579107583
        },
        {
          "destination": "d10",
          "score": 0.9169865217628015
        },
        {
          "destination": "d9",
          "score": 0.9090936913499832
        },
        {
          "destination": "d8",
          "score": 0.9061416828892933
        },
        {
          "destination": "d0",
          "score": 0.8088910397359674
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 14,
      "tally": "=SUM(1,2)\n\"tally 14\"",
      "destination": "d2",
      "aiDestination": "d2",
      "count": 15,
      "evidence": [
        {
          "destination": "d2",
          "score": 0.9999999162069517
        },
        {
          "destination": "d1",
          "score": 0.9723208419705796
        },
        {
          "destination": "d4",
          "score": 0.9600773400805833
        },
        {
          "destination": "d3",
          "score": 0.9582715139407827
        },
        {
          "destination": "d5",
          "score": 0.9481873741913281
        },
        {
          "destination": "d11",
          "score": 0.9235134306890717
        },
        {
          "destination": "d7",
          "score": 0.9165676335752309
        },
        {
          "destination": "d6",
          "score": 0.9155308095145689
        },
        {
          "destination": "d8",
          "score": 0.9137611286682461
        },
        {
          "destination": "d10",
          "score": 0.9062381297223612
        },
        {
          "destination": "d9",
          "score": 0.9032889938234268
        },
        {
          "destination": "d0",
          "score": 0.7920697904308867
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 15,
      "tally": "=SUM(1,2)\n\"tally 15\"",
      "destination": "d3",
      "aiDestination": "d3",
      "count": 16,
      "evidence": [
        {
          "destination": "d3",
          "score": 0.999999565719679
        },
        {
          "destination": "d4",
          "score": 0.9649719050914277
        },
        {
          "destination": "d2",
          "score": 0.9582715139407827
        },
        {
          "destination": "d5",
          "score": 0.9572972686741859
        },
        {
          "destination": "d1",
          "score": 0.9569584045334777
        },
        {
          "destination": "d11",
          "score": 0.9318162504127423
        },
        {
          "destination": "d6",
          "score": 0.9271255177276573
        },
        {
          "destination": "d7",
          "score": 0.9232567065575398
        },
        {
          "destination": "d9",
          "score": 0.9172131113907153
        },
        {
          "destination": "d8",
          "score": 0.9127815562184934
        },
        {
          "destination": "d10",
          "score": 0.9119212525361821
        },
        {
          "destination": "d0",
          "score": 0.7646243847951371
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 16,
      "tally": "=SUM(1,2)\n\"tally 16\"",
      "destination": "d4",
      "aiDestination": "d4",
      "count": 17,
      "evidence": [
        {
          "destination": "d4",
          "score": 0.9999995385576714
        },
        {
          "destination": "d3",
          "score": 0.9649719050914277
        },
        {
          "destination": "d5",
          "score": 0.9630926840783172
        },
        {
          "destination": "d2",
          "score": 0.9600773400805833
        },
        {
          "destination": "d1",
          "score": 0.9591416954737
        },
        {
          "destination": "d6",
          "score": 0.9442170468767838
        },
        {
          "destination": "d11",
          "score": 0.9383665364466209
        },
        {
          "destination": "d7",
          "score": 0.9368103641614361
        },
        {
          "destination": "d9",
          "score": 0.9325049591610357
        },
        {
          "destination": "d10",
          "score": 0.930183709660215
        },
        {
          "destination": "d8",
          "score": 0.9290405246069763
        },
        {
          "destination": "d0",
          "score": 0.8170526531294602
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 17,
      "tally": "=SUM(1,2)\n\"tally 17\"",
      "destination": "d5",
      "aiDestination": "d5",
      "count": 18,
      "evidence": [
        {
          "destination": "d5",
          "score": 1.0000001926380926
        },
        {
          "destination": "d4",
          "score": 0.9630926840783172
        },
        {
          "destination": "d3",
          "score": 0.9572972686741859
        },
        {
          "destination": "d1",
          "score": 0.9538367449177639
        },
        {
          "destination": "d2",
          "score": 0.9481873741913281
        },
        {
          "destination": "d11",
          "score": 0.9461242913132725
        },
        {
          "destination": "d6",
          "score": 0.9433004167513312
        },
        {
          "destination": "d7",
          "score": 0.9431902343444581
        },
        {
          "destination": "d10",
          "score": 0.9384828365392084
        },
        {
          "destination": "d8",
          "score": 0.9224627657616071
        },
        {
          "destination": "d9",
          "score": 0.9217046849780735
        },
        {
          "destination": "d0",
          "score": 0.7802736576799675
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 18,
      "tally": "=SUM(1,2)\n\"tally 18\"",
      "destination": "d6",
      "aiDestination": "d6",
      "count": 19,
      "evidence": [
        {
          "destination": "d6",
          "score": 0.9999999487695647
        },
        {
          "destination": "d4",
          "score": 0.9442170468767838
        },
        {
          "destination": "d5",
          "score": 0.9433004167513312
        },
        {
          "destination": "d7",
          "score": 0.9378361195724242
        },
        {
          "destination": "d11",
          "score": 0.9377119826452994
        },
        {
          "destination": "d10",
          "score": 0.933323956671809
        },
        {
          "destination": "d9",
          "score": 0.9312899899919064
        },
        {
          "destination": "d3",
          "score": 0.9271255177276573
        },
        {
          "destination": "d1",
          "score": 0.922939254349991
        },
        {
          "destination": "d8",
          "score": 0.9219510436665034
        },
        {
          "destination": "d2",
          "score": 0.9155308095145689
        },
        {
          "destination": "d0",
          "score": 0.8283916194932508
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 19,
      "tally": "=SUM(1,2)\n\"tally 19\"",
      "destination": "d7",
      "aiDestination": "d7",
      "count": 20,
      "evidence": [
        {
          "destination": "d7",
          "score": 0.9999998736864855
        },
        {
          "destination": "d5",
          "score": 0.9431902343444581
        },
        {
          "destination": "d6",
          "score": 0.9378361195724242
        },
        {
          "destination": "d4",
          "score": 0.9368103641614361
        },
        {
          "destination": "d11",
          "score": 0.9354373550961608
        },
        {
          "destination": "d8",
          "score": 0.9296559391093836
        },
        {
          "destination": "d9",
          "score": 0.9276111514618974
        },
        {
          "destination": "d3",
          "score": 0.9232567065575398
        },
        {
          "destination": "d1",
          "score": 0.9228811579107583
        },
        {
          "destination": "d10",
          "score": 0.9219559039114497
        },
        {
          "destination": "d2",
          "score": 0.9165676335752309
        },
        {
          "destination": "d0",
          "score": 0.793717296987714
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 20,
      "tally": "=SUM(1,2)\n\"tally 20\"",
      "destination": "d8",
      "aiDestination": "d8",
      "count": 21,
      "evidence": [
        {
          "destination": "d8",
          "score": 1.0000000052451257
        },
        {
          "destination": "d11",
          "score": 0.93513453224333
        },
        {
          "destination": "d9",
          "score": 0.9330960610103818
        },
        {
          "destination": "d7",
          "score": 0.9296559391093836
        },
        {
          "destination": "d4",
          "score": 0.9290405246069763
        },
        {
          "destination": "d5",
          "score": 0.9224627657616071
        },
        {
          "destination": "d6",
          "score": 0.9219510436665034
        },
        {
          "destination": "d10",
          "score": 0.9213449920676818
        },
        {
          "destination": "d2",
          "score": 0.9137611286682461
        },
        {
          "destination": "d3",
          "score": 0.9127815562184934
        },
        {
          "destination": "d1",
          "score": 0.9061416828892933
        },
        {
          "destination": "d0",
          "score": 0.7971448550520417
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 21,
      "tally": "=SUM(1,2)\n\"tally 21\"",
      "destination": "d9",
      "aiDestination": "d9",
      "count": 22,
      "evidence": [
        {
          "destination": "d9",
          "score": 0.9999998410322164
        },
        {
          "destination": "d10",
          "score": 0.9572504165483093
        },
        {
          "destination": "d11",
          "score": 0.9476949833199698
        },
        {
          "destination": "d8",
          "score": 0.9330960610103818
        },
        {
          "destination": "d4",
          "score": 0.9325049591610357
        },
        {
          "destination": "d6",
          "score": 0.9312899899919064
        },
        {
          "destination": "d7",
          "score": 0.9276111514618974
        },
        {
          "destination": "d5",
          "score": 0.9217046849780735
        },
        {
          "destination": "d3",
          "score": 0.9172131113907153
        },
        {
          "destination": "d1",
          "score": 0.9090936913499832
        },
        {
          "destination": "d2",
          "score": 0.9032889938234268
        },
        {
          "destination": "d0",
          "score": 0.8219962184719816
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 22,
      "tally": "=SUM(1,2)\n\"tally 22\"",
      "destination": "d10",
      "aiDestination": "d10",
      "count": 23,
      "evidence": [
        {
          "destination": "d10",
          "score": 0.9999997212738722
        },
        {
          "destination": "d9",
          "score": 0.9572504165483093
        },
        {
          "destination": "d11",
          "score": 0.9522787520151292
        },
        {
          "destination": "d5",
          "score": 0.9384828365392084
        },
        {
          "destination": "d6",
          "score": 0.933323956671809
        },
        {
          "destination": "d4",
          "score": 0.930183709660215
        },
        {
          "destination": "d7",
          "score": 0.9219559039114497
        },
        {
          "destination": "d8",
          "score": 0.9213449920676818
        },
        {
          "destination": "d1",
          "score": 0.9169865217628015
        },
        {
          "destination": "d3",
          "score": 0.9119212525361821
        },
        {
          "destination": "d2",
          "score": 0.9062381297223612
        },
        {
          "destination": "d0",
          "score": 0.8418763037571522
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 23,
      "tally": "=SUM(1,2)\n\"tally 23\"",
      "destination": "d11",
      "aiDestination": "d11",
      "count": 24,
      "evidence": [
        {
          "destination": "d11",
          "score": 1.0000001899213464
        },
        {
          "destination": "d10",
          "score": 0.9522787520151292
        },
        {
          "destination": "d9",
          "score": 0.9476949833199698
        },
        {
          "destination": "d5",
          "score": 0.9461242913132725
        },
        {
          "destination": "d4",
          "score": 0.9383665364466209
        },
        {
          "destination": "d6",
          "score": 0.9377119826452994
        },
        {
          "destination": "d7",
          "score": 0.9354373550961608
        },
        {
          "destination": "d8",
          "score": 0.93513453224333
        },
        {
          "destination": "d3",
          "score": 0.9318162504127423
        },
        {
          "destination": "d1",
          "score": 0.9284021305249386
        },
        {
          "destination": "d2",
          "score": 0.9235134306890717
        },
        {
          "destination": "d0",
          "score": 0.8011193611636888
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 24,
      "tally": "=SUM(1,2)\n\"tally 24\"",
      "destination": "d0",
      "aiDestination": "d0",
      "count": 25,
      "evidence": [
        {
          "destination": "d0",
          "score": 1.0000000311110706
        },
        {
          "destination": "d10",
          "score": 0.8418763037571522
        },
        {
          "destination": "d6",
          "score": 0.8283916194932508
        },
        {
          "destination": "d9",
          "score": 0.8219962184719816
        },
        {
          "destination": "d4",
          "score": 0.8170526531294602
        },
        {
          "destination": "d1",
          "score": 0.8088910397359674
        },
        {
          "destination": "d11",
          "score": 0.8011193611636888
        },
        {
          "destination": "d8",
          "score": 0.7971448550520417
        },
        {
          "destination": "d7",
          "score": 0.793717296987714
        },
        {
          "destination": "d2",
          "score": 0.7920697904308867
        },
        {
          "destination": "d5",
          "score": 0.7802736576799675
        },
        {
          "destination": "d3",
          "score": 0.7646243847951371
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 25,
      "tally": "=SUM(1,2)\n\"tally 25\"",
      "destination": "d1",
      "aiDestination": "d1",
      "count": 26,
      "evidence": [
        {
          "destination": "d1",
          "score": 1.0000000684630184
        },
        {
          "destination": "d2",
          "score": 0.9723208419705796
        },
        {
          "destination": "d4",
          "score": 0.9591416954737
        },
        {
          "destination": "d3",
          "score": 0.9569584045334777
        },
        {
          "destination": "d5",
          "score": 0.9538367449177639
        },
        {
          "destination": "d11",
          "score": 0.9284021305249386
        },
        {
          "destination": "d6",
          "score": 0.922939254349991
        },
        {
          "destination": "d7",
          "score": 0.9228811579107583
        },
        {
          "destination": "d10",
          "score": 0.9169865217628015
        },
        {
          "destination": "d9",
          "score": 0.9090936913499832
        },
        {
          "destination": "d8",
          "score": 0.9061416828892933
        },
        {
          "destination": "d0",
          "score": 0.8088910397359674
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 26,
      "tally": "=SUM(1,2)\n\"tally 26\"",
      "destination": "d2",
      "aiDestination": "d2",
      "count": 27,
      "evidence": [
        {
          "destination": "d2",
          "score": 0.9999999162069517
        },
        {
          "destination": "d1",
          "score": 0.9723208419705796
        },
        {
          "destination": "d4",
          "score": 0.9600773400805833
        },
        {
          "destination": "d3",
          "score": 0.9582715139407827
        },
        {
          "destination": "d5",
          "score": 0.9481873741913281
        },
        {
          "destination": "d11",
          "score": 0.9235134306890717
        },
        {
          "destination": "d7",
          "score": 0.9165676335752309
        },
        {
          "destination": "d6",
          "score": 0.9155308095145689
        },
        {
          "destination": "d8",
          "score": 0.9137611286682461
        },
        {
          "destination": "d10",
          "score": 0.9062381297223612
        },
        {
          "destination": "d9",
          "score": 0.9032889938234268
        },
        {
          "destination": "d0",
          "score": 0.7920697904308867
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 27,
      "tally": "=SUM(1,2)\n\"tally 27\"",
      "destination": "d3",
      "aiDestination": "d3",
      "count": 28,
      "evidence": [
        {
          "destination": "d3",
          "score": 0.999999565719679
        },
        {
          "destination": "d4",
          "score": 0.9649719050914277
        },
        {
          "destination": "d2",
          "score": 0.9582715139407827
        },
        {
          "destination": "d5",
          "score": 0.9572972686741859
        },
        {
          "destination": "d1",
          "score": 0.9569584045334777
        },
        {
          "destination": "d11",
          "score": 0.9318162504127423
        },
        {
          "destination": "d6",
          "score": 0.9271255177276573
        },
        {
          "destination": "d7",
          "score": 0.9232567065575398
        },
        {
          "destination": "d9",
          "score": 0.9172131113907153
        },
        {
          "destination": "d8",
          "score": 0.9127815562184934
        },
        {
          "destination": "d10",
          "score": 0.9119212525361821
        },
        {
          "destination": "d0",
          "score": 0.7646243847951371
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 28,
      "tally": "=SUM(1,2)\n\"tally 28\"",
      "destination": "d4",
      "aiDestination": "d4",
      "count": 29,
      "evidence": [
        {
          "destination": "d4",
          "score": 0.9999995385576714
        },
        {
          "destination": "d3",
          "score": 0.9649719050914277
        },
        {
          "destination": "d5",
          "score": 0.9630926840783172
        },
        {
          "destination": "d2",
          "score": 0.9600773400805833
        },
        {
          "destination": "d1",
          "score": 0.9591416954737
        },
        {
          "destination": "d6",
          "score": 0.9442170468767838
        },
        {
          "destination": "d11",
          "score": 0.9383665364466209
        },
        {
          "destination": "d7",
          "score": 0.9368103641614361
        },
        {
          "destination": "d9",
          "score": 0.9325049591610357
        },
        {
          "destination": "d10",
          "score": 0.930183709660215
        },
        {
          "destination": "d8",
          "score": 0.9290405246069763
        },
        {
          "destination": "d0",
          "score": 0.8170526531294602
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 29,
      "tally": "=SUM(1,2)\n\"tally 29\"",
      "destination": "d5",
      "aiDestination": "d5",
      "count": 30,
      "evidence": [
        {
          "destination": "d5",
          "score": 1.0000001926380926
        },
        {
          "destination": "d4",
          "score": 0.9630926840783172
        },
        {
          "destination": "d3",
          "score": 0.9572972686741859
        },
        {
          "destination": "d1",
          "score": 0.9538367449177639
        },
        {
          "destination": "d2",
          "score": 0.9481873741913281
        },
        {
          "destination": "d11",
          "score": 0.9461242913132725
        },
        {
          "destination": "d6",
          "score": 0.9433004167513312
        },
        {
          "destination": "d7",
          "score": 0.9431902343444581
        },
        {
          "destination": "d10",
          "score": 0.9384828365392084
        },
        {
          "destination": "d8",
          "score": 0.9224627657616071
        },
        {
          "destination": "d9",
          "score": 0.9217046849780735
        },
        {
          "destination": "d0",
          "score": 0.7802736576799675
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 30,
      "tally": "=SUM(1,2)\n\"tally 30\"",
      "destination": "d6",
      "aiDestination": "d6",
      "count": 31,
      "evidence": [
        {
          "destination": "d6",
          "score": 0.9999999487695647
        },
        {
          "destination": "d4",
          "score": 0.9442170468767838
        },
        {
          "destination": "d5",
          "score": 0.9433004167513312
        },
        {
          "destination": "d7",
          "score": 0.9378361195724242
        },
        {
          "destination": "d11",
          "score": 0.9377119826452994
        },
        {
          "destination": "d10",
          "score": 0.933323956671809
        },
        {
          "destination": "d9",
          "score": 0.9312899899919064
        },
        {
          "destination": "d3",
          "score": 0.9271255177276573
        },
        {
          "destination": "d1",
          "score": 0.922939254349991
        },
        {
          "destination": "d8",
          "score": 0.9219510436665034
        },
        {
          "destination": "d2",
          "score": 0.9155308095145689
        },
        {
          "destination": "d0",
          "score": 0.8283916194932508
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 31,
      "tally": "=SUM(1,2)\n\"tally 31\"",
      "destination": "d7",
      "aiDestination": "d7",
      "count": 32,
      "evidence": [
        {
          "destination": "d7",
          "score": 0.9999998736864855
        },
        {
          "destination": "d5",
          "score": 0.9431902343444581
        },
        {
          "destination": "d6",
          "score": 0.9378361195724242
        },
        {
          "destination": "d4",
          "score": 0.9368103641614361
        },
        {
          "destination": "d11",
          "score": 0.9354373550961608
        },
        {
          "destination": "d8",
          "score": 0.9296559391093836
        },
        {
          "destination": "d9",
          "score": 0.9276111514618974
        },
        {
          "destination": "d3",
          "score": 0.9232567065575398
        },
        {
          "destination": "d1",
          "score": 0.9228811579107583
        },
        {
          "destination": "d10",
          "score": 0.9219559039114497
        },
        {
          "destination": "d2",
          "score": 0.9165676335752309
        },
        {
          "destination": "d0",
          "score": 0.793717296987714
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 32,
      "tally": "=SUM(1,2)\n\"tally 32\"",
      "destination": "d8",
      "aiDestination": "d8",
      "count": 33,
      "evidence": [
        {
          "destination": "d8",
          "score": 1.0000000052451257
        },
        {
          "destination": "d11",
          "score": 0.93513453224333
        },
        {
          "destination": "d9",
          "score": 0.9330960610103818
        },
        {
          "destination": "d7",
          "score": 0.9296559391093836
        },
        {
          "destination": "d4",
          "score": 0.9290405246069763
        },
        {
          "destination": "d5",
          "score": 0.9224627657616071
        },
        {
          "destination": "d6",
          "score": 0.9219510436665034
        },
        {
          "destination": "d10",
          "score": 0.9213449920676818
        },
        {
          "destination": "d2",
          "score": 0.9137611286682461
        },
        {
          "destination": "d3",
          "score": 0.9127815562184934
        },
        {
          "destination": "d1",
          "score": 0.9061416828892933
        },
        {
          "destination": "d0",
          "score": 0.7971448550520417
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 33,
      "tally": "=SUM(1,2)\n\"tally 33\"",
      "destination": "d9",
      "aiDestination": "d9",
      "count": 34,
      "evidence": [
        {
          "destination": "d9",
          "score": 0.9999998410322164
        },
        {
          "destination": "d10",
          "score": 0.9572504165483093
        },
        {
          "destination": "d11",
          "score": 0.9476949833199698
        },
        {
          "destination": "d8",
          "score": 0.9330960610103818
        },
        {
          "destination": "d4",
          "score": 0.9325049591610357
        },
        {
          "destination": "d6",
          "score": 0.9312899899919064
        },
        {
          "destination": "d7",
          "score": 0.9276111514618974
        },
        {
          "destination": "d5",
          "score": 0.9217046849780735
        },
        {
          "destination": "d3",
          "score": 0.9172131113907153
        },
        {
          "destination": "d1",
          "score": 0.9090936913499832
        },
        {
          "destination": "d2",
          "score": 0.9032889938234268
        },
        {
          "destination": "d0",
          "score": 0.8219962184719816
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 34,
      "tally": "=SUM(1,2)\n\"tally 34\"",
      "destination": "d10",
      "aiDestination": "d10",
      "count": 35,
      "evidence": [
        {
          "destination": "d10",
          "score": 0.9999997212738722
        },
        {
          "destination": "d9",
          "score": 0.9572504165483093
        },
        {
          "destination": "d11",
          "score": 0.9522787520151292
        },
        {
          "destination": "d5",
          "score": 0.9384828365392084
        },
        {
          "destination": "d6",
          "score": 0.933323956671809
        },
        {
          "destination": "d4",
          "score": 0.930183709660215
        },
        {
          "destination": "d7",
          "score": 0.9219559039114497
        },
        {
          "destination": "d8",
          "score": 0.9213449920676818
        },
        {
          "destination": "d1",
          "score": 0.9169865217628015
        },
        {
          "destination": "d3",
          "score": 0.9119212525361821
        },
        {
          "destination": "d2",
          "score": 0.9062381297223612
        },
        {
          "destination": "d0",
          "score": 0.8418763037571522
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 35,
      "tally": "=SUM(1,2)\n\"tally 35\"",
      "destination": "d11",
      "aiDestination": "d11",
      "count": 36,
      "evidence": [
        {
          "destination": "d11",
          "score": 1.0000001899213464
        },
        {
          "destination": "d10",
          "score": 0.9522787520151292
        },
        {
          "destination": "d9",
          "score": 0.9476949833199698
        },
        {
          "destination": "d5",
          "score": 0.9461242913132725
        },
        {
          "destination": "d4",
          "score": 0.9383665364466209
        },
        {
          "destination": "d6",
          "score": 0.9377119826452994
        },
        {
          "destination": "d7",
          "score": 0.9354373550961608
        },
        {
          "destination": "d8",
          "score": 0.93513453224333
        },
        {
          "destination": "d3",
          "score": 0.9318162504127423
        },
        {
          "destination": "d1",
          "score": 0.9284021305249386
        },
        {
          "destination": "d2",
          "score": 0.9235134306890717
        },
        {
          "destination": "d0",
          "score": 0.8011193611636888
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 36,
      "tally": "=SUM(1,2)\n\"tally 36\"",
      "destination": "d0",
      "aiDestination": "d0",
      "count": 37,
      "evidence": [
        {
          "destination": "d0",
          "score": 1.0000000311110706
        },
        {
          "destination": "d10",
          "score": 0.8418763037571522
        },
        {
          "destination": "d6",
          "score": 0.8283916194932508
        },
        {
          "destination": "d9",
          "score": 0.8219962184719816
        },
        {
          "destination": "d4",
          "score": 0.8170526531294602
        },
        {
          "destination": "d1",
          "score": 0.8088910397359674
        },
        {
          "destination": "d11",
          "score": 0.8011193611636888
        },
        {
          "destination": "d8",
          "score": 0.7971448550520417
        },
        {
          "destination": "d7",
          "score": 0.793717296987714
        },
        {
          "destination": "d2",
          "score": 0.7920697904308867
        },
        {
          "destination": "d5",
          "score": 0.7802736576799675
        },
        {
          "destination": "d3",
          "score": 0.7646243847951371
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 37,
      "tally": "=SUM(1,2)\n\"tally 37\"",
      "destination": "d1",
      "aiDestination": "d1",
      "count": 38,
      "evidence": [
        {
          "destination": "d1",
          "score": 1.0000000684630184
        },
        {
          "destination": "d2",
          "score": 0.9723208419705796
        },
        {
          "destination": "d4",
          "score": 0.9591416954737
        },
        {
          "destination": "d3",
          "score": 0.9569584045334777
        },
        {
          "destination": "d5",
          "score": 0.9538367449177639
        },
        {
          "destination": "d11",
          "score": 0.9284021305249386
        },
        {
          "destination": "d6",
          "score": 0.922939254349991
        },
        {
          "destination": "d7",
          "score": 0.9228811579107583
        },
        {
          "destination": "d10",
          "score": 0.9169865217628015
        },
        {
          "destination": "d9",
          "score": 0.9090936913499832
        },
        {
          "destination": "d8",
          "score": 0.9061416828892933
        },
        {
          "destination": "d0",
          "score": 0.8088910397359674
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 38,
      "tally": "=SUM(1,2)\n\"tally 38\"",
      "destination": "d2",
      "aiDestination": "d2",
      "count": 39,
      "evidence": [
        {
          "destination": "d2",
          "score": 0.9999999162069517
        },
        {
          "destination": "d1",
          "score": 0.9723208419705796
        },
        {
          "destination": "d4",
          "score": 0.9600773400805833
        },
        {
          "destination": "d3",
          "score": 0.9582715139407827
        },
        {
          "destination": "d5",
          "score": 0.9481873741913281
        },
        {
          "destination": "d11",
          "score": 0.9235134306890717
        },
        {
          "destination": "d7",
          "score": 0.9165676335752309
        },
        {
          "destination": "d6",
          "score": 0.9155308095145689
        },
        {
          "destination": "d8",
          "score": 0.9137611286682461
        },
        {
          "destination": "d10",
          "score": 0.9062381297223612
        },
        {
          "destination": "d9",
          "score": 0.9032889938234268
        },
        {
          "destination": "d0",
          "score": 0.7920697904308867
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 39,
      "tally": "=SUM(1,2)\n\"tally 39\"",
      "destination": "d3",
      "aiDestination": "d3",
      "count": 40,
      "evidence": [
        {
          "destination": "d3",
          "score": 0.999999565719679
        },
        {
          "destination": "d4",
          "score": 0.9649719050914277
        },
        {
          "destination": "d2",
          "score": 0.9582715139407827
        },
        {
          "destination": "d5",
          "score": 0.9572972686741859
        },
        {
          "destination": "d1",
          "score": 0.9569584045334777
        },
        {
          "destination": "d11",
          "score": 0.9318162504127423
        },
        {
          "destination": "d6",
          "score": 0.9271255177276573
        },
        {
          "destination": "d7",
          "score": 0.9232567065575398
        },
        {
          "destination": "d9",
          "score": 0.9172131113907153
        },
        {
          "destination": "d8",
          "score": 0.9127815562184934
        },
        {
          "destination": "d10",
          "score": 0.9119212525361821
        },
        {
          "destination": "d0",
          "score": 0.7646243847951371
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Lookup-frequency planning, not observed usability. Assumes successful lookup, equal-cost binary branch decisions and the supplied fixed destination order. Similarity is not confidence. All counts and identities require review.",
  "analysis": {
    "status": "ready",
    "total": 820,
    "weights": [
      76,
      80,
      84,
      88,
      51,
      54,
      57,
      60,
      63,
      66,
      69,
      72
    ],
    "optimal": {
      "root": {
        "lo": 0,
        "hi": 11,
        "split": 3,
        "cost": 2952,
        "left": {
          "lo": 0,
          "hi": 3,
          "split": 1,
          "cost": 656,
          "left": {
            "lo": 0,
            "hi": 1,
            "split": 0,
            "cost": 156,
            "left": {
              "lo": 0,
              "hi": 0,
              "cost": 0
            },
            "right": {
              "lo": 1,
              "hi": 1,
              "cost": 0
            }
          },
          "right": {
            "lo": 2,
            "hi": 3,
            "split": 2,
            "cost": 172,
            "left": {
              "lo": 2,
              "hi": 2,
              "cost": 0
            },
            "right": {
              "lo": 3,
              "hi": 3,
              "cost": 0
            }
          }
        },
        "right": {
          "lo": 4,
          "hi": 11,
          "split": 7,
          "cost": 1476,
          "left": {
            "lo": 4,
            "hi": 7,
            "split": 5,
            "cost": 444,
            "left": {
              "lo": 4,
              "hi": 5,
              "split": 4,
              "cost": 105,
              "left": {
                "lo": 4,
                "hi": 4,
                "cost": 0
              },
              "right": {
                "lo": 5,
                "hi": 5,
                "cost": 0
              }
            },
            "right": {
              "lo": 6,
              "hi": 7,
              "split": 6,
              "cost": 117,
              "left": {
                "lo": 6,
                "hi": 6,
                "cost": 0
              },
              "right": {
                "lo": 7,
                "hi": 7,
                "cost": 0
              }
            }
          },
          "right": {
            "lo": 8,
            "hi": 11,
            "split": 9,
            "cost": 540,
            "left": {
              "lo": 8,
              "hi": 9,
              "split": 8,
              "cost": 129,
              "left": {
                "lo": 8,
                "hi": 8,
                "cost": 0
              },
              "right": {
                "lo": 9,
                "hi": 9,
                "cost": 0
              }
            },
            "right": {
              "lo": 10,
              "hi": 11,
              "split": 10,
              "cost": 141,
              "left": {
                "lo": 10,
                "hi": 10,
                "cost": 0
              },
              "right": {
                "lo": 11,
                "hi": 11,
                "cost": 0
              }
            }
          }
        }
      },
      "paths": [
        [
          {
            "split": 3,
            "side": "left"
          },
          {
            "split": 1,
            "side": "left"
          },
          {
            "split": 0,
            "side": "left"
          }
        ],
        [
          {
            "split": 3,
            "side": "left"
          },
          {
            "split": 1,
            "side": "left"
          },
          {
            "split": 0,
            "side": "right"
          }
        ],
        [
          {
            "split": 3,
            "side": "left"
          },
          {
            "split": 1,
            "side": "right"
          },
          {
            "split": 2,
            "side": "left"
          }
        ],
        [
          {
            "split": 3,
            "side": "left"
          },
          {
            "split": 1,
            "side": "right"
          },
          {
            "split": 2,
            "side": "right"
          }
        ],
        [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "left"
          },
          {
            "split": 5,
            "side": "left"
          },
          {
            "split": 4,
            "side": "left"
          }
        ],
        [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "left"
          },
          {
            "split": 5,
            "side": "left"
          },
          {
            "split": 4,
            "side": "right"
          }
        ],
        [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "left"
          },
          {
            "split": 5,
            "side": "right"
          },
          {
            "split": 6,
            "side": "left"
          }
        ],
        [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "left"
          },
          {
            "split": 5,
            "side": "right"
          },
          {
            "split": 6,
            "side": "right"
          }
        ],
        [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "right"
          },
          {
            "split": 9,
            "side": "left"
          },
          {
            "split": 8,
            "side": "left"
          }
        ],
        [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "right"
          },
          {
            "split": 9,
            "side": "left"
          },
          {
            "split": 8,
            "side": "right"
          }
        ],
        [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "right"
          },
          {
            "split": 9,
            "side": "right"
          },
          {
            "split": 10,
            "side": "left"
          }
        ],
        [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "right"
          },
          {
            "split": 9,
            "side": "right"
          },
          {
            "split": 10,
            "side": "right"
          }
        ]
      ],
      "cost": 2952
    },
    "baseline": {
      "root": {
        "lo": 0,
        "hi": 11,
        "split": 5,
        "cost": 3007,
        "left": {
          "lo": 0,
          "hi": 5,
          "split": 2,
          "cost": 1161,
          "left": {
            "lo": 0,
            "hi": 2,
            "split": 1,
            "cost": 396,
            "left": {
              "lo": 0,
              "hi": 1,
              "split": 0,
              "cost": 156,
              "left": {
                "lo": 0,
                "hi": 0,
                "cost": 0
              },
              "right": {
                "lo": 1,
                "hi": 1,
                "cost": 0
              }
            },
            "right": {
              "lo": 2,
              "hi": 2,
              "cost": 0
            }
          },
          "right": {
            "lo": 3,
            "hi": 5,
            "split": 4,
            "cost": 332,
            "left": {
              "lo": 3,
              "hi": 4,
              "split": 3,
              "cost": 139,
              "left": {
                "lo": 3,
                "hi": 3,
                "cost": 0
              },
              "right": {
                "lo": 4,
                "hi": 4,
                "cost": 0
              }
            },
            "right": {
              "lo": 5,
              "hi": 5,
              "cost": 0
            }
          }
        },
        "right": {
          "lo": 6,
          "hi": 11,
          "split": 8,
          "cost": 1026,
          "left": {
            "lo": 6,
            "hi": 8,
            "split": 7,
            "cost": 297,
            "left": {
              "lo": 6,
              "hi": 7,
              "split": 6,
              "cost": 117,
              "left": {
                "lo": 6,
                "hi": 6,
                "cost": 0
              },
              "right": {
                "lo": 7,
                "hi": 7,
                "cost": 0
              }
            },
            "right": {
              "lo": 8,
              "hi": 8,
              "cost": 0
            }
          },
          "right": {
            "lo": 9,
            "hi": 11,
            "split": 10,
            "cost": 342,
            "left": {
              "lo": 9,
              "hi": 10,
              "split": 9,
              "cost": 135,
              "left": {
                "lo": 9,
                "hi": 9,
                "cost": 0
              },
              "right": {
                "lo": 10,
                "hi": 10,
                "cost": 0
              }
            },
            "right": {
              "lo": 11,
              "hi": 11,
              "cost": 0
            }
          }
        }
      },
      "paths": [
        [
          {
            "split": 5,
            "side": "left"
          },
          {
            "split": 2,
            "side": "left"
          },
          {
            "split": 1,
            "side": "left"
          },
          {
            "split": 0,
            "side": "left"
          }
        ],
        [
          {
            "split": 5,
            "side": "left"
          },
          {
            "split": 2,
            "side": "left"
          },
          {
            "split": 1,
            "side": "left"
          },
          {
            "split": 0,
            "side": "right"
          }
        ],
        [
          {
            "split": 5,
            "side": "left"
          },
          {
            "split": 2,
            "side": "left"
          },
          {
            "split": 1,
            "side": "right"
          }
        ],
        [
          {
            "split": 5,
            "side": "left"
          },
          {
            "split": 2,
            "side": "right"
          },
          {
            "split": 4,
            "side": "left"
          },
          {
            "split": 3,
            "side": "left"
          }
        ],
        [
          {
            "split": 5,
            "side": "left"
          },
          {
            "split": 2,
            "side": "right"
          },
          {
            "split": 4,
            "side": "left"
          },
          {
            "split": 3,
            "side": "right"
          }
        ],
        [
          {
            "split": 5,
            "side": "left"
          },
          {
            "split": 2,
            "side": "right"
          },
          {
            "split": 4,
            "side": "right"
          }
        ],
        [
          {
            "split": 5,
            "side": "right"
          },
          {
            "split": 8,
            "side": "left"
          },
          {
            "split": 7,
            "side": "left"
          },
          {
            "split": 6,
            "side": "left"
          }
        ],
        [
          {
            "split": 5,
            "side": "right"
          },
          {
            "split": 8,
            "side": "left"
          },
          {
            "split": 7,
            "side": "left"
          },
          {
            "split": 6,
            "side": "right"
          }
        ],
        [
          {
            "split": 5,
            "side": "right"
          },
          {
            "split": 8,
            "side": "left"
          },
          {
            "split": 7,
            "side": "right"
          }
        ],
        [
          {
            "split": 5,
            "side": "right"
          },
          {
            "split": 8,
            "side": "right"
          },
          {
            "split": 10,
            "side": "left"
          },
          {
            "split": 9,
            "side": "left"
          }
        ],
        [
          {
            "split": 5,
            "side": "right"
          },
          {
            "split": 8,
            "side": "right"
          },
          {
            "split": 10,
            "side": "left"
          },
          {
            "split": 9,
            "side": "right"
          }
        ],
        [
          {
            "split": 5,
            "side": "right"
          },
          {
            "split": 8,
            "side": "right"
          },
          {
            "split": 10,
            "side": "right"
          }
        ]
      ],
      "cost": 3007
    },
    "leaves": [
      {
        "id": "d0",
        "description": "Directory topic 0",
        "weight": 76,
        "depth": 3,
        "baselineDepth": 4,
        "path": [
          {
            "split": 3,
            "side": "left"
          },
          {
            "split": 1,
            "side": "left"
          },
          {
            "split": 0,
            "side": "left"
          }
        ]
      },
      {
        "id": "d1",
        "description": "Directory topic 1",
        "weight": 80,
        "depth": 3,
        "baselineDepth": 4,
        "path": [
          {
            "split": 3,
            "side": "left"
          },
          {
            "split": 1,
            "side": "left"
          },
          {
            "split": 0,
            "side": "right"
          }
        ]
      },
      {
        "id": "d2",
        "description": "Directory topic 2",
        "weight": 84,
        "depth": 3,
        "baselineDepth": 3,
        "path": [
          {
            "split": 3,
            "side": "left"
          },
          {
            "split": 1,
            "side": "right"
          },
          {
            "split": 2,
            "side": "left"
          }
        ]
      },
      {
        "id": "d3",
        "description": "Directory topic 3",
        "weight": 88,
        "depth": 3,
        "baselineDepth": 4,
        "path": [
          {
            "split": 3,
            "side": "left"
          },
          {
            "split": 1,
            "side": "right"
          },
          {
            "split": 2,
            "side": "right"
          }
        ]
      },
      {
        "id": "d4",
        "description": "Directory topic 4",
        "weight": 51,
        "depth": 4,
        "baselineDepth": 4,
        "path": [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "left"
          },
          {
            "split": 5,
            "side": "left"
          },
          {
            "split": 4,
            "side": "left"
          }
        ]
      },
      {
        "id": "d5",
        "description": "Directory topic 5",
        "weight": 54,
        "depth": 4,
        "baselineDepth": 3,
        "path": [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "left"
          },
          {
            "split": 5,
            "side": "left"
          },
          {
            "split": 4,
            "side": "right"
          }
        ]
      },
      {
        "id": "d6",
        "description": "Directory topic 6",
        "weight": 57,
        "depth": 4,
        "baselineDepth": 4,
        "path": [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "left"
          },
          {
            "split": 5,
            "side": "right"
          },
          {
            "split": 6,
            "side": "left"
          }
        ]
      },
      {
        "id": "d7",
        "description": "Directory topic 7",
        "weight": 60,
        "depth": 4,
        "baselineDepth": 4,
        "path": [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "left"
          },
          {
            "split": 5,
            "side": "right"
          },
          {
            "split": 6,
            "side": "right"
          }
        ]
      },
      {
        "id": "d8",
        "description": "Directory topic 8",
        "weight": 63,
        "depth": 4,
        "baselineDepth": 3,
        "path": [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "right"
          },
          {
            "split": 9,
            "side": "left"
          },
          {
            "split": 8,
            "side": "left"
          }
        ]
      },
      {
        "id": "d9",
        "description": "Directory topic 9",
        "weight": 66,
        "depth": 4,
        "baselineDepth": 4,
        "path": [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "right"
          },
          {
            "split": 9,
            "side": "left"
          },
          {
            "split": 8,
            "side": "right"
          }
        ]
      },
      {
        "id": "d10",
        "description": "Directory topic 10",
        "weight": 69,
        "depth": 4,
        "baselineDepth": 4,
        "path": [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "right"
          },
          {
            "split": 9,
            "side": "right"
          },
          {
            "split": 10,
            "side": "left"
          }
        ]
      },
      {
        "id": "d11",
        "description": "Directory topic 11",
        "weight": 72,
        "depth": 4,
        "baselineDepth": 3,
        "path": [
          {
            "split": 3,
            "side": "right"
          },
          {
            "split": 7,
            "side": "right"
          },
          {
            "split": 9,
            "side": "right"
          },
          {
            "split": 10,
            "side": "right"
          }
        ]
      }
    ],
    "expectedChoices": 3.6,
    "baselineExpected": 3.6670731707317072,
    "literalMatches": 0
  }
}
