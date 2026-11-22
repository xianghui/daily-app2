# Campus archive rack-outage drill

Planning scenario only. Assumes an ideal MDS erasure code, equal-slot shards, independent complete failure domains and no other failures. Does not encode, copy, delete or verify stored data. Final layouts are not migration sequences; transient moves need a separate copy-before-delete plan.

## Reviewed placement analysis
{
  "status": "ready",
  "failureScenarioCount": 10,
  "baseline": {
    "safeStripes": 2,
    "stripes": [
      {
        "stripe": "s1",
        "data": 2,
        "parity": 4,
        "safe": true,
        "worstLoss": 4,
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
            "lost": 2
          },
          {
            "failed": [
              "library",
              "science"
            ],
            "lost": 4
          },
          {
            "failed": [
              "arts"
            ],
            "lost": 1
          },
          {
            "failed": [
              "library",
              "arts"
            ],
            "lost": 3
          },
          {
            "failed": [
              "science",
              "arts"
            ],
            "lost": 3
          },
          {
            "failed": [
              "desert"
            ],
            "lost": 1
          },
          {
            "failed": [
              "library",
              "desert"
            ],
            "lost": 3
          },
          {
            "failed": [
              "science",
              "desert"
            ],
            "lost": 3
          },
          {
            "failed": [
              "arts",
              "desert"
            ],
            "lost": 2
          }
        ]
      },
      {
        "stripe": "s2",
        "data": 2,
        "parity": 2,
        "safe": true,
        "worstLoss": 2,
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
              "library",
              "science"
            ],
            "lost": 2
          },
          {
            "failed": [
              "arts"
            ],
            "lost": 1
          },
          {
            "failed": [
              "library",
              "arts"
            ],
            "lost": 2
          },
          {
            "failed": [
              "science",
              "arts"
            ],
            "lost": 2
          },
          {
            "failed": [
              "desert"
            ],
            "lost": 1
          },
          {
            "failed": [
              "library",
              "desert"
            ],
            "lost": 2
          },
          {
            "failed": [
              "science",
              "desert"
            ],
            "lost": 2
          },
          {
            "failed": [
              "arts",
              "desert"
            ],
            "lost": 2
          }
        ]
      }
    ],
    "loads": [
      {
        "domain": "library",
        "used": 3,
        "capacity": 10
      },
      {
        "domain": "science",
        "used": 3,
        "capacity": 10
      },
      {
        "domain": "arts",
        "used": 2,
        "capacity": 10
      },
      {
        "domain": "desert",
        "used": 2,
        "capacity": 10
      }
    ],
    "capacitySafe": true
  },
  "plan": {
    "safeStripes": 2,
    "stripes": [
      {
        "stripe": "s1",
        "data": 2,
        "parity": 4,
        "safe": true,
        "worstLoss": 4,
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
            "lost": 2
          },
          {
            "failed": [
              "library",
              "science"
            ],
            "lost": 4
          },
          {
            "failed": [
              "arts"
            ],
            "lost": 1
          },
          {
            "failed": [
              "library",
              "arts"
            ],
            "lost": 3
          },
          {
            "failed": [
              "science",
              "arts"
            ],
            "lost": 3
          },
          {
            "failed": [
              "desert"
            ],
            "lost": 1
          },
          {
            "failed": [
              "library",
              "desert"
            ],
            "lost": 3
          },
          {
            "failed": [
              "science",
              "desert"
            ],
            "lost": 3
          },
          {
            "failed": [
              "arts",
              "desert"
            ],
            "lost": 2
          }
        ]
      },
      {
        "stripe": "s2",
        "data": 2,
        "parity": 2,
        "safe": true,
        "worstLoss": 2,
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
              "library",
              "science"
            ],
            "lost": 2
          },
          {
            "failed": [
              "arts"
            ],
            "lost": 1
          },
          {
            "failed": [
              "library",
              "arts"
            ],
            "lost": 2
          },
          {
            "failed": [
              "science",
              "arts"
            ],
            "lost": 2
          },
          {
            "failed": [
              "desert"
            ],
            "lost": 1
          },
          {
            "failed": [
              "library",
              "desert"
            ],
            "lost": 2
          },
          {
            "failed": [
              "science",
              "desert"
            ],
            "lost": 2
          },
          {
            "failed": [
              "arts",
              "desert"
            ],
            "lost": 2
          }
        ]
      }
    ],
    "loads": [
      {
        "domain": "library",
        "used": 3,
        "capacity": 10
      },
      {
        "domain": "science",
        "used": 3,
        "capacity": 10
      },
      {
        "domain": "arts",
        "used": 2,
        "capacity": 10
      },
      {
        "domain": "desert",
        "used": 2,
        "capacity": 10
      }
    ],
    "capacitySafe": true,
    "cost": 0,
    "moves": 0,
    "placements": [
      {
        "shard": "=SUM(1,2)\n\"Shard 0\"",
        "stripe": "s1",
        "from": "library",
        "to": "library",
        "moved": false,
        "cost": 0,
        "pinned": false
      },
      {
        "shard": "=SUM(1,2)\n\"Shard 1\"",
        "stripe": "s1",
        "from": "science",
        "to": "science",
        "moved": false,
        "cost": 0,
        "pinned": false
      },
      {
        "shard": "=SUM(1,2)\n\"Shard 2\"",
        "stripe": "s1",
        "from": "arts",
        "to": "arts",
        "moved": false,
        "cost": 0,
        "pinned": false
      },
      {
        "shard": "=SUM(1,2)\n\"Shard 3\"",
        "stripe": "s1",
        "from": "desert",
        "to": "desert",
        "moved": false,
        "cost": 0,
        "pinned": false
      },
      {
        "shard": "=SUM(1,2)\n\"Shard 4\"",
        "stripe": "s1",
        "from": "library",
        "to": "library",
        "moved": false,
        "cost": 0,
        "pinned": false
      },
      {
        "shard": "=SUM(1,2)\n\"Shard 5\"",
        "stripe": "s1",
        "from": "science",
        "to": "science",
        "moved": false,
        "cost": 0,
        "pinned": false
      },
      {
        "shard": "=SUM(1,2)\n\"Shard 6\"",
        "stripe": "s2",
        "from": "arts",
        "to": "arts",
        "moved": false,
        "cost": 0,
        "pinned": false
      },
      {
        "shard": "=SUM(1,2)\n\"Shard 7\"",
        "stripe": "s2",
        "from": "desert",
        "to": "desert",
        "moved": false,
        "cost": 0,
        "pinned": false
      },
      {
        "shard": "=SUM(1,2)\n\"Shard 8\"",
        "stripe": "s2",
        "from": "library",
        "to": "library",
        "moved": false,
        "cost": 0,
        "pinned": false
      },
      {
        "shard": "=SUM(1,2)\n\"Shard 9\"",
        "stripe": "s2",
        "from": "science",
        "to": "science",
        "moved": false,
        "cost": 0,
        "pinned": false
      }
    ]
  },
  "searchNodes": 36,
  "literalMatches": 0,
  "shardCount": 10
}

