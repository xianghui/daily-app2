# Synthetic office forwarding review

Neural similarity is not gateway identity. Review every next hop. A mismatch is a worksheet cue, not a network diagnosis. No configuration is changed.

## Reviewed routing audit

Hypothetical single-table IPv4 destination forwarding only: longest prefix, then lowest metric. Equal-rank different gateways are ambiguous; no ECMP simulation. No source routing, recursive next hops, policy tables, interface state or live reachability. Address counts include network/broadcast and all IPv4 space, not usable hosts.

FIRST-MATCH BASELINE: 2 / 3 probes mismatch expected next hop.

LONGEST-PREFIX + METRIC: 0 / 3 probes mismatch expected next hop. These are supplied test cases, not general accuracy.

FULLY SHADOWED ROUTES: None

AMBIGUOUS ADDRESSES: 0 / UNCOVERED: 0

PROBES
Lab workstation · 10.2.5.8 → lab via research | expected lab | matches
Staff laptop · 10.9.0.1 → office via staff | expected office | matches
External resolver · 203.0.113.8 → wan via default | expected wan | matches

ROUTE COVERAGE
default 0.0.0.0/0 → wan | wins 4278190080 / 4294967296 addresses; ambiguous 0
staff 10.0.0.0/8 → office | wins 16711680 / 16777216 addresses; ambiguous 0
research 10.2.0.0/16 → lab | wins 65536 / 65536 addresses; ambiguous 0

ADDRESS-SPACE PARTITION
0.0.0.0 – 9.255.255.255 | selected → wan | 167772160 addresses | default
10.0.0.0 – 10.1.255.255 | selected → office | 131072 addresses | staff
10.2.0.0 – 10.2.255.255 | selected → lab | 65536 addresses | research
10.3.0.0 – 10.255.255.255 | selected → office | 16580608 addresses | staff
11.0.0.0 – 255.255.255.255 | selected → wan | 4110417920 addresses | default

## Complete original and review audit

{
  "schema": "prefix-harbor/1",
  "originalInput": {
    "title": "Synthetic office forwarding review",
    "gateways": [
      {
        "id": "wan",
        "description": "Public internet upstream router"
      },
      {
        "id": "office",
        "description": "Internal employee office network gateway"
      },
      {
        "id": "lab",
        "description": "Isolated research laboratory gateway"
      }
    ],
    "routes": [
      {
        "id": "default",
        "cidr": "0.0.0.0/0",
        "metric": 100,
        "nextHop": "Public internet connection"
      },
      {
        "id": "staff",
        "cidr": "10.0.0.0/8",
        "metric": 10,
        "nextHop": "Employee office internal network"
      },
      {
        "id": "research",
        "cidr": "10.2.0.0/16",
        "metric": 20,
        "nextHop": "Research laboratory isolated network"
      }
    ],
    "probes": [
      {
        "id": "Lab workstation",
        "ip": "10.2.5.8",
        "expected": "lab"
      },
      {
        "id": "Staff laptop",
        "ip": "10.9.0.1",
        "expected": "office"
      },
      {
        "id": "External resolver",
        "ip": "203.0.113.8",
        "expected": "wan"
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Public internet connection",
      "resource": "wan",
      "aiResource": "wan",
      "evidence": [
        {
          "resource": "wan",
          "score": 0.6782582778191101
        },
        {
          "resource": "office",
          "score": 0.43981612923002356
        },
        {
          "resource": "lab",
          "score": 0.4391495093159794
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "Employee office internal network",
      "resource": "office",
      "aiResource": "office",
      "evidence": [
        {
          "resource": "office",
          "score": 0.8706177096955884
        },
        {
          "resource": "wan",
          "score": 0.34432041930621415
        },
        {
          "resource": "lab",
          "score": 0.3077496563628004
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Research laboratory isolated network",
      "resource": "lab",
      "aiResource": "lab",
      "evidence": [
        {
          "resource": "lab",
          "score": 0.8226653261372575
        },
        {
          "resource": "office",
          "score": 0.37616736249775795
        },
        {
          "resource": "wan",
          "score": 0.3169573368564086
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
        "end": "9.255.255.255",
        "addresses": 167772160,
        "routeIds": [
          "default"
        ],
        "gateway": "wan",
        "status": "selected",
        "firstRoute": "default",
        "firstGateway": "wan"
      },
      {
        "start": "10.0.0.0",
        "end": "10.1.255.255",
        "addresses": 131072,
        "routeIds": [
          "staff"
        ],
        "gateway": "office",
        "status": "selected",
        "firstRoute": "default",
        "firstGateway": "wan"
      },
      {
        "start": "10.2.0.0",
        "end": "10.2.255.255",
        "addresses": 65536,
        "routeIds": [
          "research"
        ],
        "gateway": "lab",
        "status": "selected",
        "firstRoute": "default",
        "firstGateway": "wan"
      },
      {
        "start": "10.3.0.0",
        "end": "10.255.255.255",
        "addresses": 16580608,
        "routeIds": [
          "staff"
        ],
        "gateway": "office",
        "status": "selected",
        "firstRoute": "default",
        "firstGateway": "wan"
      },
      {
        "start": "11.0.0.0",
        "end": "255.255.255.255",
        "addresses": 4110417920,
        "routeIds": [
          "default"
        ],
        "gateway": "wan",
        "status": "selected",
        "firstRoute": "default",
        "firstGateway": "wan"
      }
    ],
    "coverage": [
      {
        "id": "default",
        "cidr": "0.0.0.0/0",
        "gateway": "wan",
        "totalAddresses": 4294967296,
        "winningAddresses": 4278190080,
        "ambiguousAddresses": 0
      },
      {
        "id": "staff",
        "cidr": "10.0.0.0/8",
        "gateway": "office",
        "totalAddresses": 16777216,
        "winningAddresses": 16711680,
        "ambiguousAddresses": 0
      },
      {
        "id": "research",
        "cidr": "10.2.0.0/16",
        "gateway": "lab",
        "totalAddresses": 65536,
        "winningAddresses": 65536,
        "ambiguousAddresses": 0
      }
    ],
    "probes": [
      {
        "id": "Lab workstation",
        "ip": "10.2.5.8",
        "expected": "lab",
        "routeIds": [
          "research"
        ],
        "gateway": "lab",
        "status": "selected",
        "firstRoute": "default",
        "firstGateway": "wan",
        "matchesExpected": true
      },
      {
        "id": "Staff laptop",
        "ip": "10.9.0.1",
        "expected": "office",
        "routeIds": [
          "staff"
        ],
        "gateway": "office",
        "status": "selected",
        "firstRoute": "default",
        "firstGateway": "wan",
        "matchesExpected": true
      },
      {
        "id": "External resolver",
        "ip": "203.0.113.8",
        "expected": "wan",
        "routeIds": [
          "default"
        ],
        "gateway": "wan",
        "status": "selected",
        "firstRoute": "default",
        "firstGateway": "wan",
        "matchesExpected": true
      }
    ],
    "baselineMismatches": 2,
    "reviewedMismatches": 0,
    "shadowed": [],
    "uncoveredAddresses": 0,
    "ambiguousAddresses": 0,
    "differentFromFirstMatch": 16777216,
    "scope": "Hypothetical single-table IPv4 destination forwarding only: longest prefix, then lowest metric. Equal-rank different gateways are ambiguous; no ECMP simulation. No source routing, recursive next hops, policy tables, interface state or live reachability. Address counts include network/broadcast and all IPv4 space, not usable hosts."
  }
}

