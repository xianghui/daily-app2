# Maximum batch

Counting worksheet, not an accuracy claim. 960 originals preserved; 0 requests held.

## req-0 — approve

Source: Total number of registration records, including those whose department field is missing.

Reviewer: 

Rule: rows; count 40 versus truthy baseline 24.

- id-0: null → include / Every source row
- id-1: 0 → include / Every source row
- id-2: false → include / Every source row
- id-3: "" → include / Every source row
- id-4: 1 → include / Every source row
- id-5: "1" → include / Every source row
- id-6: "quoted \"value\",\n🍏" → include / Every source row
- id-7: "O'Brien" → include / Every source row
- id-8: "=FORMULA\nnext" → include / Every source row
- id-9: -3 → include / Every source row
- id-10: null → include / Every source row
- id-11: 0 → include / Every source row
- id-12: false → include / Every source row
- id-13: "" → include / Every source row
- id-14: 1 → include / Every source row
- id-15: "1" → include / Every source row
- id-16: "quoted \"value\",\n🍏" → include / Every source row
- id-17: "O'Brien" → include / Every source row
- id-18: "=FORMULA\nnext" → include / Every source row
- id-19: -3 → include / Every source row
- id-20: null → include / Every source row
- id-21: 0 → include / Every source row
- id-22: false → include / Every source row
- id-23: "" → include / Every source row
- id-24: 1 → include / Every source row
- id-25: "1" → include / Every source row
- id-26: "quoted \"value\",\n🍏" → include / Every source row
- id-27: "O'Brien" → include / Every source row
- id-28: "=FORMULA\nnext" → include / Every source row
- id-29: -3 → include / Every source row
- id-30: null → include / Every source row
- id-31: 0 → include / Every source row
- id-32: false → include / Every source row
- id-33: "" → include / Every source row
- id-34: 1 → include / Every source row
- id-35: "1" → include / Every source row
- id-36: "quoted \"value\",\n🍏" → include / Every source row
- id-37: "O'Brien" → include / Every source row
- id-38: "=FORMULA\nnext" → include / Every source row
- id-39: -3 → include / Every source row

## req-1 — approve

Source: How many department values are non-null? Include repeated values, empty strings, zero and false.

Reviewer: 

Rule: present; count 36 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / Non-null value
- id-2: false → include / Non-null value
- id-3: "" → include / Non-null value
- id-4: 1 → include / Non-null value
- id-5: "1" → include / Non-null value
- id-6: "quoted \"value\",\n🍏" → include / Non-null value
- id-7: "O'Brien" → include / Non-null value
- id-8: "=FORMULA\nnext" → include / Non-null value
- id-9: -3 → include / Non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → include / Non-null value
- id-12: false → include / Non-null value
- id-13: "" → include / Non-null value
- id-14: 1 → include / Non-null value
- id-15: "1" → include / Non-null value
- id-16: "quoted \"value\",\n🍏" → include / Non-null value
- id-17: "O'Brien" → include / Non-null value
- id-18: "=FORMULA\nnext" → include / Non-null value
- id-19: -3 → include / Non-null value
- id-20: null → exclude / Explicit null
- id-21: 0 → include / Non-null value
- id-22: false → include / Non-null value
- id-23: "" → include / Non-null value
- id-24: 1 → include / Non-null value
- id-25: "1" → include / Non-null value
- id-26: "quoted \"value\",\n🍏" → include / Non-null value
- id-27: "O'Brien" → include / Non-null value
- id-28: "=FORMULA\nnext" → include / Non-null value
- id-29: -3 → include / Non-null value
- id-30: null → exclude / Explicit null
- id-31: 0 → include / Non-null value
- id-32: false → include / Non-null value
- id-33: "" → include / Non-null value
- id-34: 1 → include / Non-null value
- id-35: "1" → include / Non-null value
- id-36: "quoted \"value\",\n🍏" → include / Non-null value
- id-37: "O'Brien" → include / Non-null value
- id-38: "=FORMULA\nnext" → include / Non-null value
- id-39: -3 → include / Non-null value

## req-2 — approve

Source: Number of distinct non-null department values. Count each different typed value once, excluding missing nulls.

Reviewer: 

Rule: distinct; count 9 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / First distinct non-null value
- id-2: false → include / First distinct non-null value
- id-3: "" → include / First distinct non-null value
- id-4: 1 → include / First distinct non-null value
- id-5: "1" → include / First distinct non-null value
- id-6: "quoted \"value\",\n🍏" → include / First distinct non-null value
- id-7: "O'Brien" → include / First distinct non-null value
- id-8: "=FORMULA\nnext" → include / First distinct non-null value
- id-9: -3 → include / First distinct non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → exclude / Duplicate typed value
- id-12: false → exclude / Duplicate typed value
- id-13: "" → exclude / Duplicate typed value
- id-14: 1 → exclude / Duplicate typed value
- id-15: "1" → exclude / Duplicate typed value
- id-16: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-17: "O'Brien" → exclude / Duplicate typed value
- id-18: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-19: -3 → exclude / Duplicate typed value
- id-20: null → exclude / Explicit null
- id-21: 0 → exclude / Duplicate typed value
- id-22: false → exclude / Duplicate typed value
- id-23: "" → exclude / Duplicate typed value
- id-24: 1 → exclude / Duplicate typed value
- id-25: "1" → exclude / Duplicate typed value
- id-26: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-27: "O'Brien" → exclude / Duplicate typed value
- id-28: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-29: -3 → exclude / Duplicate typed value
- id-30: null → exclude / Explicit null
- id-31: 0 → exclude / Duplicate typed value
- id-32: false → exclude / Duplicate typed value
- id-33: "" → exclude / Duplicate typed value
- id-34: 1 → exclude / Duplicate typed value
- id-35: "1" → exclude / Duplicate typed value
- id-36: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-37: "O'Brien" → exclude / Duplicate typed value
- id-38: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-39: -3 → exclude / Duplicate typed value

