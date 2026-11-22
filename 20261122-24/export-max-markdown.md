# Maximum route worksheet

Neural similarity is not gateway identity. Review every next hop. A mismatch is a worksheet cue, not a network diagnosis. No configuration is changed.

## Reviewed routing audit

Hypothetical single-table IPv4 destination forwarding only: longest prefix, then lowest metric. Equal-rank different gateways are ambiguous; no ECMP simulation. No source routing, recursive next hops, policy tables, interface state or live reachability. Address counts include network/broadcast and all IPv4 space, not usable hosts.

FIRST-MATCH BASELINE: 0 / 32 probes mismatch expected next hop.

LONGEST-PREFIX + METRIC: 0 / 32 probes mismatch expected next hop. These are supplied test cases, not general accuracy.

FULLY SHADOWED ROUTES: None

AMBIGUOUS ADDRESSES: 0 / UNCOVERED: 4294967264

PROBES
p0 · 10.0.0.0 → g0 via =route
"0" | expected g0 | matches
p1 · 10.0.0.1 → g1 via =route
"1" | expected g1 | matches
p2 · 10.0.0.2 → g2 via =route
"2" | expected g2 | matches
p3 · 10.0.0.3 → g3 via =route
"3" | expected g3 | matches
p4 · 10.0.0.4 → g4 via =route
"4" | expected g4 | matches
p5 · 10.0.0.5 → g5 via =route
"5" | expected g5 | matches
p6 · 10.0.0.6 → g6 via =route
"6" | expected g6 | matches
p7 · 10.0.0.7 → g7 via =route
"7" | expected g7 | matches
p8 · 10.0.0.8 → g0 via =route
"8" | expected g0 | matches
p9 · 10.0.0.9 → g1 via =route
"9" | expected g1 | matches
p10 · 10.0.0.10 → g2 via =route
"10" | expected g2 | matches
p11 · 10.0.0.11 → g3 via =route
"11" | expected g3 | matches
p12 · 10.0.0.12 → g4 via =route
"12" | expected g4 | matches
p13 · 10.0.0.13 → g5 via =route
"13" | expected g5 | matches
p14 · 10.0.0.14 → g6 via =route
"14" | expected g6 | matches
p15 · 10.0.0.15 → g7 via =route
"15" | expected g7 | matches
p16 · 10.0.0.16 → g0 via =route
"16" | expected g0 | matches
p17 · 10.0.0.17 → g1 via =route
"17" | expected g1 | matches
p18 · 10.0.0.18 → g2 via =route
"18" | expected g2 | matches
p19 · 10.0.0.19 → g3 via =route
"19" | expected g3 | matches
p20 · 10.0.0.20 → g4 via =route
"20" | expected g4 | matches
p21 · 10.0.0.21 → g5 via =route
"21" | expected g5 | matches
p22 · 10.0.0.22 → g6 via =route
"22" | expected g6 | matches
p23 · 10.0.0.23 → g7 via =route
"23" | expected g7 | matches
p24 · 10.0.0.24 → g0 via =route
"24" | expected g0 | matches
p25 · 10.0.0.25 → g1 via =route
"25" | expected g1 | matches
p26 · 10.0.0.26 → g2 via =route
"26" | expected g2 | matches
p27 · 10.0.0.27 → g3 via =route
"27" | expected g3 | matches
p28 · 10.0.0.28 → g4 via =route
"28" | expected g4 | matches
p29 · 10.0.0.29 → g5 via =route
"29" | expected g5 | matches
p30 · 10.0.0.30 → g6 via =route
"30" | expected g6 | matches
p31 · 10.0.0.31 → g7 via =route
"31" | expected g7 | matches

ROUTE COVERAGE
=route
"0" 10.0.0.0/32 → g0 | wins 1 / 1 addresses; ambiguous 0
=route
"1" 10.0.0.1/32 → g1 | wins 1 / 1 addresses; ambiguous 0
=route
"2" 10.0.0.2/32 → g2 | wins 1 / 1 addresses; ambiguous 0
=route
"3" 10.0.0.3/32 → g3 | wins 1 / 1 addresses; ambiguous 0
=route
"4" 10.0.0.4/32 → g4 | wins 1 / 1 addresses; ambiguous 0
=route
"5" 10.0.0.5/32 → g5 | wins 1 / 1 addresses; ambiguous 0
=route
"6" 10.0.0.6/32 → g6 | wins 1 / 1 addresses; ambiguous 0
=route
"7" 10.0.0.7/32 → g7 | wins 1 / 1 addresses; ambiguous 0
=route
"8" 10.0.0.8/32 → g0 | wins 1 / 1 addresses; ambiguous 0
=route
"9" 10.0.0.9/32 → g1 | wins 1 / 1 addresses; ambiguous 0
=route
"10" 10.0.0.10/32 → g2 | wins 1 / 1 addresses; ambiguous 0
=route
"11" 10.0.0.11/32 → g3 | wins 1 / 1 addresses; ambiguous 0
=route
"12" 10.0.0.12/32 → g4 | wins 1 / 1 addresses; ambiguous 0
=route
"13" 10.0.0.13/32 → g5 | wins 1 / 1 addresses; ambiguous 0
=route
"14" 10.0.0.14/32 → g6 | wins 1 / 1 addresses; ambiguous 0
=route
"15" 10.0.0.15/32 → g7 | wins 1 / 1 addresses; ambiguous 0
=route
"16" 10.0.0.16/32 → g0 | wins 1 / 1 addresses; ambiguous 0
=route
"17" 10.0.0.17/32 → g1 | wins 1 / 1 addresses; ambiguous 0
=route
"18" 10.0.0.18/32 → g2 | wins 1 / 1 addresses; ambiguous 0
=route
"19" 10.0.0.19/32 → g3 | wins 1 / 1 addresses; ambiguous 0
=route
"20" 10.0.0.20/32 → g4 | wins 1 / 1 addresses; ambiguous 0
=route
"21" 10.0.0.21/32 → g5 | wins 1 / 1 addresses; ambiguous 0
=route
"22" 10.0.0.22/32 → g6 | wins 1 / 1 addresses; ambiguous 0
=route
"23" 10.0.0.23/32 → g7 | wins 1 / 1 addresses; ambiguous 0
=route
"24" 10.0.0.24/32 → g0 | wins 1 / 1 addresses; ambiguous 0
=route
"25" 10.0.0.25/32 → g1 | wins 1 / 1 addresses; ambiguous 0
=route
"26" 10.0.0.26/32 → g2 | wins 1 / 1 addresses; ambiguous 0
=route
"27" 10.0.0.27/32 → g3 | wins 1 / 1 addresses; ambiguous 0
=route
"28" 10.0.0.28/32 → g4 | wins 1 / 1 addresses; ambiguous 0
=route
"29" 10.0.0.29/32 → g5 | wins 1 / 1 addresses; ambiguous 0
=route
"30" 10.0.0.30/32 → g6 | wins 1 / 1 addresses; ambiguous 0
=route
"31" 10.0.0.31/32 → g7 | wins 1 / 1 addresses; ambiguous 0

