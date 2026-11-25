# Cursor Lantern · pagination QA

"Maximum 24-request / 8-feed batch"

- requests: 24
- approved: 24
- held: 0
- expectedRecords: 960
- compoundReturned: 960
- singleKeySkipped: 384

Same reviewed feed, direction and page size; next page filters only key > lastKey (asc) or key < lastKey (desc). Compound key+ID uses strict tuple ordering. Counts are synthetic/supplied-data witnesses, not production performance or AI accuracy.

## "req-0" / approve

Source: "Pottery ceramics workshop: clay bowls, kiln firing, glazing and sculpture."

Dataset: "feed-0"

Note: ""

- Page 1: ["=id \"0\"\r\n🍞","=id \"1\"\r\n🍞","=id \"2\"\r\n🍞"]
- Page 2: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"5\"\r\n🍞"]
- Page 3: ["=id \"6\"\r\n🍞","=id \"7\"\r\n🍞","=id \"8\"\r\n🍞"]
- Page 4: ["=id \"9\"\r\n🍞","=id \"10\"\r\n🍞","=id \"11\"\r\n🍞"]
- Page 5: ["=id \"12\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞"]
- Page 6: ["=id \"15\"\r\n🍞","=id \"16\"\r\n🍞","=id \"17\"\r\n🍞"]
- Page 7: ["=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"20\"\r\n🍞"]
- Page 8: ["=id \"21\"\r\n🍞","=id \"22\"\r\n🍞","=id \"23\"\r\n🍞"]
- Page 9: ["=id \"24\"\r\n🍞","=id \"25\"\r\n🍞","=id \"26\"\r\n🍞"]
- Page 10: ["=id \"27\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞"]
- Page 11: ["=id \"30\"\r\n🍞","=id \"31\"\r\n🍞","=id \"32\"\r\n🍞"]
- Page 12: ["=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"35\"\r\n🍞"]
- Page 13: ["=id \"36\"\r\n🍞","=id \"37\"\r\n🍞","=id \"38\"\r\n🍞"]
- Page 14: ["=id \"39\"\r\n🍞"]

Single-key skipped: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"8\"\r\n🍞","=id \"9\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞","=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"23\"\r\n🍞","=id \"24\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞","=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"38\"\r\n🍞","=id \"39\"\r\n🍞"]

## "req-1" / approve

Source: "Astronomy observations: telescopes, stars, planets and night sky charts."

Dataset: "feed-1"

Note: ""

- Page 1: ["=id \"39\"\r\n🍞","=id \"38\"\r\n🍞","=id \"37\"\r\n🍞"]
- Page 2: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"34\"\r\n🍞"]
- Page 3: ["=id \"33\"\r\n🍞","=id \"32\"\r\n🍞","=id \"31\"\r\n🍞"]
- Page 4: ["=id \"30\"\r\n🍞","=id \"29\"\r\n🍞","=id \"28\"\r\n🍞"]
- Page 5: ["=id \"27\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞"]
- Page 6: ["=id \"24\"\r\n🍞","=id \"23\"\r\n🍞","=id \"22\"\r\n🍞"]
- Page 7: ["=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"19\"\r\n🍞"]
- Page 8: ["=id \"18\"\r\n🍞","=id \"17\"\r\n🍞","=id \"16\"\r\n🍞"]
- Page 9: ["=id \"15\"\r\n🍞","=id \"14\"\r\n🍞","=id \"13\"\r\n🍞"]
- Page 10: ["=id \"12\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞"]
- Page 11: ["=id \"9\"\r\n🍞","=id \"8\"\r\n🍞","=id \"7\"\r\n🍞"]
- Page 12: ["=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"4\"\r\n🍞"]
- Page 13: ["=id \"3\"\r\n🍞","=id \"2\"\r\n🍞","=id \"1\"\r\n🍞"]
- Page 14: ["=id \"0\"\r\n🍞"]

Single-key skipped: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"31\"\r\n🍞","=id \"30\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞","=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"16\"\r\n🍞","=id \"15\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞","=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"1\"\r\n🍞","=id \"0\"\r\n🍞"]

## "req-2" / approve

Source: "Pottery ceramics workshop: clay bowls, kiln firing, glazing and sculpture."

Dataset: "feed-2"

Note: ""

- Page 1: ["=id \"0\"\r\n🍞","=id \"1\"\r\n🍞","=id \"2\"\r\n🍞"]
- Page 2: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"5\"\r\n🍞"]
- Page 3: ["=id \"6\"\r\n🍞","=id \"7\"\r\n🍞","=id \"8\"\r\n🍞"]
- Page 4: ["=id \"9\"\r\n🍞","=id \"10\"\r\n🍞","=id \"11\"\r\n🍞"]
- Page 5: ["=id \"12\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞"]
- Page 6: ["=id \"15\"\r\n🍞","=id \"16\"\r\n🍞","=id \"17\"\r\n🍞"]
- Page 7: ["=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"20\"\r\n🍞"]
- Page 8: ["=id \"21\"\r\n🍞","=id \"22\"\r\n🍞","=id \"23\"\r\n🍞"]
- Page 9: ["=id \"24\"\r\n🍞","=id \"25\"\r\n🍞","=id \"26\"\r\n🍞"]
- Page 10: ["=id \"27\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞"]
- Page 11: ["=id \"30\"\r\n🍞","=id \"31\"\r\n🍞","=id \"32\"\r\n🍞"]
- Page 12: ["=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"35\"\r\n🍞"]
- Page 13: ["=id \"36\"\r\n🍞","=id \"37\"\r\n🍞","=id \"38\"\r\n🍞"]
- Page 14: ["=id \"39\"\r\n🍞"]

