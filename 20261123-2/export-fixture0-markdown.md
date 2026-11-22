# Synthetic office handoff

Neural similarity is not path identity. Verify MTUs and source values. No probes, packets or configuration changes are performed.

## Reviewed fragment worksheet

Single-hop initially unfragmented IPv4 datagrams with fixed 20-byte headers; supplied effective MTUs only. No IPv6, options, downstream refragmentation, link-layer overhead, loss, TCP segmentation or live path discovery. DF blocks oversized datagrams. Fragment templates repeat count times; output bytes mean IPv4 bytes, not physical wire traffic.

DELIVERABLE GROUPS: unaligned baseline 12 packets; actual aligned 15 packets. 1 group(s) understated.

BYTE ACCOUNTING: 16874 delivered + 1000 DF-blocked = 17874 original payload bytes. 200 extra IPv4 header bytes beyond one per delivered datagram.

FRAGMENT TEMPLATES (repeat each group quantity times)
desk-copy → office | MTU 1500 | quantity 2 | #0 offset 0 bytes (0 units) · payload 1480 · total 1500 · MF true
#1 offset 1480 bytes (185 units) · payload 1480 · total 1500 · MF true
#2 offset 2960 bytes (370 units) · payload 1040 · total 1060 · MF false

remote-sync → vpn | MTU 1499 | quantity 3 | #0 offset 0 bytes (0 units) · payload 1472 · total 1492 · MF true
#1 offset 1472 bytes (184 units) · payload 1472 · total 1492 · MF true
#2 offset 2944 bytes (368 units) · payload 14 · total 34 · MF false

meter → sensor | MTU 100 | quantity 5 | DF BLOCKED; payload 200 bytes/item not transmitted

## Complete original and review audit

{
  "schema": "fragment-desk/1",
  "originalInput": {
    "title": "Synthetic office handoff",
    "paths": [
      {
        "id": "office",
        "description": "Office ethernet local area network",
        "mtu": 1500
      },
      {
        "id": "vpn",
        "description": "Remote worker VPN encrypted tunnel",
        "mtu": 1499
      },
      {
        "id": "sensor",
        "description": "Low bandwidth telemetry sensor radio link",
        "mtu": 100
      }
    ],
    "records": [
      {
        "id": "desk-copy",
        "pathNote": "Office local ethernet network",
        "payloadBytes": 4000,
        "count": 2,
        "dontFragment": false
      },
      {
        "id": "remote-sync",
        "pathNote": "Remote workers encrypted VPN tunnel",
        "payloadBytes": 2958,
        "count": 3,
        "dontFragment": false
      },
      {
        "id": "meter",
        "pathNote": "Telemetry sensors over radio",
        "payloadBytes": 200,
        "count": 5,
        "dontFragment": true
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Office local ethernet network",
      "resource": "office",
      "aiResource": "office",
      "evidence": [
        {
          "resource": "office",
          "score": 0.9602740487935187
        },
        {
          "resource": "vpn",
          "score": 0.16206389990804201
        },
        {
          "resource": "sensor",
          "score": 0.1288735838445122
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "Remote workers encrypted VPN tunnel",
      "resource": "vpn",
      "aiResource": "vpn",
      "evidence": [
        {
          "resource": "vpn",
          "score": 0.9708628701808042
        },
        {
          "resource": "sensor",
          "score": 0.15548668372023475
        },
        {
          "resource": "office",
          "score": 0.14804767689390508
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Telemetry sensors over radio",
      "resource": "sensor",
      "aiResource": "sensor",
      "evidence": [
        {
          "resource": "sensor",
          "score": 0.6547482277247113
        },
        {
          "resource": "vpn",
          "score": 0.09646706616653829
        },
        {
          "resource": "office",
          "score": 0.021384401017288737
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Neural similarity is not path identity. Verify MTUs and source values. No probes, packets or configuration changes are performed.",
  "analysis": {
    "status": "ready",
    "records": [
      {
        "id": "desk-copy",
        "path": "office",
        "mtu": 1500,
        "payloadBytes": 4000,
        "count": 2,
        "dontFragment": false,
        "blocked": false,
        "baselinePacketsPerDatagram": 3,
        "actualPacketsPerDatagram": 3,
        "wireBytesPerDatagram": 4060,
        "extraHeaderBytesPerDatagram": 40,
        "fragments": [
          {
            "index": 0,
            "offsetBytes": 0,
            "offsetUnits": 0,
            "payloadBytes": 1480,
            "totalBytes": 1500,
            "moreFragments": true
          },
          {
            "index": 1,
            "offsetBytes": 1480,
            "offsetUnits": 185,
            "payloadBytes": 1480,
            "totalBytes": 1500,
            "moreFragments": true
          },
          {
            "index": 2,
            "offsetBytes": 2960,
            "offsetUnits": 370,
            "payloadBytes": 1040,
            "totalBytes": 1060,
            "moreFragments": false
          }
        ]
      },
      {
        "id": "remote-sync",
        "path": "vpn",
        "mtu": 1499,
        "payloadBytes": 2958,
        "count": 3,
        "dontFragment": false,
        "blocked": false,
        "baselinePacketsPerDatagram": 2,
        "actualPacketsPerDatagram": 3,
        "wireBytesPerDatagram": 3018,
        "extraHeaderBytesPerDatagram": 40,
        "fragments": [
          {
            "index": 0,
            "offsetBytes": 0,
            "offsetUnits": 0,
            "payloadBytes": 1472,
            "totalBytes": 1492,
            "moreFragments": true
          },
          {
            "index": 1,
            "offsetBytes": 1472,
            "offsetUnits": 184,
            "payloadBytes": 1472,
            "totalBytes": 1492,
            "moreFragments": true
          },
          {
            "index": 2,
            "offsetBytes": 2944,
            "offsetUnits": 368,
            "payloadBytes": 14,
            "totalBytes": 34,
            "moreFragments": false
          }
        ]
      },
      {
        "id": "meter",
        "path": "sensor",
        "mtu": 100,
        "payloadBytes": 200,
        "count": 5,
        "dontFragment": true,
        "blocked": true,
        "baselinePacketsPerDatagram": 0,
        "actualPacketsPerDatagram": 0,
        "wireBytesPerDatagram": 0,
        "extraHeaderBytesPerDatagram": 0,
        "fragments": []
      }
    ],
    "baselinePackets": 12,
    "actualPackets": 15,
    "blockedDatagrams": 5,
    "deliveredPayloadBytes": 16874,
    "blockedPayloadBytes": 1000,
    "inputPayloadBytes": 17874,
    "wireBytes": 17174,
    "extraHeaderBytes": 200,
    "underCountGroups": 1,
    "scope": "Single-hop initially unfragmented IPv4 datagrams with fixed 20-byte headers; supplied effective MTUs only. No IPv6, options, downstream refragmentation, link-layer overhead, loss, TCP segmentation or live path discovery. DF blocks oversized datagrams. Fragment templates repeat count times; output bytes mean IPv4 bytes, not physical wire traffic."
  }
}