ADDRESS-SPACE PARTITION
0.0.0.0 – 9.255.255.255 | uncovered → — | 167772160 addresses | 
10.0.0.0 – 10.0.0.0 | selected → g0 | 1 addresses | =route
"0"
10.0.0.1 – 10.0.0.1 | selected → g1 | 1 addresses | =route
"1"
10.0.0.2 – 10.0.0.2 | selected → g2 | 1 addresses | =route
"2"
10.0.0.3 – 10.0.0.3 | selected → g3 | 1 addresses | =route
"3"
10.0.0.4 – 10.0.0.4 | selected → g4 | 1 addresses | =route
"4"
10.0.0.5 – 10.0.0.5 | selected → g5 | 1 addresses | =route
"5"
10.0.0.6 – 10.0.0.6 | selected → g6 | 1 addresses | =route
"6"
10.0.0.7 – 10.0.0.7 | selected → g7 | 1 addresses | =route
"7"
10.0.0.8 – 10.0.0.8 | selected → g0 | 1 addresses | =route
"8"
10.0.0.9 – 10.0.0.9 | selected → g1 | 1 addresses | =route
"9"
10.0.0.10 – 10.0.0.10 | selected → g2 | 1 addresses | =route
"10"
10.0.0.11 – 10.0.0.11 | selected → g3 | 1 addresses | =route
"11"
10.0.0.12 – 10.0.0.12 | selected → g4 | 1 addresses | =route
"12"
10.0.0.13 – 10.0.0.13 | selected → g5 | 1 addresses | =route
"13"
10.0.0.14 – 10.0.0.14 | selected → g6 | 1 addresses | =route
"14"
10.0.0.15 – 10.0.0.15 | selected → g7 | 1 addresses | =route
"15"
10.0.0.16 – 10.0.0.16 | selected → g0 | 1 addresses | =route
"16"
10.0.0.17 – 10.0.0.17 | selected → g1 | 1 addresses | =route
"17"
10.0.0.18 – 10.0.0.18 | selected → g2 | 1 addresses | =route
"18"
10.0.0.19 – 10.0.0.19 | selected → g3 | 1 addresses | =route
"19"
10.0.0.20 – 10.0.0.20 | selected → g4 | 1 addresses | =route
"20"
10.0.0.21 – 10.0.0.21 | selected → g5 | 1 addresses | =route
"21"
10.0.0.22 – 10.0.0.22 | selected → g6 | 1 addresses | =route
"22"
10.0.0.23 – 10.0.0.23 | selected → g7 | 1 addresses | =route
"23"
10.0.0.24 – 10.0.0.24 | selected → g0 | 1 addresses | =route
"24"
10.0.0.25 – 10.0.0.25 | selected → g1 | 1 addresses | =route
"25"
10.0.0.26 – 10.0.0.26 | selected → g2 | 1 addresses | =route
"26"
10.0.0.27 – 10.0.0.27 | selected → g3 | 1 addresses | =route
"27"
10.0.0.28 – 10.0.0.28 | selected → g4 | 1 addresses | =route
"28"
10.0.0.29 – 10.0.0.29 | selected → g5 | 1 addresses | =route
"29"
10.0.0.30 – 10.0.0.30 | selected → g6 | 1 addresses | =route
"30"
10.0.0.31 – 10.0.0.31 | selected → g7 | 1 addresses | =route
"31"
10.0.0.32 – 255.255.255.255 | uncovered → — | 4127195104 addresses | 

## Complete original and review audit

