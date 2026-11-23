# Synthetic warehouse import

s1 [valid] stock / nfkc-upper · AB-99
Value unchanged under reviewed policy.
U+0041 U+0042 U+002D U+0039 U+0039

s2 [valid] stock / nfkc-upper · AB-12
Proposed trim/Unicode/case transformation. Check that distinctions may safely be removed.
U+0041 U+0042 U+002D U+0031 U+0032

s3 [collision] stock / nfkc-upper · FF-03
Normalized key collides within this namespace. Hold a source or edit from verified evidence; never auto-merge.
U+0046 U+0046 U+002D U+0030 U+0033

s4 [collision] stock / nfkc-upper · FF-03
Normalized key collides within this namespace. Hold a source or edit from verified evidence; never auto-merge.
U+0046 U+0046 U+002D U+0030 U+0033

s5 [valid] logins / nfkc-lower · pilot
Value unchanged under reviewed policy.
U+0070 U+0069 U+006C U+006F U+0074

s6 [valid] names / nfc · Mira
Value unchanged under reviewed policy.
U+004D U+0069 U+0072 U+0061

## Complete source and review audit

```json

{
  "schema": "glyph-ledger/1",
  "appliedAt": "2026-11-23T01:04:41.576Z",
  "originalInput": {
    "title": "Synthetic warehouse import",
    "profiles": [
      {
        "id": "names",
        "description": "Personal display name for printed directory preserve original letter case and compatibility typography",
        "policy": "nfc"
      },
      {
        "id": "logins",
        "description": "Case insensitive account login username identifier for sign in",
        "policy": "nfkc-lower"
      },
      {
        "id": "stock",
        "description": "Uppercase warehouse stock SKU product code for inventory lookup",
        "policy": "nfkc-upper"
      }
    ],
    "records": [
      {
        "id": "s1",
        "note": "Warehouse inventory uppercase stock SKU product code",
        "value": "ＡＢ-１２"
      },
      {
        "id": "s2",
        "note": "Product SKU inventory lookup uppercase warehouse code",
        "value": "ab-12"
      },
      {
        "id": "s3",
        "note": "Warehouse stock product SKU inventory code",
        "value": "ﬀ-03"
      },
      {
        "id": "s4",
        "note": "Uppercase warehouse stock SKU for product lookup",
        "value": "FF-03"
      },
      {
        "id": "s5",
        "note": "Case insensitive sign in account login username",
        "value": "pilot"
      },
      {
        "id": "s6",
        "note": "Personal printed directory display name",
        "value": "Mira"
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Warehouse inventory uppercase stock SKU product code",
      "resource": "stock",
      "aiResource": "stock",
      "evidence": [
        {
          "resource": "stock",
          "score": 0.9421781736901902
        },
        {
          "resource": "names",
          "score": 0.3416301193421639
        },
        {
          "resource": "logins",
          "score": 0.23317114785323215
        }
      ],
      "value": "AB-99",
      "decision": "approve",
      "note": "=SUM(1,2)\nChecked \"source\", not identity."
    },
    {
      "index": 1,
      "text": "Product SKU inventory lookup uppercase warehouse code",
      "resource": "stock",
      "aiResource": "stock",
      "evidence": [
        {
          "resource": "stock",
          "score": 0.9625691595438906
        },
        {
          "resource": "names",
          "score": 0.3511842352136654
        },
        {
          "resource": "logins",
          "score": 0.2773521202156555
        }
      ],
      "value": "ab-12",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Warehouse stock product SKU inventory code",
      "resource": "stock",
      "aiResource": "stock",
      "evidence": [
        {
          "resource": "stock",
          "score": 0.8272454448453503
        },
        {
          "resource": "names",
          "score": 0.1748284554313469
        },
        {
          "resource": "logins",
          "score": 0.06389647440361022
        }
      ],
      "value": "ﬀ-03",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "text": "Uppercase warehouse stock SKU for product lookup",
      "resource": "stock",
      "aiResource": "stock",
      "evidence": [
        {
          "resource": "stock",
          "score": 0.8911487769052714
        },
        {
          "resource": "names",
          "score": 0.37697609973742097
        },
        {
          "resource": "logins",
          "score": 0.326354804595664
        }
      ],
      "value": "FF-03",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "text": "Case insensitive sign in account login username",
      "resource": "logins",
      "aiResource": "logins",
      "evidence": [
        {
          "resource": "logins",
          "score": 0.9390101480374897
        },
        {
          "resource": "names",
          "score": 0.38971129806363347
        },
        {
          "resource": "stock",
          "score": 0.24561631138618795
        }
      ],
      "value": "pilot",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "text": "Personal printed directory display name",
      "resource": "names",
      "aiResource": "names",
      "evidence": [
        {
          "resource": "names",
          "score": 0.8136046470574978
        },
        {
          "resource": "stock",
          "score": 0.2375853704191238
        },
        {
          "resource": "logins",
          "score": 0.19929455994581105
        }
      ],
      "value": "Mira",
      "decision": "approve",
      "note": ""
    }
  ],
  "analysis": {
    "checks": [
      {
        "id": "s1",
        "profile": "stock",
        "policy": "nfkc-upper",
        "reviewedValue": "AB-99",
        "normalized": "AB-99",
        "status": "valid",
        "changed": false,
        "reason": "Value unchanged under reviewed policy.",
        "codepoints": "U+0041 U+0042 U+002D U+0039 U+0039"
      },
      {
        "id": "s2",
        "profile": "stock",
        "policy": "nfkc-upper",
        "reviewedValue": "ab-12",
        "normalized": "AB-12",
        "status": "valid",
        "changed": true,
        "reason": "Proposed trim/Unicode/case transformation. Check that distinctions may safely be removed.",
        "codepoints": "U+0041 U+0042 U+002D U+0031 U+0032"
      },
      {
        "id": "s3",
        "profile": "stock",
        "policy": "nfkc-upper",
        "reviewedValue": "ﬀ-03",
        "normalized": "FF-03",
        "status": "collision",
        "changed": true,
        "reason": "Normalized key collides within this namespace. Hold a source or edit from verified evidence; never auto-merge.",
        "codepoints": "U+0046 U+0046 U+002D U+0030 U+0033"
      },
      {
        "id": "s4",
        "profile": "stock",
        "policy": "nfkc-upper",
        "reviewedValue": "FF-03",
        "normalized": "FF-03",
        "status": "collision",
        "changed": false,
        "reason": "Normalized key collides within this namespace. Hold a source or edit from verified evidence; never auto-merge.",
        "codepoints": "U+0046 U+0046 U+002D U+0030 U+0033"
      },
      {
        "id": "s5",
        "profile": "logins",
        "policy": "nfkc-lower",
        "reviewedValue": "pilot",
        "normalized": "pilot",
        "status": "valid",
        "changed": false,
        "reason": "Value unchanged under reviewed policy.",
        "codepoints": "U+0070 U+0069 U+006C U+006F U+0074"
      },
      {
        "id": "s6",
        "profile": "names",
        "policy": "nfc",
        "reviewedValue": "Mira",
        "normalized": "Mira",
        "status": "valid",
        "changed": false,
        "reason": "Value unchanged under reviewed policy.",
        "codepoints": "U+004D U+0069 U+0072 U+0061"
      }
    ],
    "collisions": [
      [
        "s3",
        "s4"
      ]
    ],
    "rawCollisions": [],
    "rawDuplicatePairs": 0,
    "normalizedDuplicatePairs": 1,
    "newDuplicatePairs": 1,
    "ready": 4,
    "held": 0,
    "blocked": 2,
    "changed": 2
  }
}

```

