# Synthetic single-document editorial handoff

Bounded capacity-constrained Petri-net worksheet, not workflow execution or real-system safety certification. Atomic transitions, integer tokens, no time, fairness or hidden actions. Capacity overflow disables a firing. Goal means at least the supplied counts, not that all other places are empty. Terminal non-goal markings are deadlocks; livelocks are not classified. Holds withhold the whole analysis.

## Reviewed reachability worksheet

INITIAL-ONLY BASELINE: 1 enabled actions; not a terminal deadlock.

EXHAUSTIVE CHECK: 4 reachable markings of 16 capacity-bounded possibilities; 0 reachable non-goal terminal deadlocks.

COMPLETION: reachable via assign → approve → publish.

Never-enabled actions: none.

Counts computed from the manifest, not time savings or general model accuracy.

## Complete source-linked audit

{
  "schema": "token-passage/1",
  "originalInput": {
    "title": "Synthetic single-document editorial handoff",
    "places": [
      {
        "id": "draft",
        "description": "Draft document awaiting review",
        "initial": 1,
        "capacity": 1
      },
      {
        "id": "review",
        "description": "Document currently under editorial review",
        "initial": 0,
        "capacity": 1
      },
      {
        "id": "approved",
        "description": "Approved document ready for publication",
        "initial": 0,
        "capacity": 1
      },
      {
        "id": "published",
        "description": "Published document in the archive",
        "initial": 0,
        "capacity": 1
      }
    ],
    "goals": [
      {
        "place": "published",
        "count": 1
      }
    ],
    "transitions": [
      {
        "id": "assign",
        "consume": [
          {
            "place": "The draft document awaiting review",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "The document currently under editorial review",
            "count": 1
          }
        ]
      },
      {
        "id": "approve",
        "consume": [
          {
            "place": "The document currently under editorial review",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "The approved document ready for publication",
            "count": 1
          }
        ]
      },
      {
        "id": "revise",
        "consume": [
          {
            "place": "The document currently under editorial review",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "The draft document awaiting review",
            "count": 1
          }
        ]
      },
      {
        "id": "publish",
        "consume": [
          {
            "place": "The approved document ready for publication",
            "count": 1
          }
        ],
        "produce": [
          {
            "place": "The published document in the archive",
            "count": 1
          }
        ]
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "transition": "assign",
      "side": "consume",
      "slot": 0,
      "place": "draft",
      "aiPlace": "draft",
      "count": 1,
      "evidence": [
        {
          "place": "draft",
          "score": 0.9350124198349586
        },
        {
          "place": "approved",
          "score": 0.6496914495855566
        },
        {
          "place": "review",
          "score": 0.6360163901916589
        },
        {
          "place": "published",
          "score": 0.43359184751706914
        }
      ],
      "decision": "approve",
      "note": "=SUM(1,2)\nReviewed \"source\", preserved."
    },
    {
      "index": 1,
      "transition": "assign",
      "side": "produce",
      "slot": 0,
      "place": "review",
      "aiPlace": "review",
      "count": 1,
      "evidence": [
        {
          "place": "review",
          "score": 0.9471628651347955
        },
        {
          "place": "approved",
          "score": 0.5730627167544247
        },
        {
          "place": "draft",
          "score": 0.5710204270641317
        },
        {
          "place": "published",
          "score": 0.5390562298210204
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "transition": "approve",
      "side": "consume",
      "slot": 0,
      "place": "review",
      "aiPlace": "review",
      "count": 1,
      "evidence": [
        {
          "place": "review",
          "score": 0.9471628651347955
        },
        {
          "place": "approved",
          "score": 0.5730627167544247
        },
        {
          "place": "draft",
          "score": 0.5710204270641317
        },
        {
          "place": "published",
          "score": 0.5390562298210204
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "transition": "approve",
      "side": "produce",
      "slot": 0,
      "place": "approved",
      "aiPlace": "approved",
      "count": 1,
      "evidence": [
        {
          "place": "approved",
          "score": 0.9684238735537619
        },
        {
          "place": "draft",
          "score": 0.629509706733249
        },
        {
          "place": "review",
          "score": 0.5945232808597161
        },
        {
          "place": "published",
          "score": 0.5640444351387199
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "transition": "revise",
      "side": "consume",
      "slot": 0,
      "place": "review",
      "aiPlace": "review",
      "count": 1,
      "evidence": [
        {
          "place": "review",
          "score": 0.9433752699533899
        },
        {
          "place": "approved",
          "score": 0.5745077414607207
        },
        {
          "place": "draft",
          "score": 0.5582853331065577
        },
        {
          "place": "published",
          "score": 0.5386382704417098
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "transition": "revise",
      "side": "produce",
      "slot": 0,
      "place": "draft",
      "aiPlace": "draft",
      "count": 1,
      "evidence": [
        {
          "place": "draft",
          "score": 0.9399808941648133
        },
        {
          "place": "approved",
          "score": 0.6519044005587649
        },
        {
          "place": "review",
          "score": 0.63089377970613
        },
        {
          "place": "published",
          "score": 0.43578597399410957
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 6,
      "transition": "publish",
      "side": "consume",
      "slot": 0,
      "place": "approved",
      "aiPlace": "approved",
      "count": 1,
      "evidence": [
        {
          "place": "approved",
          "score": 0.9679940357033701
        },
        {
          "place": "draft",
          "score": 0.6303119403552663
        },
        {
          "place": "review",
          "score": 0.5895392040729713
        },
        {
          "place": "published",
          "score": 0.5653454304506494
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 7,
      "transition": "publish",
      "side": "produce",
      "slot": 0,
      "place": "published",
      "aiPlace": "published",
      "count": 1,
      "evidence": [
        {
          "place": "published",
          "score": 0.9278743783939795
        },
        {
          "place": "review",
          "score": 0.5772068213055617
        },
        {
          "place": "approved",
          "score": 0.5323104751263628
        },
        {
          "place": "draft",
          "score": 0.40106490532251093
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
      "draft",
      "review",
      "approved",
      "published"
    ],
    "stateBound": 16,
    "reachableStates": 4,
    "enabledFirings": 4,
    "enabledInitially": [
      "assign"
    ],
    "initialDeadlock": false,
    "completionReachable": true,
    "shortestCompletion": {
      "marking": [
        0,
        0,
        0,
        1
      ],
      "path": [
        "assign",
        "approve",
        "publish"
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
          0
        ],
        "path": []
      },
      {
        "marking": [
          0,
          1,
          0,
          0
        ],
        "path": [
          "assign"
        ]
      },
      {
        "marking": [
          0,
          0,
          1,
          0
        ],
        "path": [
          "assign",
          "approve"
        ]
      },
      {
        "marking": [
          0,
          0,
          0,
          1
        ],
        "path": [
          "assign",
          "approve",
          "publish"
        ]
      }
    ]
  }
}

