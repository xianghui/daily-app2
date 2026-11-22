# Synthetic building maintenance coordination

Exact intersection of reviewed fixed-day availability cadences, not monthly/weekday recurrence. Day zero is the supplied anchor. Baseline takes the latest individual next date without rechecking others. Blackouts remove whole dates globally. Held requirements withhold their entire group. Groups are independent: no cross-group capacity, duration or live vendor availability is modeled. Dates are worksheets, not bookings.

ANCHOR 2026-11-01 | HORIZON 2026-11-01 through 2026-12-31 | BLACKOUTS 2026-11-20

1 ready groups; 1 incompatible; 0 no window; 0 held. Baseline invalid for 2 of 2 fully reviewed groups.

Shared shutdown [ready]
Requirements: r1, r2
First shared date: 2026-12-14
Shared dates: 2026-12-14
Latest-next baseline: 2026-11-04; violating sources: r1
Held sources: 
Blackout exclusions: 2026-11-20
Conflict witnesses: 

Hoist visit [incompatible]
Requirements: r3, r4
First shared date: none
Shared dates: none
Latest-next baseline: 2026-11-02; violating sources: r4
Held sources: 
Blackout exclusions: 
Conflict witnesses: r3 vs r4: phases differ modulo gcd 2 (1 vs 0)

## Complete original and reviewed audit

{
  "schema": "window-concord/1",
  "appliedAt": "2026-11-22T21:11:32.330Z",
  "originalInput": {
    "title": "Synthetic building maintenance coordination",
    "anchor": "2026-11-01",
    "start": "2026-11-01",
    "end": "2026-12-31",
    "blackouts": [
      "2026-11-20"
    ],
    "calendars": [
      {
        "id": "power",
        "description": "Electrical switchboard inspection electrician power circuit panel",
        "period": 6,
        "phase": 1
      },
      {
        "id": "air",
        "description": "Ventilation duct filter inspection air handling HVAC",
        "period": 8,
        "phase": 3
      },
      {
        "id": "lift",
        "description": "Elevator lift mechanical inspection cabin hoist",
        "period": 4,
        "phase": 0
      }
    ],
    "records": [
      {
        "id": "r1",
        "group": "Shared shutdown",
        "note": "Electrician checking the power switchboard circuit panel"
      },
      {
        "id": "r2",
        "group": "Shared shutdown",
        "note": "HVAC air handling ventilation duct filter check"
      },
      {
        "id": "r3",
        "group": "Hoist visit",
        "note": "Electrical power panel switchboard inspection"
      },
      {
        "id": "r4",
        "group": "Hoist visit",
        "note": "Elevator lift hoist cabin mechanical inspection"
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Electrician checking the power switchboard circuit panel",
      "resource": "power",
      "aiResource": "power",
      "evidence": [
        {
          "resource": "power",
          "score": 0.8496536231322207
        },
        {
          "resource": "lift",
          "score": 0.3215627354129055
        },
        {
          "resource": "air",
          "score": 0.14257723292093438
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "HVAC air handling ventilation duct filter check",
      "resource": "air",
      "aiResource": "air",
      "evidence": [
        {
          "resource": "air",
          "score": 0.9115453998867344
        },
        {
          "resource": "lift",
          "score": 0.37546585641435715
        },
        {
          "resource": "power",
          "score": 0.19461381234598668
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Electrical power panel switchboard inspection",
      "resource": "power",
      "aiResource": "power",
      "evidence": [
        {
          "resource": "power",
          "score": 0.9247783631675833
        },
        {
          "resource": "lift",
          "score": 0.39803962021621303
        },
        {
          "resource": "air",
          "score": 0.27270404569645573
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "text": "Elevator lift hoist cabin mechanical inspection",
      "resource": "lift",
      "aiResource": "lift",
      "evidence": [
        {
          "resource": "lift",
          "score": 0.9646748927062153
        },
        {
          "resource": "air",
          "score": 0.48236253050275446
        },
        {
          "resource": "power",
          "score": 0.4754554971720736
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "analysis": {
    "groups": [
      {
        "group": "Shared shutdown",
        "status": "ready",
        "sources": [
          "r1",
          "r2"
        ],
        "heldSources": [],
        "calendars": [
          {
            "id": "power",
            "description": "Electrical switchboard inspection electrician power circuit panel",
            "period": 6,
            "phase": 1,
            "source": "r1"
          },
          {
            "id": "air",
            "description": "Ventilation duct filter inspection air handling HVAC",
            "period": 8,
            "phase": 3,
            "source": "r2"
          }
        ],
        "cycleDays": 24,
        "witnesses": [],
        "individualNext": [
          {
            "source": "r1",
            "calendar": "power",
            "next": "2026-11-02"
          },
          {
            "source": "r2",
            "calendar": "air",
            "next": "2026-11-04"
          }
        ],
        "baselineDate": "2026-11-04",
        "baselineViolations": [
          "r1"
        ],
        "baselineBlackout": false,
        "baselineOutsideHorizon": false,
        "rawDates": [
          "2026-11-20",
          "2026-12-14"
        ],
        "excludedByBlackout": [
          "2026-11-20"
        ],
        "dates": [
          "2026-12-14"
        ],
        "next": "2026-12-14"
      },
      {
        "group": "Hoist visit",
        "status": "incompatible",
        "sources": [
          "r3",
          "r4"
        ],
        "heldSources": [],
        "calendars": [
          {
            "id": "power",
            "description": "Electrical switchboard inspection electrician power circuit panel",
            "period": 6,
            "phase": 1,
            "source": "r3"
          },
          {
            "id": "lift",
            "description": "Elevator lift mechanical inspection cabin hoist",
            "period": 4,
            "phase": 0,
            "source": "r4"
          }
        ],
        "cycleDays": 12,
        "witnesses": [
          {
            "first": "r3",
            "second": "r4",
            "firstCalendar": "power",
            "secondCalendar": "lift",
            "gcd": 2,
            "firstResidue": 1,
            "secondResidue": 0
          }
        ],
        "individualNext": [
          {
            "source": "r3",
            "calendar": "power",
            "next": "2026-11-02"
          },
          {
            "source": "r4",
            "calendar": "lift",
            "next": "2026-11-01"
          }
        ],
        "baselineDate": "2026-11-02",
        "baselineViolations": [
          "r4"
        ],
        "baselineBlackout": false,
        "baselineOutsideHorizon": false,
        "rawDates": [],
        "excludedByBlackout": [],
        "dates": [],
        "next": null
      }
    ],
    "ready": 1,
    "held": 0,
    "incompatible": 1,
    "noWindow": 0,
    "baselineFailures": 2,
    "evaluatedGroups": 2,
    "sourceCount": 4,
    "scope": "Exact intersection of reviewed fixed-day availability cadences, not monthly/weekday recurrence. Day zero is the supplied anchor. Baseline takes the latest individual next date without rechecking others. Blackouts remove whole dates globally. Held requirements withhold their entire group. Groups are independent: no cross-group capacity, duration or live vendor availability is modeled. Dates are worksheets, not bookings."
  }
}

