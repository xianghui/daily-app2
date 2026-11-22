# Synthetic publishing archive gap

Semantic similarity is not system identity. Any held archive withholds the whole plan. Metadata cannot prove backups are restorable. No storage access or restoration.

## Reviewed backup-chain worksheet

Hypothetical metadata only: full snapshots and forward exact-base deltas. MB is the supplied integer transfer size, not measured restore time. No file validity, checksums, retention or engine compatibility verification.

COMPLETE TARGETS: 1/2; newest-file-only baseline: 0/2

TRANSFER SIZE: 75 MB across complete targets only. Gapped targets are not included.

SYSTEM articles → snapshot 5 [gap]
Newest-file-only: story-delta / incomplete
No complete chain to exact target. Obtain a compatible full snapshot or missing exact-base deltas.
Reachable snapshots: 1
Unavailable base witnesses: story-delta needs 3 (source 2)
Unused archive IDs retained: story-full, story-delta

SYSTEM images → snapshot 7 [complete]
Newest-file-only: image-old-delta / incomplete
1. image-new-full | FULL → 6 | 60 MB | source row 5
2. image-new-delta | 6 → 7 | 15 MB | source row 6
Reachable snapshots: 2, 6, 7
Unavailable base witnesses: none
Unused archive IDs retained: image-old-full, image-old-delta

Costs and counts describe supplied metadata, not measured productivity or model accuracy.

## Complete original and review audit

{
  "schema": "restore-trail/1",
  "originalInput": {
    "title": "Synthetic publishing archive gap",
    "systems": [
      {
        "id": "articles",
        "description": "News article text headlines and stories",
        "target": 5
      },
      {
        "id": "images",
        "description": "Photograph image library originals",
        "target": 7
      }
    ],
    "archives": [
      {
        "id": "story-full",
        "systemNote": "News story article text and headlines",
        "from": null,
        "to": 1,
        "size": 30
      },
      {
        "id": "story-delta",
        "systemNote": "Article headline and news story text",
        "from": 3,
        "to": 5,
        "size": 6
      },
      {
        "id": "image-old-full",
        "systemNote": "Library of original photograph images",
        "from": null,
        "to": 2,
        "size": 100
      },
      {
        "id": "image-old-delta",
        "systemNote": "Original photographs image library",
        "from": 2,
        "to": 7,
        "size": 50
      },
      {
        "id": "image-new-full",
        "systemNote": "Library of original photograph images",
        "from": null,
        "to": 6,
        "size": 60
      },
      {
        "id": "image-new-delta",
        "systemNote": "Original photographs image library",
        "from": 6,
        "to": 7,
        "size": 15
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "id": "story-full",
      "resource": "articles",
      "aiResource": "articles",
      "from": null,
      "to": 1,
      "size": 30,
      "evidence": [
        {
          "resource": "articles",
          "score": 0.9698115463605455
        },
        {
          "resource": "images",
          "score": -0.02878789422709334
        }
      ],
      "decision": "approve",
      "note": "=SUM(1,2)\nReviewed \"source\", preserved."
    },
    {
      "index": 1,
      "id": "story-delta",
      "resource": "articles",
      "aiResource": "articles",
      "from": 3,
      "to": 5,
      "size": 6,
      "evidence": [
        {
          "resource": "articles",
          "score": 0.9365033143778794
        },
        {
          "resource": "images",
          "score": 0.010515014354338364
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "id": "image-old-full",
      "resource": "images",
      "aiResource": "images",
      "from": null,
      "to": 2,
      "size": 100,
      "evidence": [
        {
          "resource": "images",
          "score": 0.9236988781744573
        },
        {
          "resource": "articles",
          "score": 0.008659191114987655
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "id": "image-old-delta",
      "resource": "images",
      "aiResource": "images",
      "from": 2,
      "to": 7,
      "size": 50,
      "evidence": [
        {
          "resource": "images",
          "score": 0.9379719121651647
        },
        {
          "resource": "articles",
          "score": 0.01931349933271554
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "id": "image-new-full",
      "resource": "images",
      "aiResource": "images",
      "from": null,
      "to": 6,
      "size": 60,
      "evidence": [
        {
          "resource": "images",
          "score": 0.9236988781744573
        },
        {
          "resource": "articles",
          "score": 0.008659191114987655
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "id": "image-new-delta",
      "resource": "images",
      "aiResource": "images",
      "from": 6,
      "to": 7,
      "size": 15,
      "evidence": [
        {
          "resource": "images",
          "score": 0.9379719121651647
        },
        {
          "resource": "articles",
          "score": 0.01931349933271554
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Semantic similarity is not system identity. Any held archive withholds the whole plan. Metadata cannot prove backups are restorable. No storage access or restoration.",
  "analysis": {
    "status": "ready",
    "plans": [
      {
        "system": "articles",
        "target": 5,
        "status": "gap",
        "totalMB": null,
        "chain": [],
        "reachableVersions": [
          1
        ],
        "baseline": {
          "archive": "story-delta",
          "size": 6,
          "complete": false,
          "description": "Newest-file-only baseline selects greatest to ≤target; source-order ties. A delta alone is not a restore chain."
        },
        "missingBases": [
          {
            "archive": "story-delta",
            "requires": 3,
            "sourceIndex": 1
          }
        ],
        "unused": [
          "story-full",
          "story-delta"
        ]
      },
      {
        "system": "images",
        "target": 7,
        "status": "complete",
        "totalMB": 75,
        "chain": [
          {
            "step": 1,
            "id": "image-new-full",
            "from": null,
            "to": 6,
            "size": 60,
            "sourceIndex": 4
          },
          {
            "step": 2,
            "id": "image-new-delta",
            "from": 6,
            "to": 7,
            "size": 15,
            "sourceIndex": 5
          }
        ],
        "reachableVersions": [
          2,
          6,
          7
        ],
        "baseline": {
          "archive": "image-old-delta",
          "size": 50,
          "complete": false,
          "description": "Newest-file-only baseline selects greatest to ≤target; source-order ties. A delta alone is not a restore chain."
        },
        "missingBases": [],
        "unused": [
          "image-old-full",
          "image-old-delta"
        ]
      }
    ],
    "complete": 1,
    "totalSystems": 2,
    "totalMB": 75,
    "baselineComplete": 0,
    "scope": "Hypothetical metadata only: full snapshots and forward exact-base deltas. MB is the supplied integer transfer size, not measured restore time. No file validity, checksums, retention or engine compatibility verification."
  }
}

