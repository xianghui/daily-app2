# Supplier address lookup audit

Observed functional dependency, not a business-rule proof or full database normalization. Exact case-sensitive string equality; blanks on either side block extraction. No cell repairs, deletions or database changes.

## Current dependency audit
{
  "status": "blocked",
  "keys": [
    "vendor"
  ],
  "values": [
    "address"
  ],
  "sourceRows": 4,
  "keyGroups": 2,
  "missingRows": [],
  "conflicts": [
    {
      "key": [
        "V20"
      ],
      "sourceRows": [
        2,
        3
      ],
      "variants": [
        {
          "values": [
            "7 Birch Road"
          ],
          "sourceRows": [
            2
          ]
        },
        {
          "values": [
            "9 Birch Road"
          ],
          "sourceRows": [
            3
          ]
        }
      ]
    }
  ],
  "flatDependentCells": 4,
  "lookupDependentCells": 2,
  "literalHeaderBaseline": 0,
  "fieldCount": 2
}

## Complete originals and reviewed field evidence
{
  "originalInput": {
    "title": "Supplier address lookup audit",
    "columns": [
      {
        "id": "order",
        "description": "Purchase order number"
      },
      {
        "id": "vendor",
        "description": "Supplier account identifier"
      },
      {
        "id": "address",
        "description": "Supplier mailing address"
      },
      {
        "id": "item",
        "description": "Purchased item description"
      }
    ],
    "determinants": [
      "Vendor account code"
    ],
    "dependents": [
      "Postal address of the supplier"
    ],
    "rows": [
      [
        "PO-1",
        "V10",
        "14 Cedar Lane",
        "Paper"
      ],
      [
        "PO-2",
        "V10",
        "14 Cedar Lane",
        "Ink"
      ],
      [
        "PO-3",
        "V20",
        "7 Birch Road",
        "Folders"
      ],
      [
        "PO-4",
        "V20",
        "9 Birch Road",
        "Pens"
      ]
    ]
  },
  "reviews": [
    {
      "index": 0,
      "side": "determinant",
      "column": "vendor",
      "aiColumn": "vendor",
      "evidence": [
        {
          "id": "vendor",
          "score": 0.6313693091551944
        },
        {
          "id": "address",
          "score": 0.41780839006812687
        },
        {
          "id": "item",
          "score": 0.2944187633337145
        },
        {
          "id": "order",
          "score": 0.2914379722065258
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "side": "dependent",
      "column": "address",
      "aiColumn": "address",
      "evidence": [
        {
          "id": "address",
          "score": 0.8776219353747496
        },
        {
          "id": "vendor",
          "score": 0.5891848195868681
        },
        {
          "id": "order",
          "score": 0.4179983949606347
        },
        {
          "id": "item",
          "score": 0.30297251698091665
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ]
}