## req-3 — approve

Source: Total number of registration records, including those whose department field is missing.

Reviewer: 

Rule: rows; count 40 versus truthy baseline 24.

- id-0: null → include / Every source row
- id-1: 0 → include / Every source row
- id-2: false → include / Every source row
- id-3: "" → include / Every source row
- id-4: 1 → include / Every source row
- id-5: "1" → include / Every source row
- id-6: "quoted \"value\",\n🍏" → include / Every source row
- id-7: "O'Brien" → include / Every source row
- id-8: "=FORMULA\nnext" → include / Every source row
- id-9: -3 → include / Every source row
- id-10: null → include / Every source row
- id-11: 0 → include / Every source row
- id-12: false → include / Every source row
- id-13: "" → include / Every source row
- id-14: 1 → include / Every source row
- id-15: "1" → include / Every source row
- id-16: "quoted \"value\",\n🍏" → include / Every source row
- id-17: "O'Brien" → include / Every source row
- id-18: "=FORMULA\nnext" → include / Every source row
- id-19: -3 → include / Every source row
- id-20: null → include / Every source row
- id-21: 0 → include / Every source row
- id-22: false → include / Every source row
- id-23: "" → include / Every source row
- id-24: 1 → include / Every source row
- id-25: "1" → include / Every source row
- id-26: "quoted \"value\",\n🍏" → include / Every source row
- id-27: "O'Brien" → include / Every source row
- id-28: "=FORMULA\nnext" → include / Every source row
- id-29: -3 → include / Every source row
- id-30: null → include / Every source row
- id-31: 0 → include / Every source row
- id-32: false → include / Every source row
- id-33: "" → include / Every source row
- id-34: 1 → include / Every source row
- id-35: "1" → include / Every source row
- id-36: "quoted \"value\",\n🍏" → include / Every source row
- id-37: "O'Brien" → include / Every source row
- id-38: "=FORMULA\nnext" → include / Every source row
- id-39: -3 → include / Every source row

## req-4 — approve

Source: How many department values are non-null? Include repeated values, empty strings, zero and false.

Reviewer: 

Rule: present; count 36 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / Non-null value
- id-2: false → include / Non-null value
- id-3: "" → include / Non-null value
- id-4: 1 → include / Non-null value
- id-5: "1" → include / Non-null value
- id-6: "quoted \"value\",\n🍏" → include / Non-null value
- id-7: "O'Brien" → include / Non-null value
- id-8: "=FORMULA\nnext" → include / Non-null value
- id-9: -3 → include / Non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → include / Non-null value
- id-12: false → include / Non-null value
- id-13: "" → include / Non-null value
- id-14: 1 → include / Non-null value
- id-15: "1" → include / Non-null value
- id-16: "quoted \"value\",\n🍏" → include / Non-null value
- id-17: "O'Brien" → include / Non-null value
- id-18: "=FORMULA\nnext" → include / Non-null value
- id-19: -3 → include / Non-null value
- id-20: null → exclude / Explicit null
- id-21: 0 → include / Non-null value
- id-22: false → include / Non-null value
- id-23: "" → include / Non-null value
- id-24: 1 → include / Non-null value
- id-25: "1" → include / Non-null value
- id-26: "quoted \"value\",\n🍏" → include / Non-null value
- id-27: "O'Brien" → include / Non-null value
- id-28: "=FORMULA\nnext" → include / Non-null value
- id-29: -3 → include / Non-null value
- id-30: null → exclude / Explicit null
- id-31: 0 → include / Non-null value
- id-32: false → include / Non-null value
- id-33: "" → include / Non-null value
- id-34: 1 → include / Non-null value
- id-35: "1" → include / Non-null value
- id-36: "quoted \"value\",\n🍏" → include / Non-null value
- id-37: "O'Brien" → include / Non-null value
- id-38: "=FORMULA\nnext" → include / Non-null value
- id-39: -3 → include / Non-null value

## req-5 — approve

Source: Number of distinct non-null department values. Count each different typed value once, excluding missing nulls.

Reviewer: 

Rule: distinct; count 9 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / First distinct non-null value
- id-2: false → include / First distinct non-null value
- id-3: "" → include / First distinct non-null value
- id-4: 1 → include / First distinct non-null value
- id-5: "1" → include / First distinct non-null value
- id-6: "quoted \"value\",\n🍏" → include / First distinct non-null value
- id-7: "O'Brien" → include / First distinct non-null value
- id-8: "=FORMULA\nnext" → include / First distinct non-null value
- id-9: -3 → include / First distinct non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → exclude / Duplicate typed value
- id-12: false → exclude / Duplicate typed value
- id-13: "" → exclude / Duplicate typed value
- id-14: 1 → exclude / Duplicate typed value
- id-15: "1" → exclude / Duplicate typed value
- id-16: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-17: "O'Brien" → exclude / Duplicate typed value
- id-18: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-19: -3 → exclude / Duplicate typed value
- id-20: null → exclude / Explicit null
- id-21: 0 → exclude / Duplicate typed value
- id-22: false → exclude / Duplicate typed value
- id-23: "" → exclude / Duplicate typed value
- id-24: 1 → exclude / Duplicate typed value
- id-25: "1" → exclude / Duplicate typed value
- id-26: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-27: "O'Brien" → exclude / Duplicate typed value
- id-28: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-29: -3 → exclude / Duplicate typed value
- id-30: null → exclude / Explicit null
- id-31: 0 → exclude / Duplicate typed value
- id-32: false → exclude / Duplicate typed value
- id-33: "" → exclude / Duplicate typed value
- id-34: 1 → exclude / Duplicate typed value
- id-35: "1" → exclude / Duplicate typed value
- id-36: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-37: "O'Brien" → exclude / Duplicate typed value
- id-38: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-39: -3 → exclude / Duplicate typed value