Single-key skipped: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"8\"\r\n🍞","=id \"9\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞","=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"23\"\r\n🍞","=id \"24\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞","=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"38\"\r\n🍞","=id \"39\"\r\n🍞"]

## "req-3" / approve

Source: "Astronomy observations: telescopes, stars, planets and night sky charts."

Dataset: "feed-3"

Note: ""

- Page 1: ["=id \"39\"\r\n🍞","=id \"38\"\r\n🍞","=id \"37\"\r\n🍞"]
- Page 2: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"34\"\r\n🍞"]
- Page 3: ["=id \"33\"\r\n🍞","=id \"32\"\r\n🍞","=id \"31\"\r\n🍞"]
- Page 4: ["=id \"30\"\r\n🍞","=id \"29\"\r\n🍞","=id \"28\"\r\n🍞"]
- Page 5: ["=id \"27\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞"]
- Page 6: ["=id \"24\"\r\n🍞","=id \"23\"\r\n🍞","=id \"22\"\r\n🍞"]
- Page 7: ["=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"19\"\r\n🍞"]
- Page 8: ["=id \"18\"\r\n🍞","=id \"17\"\r\n🍞","=id \"16\"\r\n🍞"]
- Page 9: ["=id \"15\"\r\n🍞","=id \"14\"\r\n🍞","=id \"13\"\r\n🍞"]
- Page 10: ["=id \"12\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞"]
- Page 11: ["=id \"9\"\r\n🍞","=id \"8\"\r\n🍞","=id \"7\"\r\n🍞"]
- Page 12: ["=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"4\"\r\n🍞"]
- Page 13: ["=id \"3\"\r\n🍞","=id \"2\"\r\n🍞","=id \"1\"\r\n🍞"]
- Page 14: ["=id \"0\"\r\n🍞"]

Single-key skipped: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"31\"\r\n🍞","=id \"30\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞","=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"16\"\r\n🍞","=id \"15\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞","=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"1\"\r\n🍞","=id \"0\"\r\n🍞"]

## "req-4" / approve

Source: "Pottery ceramics workshop: clay bowls, kiln firing, glazing and sculpture."

Dataset: "feed-4"

Note: ""

- Page 1: ["=id \"0\"\r\n🍞","=id \"1\"\r\n🍞","=id \"2\"\r\n🍞"]
- Page 2: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"5\"\r\n🍞"]
- Page 3: ["=id \"6\"\r\n🍞","=id \"7\"\r\n🍞","=id \"8\"\r\n🍞"]
- Page 4: ["=id \"9\"\r\n🍞","=id \"10\"\r\n🍞","=id \"11\"\r\n🍞"]
- Page 5: ["=id \"12\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞"]
- Page 6: ["=id \"15\"\r\n🍞","=id \"16\"\r\n🍞","=id \"17\"\r\n🍞"]
- Page 7: ["=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"20\"\r\n🍞"]
- Page 8: ["=id \"21\"\r\n🍞","=id \"22\"\r\n🍞","=id \"23\"\r\n🍞"]
- Page 9: ["=id \"24\"\r\n🍞","=id \"25\"\r\n🍞","=id \"26\"\r\n🍞"]
- Page 10: ["=id \"27\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞"]
- Page 11: ["=id \"30\"\r\n🍞","=id \"31\"\r\n🍞","=id \"32\"\r\n🍞"]
- Page 12: ["=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"35\"\r\n🍞"]
- Page 13: ["=id \"36\"\r\n🍞","=id \"37\"\r\n🍞","=id \"38\"\r\n🍞"]
- Page 14: ["=id \"39\"\r\n🍞"]

Single-key skipped: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"8\"\r\n🍞","=id \"9\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞","=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"23\"\r\n🍞","=id \"24\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞","=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"38\"\r\n🍞","=id \"39\"\r\n🍞"]

## "req-5" / approve

Source: "Astronomy observations: telescopes, stars, planets and night sky charts."

Dataset: "feed-5"

Note: ""

- Page 1: ["=id \"39\"\r\n🍞","=id \"38\"\r\n🍞","=id \"37\"\r\n🍞"]
- Page 2: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"34\"\r\n🍞"]
- Page 3: ["=id \"33\"\r\n🍞","=id \"32\"\r\n🍞","=id \"31\"\r\n🍞"]
- Page 4: ["=id \"30\"\r\n🍞","=id \"29\"\r\n🍞","=id \"28\"\r\n🍞"]
- Page 5: ["=id \"27\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞"]
- Page 6: ["=id \"24\"\r\n🍞","=id \"23\"\r\n🍞","=id \"22\"\r\n🍞"]
- Page 7: ["=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"19\"\r\n🍞"]
- Page 8: ["=id \"18\"\r\n🍞","=id \"17\"\r\n🍞","=id \"16\"\r\n🍞"]
- Page 9: ["=id \"15\"\r\n🍞","=id \"14\"\r\n🍞","=id \"13\"\r\n🍞"]
- Page 10: ["=id \"12\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞"]
- Page 11: ["=id \"9\"\r\n🍞","=id \"8\"\r\n🍞","=id \"7\"\r\n🍞"]
- Page 12: ["=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"4\"\r\n🍞"]
- Page 13: ["=id \"3\"\r\n🍞","=id \"2\"\r\n🍞","=id \"1\"\r\n🍞"]
- Page 14: ["=id \"0\"\r\n🍞"]

