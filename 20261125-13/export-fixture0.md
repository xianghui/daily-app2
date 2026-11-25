# Cursor Lantern · pagination QA

"Workshop export QA · synthetic"

- requests: 3
- approved: 3
- held: 0
- expectedRecords: 15
- compoundReturned: 15
- singleKeySkipped: 5

Same reviewed feed, direction and page size; next page filters only key > lastKey (asc) or key < lastKey (desc). Compound key+ID uses strict tuple ordering. Counts are synthetic/supplied-data witnesses, not production performance or AI accuracy.

## "req-1" / approve

Source: "Export clay ceramic bowls kiln firing glazing workshop records"

Dataset: "clay"

Note: ""

- Page 1: ["bowl-a","bowl-b"]
- Page 2: ["bowl-c","bowl-d"]
- Page 3: ["bowl-e"]

Single-key skipped: ["bowl-c"]

## "req-2" / approve

Source: "Export astronomy telescope star planet night sky observations"

Dataset: "sky"

Note: ""

- Page 1: ["star-e","star-d"]
- Page 2: ["star-c","star-b"]
- Page 3: ["star-a"]

Single-key skipped: ["star-c","star-b"]

## "req-3" / approve

Source: "Pottery ceramic sculpture bowls clay kiln glazing export"

Dataset: "clay"

Note: ""

- Page 1: ["bowl-e"]
- Page 2: ["bowl-d"]
- Page 3: ["bowl-c"]
- Page 4: ["bowl-b"]
- Page 5: ["bowl-a"]

Single-key skipped: ["bowl-b","bowl-a"]
