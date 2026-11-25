# Synthetic dispatch worksheet

3 approved / 0 held. 10 occurrence rows versus 5 distinct-only rows. 5 rows lost by that shortcut. Snapshot counts, not AI accuracy.

## unfulfilled — approve

Source: Cancel one ordered copy for each dispatched copy. Keep the remaining unfulfilled items from the order export.

Reviewer: 

Operation: subtract

- left/r2: "Blue mug"
- left/r3: "Blue mug"
- left/r5: "Spoon"

## agreed — approve

Source: Find shared occurrences between the two counts, pairing matching copies one-to-one and keeping the smaller quantity.

Reviewer: 

Operation: overlap

- left/r1: "Blue mug"
- left/r2: "Blue mug"
- left/r3: "Tea tin"

## all-scans — approve

Source: Append all scans from both shifts into a single list. Keep every repeated occurrence; do not deduplicate.

Reviewer: 

Operation: combine

- left/r1: "Spoon"
- left/r2: "Spoon"
- right/r1: "Spoon"
- right/r2: "Tea tin"