Single-key skipped: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"31\"\r\n🍞","=id \"30\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞","=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"16\"\r\n🍞","=id \"15\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞","=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"1\"\r\n🍞","=id \"0\"\r\n🍞"]

## "req-6" / approve

Source: "Pottery ceramics workshop: clay bowls, kiln firing, glazing and sculpture."

Dataset: "feed-6"

Note: ""

- Page 1: ["=id \"0\"\r\n🍞","=id \"1\"\r\n🍞","=id \"2\"\r\n🍞"]
- Page 2: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"5\"\r\n🍞"]
- Page 3: ["=id \"6\"\r\n🍞","=id \"7\"\r\n🍞","=id \"8\"\r\n🍞"]
- Page 4: ["=id \"9\"\r\n🍞","=id \"10\"\r\n🍞","=id \"11\"\r\n🍞"]
- Page 5: ["=id \"12\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞"]
- Page 6: ["=id \"15\"\r\n🍞","=id \"16\"\r\n🍞","=id \"17\"\r\n🍞"]
- Page 7: ["=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"20\"\r\n🍞"]
- Page 8: ["=id \"21\"\r\n🍞","=id \"22\"\r\n🍞","=id \"23\"\r\n🍞"]
- Page 9: ["=id \"24\"\r\n🍞","=id \"25\"\r\n🍞","=id \"26\"\r\n🍞"]
- Page 10: ["=id \"27\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞"]
- Page 11: ["=id \"30\"\r\n🍞","=id \"31\"\r\n🍞","=id \"32\"\r\n🍞"]
- Page 12: ["=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"35\"\r\n🍞"]
- Page 13: ["=id \"36\"\r\n🍞","=id \"37\"\r\n🍞","=id \"38\"\r\n🍞"]
- Page 14: ["=id \"39\"\r\n🍞"]

Single-key skipped: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"8\"\r\n🍞","=id \"9\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞","=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"23\"\r\n🍞","=id \"24\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞","=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"38\"\r\n🍞","=id \"39\"\r\n🍞"]

## "req-7" / approve

Source: "Astronomy observations: telescopes, stars, planets and night sky charts."

Dataset: "feed-7"

Note: ""

- Page 1: ["=id \"39\"\r\n🍞","=id \"38\"\r\n🍞","=id \"37\"\r\n🍞"]
- Page 2: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"34\"\r\n🍞"]
- Page 3: ["=id \"33\"\r\n🍞","=id \"32\"\r\n🍞","=id \"31\"\r\n🍞"]
- Page 4: ["=id \"30\"\r\n🍞","=id \"29\"\r\n🍞","=id \"28\"\r\n🍞"]
- Page 5: ["=id \"27\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞"]
- Page 6: ["=id \"24\"\r\n🍞","=id \"23\"\r\n🍞","=id \"22\"\r\n🍞"]
- Page 7: ["=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"19\"\r\n🍞"]
- Page 8: ["=id \"18\"\r\n🍞","=id \"17\"\r\n🍞","=id \"16\"\r\n🍞"]
- Page 9: ["=id \"15\"\r\n🍞","=id \"14\"\r\n🍞","=id \"13\"\r\n🍞"]
- Page 10: ["=id \"12\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞"]
- Page 11: ["=id \"9\"\r\n🍞","=id \"8\"\r\n🍞","=id \"7\"\r\n🍞"]
- Page 12: ["=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"4\"\r\n🍞"]
- Page 13: ["=id \"3\"\r\n🍞","=id \"2\"\r\n🍞","=id \"1\"\r\n🍞"]
- Page 14: ["=id \"0\"\r\n🍞"]

Single-key skipped: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"31\"\r\n🍞","=id \"30\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞","=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"16\"\r\n🍞","=id \"15\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞","=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"1\"\r\n🍞","=id \"0\"\r\n🍞"]

## "req-8" / approve

Source: "Pottery ceramics workshop: clay bowls, kiln firing, glazing and sculpture."

Dataset: "feed-0"

Note: ""

- Page 1: ["=id \"0\"\r\n🍞","=id \"1\"\r\n🍞","=id \"2\"\r\n🍞"]
- Page 2: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"5\"\r\n🍞"]
- Page 3: ["=id \"6\"\r\n🍞","=id \"7\"\r\n🍞","=id \"8\"\r\n🍞"]
- Page 4: ["=id \"9\"\r\n🍞","=id \"10\"\r\n🍞","=id \"11\"\r\n🍞"]
- Page 5: ["=id \"12\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞"]
- Page 6: ["=id \"15\"\r\n🍞","=id \"16\"\r\n🍞","=id \"17\"\r\n🍞"]
- Page 7: ["=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"20\"\r\n🍞"]
- Page 8: ["=id \"21\"\r\n🍞","=id \"22\"\r\n🍞","=id \"23\"\r\n🍞"]
- Page 9: ["=id \"24\"\r\n🍞","=id \"25\"\r\n🍞","=id \"26\"\r\n🍞"]
- Page 10: ["=id \"27\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞"]
- Page 11: ["=id \"30\"\r\n🍞","=id \"31\"\r\n🍞","=id \"32\"\r\n🍞"]
- Page 12: ["=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"35\"\r\n🍞"]
- Page 13: ["=id \"36\"\r\n🍞","=id \"37\"\r\n🍞","=id \"38\"\r\n🍞"]
- Page 14: ["=id \"39\"\r\n🍞"]

Single-key skipped: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"8\"\r\n🍞","=id \"9\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞","=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"23\"\r\n🍞","=id \"24\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞","=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"38\"\r\n🍞","=id \"39\"\r\n🍞"]