## Complete original inventory and neural review
{
  "originalInput": {
    "title": "Campus archive rack-outage drill",
    "failures": 2,
    "domains": [
      {
        "id": "library",
        "description": "University library basement storage room",
        "capacity": 10
      },
      {
        "id": "science",
        "description": "Science building laboratory server room",
        "capacity": 10
      },
      {
        "id": "arts",
        "description": "Arts building media studio storage",
        "capacity": 10
      },
      {
        "id": "desert",
        "description": "Desert inland data center",
        "capacity": 10
      }
    ],
    "stripes": [
      {
        "id": "s1",
        "data": 2,
        "parity": 4
      },
      {
        "id": "s2",
        "data": 2,
        "parity": 2
      }
    ],
    "shards": [
      {
        "id": "=SUM(1,2)\n\"Shard 0\"",
        "stripe": "s1",
        "location": "University library basement storage room",
        "moveCost": 1,
        "pinned": false
      },
      {
        "id": "=SUM(1,2)\n\"Shard 1\"",
        "stripe": "s1",
        "location": "Science building laboratory server room",
        "moveCost": 1,
        "pinned": false
      },
      {
        "id": "=SUM(1,2)\n\"Shard 2\"",
        "stripe": "s1",
        "location": "Arts building media studio storage",
        "moveCost": 1,
        "pinned": false
      },
      {
        "id": "=SUM(1,2)\n\"Shard 3\"",
        "stripe": "s1",
        "location": "Desert inland data center",
        "moveCost": 1,
        "pinned": false
      },
      {
        "id": "=SUM(1,2)\n\"Shard 4\"",
        "stripe": "s1",
        "location": "University library basement storage room",
        "moveCost": 1,
        "pinned": false
      },
      {
        "id": "=SUM(1,2)\n\"Shard 5\"",
        "stripe": "s1",
        "location": "Science building laboratory server room",
        "moveCost": 1,
        "pinned": false
      },
      {
        "id": "=SUM(1,2)\n\"Shard 6\"",
        "stripe": "s2",
        "location": "Arts building media studio storage",
        "moveCost": 1,
        "pinned": false
      },
      {
        "id": "=SUM(1,2)\n\"Shard 7\"",
        "stripe": "s2",
        "location": "Desert inland data center",
        "moveCost": 1,
        "pinned": false
      },
      {
        "id": "=SUM(1,2)\n\"Shard 8\"",
        "stripe": "s2",
        "location": "University library basement storage room",
        "moveCost": 1,
        "pinned": false
      },
      {
        "id": "=SUM(1,2)\n\"Shard 9\"",
        "stripe": "s2",
        "location": "Science building laboratory server room",
        "moveCost": 1,
        "pinned": false
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "shard": "=SUM(1,2)\n\"Shard 0\"",
      "domain": "library",
      "aiDomain": "library",
      "evidence": [
        {
          "domain": "library",
          "score": 0.9999995772974659
        },
        {
          "domain": "science",
          "score": 0.4929116421279931
        },
        {
          "domain": "arts",
          "score": 0.48151480510398004
        },
        {
          "domain": "desert",
          "score": 0.23322286523532781
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "shard": "=SUM(1,2)\n\"Shard 1\"",
      "domain": "science",
      "aiDomain": "science",
      "evidence": [
        {
          "domain": "science",
          "score": 0.9999998842615803
        },
        {
          "domain": "library",
          "score": 0.4929116421279931
        },
        {
          "domain": "arts",
          "score": 0.34196652500278607
        },
        {
          "domain": "desert",
          "score": 0.1730850400616747
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "shard": "=SUM(1,2)\n\"Shard 2\"",
      "domain": "arts",
      "aiDomain": "arts",
      "evidence": [
        {
          "domain": "arts",
          "score": 1.0000002416070264
        },
        {
          "domain": "library",
          "score": 0.48151480510398004
        },
        {
          "domain": "science",
          "score": 0.34196652500278607
        },
        {
          "domain": "desert",
          "score": 0.17892062924146412
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "shard": "=SUM(1,2)\n\"Shard 3\"",
      "domain": "desert",
      "aiDomain": "desert",
      "evidence": [
        {
          "domain": "desert",
          "score": 1.0000006799632428
        },
        {
          "domain": "library",
          "score": 0.23322286523532781
        },
        {
          "domain": "arts",
          "score": 0.17892062924146412
        },
        {
          "domain": "science",
          "score": 0.1730850400616747
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "shard": "=SUM(1,2)\n\"Shard 4\"",
      "domain": "library",
      "aiDomain": "library",
      "evidence": [
        {
          "domain": "library",
          "score": 0.9999995772974659
        },
        {
          "domain": "science",
          "score": 0.4929116421279931
        },
        {
          "domain": "arts",
          "score": 0.48151480510398004
        },
        {
          "domain": "desert",
          "score": 0.23322286523532781
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "shard": "=SUM(1,2)\n\"Shard 5\"",
      "domain": "science",
      "aiDomain": "science",
      "evidence": [
        {
          "domain": "science",
          "score": 0.9999998842615803
        },
        {
          "domain": "library",
          "score": 0.4929116421279931
        },
        {
          "domain": "arts",
          "score": 0.34196652500278607
        },
        {
          "domain": "desert",
          "score": 0.1730850400616747
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 6,
      "shard": "=SUM(1,2)\n\"Shard 6\"",
      "domain": "arts",
      "aiDomain": "arts",
      "evidence": [
        {
          "domain": "arts",
          "score": 1.0000002416070264
        },
        {
          "domain": "library",
          "score": 0.48151480510398004
        },
        {
          "domain": "science",
          "score": 0.34196652500278607
        },
        {
          "domain": "desert",
          "score": 0.17892062924146412
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 7,
      "shard": "=SUM(1,2)\n\"Shard 7\"",
      "domain": "desert",
      "aiDomain": "desert",
      "evidence": [
        {
          "domain": "desert",
          "score": 1.0000006799632428
        },
        {
          "domain": "library",
          "score": 0.23322286523532781
        },
        {
          "domain": "arts",
          "score": 0.17892062924146412
        },
        {
          "domain": "science",
          "score": 0.1730850400616747
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 8,
      "shard": "=SUM(1,2)\n\"Shard 8\"",
      "domain": "library",
      "aiDomain": "library",
      "evidence": [
        {
          "domain": "library",
          "score": 0.9928062105660713
        },
        {
          "domain": "science",
          "score": 0.5041529320560256
        },
        {
          "domain": "arts",
          "score": 0.4859579871438482
        },
        {
          "domain": "desert",
          "score": 0.23627329705352937
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 9,
      "shard": "=SUM(1,2)\n\"Shard 9\"",
      "domain": "science",
      "aiDomain": "science",
      "evidence": [
        {
          "domain": "science",
          "score": 0.9932748860816798
        },
        {
          "domain": "library",
          "score": 0.5033539550393256
        },
        {
          "domain": "arts",
          "score": 0.3461679862378691
        },
        {
          "domain": "desert",
          "score": 0.1865115039620477
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ]
}
