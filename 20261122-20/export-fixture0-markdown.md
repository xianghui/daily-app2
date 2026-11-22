# Synthetic checkout incident

Semantic similarity is not service identity. Any held event withholds the whole causal worksheet. No server access, incident action or wall-clock reconstruction.

## Reviewed logical-clock worksheet

Logical happens-before under complete supplied message pairs and observed local order only. Concurrent means neither event is reachable from the other; not simultaneous wall time. A topological linearization is one possible order, never a measured chronology. Missing dependencies can make real relations appear concurrent.

CLOCK COMPONENTS: gateway / payment / stock

EVENT PAIRS: 15; ordered: 11; concurrent: 4

SOURCE-ORDER BASELINE: 5 reversed causal pairs, 4 unsupported concurrent orderings. This is a computed diagnostic, not measured time saved.

ONE VALID LINEARIZATION (not wall time): checkout → charge → browse → reserve-request → reserve → stock-recorded

EVENT CLOCKS
reserve | stock #1 | [1, 2, 1] | source row 1
charge | payment #1 | [1, 1, 0] | source row 2
browse | gateway #2 | [2, 0, 0] | source row 3
checkout | gateway #1 | [1, 0, 0] | source row 4
reserve-request | payment #2 | [1, 2, 0] | source row 5
stock-recorded | stock #2 | [1, 2, 2] | source row 6

PAIR WITNESSES
reserve after charge | charge → reserve-request → reserve
reserve concurrent browse | neither direction has a supplied path
reserve after checkout | checkout → charge → reserve-request → reserve
reserve after reserve-request | reserve-request → reserve
reserve before stock-recorded | reserve → stock-recorded
charge concurrent browse | neither direction has a supplied path
charge after checkout | checkout → charge
charge before reserve-request | charge → reserve-request
charge before stock-recorded | charge → reserve-request → reserve → stock-recorded
browse after checkout | checkout → browse
browse concurrent reserve-request | neither direction has a supplied path
browse concurrent stock-recorded | neither direction has a supplied path
checkout before reserve-request | checkout → charge → reserve-request
checkout before stock-recorded | checkout → charge → reserve-request → reserve → stock-recorded
reserve-request before stock-recorded | reserve-request → reserve → stock-recorded

## Complete original and review audit

