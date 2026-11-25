# Synthetic registration audit

Counting worksheet, not an accuracy claim. 18 originals preserved; 0 requests held.

## registrations — approve

Source: Total number of registration records, including those whose department field is missing.

Reviewer: 

Rule: rows; count 6 versus truthy baseline 2.

- r1: "Design" → include / Every source row
- r2: null → include / Every source row
- r3: "Design" → include / Every source row
- r4: "" → include / Every source row
- r5: 0 → include / Every source row
- r6: false → include / Every source row

## filled-departments — approve

Source: How many department values are non-null? Include repeated values, empty strings, zero and false.

Reviewer: 

Rule: present; count 5 versus truthy baseline 2.

- r1: "Design" → include / Non-null value
- r2: null → exclude / Explicit null
- r3: "Design" → include / Non-null value
- r4: "" → include / Non-null value
- r5: 0 → include / Non-null value
- r6: false → include / Non-null value

## distinct-departments — approve

Source: Number of distinct non-null department values. Count each different typed value once, excluding missing nulls.

Reviewer: 

Rule: distinct; count 4 versus truthy baseline 2.

- r1: "Design" → include / First distinct non-null value
- r2: null → exclude / Explicit null
- r3: "Design" → exclude / Duplicate typed value
- r4: "" → include / First distinct non-null value
- r5: 0 → include / First distinct non-null value
- r6: false → include / First distinct non-null value
