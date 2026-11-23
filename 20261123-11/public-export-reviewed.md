# Synthetic replay and half-range batch

t4 [newer] sensor / 8 bits · 250 → 251 · delta 1
Forward within the half-range; advances the reviewed reference.

b4 [newer] build / 16 bits · 65530 → 4 · delta 10
Forward within the half-range; advances the reviewed reference.

t5 [stale] sensor / 8 bits · 251 → 249 · delta 254
Behind the current reference under the half-range assumption; does not advance.

b5 [duplicate] build / 16 bits · 4 → 4 · delta 0
Same as the current reference; does not advance.

t6 [stale] sensor / 8 bits · 251 → 250 · delta 255
Behind the current reference under the half-range assumption; does not advance.

b6 [newer] build / 16 bits · 4 → 5 · delta 1
Forward within the half-range; advances the reviewed reference.

## Complete source and review audit

```json

{
  "schema": "serial-compass/1",
  "appliedAt": "2026-11-23T02:12:57.254Z",
  "originalInput": {
    "title": "Synthetic replay and half-range batch",
    "profiles": [
      {
        "id": "sensor",
        "description": "Environmental sensor telemetry temperature humidity sample counter",
        "bits": 8,
        "start": 250
      },
      {
        "id": "build",
        "description": "Software build job execution pipeline event sequence counter",
        "bits": 16,
        "start": 65530
      }
    ],
    "records": [
      {
        "id": "t4",
        "note": "Environmental sensor temperature humidity telemetry sample",
        "value": 122
      },
      {
        "id": "b4",
        "note": "Software build job execution pipeline event",
        "value": 4
      },
      {
        "id": "t5",
        "note": "Temperature humidity sensor environmental telemetry sample",
        "value": 249
      },
      {
        "id": "b5",
        "note": "Execution event for software pipeline build job",
        "value": 4
      },
      {
        "id": "t6",
        "note": "Environmental telemetry temperature sensor sample",
        "value": 250
      },
      {
        "id": "b6",
        "note": "Software job execution build pipeline event counter",
        "value": 5
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Environmental sensor temperature humidity telemetry sample",
      "resource": "sensor",
      "aiResource": "sensor",
      "evidence": [
        {
          "resource": "sensor",
          "score": 0.9183244029449211
        },
        {
          "resource": "build",
          "score": 0.07698175611784373
        }
      ],
      "value": 251,
      "decision": "approve",
      "note": "=SUM(1,2)\nChecked \"source\", not reset."
    },
    {
      "index": 1,
      "text": "Software build job execution pipeline event",
      "resource": "build",
      "aiResource": "build",
      "evidence": [
        {
          "resource": "build",
          "score": 0.8507227635489714
        },
        {
          "resource": "sensor",
          "score": 0.007384176168414268
        }
      ],
      "value": 4,
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Temperature humidity sensor environmental telemetry sample",
      "resource": "sensor",
      "aiResource": "sensor",
      "evidence": [
        {
          "resource": "sensor",
          "score": 0.9220752549501394
        },
        {
          "resource": "build",
          "score": 0.07101558052403094
        }
      ],
      "value": 249,
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "text": "Execution event for software pipeline build job",
      "resource": "build",
      "aiResource": "build",
      "evidence": [
        {
          "resource": "build",
          "score": 0.8109356933251138
        },
        {
          "resource": "sensor",
          "score": -0.001244003489371136
        }
      ],
      "value": 4,
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "text": "Environmental telemetry temperature sensor sample",
      "resource": "sensor",
      "aiResource": "sensor",
      "evidence": [
        {
          "resource": "sensor",
          "score": 0.7950086940282443
        },
        {
          "resource": "build",
          "score": 0.11355842579487473
        }
      ],
      "value": 250,
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "text": "Software job execution build pipeline event counter",
      "resource": "build",
      "aiResource": "build",
      "evidence": [
        {
          "resource": "build",
          "score": 0.9649118384324994
        },
        {
          "resource": "sensor",
          "score": 0.16994864971759988
        }
      ],
      "value": 5,
      "decision": "approve",
      "note": ""
    }
  ],
  "analysis": {
    "checks": [
      {
        "index": 0,
        "id": "t4",
        "profile": "sensor",
        "bits": 8,
        "value": 251,
        "reference": 250,
        "status": "newer",
        "delta": 1,
        "wrap": false,
        "reason": "Forward within the half-range; advances the reviewed reference.",
        "rawAccepted": true
      },
      {
        "index": 1,
        "id": "b4",
        "profile": "build",
        "bits": 16,
        "value": 4,
        "reference": 65530,
        "status": "newer",
        "delta": 10,
        "wrap": true,
        "reason": "Forward within the half-range; advances the reviewed reference.",
        "rawAccepted": false
      },
      {
        "index": 2,
        "id": "t5",
        "profile": "sensor",
        "bits": 8,
        "value": 249,
        "reference": 251,
        "status": "stale",
        "delta": 254,
        "wrap": false,
        "reason": "Behind the current reference under the half-range assumption; does not advance.",
        "rawAccepted": false
      },
      {
        "index": 3,
        "id": "b5",
        "profile": "build",
        "bits": 16,
        "value": 4,
        "reference": 4,
        "status": "duplicate",
        "delta": 0,
        "wrap": false,
        "reason": "Same as the current reference; does not advance.",
        "rawAccepted": false
      },
      {
        "index": 4,
        "id": "t6",
        "profile": "sensor",
        "bits": 8,
        "value": 250,
        "reference": 251,
        "status": "stale",
        "delta": 255,
        "wrap": false,
        "reason": "Behind the current reference under the half-range assumption; does not advance.",
        "rawAccepted": false
      },
      {
        "index": 5,
        "id": "b6",
        "profile": "build",
        "bits": 16,
        "value": 5,
        "reference": 4,
        "status": "newer",
        "delta": 1,
        "wrap": false,
        "reason": "Forward within the half-range; advances the reviewed reference.",
        "rawAccepted": false
      }
    ],
    "streams": [
      {
        "id": "sensor",
        "bits": 8,
        "start": 250,
        "end": 251,
        "withheld": false,
        "records": 3
      },
      {
        "id": "build",
        "bits": 16,
        "start": 65530,
        "end": 5,
        "withheld": false,
        "records": 3
      }
    ],
    "accepted": 3,
    "rawAccepted": 1,
    "wraps": 1,
    "disagreements": 2,
    "held": 0,
    "ambiguous": 0,
    "invalid": 0
  }
}

```