## req-6 — approve

Source: Total number of registration records, including those whose department field is missing.

Reviewer: 

Rule: rows; count 40 versus truthy baseline 24.

- id-0: null → include / Every source row
- id-1: 0 → include / Every source row
- id-2: false → include / Every source row
- id-3: "" → include / Every source row
- id-4: 1 → include / Every source row
- id-5: "1" → include / Every source row
- id-6: "quoted \"value\",\n🍏" → include / Every source row
- id-7: "O'Brien" → include / Every source row
- id-8: "=FORMULA\nnext" → include / Every source row
- id-9: -3 → include / Every source row
- id-10: null → include / Every source row
- id-11: 0 → include / Every source row
- id-12: false → include / Every source row
- id-13: "" → include / Every source row
- id-14: 1 → include / Every source row
- id-15: "1" → include / Every source row
- id-16: "quoted \"value\",\n🍏" → include / Every source row
- id-17: "O'Brien" → include / Every source row
- id-18: "=FORMULA\nnext" → include / Every source row
- id-19: -3 → include / Every source row
- id-20: null → include / Every source row
- id-21: 0 → include / Every source row
- id-22: false → include / Every source row
- id-23: "" → include / Every source row
- id-24: 1 → include / Every source row
- id-25: "1" → include / Every source row
- id-26: "quoted \"value\",\n🍏" → include / Every source row
- id-27: "O'Brien" → include / Every source row
- id-28: "=FORMULA\nnext" → include / Every source row
- id-29: -3 → include / Every source row
- id-30: null → include / Every source row
- id-31: 0 → include / Every source row
- id-32: false → include / Every source row
- id-33: "" → include / Every source row
- id-34: 1 → include / Every source row
- id-35: "1" → include / Every source row
- id-36: "quoted \"value\",\n🍏" → include / Every source row
- id-37: "O'Brien" → include / Every source row
- id-38: "=FORMULA\nnext" → include / Every source row
- id-39: -3 → include / Every source row

## req-7 — approve

Source: How many department values are non-null? Include repeated values, empty strings, zero and false.

Reviewer: 

Rule: present; count 36 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / Non-null value
- id-2: false → include / Non-null value
- id-3: "" → include / Non-null value
- id-4: 1 → include / Non-null value
- id-5: "1" → include / Non-null value
- id-6: "quoted \"value\",\n🍏" → include / Non-null value
- id-7: "O'Brien" → include / Non-null value
- id-8: "=FORMULA\nnext" → include / Non-null value
- id-9: -3 → include / Non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → include / Non-null value
- id-12: false → include / Non-null value
- id-13: "" → include / Non-null value
- id-14: 1 → include / Non-null value
- id-15: "1" → include / Non-null value
- id-16: "quoted \"value\",\n🍏" → include / Non-null value
- id-17: "O'Brien" → include / Non-null value
- id-18: "=FORMULA\nnext" → include / Non-null value
- id-19: -3 → include / Non-null value
- id-20: null → exclude / Explicit null
- id-21: 0 → include / Non-null value
- id-22: false → include / Non-null value
- id-23: "" → include / Non-null value
- id-24: 1 → include / Non-null value
- id-25: "1" → include / Non-null value
- id-26: "quoted \"value\",\n🍏" → include / Non-null value
- id-27: "O'Brien" → include / Non-null value
- id-28: "=FORMULA\nnext" → include / Non-null value
- id-29: -3 → include / Non-null value
- id-30: null → exclude / Explicit null
- id-31: 0 → include / Non-null value
- id-32: false → include / Non-null value
- id-33: "" → include / Non-null value
- id-34: 1 → include / Non-null value
- id-35: "1" → include / Non-null value
- id-36: "quoted \"value\",\n🍏" → include / Non-null value
- id-37: "O'Brien" → include / Non-null value
- id-38: "=FORMULA\nnext" → include / Non-null value
- id-39: -3 → include / Non-null value

## req-8 — approve

Source: Number of distinct non-null department values. Count each different typed value once, excluding missing nulls.

Reviewer: 

Rule: distinct; count 9 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / First distinct non-null value
- id-2: false → include / First distinct non-null value
- id-3: "" → include / First distinct non-null value
- id-4: 1 → include / First distinct non-null value
- id-5: "1" → include / First distinct non-null value
- id-6: "quoted \"value\",\n🍏" → include / First distinct non-null value
- id-7: "O'Brien" → include / First distinct non-null value
- id-8: "=FORMULA\nnext" → include / First distinct non-null value
- id-9: -3 → include / First distinct non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → exclude / Duplicate typed value
- id-12: false → exclude / Duplicate typed value
- id-13: "" → exclude / Duplicate typed value
- id-14: 1 → exclude / Duplicate typed value
- id-15: "1" → exclude / Duplicate typed value
- id-16: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-17: "O'Brien" → exclude / Duplicate typed value
- id-18: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-19: -3 → exclude / Duplicate typed value
- id-20: null → exclude / Explicit null
- id-21: 0 → exclude / Duplicate typed value
- id-22: false → exclude / Duplicate typed value
- id-23: "" → exclude / Duplicate typed value
- id-24: 1 → exclude / Duplicate typed value
- id-25: "1" → exclude / Duplicate typed value
- id-26: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-27: "O'Brien" → exclude / Duplicate typed value
- id-28: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-29: -3 → exclude / Duplicate typed value
- id-30: null → exclude / Explicit null
- id-31: 0 → exclude / Duplicate typed value
- id-32: false → exclude / Duplicate typed value
- id-33: "" → exclude / Duplicate typed value
- id-34: 1 → exclude / Duplicate typed value
- id-35: "1" → exclude / Duplicate typed value
- id-36: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-37: "O'Brien" → exclude / Duplicate typed value
- id-38: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-39: -3 → exclude / Duplicate typed value

## req-9 — approve