## "req-9" / approve

Source: "Astronomy observations: telescopes, stars, planets and night sky charts."

Dataset: "feed-1"

Note: ""

- Page 1: ["=id \"39\"\r\n🍞","=id \"38\"\r\n🍞","=id \"37\"\r\n🍞"]
- Page 2: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"34\"\r\n🍞"]
- Page 3: ["=id \"33\"\r\n🍞","=id \"32\"\r\n🍞","=id \"31\"\r\n🍞"]
- Page 4: ["=id \"30\"\r\n🍞","=id \"29\"\r\n🍞","=id \"28\"\r\n🍞"]
- Page 5: ["=id \"27\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞"]
- Page 6: ["=id \"24\"\r\n🍞","=id \"23\"\r\n🍞","=id \"22\"\r\n🍞"]
- Page 7: ["=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"19\"\r\n🍞"]
- Page 8: ["=id \"18\"\r\n🍞","=id \"17\"\r\n🍞","=id \"16\"\r\n🍞"]
- Page 9: ["=id \"15\"\r\n🍞","=id \"14\"\r\n🍞","=id \"13\"\r\n🍞"]
- Page 10: ["=id \"12\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞"]
- Page 11: ["=id \"9\"\r\n🍞","=id \"8\"\r\n🍞","=id \"7\"\r\n🍞"]
- Page 12: ["=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"4\"\r\n🍞"]
- Page 13: ["=id \"3\"\r\n🍞","=id \"2\"\r\n🍞","=id \"1\"\r\n🍞"]
- Page 14: ["=id \"0\"\r\n🍞"]

Single-key skipped: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"31\"\r\n🍞","=id \"30\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞","=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"16\"\r\n🍞","=id \"15\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞","=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"1\"\r\n🍞","=id \"0\"\r\n🍞"]

## "req-10" / approve

Source: "Pottery ceramics workshop: clay bowls, kiln firing, glazing and sculpture."

Dataset: "feed-2"

Note: ""

- Page 1: ["=id \"0\"\r\n🍞","=id \"1\"\r\n🍞","=id \"2\"\r\n🍞"]
- Page 2: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"5\"\r\n🍞"]
- Page 3: ["=id \"6\"\r\n🍞","=id \"7\"\r\n🍞","=id \"8\"\r\n🍞"]
- Page 4: ["=id \"9\"\r\n🍞","=id \"10\"\r\n🍞","=id \"11\"\r\n🍞"]
- Page 5: ["=id \"12\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞"]
- Page 6: ["=id \"15\"\r\n🍞","=id \"16\"\r\n🍞","=id \"17\"\r\n🍞"]
- Page 7: ["=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"20\"\r\n🍞"]
- Page 8: ["=id \"21\"\r\n🍞","=id \"22\"\r\n🍞","=id \"23\"\r\n🍞"]
- Page 9: ["=id \"24\"\r\n🍞","=id \"25\"\r\n🍞","=id \"26\"\r\n🍞"]
- Page 10: ["=id \"27\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞"]
- Page 11: ["=id \"30\"\r\n🍞","=id \"31\"\r\n🍞","=id \"32\"\r\n🍞"]
- Page 12: ["=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"35\"\r\n🍞"]
- Page 13: ["=id \"36\"\r\n🍞","=id \"37\"\r\n🍞","=id \"38\"\r\n🍞"]
- Page 14: ["=id \"39\"\r\n🍞"]

Single-key skipped: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"8\"\r\n🍞","=id \"9\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞","=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"23\"\r\n🍞","=id \"24\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞","=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"38\"\r\n🍞","=id \"39\"\r\n🍞"]

## "req-11" / approve

Source: "Astronomy observations: telescopes, stars, planets and night sky charts."

Dataset: "feed-3"

Note: ""

- Page 1: ["=id \"39\"\r\n🍞","=id \"38\"\r\n🍞","=id \"37\"\r\n🍞"]
- Page 2: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"34\"\r\n🍞"]
- Page 3: ["=id \"33\"\r\n🍞","=id \"32\"\r\n🍞","=id \"31\"\r\n🍞"]
- Page 4: ["=id \"30\"\r\n🍞","=id \"29\"\r\n🍞","=id \"28\"\r\n🍞"]
- Page 5: ["=id \"27\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞"]
- Page 6: ["=id \"24\"\r\n🍞","=id \"23\"\r\n🍞","=id \"22\"\r\n🍞"]
- Page 7: ["=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"19\"\r\n🍞"]
- Page 8: ["=id \"18\"\r\n🍞","=id \"17\"\r\n🍞","=id \"16\"\r\n🍞"]
- Page 9: ["=id \"15\"\r\n🍞","=id \"14\"\r\n🍞","=id \"13\"\r\n🍞"]
- Page 10: ["=id \"12\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞"]
- Page 11: ["=id \"9\"\r\n🍞","=id \"8\"\r\n🍞","=id \"7\"\r\n🍞"]
- Page 12: ["=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"4\"\r\n🍞"]
- Page 13: ["=id \"3\"\r\n🍞","=id \"2\"\r\n🍞","=id \"1\"\r\n🍞"]
- Page 14: ["=id \"0\"\r\n🍞"]

Single-key skipped: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"31\"\r\n🍞","=id \"30\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞","=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"16\"\r\n🍞","=id \"15\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞","=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"1\"\r\n🍞","=id \"0\"\r\n🍞"]

## "req-12" / approve

Source: "Pottery ceramics workshop: clay bowls, kiln firing, glazing and sculpture."

Dataset: "feed-4"

Note: ""

