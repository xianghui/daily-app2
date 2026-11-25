# Cursor Lantern · pagination QA

"Service export QA · synthetic"

- requests: 3
- approved: 3
- held: 0
- expectedRecords: 15
- compoundReturned: 15
- singleKeySkipped: 5

Same reviewed feed, direction and page size; next page filters only key > lastKey (asc) or key < lastKey (desc). Compound key+ID uses strict tuple ordering. Counts are synthetic/supplied-data witnesses, not production performance or AI accuracy.

## "job-1" / approve

Source: "Library audiobook author book titles reading catalog export"

Dataset: "books"

Note: ""

- Page 1: ["book-a","book-b"]
- Page 2: ["book-c","book-d"]
- Page 3: ["book-e"]

Single-key skipped: ["book-c"]

## "job-2" / approve

Source: "Bakery bread dough sourdough oven baking production export"

Dataset: "bread"

Note: ""

- Page 1: ["loaf-e"]
- Page 2: ["loaf-d"]
- Page 3: ["loaf-c"]
- Page 4: ["loaf-b"]
- Page 5: ["loaf-a"]

Single-key skipped: ["loaf-d","loaf-b","loaf-a"]

## "job-3" / approve

Source: "Book catalog literature library audiobook authors reading export"

Dataset: "books"

Note: ""

- Page 1: ["book-e","book-d"]
- Page 2: ["book-c","book-b"]
- Page 3: ["book-a"]

Single-key skipped: ["book-a"]