Source: Total number of registration records, including those whose department field is missing.

Reviewer: 

Rule: rows; count 40 versus truthy baseline 24.

- id-0: null → include / Every source row
- id-1: 0 → include / Every source row
- id-2: false → include / Every source row
- id-3: "" → include / Every source row
- id-4: 1 → include / Every source row
- id-5: "1" → include / Every source row
- id-6: "quoted \"value\",\n🍏" → include / Every source row
- id-7: "O'Brien" → include / Every source row
- id-8: "=FORMULA\nnext" → include / Every source row
- id-9: -3 → include / Every source row
- id-10: null → include / Every source row
- id-11: 0 → include / Every source row
- id-12: false → include / Every source row
- id-13: "" → include / Every source row
- id-14: 1 → include / Every source row
- id-15: "1" → include / Every source row
- id-16: "quoted \"value\",\n🍏" → include / Every source row
- id-17: "O'Brien" → include / Every source row
- id-18: "=FORMULA\nnext" → include / Every source row
- id-19: -3 → include / Every source row
- id-20: null → include / Every source row
- id-21: 0 → include / Every source row
- id-22: false → include / Every source row
- id-23: "" → include / Every source row
- id-24: 1 → include / Every source row
- id-25: "1" → include / Every source row
- id-26: "quoted \"value\",\n🍏" → include / Every source row
- id-27: "O'Brien" → include / Every source row
- id-28: "=FORMULA\nnext" → include / Every source row
- id-29: -3 → include / Every source row
- id-30: null → include / Every source row
- id-31: 0 → include / Every source row
- id-32: false → include / Every source row
- id-33: "" → include / Every source row
- id-34: 1 → include / Every source row
- id-35: "1" → include / Every source row
- id-36: "quoted \"value\",\n🍏" → include / Every source row
- id-37: "O'Brien" → include / Every source row
- id-38: "=FORMULA\nnext" → include / Every source row
- id-39: -3 → include / Every source row

## req-10 — approve

Source: How many department values are non-null? Include repeated values, empty strings, zero and false.

Reviewer: 

Rule: present; count 36 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / Non-null value
- id-2: false → include / Non-null value
- id-3: "" → include / Non-null value
- id-4: 1 → include / Non-null value
- id-5: "1" → include / Non-null value
- id-6: "quoted \"value\",\n🍏" → include / Non-null value
- id-7: "O'Brien" → include / Non-null value
- id-8: "=FORMULA\nnext" → include / Non-null value
- id-9: -3 → include / Non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → include / Non-null value
- id-12: false → include / Non-null value
- id-13: "" → include / Non-null value
- id-14: 1 → include / Non-null value
- id-15: "1" → include / Non-null value
- id-16: "quoted \"value\",\n🍏" → include / Non-null value
- id-17: "O'Brien" → include / Non-null value
- id-18: "=FORMULA\nnext" → include / Non-null value
- id-19: -3 → include / Non-null value
- id-20: null → exclude / Explicit null
- id-21: 0 → include / Non-null value
- id-22: false → include / Non-null value
- id-23: "" → include / Non-null value
- id-24: 1 → include / Non-null value
- id-25: "1" → include / Non-null value
- id-26: "quoted \"value\",\n🍏" → include / Non-null value
- id-27: "O'Brien" → include / Non-null value
- id-28: "=FORMULA\nnext" → include / Non-null value
- id-29: -3 → include / Non-null value
- id-30: null → exclude / Explicit null
- id-31: 0 → include / Non-null value
- id-32: false → include / Non-null value
- id-33: "" → include / Non-null value
- id-34: 1 → include / Non-null value
- id-35: "1" → include / Non-null value
- id-36: "quoted \"value\",\n🍏" → include / Non-null value
- id-37: "O'Brien" → include / Non-null value
- id-38: "=FORMULA\nnext" → include / Non-null value
- id-39: -3 → include / Non-null value

## req-11 — approve

Source: Number of distinct non-null department values. Count each different typed value once, excluding missing nulls.

Reviewer: 

Rule: distinct; count 9 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / First distinct non-null value
- id-2: false → include / First distinct non-null value
- id-3: "" → include / First distinct non-null value
- id-4: 1 → include / First distinct non-null value
- id-5: "1" → include / First distinct non-null value
- id-6: "quoted \"value\",\n🍏" → include / First distinct non-null value
- id-7: "O'Brien" → include / First distinct non-null value
- id-8: "=FORMULA\nnext" → include / First distinct non-null value
- id-9: -3 → include / First distinct non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → exclude / Duplicate typed value
- id-12: false → exclude / Duplicate typed value
- id-13: "" → exclude / Duplicate typed value
- id-14: 1 → exclude / Duplicate typed value
- id-15: "1" → exclude / Duplicate typed value
- id-16: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-17: "O'Brien" → exclude / Duplicate typed value
- id-18: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-19: -3 → exclude / Duplicate typed value
- id-20: null → exclude / Explicit null
- id-21: 0 → exclude / Duplicate typed value
- id-22: false → exclude / Duplicate typed value
- id-23: "" → exclude / Duplicate typed value
- id-24: 1 → exclude / Duplicate typed value
- id-25: "1" → exclude / Duplicate typed value
- id-26: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-27: "O'Brien" → exclude / Duplicate typed value
- id-28: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-29: -3 → exclude / Duplicate typed value
- id-30: null → exclude / Explicit null
- id-31: 0 → exclude / Duplicate typed value
- id-32: false → exclude / Duplicate typed value
- id-33: "" → exclude / Duplicate typed value
- id-34: 1 → exclude / Duplicate typed value
- id-35: "1" → exclude / Duplicate typed value
- id-36: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-37: "O'Brien" → exclude / Duplicate typed value
- id-38: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-39: -3 → exclude / Duplicate typed value

## req-12 — approve

Source: Total number of registration records, including those whose department field is missing.

