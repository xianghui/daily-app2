# Synthetic lab purpose collision

Offline IPv4 worksheet, not firewall configuration or security certification. All addresses in each inclusive range count, including .0 and .255. No IPv6, ports, allow/deny precedence, routing or network/broadcast reservation assumptions. AI similarity is not authorization. Holds and cross-purpose overlaps withhold the entire plan.

## Reviewed IPv4 worksheet

EXACT COVER: 3 CIDRs / 14 distinct purpose-addresses.

SINGLE-SUBNET BASELINE: 0 extra addresses not requested.

Reconstructed CIDR intervals exactly equal the reviewed unions. No extra or missing addresses.

backup: 8 addresses
  10.10.0.0/29 [archive-a, archive-b]
  Broad baseline: 10.10.0.0/29 adds 0 addresses

sensor: 2 addresses
  10.10.0.8/31 [climate]
  Broad baseline: 10.10.0.8/31 adds 0 addresses

voice: 4 addresses
  10.20.0.0/30 [phone]
  Broad baseline: 10.20.0.0/30 adds 0 addresses

Computed manifest address counts, not time savings or model accuracy.

## Complete source-linked audit

{
  "schema": "address-quilt/1",
  "originalInput": {
    "title": "Synthetic lab purpose collision",
    "purposes": [
      {
        "id": "backup",
        "description": "Backup storage servers and data archives"
      },
      {
        "id": "sensor",
        "description": "Temperature and humidity environmental sensors"
      },
      {
        "id": "voice",
        "description": "Telephone handsets and voice call equipment"
      }
    ],
    "ranges": [
      {
        "id": "archive-a",
        "note": "Nightly data backup storage servers",
        "start": "10.10.0.0",
        "end": "10.10.0.7"
      },
      {
        "id": "climate",
        "note": "Environmental temperature humidity sensors",
        "start": "10.10.0.6",
        "end": "10.10.0.9"
      },
      {
        "id": "phone",
        "note": "Desk telephones for voice calls",
        "start": "10.20.0.0",
        "end": "10.20.0.3"
      },
      {
        "id": "archive-b",
        "note": "Data archive backup servers",
        "start": "10.10.0.4",
        "end": "10.10.0.5"
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "id": "archive-a",
      "purpose": "backup",
      "aiPurpose": "backup",
      "start": "10.10.0.0",
      "end": "10.10.0.7",
      "evidence": [
        {
          "purpose": "backup",
          "score": 0.8501388949271571
        },
        {
          "purpose": "sensor",
          "score": 0.09691273971515674
        },
        {
          "purpose": "voice",
          "score": 0.04938781267074237
        }
      ],
      "decision": "approve",
      "note": "=SUM(1,2)\nReviewed \"source\", preserved."
    },
    {
      "index": 1,
      "id": "climate",
      "purpose": "sensor",
      "aiPurpose": "sensor",
      "start": "10.10.0.8",
      "end": "10.10.0.9",
      "evidence": [
        {
          "purpose": "sensor",
          "score": 0.9684373421822992
        },
        {
          "purpose": "backup",
          "score": 0.1087288103429668
        },
        {
          "purpose": "voice",
          "score": 0.08169824215614417
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "id": "phone",
      "purpose": "voice",
      "aiPurpose": "voice",
      "start": "10.20.0.0",
      "end": "10.20.0.3",
      "evidence": [
        {
          "purpose": "voice",
          "score": 0.6813808808050922
        },
        {
          "purpose": "sensor",
          "score": 0.08218414106167309
        },
        {
          "purpose": "backup",
          "score": 0.018695575155082703
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "id": "archive-b",
      "purpose": "backup",
      "aiPurpose": "backup",
      "start": "10.10.0.4",
      "end": "10.10.0.5",
      "evidence": [
        {
          "purpose": "backup",
          "score": 0.9098106421576837
        },
        {
          "purpose": "sensor",
          "score": 0.08306482048507029
        },
        {
          "purpose": "voice",
          "score": 0.03637136750877252
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Offline IPv4 worksheet, not firewall configuration or security certification. All addresses in each inclusive range count, including .0 and .255. No IPv6, ports, allow/deny precedence, routing or network/broadcast reservation assumptions. AI similarity is not authorization. Holds and cross-purpose overlaps withhold the entire plan.",
  "analysis": {
    "status": "ready",
    "conflicts": [],
    "groups": [
      {
        "purpose": "backup",
        "intervals": [
          [
            168427520,
            168427527
          ]
        ],
        "addresses": 8,
        "cidrs": [
          {
            "cidr": "10.10.0.0/29",
            "start": "10.10.0.0",
            "end": "10.10.0.7",
            "addresses": 8,
            "sourceIds": [
              "archive-a",
              "archive-b"
            ]
          }
        ],
        "baseline": {
          "cidr": "10.10.0.0/29",
          "addresses": 8
        },
        "extraAddresses": 0
      },
      {
        "purpose": "sensor",
        "intervals": [
          [
            168427528,
            168427529
          ]
        ],
        "addresses": 2,
        "cidrs": [
          {
            "cidr": "10.10.0.8/31",
            "start": "10.10.0.8",
            "end": "10.10.0.9",
            "addresses": 2,
            "sourceIds": [
              "climate"
            ]
          }
        ],
        "baseline": {
          "cidr": "10.10.0.8/31",
          "addresses": 2
        },
        "extraAddresses": 0
      },
      {
        "purpose": "voice",
        "intervals": [
          [
            169082880,
            169082883
          ]
        ],
        "addresses": 4,
        "cidrs": [
          {
            "cidr": "10.20.0.0/30",
            "start": "10.20.0.0",
            "end": "10.20.0.3",
            "addresses": 4,
            "sourceIds": [
              "phone"
            ]
          }
        ],
        "baseline": {
          "cidr": "10.20.0.0/30",
          "addresses": 4
        },
        "extraAddresses": 0
      }
    ],
    "addresses": 14,
    "cidrCount": 3,
    "baselineExtraAddresses": 0,
    "coverageVerified": true
  }
}

