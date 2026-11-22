# Campus archive rack-outage drill

Planning scenario only. Assumes an ideal MDS erasure code, equal-slot shards, independent complete failure domains and no other failures. Does not encode, copy, delete or verify stored data. Final layouts are not migration sequences; transient moves need a separate copy-before-delete plan.

## Reviewed placement analysis
{
  "status": "ready",
  "failureScenarioCount": 3,
  "baseline": {
    "safeStripes": 0,
    "stripes": [
      {
        "stripe": "photos",
        "data": 2,
        "parity": 1,
        "safe": false,
        "worstLoss": 2,
        "cases": [
          {
            "failed": [
              "library"
            ],
            "lost": 2
          },
          {
            "failed": [
              "science"
            ],
            "lost": 1
          },
          {
            "failed": [
              "arts"
            ],
            "lost": 0
          }
        ]
      },
      {
        "stripe": "audio",
        "data": 2,
        "parity": 1,
        "safe": false,
        "worstLoss": 2,
        "cases": [
          {
            "failed": [
              "library"
            ],
            "lost": 0
          },
          {
            "failed": [
              "science"
            ],
            "lost": 1
          },
          {
            "failed": [
              "arts"
            ],
            "lost": 2
          }
        ]
      }
    ],
    "loads": [
      {
        "domain": "library",
        "used": 2,
        "capacity": 3
      },
      {
        "domain": "science",
        "used": 2,
        "capacity": 3
      },
      {
        "domain": "arts",
        "used": 2,
        "capacity": 3
      }
    ],
    "capacitySafe": true
  },
  "plan": {
    "safeStripes": 2,
    "stripes": [
      {
        "stripe": "photos",
        "data": 2,
        "parity": 1,
        "safe": true,
        "worstLoss": 1,
        "cases": [
          {
            "failed": [
              "library"
            ],
            "lost": 1
          },
          {
            "failed": [
              "science"
            ],
            "lost": 1
          },
          {
            "failed": [
              "arts"
            ],
            "lost": 1
          }
        ]
      },
      {
        "stripe": "audio",
        "data": 2,
        "parity": 1,
        "safe": true,
        "worstLoss": 1,
        "cases": [
          {
            "failed": [
              "library"
            ],
            "lost": 1
          },
          {
            "failed": [
              "science"
            ],
            "lost": 1
          },
          {
            "failed": [
              "arts"
            ],
            "lost": 1
          }
        ]
      }
    ],
    "loads": [
      {
        "domain": "library",
        "used": 2,
        "capacity": 3
      },
      {
        "domain": "science",
        "used": 2,
        "capacity": 3
      },
      {
        "domain": "arts",
        "used": 2,
        "capacity": 3
      }
    ],
    "capacitySafe": true,
    "cost": 3,
    "moves": 2,
    "placements": [
      {
        "shard": "P1",
        "stripe": "photos",
        "from": "library",
        "to": "library",
        "moved": false,
        "cost": 0,
        "pinned": false
      },
      {
        "shard": "P2",
        "stripe": "photos",
        "from": "library",
        "to": "arts",
        "moved": true,
        "cost": 2,
        "pinned": false
      },
      {
        "shard": "P3",
        "stripe": "photos",
        "from": "science",
        "to": "science",
        "moved": false,
        "cost": 0,
        "pinned": false
      },
      {
        "shard": "A1",
        "stripe": "audio",
        "from": "arts",
        "to": "arts",
        "moved": false,
        "cost": 0,
        "pinned": false
      },
      {
        "shard": "A2",
        "stripe": "audio",
        "from": "arts",
        "to": "library",
        "moved": true,
        "cost": 1,
        "pinned": false
      },
      {
        "shard": "A3",
        "stripe": "audio",
        "from": "science",
        "to": "science",
        "moved": false,
        "cost": 0,
        "pinned": false
      }
    ]
  },
  "searchNodes": 20,
  "literalMatches": 0,
  "shardCount": 6
}

## Complete original inventory and neural review
{
  "originalInput": {
    "title": "Campus archive rack-outage drill",
    "failures": 1,
    "domains": [
      {
        "id": "library",
        "description": "University library basement storage room",
        "capacity": 3
      },
      {
        "id": "science",
        "description": "Science building laboratory server room",
        "capacity": 3
      },
      {
        "id": "arts",
        "description": "Arts building media studio storage",
        "capacity": 3
      }
    ],
    "stripes": [
      {
        "id": "photos",
        "data": 2,
        "parity": 1
      },
      {
        "id": "audio",
        "data": 2,
        "parity": 1
      }
    ],
    "shards": [
      {
        "id": "P1",
        "stripe": "photos",
        "location": "Library basement archive shelves",
        "moveCost": 5,
        "pinned": false
      },
      {
        "id": "P2",
        "stripe": "photos",
        "location": "Basement of university library",
        "moveCost": 2,
        "pinned": false
      },
      {
        "id": "P3",
        "stripe": "photos",
        "location": "Science laboratory server storage",
        "moveCost": 3,
        "pinned": false
      },
      {
        "id": "A1",
        "stripe": "audio",
        "location": "Arts media studio storage",
        "moveCost": 4,
        "pinned": false
      },
      {
        "id": "A2",
        "stripe": "audio",
        "location": "Media studio in arts building",
        "moveCost": 1,
        "pinned": false
      },
      {
        "id": "A3",
        "stripe": "audio",
        "location": "Science laboratory server storage",
        "moveCost": 3,
        "pinned": false
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "shard": "P1",
      "domain": "library",
      "aiDomain": "library",
      "evidence": [
        {
          "domain": "library",
          "score": 0.7190277050049514
        },
        {
          "domain": "arts",
          "score": 0.3965151283199439
        },
        {
          "domain": "science",
          "score": 0.2746980574047597
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "shard": "P2",
      "domain": "library",
      "aiDomain": "library",
      "evidence": [
        {
          "domain": "library",
          "score": 0.8017758917272672
        },
        {
          "domain": "science",
          "score": 0.41570363305655716
        },
        {
          "domain": "arts",
          "score": 0.28530149207855837
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "shard": "P3",
      "domain": "science",
      "aiDomain": "science",
      "evidence": [
        {
          "domain": "science",
          "score": 0.6751187298339554
        },
        {
          "domain": "library",
          "score": 0.4827393799060888
        },
        {
          "domain": "arts",
          "score": 0.44657809499223855
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "shard": "A1",
      "domain": "arts",
      "aiDomain": "arts",
      "evidence": [
        {
          "domain": "arts",
          "score": 0.9367726461350734
        },
        {
          "domain": "library",
          "score": 0.41301647771183314
        },
        {
          "domain": "science",
          "score": 0.21494556076857993
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "shard": "A2",
      "domain": "arts",
      "aiDomain": "arts",
      "evidence": [
        {
          "domain": "arts",
          "score": 0.7823707975659666
        },
        {
          "domain": "science",
          "score": 0.3920791636301982
        },
        {
          "domain": "library",
          "score": 0.28948323641236634
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "shard": "A3",
      "domain": "science",
      "aiDomain": "science",
      "evidence": [
        {
          "domain": "science",
          "score": 0.6567664078152032
        },
        {
          "domain": "library",
          "score": 0.48388576710558373
        },
        {
          "domain": "arts",
          "score": 0.4492364616551911
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ]
}