- Page 1: ["=id \"0\"\r\n🍞","=id \"1\"\r\n🍞","=id \"2\"\r\n🍞"]
- Page 2: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"5\"\r\n🍞"]
- Page 3: ["=id \"6\"\r\n🍞","=id \"7\"\r\n🍞","=id \"8\"\r\n🍞"]
- Page 4: ["=id \"9\"\r\n🍞","=id \"10\"\r\n🍞","=id \"11\"\r\n🍞"]
- Page 5: ["=id \"12\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞"]
- Page 6: ["=id \"15\"\r\n🍞","=id \"16\"\r\n🍞","=id \"17\"\r\n🍞"]
- Page 7: ["=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"20\"\r\n🍞"]
- Page 8: ["=id \"21\"\r\n🍞","=id \"22\"\r\n🍞","=id \"23\"\r\n🍞"]
- Page 9: ["=id \"24\"\r\n🍞","=id \"25\"\r\n🍞","=id \"26\"\r\n🍞"]
- Page 10: ["=id \"27\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞"]
- Page 11: ["=id \"30\"\r\n🍞","=id \"31\"\r\n🍞","=id \"32\"\r\n🍞"]
- Page 12: ["=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"35\"\r\n🍞"]
- Page 13: ["=id \"36\"\r\n🍞","=id \"37\"\r\n🍞","=id \"38\"\r\n🍞"]
- Page 14: ["=id \"39\"\r\n🍞"]

Single-key skipped: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"8\"\r\n🍞","=id \"9\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞","=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"23\"\r\n🍞","=id \"24\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞","=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"38\"\r\n🍞","=id \"39\"\r\n🍞"]

## "req-13" / approve

Source: "Astronomy observations: telescopes, stars, planets and night sky charts."

Dataset: "feed-5"

Note: ""

- Page 1: ["=id \"39\"\r\n🍞","=id \"38\"\r\n🍞","=id \"37\"\r\n🍞"]
- Page 2: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"34\"\r\n🍞"]
- Page 3: ["=id \"33\"\r\n🍞","=id \"32\"\r\n🍞","=id \"31\"\r\n🍞"]
- Page 4: ["=id \"30\"\r\n🍞","=id \"29\"\r\n🍞","=id \"28\"\r\n🍞"]
- Page 5: ["=id \"27\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞"]
- Page 6: ["=id \"24\"\r\n🍞","=id \"23\"\r\n🍞","=id \"22\"\r\n🍞"]
- Page 7: ["=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"19\"\r\n🍞"]
- Page 8: ["=id \"18\"\r\n🍞","=id \"17\"\r\n🍞","=id \"16\"\r\n🍞"]
- Page 9: ["=id \"15\"\r\n🍞","=id \"14\"\r\n🍞","=id \"13\"\r\n🍞"]
- Page 10: ["=id \"12\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞"]
- Page 11: ["=id \"9\"\r\n🍞","=id \"8\"\r\n🍞","=id \"7\"\r\n🍞"]
- Page 12: ["=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"4\"\r\n🍞"]
- Page 13: ["=id \"3\"\r\n🍞","=id \"2\"\r\n🍞","=id \"1\"\r\n🍞"]
- Page 14: ["=id \"0\"\r\n🍞"]

Single-key skipped: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"31\"\r\n🍞","=id \"30\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞","=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"16\"\r\n🍞","=id \"15\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞","=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"1\"\r\n🍞","=id \"0\"\r\n🍞"]

## "req-14" / approve

Source: "Pottery ceramics workshop: clay bowls, kiln firing, glazing and sculpture."

Dataset: "feed-6"

Note: ""

- Page 1: ["=id \"0\"\r\n🍞","=id \"1\"\r\n🍞","=id \"2\"\r\n🍞"]
- Page 2: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"5\"\r\n🍞"]
- Page 3: ["=id \"6\"\r\n🍞","=id \"7\"\r\n🍞","=id \"8\"\r\n🍞"]
- Page 4: ["=id \"9\"\r\n🍞","=id \"10\"\r\n🍞","=id \"11\"\r\n🍞"]
- Page 5: ["=id \"12\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞"]
- Page 6: ["=id \"15\"\r\n🍞","=id \"16\"\r\n🍞","=id \"17\"\r\n🍞"]
- Page 7: ["=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"20\"\r\n🍞"]
- Page 8: ["=id \"21\"\r\n🍞","=id \"22\"\r\n🍞","=id \"23\"\r\n🍞"]
- Page 9: ["=id \"24\"\r\n🍞","=id \"25\"\r\n🍞","=id \"26\"\r\n🍞"]
- Page 10: ["=id \"27\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞"]
- Page 11: ["=id \"30\"\r\n🍞","=id \"31\"\r\n🍞","=id \"32\"\r\n🍞"]
- Page 12: ["=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"35\"\r\n🍞"]
- Page 13: ["=id \"36\"\r\n🍞","=id \"37\"\r\n🍞","=id \"38\"\r\n🍞"]
- Page 14: ["=id \"39\"\r\n🍞"]

Single-key skipped: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"8\"\r\n🍞","=id \"9\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞","=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"23\"\r\n🍞","=id \"24\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞","=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"38\"\r\n🍞","=id \"39\"\r\n🍞"]

## "req-15" / approve

Source: "Astronomy observations: telescopes, stars, planets and night sky charts."

Dataset: "feed-7"

Note: ""