Reviewer: 

Rule: rows; count 40 versus truthy baseline 24.

- id-0: null → include / Every source row
- id-1: 0 → include / Every source row
- id-2: false → include / Every source row
- id-3: "" → include / Every source row
- id-4: 1 → include / Every source row
- id-5: "1" → include / Every source row
- id-6: "quoted \"value\",\n🍏" → include / Every source row
- id-7: "O'Brien" → include / Every source row
- id-8: "=FORMULA\nnext" → include / Every source row
- id-9: -3 → include / Every source row
- id-10: null → include / Every source row
- id-11: 0 → include / Every source row
- id-12: false → include / Every source row
- id-13: "" → include / Every source row
- id-14: 1 → include / Every source row
- id-15: "1" → include / Every source row
- id-16: "quoted \"value\",\n🍏" → include / Every source row
- id-17: "O'Brien" → include / Every source row
- id-18: "=FORMULA\nnext" → include / Every source row
- id-19: -3 → include / Every source row
- id-20: null → include / Every source row
- id-21: 0 → include / Every source row
- id-22: false → include / Every source row
- id-23: "" → include / Every source row
- id-24: 1 → include / Every source row
- id-25: "1" → include / Every source row
- id-26: "quoted \"value\",\n🍏" → include / Every source row
- id-27: "O'Brien" → include / Every source row
- id-28: "=FORMULA\nnext" → include / Every source row
- id-29: -3 → include / Every source row
- id-30: null → include / Every source row
- id-31: 0 → include / Every source row
- id-32: false → include / Every source row
- id-33: "" → include / Every source row
- id-34: 1 → include / Every source row
- id-35: "1" → include / Every source row
- id-36: "quoted \"value\",\n🍏" → include / Every source row
- id-37: "O'Brien" → include / Every source row
- id-38: "=FORMULA\nnext" → include / Every source row
- id-39: -3 → include / Every source row

## req-13 — approve

Source: How many department values are non-null? Include repeated values, empty strings, zero and false.

Reviewer: 

Rule: present; count 36 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / Non-null value
- id-2: false → include / Non-null value
- id-3: "" → include / Non-null value
- id-4: 1 → include / Non-null value
- id-5: "1" → include / Non-null value
- id-6: "quoted \"value\",\n🍏" → include / Non-null value
- id-7: "O'Brien" → include / Non-null value
- id-8: "=FORMULA\nnext" → include / Non-null value
- id-9: -3 → include / Non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → include / Non-null value
- id-12: false → include / Non-null value
- id-13: "" → include / Non-null value
- id-14: 1 → include / Non-null value
- id-15: "1" → include / Non-null value
- id-16: "quoted \"value\",\n🍏" → include / Non-null value
- id-17: "O'Brien" → include / Non-null value
- id-18: "=FORMULA\nnext" → include / Non-null value
- id-19: -3 → include / Non-null value
- id-20: null → exclude / Explicit null
- id-21: 0 → include / Non-null value
- id-22: false → include / Non-null value
- id-23: "" → include / Non-null value
- id-24: 1 → include / Non-null value
- id-25: "1" → include / Non-null value
- id-26: "quoted \"value\",\n🍏" → include / Non-null value
- id-27: "O'Brien" → include / Non-null value
- id-28: "=FORMULA\nnext" → include / Non-null value
- id-29: -3 → include / Non-null value
- id-30: null → exclude / Explicit null
- id-31: 0 → include / Non-null value
- id-32: false → include / Non-null value
- id-33: "" → include / Non-null value
- id-34: 1 → include / Non-null value
- id-35: "1" → include / Non-null value
- id-36: "quoted \"value\",\n🍏" → include / Non-null value
- id-37: "O'Brien" → include / Non-null value
- id-38: "=FORMULA\nnext" → include / Non-null value
- id-39: -3 → include / Non-null value

## req-14 — approve

Source: Number of distinct non-null department values. Count each different typed value once, excluding missing nulls.

Reviewer: 

Rule: distinct; count 9 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / First distinct non-null value
- id-2: false → include / First distinct non-null value
- id-3: "" → include / First distinct non-null value
- id-4: 1 → include / First distinct non-null value
- id-5: "1" → include / First distinct non-null value
- id-6: "quoted \"value\",\n🍏" → include / First distinct non-null value
- id-7: "O'Brien" → include / First distinct non-null value
- id-8: "=FORMULA\nnext" → include / First distinct non-null value
- id-9: -3 → include / First distinct non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → exclude / Duplicate typed value
- id-12: false → exclude / Duplicate typed value
- id-13: "" → exclude / Duplicate typed value
- id-14: 1 → exclude / Duplicate typed value
- id-15: "1" → exclude / Duplicate typed value
- id-16: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-17: "O'Brien" → exclude / Duplicate typed value
- id-18: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-19: -3 → exclude / Duplicate typed value
- id-20: null → exclude / Explicit null
- id-21: 0 → exclude / Duplicate typed value
- id-22: false → exclude / Duplicate typed value
- id-23: "" → exclude / Duplicate typed value
- id-24: 1 → exclude / Duplicate typed value
- id-25: "1" → exclude / Duplicate typed value
- id-26: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-27: "O'Brien" → exclude / Duplicate typed value
- id-28: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-29: -3 → exclude / Duplicate typed value
- id-30: null → exclude / Explicit null
- id-31: 0 → exclude / Duplicate typed value
- id-32: false → exclude / Duplicate typed value
- id-33: "" → exclude / Duplicate typed value
- id-34: 1 → exclude / Duplicate typed value
- id-35: "1" → exclude / Duplicate typed value
- id-36: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-37: "O'Brien" → exclude / Duplicate typed value
- id-38: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-39: -3 → exclude / Duplicate typed value

## req-15 — approve

Source: Total number of registration records, including those whose department field is missing.

Reviewer: 

Rule: rows; count 40 versus truthy baseline 24.

