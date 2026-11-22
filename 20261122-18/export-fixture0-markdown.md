# Synthetic inventory recovery review

AI similarity is not record identity. Whole analysis withheld for any held operation. Verify the explicit commit boundaries before approving. No database connection or changes.

## Reviewed recovery worksheet

RECOVERABLE: false | CASCADELESS: false | STRICT: false

Single-version latest-preceding-write semantics; all transactions commit. No rollback, MVCC, locking, isolation certification or execution.

TERMINAL-ONLY BASELINE: 2/2 committed. Terminal-only baseline sees all supplied transactions commit; it ignores who read an uncommitted write.

EARLY READER COMMIT WITNESSES:
checkout read stock at o2 from restock / o1; reader committed at event 6 before writer event 8

READ-FROM LEDGER:
o2 reads stock from o1 [UNCOMMITTED OTHER TRANSACTION]
o4 reads address from INITIAL
o5 reads price from o3
o6 reads stock from o1

DIRTY OVERWRITES:
None.

EVENT ORDER:
1. restock W o1 stock
2. checkout R o2 stock
3. checkout W o3 price
4. restock R o4 address
5. checkout R o5 price
6. checkout C after operation 5 
7. restock R o6 stock
8. restock C after operation 6 

Counts describe this supplied trace, not measured time savings or model accuracy.

## Complete source-linked audit

