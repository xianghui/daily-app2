# Synthetic autumn outreach

Baseline appends Z to every local time and ignores venue/time-zone transitions. Counts compare these exact same original events, not measured time savings. Duration is elapsed time, not wall-clock duration. Browser IANA data defines offsets; keep browser/OS current. UTC calendar does not recur or send invitations.

STATE: ready | 3 resolved; 1 held; 1 repeated; 1 nonexistent.

Baseline silently guesses 4 UTC instants; 2 resolved instants differ from local-as-UTC guesses.

ny-fold | Dental check-in | clinic America/New_York | 2026-11-01T01:30 | 2026-11-01T06:30:00.000Z → 2026-11-01T07:00:00.000Z
Candidates: 2026-11-01T05:30:00.000Z (UTC offset -240m), 2026-11-01T06:30:00.000Z (UTC offset -300m)

uk-gap | Painting exhibition setup | gallery Europe/London | 2026-03-29T01:30 | HELD
Candidates: none

ny-normal | Patient follow-up | clinic America/New_York | 2026-11-02T10:00 | 2026-11-02T15:00:00.000Z → 2026-11-02T15:45:00.000Z
Candidates: 2026-11-02T15:00:00.000Z (UTC offset -300m)

uk-normal | Gallery opening briefing | gallery Europe/London | 2026-11-02T10:00 | 2026-11-02T10:00:00.000Z → 2026-11-02T10:30:00.000Z
Candidates: 2026-11-02T10:00:00.000Z (UTC offset 0m)

## Complete original and reviewed audit

{
  "schema": "wallclock-desk/1",
  "appliedAt": "2026-11-22T20:12:04.067Z",
  "originalInput": {
    "title": "Synthetic autumn outreach",
    "preventOverlap": true,
    "venues": [
      {
        "id": "clinic",
        "description": "New York dental clinic patient consultation room",
        "zone": "America/New_York"
      },
      {
        "id": "gallery",
        "description": "London art gallery painting exhibition hall",
        "zone": "Europe/London"
      }
    ],
    "records": [
      {
        "id": "ny-fold",
        "title": "Dental check-in",
        "venueNote": "Dental patient consultation clinic in New York",
        "local": "2026-11-01T01:30",
        "minutes": 30
      },
      {
        "id": "uk-gap",
        "title": "Painting exhibition setup",
        "venueNote": "London painting art gallery exhibition",
        "local": "2026-03-29T01:30",
        "minutes": 60
      },
      {
        "id": "ny-normal",
        "title": "Patient follow-up",
        "venueNote": "New York dental clinic consultation",
        "local": "2026-11-02T10:00",
        "minutes": 45
      },
      {
        "id": "uk-normal",
        "title": "Gallery opening briefing",
        "venueNote": "London art exhibition gallery hall",
        "local": "2026-11-02T10:00",
        "minutes": 30
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Dental patient consultation clinic in New York",
      "resource": "clinic",
      "aiResource": "clinic",
      "evidence": [
        {
          "resource": "clinic",
          "score": 0.8860029173366818
        },
        {
          "resource": "gallery",
          "score": 0.1456162210430615
        }
      ],
      "fold": "later",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "London painting art gallery exhibition",
      "resource": "gallery",
      "aiResource": "gallery",
      "evidence": [
        {
          "resource": "gallery",
          "score": 0.866388629312886
        },
        {
          "resource": "clinic",
          "score": 0.21348251777105157
        }
      ],
      "fold": "",
      "decision": "reject",
      "note": ""
    },
    {
      "index": 2,
      "text": "New York dental clinic consultation",
      "resource": "clinic",
      "aiResource": "clinic",
      "evidence": [
        {
          "resource": "clinic",
          "score": 0.8729951146725793
        },
        {
          "resource": "gallery",
          "score": 0.13260225514713728
        }
      ],
      "fold": "",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "text": "London art exhibition gallery hall",
      "resource": "gallery",
      "aiResource": "gallery",
      "evidence": [
        {
          "resource": "gallery",
          "score": 0.9696557094508855
        },
        {
          "resource": "clinic",
          "score": 0.2881180426809901
        }
      ],
      "fold": "",
      "decision": "approve",
      "note": ""
    }
  ],
  "analysis": {
    "status": "ready",
    "events": [
      {
        "id": "ny-fold",
        "title": "Dental check-in",
        "local": "2026-11-01T01:30",
        "minutes": 30,
        "venue": "clinic",
        "zone": "America/New_York",
        "held": false,
        "resolution": {
          "kind": "fold",
          "candidates": [
            {
              "utc": "2026-11-01T05:30:00.000Z",
              "offsetMinutes": -240
            },
            {
              "utc": "2026-11-01T06:30:00.000Z",
              "offsetMinutes": -300
            }
          ]
        },
        "choice": "later",
        "issue": "",
        "start": "2026-11-01T06:30:00.000Z",
        "end": "2026-11-01T07:00:00.000Z",
        "offsetMinutes": -300,
        "naiveUtc": "2026-11-01T01:30:00.000Z"
      },
      {
        "id": "uk-gap",
        "title": "Painting exhibition setup",
        "local": "2026-03-29T01:30",
        "minutes": 60,
        "venue": "gallery",
        "zone": "Europe/London",
        "held": true,
        "resolution": {
          "kind": "gap",
          "candidates": []
        },
        "choice": "",
        "issue": "",
        "start": null,
        "end": null,
        "offsetMinutes": null,
        "naiveUtc": "2026-03-29T01:30:00.000Z"
      },
      {
        "id": "ny-normal",
        "title": "Patient follow-up",
        "local": "2026-11-02T10:00",
        "minutes": 45,
        "venue": "clinic",
        "zone": "America/New_York",
        "held": false,
        "resolution": {
          "kind": "unique",
          "candidates": [
            {
              "utc": "2026-11-02T15:00:00.000Z",
              "offsetMinutes": -300
            }
          ]
        },
        "choice": "",
        "issue": "",
        "start": "2026-11-02T15:00:00.000Z",
        "end": "2026-11-02T15:45:00.000Z",
        "offsetMinutes": -300,
        "naiveUtc": "2026-11-02T10:00:00.000Z"
      },
      {
        "id": "uk-normal",
        "title": "Gallery opening briefing",
        "local": "2026-11-02T10:00",
        "minutes": 30,
        "venue": "gallery",
        "zone": "Europe/London",
        "held": false,
        "resolution": {
          "kind": "unique",
          "candidates": [
            {
              "utc": "2026-11-02T10:00:00.000Z",
              "offsetMinutes": 0
            }
          ]
        },
        "choice": "",
        "issue": "",
        "start": "2026-11-02T10:00:00.000Z",
        "end": "2026-11-02T10:30:00.000Z",
        "offsetMinutes": 0,
        "naiveUtc": "2026-11-02T10:00:00.000Z"
      }
    ],
    "issues": [],
    "conflicts": [],
    "held": 1,
    "folds": 1,
    "gaps": 1,
    "scheduled": 3,
    "shiftedFromNaive": 2,
    "baselineSilentGuesses": 4,
    "scope": "Baseline appends Z to every local time and ignores venue/time-zone transitions. Counts compare these exact same original events, not measured time savings. Duration is elapsed time, not wall-clock duration. Browser IANA data defines offsets; keep browser/OS current. UTC calendar does not recur or send invitations."
  }
}