- id-0: null → include / Every source row
- id-1: 0 → include / Every source row
- id-2: false → include / Every source row
- id-3: "" → include / Every source row
- id-4: 1 → include / Every source row
- id-5: "1" → include / Every source row
- id-6: "quoted \"value\",\n🍏" → include / Every source row
- id-7: "O'Brien" → include / Every source row
- id-8: "=FORMULA\nnext" → include / Every source row
- id-9: -3 → include / Every source row
- id-10: null → include / Every source row
- id-11: 0 → include / Every source row
- id-12: false → include / Every source row
- id-13: "" → include / Every source row
- id-14: 1 → include / Every source row
- id-15: "1" → include / Every source row
- id-16: "quoted \"value\",\n🍏" → include / Every source row
- id-17: "O'Brien" → include / Every source row
- id-18: "=FORMULA\nnext" → include / Every source row
- id-19: -3 → include / Every source row
- id-20: null → include / Every source row
- id-21: 0 → include / Every source row
- id-22: false → include / Every source row
- id-23: "" → include / Every source row
- id-24: 1 → include / Every source row
- id-25: "1" → include / Every source row
- id-26: "quoted \"value\",\n🍏" → include / Every source row
- id-27: "O'Brien" → include / Every source row
- id-28: "=FORMULA\nnext" → include / Every source row
- id-29: -3 → include / Every source row
- id-30: null → include / Every source row
- id-31: 0 → include / Every source row
- id-32: false → include / Every source row
- id-33: "" → include / Every source row
- id-34: 1 → include / Every source row
- id-35: "1" → include / Every source row
- id-36: "quoted \"value\",\n🍏" → include / Every source row
- id-37: "O'Brien" → include / Every source row
- id-38: "=FORMULA\nnext" → include / Every source row
- id-39: -3 → include / Every source row

## req-16 — approve

Source: How many department values are non-null? Include repeated values, empty strings, zero and false.

Reviewer: 

Rule: present; count 36 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / Non-null value
- id-2: false → include / Non-null value
- id-3: "" → include / Non-null value
- id-4: 1 → include / Non-null value
- id-5: "1" → include / Non-null value
- id-6: "quoted \"value\",\n🍏" → include / Non-null value
- id-7: "O'Brien" → include / Non-null value
- id-8: "=FORMULA\nnext" → include / Non-null value
- id-9: -3 → include / Non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → include / Non-null value
- id-12: false → include / Non-null value
- id-13: "" → include / Non-null value
- id-14: 1 → include / Non-null value
- id-15: "1" → include / Non-null value
- id-16: "quoted \"value\",\n🍏" → include / Non-null value
- id-17: "O'Brien" → include / Non-null value
- id-18: "=FORMULA\nnext" → include / Non-null value
- id-19: -3 → include / Non-null value
- id-20: null → exclude / Explicit null
- id-21: 0 → include / Non-null value
- id-22: false → include / Non-null value
- id-23: "" → include / Non-null value
- id-24: 1 → include / Non-null value
- id-25: "1" → include / Non-null value
- id-26: "quoted \"value\",\n🍏" → include / Non-null value
- id-27: "O'Brien" → include / Non-null value
- id-28: "=FORMULA\nnext" → include / Non-null value
- id-29: -3 → include / Non-null value
- id-30: null → exclude / Explicit null
- id-31: 0 → include / Non-null value
- id-32: false → include / Non-null value
- id-33: "" → include / Non-null value
- id-34: 1 → include / Non-null value
- id-35: "1" → include / Non-null value
- id-36: "quoted \"value\",\n🍏" → include / Non-null value
- id-37: "O'Brien" → include / Non-null value
- id-38: "=FORMULA\nnext" → include / Non-null value
- id-39: -3 → include / Non-null value

## req-17 — approve

Source: Number of distinct non-null department values. Count each different typed value once, excluding missing nulls.

Reviewer: 

Rule: distinct; count 9 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / First distinct non-null value
- id-2: false → include / First distinct non-null value
- id-3: "" → include / First distinct non-null value
- id-4: 1 → include / First distinct non-null value
- id-5: "1" → include / First distinct non-null value
- id-6: "quoted \"value\",\n🍏" → include / First distinct non-null value
- id-7: "O'Brien" → include / First distinct non-null value
- id-8: "=FORMULA\nnext" → include / First distinct non-null value
- id-9: -3 → include / First distinct non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → exclude / Duplicate typed value
- id-12: false → exclude / Duplicate typed value
- id-13: "" → exclude / Duplicate typed value
- id-14: 1 → exclude / Duplicate typed value
- id-15: "1" → exclude / Duplicate typed value
- id-16: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-17: "O'Brien" → exclude / Duplicate typed value
- id-18: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-19: -3 → exclude / Duplicate typed value
- id-20: null → exclude / Explicit null
- id-21: 0 → exclude / Duplicate typed value
- id-22: false → exclude / Duplicate typed value
- id-23: "" → exclude / Duplicate typed value
- id-24: 1 → exclude / Duplicate typed value
- id-25: "1" → exclude / Duplicate typed value
- id-26: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-27: "O'Brien" → exclude / Duplicate typed value
- id-28: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-29: -3 → exclude / Duplicate typed value
- id-30: null → exclude / Explicit null
- id-31: 0 → exclude / Duplicate typed value
- id-32: false → exclude / Duplicate typed value
- id-33: "" → exclude / Duplicate typed value
- id-34: 1 → exclude / Duplicate typed value
- id-35: "1" → exclude / Duplicate typed value
- id-36: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-37: "O'Brien" → exclude / Duplicate typed value
- id-38: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-39: -3 → exclude / Duplicate typed value

## req-18 — approve

Source: Total number of registration records, including those whose department field is missing.

Reviewer: 

Rule: rows; count 40 versus truthy baseline 24.

