# Session Harbor — reviewed activity sessions

Synthetic repair studio observations. Session spans are not labor hours.

Observed first-to-last spans only: not measured labor, focus, productivity or billing time. Single events have zero span. Splitting on every project switch may fragment genuine multitasking. Equality at the idle threshold stays together. Held events form barriers for the same reviewed actor; both comparisons use identical approved records. UTC times may cross midnight. Human review is mandatory: semantic similarity does not prove project identity.

## Computed comparison
{
  "sessions": 3,
  "idleOnlySessions": 2,
  "mixedBaselineSessions": 1,
  "observedMinutes": 40,
  "idleOnlyMinutes": 45,
  "singleEventSessions": 0
}

## Sessions
- s1 / B / bike: 2026-11-02T23:50:00Z → 2026-11-03T00:05:00Z; 15 observed minutes; events r1, r2
- s2 / B / bread: 2026-11-03T00:10:00Z → 2026-11-03T00:20:00Z; 10 observed minutes; events r3, r4
- s3 / C / backup: 2026-11-03T08:00:00Z → 2026-11-03T08:15:00Z; 15 observed minutes; events r5, r6

## Complete original and reviewed event audit
### r1
Fixing a flat bicycle tire
Original B at 2026-11-02T23:50:00Z
Reviewed B at 2026-11-02T23:50:00Z; approve; project bike; proposal bike


### r2
Patching the inner tube of a bicycle
Original B at 2026-11-03T00:05:00Z
Reviewed B at 2026-11-03T00:05:00Z; approve; project bike; proposal bike


### r3
Mixing sourdough for fresh loaves
Original B at 2026-11-03T00:10:00Z
Reviewed B at 2026-11-03T00:10:00Z; approve; project bread; proposal bread


### r4
Kneading bread dough
Original B at 2026-11-03T00:20:00Z
Reviewed B at 2026-11-03T00:20:00Z; approve; project bread; proposal bread


### r5
Recovering files from the backup archive
Original C at 2026-11-03T08:00:00Z
Reviewed C at 2026-11-03T08:00:00Z; approve; project backup; proposal backup


### r6
Restoring saved computer documents
Original C at 2026-11-03T08:15:00Z
Reviewed C at 2026-11-03T08:15:00Z; approve; project backup; proposal backup