{
  "schema": "prefix-harbor/1",
  "originalInput": {
    "title": "Maximum route worksheet",
    "gateways": [
      {
        "id": "g0",
        "description": "Synthetic gateway 0"
      },
      {
        "id": "g1",
        "description": "Synthetic gateway 1"
      },
      {
        "id": "g2",
        "description": "Synthetic gateway 2"
      },
      {
        "id": "g3",
        "description": "Synthetic gateway 3"
      },
      {
        "id": "g4",
        "description": "Synthetic gateway 4"
      },
      {
        "id": "g5",
        "description": "Synthetic gateway 5"
      },
      {
        "id": "g6",
        "description": "Synthetic gateway 6"
      },
      {
        "id": "g7",
        "description": "Synthetic gateway 7"
      }
    ],
    "routes": [
      {
        "id": "=route\n\"0\"",
        "cidr": "10.0.0.0/32",
        "metric": 0,
        "nextHop": "Synthetic gateway 0"
      },
      {
        "id": "=route\n\"1\"",
        "cidr": "10.0.0.1/32",
        "metric": 1,
        "nextHop": "Synthetic gateway 1"
      },
      {
        "id": "=route\n\"2\"",
        "cidr": "10.0.0.2/32",
        "metric": 2,
        "nextHop": "Synthetic gateway 2"
      },
      {
        "id": "=route\n\"3\"",
        "cidr": "10.0.0.3/32",
        "metric": 3,
        "nextHop": "Synthetic gateway 3"
      },
      {
        "id": "=route\n\"4\"",
        "cidr": "10.0.0.4/32",
        "metric": 4,
        "nextHop": "Synthetic gateway 4"
      },
      {
        "id": "=route\n\"5\"",
        "cidr": "10.0.0.5/32",
        "metric": 5,
        "nextHop": "Synthetic gateway 5"
      },
      {
        "id": "=route\n\"6\"",
        "cidr": "10.0.0.6/32",
        "metric": 6,
        "nextHop": "Synthetic gateway 6"
      },
      {
        "id": "=route\n\"7\"",
        "cidr": "10.0.0.7/32",
        "metric": 7,
        "nextHop": "Synthetic gateway 7"
      },
      {
        "id": "=route\n\"8\"",
        "cidr": "10.0.0.8/32",
        "metric": 8,
        "nextHop": "Synthetic gateway 0"
      },
      {
        "id": "=route\n\"9\"",
        "cidr": "10.0.0.9/32",
        "metric": 9,
        "nextHop": "Synthetic gateway 1"
      },
      {
        "id": "=route\n\"10\"",
        "cidr": "10.0.0.10/32",
        "metric": 10,
        "nextHop": "Synthetic gateway 2"
      },
      {
        "id": "=route\n\"11\"",
        "cidr": "10.0.0.11/32",
        "metric": 11,
        "nextHop": "Synthetic gateway 3"
      },
      {
        "id": "=route\n\"12\"",
        "cidr": "10.0.0.12/32",
        "metric": 12,
        "nextHop": "Synthetic gateway 4"
      },
      {
        "id": "=route\n\"13\"",
        "cidr": "10.0.0.13/32",
        "metric": 13,
        "nextHop": "Synthetic gateway 5"
      },
      {
        "id": "=route\n\"14\"",
        "cidr": "10.0.0.14/32",
        "metric": 14,
        "nextHop": "Synthetic gateway 6"
      },
      {
        "id": "=route\n\"15\"",
        "cidr": "10.0.0.15/32",
        "metric": 15,
        "nextHop": "Synthetic gateway 7"
      },
      {
        "id": "=route\n\"16\"",
        "cidr": "10.0.0.16/32",
        "metric": 16,
        "nextHop": "Synthetic gateway 0"
      },
      {
        "id": "=route\n\"17\"",
        "cidr": "10.0.0.17/32",
        "metric": 17,
        "nextHop": "Synthetic gateway 1"
      },
      {
        "id": "=route\n\"18\"",
        "cidr": "10.0.0.18/32",
        "metric": 18,
        "nextHop": "Synthetic gateway 2"
      },
      {
        "id": "=route\n\"19\"",
        "cidr": "10.0.0.19/32",
        "metric": 19,
        "nextHop": "Synthetic gateway 3"
      },
      {
        "id": "=route\n\"20\"",
        "cidr": "10.0.0.20/32",
        "metric": 20,
        "nextHop": "Synthetic gateway 4"
      },
      {
        "id": "=route\n\"21\"",
        "cidr": "10.0.0.21/32",
        "metric": 21,
        "nextHop": "Synthetic gateway 5"
      },
      {
        "id": "=route\n\"22\"",
        "cidr": "10.0.0.22/32",
        "metric": 22,
        "nextHop": "Synthetic gateway 6"
      },
      {
        "id": "=route\n\"23\"",
        "cidr": "10.0.0.23/32",
        "metric": 23,
        "nextHop": "Synthetic gateway 7"
      },
      {
        "id": "=route\n\"24\"",
        "cidr": "10.0.0.24/32",
        "metric": 24,
        "nextHop": "Synthetic gateway 0"
      },
      {
        "id": "=route\n\"25\"",
        "cidr": "10.0.0.25/32",
        "metric": 25,
        "nextHop": "Synthetic gateway 1"
      },
      {
        "id": "=route\n\"26\"",
        "cidr": "10.0.0.26/32",
        "metric": 26,
        "nextHop": "Synthetic gateway 2"
      },
      {
        "id": "=route\n\"27\"",
        "cidr": "10.0.0.27/32",
        "metric": 27,
        "nextHop": "Synthetic gateway 3"
      },
      {
        "id": "=route\n\"28\"",
        "cidr": "10.0.0.28/32",
        "metric": 28,
        "nextHop": "Synthetic gateway 4"
      },
      {
        "id": "=route\n\"29\"",
        "cidr": "10.0.0.29/32",
        "metric": 29,
        "nextHop": "Synthetic gateway 5"
      },
      {
        "id": "=route\n\"30\"",
        "cidr": "10.0.0.30/32",
        "metric": 30,
        "nextHop": "Synthetic gateway 6"
      },
      {
        "id": "=route\n\"31\"",
        "cidr": "10.0.0.31/32",
        "metric": 31,
        "nextHop": "Synthetic gateway 7"
      }
    ],
    "probes": [
      {
        "id": "p0",
        "ip": "10.0.0.0",
        "expected": "g0"
      },
      {
        "id": "p1",
        "ip": "10.0.0.1",
        "expected": "g1"
      },
      {
        "id": "p2",
        "ip": "10.0.0.2",
        "expected": "g2"
      },
      {
        "id": "p3",
        "ip": "10.0.0.3",
        "expected": "g3"
      },
      {
        "id": "p4",
        "ip": "10.0.0.4",
        "expected": "g4"
      },
      {
        "id": "p5",
        "ip": "10.0.0.5",
        "expected": "g5"
      },
      {
        "id": "p6",
        "ip": "10.0.0.6",
        "expected": "g6"
      },
      {
        "id": "p7",
        "ip": "10.0.0.7",
        "expected": "g7"
      },
      {
        "id": "p8",
        "ip": "10.0.0.8",
        "expected": "g0"
      },
      {
        "id": "p9",
        "ip": "10.0.0.9",
        "expected": "g1"
      },
      {
        "id": "p10",
        "ip": "10.0.0.10",
        "expected": "g2"
      },
      {
        "id": "p11",
        "ip": "10.0.0.11",
        "expected": "g3"
      },
      {
        "id": "p12",
        "ip": "10.0.0.12",
        "expected": "g4"
      },
      {
        "id": "p13",
        "ip": "10.0.0.13",
        "expected": "g5"
      },
      {
        "id": "p14",
        "ip": "10.0.0.14",
        "expected": "g6"
      },
      {
        "id": "p15",
        "ip": "10.0.0.15",
        "expected": "g7"
      },
      {
        "id": "p16",
        "ip": "10.0.0.16",
        "expected": "g0"
      },
      {
        "id": "p17",
        "ip": "10.0.0.17",
        "expected": "g1"
      },
      {
        "id": "p18",
        "ip": "10.0.0.18",
        "expected": "g2"
      },
      {
        "id": "p19",
        "ip": "10.0.0.19",
        "expected": "g3"
      },
      {
        "id": "p20",
        "ip": "10.0.0.20",
        "expected": "g4"
      },
      {
        "id": "p21",
        "ip": "10.0.0.21",
        "expected": "g5"
      },
      {
        "id": "p22",
        "ip": "10.0.0.22",
        "expected": "g6"
      },
      {
        "id": "p23",
        "ip": "10.0.0.23",
        "expected": "g7"
      },
      {
        "id": "p24",
        "ip": "10.0.0.24",
        "expected": "g0"
      },
      {
        "id": "p25",
        "ip": "10.0.0.25",
        "expected": "g1"
      },
      {
        "id": "p26",
        "ip": "10.0.0.26",
        "expected": "g2"
      },
      {
        "id": "p27",
        "ip": "10.0.0.27",
        "expected": "g3"
      },
      {
        "id": "p28",
        "ip": "10.0.0.28",
        "expected": "g4"
      },
      {
        "id": "p29",
        "ip": "10.0.0.29",
        "expected": "g5"
      },
      {
        "id": "p30",
        "ip": "10.0.0.30",
        "expected": "g6"
      },
      {
        "id": "p31",
        "ip": "10.0.0.31",
        "expected": "g7"
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Synthetic gateway 0",
      "resource": "g0",
      "aiResource": "g0",
      "evidence": [
        {
          "resource": "g0",
          "score": 1.000000098722708
        },
        {
          "resource": "g1",
          "score": 0.8955820625245419
        },
        {
          "resource": "g2",
          "score": 0.862873708090024
        },
        {
          "resource": "g4",
          "score": 0.8574290402603626
        },
        {
          "resource": "g6",
          "score": 0.8507853861100365
        },
        {
          "resource": "g5",
          "score": 0.8451615106444312
        },
        {
          "resource": "g3",
          "score": 0.8448087930201597
        },
        {
          "resource": "g7",
          "score": 0.8280731581144596
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "Synthetic gateway 1",
      "resource": "g1",
      "aiResource": "g1",
      "evidence": [
        {
          "resource": "g1",
          "score": 1.0000004724795122
        },
        {
          "resource": "g2",
          "score": 0.9481269192571129
        },
        {
          "resource": "g3",
          "score": 0.9423258089445461
        },
        {
          "resource": "g4",
          "score": 0.9196912617734524
        },
        {
          "resource": "g6",
          "score": 0.9109230684842307
        },
        {
          "resource": "g5",
          "score": 0.9102116198813404
        },
        {
          "resource": "g7",
          "score": 0.9046892040517973
        },
        {
          "resource": "g0",
          "score": 0.8955820625245419
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Synthetic gateway 2",
      "resource": "g2",
      "aiResource": "g2",
      "evidence": [
        {
          "resource": "g2",
          "score": 1.0000002988925702
        },
        {
          "resource": "g1",
          "score": 0.9481269192571129
        },
        {
          "resource": "g3",
          "score": 0.9374405331993774
        },
        {
          "resource": "g4",
          "score": 0.9129977296270264
        },
        {
          "resource": "g6",
          "score": 0.8973937658748445
        },
        {
          "resource": "g5",
          "score": 0.8935626168957169
        },
        {
          "resource": "g7",
          "score": 0.89294707516167
        },
        {
          "resource": "g0",
          "score": 0.862873708090024
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "text": "Synthetic gateway 3",
      "resource": "g3",
      "aiResource": "g3",
      "evidence": [
        {
          "resource": "g3",
          "score": 0.9999997412071207
        },
        {
          "resource": "g1",
          "score": 0.9423258089445461
        },
        {
          "resource": "g2",
          "score": 0.9374405331993774
        },
        {
          "resource": "g4",
          "score": 0.9293464287544655
        },
        {
          "resource": "g6",
          "score": 0.9211435533522668
        },
        {
          "resource": "g5",
          "score": 0.9115022357266894
        },
        {
          "resource": "g7",
          "score": 0.9067162722897694
        },
        {
          "resource": "g0",
          "score": 0.8448087930201597
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "text": "Synthetic gateway 4",
      "resource": "g4",
      "aiResource": "g4",
      "evidence": [
        {
          "resource": "g4",
          "score": 1.000000149566338
        },
        {
          "resource": "g3",
          "score": 0.9293464287544655
        },
        {
          "resource": "g1",
          "score": 0.9196912617734524
        },
        {
          "resource": "g5",
          "score": 0.9180860364856144
        },
        {
          "resource": "g6",
          "score": 0.9132377320210872
        },
        {
          "resource": "g2",
          "score": 0.9129977296270264
        },
        {
          "resource": "g7",
          "score": 0.891509495950996
        },
        {
          "resource": "g0",
          "score": 0.8574290402603626
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "text": "Synthetic gateway 5",
      "resource": "g5",
      "aiResource": "g5",
      "evidence": [
        {
          "resource": "g5",
          "score": 0.9999996154659503
        },
        {
          "resource": "g6",
          "score": 0.9240521020811532
        },
        {
          "resource": "g4",
          "score": 0.9180860364856144
        },
        {
          "resource": "g3",
          "score": 0.9115022357266894
        },
        {
          "resource": "g1",
          "score": 0.9102116198813404
        },
        {
          "resource": "g7",
          "score": 0.9092647368549223
        },
        {
          "resource": "g2",
          "score": 0.8935626168957169
        },
        {
          "resource": "g0",
          "score": 0.8451615106444312
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 6,
      "text": "Synthetic gateway 6",
      "resource": "g6",
      "aiResource": "g6",
      "evidence": [
        {
          "resource": "g6",
          "score": 1.000000029716198
        },
        {
          "resource": "g5",
          "score": 0.9240521020811532
        },
        {
          "resource": "g3",
          "score": 0.9211435533522668
        },
        {
          "resource": "g7",
          "score": 0.9189563356855508
        },
        {
          "resource": "g4",
          "score": 0.9132377320210872
        },
        {
          "resource": "g1",
          "score": 0.9109230684842307
        },
        {
          "resource": "g2",
          "score": 0.8973937658748445
        },
        {
          "resource": "g0",
          "score": 0.8507853861100365
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 7,
      "text": "Synthetic gateway 7",
      "resource": "g7",
      "aiResource": "g7",
      "evidence": [
        {
          "resource": "g7",
          "score": 1.000000508674718
        },
        {
          "resource": "g6",
          "score": 0.9189563356855508
        },
        {
          "resource": "g5",
          "score": 0.9092647368549223
        },
        {
          "resource": "g3",
          "score": 0.9067162722897694
        },
        {
          "resource": "g1",
          "score": 0.9046892040517973
        },
        {
          "resource": "g2",
          "score": 0.89294707516167
        },
        {
          "resource": "g4",
          "score": 0.891509495950996
        },
        {
          "resource": "g0",
          "score": 0.8280731581144596
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 8,
      "text": "Synthetic gateway 0",
      "resource": "g0",
      "aiResource": "g0",
      "evidence": [
        {
          "resource": "g0",
          "score": 1.000000098722708
        },
        {
          "resource": "g1",
          "score": 0.8955820625245419
        },
        {
          "resource": "g2",
          "score": 0.862873708090024
        },
        {
          "resource": "g4",
          "score": 0.8574290402603626
        },
        {
          "resource": "g6",
          "score": 0.8507853861100365
        },
        {
          "resource": "g5",
          "score": 0.8451615106444312
        },
        {
          "resource": "g3",
          "score": 0.8448087930201597
        },
        {
          "resource": "g7",
          "score": 0.8280731581144596
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 9,
      "text": "Synthetic gateway 1",
      "resource": "g1",
      "aiResource": "g1",
      "evidence": [
        {
          "resource": "g1",
          "score": 1.0000004724795122
        },
        {
          "resource": "g2",
          "score": 0.9481269192571129
        },
        {
          "resource": "g3",
          "score": 0.9423258089445461
        },
        {
          "resource": "g4",
          "score": 0.9196912617734524
        },
        {
          "resource": "g6",
          "score": 0.9109230684842307
        },
        {
          "resource": "g5",
          "score": 0.9102116198813404
        },
        {
          "resource": "g7",
          "score": 0.9046892040517973
        },
        {
          "resource": "g0",
          "score": 0.8955820625245419
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 10,
      "text": "Synthetic gateway 2",
      "resource": "g2",
      "aiResource": "g2",
      "evidence": [
        {
          "resource": "g2",
          "score": 1.0000002988925702
        },
        {
          "resource": "g1",
          "score": 0.9481269192571129
        },
        {
          "resource": "g3",
          "score": 0.9374405331993774
        },
        {
          "resource": "g4",
          "score": 0.9129977296270264
        },
        {
          "resource": "g6",
          "score": 0.8973937658748445
        },
        {
          "resource": "g5",
          "score": 0.8935626168957169
        },
        {
          "resource": "g7",
          "score": 0.89294707516167
        },
        {
          "resource": "g0",
          "score": 0.862873708090024
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 11,
      "text": "Synthetic gateway 3",
      "resource": "g3",
      "aiResource": "g3",
      "evidence": [
        {
          "resource": "g3",
          "score": 0.9999997412071207
        },
        {
          "resource": "g1",
          "score": 0.9423258089445461
        },
        {
          "resource": "g2",
          "score": 0.9374405331993774
        },
        {
          "resource": "g4",
          "score": 0.9293464287544655
        },
        {
          "resource": "g6",
          "score": 0.9211435533522668
        },
        {
          "resource": "g5",
          "score": 0.9115022357266894
        },
        {
          "resource": "g7",
          "score": 0.9067162722897694
        },
        {
          "resource": "g0",
          "score": 0.8448087930201597
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 12,
      "text": "Synthetic gateway 4",
      "resource": "g4",
      "aiResource": "g4",
      "evidence": [
        {
          "resource": "g4",
          "score": 1.000000149566338
        },
        {
          "resource": "g3",
          "score": 0.9293464287544655
        },
        {
          "resource": "g1",
          "score": 0.9196912617734524
        },
        {
          "resource": "g5",
          "score": 0.9180860364856144
        },
        {
          "resource": "g6",
          "score": 0.9132377320210872
        },
        {
          "resource": "g2",
          "score": 0.9129977296270264
        },
        {
          "resource": "g7",
          "score": 0.891509495950996
        },
        {
          "resource": "g0",
          "score": 0.8574290402603626
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 13,
      "text": "Synthetic gateway 5",
      "resource": "g5",
      "aiResource": "g5",
      "evidence": [
        {
          "resource": "g5",
          "score": 0.9999996154659503
        },
        {
          "resource": "g6",
          "score": 0.9240521020811532
        },
        {
          "resource": "g4",
          "score": 0.9180860364856144
        },
        {
          "resource": "g3",
          "score": 0.9115022357266894
        },
        {
          "resource": "g1",
          "score": 0.9102116198813404
        },
        {
          "resource": "g7",
          "score": 0.9092647368549223
        },
        {
          "resource": "g2",
          "score": 0.8935626168957169
        },
        {
          "resource": "g0",
          "score": 0.8451615106444312
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 14,
      "text": "Synthetic gateway 6",
      "resource": "g6",
      "aiResource": "g6",
      "evidence": [
        {
          "resource": "g6",
          "score": 1.000000029716198
        },
        {
          "resource": "g5",
          "score": 0.9240521020811532
        },
        {
          "resource": "g3",
          "score": 0.9211435533522668
        },
        {
          "resource": "g7",
          "score": 0.9189563356855508
        },
        {
          "resource": "g4",
          "score": 0.9132377320210872
        },
        {
          "resource": "g1",
          "score": 0.9109230684842307
        },
        {
          "resource": "g2",
          "score": 0.8973937658748445
        },
        {
          "resource": "g0",
          "score": 0.8507853861100365
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 15,
      "text": "Synthetic gateway 7",
      "resource": "g7",
      "aiResource": "g7",
      "evidence": [
        {
          "resource": "g7",
          "score": 1.000000508674718
        },
        {
          "resource": "g6",
          "score": 0.9189563356855508
        },
        {
          "resource": "g5",
          "score": 0.9092647368549223
        },
        {
          "resource": "g3",
          "score": 0.9067162722897694
        },
        {
          "resource": "g1",
          "score": 0.9046892040517973
        },
        {
          "resource": "g2",
          "score": 0.89294707516167
        },
        {
          "resource": "g4",
          "score": 0.891509495950996
        },
        {
          "resource": "g0",
          "score": 0.8280731581144596
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 16,
      "text": "Synthetic gateway 0",
      "resource": "g0",
      "aiResource": "g0",
      "evidence": [
        {
          "resource": "g0",
          "score": 1.000000098722708
        },
        {
          "resource": "g1",
          "score": 0.8955820625245419
        },
        {
          "resource": "g2",
          "score": 0.862873708090024
        },
        {
          "resource": "g4",
          "score": 0.8574290402603626
        },
        {
          "resource": "g6",
          "score": 0.8507853861100365
        },
        {
          "resource": "g5",
          "score": 0.8451615106444312
        },
        {
          "resource": "g3",
          "score": 0.8448087930201597
        },
        {
          "resource": "g7",
          "score": 0.8280731581144596
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 17,
      "text": "Synthetic gateway 1",
      "resource": "g1",
      "aiResource": "g1",
      "evidence": [
        {
          "resource": "g1",
          "score": 1.0000004724795122
        },
        {
          "resource": "g2",
          "score": 0.9481269192571129
        },
        {
          "resource": "g3",
          "score": 0.9423258089445461
        },
        {
          "resource": "g4",
          "score": 0.9196912617734524
        },
        {
          "resource": "g6",
          "score": 0.9109230684842307
        },
        {
          "resource": "g5",
          "score": 0.9102116198813404
        },
        {
          "resource": "g7",
          "score": 0.9046892040517973
        },
        {
          "resource": "g0",
          "score": 0.8955820625245419
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 18,
      "text": "Synthetic gateway 2",
      "resource": "g2",
      "aiResource": "g2",
      "evidence": [
        {
          "resource": "g2",
          "score": 1.0000002988925702
        },
        {
          "resource": "g1",
          "score": 0.9481269192571129
        },
        {
          "resource": "g3",
          "score": 0.9374405331993774
        },
        {
          "resource": "g4",
          "score": 0.9129977296270264
        },
        {
          "resource": "g6",
          "score": 0.8973937658748445
        },
        {
          "resource": "g5",
          "score": 0.8935626168957169
        },
        {
          "resource": "g7",
          "score": 0.89294707516167
        },
        {
          "resource": "g0",
          "score": 0.862873708090024
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 19,
      "text": "Synthetic gateway 3",
      "resource": "g3",
      "aiResource": "g3",
      "evidence": [
        {
          "resource": "g3",
          "score": 0.9999997412071207
        },
        {
          "resource": "g1",
          "score": 0.9423258089445461
        },
        {
          "resource": "g2",
          "score": 0.9374405331993774
        },
        {
          "resource": "g4",
          "score": 0.9293464287544655
        },
        {
          "resource": "g6",
          "score": 0.9211435533522668
        },
        {
          "resource": "g5",
          "score": 0.9115022357266894
        },
        {
          "resource": "g7",
          "score": 0.9067162722897694
        },
        {
          "resource": "g0",
          "score": 0.8448087930201597
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 20,
      "text": "Synthetic gateway 4",
      "resource": "g4",
      "aiResource": "g4",
      "evidence": [
        {
          "resource": "g4",
          "score": 1.000000149566338
        },
        {
          "resource": "g3",
          "score": 0.9293464287544655
        },
        {
          "resource": "g1",
          "score": 0.9196912617734524
        },
        {
          "resource": "g5",
          "score": 0.9180860364856144
        },
        {
          "resource": "g6",
          "score": 0.9132377320210872
        },
        {
          "resource": "g2",
          "score": 0.9129977296270264
        },
        {
          "resource": "g7",
          "score": 0.891509495950996
        },
        {
          "resource": "g0",
          "score": 0.8574290402603626
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 21,
      "text": "Synthetic gateway 5",
      "resource": "g5",
      "aiResource": "g5",
      "evidence": [
        {
          "resource": "g5",
          "score": 0.9999996154659503
        },
        {
          "resource": "g6",
          "score": 0.9240521020811532
        },
        {
          "resource": "g4",
          "score": 0.9180860364856144
        },
        {
          "resource": "g3",
          "score": 0.9115022357266894
        },
        {
          "resource": "g1",
          "score": 0.9102116198813404
        },
        {
          "resource": "g7",
          "score": 0.9092647368549223
        },
        {
          "resource": "g2",
          "score": 0.8935626168957169
        },
        {
          "resource": "g0",
          "score": 0.8451615106444312
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 22,
      "text": "Synthetic gateway 6",
      "resource": "g6",
      "aiResource": "g6",
      "evidence": [
        {
          "resource": "g6",
          "score": 1.000000029716198
        },
        {
          "resource": "g5",
          "score": 0.9240521020811532
        },
        {
          "resource": "g3",
          "score": 0.9211435533522668
        },
        {
          "resource": "g7",
          "score": 0.9189563356855508
        },
        {
          "resource": "g4",
          "score": 0.9132377320210872
        },
        {
          "resource": "g1",
          "score": 0.9109230684842307
        },
        {
          "resource": "g2",
          "score": 0.8973937658748445
        },
        {
          "resource": "g0",
          "score": 0.8507853861100365
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 23,
      "text": "Synthetic gateway 7",
      "resource": "g7",
      "aiResource": "g7",
      "evidence": [
        {
          "resource": "g7",
          "score": 1.000000508674718
        },
        {
          "resource": "g6",
          "score": 0.9189563356855508
        },
        {
          "resource": "g5",
          "score": 0.9092647368549223
        },
        {
          "resource": "g3",
          "score": 0.9067162722897694
        },
        {
          "resource": "g1",
          "score": 0.9046892040517973
        },
        {
          "resource": "g2",
          "score": 0.89294707516167
        },
        {
          "resource": "g4",
          "score": 0.891509495950996
        },
        {
          "resource": "g0",
          "score": 0.8280731581144596
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 24,
      "text": "Synthetic gateway 0",
      "resource": "g0",
      "aiResource": "g0",
      "evidence": [
        {
          "resource": "g0",
          "score": 1.000000098722708
        },
        {
          "resource": "g1",
          "score": 0.8955820625245419
        },
        {
          "resource": "g2",
          "score": 0.862873708090024
        },
        {
          "resource": "g4",
          "score": 0.8574290402603626
        },
        {
          "resource": "g6",
          "score": 0.8507853861100365
        },
        {
          "resource": "g5",
          "score": 0.8451615106444312
        },
        {
          "resource": "g3",
          "score": 0.8448087930201597
        },
        {
          "resource": "g7",
          "score": 0.8280731581144596
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 25,
      "text": "Synthetic gateway 1",
      "resource": "g1",
      "aiResource": "g1",
      "evidence": [
        {
          "resource": "g1",
          "score": 1.0000004724795122
        },
        {
          "resource": "g2",
          "score": 0.9481269192571129
        },
        {
          "resource": "g3",
          "score": 0.9423258089445461
        },
        {
          "resource": "g4",
          "score": 0.9196912617734524
        },
        {
          "resource": "g6",
          "score": 0.9109230684842307
        },
        {
          "resource": "g5",
          "score": 0.9102116198813404
        },
        {
          "resource": "g7",
          "score": 0.9046892040517973
        },
        {
          "resource": "g0",
          "score": 0.8955820625245419
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 26,
      "text": "Synthetic gateway 2",
      "resource": "g2",
      "aiResource": "g2",
      "evidence": [
        {
          "resource": "g2",
          "score": 1.0000002988925702
        },
        {
          "resource": "g1",
          "score": 0.9481269192571129
        },
        {
          "resource": "g3",
          "score": 0.9374405331993774
        },
        {
          "resource": "g4",
          "score": 0.9129977296270264
        },
        {
          "resource": "g6",
          "score": 0.8973937658748445
        },
        {
          "resource": "g5",
          "score": 0.8935626168957169
        },
        {
          "resource": "g7",
          "score": 0.89294707516167
        },
        {
          "resource": "g0",
          "score": 0.862873708090024
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 27,
      "text": "Synthetic gateway 3",
      "resource": "g3",
      "aiResource": "g3",
      "evidence": [
        {
          "resource": "g3",
          "score": 0.9999997412071207
        },
        {
          "resource": "g1",
          "score": 0.9423258089445461
        },
        {
          "resource": "g2",
          "score": 0.9374405331993774
        },
        {
          "resource": "g4",
          "score": 0.9293464287544655
        },
        {
          "resource": "g6",
          "score": 0.9211435533522668
        },
        {
          "resource": "g5",
          "score": 0.9115022357266894
        },
        {
          "resource": "g7",
          "score": 0.9067162722897694
        },
        {
          "resource": "g0",
          "score": 0.8448087930201597
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 28,
      "text": "Synthetic gateway 4",
      "resource": "g4",
      "aiResource": "g4",
      "evidence": [
        {
          "resource": "g4",
          "score": 1.000000149566338
        },
        {
          "resource": "g3",
          "score": 0.9293464287544655
        },
        {
          "resource": "g1",
          "score": 0.9196912617734524
        },
        {
          "resource": "g5",
          "score": 0.9180860364856144
        },
        {
          "resource": "g6",
          "score": 0.9132377320210872
        },
        {
          "resource": "g2",
          "score": 0.9129977296270264
        },
        {
          "resource": "g7",
          "score": 0.891509495950996
        },
        {
          "resource": "g0",
          "score": 0.8574290402603626
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 29,
      "text": "Synthetic gateway 5",
      "resource": "g5",
      "aiResource": "g5",
      "evidence": [
        {
          "resource": "g5",
          "score": 0.9999996154659503
        },
        {
          "resource": "g6",
          "score": 0.9240521020811532
        },
        {
          "resource": "g4",
          "score": 0.9180860364856144
        },
        {
          "resource": "g3",
          "score": 0.9115022357266894
        },
        {
          "resource": "g1",
          "score": 0.9102116198813404
        },
        {
          "resource": "g7",
          "score": 0.9092647368549223
        },
        {
          "resource": "g2",
          "score": 0.8935626168957169
        },
        {
          "resource": "g0",
          "score": 0.8451615106444312
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 30,
      "text": "Synthetic gateway 6",
      "resource": "g6",
      "aiResource": "g6",
      "evidence": [
        {
          "resource": "g6",
          "score": 1.000000029716198
        },
        {
          "resource": "g5",
          "score": 0.9240521020811532
        },
        {
          "resource": "g3",
          "score": 0.9211435533522668
        },
        {
          "resource": "g7",
          "score": 0.9189563356855508
        },
        {
          "resource": "g4",
          "score": 0.9132377320210872
        },
        {
          "resource": "g1",
          "score": 0.9109230684842307
        },
        {
          "resource": "g2",
          "score": 0.8973937658748445
        },
        {
          "resource": "g0",
          "score": 0.8507853861100365
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 31,
      "text": "Synthetic gateway 7",
      "resource": "g7",
      "aiResource": "g7",
      "evidence": [
        {
          "resource": "g7",
          "score": 1.000000508674718
        },
        {
          "resource": "g6",
          "score": 0.9189563356855508
        },
        {
          "resource": "g5",
          "score": 0.9092647368549223
        },
        {
          "resource": "g3",
          "score": 0.9067162722897694
        },
        {
          "resource": "g1",
          "score": 0.9046892040517973
        },
        {
          "resource": "g2",
          "score": 0.89294707516167
        },
        {
          "resource": "g4",
          "score": 0.891509495950996
        },
        {
          "resource": "g0",
          "score": 0.8280731581144596
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
        "routeIds": [],
        "gateway": null,
        "status": "uncovered",
        "firstRoute": null,
        "firstGateway": null
      },
      {
        "start": "10.0.0.0",
        "end": "10.0.0.0",
        "addresses": 1,
        "routeIds": [
          "=route\n\"0\""
        ],
        "gateway": "g0",
        "status": "selected",
        "firstRoute": "=route\n\"0\"",
        "firstGateway": "g0"
      },
      {
        "start": "10.0.0.1",
        "end": "10.0.0.1",
        "addresses": 1,
        "routeIds": [
          "=route\n\"1\""
        ],
        "gateway": "g1",
        "status": "selected",
        "firstRoute": "=route\n\"1\"",
        "firstGateway": "g1"
      },
      {
        "start": "10.0.0.2",
        "end": "10.0.0.2",
        "addresses": 1,
        "routeIds": [
          "=route\n\"2\""
        ],
        "gateway": "g2",
        "status": "selected",
        "firstRoute": "=route\n\"2\"",
        "firstGateway": "g2"
      },
      {
        "start": "10.0.0.3",
        "end": "10.0.0.3",
        "addresses": 1,
        "routeIds": [
          "=route\n\"3\""
        ],
        "gateway": "g3",
        "status": "selected",
        "firstRoute": "=route\n\"3\"",
        "firstGateway": "g3"
      },
      {
        "start": "10.0.0.4",
        "end": "10.0.0.4",
        "addresses": 1,
        "routeIds": [
          "=route\n\"4\""
        ],
        "gateway": "g4",
        "status": "selected",
        "firstRoute": "=route\n\"4\"",
        "firstGateway": "g4"
      },
      {
        "start": "10.0.0.5",
        "end": "10.0.0.5",
        "addresses": 1,
        "routeIds": [
          "=route\n\"5\""
        ],
        "gateway": "g5",
        "status": "selected",
        "firstRoute": "=route\n\"5\"",
        "firstGateway": "g5"
      },
      {
        "start": "10.0.0.6",
        "end": "10.0.0.6",
        "addresses": 1,
        "routeIds": [
          "=route\n\"6\""
        ],
        "gateway": "g6",
        "status": "selected",
        "firstRoute": "=route\n\"6\"",
        "firstGateway": "g6"
      },
      {
        "start": "10.0.0.7",
        "end": "10.0.0.7",
        "addresses": 1,
        "routeIds": [
          "=route\n\"7\""
        ],
        "gateway": "g7",
        "status": "selected",
        "firstRoute": "=route\n\"7\"",
        "firstGateway": "g7"
      },
      {
        "start": "10.0.0.8",
        "end": "10.0.0.8",
        "addresses": 1,
        "routeIds": [
          "=route\n\"8\""
        ],
        "gateway": "g0",
        "status": "selected",
        "firstRoute": "=route\n\"8\"",
        "firstGateway": "g0"
      },
      {
        "start": "10.0.0.9",
        "end": "10.0.0.9",
        "addresses": 1,
        "routeIds": [
          "=route\n\"9\""
        ],
        "gateway": "g1",
        "status": "selected",
        "firstRoute": "=route\n\"9\"",
        "firstGateway": "g1"
      },
      {
        "start": "10.0.0.10",
        "end": "10.0.0.10",
        "addresses": 1,
        "routeIds": [
          "=route\n\"10\""
        ],
        "gateway": "g2",
        "status": "selected",
        "firstRoute": "=route\n\"10\"",
        "firstGateway": "g2"
      },
      {
        "start": "10.0.0.11",
        "end": "10.0.0.11",
        "addresses": 1,
        "routeIds": [
          "=route\n\"11\""
        ],
        "gateway": "g3",
        "status": "selected",
        "firstRoute": "=route\n\"11\"",
        "firstGateway": "g3"
      },
      {
        "start": "10.0.0.12",
        "end": "10.0.0.12",
        "addresses": 1,
        "routeIds": [
          "=route\n\"12\""
        ],
        "gateway": "g4",
        "status": "selected",
        "firstRoute": "=route\n\"12\"",
        "firstGateway": "g4"
      },
      {
        "start": "10.0.0.13",
        "end": "10.0.0.13",
        "addresses": 1,
        "routeIds": [
          "=route\n\"13\""
        ],
        "gateway": "g5",
        "status": "selected",
        "firstRoute": "=route\n\"13\"",
        "firstGateway": "g5"
      },
      {
        "start": "10.0.0.14",
        "end": "10.0.0.14",
        "addresses": 1,
        "routeIds": [
          "=route\n\"14\""
        ],
        "gateway": "g6",
        "status": "selected",
        "firstRoute": "=route\n\"14\"",
        "firstGateway": "g6"
      },
      {
        "start": "10.0.0.15",
        "end": "10.0.0.15",
        "addresses": 1,
        "routeIds": [
          "=route\n\"15\""
        ],
        "gateway": "g7",
        "status": "selected",
        "firstRoute": "=route\n\"15\"",
        "firstGateway": "g7"
      },
      {
        "start": "10.0.0.16",
        "end": "10.0.0.16",
        "addresses": 1,
        "routeIds": [
          "=route\n\"16\""
        ],
        "gateway": "g0",
        "status": "selected",
        "firstRoute": "=route\n\"16\"",
        "firstGateway": "g0"
      },
      {
        "start": "10.0.0.17",
        "end": "10.0.0.17",
        "addresses": 1,
        "routeIds": [
          "=route\n\"17\""
        ],
        "gateway": "g1",
        "status": "selected",
        "firstRoute": "=route\n\"17\"",
        "firstGateway": "g1"
      },
      {
        "start": "10.0.0.18",
        "end": "10.0.0.18",
        "addresses": 1,
        "routeIds": [
          "=route\n\"18\""
        ],
        "gateway": "g2",
        "status": "selected",
        "firstRoute": "=route\n\"18\"",
        "firstGateway": "g2"
      },
      {
        "start": "10.0.0.19",
        "end": "10.0.0.19",
        "addresses": 1,
        "routeIds": [
          "=route\n\"19\""
        ],
        "gateway": "g3",
        "status": "selected",
        "firstRoute": "=route\n\"19\"",
        "firstGateway": "g3"
      },
      {
        "start": "10.0.0.20",
        "end": "10.0.0.20",
        "addresses": 1,
        "routeIds": [
          "=route\n\"20\""
        ],
        "gateway": "g4",
        "status": "selected",
        "firstRoute": "=route\n\"20\"",
        "firstGateway": "g4"
      },
      {
        "start": "10.0.0.21",
        "end": "10.0.0.21",
        "addresses": 1,
        "routeIds": [
          "=route\n\"21\""
        ],
        "gateway": "g5",
        "status": "selected",
        "firstRoute": "=route\n\"21\"",
        "firstGateway": "g5"
      },
      {
        "start": "10.0.0.22",
        "end": "10.0.0.22",
        "addresses": 1,
        "routeIds": [
          "=route\n\"22\""
        ],
        "gateway": "g6",
        "status": "selected",
        "firstRoute": "=route\n\"22\"",
        "firstGateway": "g6"
      },
      {
        "start": "10.0.0.23",
        "end": "10.0.0.23",
        "addresses": 1,
        "routeIds": [
          "=route\n\"23\""
        ],
        "gateway": "g7",
        "status": "selected",
        "firstRoute": "=route\n\"23\"",
        "firstGateway": "g7"
      },
      {
        "start": "10.0.0.24",
        "end": "10.0.0.24",
        "addresses": 1,
        "routeIds": [
          "=route\n\"24\""
        ],
        "gateway": "g0",
        "status": "selected",
        "firstRoute": "=route\n\"24\"",
        "firstGateway": "g0"
      },
      {
        "start": "10.0.0.25",
        "end": "10.0.0.25",
        "addresses": 1,
        "routeIds": [
          "=route\n\"25\""
        ],
        "gateway": "g1",
        "status": "selected",
        "firstRoute": "=route\n\"25\"",
        "firstGateway": "g1"
      },
      {
        "start": "10.0.0.26",
        "end": "10.0.0.26",
        "addresses": 1,
        "routeIds": [
          "=route\n\"26\""
        ],
        "gateway": "g2",
        "status": "selected",
        "firstRoute": "=route\n\"26\"",
        "firstGateway": "g2"
      },
      {
        "start": "10.0.0.27",
        "end": "10.0.0.27",
        "addresses": 1,
        "routeIds": [
          "=route\n\"27\""
        ],
        "gateway": "g3",
        "status": "selected",
        "firstRoute": "=route\n\"27\"",
        "firstGateway": "g3"
      },
      {
        "start": "10.0.0.28",
        "end": "10.0.0.28",
        "addresses": 1,
        "routeIds": [
          "=route\n\"28\""
        ],
        "gateway": "g4",
        "status": "selected",
        "firstRoute": "=route\n\"28\"",
        "firstGateway": "g4"
      },
      {
        "start": "10.0.0.29",
        "end": "10.0.0.29",
        "addresses": 1,
        "routeIds": [
          "=route\n\"29\""
        ],
        "gateway": "g5",
        "status": "selected",
        "firstRoute": "=route\n\"29\"",
        "firstGateway": "g5"
      },
      {
        "start": "10.0.0.30",
        "end": "10.0.0.30",
        "addresses": 1,
        "routeIds": [
          "=route\n\"30\""
        ],
        "gateway": "g6",
        "status": "selected",
        "firstRoute": "=route\n\"30\"",
        "firstGateway": "g6"
      },
      {
        "start": "10.0.0.31",
        "end": "10.0.0.31",
        "addresses": 1,
        "routeIds": [
          "=route\n\"31\""
        ],
        "gateway": "g7",
        "status": "selected",
        "firstRoute": "=route\n\"31\"",
        "firstGateway": "g7"
      },
      {
        "start": "10.0.0.32",
        "end": "255.255.255.255",
        "addresses": 4127195104,
        "routeIds": [],
        "gateway": null,
        "status": "uncovered",
        "firstRoute": null,
        "firstGateway": null
      }
    ],
    "coverage": [
      {
        "id": "=route\n\"0\"",
        "cidr": "10.0.0.0/32",
        "gateway": "g0",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"1\"",
        "cidr": "10.0.0.1/32",
        "gateway": "g1",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"2\"",
        "cidr": "10.0.0.2/32",
        "gateway": "g2",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"3\"",
        "cidr": "10.0.0.3/32",
        "gateway": "g3",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"4\"",
        "cidr": "10.0.0.4/32",
        "gateway": "g4",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"5\"",
        "cidr": "10.0.0.5/32",
        "gateway": "g5",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"6\"",
        "cidr": "10.0.0.6/32",
        "gateway": "g6",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"7\"",
        "cidr": "10.0.0.7/32",
        "gateway": "g7",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"8\"",
        "cidr": "10.0.0.8/32",
        "gateway": "g0",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"9\"",
        "cidr": "10.0.0.9/32",
        "gateway": "g1",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"10\"",
        "cidr": "10.0.0.10/32",
        "gateway": "g2",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"11\"",
        "cidr": "10.0.0.11/32",
        "gateway": "g3",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"12\"",
        "cidr": "10.0.0.12/32",
        "gateway": "g4",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"13\"",
        "cidr": "10.0.0.13/32",
        "gateway": "g5",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"14\"",
        "cidr": "10.0.0.14/32",
        "gateway": "g6",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"15\"",
        "cidr": "10.0.0.15/32",
        "gateway": "g7",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"16\"",
        "cidr": "10.0.0.16/32",
        "gateway": "g0",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"17\"",
        "cidr": "10.0.0.17/32",
        "gateway": "g1",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"18\"",
        "cidr": "10.0.0.18/32",
        "gateway": "g2",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"19\"",
        "cidr": "10.0.0.19/32",
        "gateway": "g3",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"20\"",
        "cidr": "10.0.0.20/32",
        "gateway": "g4",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"21\"",
        "cidr": "10.0.0.21/32",
        "gateway": "g5",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"22\"",
        "cidr": "10.0.0.22/32",
        "gateway": "g6",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"23\"",
        "cidr": "10.0.0.23/32",
        "gateway": "g7",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"24\"",
        "cidr": "10.0.0.24/32",
        "gateway": "g0",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"25\"",
        "cidr": "10.0.0.25/32",
        "gateway": "g1",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"26\"",
        "cidr": "10.0.0.26/32",
        "gateway": "g2",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"27\"",
        "cidr": "10.0.0.27/32",
        "gateway": "g3",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"28\"",
        "cidr": "10.0.0.28/32",
        "gateway": "g4",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"29\"",
        "cidr": "10.0.0.29/32",
        "gateway": "g5",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"30\"",
        "cidr": "10.0.0.30/32",
        "gateway": "g6",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      },
      {
        "id": "=route\n\"31\"",
        "cidr": "10.0.0.31/32",
        "gateway": "g7",
        "totalAddresses": 1,
        "winningAddresses": 1,
        "ambiguousAddresses": 0
      }
    ],
    "probes": [
      {
        "id": "p0",
        "ip": "10.0.0.0",
        "expected": "g0",
        "routeIds": [
          "=route\n\"0\""
        ],
        "gateway": "g0",
        "status": "selected",
        "firstRoute": "=route\n\"0\"",
        "firstGateway": "g0",
        "matchesExpected": true
      },
      {
        "id": "p1",
        "ip": "10.0.0.1",
        "expected": "g1",
        "routeIds": [
          "=route\n\"1\""
        ],
        "gateway": "g1",
        "status": "selected",
        "firstRoute": "=route\n\"1\"",
        "firstGateway": "g1",
        "matchesExpected": true
      },
      {
        "id": "p2",
        "ip": "10.0.0.2",
        "expected": "g2",
        "routeIds": [
          "=route\n\"2\""
        ],
        "gateway": "g2",
        "status": "selected",
        "firstRoute": "=route\n\"2\"",
        "firstGateway": "g2",
        "matchesExpected": true
      },
      {
        "id": "p3",
        "ip": "10.0.0.3",
        "expected": "g3",
        "routeIds": [
          "=route\n\"3\""
        ],
        "gateway": "g3",
        "status": "selected",
        "firstRoute": "=route\n\"3\"",
        "firstGateway": "g3",
        "matchesExpected": true
      },
      {
        "id": "p4",
        "ip": "10.0.0.4",
        "expected": "g4",
        "routeIds": [
          "=route\n\"4\""
        ],
        "gateway": "g4",
        "status": "selected",
        "firstRoute": "=route\n\"4\"",
        "firstGateway": "g4",
        "matchesExpected": true
      },
      {
        "id": "p5",
        "ip": "10.0.0.5",
        "expected": "g5",
        "routeIds": [
          "=route\n\"5\""
        ],
        "gateway": "g5",
        "status": "selected",
        "firstRoute": "=route\n\"5\"",
        "firstGateway": "g5",
        "matchesExpected": true
      },
      {
        "id": "p6",
        "ip": "10.0.0.6",
        "expected": "g6",
        "routeIds": [
          "=route\n\"6\""
        ],
        "gateway": "g6",
        "status": "selected",
        "firstRoute": "=route\n\"6\"",
        "firstGateway": "g6",
        "matchesExpected": true
      },
      {
        "id": "p7",
        "ip": "10.0.0.7",
        "expected": "g7",
        "routeIds": [
          "=route\n\"7\""
        ],
        "gateway": "g7",
        "status": "selected",
        "firstRoute": "=route\n\"7\"",
        "firstGateway": "g7",
        "matchesExpected": true
      },
      {
        "id": "p8",
        "ip": "10.0.0.8",
        "expected": "g0",
        "routeIds": [
          "=route\n\"8\""
        ],
        "gateway": "g0",
        "status": "selected",
        "firstRoute": "=route\n\"8\"",
        "firstGateway": "g0",
        "matchesExpected": true
      },
      {
        "id": "p9",
        "ip": "10.0.0.9",
        "expected": "g1",
        "routeIds": [
          "=route\n\"9\""
        ],
        "gateway": "g1",
        "status": "selected",
        "firstRoute": "=route\n\"9\"",
        "firstGateway": "g1",
        "matchesExpected": true
      },
      {
        "id": "p10",
        "ip": "10.0.0.10",
        "expected": "g2",
        "routeIds": [
          "=route\n\"10\""
        ],
        "gateway": "g2",
        "status": "selected",
        "firstRoute": "=route\n\"10\"",
        "firstGateway": "g2",
        "matchesExpected": true
      },
      {
        "id": "p11",
        "ip": "10.0.0.11",
        "expected": "g3",
        "routeIds": [
          "=route\n\"11\""
        ],
        "gateway": "g3",
        "status": "selected",
        "firstRoute": "=route\n\"11\"",
        "firstGateway": "g3",
        "matchesExpected": true
      },
      {
        "id": "p12",
        "ip": "10.0.0.12",
        "expected": "g4",
        "routeIds": [
          "=route\n\"12\""
        ],
        "gateway": "g4",
        "status": "selected",
        "firstRoute": "=route\n\"12\"",
        "firstGateway": "g4",
        "matchesExpected": true
      },
      {
        "id": "p13",
        "ip": "10.0.0.13",
        "expected": "g5",
        "routeIds": [
          "=route\n\"13\""
        ],
        "gateway": "g5",
        "status": "selected",
        "firstRoute": "=route\n\"13\"",
        "firstGateway": "g5",
        "matchesExpected": true
      },
      {
        "id": "p14",
        "ip": "10.0.0.14",
        "expected": "g6",
        "routeIds": [
          "=route\n\"14\""
        ],
        "gateway": "g6",
        "status": "selected",
        "firstRoute": "=route\n\"14\"",
        "firstGateway": "g6",
        "matchesExpected": true
      },
      {
        "id": "p15",
        "ip": "10.0.0.15",
        "expected": "g7",
        "routeIds": [
          "=route\n\"15\""
        ],
        "gateway": "g7",
        "status": "selected",
        "firstRoute": "=route\n\"15\"",
        "firstGateway": "g7",
        "matchesExpected": true
      },
      {
        "id": "p16",
        "ip": "10.0.0.16",
        "expected": "g0",
        "routeIds": [
          "=route\n\"16\""
        ],
        "gateway": "g0",
        "status": "selected",
        "firstRoute": "=route\n\"16\"",
        "firstGateway": "g0",
        "matchesExpected": true
      },
      {
        "id": "p17",
        "ip": "10.0.0.17",
        "expected": "g1",
        "routeIds": [
          "=route\n\"17\""
        ],
        "gateway": "g1",
        "status": "selected",
        "firstRoute": "=route\n\"17\"",
        "firstGateway": "g1",
        "matchesExpected": true
      },
      {
        "id": "p18",
        "ip": "10.0.0.18",
        "expected": "g2",
        "routeIds": [
          "=route\n\"18\""
        ],
        "gateway": "g2",
        "status": "selected",
        "firstRoute": "=route\n\"18\"",
        "firstGateway": "g2",
        "matchesExpected": true
      },
      {
        "id": "p19",
        "ip": "10.0.0.19",
        "expected": "g3",
        "routeIds": [
          "=route\n\"19\""
        ],
        "gateway": "g3",
        "status": "selected",
        "firstRoute": "=route\n\"19\"",
        "firstGateway": "g3",
        "matchesExpected": true
      },
      {
        "id": "p20",
        "ip": "10.0.0.20",
        "expected": "g4",
        "routeIds": [
          "=route\n\"20\""
        ],
        "gateway": "g4",
        "status": "selected",
        "firstRoute": "=route\n\"20\"",
        "firstGateway": "g4",
        "matchesExpected": true
      },
      {
        "id": "p21",
        "ip": "10.0.0.21",
        "expected": "g5",
        "routeIds": [
          "=route\n\"21\""
        ],
        "gateway": "g5",
        "status": "selected",
        "firstRoute": "=route\n\"21\"",
        "firstGateway": "g5",
        "matchesExpected": true
      },
      {
        "id": "p22",
        "ip": "10.0.0.22",
        "expected": "g6",
        "routeIds": [
          "=route\n\"22\""
        ],
        "gateway": "g6",
        "status": "selected",
        "firstRoute": "=route\n\"22\"",
        "firstGateway": "g6",
        "matchesExpected": true
      },
      {
        "id": "p23",
        "ip": "10.0.0.23",
        "expected": "g7",
        "routeIds": [
          "=route\n\"23\""
        ],
        "gateway": "g7",
        "status": "selected",
        "firstRoute": "=route\n\"23\"",
        "firstGateway": "g7",
        "matchesExpected": true
      },
      {
        "id": "p24",
        "ip": "10.0.0.24",
        "expected": "g0",
        "routeIds": [
          "=route\n\"24\""
        ],
        "gateway": "g0",
        "status": "selected",
        "firstRoute": "=route\n\"24\"",
        "firstGateway": "g0",
        "matchesExpected": true
      },
      {
        "id": "p25",
        "ip": "10.0.0.25",
        "expected": "g1",
        "routeIds": [
          "=route\n\"25\""
        ],
        "gateway": "g1",
        "status": "selected",
        "firstRoute": "=route\n\"25\"",
        "firstGateway": "g1",
        "matchesExpected": true
      },
      {
        "id": "p26",
        "ip": "10.0.0.26",
        "expected": "g2",
        "routeIds": [
          "=route\n\"26\""
        ],
        "gateway": "g2",
        "status": "selected",
        "firstRoute": "=route\n\"26\"",
        "firstGateway": "g2",
        "matchesExpected": true
      },
      {
        "id": "p27",
        "ip": "10.0.0.27",
        "expected": "g3",
        "routeIds": [
          "=route\n\"27\""
        ],
        "gateway": "g3",
        "status": "selected",
        "firstRoute": "=route\n\"27\"",
        "firstGateway": "g3",
        "matchesExpected": true
      },
      {
        "id": "p28",
        "ip": "10.0.0.28",
        "expected": "g4",
        "routeIds": [
          "=route\n\"28\""
        ],
        "gateway": "g4",
        "status": "selected",
        "firstRoute": "=route\n\"28\"",
        "firstGateway": "g4",
        "matchesExpected": true
      },
      {
        "id": "p29",
        "ip": "10.0.0.29",
        "expected": "g5",
        "routeIds": [
          "=route\n\"29\""
        ],
        "gateway": "g5",
        "status": "selected",
        "firstRoute": "=route\n\"29\"",
        "firstGateway": "g5",
        "matchesExpected": true
      },
      {
        "id": "p30",
        "ip": "10.0.0.30",
        "expected": "g6",
        "routeIds": [
          "=route\n\"30\""
        ],
        "gateway": "g6",
        "status": "selected",
        "firstRoute": "=route\n\"30\"",
        "firstGateway": "g6",
        "matchesExpected": true
      },
      {
        "id": "p31",
        "ip": "10.0.0.31",
        "expected": "g7",
        "routeIds": [
          "=route\n\"31\""
        ],
        "gateway": "g7",
        "status": "selected",
        "firstRoute": "=route\n\"31\"",
        "firstGateway": "g7",
        "matchesExpected": true
      }
    ],
    "baselineMismatches": 0,
    "reviewedMismatches": 0,
    "shadowed": [],
    "uncoveredAddresses": 4294967264,
    "ambiguousAddresses": 0,
    "differentFromFirstMatch": 0,
    "scope": "Hypothetical single-table IPv4 destination forwarding only: longest prefix, then lowest metric. Equal-rank different gateways are ambiguous; no ECMP simulation. No source routing, recursive next hops, policy tables, interface state or live reachability. Address counts include network/broadcast and all IPv4 space, not usable hosts."
  }
}