- Page 1: ["=id \"39\"\r\n🍞","=id \"38\"\r\n🍞","=id \"37\"\r\n🍞"]
- Page 2: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"34\"\r\n🍞"]
- Page 3: ["=id \"33\"\r\n🍞","=id \"32\"\r\n🍞","=id \"31\"\r\n🍞"]
- Page 4: ["=id \"30\"\r\n🍞","=id \"29\"\r\n🍞","=id \"28\"\r\n🍞"]
- Page 5: ["=id \"27\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞"]
- Page 6: ["=id \"24\"\r\n🍞","=id \"23\"\r\n🍞","=id \"22\"\r\n🍞"]
- Page 7: ["=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"19\"\r\n🍞"]
- Page 8: ["=id \"18\"\r\n🍞","=id \"17\"\r\n🍞","=id \"16\"\r\n🍞"]
- Page 9: ["=id \"15\"\r\n🍞","=id \"14\"\r\n🍞","=id \"13\"\r\n🍞"]
- Page 10: ["=id \"12\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞"]
- Page 11: ["=id \"9\"\r\n🍞","=id \"8\"\r\n🍞","=id \"7\"\r\n🍞"]
- Page 12: ["=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"4\"\r\n🍞"]
- Page 13: ["=id \"3\"\r\n🍞","=id \"2\"\r\n🍞","=id \"1\"\r\n🍞"]
- Page 14: ["=id \"0\"\r\n🍞"]

Single-key skipped: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"31\"\r\n🍞","=id \"30\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞","=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"16\"\r\n🍞","=id \"15\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞","=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"1\"\r\n🍞","=id \"0\"\r\n🍞"]

## "req-16" / approve

Source: "Pottery ceramics workshop: clay bowls, kiln firing, glazing and sculpture."

Dataset: "feed-0"

Note: ""

- Page 1: ["=id \"0\"\r\n🍞","=id \"1\"\r\n🍞","=id \"2\"\r\n🍞"]
- Page 2: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"5\"\r\n🍞"]
- Page 3: ["=id \"6\"\r\n🍞","=id \"7\"\r\n🍞","=id \"8\"\r\n🍞"]
- Page 4: ["=id \"9\"\r\n🍞","=id \"10\"\r\n🍞","=id \"11\"\r\n🍞"]
- Page 5: ["=id \"12\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞"]
- Page 6: ["=id \"15\"\r\n🍞","=id \"16\"\r\n🍞","=id \"17\"\r\n🍞"]
- Page 7: ["=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"20\"\r\n🍞"]
- Page 8: ["=id \"21\"\r\n🍞","=id \"22\"\r\n🍞","=id \"23\"\r\n🍞"]
- Page 9: ["=id \"24\"\r\n🍞","=id \"25\"\r\n🍞","=id \"26\"\r\n🍞"]
- Page 10: ["=id \"27\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞"]
- Page 11: ["=id \"30\"\r\n🍞","=id \"31\"\r\n🍞","=id \"32\"\r\n🍞"]
- Page 12: ["=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"35\"\r\n🍞"]
- Page 13: ["=id \"36\"\r\n🍞","=id \"37\"\r\n🍞","=id \"38\"\r\n🍞"]
- Page 14: ["=id \"39\"\r\n🍞"]

Single-key skipped: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"8\"\r\n🍞","=id \"9\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞","=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"23\"\r\n🍞","=id \"24\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞","=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"38\"\r\n🍞","=id \"39\"\r\n🍞"]

## "req-17" / approve

Source: "Astronomy observations: telescopes, stars, planets and night sky charts."

Dataset: "feed-1"

Note: ""

- Page 1: ["=id \"39\"\r\n🍞","=id \"38\"\r\n🍞","=id \"37\"\r\n🍞"]
- Page 2: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"34\"\r\n🍞"]
- Page 3: ["=id \"33\"\r\n🍞","=id \"32\"\r\n🍞","=id \"31\"\r\n🍞"]
- Page 4: ["=id \"30\"\r\n🍞","=id \"29\"\r\n🍞","=id \"28\"\r\n🍞"]
- Page 5: ["=id \"27\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞"]
- Page 6: ["=id \"24\"\r\n🍞","=id \"23\"\r\n🍞","=id \"22\"\r\n🍞"]
- Page 7: ["=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"19\"\r\n🍞"]
- Page 8: ["=id \"18\"\r\n🍞","=id \"17\"\r\n🍞","=id \"16\"\r\n🍞"]
- Page 9: ["=id \"15\"\r\n🍞","=id \"14\"\r\n🍞","=id \"13\"\r\n🍞"]
- Page 10: ["=id \"12\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞"]
- Page 11: ["=id \"9\"\r\n🍞","=id \"8\"\r\n🍞","=id \"7\"\r\n🍞"]
- Page 12: ["=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"4\"\r\n🍞"]
- Page 13: ["=id \"3\"\r\n🍞","=id \"2\"\r\n🍞","=id \"1\"\r\n🍞"]
- Page 14: ["=id \"0\"\r\n🍞"]

Single-key skipped: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"31\"\r\n🍞","=id \"30\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞","=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"16\"\r\n🍞","=id \"15\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞","=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"1\"\r\n🍞","=id \"0\"\r\n🍞"]

## "req-18" / approve

Source: "Pottery ceramics workshop: clay bowls, kiln firing, glazing and sculpture."

Dataset: "feed-2"

Note: ""

