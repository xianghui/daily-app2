# Maximum complete table

Reviewed deterministic Moore-machine worksheet only. Visible outputs must completely describe behavior you intend to preserve. No hidden state, timing, side effects, probabilities, guards or nondeterminism. AI similarity is not identity proof. No system changes.

## Reviewed behavior worksheet

CATALOG BASELINE: 8 states.

REACHABLE: 8; MINIMAL EQUIVALENT: 2; MERGED REACHABLE: 6.

UNREACHABLE (audit retained): none

Q1 [s0, s2, s4, s6] → visible output out0

Q2 [s1, s3, s5, s7] → visible output out1

SHORTEST DISTINGUISHING TESTS (empty list means outputs differ immediately):

Q1 / Q2: [] → out0 vs out1

Counts describe this reviewed table, not measured time savings or model accuracy.

## Complete source-linked audit

{
  "schema": "state-orchard/1",
  "originalInput": {
    "title": "Maximum complete table",
    "start": "s0",
    "states": [
      {
        "id": "s0",
        "description": "Synthetic routing state 0",
        "outcome": "out0"
      },
      {
        "id": "s1",
        "description": "Synthetic routing state 1",
        "outcome": "out1"
      },
      {
        "id": "s2",
        "description": "Synthetic routing state 2",
        "outcome": "out0"
      },
      {
        "id": "s3",
        "description": "Synthetic routing state 3",
        "outcome": "out1"
      },
      {
        "id": "s4",
        "description": "Synthetic routing state 4",
        "outcome": "out0"
      },
      {
        "id": "s5",
        "description": "Synthetic routing state 5",
        "outcome": "out1"
      },
      {
        "id": "s6",
        "description": "Synthetic routing state 6",
        "outcome": "out0"
      },
      {
        "id": "s7",
        "description": "Synthetic routing state 7",
        "outcome": "out1"
      }
    ],
    "events": [
      "a",
      "b",
      "c",
      "d"
    ],
    "transitions": [
      {
        "id": "=row\n\"0\"",
        "fromNote": "Synthetic routing state 0",
        "event": "a",
        "toNote": "Synthetic routing state 1"
      },
      {
        "id": "=row\n\"1\"",
        "fromNote": "Synthetic routing state 0",
        "event": "b",
        "toNote": "Synthetic routing state 1"
      },
      {
        "id": "=row\n\"2\"",
        "fromNote": "Synthetic routing state 0",
        "event": "c",
        "toNote": "Synthetic routing state 1"
      },
      {
        "id": "=row\n\"3\"",
        "fromNote": "Synthetic routing state 0",
        "event": "d",
        "toNote": "Synthetic routing state 1"
      },
      {
        "id": "=row\n\"4\"",
        "fromNote": "Synthetic routing state 1",
        "event": "a",
        "toNote": "Synthetic routing state 2"
      },
      {
        "id": "=row\n\"5\"",
        "fromNote": "Synthetic routing state 1",
        "event": "b",
        "toNote": "Synthetic routing state 2"
      },
      {
        "id": "=row\n\"6\"",
        "fromNote": "Synthetic routing state 1",
        "event": "c",
        "toNote": "Synthetic routing state 2"
      },
      {
        "id": "=row\n\"7\"",
        "fromNote": "Synthetic routing state 1",
        "event": "d",
        "toNote": "Synthetic routing state 2"
      },
      {
        "id": "=row\n\"8\"",
        "fromNote": "Synthetic routing state 2",
        "event": "a",
        "toNote": "Synthetic routing state 3"
      },
      {
        "id": "=row\n\"9\"",
        "fromNote": "Synthetic routing state 2",
        "event": "b",
        "toNote": "Synthetic routing state 3"
      },
      {
        "id": "=row\n\"10\"",
        "fromNote": "Synthetic routing state 2",
        "event": "c",
        "toNote": "Synthetic routing state 3"
      },
      {
        "id": "=row\n\"11\"",
        "fromNote": "Synthetic routing state 2",
        "event": "d",
        "toNote": "Synthetic routing state 3"
      },
      {
        "id": "=row\n\"12\"",
        "fromNote": "Synthetic routing state 3",
        "event": "a",
        "toNote": "Synthetic routing state 4"
      },
      {
        "id": "=row\n\"13\"",
        "fromNote": "Synthetic routing state 3",
        "event": "b",
        "toNote": "Synthetic routing state 4"
      },
      {
        "id": "=row\n\"14\"",
        "fromNote": "Synthetic routing state 3",
        "event": "c",
        "toNote": "Synthetic routing state 4"
      },
      {
        "id": "=row\n\"15\"",
        "fromNote": "Synthetic routing state 3",
        "event": "d",
        "toNote": "Synthetic routing state 4"
      },
      {
        "id": "=row\n\"16\"",
        "fromNote": "Synthetic routing state 4",
        "event": "a",
        "toNote": "Synthetic routing state 5"
      },
      {
        "id": "=row\n\"17\"",
        "fromNote": "Synthetic routing state 4",
        "event": "b",
        "toNote": "Synthetic routing state 5"
      },
      {
        "id": "=row\n\"18\"",
        "fromNote": "Synthetic routing state 4",
        "event": "c",
        "toNote": "Synthetic routing state 5"
      },
      {
        "id": "=row\n\"19\"",
        "fromNote": "Synthetic routing state 4",
        "event": "d",
        "toNote": "Synthetic routing state 5"
      },
      {
        "id": "=row\n\"20\"",
        "fromNote": "Synthetic routing state 5",
        "event": "a",
        "toNote": "Synthetic routing state 6"
      },
      {
        "id": "=row\n\"21\"",
        "fromNote": "Synthetic routing state 5",
        "event": "b",
        "toNote": "Synthetic routing state 6"
      },
      {
        "id": "=row\n\"22\"",
        "fromNote": "Synthetic routing state 5",
        "event": "c",
        "toNote": "Synthetic routing state 6"
      },
      {
        "id": "=row\n\"23\"",
        "fromNote": "Synthetic routing state 5",
        "event": "d",
        "toNote": "Synthetic routing state 6"
      },
      {
        "id": "=row\n\"24\"",
        "fromNote": "Synthetic routing state 6",
        "event": "a",
        "toNote": "Synthetic routing state 7"
      },
      {
        "id": "=row\n\"25\"",
        "fromNote": "Synthetic routing state 6",
        "event": "b",
        "toNote": "Synthetic routing state 7"
      },
      {
        "id": "=row\n\"26\"",
        "fromNote": "Synthetic routing state 6",
        "event": "c",
        "toNote": "Synthetic routing state 7"
      },
      {
        "id": "=row\n\"27\"",
        "fromNote": "Synthetic routing state 6",
        "event": "d",
        "toNote": "Synthetic routing state 7"
      },
      {
        "id": "=row\n\"28\"",
        "fromNote": "Synthetic routing state 7",
        "event": "a",
        "toNote": "Synthetic routing state 0"
      },
      {
        "id": "=row\n\"29\"",
        "fromNote": "Synthetic routing state 7",
        "event": "b",
        "toNote": "Synthetic routing state 0"
      },
      {
        "id": "=row\n\"30\"",
        "fromNote": "Synthetic routing state 7",
        "event": "c",
        "toNote": "Synthetic routing state 0"
      },
      {
        "id": "=row\n\"31\"",
        "fromNote": "Synthetic routing state 7",
        "event": "d",
        "toNote": "Synthetic routing state 0"
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "id": "=row\n\"0\"",
      "from": "s0",
      "to": "s1",
      "aiFrom": "s0",
      "aiTo": "s1",
      "event": "a",
      "fromEvidence": [
        {
          "state": "s0",
          "score": 0.9945671900029346
        },
        {
          "state": "s1",
          "score": 0.9234198666007369
        },
        {
          "state": "s2",
          "score": 0.9061569773396111
        },
        {
          "state": "s4",
          "score": 0.8977617461770002
        },
        {
          "state": "s6",
          "score": 0.8927851965326814
        },
        {
          "state": "s3",
          "score": 0.891040457084042
        },
        {
          "state": "s5",
          "score": 0.8889571962857736
        },
        {
          "state": "s7",
          "score": 0.8747017183545922
        }
      ],
      "toEvidence": [
        {
          "state": "s1",
          "score": 0.9935310705082112
        },
        {
          "state": "s2",
          "score": 0.9670271337818853
        },
        {
          "state": "s3",
          "score": 0.9565012638456345
        },
        {
          "state": "s4",
          "score": 0.9487823358758882
        },
        {
          "state": "s6",
          "score": 0.9414201329445149
        },
        {
          "state": "s5",
          "score": 0.9375343973584855
        },
        {
          "state": "s7",
          "score": 0.9319913480828987
        },
        {
          "state": "s0",
          "score": 0.930184856402777
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "id": "=row\n\"1\"",
      "from": "s0",
      "to": "s1",
      "aiFrom": "s0",
      "aiTo": "s1",
      "event": "b",
      "fromEvidence": [
        {
          "state": "s0",
          "score": 0.9945671900029346
        },
        {
          "state": "s1",
          "score": 0.9234198666007369
        },
        {
          "state": "s2",
          "score": 0.9061569773396111
        },
        {
          "state": "s4",
          "score": 0.8977617461770002
        },
        {
          "state": "s6",
          "score": 0.8927851965326814
        },
        {
          "state": "s3",
          "score": 0.891040457084042
        },
        {
          "state": "s5",
          "score": 0.8889571962857736
        },
        {
          "state": "s7",
          "score": 0.8747017183545922
        }
      ],
      "toEvidence": [
        {
          "state": "s1",
          "score": 0.9935310705082112
        },
        {
          "state": "s2",
          "score": 0.9670271337818853
        },
        {
          "state": "s3",
          "score": 0.9565012638456345
        },
        {
          "state": "s4",
          "score": 0.9487823358758882
        },
        {
          "state": "s6",
          "score": 0.9414201329445149
        },
        {
          "state": "s5",
          "score": 0.9375343973584855
        },
        {
          "state": "s7",
          "score": 0.9319913480828987
        },
        {
          "state": "s0",
          "score": 0.930184856402777
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "id": "=row\n\"2\"",
      "from": "s0",
      "to": "s1",
      "aiFrom": "s0",
      "aiTo": "s1",
      "event": "c",
      "fromEvidence": [
        {
          "state": "s0",
          "score": 0.9945671900029346
        },
        {
          "state": "s1",
          "score": 0.9234198666007369
        },
        {
          "state": "s2",
          "score": 0.9061569773396111
        },
        {
          "state": "s4",
          "score": 0.8977617461770002
        },
        {
          "state": "s6",
          "score": 0.8927851965326814
        },
        {
          "state": "s3",
          "score": 0.891040457084042
        },
        {
          "state": "s5",
          "score": 0.8889571962857736
        },
        {
          "state": "s7",
          "score": 0.8747017183545922
        }
      ],
      "toEvidence": [
        {
          "state": "s1",
          "score": 0.9935310705082112
        },
        {
          "state": "s2",
          "score": 0.9670271337818853
        },
        {
          "state": "s3",
          "score": 0.9565012638456345
        },
        {
          "state": "s4",
          "score": 0.9487823358758882
        },
        {
          "state": "s6",
          "score": 0.9414201329445149
        },
        {
          "state": "s5",
          "score": 0.9375343973584855
        },
        {
          "state": "s7",
          "score": 0.9319913480828987
        },
        {
          "state": "s0",
          "score": 0.930184856402777
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "id": "=row\n\"3\"",
      "from": "s0",
      "to": "s1",
      "aiFrom": "s0",
      "aiTo": "s1",
      "event": "d",
      "fromEvidence": [
        {
          "state": "s0",
          "score": 0.9945671900029346
        },
        {
          "state": "s1",
          "score": 0.9234198666007369
        },
        {
          "state": "s2",
          "score": 0.9061569773396111
        },
        {
          "state": "s4",
          "score": 0.8977617461770002
        },
        {
          "state": "s6",
          "score": 0.8927851965326814
        },
        {
          "state": "s3",
          "score": 0.891040457084042
        },
        {
          "state": "s5",
          "score": 0.8889571962857736
        },
        {
          "state": "s7",
          "score": 0.8747017183545922
        }
      ],
      "toEvidence": [
        {
          "state": "s1",
          "score": 0.9935310705082112
        },
        {
          "state": "s2",
          "score": 0.9670271337818853
        },
        {
          "state": "s3",
          "score": 0.9565012638456345
        },
        {
          "state": "s4",
          "score": 0.9487823358758882
        },
        {
          "state": "s6",
          "score": 0.9414201329445149
        },
        {
          "state": "s5",
          "score": 0.9375343973584855
        },
        {
          "state": "s7",
          "score": 0.9319913480828987
        },
        {
          "state": "s0",
          "score": 0.930184856402777
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "id": "=row\n\"4\"",
      "from": "s1",
      "to": "s2",
      "aiFrom": "s1",
      "aiTo": "s2",
      "event": "a",
      "fromEvidence": [
        {
          "state": "s1",
          "score": 0.991830511697475
        },
        {
          "state": "s2",
          "score": 0.9625543639187033
        },
        {
          "state": "s3",
          "score": 0.95470236977352
        },
        {
          "state": "s4",
          "score": 0.9462559061193391
        },
        {
          "state": "s6",
          "score": 0.9436243133104467
        },
        {
          "state": "s5",
          "score": 0.9366490422529451
        },
        {
          "state": "s7",
          "score": 0.9331019921106053
        },
        {
          "state": "s0",
          "score": 0.9283786854967948
        }
      ],
      "toEvidence": [
        {
          "state": "s2",
          "score": 0.9923278883773651
        },
        {
          "state": "s1",
          "score": 0.9627872025507074
        },
        {
          "state": "s3",
          "score": 0.9557586763962341
        },
        {
          "state": "s4",
          "score": 0.9504921329330345
        },
        {
          "state": "s5",
          "score": 0.9447652817449866
        },
        {
          "state": "s6",
          "score": 0.9421400109735129
        },
        {
          "state": "s7",
          "score": 0.9309353165636127
        },
        {
          "state": "s0",
          "score": 0.9143684060904451
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "id": "=row\n\"5\"",
      "from": "s1",
      "to": "s2",
      "aiFrom": "s1",
      "aiTo": "s2",
      "event": "b",
      "fromEvidence": [
        {
          "state": "s1",
          "score": 0.991830511697475
        },
        {
          "state": "s2",
          "score": 0.9625543639187033
        },
        {
          "state": "s3",
          "score": 0.95470236977352
        },
        {
          "state": "s4",
          "score": 0.9462559061193391
        },
        {
          "state": "s6",
          "score": 0.9436243133104467
        },
        {
          "state": "s5",
          "score": 0.9366490422529451
        },
        {
          "state": "s7",
          "score": 0.9331019921106053
        },
        {
          "state": "s0",
          "score": 0.9283786854967948
        }
      ],
      "toEvidence": [
        {
          "state": "s2",
          "score": 0.9923278883773651
        },
        {
          "state": "s1",
          "score": 0.9627872025507074
        },
        {
          "state": "s3",
          "score": 0.9557586763962341
        },
        {
          "state": "s4",
          "score": 0.9504921329330345
        },
        {
          "state": "s5",
          "score": 0.9447652817449866
        },
        {
          "state": "s6",
          "score": 0.9421400109735129
        },
        {
          "state": "s7",
          "score": 0.9309353165636127
        },
        {
          "state": "s0",
          "score": 0.9143684060904451
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 6,
      "id": "=row\n\"6\"",
      "from": "s1",
      "to": "s2",
      "aiFrom": "s1",
      "aiTo": "s2",
      "event": "c",
      "fromEvidence": [
        {
          "state": "s1",
          "score": 0.991830511697475
        },
        {
          "state": "s2",
          "score": 0.9625543639187033
        },
        {
          "state": "s3",
          "score": 0.95470236977352
        },
        {
          "state": "s4",
          "score": 0.9462559061193391
        },
        {
          "state": "s6",
          "score": 0.9436243133104467
        },
        {
          "state": "s5",
          "score": 0.9366490422529451
        },
        {
          "state": "s7",
          "score": 0.9331019921106053
        },
        {
          "state": "s0",
          "score": 0.9283786854967948
        }
      ],
      "toEvidence": [
        {
          "state": "s2",
          "score": 0.9923278883773651
        },
        {
          "state": "s1",
          "score": 0.9627872025507074
        },
        {
          "state": "s3",
          "score": 0.9557586763962341
        },
        {
          "state": "s4",
          "score": 0.9504921329330345
        },
        {
          "state": "s5",
          "score": 0.9447652817449866
        },
        {
          "state": "s6",
          "score": 0.9421400109735129
        },
        {
          "state": "s7",
          "score": 0.9309353165636127
        },
        {
          "state": "s0",
          "score": 0.9143684060904451
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 7,
      "id": "=row\n\"7\"",
      "from": "s1",
      "to": "s2",
      "aiFrom": "s1",
      "aiTo": "s2",
      "event": "d",
      "fromEvidence": [
        {
          "state": "s1",
          "score": 0.991830511697475
        },
        {
          "state": "s2",
          "score": 0.9625543639187033
        },
        {
          "state": "s3",
          "score": 0.95470236977352
        },
        {
          "state": "s4",
          "score": 0.9462559061193391
        },
        {
          "state": "s6",
          "score": 0.9436243133104467
        },
        {
          "state": "s5",
          "score": 0.9366490422529451
        },
        {
          "state": "s7",
          "score": 0.9331019921106053
        },
        {
          "state": "s0",
          "score": 0.9283786854967948
        }
      ],
      "toEvidence": [
        {
          "state": "s2",
          "score": 0.9923278883773651
        },
        {
          "state": "s1",
          "score": 0.9627872025507074
        },
        {
          "state": "s3",
          "score": 0.9557586763962341
        },
        {
          "state": "s4",
          "score": 0.9504921329330345
        },
        {
          "state": "s5",
          "score": 0.9447652817449866
        },
        {
          "state": "s6",
          "score": 0.9421400109735129
        },
        {
          "state": "s7",
          "score": 0.9309353165636127
        },
        {
          "state": "s0",
          "score": 0.9143684060904451
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 8,
      "id": "=row\n\"8\"",
      "from": "s2",
      "to": "s3",
      "aiFrom": "s2",
      "aiTo": "s3",
      "event": "a",
      "fromEvidence": [
        {
          "state": "s2",
          "score": 0.9922087437523842
        },
        {
          "state": "s1",
          "score": 0.9658925966860512
        },
        {
          "state": "s3",
          "score": 0.9562199181430888
        },
        {
          "state": "s4",
          "score": 0.9501977587691819
        },
        {
          "state": "s5",
          "score": 0.9423140492679818
        },
        {
          "state": "s6",
          "score": 0.9400500802142728
        },
        {
          "state": "s7",
          "score": 0.9325542235760657
        },
        {
          "state": "s0",
          "score": 0.9202559392528249
        }
      ],
      "toEvidence": [
        {
          "state": "s3",
          "score": 0.9933078685029164
        },
        {
          "state": "s1",
          "score": 0.9611928370799669
        },
        {
          "state": "s4",
          "score": 0.9579954094015486
        },
        {
          "state": "s2",
          "score": 0.9569733118814161
        },
        {
          "state": "s6",
          "score": 0.9455265143426992
        },
        {
          "state": "s5",
          "score": 0.942206886426364
        },
        {
          "state": "s7",
          "score": 0.9352612596975958
        },
        {
          "state": "s0",
          "score": 0.9079053530594522
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 9,
      "id": "=row\n\"9\"",
      "from": "s2",
      "to": "s3",
      "aiFrom": "s2",
      "aiTo": "s3",
      "event": "b",
      "fromEvidence": [
        {
          "state": "s2",
          "score": 0.9922087437523842
        },
        {
          "state": "s1",
          "score": 0.9658925966860512
        },
        {
          "state": "s3",
          "score": 0.9562199181430888
        },
        {
          "state": "s4",
          "score": 0.9501977587691819
        },
        {
          "state": "s5",
          "score": 0.9423140492679818
        },
        {
          "state": "s6",
          "score": 0.9400500802142728
        },
        {
          "state": "s7",
          "score": 0.9325542235760657
        },
        {
          "state": "s0",
          "score": 0.9202559392528249
        }
      ],
      "toEvidence": [
        {
          "state": "s3",
          "score": 0.9933078685029164
        },
        {
          "state": "s1",
          "score": 0.9611928370799669
        },
        {
          "state": "s4",
          "score": 0.9579954094015486
        },
        {
          "state": "s2",
          "score": 0.9569733118814161
        },
        {
          "state": "s6",
          "score": 0.9455265143426992
        },
        {
          "state": "s5",
          "score": 0.942206886426364
        },
        {
          "state": "s7",
          "score": 0.9352612596975958
        },
        {
          "state": "s0",
          "score": 0.9079053530594522
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 10,
      "id": "=row\n\"10\"",
      "from": "s2",
      "to": "s3",
      "aiFrom": "s2",
      "aiTo": "s3",
      "event": "c",
      "fromEvidence": [
        {
          "state": "s2",
          "score": 0.9922087437523842
        },
        {
          "state": "s1",
          "score": 0.9658925966860512
        },
        {
          "state": "s3",
          "score": 0.9562199181430888
        },
        {
          "state": "s4",
          "score": 0.9501977587691819
        },
        {
          "state": "s5",
          "score": 0.9423140492679818
        },
        {
          "state": "s6",
          "score": 0.9400500802142728
        },
        {
          "state": "s7",
          "score": 0.9325542235760657
        },
        {
          "state": "s0",
          "score": 0.9202559392528249
        }
      ],
      "toEvidence": [
        {
          "state": "s3",
          "score": 0.9933078685029164
        },
        {
          "state": "s1",
          "score": 0.9611928370799669
        },
        {
          "state": "s4",
          "score": 0.9579954094015486
        },
        {
          "state": "s2",
          "score": 0.9569733118814161
        },
        {
          "state": "s6",
          "score": 0.9455265143426992
        },
        {
          "state": "s5",
          "score": 0.942206886426364
        },
        {
          "state": "s7",
          "score": 0.9352612596975958
        },
        {
          "state": "s0",
          "score": 0.9079053530594522
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 11,
      "id": "=row\n\"11\"",
      "from": "s2",
      "to": "s3",
      "aiFrom": "s2",
      "aiTo": "s3",
      "event": "d",
      "fromEvidence": [
        {
          "state": "s2",
          "score": 0.9922087437523842
        },
        {
          "state": "s1",
          "score": 0.9658925966860512
        },
        {
          "state": "s3",
          "score": 0.9562199181430888
        },
        {
          "state": "s4",
          "score": 0.9501977587691819
        },
        {
          "state": "s5",
          "score": 0.9423140492679818
        },
        {
          "state": "s6",
          "score": 0.9400500802142728
        },
        {
          "state": "s7",
          "score": 0.9325542235760657
        },
        {
          "state": "s0",
          "score": 0.9202559392528249
        }
      ],
      "toEvidence": [
        {
          "state": "s3",
          "score": 0.9933078685029164
        },
        {
          "state": "s1",
          "score": 0.9611928370799669
        },
        {
          "state": "s4",
          "score": 0.9579954094015486
        },
        {
          "state": "s2",
          "score": 0.9569733118814161
        },
        {
          "state": "s6",
          "score": 0.9455265143426992
        },
        {
          "state": "s5",
          "score": 0.942206886426364
        },
        {
          "state": "s7",
          "score": 0.9352612596975958
        },
        {
          "state": "s0",
          "score": 0.9079053530594522
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 12,
      "id": "=row\n\"12\"",
      "from": "s3",
      "to": "s4",
      "aiFrom": "s3",
      "aiTo": "s4",
      "event": "a",
      "fromEvidence": [
        {
          "state": "s3",
          "score": 0.9916769871884835
        },
        {
          "state": "s2",
          "score": 0.9566959831318381
        },
        {
          "state": "s4",
          "score": 0.9556528054973701
        },
        {
          "state": "s1",
          "score": 0.9542645747297444
        },
        {
          "state": "s6",
          "score": 0.9452367611917696
        },
        {
          "state": "s5",
          "score": 0.9423663490336426
        },
        {
          "state": "s7",
          "score": 0.9330735753998941
        },
        {
          "state": "s0",
          "score": 0.9000299105224474
        }
      ],
      "toEvidence": [
        {
          "state": "s4",
          "score": 0.9943495936143572
        },
        {
          "state": "s3",
          "score": 0.9495973812696583
        },
        {
          "state": "s2",
          "score": 0.9480987752573213
        },
        {
          "state": "s1",
          "score": 0.9443663453651382
        },
        {
          "state": "s5",
          "score": 0.9422544790292939
        },
        {
          "state": "s6",
          "score": 0.9393968681972351
        },
        {
          "state": "s7",
          "score": 0.921661413466291
        },
        {
          "state": "s0",
          "score": 0.9078890474921113
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 13,
      "id": "=row\n\"13\"",
      "from": "s3",
      "to": "s4",
      "aiFrom": "s3",
      "aiTo": "s4",
      "event": "b",
      "fromEvidence": [
        {
          "state": "s3",
          "score": 0.9916769871884835
        },
        {
          "state": "s2",
          "score": 0.9566959831318381
        },
        {
          "state": "s4",
          "score": 0.9556528054973701
        },
        {
          "state": "s1",
          "score": 0.9542645747297444
        },
        {
          "state": "s6",
          "score": 0.9452367611917696
        },
        {
          "state": "s5",
          "score": 0.9423663490336426
        },
        {
          "state": "s7",
          "score": 0.9330735753998941
        },
        {
          "state": "s0",
          "score": 0.9000299105224474
        }
      ],
      "toEvidence": [
        {
          "state": "s4",
          "score": 0.9943495936143572
        },
        {
          "state": "s3",
          "score": 0.9495973812696583
        },
        {
          "state": "s2",
          "score": 0.9480987752573213
        },
        {
          "state": "s1",
          "score": 0.9443663453651382
        },
        {
          "state": "s5",
          "score": 0.9422544790292939
        },
        {
          "state": "s6",
          "score": 0.9393968681972351
        },
        {
          "state": "s7",
          "score": 0.921661413466291
        },
        {
          "state": "s0",
          "score": 0.9078890474921113
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 14,
      "id": "=row\n\"14\"",
      "from": "s3",
      "to": "s4",
      "aiFrom": "s3",
      "aiTo": "s4",
      "event": "c",
      "fromEvidence": [
        {
          "state": "s3",
          "score": 0.9916769871884835
        },
        {
          "state": "s2",
          "score": 0.9566959831318381
        },
        {
          "state": "s4",
          "score": 0.9556528054973701
        },
        {
          "state": "s1",
          "score": 0.9542645747297444
        },
        {
          "state": "s6",
          "score": 0.9452367611917696
        },
        {
          "state": "s5",
          "score": 0.9423663490336426
        },
        {
          "state": "s7",
          "score": 0.9330735753998941
        },
        {
          "state": "s0",
          "score": 0.9000299105224474
        }
      ],
      "toEvidence": [
        {
          "state": "s4",
          "score": 0.9943495936143572
        },
        {
          "state": "s3",
          "score": 0.9495973812696583
        },
        {
          "state": "s2",
          "score": 0.9480987752573213
        },
        {
          "state": "s1",
          "score": 0.9443663453651382
        },
        {
          "state": "s5",
          "score": 0.9422544790292939
        },
        {
          "state": "s6",
          "score": 0.9393968681972351
        },
        {
          "state": "s7",
          "score": 0.921661413466291
        },
        {
          "state": "s0",
          "score": 0.9078890474921113
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 15,
      "id": "=row\n\"15\"",
      "from": "s3",
      "to": "s4",
      "aiFrom": "s3",
      "aiTo": "s4",
      "event": "d",
      "fromEvidence": [
        {
          "state": "s3",
          "score": 0.9916769871884835
        },
        {
          "state": "s2",
          "score": 0.9566959831318381
        },
        {
          "state": "s4",
          "score": 0.9556528054973701
        },
        {
          "state": "s1",
          "score": 0.9542645747297444
        },
        {
          "state": "s6",
          "score": 0.9452367611917696
        },
        {
          "state": "s5",
          "score": 0.9423663490336426
        },
        {
          "state": "s7",
          "score": 0.9330735753998941
        },
        {
          "state": "s0",
          "score": 0.9000299105224474
        }
      ],
      "toEvidence": [
        {
          "state": "s4",
          "score": 0.9943495936143572
        },
        {
          "state": "s3",
          "score": 0.9495973812696583
        },
        {
          "state": "s2",
          "score": 0.9480987752573213
        },
        {
          "state": "s1",
          "score": 0.9443663453651382
        },
        {
          "state": "s5",
          "score": 0.9422544790292939
        },
        {
          "state": "s6",
          "score": 0.9393968681972351
        },
        {
          "state": "s7",
          "score": 0.921661413466291
        },
        {
          "state": "s0",
          "score": 0.9078890474921113
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 16,
      "id": "=row\n\"16\"",
      "from": "s4",
      "to": "s5",
      "aiFrom": "s4",
      "aiTo": "s5",
      "event": "a",
      "fromEvidence": [
        {
          "state": "s4",
          "score": 0.9936271895890543
        },
        {
          "state": "s3",
          "score": 0.9520551209432193
        },
        {
          "state": "s2",
          "score": 0.9518491025893665
        },
        {
          "state": "s5",
          "score": 0.9496605481345126
        },
        {
          "state": "s1",
          "score": 0.9489528083724086
        },
        {
          "state": "s6",
          "score": 0.9433544859015832
        },
        {
          "state": "s7",
          "score": 0.9280138308874435
        },
        {
          "state": "s0",
          "score": 0.9095879554723392
        }
      ],
      "toEvidence": [
        {
          "state": "s5",
          "score": 0.9930277011350525
        },
        {
          "state": "s6",
          "score": 0.9473179146471298
        },
        {
          "state": "s4",
          "score": 0.9418503654819148
        },
        {
          "state": "s3",
          "score": 0.937903087625494
        },
        {
          "state": "s7",
          "score": 0.9347394514659843
        },
        {
          "state": "s2",
          "score": 0.9343782863188105
        },
        {
          "state": "s1",
          "score": 0.9288086332141666
        },
        {
          "state": "s0",
          "score": 0.8917948721304076
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 17,
      "id": "=row\n\"17\"",
      "from": "s4",
      "to": "s5",
      "aiFrom": "s4",
      "aiTo": "s5",
      "event": "b",
      "fromEvidence": [
        {
          "state": "s4",
          "score": 0.9936271895890543
        },
        {
          "state": "s3",
          "score": 0.9520551209432193
        },
        {
          "state": "s2",
          "score": 0.9518491025893665
        },
        {
          "state": "s5",
          "score": 0.9496605481345126
        },
        {
          "state": "s1",
          "score": 0.9489528083724086
        },
        {
          "state": "s6",
          "score": 0.9433544859015832
        },
        {
          "state": "s7",
          "score": 0.9280138308874435
        },
        {
          "state": "s0",
          "score": 0.9095879554723392
        }
      ],
      "toEvidence": [
        {
          "state": "s5",
          "score": 0.9930277011350525
        },
        {
          "state": "s6",
          "score": 0.9473179146471298
        },
        {
          "state": "s4",
          "score": 0.9418503654819148
        },
        {
          "state": "s3",
          "score": 0.937903087625494
        },
        {
          "state": "s7",
          "score": 0.9347394514659843
        },
        {
          "state": "s2",
          "score": 0.9343782863188105
        },
        {
          "state": "s1",
          "score": 0.9288086332141666
        },
        {
          "state": "s0",
          "score": 0.8917948721304076
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 18,
      "id": "=row\n\"18\"",
      "from": "s4",
      "to": "s5",
      "aiFrom": "s4",
      "aiTo": "s5",
      "event": "c",
      "fromEvidence": [
        {
          "state": "s4",
          "score": 0.9936271895890543
        },
        {
          "state": "s3",
          "score": 0.9520551209432193
        },
        {
          "state": "s2",
          "score": 0.9518491025893665
        },
        {
          "state": "s5",
          "score": 0.9496605481345126
        },
        {
          "state": "s1",
          "score": 0.9489528083724086
        },
        {
          "state": "s6",
          "score": 0.9433544859015832
        },
        {
          "state": "s7",
          "score": 0.9280138308874435
        },
        {
          "state": "s0",
          "score": 0.9095879554723392
        }
      ],
      "toEvidence": [
        {
          "state": "s5",
          "score": 0.9930277011350525
        },
        {
          "state": "s6",
          "score": 0.9473179146471298
        },
        {
          "state": "s4",
          "score": 0.9418503654819148
        },
        {
          "state": "s3",
          "score": 0.937903087625494
        },
        {
          "state": "s7",
          "score": 0.9347394514659843
        },
        {
          "state": "s2",
          "score": 0.9343782863188105
        },
        {
          "state": "s1",
          "score": 0.9288086332141666
        },
        {
          "state": "s0",
          "score": 0.8917948721304076
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 19,
      "id": "=row\n\"19\"",
      "from": "s4",
      "to": "s5",
      "aiFrom": "s4",
      "aiTo": "s5",
      "event": "d",
      "fromEvidence": [
        {
          "state": "s4",
          "score": 0.9936271895890543
        },
        {
          "state": "s3",
          "score": 0.9520551209432193
        },
        {
          "state": "s2",
          "score": 0.9518491025893665
        },
        {
          "state": "s5",
          "score": 0.9496605481345126
        },
        {
          "state": "s1",
          "score": 0.9489528083724086
        },
        {
          "state": "s6",
          "score": 0.9433544859015832
        },
        {
          "state": "s7",
          "score": 0.9280138308874435
        },
        {
          "state": "s0",
          "score": 0.9095879554723392
        }
      ],
      "toEvidence": [
        {
          "state": "s5",
          "score": 0.9930277011350525
        },
        {
          "state": "s6",
          "score": 0.9473179146471298
        },
        {
          "state": "s4",
          "score": 0.9418503654819148
        },
        {
          "state": "s3",
          "score": 0.937903087625494
        },
        {
          "state": "s7",
          "score": 0.9347394514659843
        },
        {
          "state": "s2",
          "score": 0.9343782863188105
        },
        {
          "state": "s1",
          "score": 0.9288086332141666
        },
        {
          "state": "s0",
          "score": 0.8917948721304076
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 20,
      "id": "=row\n\"20\"",
      "from": "s5",
      "to": "s6",
      "aiFrom": "s5",
      "aiTo": "s6",
      "event": "a",
      "fromEvidence": [
        {
          "state": "s5",
          "score": 0.9923640363771513
        },
        {
          "state": "s6",
          "score": 0.9443049059641624
        },
        {
          "state": "s4",
          "score": 0.9391993154564231
        },
        {
          "state": "s3",
          "score": 0.9365623637862399
        },
        {
          "state": "s2",
          "score": 0.935916174038818
        },
        {
          "state": "s7",
          "score": 0.9339220657089904
        },
        {
          "state": "s1",
          "score": 0.9306868037316118
        },
        {
          "state": "s0",
          "score": 0.8965819161814024
        }
      ],
      "toEvidence": [
        {
          "state": "s6",
          "score": 0.9930344476790686
        },
        {
          "state": "s5",
          "score": 0.9528300467776082
        },
        {
          "state": "s3",
          "score": 0.9443867594584332
        },
        {
          "state": "s4",
          "score": 0.9421211372111129
        },
        {
          "state": "s7",
          "score": 0.9412466732633951
        },
        {
          "state": "s2",
          "score": 0.9409664659815243
        },
        {
          "state": "s1",
          "score": 0.9383451223984871
        },
        {
          "state": "s0",
          "score": 0.8970475499735471
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 21,
      "id": "=row\n\"21\"",
      "from": "s5",
      "to": "s6",
      "aiFrom": "s5",
      "aiTo": "s6",
      "event": "b",
      "fromEvidence": [
        {
          "state": "s5",
          "score": 0.9923640363771513
        },
        {
          "state": "s6",
          "score": 0.9443049059641624
        },
        {
          "state": "s4",
          "score": 0.9391993154564231
        },
        {
          "state": "s3",
          "score": 0.9365623637862399
        },
        {
          "state": "s2",
          "score": 0.935916174038818
        },
        {
          "state": "s7",
          "score": 0.9339220657089904
        },
        {
          "state": "s1",
          "score": 0.9306868037316118
        },
        {
          "state": "s0",
          "score": 0.8965819161814024
        }
      ],
      "toEvidence": [
        {
          "state": "s6",
          "score": 0.9930344476790686
        },
        {
          "state": "s5",
          "score": 0.9528300467776082
        },
        {
          "state": "s3",
          "score": 0.9443867594584332
        },
        {
          "state": "s4",
          "score": 0.9421211372111129
        },
        {
          "state": "s7",
          "score": 0.9412466732633951
        },
        {
          "state": "s2",
          "score": 0.9409664659815243
        },
        {
          "state": "s1",
          "score": 0.9383451223984871
        },
        {
          "state": "s0",
          "score": 0.8970475499735471
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 22,
      "id": "=row\n\"22\"",
      "from": "s5",
      "to": "s6",
      "aiFrom": "s5",
      "aiTo": "s6",
      "event": "c",
      "fromEvidence": [
        {
          "state": "s5",
          "score": 0.9923640363771513
        },
        {
          "state": "s6",
          "score": 0.9443049059641624
        },
        {
          "state": "s4",
          "score": 0.9391993154564231
        },
        {
          "state": "s3",
          "score": 0.9365623637862399
        },
        {
          "state": "s2",
          "score": 0.935916174038818
        },
        {
          "state": "s7",
          "score": 0.9339220657089904
        },
        {
          "state": "s1",
          "score": 0.9306868037316118
        },
        {
          "state": "s0",
          "score": 0.8965819161814024
        }
      ],
      "toEvidence": [
        {
          "state": "s6",
          "score": 0.9930344476790686
        },
        {
          "state": "s5",
          "score": 0.9528300467776082
        },
        {
          "state": "s3",
          "score": 0.9443867594584332
        },
        {
          "state": "s4",
          "score": 0.9421211372111129
        },
        {
          "state": "s7",
          "score": 0.9412466732633951
        },
        {
          "state": "s2",
          "score": 0.9409664659815243
        },
        {
          "state": "s1",
          "score": 0.9383451223984871
        },
        {
          "state": "s0",
          "score": 0.8970475499735471
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 23,
      "id": "=row\n\"23\"",
      "from": "s5",
      "to": "s6",
      "aiFrom": "s5",
      "aiTo": "s6",
      "event": "d",
      "fromEvidence": [
        {
          "state": "s5",
          "score": 0.9923640363771513
        },
        {
          "state": "s6",
          "score": 0.9443049059641624
        },
        {
          "state": "s4",
          "score": 0.9391993154564231
        },
        {
          "state": "s3",
          "score": 0.9365623637862399
        },
        {
          "state": "s2",
          "score": 0.935916174038818
        },
        {
          "state": "s7",
          "score": 0.9339220657089904
        },
        {
          "state": "s1",
          "score": 0.9306868037316118
        },
        {
          "state": "s0",
          "score": 0.8965819161814024
        }
      ],
      "toEvidence": [
        {
          "state": "s6",
          "score": 0.9930344476790686
        },
        {
          "state": "s5",
          "score": 0.9528300467776082
        },
        {
          "state": "s3",
          "score": 0.9443867594584332
        },
        {
          "state": "s4",
          "score": 0.9421211372111129
        },
        {
          "state": "s7",
          "score": 0.9412466732633951
        },
        {
          "state": "s2",
          "score": 0.9409664659815243
        },
        {
          "state": "s1",
          "score": 0.9383451223984871
        },
        {
          "state": "s0",
          "score": 0.8970475499735471
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 24,
      "id": "=row\n\"24\"",
      "from": "s6",
      "to": "s7",
      "aiFrom": "s6",
      "aiTo": "s7",
      "event": "a",
      "fromEvidence": [
        {
          "state": "s6",
          "score": 0.993565301832901
        },
        {
          "state": "s5",
          "score": 0.9511184741323866
        },
        {
          "state": "s4",
          "score": 0.9408990760390716
        },
        {
          "state": "s2",
          "score": 0.9402190435194482
        },
        {
          "state": "s7",
          "score": 0.9390914907853286
        },
        {
          "state": "s3",
          "score": 0.9389444330716927
        },
        {
          "state": "s1",
          "score": 0.9379661558988985
        },
        {
          "state": "s0",
          "score": 0.9040225657085587
        }
      ],
      "toEvidence": [
        {
          "state": "s7",
          "score": 0.9888249439813878
        },
        {
          "state": "s6",
          "score": 0.9461136103377297
        },
        {
          "state": "s1",
          "score": 0.9379656568248357
        },
        {
          "state": "s5",
          "score": 0.9373632576454701
        },
        {
          "state": "s3",
          "score": 0.9349118997233573
        },
        {
          "state": "s2",
          "score": 0.9327069246866371
        },
        {
          "state": "s4",
          "score": 0.9317607385580274
        },
        {
          "state": "s0",
          "score": 0.8860273820841938
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 25,
      "id": "=row\n\"25\"",
      "from": "s6",
      "to": "s7",
      "aiFrom": "s6",
      "aiTo": "s7",
      "event": "b",
      "fromEvidence": [
        {
          "state": "s6",
          "score": 0.993565301832901
        },
        {
          "state": "s5",
          "score": 0.9511184741323866
        },
        {
          "state": "s4",
          "score": 0.9408990760390716
        },
        {
          "state": "s2",
          "score": 0.9402190435194482
        },
        {
          "state": "s7",
          "score": 0.9390914907853286
        },
        {
          "state": "s3",
          "score": 0.9389444330716927
        },
        {
          "state": "s1",
          "score": 0.9379661558988985
        },
        {
          "state": "s0",
          "score": 0.9040225657085587
        }
      ],
      "toEvidence": [
        {
          "state": "s7",
          "score": 0.9888249439813878
        },
        {
          "state": "s6",
          "score": 0.9461136103377297
        },
        {
          "state": "s1",
          "score": 0.9379656568248357
        },
        {
          "state": "s5",
          "score": 0.9373632576454701
        },
        {
          "state": "s3",
          "score": 0.9349118997233573
        },
        {
          "state": "s2",
          "score": 0.9327069246866371
        },
        {
          "state": "s4",
          "score": 0.9317607385580274
        },
        {
          "state": "s0",
          "score": 0.8860273820841938
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 26,
      "id": "=row\n\"26\"",
      "from": "s6",
      "to": "s7",
      "aiFrom": "s6",
      "aiTo": "s7",
      "event": "c",
      "fromEvidence": [
        {
          "state": "s6",
          "score": 0.993565301832901
        },
        {
          "state": "s5",
          "score": 0.9511184741323866
        },
        {
          "state": "s4",
          "score": 0.9408990760390716
        },
        {
          "state": "s2",
          "score": 0.9402190435194482
        },
        {
          "state": "s7",
          "score": 0.9390914907853286
        },
        {
          "state": "s3",
          "score": 0.9389444330716927
        },
        {
          "state": "s1",
          "score": 0.9379661558988985
        },
        {
          "state": "s0",
          "score": 0.9040225657085587
        }
      ],
      "toEvidence": [
        {
          "state": "s7",
          "score": 0.9888249439813878
        },
        {
          "state": "s6",
          "score": 0.9461136103377297
        },
        {
          "state": "s1",
          "score": 0.9379656568248357
        },
        {
          "state": "s5",
          "score": 0.9373632576454701
        },
        {
          "state": "s3",
          "score": 0.9349118997233573
        },
        {
          "state": "s2",
          "score": 0.9327069246866371
        },
        {
          "state": "s4",
          "score": 0.9317607385580274
        },
        {
          "state": "s0",
          "score": 0.8860273820841938
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 27,
      "id": "=row\n\"27\"",
      "from": "s6",
      "to": "s7",
      "aiFrom": "s6",
      "aiTo": "s7",
      "event": "d",
      "fromEvidence": [
        {
          "state": "s6",
          "score": 0.993565301832901
        },
        {
          "state": "s5",
          "score": 0.9511184741323866
        },
        {
          "state": "s4",
          "score": 0.9408990760390716
        },
        {
          "state": "s2",
          "score": 0.9402190435194482
        },
        {
          "state": "s7",
          "score": 0.9390914907853286
        },
        {
          "state": "s3",
          "score": 0.9389444330716927
        },
        {
          "state": "s1",
          "score": 0.9379661558988985
        },
        {
          "state": "s0",
          "score": 0.9040225657085587
        }
      ],
      "toEvidence": [
        {
          "state": "s7",
          "score": 0.9888249439813878
        },
        {
          "state": "s6",
          "score": 0.9461136103377297
        },
        {
          "state": "s1",
          "score": 0.9379656568248357
        },
        {
          "state": "s5",
          "score": 0.9373632576454701
        },
        {
          "state": "s3",
          "score": 0.9349118997233573
        },
        {
          "state": "s2",
          "score": 0.9327069246866371
        },
        {
          "state": "s4",
          "score": 0.9317607385580274
        },
        {
          "state": "s0",
          "score": 0.8860273820841938
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 28,
      "id": "=row\n\"28\"",
      "from": "s7",
      "to": "s0",
      "aiFrom": "s7",
      "aiTo": "s0",
      "event": "a",
      "fromEvidence": [
        {
          "state": "s7",
          "score": 0.9902647237647598
        },
        {
          "state": "s6",
          "score": 0.9452782824068388
        },
        {
          "state": "s5",
          "score": 0.9450300614681144
        },
        {
          "state": "s1",
          "score": 0.9400478624538016
        },
        {
          "state": "s2",
          "score": 0.9389801035676452
        },
        {
          "state": "s3",
          "score": 0.9378086846167384
        },
        {
          "state": "s4",
          "score": 0.9352496279192662
        },
        {
          "state": "s0",
          "score": 0.8937448680474563
        }
      ],
      "toEvidence": [
        {
          "state": "s0",
          "score": 0.991104083183772
        },
        {
          "state": "s1",
          "score": 0.9252210806950552
        },
        {
          "state": "s2",
          "score": 0.9120129475174967
        },
        {
          "state": "s4",
          "score": 0.9002035713853207
        },
        {
          "state": "s6",
          "score": 0.8975625192346423
        },
        {
          "state": "s5",
          "score": 0.8911655682504734
        },
        {
          "state": "s3",
          "score": 0.8886503262415408
        },
        {
          "state": "s7",
          "score": 0.8777671517502806
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 29,
      "id": "=row\n\"29\"",
      "from": "s7",
      "to": "s0",
      "aiFrom": "s7",
      "aiTo": "s0",
      "event": "b",
      "fromEvidence": [
        {
          "state": "s7",
          "score": 0.9902647237647598
        },
        {
          "state": "s6",
          "score": 0.9452782824068388
        },
        {
          "state": "s5",
          "score": 0.9450300614681144
        },
        {
          "state": "s1",
          "score": 0.9400478624538016
        },
        {
          "state": "s2",
          "score": 0.9389801035676452
        },
        {
          "state": "s3",
          "score": 0.9378086846167384
        },
        {
          "state": "s4",
          "score": 0.9352496279192662
        },
        {
          "state": "s0",
          "score": 0.8937448680474563
        }
      ],
      "toEvidence": [
        {
          "state": "s0",
          "score": 0.991104083183772
        },
        {
          "state": "s1",
          "score": 0.9252210806950552
        },
        {
          "state": "s2",
          "score": 0.9120129475174967
        },
        {
          "state": "s4",
          "score": 0.9002035713853207
        },
        {
          "state": "s6",
          "score": 0.8975625192346423
        },
        {
          "state": "s5",
          "score": 0.8911655682504734
        },
        {
          "state": "s3",
          "score": 0.8886503262415408
        },
        {
          "state": "s7",
          "score": 0.8777671517502806
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 30,
      "id": "=row\n\"30\"",
      "from": "s7",
      "to": "s0",
      "aiFrom": "s7",
      "aiTo": "s0",
      "event": "c",
      "fromEvidence": [
        {
          "state": "s7",
          "score": 0.9902647237647598
        },
        {
          "state": "s6",
          "score": 0.9452782824068388
        },
        {
          "state": "s5",
          "score": 0.9450300614681144
        },
        {
          "state": "s1",
          "score": 0.9400478624538016
        },
        {
          "state": "s2",
          "score": 0.9389801035676452
        },
        {
          "state": "s3",
          "score": 0.9378086846167384
        },
        {
          "state": "s4",
          "score": 0.9352496279192662
        },
        {
          "state": "s0",
          "score": 0.8937448680474563
        }
      ],
      "toEvidence": [
        {
          "state": "s0",
          "score": 0.991104083183772
        },
        {
          "state": "s1",
          "score": 0.9252210806950552
        },
        {
          "state": "s2",
          "score": 0.9120129475174967
        },
        {
          "state": "s4",
          "score": 0.9002035713853207
        },
        {
          "state": "s6",
          "score": 0.8975625192346423
        },
        {
          "state": "s5",
          "score": 0.8911655682504734
        },
        {
          "state": "s3",
          "score": 0.8886503262415408
        },
        {
          "state": "s7",
          "score": 0.8777671517502806
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 31,
      "id": "=row\n\"31\"",
      "from": "s7",
      "to": "s0",
      "aiFrom": "s7",
      "aiTo": "s0",
      "event": "d",
      "fromEvidence": [
        {
          "state": "s7",
          "score": 0.9902647237647598
        },
        {
          "state": "s6",
          "score": 0.9452782824068388
        },
        {
          "state": "s5",
          "score": 0.9450300614681144
        },
        {
          "state": "s1",
          "score": 0.9400478624538016
        },
        {
          "state": "s2",
          "score": 0.9389801035676452
        },
        {
          "state": "s3",
          "score": 0.9378086846167384
        },
        {
          "state": "s4",
          "score": 0.9352496279192662
        },
        {
          "state": "s0",
          "score": 0.8937448680474563
        }
      ],
      "toEvidence": [
        {
          "state": "s0",
          "score": 0.991104083183772
        },
        {
          "state": "s1",
          "score": 0.9252210806950552
        },
        {
          "state": "s2",
          "score": 0.9120129475174967
        },
        {
          "state": "s4",
          "score": 0.9002035713853207
        },
        {
          "state": "s6",
          "score": 0.8975625192346423
        },
        {
          "state": "s5",
          "score": 0.8911655682504734
        },
        {
          "state": "s3",
          "score": 0.8886503262415408
        },
        {
          "state": "s7",
          "score": 0.8777671517502806
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Reviewed deterministic Moore-machine worksheet only. Visible outputs must completely describe behavior you intend to preserve. No hidden state, timing, side effects, probabilities, guards or nondeterminism. AI similarity is not identity proof. No system changes.",
  "analysis": {
    "status": "ready",
    "baselineStates": 8,
    "reachableStates": 8,
    "minimalStateCount": 2,
    "mergedReachableStates": 6,
    "unreachable": [],
    "start": "Q1",
    "states": [
      {
        "id": "Q1",
        "outcome": "out0",
        "members": [
          "s0",
          "s2",
          "s4",
          "s6"
        ]
      },
      {
        "id": "Q2",
        "outcome": "out1",
        "members": [
          "s1",
          "s3",
          "s5",
          "s7"
        ]
      }
    ],
    "transitions": [
      {
        "from": "Q1",
        "event": "a",
        "to": "Q2",
        "sourceIds": [
          "=row\n\"0\"",
          "=row\n\"8\"",
          "=row\n\"16\"",
          "=row\n\"24\""
        ]
      },
      {
        "from": "Q1",
        "event": "b",
        "to": "Q2",
        "sourceIds": [
          "=row\n\"1\"",
          "=row\n\"9\"",
          "=row\n\"17\"",
          "=row\n\"25\""
        ]
      },
      {
        "from": "Q1",
        "event": "c",
        "to": "Q2",
        "sourceIds": [
          "=row\n\"2\"",
          "=row\n\"10\"",
          "=row\n\"18\"",
          "=row\n\"26\""
        ]
      },
      {
        "from": "Q1",
        "event": "d",
        "to": "Q2",
        "sourceIds": [
          "=row\n\"3\"",
          "=row\n\"11\"",
          "=row\n\"19\"",
          "=row\n\"27\""
        ]
      },
      {
        "from": "Q2",
        "event": "a",
        "to": "Q1",
        "sourceIds": [
          "=row\n\"4\"",
          "=row\n\"12\"",
          "=row\n\"20\"",
          "=row\n\"28\""
        ]
      },
      {
        "from": "Q2",
        "event": "b",
        "to": "Q1",
        "sourceIds": [
          "=row\n\"5\"",
          "=row\n\"13\"",
          "=row\n\"21\"",
          "=row\n\"29\""
        ]
      },
      {
        "from": "Q2",
        "event": "c",
        "to": "Q1",
        "sourceIds": [
          "=row\n\"6\"",
          "=row\n\"14\"",
          "=row\n\"22\"",
          "=row\n\"30\""
        ]
      },
      {
        "from": "Q2",
        "event": "d",
        "to": "Q1",
        "sourceIds": [
          "=row\n\"7\"",
          "=row\n\"15\"",
          "=row\n\"23\"",
          "=row\n\"31\""
        ]
      }
    ],
    "tests": [
      {
        "left": "Q1",
        "right": "Q2",
        "events": [],
        "leftOutcome": "out0",
        "rightOutcome": "out1"
      }
    ],
    "refinementRounds": 1,
    "equivalenceVerified": true,
    "minimalityVerified": true
  }
}

