# Synthetic field-transfer review

Neural similarity is not path identity. Verify MTUs and source values. No probes, packets or configuration changes are performed.

## Reviewed fragment worksheet

Single-hop initially unfragmented IPv4 datagrams with fixed 20-byte headers; supplied effective MTUs only. No IPv6, options, downstream refragmentation, link-layer overhead, loss, TCP segmentation or live path discovery. DF blocks oversized datagrams. Fragment templates repeat count times; output bytes mean IPv4 bytes, not physical wire traffic.

DELIVERABLE GROUPS: unaligned baseline 25 packets; actual aligned 25 packets. 0 group(s) understated.

BYTE ACCOUNTING: 49464 delivered + 0 DF-blocked = 49464 original payload bytes. 240 extra IPv4 header bytes beyond one per delivered datagram.

FRAGMENT TEMPLATES (repeat each group quantity times)
field-burst → sat | MTU 100 | quantity 4 | #0 offset 0 bytes (0 units) · payload 80 · total 100 · MF true
#1 offset 80 bytes (10 units) · payload 80 · total 100 · MF true
#2 offset 160 bytes (20 units) · payload 1 · total 21 · MF false

rack-backup → fiber | MTU 9000 | quantity 2 | #0 offset 0 bytes (0 units) · payload 8976 · total 8996 · MF true
#1 offset 8976 bytes (1122 units) · payload 8976 · total 8996 · MF true
#2 offset 17952 bytes (2244 units) · payload 2048 · total 2068 · MF false

phone-report → mobile | MTU 1280 | quantity 7 | #0 offset 0 bytes (0 units) · payload 1260 · total 1280 · MF false

## Complete original and review audit

{
  "schema": "fragment-desk/1",
  "originalInput": {
    "title": "Synthetic field-transfer review",
    "paths": [
      {
        "id": "sat",
        "description": "Satellite uplink remote field station",
        "mtu": 100
      },
      {
        "id": "fiber",
        "description": "Data center fiber jumbo frame network",
        "mtu": 9000
      },
      {
        "id": "mobile",
        "description": "Cellular mobile phone hotspot network",
        "mtu": 1280
      }
    ],
    "records": [
      {
        "id": "field-burst",
        "pathNote": "Remote field station satellite uplink",
        "payloadBytes": 161,
        "count": 4,
        "dontFragment": false
      },
      {
        "id": "rack-backup",
        "pathNote": "Data center fiber jumbo frames",
        "payloadBytes": 20000,
        "count": 2,
        "dontFragment": false
      },
      {
        "id": "phone-report",
        "pathNote": "Mobile cellular phone hotspot",
        "payloadBytes": 1260,
        "count": 7,
        "dontFragment": true
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Remote field station satellite uplink",
      "resource": "sat",
      "aiResource": "sat",
      "evidence": [
        {
          "resource": "sat",
          "score": 0.9689452121777682
        },
        {
          "resource": "fiber",
          "score": 0.2800006704795322
        },
        {
          "resource": "mobile",
          "score": 0.25210539242298274
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "Data center fiber jumbo frames",
      "resource": "fiber",
      "aiResource": "fiber",
      "evidence": [
        {
          "resource": "fiber",
          "score": 0.8957677016941816
        },
        {
          "resource": "sat",
          "score": 0.22506697899391376
        },
        {
          "resource": "mobile",
          "score": 0.1243649412576505
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Mobile cellular phone hotspot",
      "resource": "mobile",
      "aiResource": "mobile",
      "evidence": [
        {
          "resource": "mobile",
          "score": 0.9483852231021772
        },
        {
          "resource": "sat",
          "score": 0.2642493823160235
        },
        {
          "resource": "fiber",
          "score": 0.13147474728641628
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
        "id": "field-burst",
        "path": "sat",
        "mtu": 100,
        "payloadBytes": 161,
        "count": 4,
        "dontFragment": false,
        "blocked": false,
        "baselinePacketsPerDatagram": 3,
        "actualPacketsPerDatagram": 3,
        "wireBytesPerDatagram": 221,
        "extraHeaderBytesPerDatagram": 40,
        "fragments": [
          {
            "index": 0,
            "offsetBytes": 0,
            "offsetUnits": 0,
            "payloadBytes": 80,
            "totalBytes": 100,
            "moreFragments": true
          },
          {
            "index": 1,
            "offsetBytes": 80,
            "offsetUnits": 10,
            "payloadBytes": 80,
            "totalBytes": 100,
            "moreFragments": true
          },
          {
            "index": 2,
            "offsetBytes": 160,
            "offsetUnits": 20,
            "payloadBytes": 1,
            "totalBytes": 21,
            "moreFragments": false
          }
        ]
      },
      {
        "id": "rack-backup",
        "path": "fiber",
        "mtu": 9000,
        "payloadBytes": 20000,
        "count": 2,
        "dontFragment": false,
        "blocked": false,
        "baselinePacketsPerDatagram": 3,
        "actualPacketsPerDatagram": 3,
        "wireBytesPerDatagram": 20060,
        "extraHeaderBytesPerDatagram": 40,
        "fragments": [
          {
            "index": 0,
            "offsetBytes": 0,
            "offsetUnits": 0,
            "payloadBytes": 8976,
            "totalBytes": 8996,
            "moreFragments": true
          },
          {
            "index": 1,
            "offsetBytes": 8976,
            "offsetUnits": 1122,
            "payloadBytes": 8976,
            "totalBytes": 8996,
            "moreFragments": true
          },
          {
            "index": 2,
            "offsetBytes": 17952,
            "offsetUnits": 2244,
            "payloadBytes": 2048,
            "totalBytes": 2068,
            "moreFragments": false
          }
        ]
      },
      {
        "id": "phone-report",
        "path": "mobile",
        "mtu": 1280,
        "payloadBytes": 1260,
        "count": 7,
        "dontFragment": true,
        "blocked": false,
        "baselinePacketsPerDatagram": 1,
        "actualPacketsPerDatagram": 1,
        "wireBytesPerDatagram": 1280,
        "extraHeaderBytesPerDatagram": 0,
        "fragments": [
          {
            "index": 0,
            "offsetBytes": 0,
            "offsetUnits": 0,
            "payloadBytes": 1260,
            "totalBytes": 1280,
            "moreFragments": false
          }
        ]
      }
    ],
    "baselinePackets": 25,
    "actualPackets": 25,
    "blockedDatagrams": 0,
    "deliveredPayloadBytes": 49464,
    "blockedPayloadBytes": 0,
    "inputPayloadBytes": 49464,
    "wireBytes": 49964,
    "extraHeaderBytes": 240,
    "underCountGroups": 0,
    "scope": "Single-hop initially unfragmented IPv4 datagrams with fixed 20-byte headers; supplied effective MTUs only. No IPv6, options, downstream refragmentation, link-layer overhead, loss, TCP segmentation or live path discovery. DF blocks oversized datagrams. Fragment templates repeat count times; output bytes mean IPv4 bytes, not physical wire traffic."
  }
}

