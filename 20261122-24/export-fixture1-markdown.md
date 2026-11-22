# Synthetic warehouse forwarding review

Neural similarity is not gateway identity. Review every next hop. A mismatch is a worksheet cue, not a network diagnosis. No configuration is changed.

## Reviewed routing audit

Hypothetical single-table IPv4 destination forwarding only: longest prefix, then lowest metric. Equal-rank different gateways are ambiguous; no ECMP simulation. No source routing, recursive next hops, policy tables, interface state or live reachability. Address counts include network/broadcast and all IPv4 space, not usable hosts.

FIRST-MATCH BASELINE: 3 / 3 probes mismatch expected next hop.

LONGEST-PREFIX + METRIC: 1 / 3 probes mismatch expected next hop. These are supplied test cases, not general accuracy.

FULLY SHADOWED ROUTES: old-aggregate

AMBIGUOUS ADDRESSES: 0 / UNCOVERED: 4294967040

PROBES
Stock scanner · 192.0.2.12 → stock via stock-half | expected stock | matches
Camera recorder · 192.0.2.180 → camera via camera-half | expected camera | matches
Uncovered target · 198.51.100.4 → uncovered via no route | expected legacy | RECHECK

ROUTE COVERAGE
old-aggregate 192.0.2.0/24 → legacy | wins 0 / 256 addresses; ambiguous 0
stock-half 192.0.2.0/25 → stock | wins 128 / 128 addresses; ambiguous 0
camera-half 192.0.2.128/25 → camera | wins 128 / 128 addresses; ambiguous 0

ADDRESS-SPACE PARTITION
0.0.0.0 – 192.0.1.255 | uncovered → — | 3221225984 addresses | 
192.0.2.0 – 192.0.2.127 | selected → stock | 128 addresses | stock-half
192.0.2.128 – 192.0.2.255 | selected → camera | 128 addresses | camera-half
192.0.3.0 – 255.255.255.255 | uncovered → — | 1073741056 addresses | 

## Complete original and review audit

{
  "schema": "prefix-harbor/1",
  "originalInput": {
    "title": "Synthetic warehouse forwarding review",
    "gateways": [
      {
        "id": "legacy",
        "description": "Retired legacy network router"
      },
      {
        "id": "stock",
        "description": "Warehouse inventory network gateway"
      },
      {
        "id": "camera",
        "description": "Security camera video network gateway"
      }
    ],
    "routes": [
      {
        "id": "old-aggregate",
        "cidr": "192.0.2.0/24",
        "metric": 5,
        "nextHop": "Old retired legacy router"
      },
      {
        "id": "stock-half",
        "cidr": "192.0.2.0/25",
        "metric": 9,
        "nextHop": "Warehouse stock inventory network"
      },
      {
        "id": "camera-half",
        "cidr": "192.0.2.128/25",
        "metric": 9,
        "nextHop": "Security cameras video network"
      }
    ],
    "probes": [
      {
        "id": "Stock scanner",
        "ip": "192.0.2.12",
        "expected": "stock"
      },
      {
        "id": "Camera recorder",
        "ip": "192.0.2.180",
        "expected": "camera"
      },
      {
        "id": "Uncovered target",
        "ip": "198.51.100.4",
        "expected": "legacy"
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Old retired legacy router",
      "resource": "legacy",
      "aiResource": "legacy",
      "evidence": [
        {
          "resource": "legacy",
          "score": 0.940883336887483
        },
        {
          "resource": "stock",
          "score": 0.25631499058666063
        },
        {
          "resource": "camera",
          "score": 0.24532028306728726
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "Warehouse stock inventory network",
      "resource": "stock",
      "aiResource": "stock",
      "evidence": [
        {
          "resource": "stock",
          "score": 0.8187119024925845
        },
        {
          "resource": "legacy",
          "score": 0.20001565739745886
        },
        {
          "resource": "camera",
          "score": 0.10396258997340573
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Security cameras video network",
      "resource": "camera",
      "aiResource": "camera",
      "evidence": [
        {
          "resource": "camera",
          "score": 0.8789678784428518
        },
        {
          "resource": "legacy",
          "score": 0.21357444661092598
        },
        {
          "resource": "stock",
          "score": 0.11508950709141026
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Neural similarity is not gateway identity. Review every next hop. A mismatch is a worksheet cue, not a network diagnosis. No configuration is changed.",
  "analysis": {
    "status": "ready",
    "segments": [
      {
        "start": "0.0.0.0",
        "end": "192.0.1.255",
        "addresses": 3221225984,
        "routeIds": [],
        "gateway": null,
        "status": "uncovered",
        "firstRoute": null,
        "firstGateway": null
      },
      {
        "start": "192.0.2.0",
        "end": "192.0.2.127",
        "addresses": 128,
        "routeIds": [
          "stock-half"
        ],
        "gateway": "stock",
        "status": "selected",
        "firstRoute": "old-aggregate",
        "firstGateway": "legacy"
      },
      {
        "start": "192.0.2.128",
        "end": "192.0.2.255",
        "addresses": 128,
        "routeIds": [
          "camera-half"
        ],
        "gateway": "camera",
        "status": "selected",
        "firstRoute": "old-aggregate",
        "firstGateway": "legacy"
      },
      {
        "start": "192.0.3.0",
        "end": "255.255.255.255",
        "addresses": 1073741056,
        "routeIds": [],
        "gateway": null,
        "status": "uncovered",
        "firstRoute": null,
        "firstGateway": null
      }
    ],
    "coverage": [
      {
        "id": "old-aggregate",
        "cidr": "192.0.2.0/24",
        "gateway": "legacy",
        "totalAddresses": 256,
        "winningAddresses": 0,
        "ambiguousAddresses": 0
      },
      {
        "id": "stock-half",
        "cidr": "192.0.2.0/25",
        "gateway": "stock",
        "totalAddresses": 128,
        "winningAddresses": 128,
        "ambiguousAddresses": 0
      },
      {
        "id": "camera-half",
        "cidr": "192.0.2.128/25",
        "gateway": "camera",
        "totalAddresses": 128,
        "winningAddresses": 128,
        "ambiguousAddresses": 0
      }
    ],
    "probes": [
      {
        "id": "Stock scanner",
        "ip": "192.0.2.12",
        "expected": "stock",
        "routeIds": [
          "stock-half"
        ],
        "gateway": "stock",
        "status": "selected",
        "firstRoute": "old-aggregate",
        "firstGateway": "legacy",
        "matchesExpected": true
      },
      {
        "id": "Camera recorder",
        "ip": "192.0.2.180",
        "expected": "camera",
        "routeIds": [
          "camera-half"
        ],
        "gateway": "camera",
        "status": "selected",
        "firstRoute": "old-aggregate",
        "firstGateway": "legacy",
        "matchesExpected": true
      },
      {
        "id": "Uncovered target",
        "ip": "198.51.100.4",
        "expected": "legacy",
        "routeIds": [],
        "gateway": null,
        "status": "uncovered",
        "firstRoute": null,
        "firstGateway": null,
        "matchesExpected": false
      }
    ],
    "baselineMismatches": 3,
    "reviewedMismatches": 1,
    "shadowed": [
      "old-aggregate"
    ],
    "uncoveredAddresses": 4294967040,
    "ambiguousAddresses": 0,
    "differentFromFirstMatch": 256,
    "scope": "Hypothetical single-table IPv4 destination forwarding only: longest prefix, then lowest metric. Equal-rank different gateways are ambiguous; no ECMP simulation. No source routing, recursive next hops, policy tables, interface state or live reachability. Address counts include network/broadcast and all IPv4 space, not usable hosts."
  }
}