- id-0: null → include / Every source row
- id-1: 0 → include / Every source row
- id-2: false → include / Every source row
- id-3: "" → include / Every source row
- id-4: 1 → include / Every source row
- id-5: "1" → include / Every source row
- id-6: "quoted \"value\",\n🍏" → include / Every source row
- id-7: "O'Brien" → include / Every source row
- id-8: "=FORMULA\nnext" → include / Every source row
- id-9: -3 → include / Every source row
- id-10: null → include / Every source row
- id-11: 0 → include / Every source row
- id-12: false → include / Every source row
- id-13: "" → include / Every source row
- id-14: 1 → include / Every source row
- id-15: "1" → include / Every source row
- id-16: "quoted \"value\",\n🍏" → include / Every source row
- id-17: "O'Brien" → include / Every source row
- id-18: "=FORMULA\nnext" → include / Every source row
- id-19: -3 → include / Every source row
- id-20: null → include / Every source row
- id-21: 0 → include / Every source row
- id-22: false → include / Every source row
- id-23: "" → include / Every source row
- id-24: 1 → include / Every source row
- id-25: "1" → include / Every source row
- id-26: "quoted \"value\",\n🍏" → include / Every source row
- id-27: "O'Brien" → include / Every source row
- id-28: "=FORMULA\nnext" → include / Every source row
- id-29: -3 → include / Every source row
- id-30: null → include / Every source row
- id-31: 0 → include / Every source row
- id-32: false → include / Every source row
- id-33: "" → include / Every source row
- id-34: 1 → include / Every source row
- id-35: "1" → include / Every source row
- id-36: "quoted \"value\",\n🍏" → include / Every source row
- id-37: "O'Brien" → include / Every source row
- id-38: "=FORMULA\nnext" → include / Every source row
- id-39: -3 → include / Every source row

## req-19 — approve

Source: How many department values are non-null? Include repeated values, empty strings, zero and false.

Reviewer: 

Rule: present; count 36 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / Non-null value
- id-2: false → include / Non-null value
- id-3: "" → include / Non-null value
- id-4: 1 → include / Non-null value
- id-5: "1" → include / Non-null value
- id-6: "quoted \"value\",\n🍏" → include / Non-null value
- id-7: "O'Brien" → include / Non-null value
- id-8: "=FORMULA\nnext" → include / Non-null value
- id-9: -3 → include / Non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → include / Non-null value
- id-12: false → include / Non-null value
- id-13: "" → include / Non-null value
- id-14: 1 → include / Non-null value
- id-15: "1" → include / Non-null value
- id-16: "quoted \"value\",\n🍏" → include / Non-null value
- id-17: "O'Brien" → include / Non-null value
- id-18: "=FORMULA\nnext" → include / Non-null value
- id-19: -3 → include / Non-null value
- id-20: null → exclude / Explicit null
- id-21: 0 → include / Non-null value
- id-22: false → include / Non-null value
- id-23: "" → include / Non-null value
- id-24: 1 → include / Non-null value
- id-25: "1" → include / Non-null value
- id-26: "quoted \"value\",\n🍏" → include / Non-null value
- id-27: "O'Brien" → include / Non-null value
- id-28: "=FORMULA\nnext" → include / Non-null value
- id-29: -3 → include / Non-null value
- id-30: null → exclude / Explicit null
- id-31: 0 → include / Non-null value
- id-32: false → include / Non-null value
- id-33: "" → include / Non-null value
- id-34: 1 → include / Non-null value
- id-35: "1" → include / Non-null value
- id-36: "quoted \"value\",\n🍏" → include / Non-null value
- id-37: "O'Brien" → include / Non-null value
- id-38: "=FORMULA\nnext" → include / Non-null value
- id-39: -3 → include / Non-null value

## req-20 — approve

Source: Number of distinct non-null department values. Count each different typed value once, excluding missing nulls.

Reviewer: 

Rule: distinct; count 9 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / First distinct non-null value
- id-2: false → include / First distinct non-null value
- id-3: "" → include / First distinct non-null value
- id-4: 1 → include / First distinct non-null value
- id-5: "1" → include / First distinct non-null value
- id-6: "quoted \"value\",\n🍏" → include / First distinct non-null value
- id-7: "O'Brien" → include / First distinct non-null value
- id-8: "=FORMULA\nnext" → include / First distinct non-null value
- id-9: -3 → include / First distinct non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → exclude / Duplicate typed value
- id-12: false → exclude / Duplicate typed value
- id-13: "" → exclude / Duplicate typed value
- id-14: 1 → exclude / Duplicate typed value
- id-15: "1" → exclude / Duplicate typed value
- id-16: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-17: "O'Brien" → exclude / Duplicate typed value
- id-18: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-19: -3 → exclude / Duplicate typed value
- id-20: null → exclude / Explicit null
- id-21: 0 → exclude / Duplicate typed value
- id-22: false → exclude / Duplicate typed value
- id-23: "" → exclude / Duplicate typed value
- id-24: 1 → exclude / Duplicate typed value
- id-25: "1" → exclude / Duplicate typed value
- id-26: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-27: "O'Brien" → exclude / Duplicate typed value
- id-28: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-29: -3 → exclude / Duplicate typed value
- id-30: null → exclude / Explicit null
- id-31: 0 → exclude / Duplicate typed value
- id-32: false → exclude / Duplicate typed value
- id-33: "" → exclude / Duplicate typed value
- id-34: 1 → exclude / Duplicate typed value
- id-35: "1" → exclude / Duplicate typed value
- id-36: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-37: "O'Brien" → exclude / Duplicate typed value
- id-38: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-39: -3 → exclude / Duplicate typed value

## req-21 — approve

Source: Total number of registration records, including those whose department field is missing.

Reviewer: 

Rule: rows; count 40 versus truthy baseline 24.

