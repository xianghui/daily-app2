# Synthetic customer-service SMS review

Similarity is not intent or factual equivalence. Review every replacement against its original. Only explicitly supplied values and segment limits are checked; consent, opt-out wording, sender IDs and carrier billing are not verified. Nothing is sent.

Common 6-byte concatenation UDH: 160/153 GSM septets or 70/67 UTF-16 code units. Extension pairs and surrogate pairs stay together. Carrier policies may differ; emoji require provider support.

SEGMENT BUDGET: 4 eligible; 0 held. Same eligible records: original 8 segments → reviewed 4. All-original total 8. Exact conditional counts, not carrier charges or measured time savings.

STATUS: ready

v1 | approve | GSM-7 · 66 units · 1 segments
Alex: appointment Tuesday 10:30. Booking V42. Reply to reschedule.

p1 | approve | GSM-7 · 54 units · 1 segments
Morgan: parcel ready West locker. Collection code P81.

v2 | approve | GSM-7 · 64 units · 1 segments
Sam: appointment Friday 09:00. Booking V93. Reply to reschedule.

p2 | approve | GSM-7 · 52 units · 1 segments
Rowan: parcel ready North desk. Collection code P24.

## Complete original and review audit

{
  "schema": "segment-post/1",
  "originalInput": {
    "title": "Synthetic customer-service SMS review",
    "maxSegments": 1,
    "templates": [
      {
        "id": "visit",
        "purpose": "Appointment reminder for a booked clinic visit or consultation",
        "body": "{name}: appointment {detail}. Booking {ref}. Reply to reschedule."
      },
      {
        "id": "parcel",
        "purpose": "Parcel delivery notification for a shipment ready for collection",
        "body": "{name}: parcel ready {detail}. Collection code {ref}."
      }
    ],
    "records": [
      {
        "id": "v1",
        "draft": "Hello Alex. This is a friendly reminder about your upcoming appointment and consultation on Tuesday 10:30. Your booking reference is V42. Please reply to this message if you need to change your visit.",
        "values": {
          "name": "Alex",
          "detail": "Tuesday 10:30",
          "ref": "V42"
        }
      },
      {
        "id": "p1",
        "draft": "Dear Morgan, we are pleased to inform you that your parcel shipment has arrived and is ready for pickup at West locker. Please use the collection code P81 when collecting your package.",
        "values": {
          "name": "Morgan",
          "detail": "West locker",
          "ref": "P81"
        }
      },
      {
        "id": "v2",
        "draft": "Hello Sam. We would like to remind you about your booked appointment visit and consultation on Friday 09:00. The booking reference is V93. Please reply if your appointment needs to be rearranged.",
        "values": {
          "name": "Sam",
          "detail": "Friday 09:00",
          "ref": "V93"
        }
      },
      {
        "id": "p2",
        "draft": "Dear Rowan, your parcel delivery is now ready for collection at North desk. Please bring the parcel collection code P24 to retrieve your shipment. Thank you for using our delivery service.",
        "values": {
          "name": "Rowan",
          "detail": "North desk",
          "ref": "P24"
        }
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "template": "visit",
      "aiTemplate": "visit",
      "evidence": [
        {
          "template": "visit",
          "score": 0.6399834947210055
        },
        {
          "template": "parcel",
          "score": 0.07282370767407377
        }
      ],
      "body": "Alex: appointment Tuesday 10:30. Booking V42. Reply to reschedule.",
      "issue": "",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "template": "parcel",
      "aiTemplate": "parcel",
      "evidence": [
        {
          "template": "parcel",
          "score": 0.5120606804360555
        },
        {
          "template": "visit",
          "score": 0.11080079279038635
        }
      ],
      "body": "Morgan: parcel ready West locker. Collection code P81.",
      "issue": "",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "template": "visit",
      "aiTemplate": "visit",
      "evidence": [
        {
          "template": "visit",
          "score": 0.6805474812358306
        },
        {
          "template": "parcel",
          "score": 0.06413181096914519
        }
      ],
      "body": "Sam: appointment Friday 09:00. Booking V93. Reply to reschedule.",
      "issue": "",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "template": "parcel",
      "aiTemplate": "parcel",
      "evidence": [
        {
          "template": "parcel",
          "score": 0.5766026927425378
        },
        {
          "template": "visit",
          "score": 0.10895123240295836
        }
      ],
      "body": "Rowan: parcel ready North desk. Collection code P24.",
      "issue": "",
      "decision": "approve",
      "note": ""
    }
  ],
  "analysis": {
    "status": "ready",
    "issues": [],
    "messages": [
      {
        "id": "v1",
        "decision": "approve",
        "body": "Alex: appointment Tuesday 10:30. Booking V42. Reply to reschedule.",
        "before": {
          "encoding": "GSM-7",
          "units": 200,
          "segments": 2,
          "partUnits": [
            153,
            47
          ],
          "nonGsm": [],
          "scope": "Common 6-byte concatenation UDH: 160/153 GSM septets or 70/67 UTF-16 code units. Extension pairs and surrogate pairs stay together. Carrier policies may differ; emoji require provider support."
        },
        "after": {
          "encoding": "GSM-7",
          "units": 66,
          "segments": 1,
          "partUnits": [
            66
          ],
          "nonGsm": [],
          "scope": "Common 6-byte concatenation UDH: 160/153 GSM septets or 70/67 UTF-16 code units. Extension pairs and surrogate pairs stay together. Carrier policies may differ; emoji require provider support."
        },
        "issues": []
      },
      {
        "id": "p1",
        "decision": "approve",
        "body": "Morgan: parcel ready West locker. Collection code P81.",
        "before": {
          "encoding": "GSM-7",
          "units": 184,
          "segments": 2,
          "partUnits": [
            153,
            31
          ],
          "nonGsm": [],
          "scope": "Common 6-byte concatenation UDH: 160/153 GSM septets or 70/67 UTF-16 code units. Extension pairs and surrogate pairs stay together. Carrier policies may differ; emoji require provider support."
        },
        "after": {
          "encoding": "GSM-7",
          "units": 54,
          "segments": 1,
          "partUnits": [
            54
          ],
          "nonGsm": [],
          "scope": "Common 6-byte concatenation UDH: 160/153 GSM septets or 70/67 UTF-16 code units. Extension pairs and surrogate pairs stay together. Carrier policies may differ; emoji require provider support."
        },
        "issues": []
      },
      {
        "id": "v2",
        "decision": "approve",
        "body": "Sam: appointment Friday 09:00. Booking V93. Reply to reschedule.",
        "before": {
          "encoding": "GSM-7",
          "units": 195,
          "segments": 2,
          "partUnits": [
            153,
            42
          ],
          "nonGsm": [],
          "scope": "Common 6-byte concatenation UDH: 160/153 GSM septets or 70/67 UTF-16 code units. Extension pairs and surrogate pairs stay together. Carrier policies may differ; emoji require provider support."
        },
        "after": {
          "encoding": "GSM-7",
          "units": 64,
          "segments": 1,
          "partUnits": [
            64
          ],
          "nonGsm": [],
          "scope": "Common 6-byte concatenation UDH: 160/153 GSM septets or 70/67 UTF-16 code units. Extension pairs and surrogate pairs stay together. Carrier policies may differ; emoji require provider support."
        },
        "issues": []
      },
      {
        "id": "p2",
        "decision": "approve",
        "body": "Rowan: parcel ready North desk. Collection code P24.",
        "before": {
          "encoding": "GSM-7",
          "units": 188,
          "segments": 2,
          "partUnits": [
            153,
            35
          ],
          "nonGsm": [],
          "scope": "Common 6-byte concatenation UDH: 160/153 GSM septets or 70/67 UTF-16 code units. Extension pairs and surrogate pairs stay together. Carrier policies may differ; emoji require provider support."
        },
        "after": {
          "encoding": "GSM-7",
          "units": 52,
          "segments": 1,
          "partUnits": [
            52
          ],
          "nonGsm": [],
          "scope": "Common 6-byte concatenation UDH: 160/153 GSM septets or 70/67 UTF-16 code units. Extension pairs and surrogate pairs stay together. Carrier policies may differ; emoji require provider support."
        },
        "issues": []
      }
    ],
    "held": 0,
    "eligible": 4,
    "baselineAllSegments": 8,
    "baselineEligibleSegments": 8,
    "reviewedEligibleSegments": 4,
    "scope": "Common 6-byte concatenation UDH: 160/153 GSM septets or 70/67 UTF-16 code units. Extension pairs and surrogate pairs stay together. Carrier policies may differ; emoji require provider support."
  },
  "warning": "Similarity is not intent or factual equivalence. Review every replacement against its original. Only explicitly supplied values and segment limits are checked; consent, opt-out wording, sender IDs and carrier billing are not verified. Nothing is sent."
}