{
  "schema": "commit-cove/1",
  "originalInput": {
    "title": "Synthetic inventory recovery review",
    "resources": [
      {
        "id": "stock",
        "description": "Warehouse available inventory quantity"
      },
      {
        "id": "price",
        "description": "Product retail selling price"
      },
      {
        "id": "address",
        "description": "Customer delivery street address"
      }
    ],
    "transactions": [
      "restock",
      "checkout"
    ],
    "operations": [
      {
        "id": "o1",
        "transaction": "restock",
        "mode": "W",
        "resourceNote": "Available stock in warehouse"
      },
      {
        "id": "o2",
        "transaction": "checkout",
        "mode": "R",
        "resourceNote": "Warehouse inventory quantity on hand"
      },
      {
        "id": "o3",
        "transaction": "checkout",
        "mode": "W",
        "resourceNote": "Retail price of product"
      },
      {
        "id": "o4",
        "transaction": "restock",
        "mode": "R",
        "resourceNote": "Customer street address for delivery"
      },
      {
        "id": "o5",
        "transaction": "checkout",
        "mode": "R",
        "resourceNote": "Retail price of product"
      },
      {
        "id": "o6",
        "transaction": "restock",
        "mode": "R",
        "resourceNote": "Available stock in warehouse"
      }
    ],
    "commits": [
      {
        "transaction": "checkout",
        "after": 5
      },
      {
        "transaction": "restock",
        "after": 6
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "id": "o1",
      "resource": "stock",
      "aiResource": "stock",
      "transaction": "restock",
      "mode": "W",
      "evidence": [
        {
          "resource": "stock",
          "score": 0.8117918311003203
        },
        {
          "resource": "price",
          "score": 0.3497332059319932
        },
        {
          "resource": "address",
          "score": 0.25999696792735544
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "id": "o2",
      "resource": "stock",
      "aiResource": "stock",
      "transaction": "checkout",
      "mode": "R",
      "evidence": [
        {
          "resource": "stock",
          "score": 0.9428174224850064
        },
        {
          "resource": "price",
          "score": 0.36214178105365424
        },
        {
          "resource": "address",
          "score": 0.20917883403408094
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "id": "o3",
      "resource": "price",
      "aiResource": "price",
      "transaction": "checkout",
      "mode": "W",
      "evidence": [
        {
          "resource": "price",
          "score": 0.9051117054321896
        },
        {
          "resource": "stock",
          "score": 0.36204501468332934
        },
        {
          "resource": "address",
          "score": 0.1594197018917176
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "id": "o4",
      "resource": "address",
      "aiResource": "address",
      "transaction": "restock",
      "mode": "R",
      "evidence": [
        {
          "resource": "address",
          "score": 0.976421429010578
        },
        {
          "resource": "stock",
          "score": 0.22488668612148632
        },
        {
          "resource": "price",
          "score": 0.19862590796963572
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "id": "o5",
      "resource": "price",
      "aiResource": "price",
      "transaction": "checkout",
      "mode": "R",
      "evidence": [
        {
          "resource": "price",
          "score": 0.9051117054321896
        },
        {
          "resource": "stock",
          "score": 0.36204501468332934
        },
        {
          "resource": "address",
          "score": 0.1594197018917176
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "id": "o6",
      "resource": "stock",
      "aiResource": "stock",
      "transaction": "restock",
      "mode": "R",
      "evidence": [
        {
          "resource": "stock",
          "score": 0.8058175866178063
        },
        {
          "resource": "price",
          "score": 0.3468330111489836
        },
        {
          "resource": "address",
          "score": 0.24995556017449283
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "AI similarity is not record identity. Whole analysis withheld for any held operation. Verify the explicit commit boundaries before approving. No database connection or changes.",
  "analysis": {
    "status": "ready",
    "recoverable": false,
    "cascadeless": false,
    "strict": false,
    "reads": [
      {
        "read": "o2",
        "reader": "checkout",
        "resource": "stock",
        "source": "o1",
        "writer": "restock",
        "dirty": true
      },
      {
        "read": "o4",
        "reader": "restock",
        "resource": "address",
        "source": "INITIAL",
        "writer": null,
        "dirty": false
      },
      {
        "read": "o5",
        "reader": "checkout",
        "resource": "price",
        "source": "o3",
        "writer": "checkout",
        "dirty": false
      },
      {
        "read": "o6",
        "reader": "restock",
        "resource": "stock",
        "source": "o1",
        "writer": "restock",
        "dirty": false
      }
    ],
    "dirtyReads": [
      {
        "read": "o2",
        "reader": "checkout",
        "resource": "stock",
        "source": "o1",
        "writer": "restock",
        "dirty": true
      }
    ],
    "dirtyWrites": [],
    "violations": [
      {
        "read": "o2",
        "reader": "checkout",
        "resource": "stock",
        "source": "o1",
        "writer": "restock",
        "dirty": true,
        "writerCommitEvent": 8,
        "readerCommitEvent": 6
      }
    ],
    "events": [
      {
        "kind": "W",
        "sourceIndex": 0,
        "id": "o1",
        "transaction": "restock",
        "resource": "stock"
      },
      {
        "kind": "R",
        "sourceIndex": 1,
        "id": "o2",
        "transaction": "checkout",
        "resource": "stock"
      },
      {
        "kind": "W",
        "sourceIndex": 2,
        "id": "o3",
        "transaction": "checkout",
        "resource": "price"
      },
      {
        "kind": "R",
        "sourceIndex": 3,
        "id": "o4",
        "transaction": "restock",
        "resource": "address"
      },
      {
        "kind": "R",
        "sourceIndex": 4,
        "id": "o5",
        "transaction": "checkout",
        "resource": "price"
      },
      {
        "kind": "C",
        "transaction": "checkout",
        "boundary": 5
      },
      {
        "kind": "R",
        "sourceIndex": 5,
        "id": "o6",
        "transaction": "restock",
        "resource": "stock"
      },
      {
        "kind": "C",
        "transaction": "restock",
        "boundary": 6
      }
    ],
    "baseline": {
      "committed": 2,
      "total": 2,
      "description": "Terminal-only baseline sees all supplied transactions commit; it ignores who read an uncommitted write."
    },
    "scope": "Single-version latest-preceding-write semantics; all transactions commit. No rollback, MVCC, locking, isolation certification or execution."
  }
}