- id-0: null → include / Every source row
- id-1: 0 → include / Every source row
- id-2: false → include / Every source row
- id-3: "" → include / Every source row
- id-4: 1 → include / Every source row
- id-5: "1" → include / Every source row
- id-6: "quoted \"value\",\n🍏" → include / Every source row
- id-7: "O'Brien" → include / Every source row
- id-8: "=FORMULA\nnext" → include / Every source row
- id-9: -3 → include / Every source row
- id-10: null → include / Every source row
- id-11: 0 → include / Every source row
- id-12: false → include / Every source row
- id-13: "" → include / Every source row
- id-14: 1 → include / Every source row
- id-15: "1" → include / Every source row
- id-16: "quoted \"value\",\n🍏" → include / Every source row
- id-17: "O'Brien" → include / Every source row
- id-18: "=FORMULA\nnext" → include / Every source row
- id-19: -3 → include / Every source row
- id-20: null → include / Every source row
- id-21: 0 → include / Every source row
- id-22: false → include / Every source row
- id-23: "" → include / Every source row
- id-24: 1 → include / Every source row
- id-25: "1" → include / Every source row
- id-26: "quoted \"value\",\n🍏" → include / Every source row
- id-27: "O'Brien" → include / Every source row
- id-28: "=FORMULA\nnext" → include / Every source row
- id-29: -3 → include / Every source row
- id-30: null → include / Every source row
- id-31: 0 → include / Every source row
- id-32: false → include / Every source row
- id-33: "" → include / Every source row
- id-34: 1 → include / Every source row
- id-35: "1" → include / Every source row
- id-36: "quoted \"value\",\n🍏" → include / Every source row
- id-37: "O'Brien" → include / Every source row
- id-38: "=FORMULA\nnext" → include / Every source row
- id-39: -3 → include / Every source row

## req-22 — approve

Source: How many department values are non-null? Include repeated values, empty strings, zero and false.

Reviewer: 

Rule: present; count 36 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / Non-null value
- id-2: false → include / Non-null value
- id-3: "" → include / Non-null value
- id-4: 1 → include / Non-null value
- id-5: "1" → include / Non-null value
- id-6: "quoted \"value\",\n🍏" → include / Non-null value
- id-7: "O'Brien" → include / Non-null value
- id-8: "=FORMULA\nnext" → include / Non-null value
- id-9: -3 → include / Non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → include / Non-null value
- id-12: false → include / Non-null value
- id-13: "" → include / Non-null value
- id-14: 1 → include / Non-null value
- id-15: "1" → include / Non-null value
- id-16: "quoted \"value\",\n🍏" → include / Non-null value
- id-17: "O'Brien" → include / Non-null value
- id-18: "=FORMULA\nnext" → include / Non-null value
- id-19: -3 → include / Non-null value
- id-20: null → exclude / Explicit null
- id-21: 0 → include / Non-null value
- id-22: false → include / Non-null value
- id-23: "" → include / Non-null value
- id-24: 1 → include / Non-null value
- id-25: "1" → include / Non-null value
- id-26: "quoted \"value\",\n🍏" → include / Non-null value
- id-27: "O'Brien" → include / Non-null value
- id-28: "=FORMULA\nnext" → include / Non-null value
- id-29: -3 → include / Non-null value
- id-30: null → exclude / Explicit null
- id-31: 0 → include / Non-null value
- id-32: false → include / Non-null value
- id-33: "" → include / Non-null value
- id-34: 1 → include / Non-null value
- id-35: "1" → include / Non-null value
- id-36: "quoted \"value\",\n🍏" → include / Non-null value
- id-37: "O'Brien" → include / Non-null value
- id-38: "=FORMULA\nnext" → include / Non-null value
- id-39: -3 → include / Non-null value

## req-23 — approve

Source: Number of distinct non-null department values. Count each different typed value once, excluding missing nulls.

Reviewer: 

Rule: distinct; count 9 versus truthy baseline 24.

- id-0: null → exclude / Explicit null
- id-1: 0 → include / First distinct non-null value
- id-2: false → include / First distinct non-null value
- id-3: "" → include / First distinct non-null value
- id-4: 1 → include / First distinct non-null value
- id-5: "1" → include / First distinct non-null value
- id-6: "quoted \"value\",\n🍏" → include / First distinct non-null value
- id-7: "O'Brien" → include / First distinct non-null value
- id-8: "=FORMULA\nnext" → include / First distinct non-null value
- id-9: -3 → include / First distinct non-null value
- id-10: null → exclude / Explicit null
- id-11: 0 → exclude / Duplicate typed value
- id-12: false → exclude / Duplicate typed value
- id-13: "" → exclude / Duplicate typed value
- id-14: 1 → exclude / Duplicate typed value
- id-15: "1" → exclude / Duplicate typed value
- id-16: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-17: "O'Brien" → exclude / Duplicate typed value
- id-18: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-19: -3 → exclude / Duplicate typed value
- id-20: null → exclude / Explicit null
- id-21: 0 → exclude / Duplicate typed value
- id-22: false → exclude / Duplicate typed value
- id-23: "" → exclude / Duplicate typed value
- id-24: 1 → exclude / Duplicate typed value
- id-25: "1" → exclude / Duplicate typed value
- id-26: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-27: "O'Brien" → exclude / Duplicate typed value
- id-28: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-29: -3 → exclude / Duplicate typed value
- id-30: null → exclude / Explicit null
- id-31: 0 → exclude / Duplicate typed value
- id-32: false → exclude / Duplicate typed value
- id-33: "" → exclude / Duplicate typed value
- id-34: 1 → exclude / Duplicate typed value
- id-35: "1" → exclude / Duplicate typed value
- id-36: "quoted \"value\",\n🍏" → exclude / Duplicate typed value
- id-37: "O'Brien" → exclude / Duplicate typed value
- id-38: "=FORMULA\nnext" → exclude / Duplicate typed value
- id-39: -3 → exclude / Duplicate typed value
