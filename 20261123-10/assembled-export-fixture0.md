# Synthetic directory migration

n1 [collision] names / nfc · Café
Normalized key collides within this namespace. Hold a source or edit from verified evidence; never auto-merge.
U+0043 U+0061 U+0066 U+00E9

n2 [collision] names / nfc · Café
Normalized key collides within this namespace. Hold a source or edit from verified evidence; never auto-merge.
U+0043 U+0061 U+0066 U+00E9

u1 [collision] logins / nfkc-lower · alice
Normalized key collides within this namespace. Hold a source or edit from verified evidence; never auto-merge.
U+0061 U+006C U+0069 U+0063 U+0065

u2 [collision] logins / nfkc-lower · alice
Normalized key collides within this namespace. Hold a source or edit from verified evidence; never auto-merge.
U+0061 U+006C U+0069 U+0063 U+0065

n3 [valid] names / nfc · Lina
Value unchanged under reviewed policy.
U+004C U+0069 U+006E U+0061

u3 [valid] logins / nfkc-lower · robin
Proposed trim/Unicode/case transformation. Check that distinctions may safely be removed.
U+0072 U+006F U+0062 U+0069 U+006E

## Complete source and review audit

```json

{
  "schema": "glyph-ledger/1",
  "appliedAt": "2026-11-23T01:07:42.222Z",
  "originalInput": {
    "title": "Synthetic directory migration",
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
        "id": "n1",
        "note": "Personal display name printed in directory",
        "value": "Café"
      },
      {
        "id": "n2",
        "note": "Printed directory personal display name preserve case",
        "value": "Café"
      },
      {
        "id": "u1",
        "note": "Case insensitive account login username for sign in",
        "value": "ＡＬＩＣＥ"
      },
      {
        "id": "u2",
        "note": "Sign in account login username identifier",
        "value": "alice"
      },
      {
        "id": "n3",
        "note": "Display name for printed personal directory",
        "value": "Lina"
      },
      {
        "id": "u3",
        "note": "Account sign in login username",
        "value": " robin "
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Personal display name printed in directory",
      "resource": "names",
      "aiResource": "names",
      "evidence": [
        {
          "resource": "names",
          "score": 0.7761351298781709
        },
        {
          "resource": "logins",
          "score": 0.2998208242564769
        },
        {
          "resource": "stock",
          "score": 0.21255965411110436
        }
      ],
      "value": "Café",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "Printed directory personal display name preserve case",
      "resource": "names",
      "aiResource": "names",
      "evidence": [
        {
          "resource": "names",
          "score": 0.8928387690280017
        },
        {
          "resource": "logins",
          "score": 0.43113727401896906
        },
        {
          "resource": "stock",
          "score": 0.34173729321918767
        }
      ],
      "value": "Café",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Case insensitive account login username for sign in",
      "resource": "logins",
      "aiResource": "logins",
      "evidence": [
        {
          "resource": "logins",
          "score": 0.9501470249016891
        },
        {
          "resource": "names",
          "score": 0.35846639997488355
        },
        {
          "resource": "stock",
          "score": 0.2379835769366111
        }
      ],
      "value": "ＡＬＩＣＥ",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "text": "Sign in account login username identifier",
      "resource": "logins",
      "aiResource": "logins",
      "evidence": [
        {
          "resource": "logins",
          "score": 0.7570244080467959
        },
        {
          "resource": "names",
          "score": 0.21678245530356904
        },
        {
          "resource": "stock",
          "score": 0.11792231138185123
        }
      ],
      "value": "alice",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "text": "Display name for printed personal directory",
      "resource": "names",
      "aiResource": "names",
      "evidence": [
        {
          "resource": "names",
          "score": 0.8061682688186863
        },
        {
          "resource": "logins",
          "score": 0.25615757470458356
        },
        {
          "resource": "stock",
          "score": 0.2397078307297245
        }
      ],
      "value": "Lina",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "text": "Account sign in login username",
      "resource": "logins",
      "aiResource": "logins",
      "evidence": [
        {
          "resource": "logins",
          "score": 0.651940847690677
        },
        {
          "resource": "names",
          "score": 0.15289595551831892
        },
        {
          "resource": "stock",
          "score": 0.0502362952406606
        }
      ],
      "value": " robin ",
      "decision": "approve",
      "note": ""
    }
  ],
  "analysis": {
    "checks": [
      {
        "id": "n1",
        "profile": "names",
        "policy": "nfc",
        "reviewedValue": "Café",
        "normalized": "Café",
        "status": "collision",
        "changed": false,
        "reason": "Normalized key collides within this namespace. Hold a source or edit from verified evidence; never auto-merge.",
        "codepoints": "U+0043 U+0061 U+0066 U+00E9"
      },
      {
        "id": "n2",
        "profile": "names",
        "policy": "nfc",
        "reviewedValue": "Café",
        "normalized": "Café",
        "status": "collision",
        "changed": true,
        "reason": "Normalized key collides within this namespace. Hold a source or edit from verified evidence; never auto-merge.",
        "codepoints": "U+0043 U+0061 U+0066 U+00E9"
      },
      {
        "id": "u1",
        "profile": "logins",
        "policy": "nfkc-lower",
        "reviewedValue": "ＡＬＩＣＥ",
        "normalized": "alice",
        "status": "collision",
        "changed": true,
        "reason": "Normalized key collides within this namespace. Hold a source or edit from verified evidence; never auto-merge.",
        "codepoints": "U+0061 U+006C U+0069 U+0063 U+0065"
      },
      {
        "id": "u2",
        "profile": "logins",
        "policy": "nfkc-lower",
        "reviewedValue": "alice",
        "normalized": "alice",
        "status": "collision",
        "changed": false,
        "reason": "Normalized key collides within this namespace. Hold a source or edit from verified evidence; never auto-merge.",
        "codepoints": "U+0061 U+006C U+0069 U+0063 U+0065"
      },
      {
        "id": "n3",
        "profile": "names",
        "policy": "nfc",
        "reviewedValue": "Lina",
        "normalized": "Lina",
        "status": "valid",
        "changed": false,
        "reason": "Value unchanged under reviewed policy.",
        "codepoints": "U+004C U+0069 U+006E U+0061"
      },
      {
        "id": "u3",
        "profile": "logins",
        "policy": "nfkc-lower",
        "reviewedValue": " robin ",
        "normalized": "robin",
        "status": "valid",
        "changed": true,
        "reason": "Proposed trim/Unicode/case transformation. Check that distinctions may safely be removed.",
        "codepoints": "U+0072 U+006F U+0062 U+0069 U+006E"
      }
    ],
    "collisions": [
      [
        "n1",
        "n2"
      ],
      [
        "u1",
        "u2"
      ]
    ],
    "rawCollisions": [],
    "rawDuplicatePairs": 0,
    "normalizedDuplicatePairs": 2,
    "newDuplicatePairs": 2,
    "ready": 2,
    "held": 0,
    "blocked": 4,
    "changed": 3
  }
}

```

