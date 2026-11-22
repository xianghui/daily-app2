# Library service directory

Lookup-frequency planning, not observed usability. Assumes successful lookup, equal-cost binary branch decisions and the supplied fixed destination order. Similarity is not confidence. All counts and identities require review.

## Ordered binary menu
- Is the requested destination at or before “events” in the supplied order?
  - YES
    - Is the requested destination at or before “digital” in the supplied order?
      - YES
        - Is the requested destination at or before “borrow” in the supplied order?
          - YES
            - Open borrow: Borrow and renew books library loans
          - NO
            - Open digital: Electronic ebooks online journals access
      - NO
        - Is the requested destination at or before “rooms” in the supplied order?
          - YES
            - Open rooms: Study room reservations and group spaces
          - NO
            - Open events: Library workshops author talks and events
  - NO
    - Open donate: Donate used books and gift collections

## Computed comparison
Weighted decisions: 140 vs balanced 207; total lookups: 100. Expected decisions: 1.4 vs 2.07. Estimates under supplied frequencies; not measured time savings.

## Complete original and reviewed audit
{
  "schema": "index-canopy/1",
  "originalInput": {
    "title": "Library service directory",
    "destinations": [
      {
        "id": "borrow",
        "description": "Borrow and renew books library loans"
      },
      {
        "id": "digital",
        "description": "Electronic ebooks online journals access"
      },
      {
        "id": "rooms",
        "description": "Study room reservations and group spaces"
      },
      {
        "id": "events",
        "description": "Library workshops author talks and events"
      },
      {
        "id": "donate",
        "description": "Donate used books and gift collections"
      }
    ],
    "tallies": [
      {
        "id": "l1",
        "subject": "Extend the loan on my borrowed book",
        "count": 3
      },
      {
        "id": "l2",
        "subject": "Read electronic journals from home",
        "count": 4
      },
      {
        "id": "l3",
        "subject": "Reserve a quiet group study room",
        "count": 6
      },
      {
        "id": "l4",
        "subject": "Attend an author talk at the library",
        "count": 7
      },
      {
        "id": "l5",
        "subject": "Give used books to the library collection",
        "count": 60
      },
      {
        "id": "l6",
        "subject": "Gift my old books to the library",
        "count": 20
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "tally": "l1",
      "destination": "borrow",
      "aiDestination": "borrow",
      "count": 3,
      "evidence": [
        {
          "destination": "borrow",
          "score": 0.7294624473066561
        },
        {
          "destination": "donate",
          "score": 0.37319246987929544
        },
        {
          "destination": "digital",
          "score": 0.2131307230265265
        },
        {
          "destination": "rooms",
          "score": 0.1245308940248919
        },
        {
          "destination": "events",
          "score": 0.043644754227294476
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "tally": "l2",
      "destination": "digital",
      "aiDestination": "digital",
      "count": 4,
      "evidence": [
        {
          "destination": "digital",
          "score": 0.7157824902843477
        },
        {
          "destination": "donate",
          "score": 0.2861501043077319
        },
        {
          "destination": "borrow",
          "score": 0.21924517642289265
        },
        {
          "destination": "events",
          "score": 0.19470990600441063
        },
        {
          "destination": "rooms",
          "score": 0.13769777246596104
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "tally": "l3",
      "destination": "rooms",
      "aiDestination": "rooms",
      "count": 6,
      "evidence": [
        {
          "destination": "rooms",
          "score": 0.735849996982993
        },
        {
          "destination": "events",
          "score": 0.2098195177717553
        },
        {
          "destination": "borrow",
          "score": 0.17813039639496941
        },
        {
          "destination": "donate",
          "score": 0.16635220041440885
        },
        {
          "destination": "digital",
          "score": 0.13949258882242382
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "tally": "l4",
      "destination": "events",
      "aiDestination": "events",
      "count": 7,
      "evidence": [
        {
          "destination": "events",
          "score": 0.6469497438409355
        },
        {
          "destination": "borrow",
          "score": 0.38256632191855744
        },
        {
          "destination": "digital",
          "score": 0.3765763753576257
        },
        {
          "destination": "donate",
          "score": 0.3472000997131425
        },
        {
          "destination": "rooms",
          "score": 0.24903401694495853
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "tally": "l5",
      "destination": "donate",
      "aiDestination": "donate",
      "count": 60,
      "evidence": [
        {
          "destination": "donate",
          "score": 0.7506142018690668
        },
        {
          "destination": "borrow",
          "score": 0.5925821795693058
        },
        {
          "destination": "digital",
          "score": 0.4085830898469635
        },
        {
          "destination": "events",
          "score": 0.36490315826903796
        },
        {
          "destination": "rooms",
          "score": 0.19028199614484922
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "tally": "l6",
      "destination": "donate",
      "aiDestination": "donate",
      "count": 20,
      "evidence": [
        {
          "destination": "donate",
          "score": 0.6591460886863618
        },
        {
          "destination": "borrow",
          "score": 0.5963858186682348
        },
        {
          "destination": "digital",
          "score": 0.3204479702254547
        },
        {
          "destination": "events",
          "score": 0.2869757082078846
        },
        {
          "destination": "rooms",
          "score": 0.08553921690091772
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Lookup-frequency planning, not observed usability. Assumes successful lookup, equal-cost binary branch decisions and the supplied fixed destination order. Similarity is not confidence. All counts and identities require review.",
  "analysis": {
    "status": "ready",
    "total": 100,
    "weights": [
      3,
      4,
      6,
      7,
      80
    ],
    "optimal": {
      "root": {
        "lo": 0,
        "hi": 4,
        "split": 3,
        "cost": 140,
        "left": {
          "lo": 0,
          "hi": 3,
          "split": 1,
          "cost": 40,
          "left": {
            "lo": 0,
            "hi": 1,
            "split": 0,
            "cost": 7,
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
            "cost": 13,
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
          "hi": 4,
          "cost": 0
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
          }
        ]
      ],
      "cost": 140
    },
    "baseline": {
      "root": {
        "lo": 0,
        "hi": 4,
        "split": 2,
        "cost": 207,
        "left": {
          "lo": 0,
          "hi": 2,
          "split": 1,
          "cost": 20,
          "left": {
            "lo": 0,
            "hi": 1,
            "split": 0,
            "cost": 7,
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
          "hi": 4,
          "split": 3,
          "cost": 87,
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
        }
      },
      "paths": [
        [
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
            "split": 2,
            "side": "right"
          },
          {
            "split": 3,
            "side": "left"
          }
        ],
        [
          {
            "split": 2,
            "side": "right"
          },
          {
            "split": 3,
            "side": "right"
          }
        ]
      ],
      "cost": 207
    },
    "leaves": [
      {
        "id": "borrow",
        "description": "Borrow and renew books library loans",
        "weight": 3,
        "depth": 3,
        "baselineDepth": 3,
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
        "id": "digital",
        "description": "Electronic ebooks online journals access",
        "weight": 4,
        "depth": 3,
        "baselineDepth": 3,
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
        "id": "rooms",
        "description": "Study room reservations and group spaces",
        "weight": 6,
        "depth": 3,
        "baselineDepth": 2,
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
        "id": "events",
        "description": "Library workshops author talks and events",
        "weight": 7,
        "depth": 3,
        "baselineDepth": 2,
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
        "id": "donate",
        "description": "Donate used books and gift collections",
        "weight": 80,
        "depth": 1,
        "baselineDepth": 2,
        "path": [
          {
            "split": 3,
            "side": "right"
          }
        ]
      }
    ],
    "expectedChoices": 1.4,
    "baselineExpected": 2.07,
    "literalMatches": 0
  }
}
