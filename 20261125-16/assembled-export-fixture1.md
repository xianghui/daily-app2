# Synthetic print queue handoff

3 approved / 0 held. 11 occurrence rows versus 4 distinct-only rows. 7 rows lost by that shortcut. Snapshot counts, not AI accuracy.

## merged-queue — approve

Source: Append all rows from both print queues into one list, preserving every repeated occurrence from both sources.

Reviewer: 

Operation: combine

- left/r1: "Map"
- left/r2: "Map"
- left/r3: "Guide"
- right/r1: "Map"
- right/r2: "Guide"
- right/r3: "Guide"

## not-printed — approve

Source: Subtract printed copies from requested copies. Each printed copy cancels one requested copy; keep leftover requests only.

Reviewer: 

Operation: subtract

- left/r2: "Map"
- left/r4: "Guide"
- left/r5: "Guide"

## agreed-copies — approve

Source: Return only shared copies present in both export lists, matching one occurrence against one occurrence and taking the smaller count.

Reviewer: 

Operation: overlap

- left/r1: "Map"
- left/r3: "Guide"
