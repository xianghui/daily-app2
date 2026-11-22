# Maximum batch

Bounded capacity-constrained Petri-net worksheet, not workflow execution or real-system safety certification. Atomic transitions, integer tokens, no time, fairness or hidden actions. Capacity overflow disables a firing. Goal means at least the supplied counts, not that all other places are empty. Terminal non-goal markings are deadlocks; livelocks are not classified. Holds withhold the whole analysis.

## Reviewed reachability worksheet

INITIAL-ONLY BASELINE: 2 enabled actions; not a terminal deadlock.

EXHAUSTIVE CHECK: 9 reachable markings of 6561 capacity-bounded possibilities; 0 reachable non-goal terminal deadlocks.

COMPLETION: reachable via =action
"0" → =action
"1" → =action
"2" → =action
"3" → =action
"4" → =action
"5" → =action
"6".

Never-enabled actions: none.

Counts computed from the manifest, not time savings or general model accuracy.

## Complete source-linked audit

{
  "schema": "token-passage/1",
  "originalInput": {
    "title": "Maximum batch",
    "places": [
      {
        "id": "p0",
        "description": "Synthetic stage 0",
        "initial": 1,
        "capacity": 2
      },
      {
        "id": "p1",
        "description": "Synthetic stage 1",
        "initial": 0,
        "capacity": 2
      },
      {
        "id": "p2",
        "description": "Synthetic stage 2",
        "initial": 0,
        "capacity": 2
      },
      {
        "id": "p3",
        "description": "Synthetic stage 3",
        "initial": 0,
        "capacity": 2
      },
      {
        "id": "p4",
        "description": "Synthetic stage 4",
        "initial": 0,
        "capacity": 2
      },
      {
        "id": "p5",
        "description": "Synthetic stage 5",
        "initial": 0,
        "capacity": 2
      },
      {
        "id": "p6",
        "description": "Synthetic stage 6",
        "initial": 0,
        "capacity": 2
      },
      {
        "id": "p7",
        "description": "Synthetic stage 7",
        "initial": 0,
        "capacity": 2
      }
    ],
    "goals": [
      {
        "place": "p7",
        "count": 1
      }
    ],
    "transitions": [
      {
        "id": "=action\n\"0\"",
        "consume": [
          {
            "place": "Synthetic stage 0",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 1",
            "count": 1
          },
          {
            "place": "Synthetic stage 1",
            "count": 1
          }
        ]
      },
      {
        "id": "=action\n\"1\"",
        "consume": [
          {
            "place": "Synthetic stage 1",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 2",
            "count": 1
          },
          {
            "place": "Synthetic stage 2",
            "count": 1
          }
        ]
      },
      {
        "id": "=action\n\"2\"",
        "consume": [
          {
            "place": "Synthetic stage 2",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 3",
            "count": 1
          },
          {
            "place": "Synthetic stage 3",
            "count": 1
          }
        ]
      },
      {
        "id": "=action\n\"3\"",
        "consume": [
          {
            "place": "Synthetic stage 3",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 4",
            "count": 1
          },
          {
            "place": "Synthetic stage 4",
            "count": 1
          }
        ]
      },
      {
        "id": "=action\n\"4\"",
        "consume": [
          {
            "place": "Synthetic stage 4",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 5",
            "count": 1
          },
          {
            "place": "Synthetic stage 5",
            "count": 1
          }
        ]
      },
      {
        "id": "=action\n\"5\"",
        "consume": [
          {
            "place": "Synthetic stage 5",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 6",
            "count": 1
          },
          {
            "place": "Synthetic stage 6",
            "count": 1
          }
        ]
      },
      {
        "id": "=action\n\"6\"",
        "consume": [
          {
            "place": "Synthetic stage 6",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 7",
            "count": 1
          },
          {
            "place": "Synthetic stage 7",
            "count": 1
          }
        ]
      },
      {
        "id": "=action\n\"7\"",
        "consume": [
          {
            "place": "Synthetic stage 7",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 0",
            "count": 1
          },
          {
            "place": "Synthetic stage 0",
            "count": 1
          }
        ]
      },
      {
        "id": "=action\n\"8\"",
        "consume": [
          {
            "place": "Synthetic stage 0",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 1",
            "count": 1
          },
          {
            "place": "Synthetic stage 1",
            "count": 1
          }
        ]
      },
      {
        "id": "=action\n\"9\"",
        "consume": [
          {
            "place": "Synthetic stage 1",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 2",
            "count": 1
          },
          {
            "place": "Synthetic stage 2",
            "count": 1
          }
        ]
      },
      {
        "id": "=action\n\"10\"",
        "consume": [
          {
            "place": "Synthetic stage 2",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 3",
            "count": 1
          },
          {
            "place": "Synthetic stage 3",
            "count": 1
          }
        ]
      },
      {
        "id": "=action\n\"11\"",
        "consume": [
          {
            "place": "Synthetic stage 3",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 4",
            "count": 1
          },
          {
            "place": "Synthetic stage 4",
            "count": 1
          }
        ]
      },
      {
        "id": "=action\n\"12\"",
        "consume": [
          {
            "place": "Synthetic stage 4",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 5",
            "count": 1
          },
          {
            "place": "Synthetic stage 5",
            "count": 1
          }
        ]
      },
      {
        "id": "=action\n\"13\"",
        "consume": [
          {
            "place": "Synthetic stage 5",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 6",
            "count": 1
          },
          {
            "place": "Synthetic stage 6",
            "count": 1
          }
        ]
      },
      {
        "id": "=action\n\"14\"",
        "consume": [
          {
            "place": "Synthetic stage 6",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 7",
            "count": 1
          },
          {
            "place": "Synthetic stage 7",
            "count": 1
          }
        ]
      },
      {
        "id": "=action\n\"15\"",
        "consume": [
          {
            "place": "Synthetic stage 7",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "Synthetic stage 0",
            "count": 1
          },
          {
            "place": "Synthetic stage 0",
            "count": 1
          }
        ]
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "transition": "=action\n\"0\"",
      "side": "consume",
      "slot": 0,
      "place": "p0",
      "aiPlace": "p0",
      "count": 1,
      "evidence": [
        {
          "place": "p0",
          "score": 0.9914389010301036
        },
        {
          "place": "p1",
          "score": 0.8799063043010223
        },
        {
          "place": "p4",
          "score": 0.8425145733303117
        },
        {
          "place": "p3",
          "score": 0.835363247734748
        },
        {
          "place": "p2",
          "score": 0.8311822280732255
        },
        {
          "place": "p6",
          "score": 0.8282141339359839
        },
        {
          "place": "p5",
          "score": 0.8149245759177073
        },
        {
          "place": "p7",
          "score": 0.8042990479532892
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "transition": "=action\n\"0\"",
      "side": "produce",
      "slot": 0,
      "place": "p1",
      "aiPlace": "p1",
      "count": 1,
      "evidence": [
        {
          "place": "p1",
          "score": 0.9936500820822723
        },
        {
          "place": "p2",
          "score": 0.9346771889139661
        },
        {
          "place": "p3",
          "score": 0.9322110332944369
        },
        {
          "place": "p4",
          "score": 0.9187727249722468
        },
        {
          "place": "p6",
          "score": 0.9007650795654266
        },
        {
          "place": "p7",
          "score": 0.8982052791531908
        },
        {
          "place": "p5",
          "score": 0.8846300250384201
        },
        {
          "place": "p0",
          "score": 0.8732958835443457
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "transition": "=action\n\"0\"",
      "side": "produce",
      "slot": 1,
      "place": "p1",
      "aiPlace": "p1",
      "count": 1,
      "evidence": [
        {
          "place": "p1",
          "score": 0.9936500820822723
        },
        {
          "place": "p2",
          "score": 0.9346771889139661
        },
        {
          "place": "p3",
          "score": 0.9322110332944369
        },
        {
          "place": "p4",
          "score": 0.9187727249722468
        },
        {
          "place": "p6",
          "score": 0.9007650795654266
        },
        {
          "place": "p7",
          "score": 0.8982052791531908
        },
        {
          "place": "p5",
          "score": 0.8846300250384201
        },
        {
          "place": "p0",
          "score": 0.8732958835443457
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "transition": "=action\n\"1\"",
      "side": "consume",
      "slot": 0,
      "place": "p1",
      "aiPlace": "p1",
      "count": 1,
      "evidence": [
        {
          "place": "p1",
          "score": 0.9936500820822723
        },
        {
          "place": "p2",
          "score": 0.9346771889139661
        },
        {
          "place": "p3",
          "score": 0.9322110332944369
        },
        {
          "place": "p4",
          "score": 0.9187727249722468
        },
        {
          "place": "p6",
          "score": 0.9007650795654266
        },
        {
          "place": "p7",
          "score": 0.8982052791531908
        },
        {
          "place": "p5",
          "score": 0.8846300250384201
        },
        {
          "place": "p0",
          "score": 0.8732958835443457
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "transition": "=action\n\"1\"",
      "side": "produce",
      "slot": 0,
      "place": "p2",
      "aiPlace": "p2",
      "count": 1,
      "evidence": [
        {
          "place": "p2",
          "score": 0.9951829778257314
        },
        {
          "place": "p3",
          "score": 0.9346174083483294
        },
        {
          "place": "p1",
          "score": 0.928879574306487
        },
        {
          "place": "p4",
          "score": 0.9090538105858743
        },
        {
          "place": "p7",
          "score": 0.8840942049496965
        },
        {
          "place": "p6",
          "score": 0.8769633231716997
        },
        {
          "place": "p5",
          "score": 0.8577989675482091
        },
        {
          "place": "p0",
          "score": 0.8238725809460201
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "transition": "=action\n\"1\"",
      "side": "produce",
      "slot": 1,
      "place": "p2",
      "aiPlace": "p2",
      "count": 1,
      "evidence": [
        {
          "place": "p2",
          "score": 0.9951829778257314
        },
        {
          "place": "p3",
          "score": 0.9346174083483294
        },
        {
          "place": "p1",
          "score": 0.928879574306487
        },
        {
          "place": "p4",
          "score": 0.9090538105858743
        },
        {
          "place": "p7",
          "score": 0.8840942049496965
        },
        {
          "place": "p6",
          "score": 0.8769633231716997
        },
        {
          "place": "p5",
          "score": 0.8577989675482091
        },
        {
          "place": "p0",
          "score": 0.8238725809460201
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 6,
      "transition": "=action\n\"2\"",
      "side": "consume",
      "slot": 0,
      "place": "p2",
      "aiPlace": "p2",
      "count": 1,
      "evidence": [
        {
          "place": "p2",
          "score": 0.9951829778257314
        },
        {
          "place": "p3",
          "score": 0.9346174083483294
        },
        {
          "place": "p1",
          "score": 0.928879574306487
        },
        {
          "place": "p4",
          "score": 0.9090538105858743
        },
        {
          "place": "p7",
          "score": 0.8840942049496965
        },
        {
          "place": "p6",
          "score": 0.8769633231716997
        },
        {
          "place": "p5",
          "score": 0.8577989675482091
        },
        {
          "place": "p0",
          "score": 0.8238725809460201
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 7,
      "transition": "=action\n\"2\"",
      "side": "produce",
      "slot": 0,
      "place": "p3",
      "aiPlace": "p3",
      "count": 1,
      "evidence": [
        {
          "place": "p3",
          "score": 0.994766876815439
        },
        {
          "place": "p1",
          "score": 0.9352977684493488
        },
        {
          "place": "p2",
          "score": 0.9351083200535579
        },
        {
          "place": "p4",
          "score": 0.9254865047601887
        },
        {
          "place": "p6",
          "score": 0.905719664126563
        },
        {
          "place": "p7",
          "score": 0.9021569391541531
        },
        {
          "place": "p5",
          "score": 0.8841407113938844
        },
        {
          "place": "p0",
          "score": 0.831893668735081
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 8,
      "transition": "=action\n\"2\"",
      "side": "produce",
      "slot": 1,
      "place": "p3",
      "aiPlace": "p3",
      "count": 1,
      "evidence": [
        {
          "place": "p3",
          "score": 0.991216258781455
        },
        {
          "place": "p2",
          "score": 0.9327231578066852
        },
        {
          "place": "p1",
          "score": 0.932037768554355
        },
        {
          "place": "p4",
          "score": 0.9234648696744099
        },
        {
          "place": "p6",
          "score": 0.9041654929196166
        },
        {
          "place": "p7",
          "score": 0.8978829490796564
        },
        {
          "place": "p5",
          "score": 0.8822284465616708
        },
        {
          "place": "p0",
          "score": 0.8365872677718809
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 9,
      "transition": "=action\n\"3\"",
      "side": "consume",
      "slot": 0,
      "place": "p3",
      "aiPlace": "p3",
      "count": 1,
      "evidence": [
        {
          "place": "p3",
          "score": 0.991216258781455
        },
        {
          "place": "p2",
          "score": 0.9327231578066852
        },
        {
          "place": "p1",
          "score": 0.932037768554355
        },
        {
          "place": "p4",
          "score": 0.9234648696744099
        },
        {
          "place": "p6",
          "score": 0.9041654929196166
        },
        {
          "place": "p7",
          "score": 0.8978829490796564
        },
        {
          "place": "p5",
          "score": 0.8822284465616708
        },
        {
          "place": "p0",
          "score": 0.8365872677718809
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 10,
      "transition": "=action\n\"3\"",
      "side": "produce",
      "slot": 0,
      "place": "p4",
      "aiPlace": "p4",
      "count": 1,
      "evidence": [
        {
          "place": "p4",
          "score": 0.9927921391926293
        },
        {
          "place": "p3",
          "score": 0.9386278281294437
        },
        {
          "place": "p1",
          "score": 0.9273531725533191
        },
        {
          "place": "p2",
          "score": 0.9220711586828173
        },
        {
          "place": "p6",
          "score": 0.9145018497406636
        },
        {
          "place": "p7",
          "score": 0.9066558116423639
        },
        {
          "place": "p5",
          "score": 0.9044397295483899
        },
        {
          "place": "p0",
          "score": 0.8389182406500685
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 11,
      "transition": "=action\n\"3\"",
      "side": "produce",
      "slot": 1,
      "place": "p4",
      "aiPlace": "p4",
      "count": 1,
      "evidence": [
        {
          "place": "p4",
          "score": 0.9927921391926293
        },
        {
          "place": "p3",
          "score": 0.9386278281294437
        },
        {
          "place": "p1",
          "score": 0.9273531725533191
        },
        {
          "place": "p2",
          "score": 0.9220711586828173
        },
        {
          "place": "p6",
          "score": 0.9145018497406636
        },
        {
          "place": "p7",
          "score": 0.9066558116423639
        },
        {
          "place": "p5",
          "score": 0.9044397295483899
        },
        {
          "place": "p0",
          "score": 0.8389182406500685
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 12,
      "transition": "=action\n\"4\"",
      "side": "consume",
      "slot": 0,
      "place": "p4",
      "aiPlace": "p4",
      "count": 1,
      "evidence": [
        {
          "place": "p4",
          "score": 0.9944324769801969
        },
        {
          "place": "p3",
          "score": 0.9217983990798013
        },
        {
          "place": "p1",
          "score": 0.9153942018007354
        },
        {
          "place": "p2",
          "score": 0.9065081746492535
        },
        {
          "place": "p6",
          "score": 0.8974811531978482
        },
        {
          "place": "p7",
          "score": 0.8938435514997644
        },
        {
          "place": "p5",
          "score": 0.8917252043538357
        },
        {
          "place": "p0",
          "score": 0.834755556932687
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 13,
      "transition": "=action\n\"4\"",
      "side": "produce",
      "slot": 0,
      "place": "p5",
      "aiPlace": "p5",
      "count": 1,
      "evidence": [
        {
          "place": "p5",
          "score": 0.9941794828672946
        },
        {
          "place": "p6",
          "score": 0.9156588533348452
        },
        {
          "place": "p7",
          "score": 0.9025501429109143
        },
        {
          "place": "p4",
          "score": 0.8981880570178646
        },
        {
          "place": "p1",
          "score": 0.8943165211583599
        },
        {
          "place": "p3",
          "score": 0.8915460542870495
        },
        {
          "place": "p2",
          "score": 0.86945112593039
        },
        {
          "place": "p0",
          "score": 0.8175840228958565
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 14,
      "transition": "=action\n\"4\"",
      "side": "produce",
      "slot": 1,
      "place": "p5",
      "aiPlace": "p5",
      "count": 1,
      "evidence": [
        {
          "place": "p5",
          "score": 0.9941794828672946
        },
        {
          "place": "p6",
          "score": 0.9156588533348452
        },
        {
          "place": "p7",
          "score": 0.9025501429109143
        },
        {
          "place": "p4",
          "score": 0.8981880570178646
        },
        {
          "place": "p1",
          "score": 0.8943165211583599
        },
        {
          "place": "p3",
          "score": 0.8915460542870495
        },
        {
          "place": "p2",
          "score": 0.86945112593039
        },
        {
          "place": "p0",
          "score": 0.8175840228958565
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 15,
      "transition": "=action\n\"5\"",
      "side": "consume",
      "slot": 0,
      "place": "p5",
      "aiPlace": "p5",
      "count": 1,
      "evidence": [
        {
          "place": "p5",
          "score": 0.9941794828672946
        },
        {
          "place": "p6",
          "score": 0.9156588533348452
        },
        {
          "place": "p7",
          "score": 0.9025501429109143
        },
        {
          "place": "p4",
          "score": 0.8981880570178646
        },
        {
          "place": "p1",
          "score": 0.8943165211583599
        },
        {
          "place": "p3",
          "score": 0.8915460542870495
        },
        {
          "place": "p2",
          "score": 0.86945112593039
        },
        {
          "place": "p0",
          "score": 0.8175840228958565
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 16,
      "transition": "=action\n\"5\"",
      "side": "produce",
      "slot": 0,
      "place": "p6",
      "aiPlace": "p6",
      "count": 1,
      "evidence": [
        {
          "place": "p6",
          "score": 0.9930253454981498
        },
        {
          "place": "p7",
          "score": 0.9130507599483092
        },
        {
          "place": "p5",
          "score": 0.9016658679784746
        },
        {
          "place": "p3",
          "score": 0.8974743519442338
        },
        {
          "place": "p4",
          "score": 0.8935881158537853
        },
        {
          "place": "p1",
          "score": 0.8931549804025104
        },
        {
          "place": "p2",
          "score": 0.877277444095694
        },
        {
          "place": "p0",
          "score": 0.8169564038243692
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 17,
      "transition": "=action\n\"5\"",
      "side": "produce",
      "slot": 1,
      "place": "p6",
      "aiPlace": "p6",
      "count": 1,
      "evidence": [
        {
          "place": "p6",
          "score": 0.9930253454981498
        },
        {
          "place": "p7",
          "score": 0.9130507599483092
        },
        {
          "place": "p5",
          "score": 0.9016658679784746
        },
        {
          "place": "p3",
          "score": 0.8974743519442338
        },
        {
          "place": "p4",
          "score": 0.8935881158537853
        },
        {
          "place": "p1",
          "score": 0.8931549804025104
        },
        {
          "place": "p2",
          "score": 0.877277444095694
        },
        {
          "place": "p0",
          "score": 0.8169564038243692
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 18,
      "transition": "=action\n\"6\"",
      "side": "consume",
      "slot": 0,
      "place": "p6",
      "aiPlace": "p6",
      "count": 1,
      "evidence": [
        {
          "place": "p6",
          "score": 0.9930253454981498
        },
        {
          "place": "p7",
          "score": 0.9130507599483092
        },
        {
          "place": "p5",
          "score": 0.9016658679784746
        },
        {
          "place": "p3",
          "score": 0.8974743519442338
        },
        {
          "place": "p4",
          "score": 0.8935881158537853
        },
        {
          "place": "p1",
          "score": 0.8931549804025104
        },
        {
          "place": "p2",
          "score": 0.877277444095694
        },
        {
          "place": "p0",
          "score": 0.8169564038243692
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 19,
      "transition": "=action\n\"6\"",
      "side": "produce",
      "slot": 0,
      "place": "p7",
      "aiPlace": "p7",
      "count": 1,
      "evidence": [
        {
          "place": "p7",
          "score": 0.9933074857899401
        },
        {
          "place": "p6",
          "score": 0.9231215148049016
        },
        {
          "place": "p3",
          "score": 0.9079313640445338
        },
        {
          "place": "p1",
          "score": 0.9076988099920429
        },
        {
          "place": "p4",
          "score": 0.9059395104731346
        },
        {
          "place": "p5",
          "score": 0.9031786088630106
        },
        {
          "place": "p2",
          "score": 0.8925042199095622
        },
        {
          "place": "p0",
          "score": 0.8082939440498744
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 20,
      "transition": "=action\n\"6\"",
      "side": "produce",
      "slot": 1,
      "place": "p7",
      "aiPlace": "p7",
      "count": 1,
      "evidence": [
        {
          "place": "p7",
          "score": 0.9944558465348895
        },
        {
          "place": "p6",
          "score": 0.9191697966967647
        },
        {
          "place": "p3",
          "score": 0.8995329102340939
        },
        {
          "place": "p5",
          "score": 0.8961812405635801
        },
        {
          "place": "p4",
          "score": 0.8961229212367761
        },
        {
          "place": "p1",
          "score": 0.8951188872348667
        },
        {
          "place": "p2",
          "score": 0.8865841107911044
        },
        {
          "place": "p0",
          "score": 0.7981717310226736
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 21,
      "transition": "=action\n\"7\"",
      "side": "consume",
      "slot": 0,
      "place": "p7",
      "aiPlace": "p7",
      "count": 1,
      "evidence": [
        {
          "place": "p7",
          "score": 0.9944558465348895
        },
        {
          "place": "p6",
          "score": 0.9191697966967647
        },
        {
          "place": "p3",
          "score": 0.8995329102340939
        },
        {
          "place": "p5",
          "score": 0.8961812405635801
        },
        {
          "place": "p4",
          "score": 0.8961229212367761
        },
        {
          "place": "p1",
          "score": 0.8951188872348667
        },
        {
          "place": "p2",
          "score": 0.8865841107911044
        },
        {
          "place": "p0",
          "score": 0.7981717310226736
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 22,
      "transition": "=action\n\"7\"",
      "side": "produce",
      "slot": 0,
      "place": "p0",
      "aiPlace": "p0",
      "count": 1,
      "evidence": [
        {
          "place": "p0",
          "score": 0.992135113783168
        },
        {
          "place": "p1",
          "score": 0.8748109535564402
        },
        {
          "place": "p4",
          "score": 0.834363002014761
        },
        {
          "place": "p3",
          "score": 0.8308661038473663
        },
        {
          "place": "p2",
          "score": 0.8306835922647032
        },
        {
          "place": "p6",
          "score": 0.8255622560487023
        },
        {
          "place": "p5",
          "score": 0.80705096665417
        },
        {
          "place": "p7",
          "score": 0.7987559811832816
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 23,
      "transition": "=action\n\"7\"",
      "side": "produce",
      "slot": 1,
      "place": "p0",
      "aiPlace": "p0",
      "count": 1,
      "evidence": [
        {
          "place": "p0",
          "score": 0.992135113783168
        },
        {
          "place": "p1",
          "score": 0.8748109535564402
        },
        {
          "place": "p4",
          "score": 0.834363002014761
        },
        {
          "place": "p3",
          "score": 0.8308661038473663
        },
        {
          "place": "p2",
          "score": 0.8306835922647032
        },
        {
          "place": "p6",
          "score": 0.8255622560487023
        },
        {
          "place": "p5",
          "score": 0.80705096665417
        },
        {
          "place": "p7",
          "score": 0.7987559811832816
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 24,
      "transition": "=action\n\"8\"",
      "side": "consume",
      "slot": 0,
      "place": "p0",
      "aiPlace": "p0",
      "count": 1,
      "evidence": [
        {
          "place": "p0",
          "score": 0.9914389010301036
        },
        {
          "place": "p1",
          "score": 0.8799063043010223
        },
        {
          "place": "p4",
          "score": 0.8425145733303117
        },
        {
          "place": "p3",
          "score": 0.835363247734748
        },
        {
          "place": "p2",
          "score": 0.8311822280732255
        },
        {
          "place": "p6",
          "score": 0.8282141339359839
        },
        {
          "place": "p5",
          "score": 0.8149245759177073
        },
        {
          "place": "p7",
          "score": 0.8042990479532892
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 25,
      "transition": "=action\n\"8\"",
      "side": "produce",
      "slot": 0,
      "place": "p1",
      "aiPlace": "p1",
      "count": 1,
      "evidence": [
        {
          "place": "p1",
          "score": 0.9936500820822723
        },
        {
          "place": "p2",
          "score": 0.9346771889139661
        },
        {
          "place": "p3",
          "score": 0.9322110332944369
        },
        {
          "place": "p4",
          "score": 0.9187727249722468
        },
        {
          "place": "p6",
          "score": 0.9007650795654266
        },
        {
          "place": "p7",
          "score": 0.8982052791531908
        },
        {
          "place": "p5",
          "score": 0.8846300250384201
        },
        {
          "place": "p0",
          "score": 0.8732958835443457
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 26,
      "transition": "=action\n\"8\"",
      "side": "produce",
      "slot": 1,
      "place": "p1",
      "aiPlace": "p1",
      "count": 1,
      "evidence": [
        {
          "place": "p1",
          "score": 0.9936500820822723
        },
        {
          "place": "p2",
          "score": 0.9346771889139661
        },
        {
          "place": "p3",
          "score": 0.9322110332944369
        },
        {
          "place": "p4",
          "score": 0.9187727249722468
        },
        {
          "place": "p6",
          "score": 0.9007650795654266
        },
        {
          "place": "p7",
          "score": 0.8982052791531908
        },
        {
          "place": "p5",
          "score": 0.8846300250384201
        },
        {
          "place": "p0",
          "score": 0.8732958835443457
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 27,
      "transition": "=action\n\"9\"",
      "side": "consume",
      "slot": 0,
      "place": "p1",
      "aiPlace": "p1",
      "count": 1,
      "evidence": [
        {
          "place": "p1",
          "score": 0.9936500820822723
        },
        {
          "place": "p2",
          "score": 0.9346771889139661
        },
        {
          "place": "p3",
          "score": 0.9322110332944369
        },
        {
          "place": "p4",
          "score": 0.9187727249722468
        },
        {
          "place": "p6",
          "score": 0.9007650795654266
        },
        {
          "place": "p7",
          "score": 0.8982052791531908
        },
        {
          "place": "p5",
          "score": 0.8846300250384201
        },
        {
          "place": "p0",
          "score": 0.8732958835443457
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 28,
      "transition": "=action\n\"9\"",
      "side": "produce",
      "slot": 0,
      "place": "p2",
      "aiPlace": "p2",
      "count": 1,
      "evidence": [
        {
          "place": "p2",
          "score": 0.9951829778257314
        },
        {
          "place": "p3",
          "score": 0.9346174083483294
        },
        {
          "place": "p1",
          "score": 0.928879574306487
        },
        {
          "place": "p4",
          "score": 0.9090538105858743
        },
        {
          "place": "p7",
          "score": 0.8840942049496965
        },
        {
          "place": "p6",
          "score": 0.8769633231716997
        },
        {
          "place": "p5",
          "score": 0.8577989675482091
        },
        {
          "place": "p0",
          "score": 0.8238725809460201
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 29,
      "transition": "=action\n\"9\"",
      "side": "produce",
      "slot": 1,
      "place": "p2",
      "aiPlace": "p2",
      "count": 1,
      "evidence": [
        {
          "place": "p2",
          "score": 0.9951829778257314
        },
        {
          "place": "p3",
          "score": 0.9346174083483294
        },
        {
          "place": "p1",
          "score": 0.928879574306487
        },
        {
          "place": "p4",
          "score": 0.9090538105858743
        },
        {
          "place": "p7",
          "score": 0.8840942049496965
        },
        {
          "place": "p6",
          "score": 0.8769633231716997
        },
        {
          "place": "p5",
          "score": 0.8577989675482091
        },
        {
          "place": "p0",
          "score": 0.8238725809460201
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 30,
      "transition": "=action\n\"10\"",
      "side": "consume",
      "slot": 0,
      "place": "p2",
      "aiPlace": "p2",
      "count": 1,
      "evidence": [
        {
          "place": "p2",
          "score": 0.9951829778257314
        },
        {
          "place": "p3",
          "score": 0.9346174083483294
        },
        {
          "place": "p1",
          "score": 0.928879574306487
        },
        {
          "place": "p4",
          "score": 0.9090538105858743
        },
        {
          "place": "p7",
          "score": 0.8840942049496965
        },
        {
          "place": "p6",
          "score": 0.8769633231716997
        },
        {
          "place": "p5",
          "score": 0.8577989675482091
        },
        {
          "place": "p0",
          "score": 0.8238725809460201
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 31,
      "transition": "=action\n\"10\"",
      "side": "produce",
      "slot": 0,
      "place": "p3",
      "aiPlace": "p3",
      "count": 1,
      "evidence": [
        {
          "place": "p3",
          "score": 0.994766876815439
        },
        {
          "place": "p1",
          "score": 0.9352977684493488
        },
        {
          "place": "p2",
          "score": 0.9351083200535579
        },
        {
          "place": "p4",
          "score": 0.9254865047601887
        },
        {
          "place": "p6",
          "score": 0.905719664126563
        },
        {
          "place": "p7",
          "score": 0.9021569391541531
        },
        {
          "place": "p5",
          "score": 0.8841407113938844
        },
        {
          "place": "p0",
          "score": 0.831893668735081
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 32,
      "transition": "=action\n\"10\"",
      "side": "produce",
      "slot": 1,
      "place": "p3",
      "aiPlace": "p3",
      "count": 1,
      "evidence": [
        {
          "place": "p3",
          "score": 0.991216258781455
        },
        {
          "place": "p2",
          "score": 0.9327231578066852
        },
        {
          "place": "p1",
          "score": 0.932037768554355
        },
        {
          "place": "p4",
          "score": 0.9234648696744099
        },
        {
          "place": "p6",
          "score": 0.9041654929196166
        },
        {
          "place": "p7",
          "score": 0.8978829490796564
        },
        {
          "place": "p5",
          "score": 0.8822284465616708
        },
        {
          "place": "p0",
          "score": 0.8365872677718809
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 33,
      "transition": "=action\n\"11\"",
      "side": "consume",
      "slot": 0,
      "place": "p3",
      "aiPlace": "p3",
      "count": 1,
      "evidence": [
        {
          "place": "p3",
          "score": 0.991216258781455
        },
        {
          "place": "p2",
          "score": 0.9327231578066852
        },
        {
          "place": "p1",
          "score": 0.932037768554355
        },
        {
          "place": "p4",
          "score": 0.9234648696744099
        },
        {
          "place": "p6",
          "score": 0.9041654929196166
        },
        {
          "place": "p7",
          "score": 0.8978829490796564
        },
        {
          "place": "p5",
          "score": 0.8822284465616708
        },
        {
          "place": "p0",
          "score": 0.8365872677718809
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 34,
      "transition": "=action\n\"11\"",
      "side": "produce",
      "slot": 0,
      "place": "p4",
      "aiPlace": "p4",
      "count": 1,
      "evidence": [
        {
          "place": "p4",
          "score": 0.9927921391926293
        },
        {
          "place": "p3",
          "score": 0.9386278281294437
        },
        {
          "place": "p1",
          "score": 0.9273531725533191
        },
        {
          "place": "p2",
          "score": 0.9220711586828173
        },
        {
          "place": "p6",
          "score": 0.9145018497406636
        },
        {
          "place": "p7",
          "score": 0.9066558116423639
        },
        {
          "place": "p5",
          "score": 0.9044397295483899
        },
        {
          "place": "p0",
          "score": 0.8389182406500685
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 35,
      "transition": "=action\n\"11\"",
      "side": "produce",
      "slot": 1,
      "place": "p4",
      "aiPlace": "p4",
      "count": 1,
      "evidence": [
        {
          "place": "p4",
          "score": 0.9927921391926293
        },
        {
          "place": "p3",
          "score": 0.9386278281294437
        },
        {
          "place": "p1",
          "score": 0.9273531725533191
        },
        {
          "place": "p2",
          "score": 0.9220711586828173
        },
        {
          "place": "p6",
          "score": 0.9145018497406636
        },
        {
          "place": "p7",
          "score": 0.9066558116423639
        },
        {
          "place": "p5",
          "score": 0.9044397295483899
        },
        {
          "place": "p0",
          "score": 0.8389182406500685
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 36,
      "transition": "=action\n\"12\"",
      "side": "consume",
      "slot": 0,
      "place": "p4",
      "aiPlace": "p4",
      "count": 1,
      "evidence": [
        {
          "place": "p4",
          "score": 0.9944324769801969
        },
        {
          "place": "p3",
          "score": 0.9217983990798013
        },
        {
          "place": "p1",
          "score": 0.9153942018007354
        },
        {
          "place": "p2",
          "score": 0.9065081746492535
        },
        {
          "place": "p6",
          "score": 0.8974811531978482
        },
        {
          "place": "p7",
          "score": 0.8938435514997644
        },
        {
          "place": "p5",
          "score": 0.8917252043538357
        },
        {
          "place": "p0",
          "score": 0.834755556932687
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 37,
      "transition": "=action\n\"12\"",
      "side": "produce",
      "slot": 0,
      "place": "p5",
      "aiPlace": "p5",
      "count": 1,
      "evidence": [
        {
          "place": "p5",
          "score": 0.9941794828672946
        },
        {
          "place": "p6",
          "score": 0.9156588533348452
        },
        {
          "place": "p7",
          "score": 0.9025501429109143
        },
        {
          "place": "p4",
          "score": 0.8981880570178646
        },
        {
          "place": "p1",
          "score": 0.8943165211583599
        },
        {
          "place": "p3",
          "score": 0.8915460542870495
        },
        {
          "place": "p2",
          "score": 0.86945112593039
        },
        {
          "place": "p0",
          "score": 0.8175840228958565
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 38,
      "transition": "=action\n\"12\"",
      "side": "produce",
      "slot": 1,
      "place": "p5",
      "aiPlace": "p5",
      "count": 1,
      "evidence": [
        {
          "place": "p5",
          "score": 0.9941794828672946
        },
        {
          "place": "p6",
          "score": 0.9156588533348452
        },
        {
          "place": "p7",
          "score": 0.9025501429109143
        },
        {
          "place": "p4",
          "score": 0.8981880570178646
        },
        {
          "place": "p1",
          "score": 0.8943165211583599
        },
        {
          "place": "p3",
          "score": 0.8915460542870495
        },
        {
          "place": "p2",
          "score": 0.86945112593039
        },
        {
          "place": "p0",
          "score": 0.8175840228958565
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 39,
      "transition": "=action\n\"13\"",
      "side": "consume",
      "slot": 0,
      "place": "p5",
      "aiPlace": "p5",
      "count": 1,
      "evidence": [
        {
          "place": "p5",
          "score": 0.9941794828672946
        },
        {
          "place": "p6",
          "score": 0.9156588533348452
        },
        {
          "place": "p7",
          "score": 0.9025501429109143
        },
        {
          "place": "p4",
          "score": 0.8981880570178646
        },
        {
          "place": "p1",
          "score": 0.8943165211583599
        },
        {
          "place": "p3",
          "score": 0.8915460542870495
        },
        {
          "place": "p2",
          "score": 0.86945112593039
        },
        {
          "place": "p0",
          "score": 0.8175840228958565
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 40,
      "transition": "=action\n\"13\"",
      "side": "produce",
      "slot": 0,
      "place": "p6",
      "aiPlace": "p6",
      "count": 1,
      "evidence": [
        {
          "place": "p6",
          "score": 0.9930253454981498
        },
        {
          "place": "p7",
          "score": 0.9130507599483092
        },
        {
          "place": "p5",
          "score": 0.9016658679784746
        },
        {
          "place": "p3",
          "score": 0.8974743519442338
        },
        {
          "place": "p4",
          "score": 0.8935881158537853
        },
        {
          "place": "p1",
          "score": 0.8931549804025104
        },
        {
          "place": "p2",
          "score": 0.877277444095694
        },
        {
          "place": "p0",
          "score": 0.8169564038243692
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 41,
      "transition": "=action\n\"13\"",
      "side": "produce",
      "slot": 1,
      "place": "p6",
      "aiPlace": "p6",
      "count": 1,
      "evidence": [
        {
          "place": "p6",
          "score": 0.9930253454981498
        },
        {
          "place": "p7",
          "score": 0.9130507599483092
        },
        {
          "place": "p5",
          "score": 0.9016658679784746
        },
        {
          "place": "p3",
          "score": 0.8974743519442338
        },
        {
          "place": "p4",
          "score": 0.8935881158537853
        },
        {
          "place": "p1",
          "score": 0.8931549804025104
        },
        {
          "place": "p2",
          "score": 0.877277444095694
        },
        {
          "place": "p0",
          "score": 0.8169564038243692
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 42,
      "transition": "=action\n\"14\"",
      "side": "consume",
      "slot": 0,
      "place": "p6",
      "aiPlace": "p6",
      "count": 1,
      "evidence": [
        {
          "place": "p6",
          "score": 0.9930253454981498
        },
        {
          "place": "p7",
          "score": 0.9130507599483092
        },
        {
          "place": "p5",
          "score": 0.9016658679784746
        },
        {
          "place": "p3",
          "score": 0.8974743519442338
        },
        {
          "place": "p4",
          "score": 0.8935881158537853
        },
        {
          "place": "p1",
          "score": 0.8931549804025104
        },
        {
          "place": "p2",
          "score": 0.877277444095694
        },
        {
          "place": "p0",
          "score": 0.8169564038243692
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 43,
      "transition": "=action\n\"14\"",
      "side": "produce",
      "slot": 0,
      "place": "p7",
      "aiPlace": "p7",
      "count": 1,
      "evidence": [
        {
          "place": "p7",
          "score": 0.9933074857899401
        },
        {
          "place": "p6",
          "score": 0.9231215148049016
        },
        {
          "place": "p3",
          "score": 0.9079313640445338
        },
        {
          "place": "p1",
          "score": 0.9076988099920429
        },
        {
          "place": "p4",
          "score": 0.9059395104731346
        },
        {
          "place": "p5",
          "score": 0.9031786088630106
        },
        {
          "place": "p2",
          "score": 0.8925042199095622
        },
        {
          "place": "p0",
          "score": 0.8082939440498744
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 44,
      "transition": "=action\n\"14\"",
      "side": "produce",
      "slot": 1,
      "place": "p7",
      "aiPlace": "p7",
      "count": 1,
      "evidence": [
        {
          "place": "p7",
          "score": 0.9944558465348895
        },
        {
          "place": "p6",
          "score": 0.9191697966967647
        },
        {
          "place": "p3",
          "score": 0.8995329102340939
        },
        {
          "place": "p5",
          "score": 0.8961812405635801
        },
        {
          "place": "p4",
          "score": 0.8961229212367761
        },
        {
          "place": "p1",
          "score": 0.8951188872348667
        },
        {
          "place": "p2",
          "score": 0.8865841107911044
        },
        {
          "place": "p0",
          "score": 0.7981717310226736
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 45,
      "transition": "=action\n\"15\"",
      "side": "consume",
      "slot": 0,
      "place": "p7",
      "aiPlace": "p7",
      "count": 1,
      "evidence": [
        {
          "place": "p7",
          "score": 0.9944558465348895
        },
        {
          "place": "p6",
          "score": 0.9191697966967647
        },
        {
          "place": "p3",
          "score": 0.8995329102340939
        },
        {
          "place": "p5",
          "score": 0.8961812405635801
        },
        {
          "place": "p4",
          "score": 0.8961229212367761
        },
        {
          "place": "p1",
          "score": 0.8951188872348667
        },
        {
          "place": "p2",
          "score": 0.8865841107911044
        },
        {
          "place": "p0",
          "score": 0.7981717310226736
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 46,
      "transition": "=action\n\"15\"",
      "side": "produce",
      "slot": 0,
      "place": "p0",
      "aiPlace": "p0",
      "count": 1,
      "evidence": [
        {
          "place": "p0",
          "score": 0.992135113783168
        },
        {
          "place": "p1",
          "score": 0.8748109535564402
        },
        {
          "place": "p4",
          "score": 0.834363002014761
        },
        {
          "place": "p3",
          "score": 0.8308661038473663
        },
        {
          "place": "p2",
          "score": 0.8306835922647032
        },
        {
          "place": "p6",
          "score": 0.8255622560487023
        },
        {
          "place": "p5",
          "score": 0.80705096665417
        },
        {
          "place": "p7",
          "score": 0.7987559811832816
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 47,
      "transition": "=action\n\"15\"",
      "side": "produce",
      "slot": 1,
      "place": "p0",
      "aiPlace": "p0",
      "count": 1,
      "evidence": [
        {
          "place": "p0",
          "score": 0.992135113783168
        },
        {
          "place": "p1",
          "score": 0.8748109535564402
        },
        {
          "place": "p4",
          "score": 0.834363002014761
        },
        {
          "place": "p3",
          "score": 0.8308661038473663
        },
        {
          "place": "p2",
          "score": 0.8306835922647032
        },
        {
          "place": "p6",
          "score": 0.8255622560487023
        },
        {
          "place": "p5",
          "score": 0.80705096665417
        },
        {
          "place": "p7",
          "score": 0.7987559811832816
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Bounded capacity-constrained Petri-net worksheet, not workflow execution or real-system safety certification. Atomic transitions, integer tokens, no time, fairness or hidden actions. Capacity overflow disables a firing. Goal means at least the supplied counts, not that all other places are empty. Terminal non-goal markings are deadlocks; livelocks are not classified. Holds withhold the whole analysis.",
  "analysis": {
    "status": "ready",
    "places": [
      "p0",
      "p1",
      "p2",
      "p3",
      "p4",
      "p5",
      "p6",
      "p7"
    ],
    "stateBound": 6561,
    "reachableStates": 9,
    "enabledFirings": 16,
    "enabledInitially": [
      "=action\n\"0\"",
      "=action\n\"8\""
    ],
    "initialDeadlock": false,
    "completionReachable": true,
    "shortestCompletion": {
      "marking": [
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        2
      ],
      "path": [
        "=action\n\"0\"",
        "=action\n\"1\"",
        "=action\n\"2\"",
        "=action\n\"3\"",
        "=action\n\"4\"",
        "=action\n\"5\"",
        "=action\n\"6\""
      ]
    },
    "deadlocks": [],
    "neverEnabled": [],
    "states": [
      {
        "marking": [
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "path": []
      },
      {
        "marking": [
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "path": [
          "=action\n\"0\""
        ]
      },
      {
        "marking": [
          0,
          1,
          2,
          0,
          0,
          0,
          0,
          0
        ],
        "path": [
          "=action\n\"0\"",
          "=action\n\"1\""
        ]
      },
      {
        "marking": [
          0,
          1,
          1,
          2,
          0,
          0,
          0,
          0
        ],
        "path": [
          "=action\n\"0\"",
          "=action\n\"1\"",
          "=action\n\"2\""
        ]
      },
      {
        "marking": [
          0,
          1,
          1,
          1,
          2,
          0,
          0,
          0
        ],
        "path": [
          "=action\n\"0\"",
          "=action\n\"1\"",
          "=action\n\"2\"",
          "=action\n\"3\""
        ]
      },
      {
        "marking": [
          0,
          1,
          1,
          1,
          1,
          2,
          0,
          0
        ],
        "path": [
          "=action\n\"0\"",
          "=action\n\"1\"",
          "=action\n\"2\"",
          "=action\n\"3\"",
          "=action\n\"4\""
        ]
      },
      {
        "marking": [
          0,
          1,
          1,
          1,
          1,
          1,
          2,
          0
        ],
        "path": [
          "=action\n\"0\"",
          "=action\n\"1\"",
          "=action\n\"2\"",
          "=action\n\"3\"",
          "=action\n\"4\"",
          "=action\n\"5\""
        ]
      },
      {
        "marking": [
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          2
        ],
        "path": [
          "=action\n\"0\"",
          "=action\n\"1\"",
          "=action\n\"2\"",
          "=action\n\"3\"",
          "=action\n\"4\"",
          "=action\n\"5\"",
          "=action\n\"6\""
        ]
      },
      {
        "marking": [
          2,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "path": [
          "=action\n\"0\"",
          "=action\n\"1\"",
          "=action\n\"2\"",
          "=action\n\"3\"",
          "=action\n\"4\"",
          "=action\n\"5\"",
          "=action\n\"6\"",
          "=action\n\"7\""
        ]
      }
    ]
  }
}