{
  "schema": "causal-lantern/1",
  "originalInput": {
    "title": "Synthetic checkout incident",
    "services": [
      {
        "id": "gateway",
        "description": "Web storefront checkout gateway accepting customer requests"
      },
      {
        "id": "payment",
        "description": "Payment processor charging credit cards and authorizing purchases"
      },
      {
        "id": "stock",
        "description": "Warehouse inventory service reserving stock quantities"
      }
    ],
    "events": [
      {
        "id": "reserve",
        "serviceNote": "Warehouse stock reservation inventory",
        "seq": 1,
        "kind": "receive",
        "message": "reserve-request"
      },
      {
        "id": "charge",
        "serviceNote": "Credit card payment authorization processor",
        "seq": 1,
        "kind": "receive",
        "message": "checkout-request"
      },
      {
        "id": "browse",
        "serviceNote": "Customer web storefront checkout gateway",
        "seq": 2,
        "kind": "local",
        "message": ""
      },
      {
        "id": "checkout",
        "serviceNote": "Web storefront accepting customer checkout",
        "seq": 1,
        "kind": "send",
        "message": "checkout-request"
      },
      {
        "id": "reserve-request",
        "serviceNote": "Credit card payment processor",
        "seq": 2,
        "kind": "send",
        "message": "reserve-request"
      },
      {
        "id": "stock-recorded",
        "serviceNote": "Warehouse inventory stock quantities",
        "seq": 2,
        "kind": "local",
        "message": ""
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "id": "reserve",
      "resource": "stock",
      "aiResource": "stock",
      "seq": 1,
      "kind": "receive",
      "message": "reserve-request",
      "evidence": [
        {
          "resource": "stock",
          "score": 0.8167634492829908
        },
        {
          "resource": "payment",
          "score": 0.09753054571599812
        },
        {
          "resource": "gateway",
          "score": 0.08437772869834745
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "id": "charge",
      "resource": "payment",
      "aiResource": "payment",
      "seq": 1,
      "kind": "receive",
      "message": "checkout-request",
      "evidence": [
        {
          "resource": "payment",
          "score": 0.7464552961518582
        },
        {
          "resource": "gateway",
          "score": 0.20025334864297936
        },
        {
          "resource": "stock",
          "score": 0.16058922937715342
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "id": "browse",
      "resource": "gateway",
      "aiResource": "gateway",
      "seq": 2,
      "kind": "local",
      "message": "",
      "evidence": [
        {
          "resource": "gateway",
          "score": 0.847324401010906
        },
        {
          "resource": "stock",
          "score": 0.20383089321940637
        },
        {
          "resource": "payment",
          "score": 0.19208030658655334
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "id": "checkout",
      "resource": "gateway",
      "aiResource": "gateway",
      "seq": 1,
      "kind": "send",
      "message": "checkout-request",
      "evidence": [
        {
          "resource": "gateway",
          "score": 0.8112451991915496
        },
        {
          "resource": "payment",
          "score": 0.23338446157876921
        },
        {
          "resource": "stock",
          "score": 0.1749701586580851
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "id": "reserve-request",
      "resource": "payment",
      "aiResource": "payment",
      "seq": 2,
      "kind": "send",
      "message": "reserve-request",
      "evidence": [
        {
          "resource": "payment",
          "score": 0.7475355075278178
        },
        {
          "resource": "stock",
          "score": 0.1553398687907956
        },
        {
          "resource": "gateway",
          "score": 0.14080151655529144
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "id": "stock-recorded",
      "resource": "stock",
      "aiResource": "stock",
      "seq": 2,
      "kind": "local",
      "message": "",
      "evidence": [
        {
          "resource": "stock",
          "score": 0.8696079010818585
        },
        {
          "resource": "payment",
          "score": 0.06139739658036797
        },
        {
          "resource": "gateway",
          "score": 0.04856018656650111
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Semantic similarity is not service identity. Any held event withholds the whole causal worksheet. No server access, incident action or wall-clock reconstruction.",
  "analysis": {
    "status": "ready",
    "serviceOrder": [
      "gateway",
      "payment",
      "stock"
    ],
    "events": [
      {
        "id": "reserve",
        "sourceRow": 1,
        "service": "stock",
        "seq": 1,
        "clock": [
          1,
          2,
          1
        ]
      },
      {
        "id": "charge",
        "sourceRow": 2,
        "service": "payment",
        "seq": 1,
        "clock": [
          1,
          1,
          0
        ]
      },
      {
        "id": "browse",
        "sourceRow": 3,
        "service": "gateway",
        "seq": 2,
        "clock": [
          2,
          0,
          0
        ]
      },
      {
        "id": "checkout",
        "sourceRow": 4,
        "service": "gateway",
        "seq": 1,
        "clock": [
          1,
          0,
          0
        ]
      },
      {
        "id": "reserve-request",
        "sourceRow": 5,
        "service": "payment",
        "seq": 2,
        "clock": [
          1,
          2,
          0
        ]
      },
      {
        "id": "stock-recorded",
        "sourceRow": 6,
        "service": "stock",
        "seq": 2,
        "clock": [
          1,
          2,
          2
        ]
      }
    ],
    "edges": [
      {
        "from": "checkout",
        "to": "browse",
        "type": "local",
        "label": "gateway"
      },
      {
        "from": "charge",
        "to": "reserve-request",
        "type": "local",
        "label": "payment"
      },
      {
        "from": "reserve",
        "to": "stock-recorded",
        "type": "local",
        "label": "stock"
      },
      {
        "from": "reserve-request",
        "to": "reserve",
        "type": "message",
        "label": "reserve-request"
      },
      {
        "from": "checkout",
        "to": "charge",
        "type": "message",
        "label": "checkout-request"
      }
    ],
    "pairs": [
      {
        "left": "reserve",
        "right": "charge",
        "relation": "after",
        "path": [
          "charge",
          "reserve-request",
          "reserve"
        ],
        "baseline": "left before right (source-order guess)"
      },
      {
        "left": "reserve",
        "right": "browse",
        "relation": "concurrent",
        "path": [],
        "baseline": "left before right (source-order guess)"
      },
      {
        "left": "reserve",
        "right": "checkout",
        "relation": "after",
        "path": [
          "checkout",
          "charge",
          "reserve-request",
          "reserve"
        ],
        "baseline": "left before right (source-order guess)"
      },
      {
        "left": "reserve",
        "right": "reserve-request",
        "relation": "after",
        "path": [
          "reserve-request",
          "reserve"
        ],
        "baseline": "left before right (source-order guess)"
      },
      {
        "left": "reserve",
        "right": "stock-recorded",
        "relation": "before",
        "path": [
          "reserve",
          "stock-recorded"
        ],
        "baseline": "left before right (source-order guess)"
      },
      {
        "left": "charge",
        "right": "browse",
        "relation": "concurrent",
        "path": [],
        "baseline": "left before right (source-order guess)"
      },
      {
        "left": "charge",
        "right": "checkout",
        "relation": "after",
        "path": [
          "checkout",
          "charge"
        ],
        "baseline": "left before right (source-order guess)"
      },
      {
        "left": "charge",
        "right": "reserve-request",
        "relation": "before",
        "path": [
          "charge",
          "reserve-request"
        ],
        "baseline": "left before right (source-order guess)"
      },
      {
        "left": "charge",
        "right": "stock-recorded",
        "relation": "before",
        "path": [
          "charge",
          "reserve-request",
          "reserve",
          "stock-recorded"
        ],
        "baseline": "left before right (source-order guess)"
      },
      {
        "left": "browse",
        "right": "checkout",
        "relation": "after",
        "path": [
          "checkout",
          "browse"
        ],
        "baseline": "left before right (source-order guess)"
      },
      {
        "left": "browse",
        "right": "reserve-request",
        "relation": "concurrent",
        "path": [],
        "baseline": "left before right (source-order guess)"
      },
      {
        "left": "browse",
        "right": "stock-recorded",
        "relation": "concurrent",
        "path": [],
        "baseline": "left before right (source-order guess)"
      },
      {
        "left": "checkout",
        "right": "reserve-request",
        "relation": "before",
        "path": [
          "checkout",
          "charge",
          "reserve-request"
        ],
        "baseline": "left before right (source-order guess)"
      },
      {
        "left": "checkout",
        "right": "stock-recorded",
        "relation": "before",
        "path": [
          "checkout",
          "charge",
          "reserve-request",
          "reserve",
          "stock-recorded"
        ],
        "baseline": "left before right (source-order guess)"
      },
      {
        "left": "reserve-request",
        "right": "stock-recorded",
        "relation": "before",
        "path": [
          "reserve-request",
          "reserve",
          "stock-recorded"
        ],
        "baseline": "left before right (source-order guess)"
      }
    ],
    "linearization": [
      "checkout",
      "charge",
      "browse",
      "reserve-request",
      "reserve",
      "stock-recorded"
    ],
    "concurrent": 4,
    "ordered": 11,
    "inversions": 5,
    "baselineUnsupported": 9,
    "totalPairs": 15,
    "messageCount": 2,
    "scope": "Logical happens-before under complete supplied message pairs and observed local order only. Concurrent means neither event is reachable from the other; not simultaneous wall time. A topological linearization is one possible order, never a measured chronology. Missing dependencies can make real relations appear concurrent."
  }
}