- Page 1: ["=id \"0\"\r\n🍞","=id \"1\"\r\n🍞","=id \"2\"\r\n🍞"]
- Page 2: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"5\"\r\n🍞"]
- Page 3: ["=id \"6\"\r\n🍞","=id \"7\"\r\n🍞","=id \"8\"\r\n🍞"]
- Page 4: ["=id \"9\"\r\n🍞","=id \"10\"\r\n🍞","=id \"11\"\r\n🍞"]
- Page 5: ["=id \"12\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞"]
- Page 6: ["=id \"15\"\r\n🍞","=id \"16\"\r\n🍞","=id \"17\"\r\n🍞"]
- Page 7: ["=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"20\"\r\n🍞"]
- Page 8: ["=id \"21\"\r\n🍞","=id \"22\"\r\n🍞","=id \"23\"\r\n🍞"]
- Page 9: ["=id \"24\"\r\n🍞","=id \"25\"\r\n🍞","=id \"26\"\r\n🍞"]
- Page 10: ["=id \"27\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞"]
- Page 11: ["=id \"30\"\r\n🍞","=id \"31\"\r\n🍞","=id \"32\"\r\n🍞"]
- Page 12: ["=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"35\"\r\n🍞"]
- Page 13: ["=id \"36\"\r\n🍞","=id \"37\"\r\n🍞","=id \"38\"\r\n🍞"]
- Page 14: ["=id \"39\"\r\n🍞"]

Single-key skipped: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"8\"\r\n🍞","=id \"9\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞","=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"23\"\r\n🍞","=id \"24\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞","=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"38\"\r\n🍞","=id \"39\"\r\n🍞"]

## "req-19" / approve

Source: "Astronomy observations: telescopes, stars, planets and night sky charts."

Dataset: "feed-3"

Note: ""

- Page 1: ["=id \"39\"\r\n🍞","=id \"38\"\r\n🍞","=id \"37\"\r\n🍞"]
- Page 2: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"34\"\r\n🍞"]
- Page 3: ["=id \"33\"\r\n🍞","=id \"32\"\r\n🍞","=id \"31\"\r\n🍞"]
- Page 4: ["=id \"30\"\r\n🍞","=id \"29\"\r\n🍞","=id \"28\"\r\n🍞"]
- Page 5: ["=id \"27\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞"]
- Page 6: ["=id \"24\"\r\n🍞","=id \"23\"\r\n🍞","=id \"22\"\r\n🍞"]
- Page 7: ["=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"19\"\r\n🍞"]
- Page 8: ["=id \"18\"\r\n🍞","=id \"17\"\r\n🍞","=id \"16\"\r\n🍞"]
- Page 9: ["=id \"15\"\r\n🍞","=id \"14\"\r\n🍞","=id \"13\"\r\n🍞"]
- Page 10: ["=id \"12\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞"]
- Page 11: ["=id \"9\"\r\n🍞","=id \"8\"\r\n🍞","=id \"7\"\r\n🍞"]
- Page 12: ["=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"4\"\r\n🍞"]
- Page 13: ["=id \"3\"\r\n🍞","=id \"2\"\r\n🍞","=id \"1\"\r\n🍞"]
- Page 14: ["=id \"0\"\r\n🍞"]

Single-key skipped: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"31\"\r\n🍞","=id \"30\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞","=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"16\"\r\n🍞","=id \"15\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞","=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"1\"\r\n🍞","=id \"0\"\r\n🍞"]

## "req-20" / approve

Source: "Pottery ceramics workshop: clay bowls, kiln firing, glazing and sculpture."

Dataset: "feed-4"

Note: ""

- Page 1: ["=id \"0\"\r\n🍞","=id \"1\"\r\n🍞","=id \"2\"\r\n🍞"]
- Page 2: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"5\"\r\n🍞"]
- Page 3: ["=id \"6\"\r\n🍞","=id \"7\"\r\n🍞","=id \"8\"\r\n🍞"]
- Page 4: ["=id \"9\"\r\n🍞","=id \"10\"\r\n🍞","=id \"11\"\r\n🍞"]
- Page 5: ["=id \"12\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞"]
- Page 6: ["=id \"15\"\r\n🍞","=id \"16\"\r\n🍞","=id \"17\"\r\n🍞"]
- Page 7: ["=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"20\"\r\n🍞"]
- Page 8: ["=id \"21\"\r\n🍞","=id \"22\"\r\n🍞","=id \"23\"\r\n🍞"]
- Page 9: ["=id \"24\"\r\n🍞","=id \"25\"\r\n🍞","=id \"26\"\r\n🍞"]
- Page 10: ["=id \"27\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞"]
- Page 11: ["=id \"30\"\r\n🍞","=id \"31\"\r\n🍞","=id \"32\"\r\n🍞"]
- Page 12: ["=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"35\"\r\n🍞"]
- Page 13: ["=id \"36\"\r\n🍞","=id \"37\"\r\n🍞","=id \"38\"\r\n🍞"]
- Page 14: ["=id \"39\"\r\n🍞"]

Single-key skipped: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"8\"\r\n🍞","=id \"9\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞","=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"23\"\r\n🍞","=id \"24\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞","=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"38\"\r\n🍞","=id \"39\"\r\n🍞"]

## "req-21" / approve

Source: "Astronomy observations: telescopes, stars, planets and night sky charts."

Dataset: "feed-5"

Note: ""

