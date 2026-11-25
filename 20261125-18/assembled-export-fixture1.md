# Synthetic lab response audit

Counting worksheet, not an accuracy claim. 12 originals preserved; 0 requests held.

## answer-variety — approve

Source: Count distinct non-null response values, removing repeated identical typed answers.

Reviewer: 

Rule: distinct; count 4 versus truthy baseline 1.

- r1: 0 → include / First distinct non-null value
- r2: 0 → exclude / Duplicate typed value
- r3: false → include / First distinct non-null value
- r4: "0" → include / First distinct non-null value
- r5: "" → include / First distinct non-null value
- r6: null → exclude / Explicit null

## observed-answers — approve

Source: Count non-null observations including zero and false. Repeated answers each contribute one.

Reviewer: 

Rule: present; count 5 versus truthy baseline 1.

- r1: 0 → include / Non-null value
- r2: 0 → include / Non-null value
- r3: false → include / Non-null value
- r4: "0" → include / Non-null value
- r5: "" → include / Non-null value
- r6: null → exclude / Explicit null

## empty-panel — approve

Source: Total rows in this panel, regardless of whether a value is missing.

Reviewer: 

Rule: rows; count 0 versus truthy baseline 0.


