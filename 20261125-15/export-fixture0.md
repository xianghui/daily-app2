# Synthetic catalog search handoff

3 approved / 0 held. 4 sample decisions differ from the same-mode unescaped LIKE shortcut. Snapshot comparison, not AI accuracy or a performance claim.

## discount — approve

Source: Find the search term anywhere inside the description, even with other words before and after it.

Reviewer: 

Term: "20%"

Mode: contains / pattern: "%20\\%%"

- r1: "Save 20% today" → MATCH (unescaped: true)
- r2: "Save 200 today" → NO MATCH (unescaped: true)
- r3: "20%" → MATCH (unescaped: true)
- r4: "20X" → NO MATCH (unescaped: true)

## sku — approve

Source: The complete SKU field must equal the search term exactly, with no additional characters before or after it.

Reviewer: 

Term: "AB_1"

Mode: exact / pattern: "AB\\_1"

- r1: "AB_1" → MATCH (unescaped: true)
- r2: "ABX1" → NO MATCH (unescaped: true)
- r3: "AB_12" → NO MATCH (unescaped: false)
- r4: "ab_1" → MATCH (unescaped: true)

## category — approve

Source: Prefix search: category names beginning with the literal search term.

Reviewer: 

Term: "A_"

Mode: prefix / pattern: "A\\_%"

- r1: "A_tools" → MATCH (unescaped: true)
- r2: "ABtools" → NO MATCH (unescaped: true)
- r3: "xA_tools" → NO MATCH (unescaped: false)
- r4: "a_parts" → MATCH (unescaped: true)