- Page 1: ["=id \"39\"\r\n🍞","=id \"38\"\r\n🍞","=id \"37\"\r\n🍞"]
- Page 2: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"34\"\r\n🍞"]
- Page 3: ["=id \"33\"\r\n🍞","=id \"32\"\r\n🍞","=id \"31\"\r\n🍞"]
- Page 4: ["=id \"30\"\r\n🍞","=id \"29\"\r\n🍞","=id \"28\"\r\n🍞"]
- Page 5: ["=id \"27\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞"]
- Page 6: ["=id \"24\"\r\n🍞","=id \"23\"\r\n🍞","=id \"22\"\r\n🍞"]
- Page 7: ["=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"19\"\r\n🍞"]
- Page 8: ["=id \"18\"\r\n🍞","=id \"17\"\r\n🍞","=id \"16\"\r\n🍞"]
- Page 9: ["=id \"15\"\r\n🍞","=id \"14\"\r\n🍞","=id \"13\"\r\n🍞"]
- Page 10: ["=id \"12\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞"]
- Page 11: ["=id \"9\"\r\n🍞","=id \"8\"\r\n🍞","=id \"7\"\r\n🍞"]
- Page 12: ["=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"4\"\r\n🍞"]
- Page 13: ["=id \"3\"\r\n🍞","=id \"2\"\r\n🍞","=id \"1\"\r\n🍞"]
- Page 14: ["=id \"0\"\r\n🍞"]

Single-key skipped: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"31\"\r\n🍞","=id \"30\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞","=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"16\"\r\n🍞","=id \"15\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞","=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"1\"\r\n🍞","=id \"0\"\r\n🍞"]

## "req-22" / approve

Source: "Pottery ceramics workshop: clay bowls, kiln firing, glazing and sculpture."

Dataset: "feed-6"

Note: ""

- Page 1: ["=id \"0\"\r\n🍞","=id \"1\"\r\n🍞","=id \"2\"\r\n🍞"]
- Page 2: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"5\"\r\n🍞"]
- Page 3: ["=id \"6\"\r\n🍞","=id \"7\"\r\n🍞","=id \"8\"\r\n🍞"]
- Page 4: ["=id \"9\"\r\n🍞","=id \"10\"\r\n🍞","=id \"11\"\r\n🍞"]
- Page 5: ["=id \"12\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞"]
- Page 6: ["=id \"15\"\r\n🍞","=id \"16\"\r\n🍞","=id \"17\"\r\n🍞"]
- Page 7: ["=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"20\"\r\n🍞"]
- Page 8: ["=id \"21\"\r\n🍞","=id \"22\"\r\n🍞","=id \"23\"\r\n🍞"]
- Page 9: ["=id \"24\"\r\n🍞","=id \"25\"\r\n🍞","=id \"26\"\r\n🍞"]
- Page 10: ["=id \"27\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞"]
- Page 11: ["=id \"30\"\r\n🍞","=id \"31\"\r\n🍞","=id \"32\"\r\n🍞"]
- Page 12: ["=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"35\"\r\n🍞"]
- Page 13: ["=id \"36\"\r\n🍞","=id \"37\"\r\n🍞","=id \"38\"\r\n🍞"]
- Page 14: ["=id \"39\"\r\n🍞"]

Single-key skipped: ["=id \"3\"\r\n🍞","=id \"4\"\r\n🍞","=id \"8\"\r\n🍞","=id \"9\"\r\n🍞","=id \"13\"\r\n🍞","=id \"14\"\r\n🍞","=id \"18\"\r\n🍞","=id \"19\"\r\n🍞","=id \"23\"\r\n🍞","=id \"24\"\r\n🍞","=id \"28\"\r\n🍞","=id \"29\"\r\n🍞","=id \"33\"\r\n🍞","=id \"34\"\r\n🍞","=id \"38\"\r\n🍞","=id \"39\"\r\n🍞"]

## "req-23" / approve

Source: "Astronomy observations: telescopes, stars, planets and night sky charts."

Dataset: "feed-7"

Note: ""

- Page 1: ["=id \"39\"\r\n🍞","=id \"38\"\r\n🍞","=id \"37\"\r\n🍞"]
- Page 2: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"34\"\r\n🍞"]
- Page 3: ["=id \"33\"\r\n🍞","=id \"32\"\r\n🍞","=id \"31\"\r\n🍞"]
- Page 4: ["=id \"30\"\r\n🍞","=id \"29\"\r\n🍞","=id \"28\"\r\n🍞"]
- Page 5: ["=id \"27\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞"]
- Page 6: ["=id \"24\"\r\n🍞","=id \"23\"\r\n🍞","=id \"22\"\r\n🍞"]
- Page 7: ["=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"19\"\r\n🍞"]
- Page 8: ["=id \"18\"\r\n🍞","=id \"17\"\r\n🍞","=id \"16\"\r\n🍞"]
- Page 9: ["=id \"15\"\r\n🍞","=id \"14\"\r\n🍞","=id \"13\"\r\n🍞"]
- Page 10: ["=id \"12\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞"]
- Page 11: ["=id \"9\"\r\n🍞","=id \"8\"\r\n🍞","=id \"7\"\r\n🍞"]
- Page 12: ["=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"4\"\r\n🍞"]
- Page 13: ["=id \"3\"\r\n🍞","=id \"2\"\r\n🍞","=id \"1\"\r\n🍞"]
- Page 14: ["=id \"0\"\r\n🍞"]

Single-key skipped: ["=id \"36\"\r\n🍞","=id \"35\"\r\n🍞","=id \"31\"\r\n🍞","=id \"30\"\r\n🍞","=id \"26\"\r\n🍞","=id \"25\"\r\n🍞","=id \"21\"\r\n🍞","=id \"20\"\r\n🍞","=id \"16\"\r\n🍞","=id \"15\"\r\n🍞","=id \"11\"\r\n🍞","=id \"10\"\r\n🍞","=id \"6\"\r\n🍞","=id \"5\"\r\n🍞","=id \"1\"\r\n🍞","=id \"0\"\r\n🍞"]
