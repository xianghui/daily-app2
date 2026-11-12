# Signal Loom process review

REVIEWED: 4 signalled observations; 1 outside supplied specs (spec-only baseline). Signal ceiling 0: NOT MET. These are different checks, not accuracy or causal conclusions.

- p1 | "Paper book spine binding repair duration" | stream book | value -17 | sequence 1 | approve | note "=SUM(1,2)\n\"quoted\", note"
- s1 | "Fabric tee black ink screen print time" | stream shirt | value 40 | sequence 1 | approve | note ""
- p2 | "Book binding glue adhesive completion time" | stream book | value 20.5 | sequence 2 | approve | note ""
- s2 | "Textile t-shirt screenprinting completion" | stream shirt | value 40.3 | sequence 2 | approve | note ""
- p3 | "Paper bookbinding spine glue turnaround" | stream book | value 20.2 | sequence 3 | approve | note ""
- s3 | "Black ink screen printing cotton shirt" | stream shirt | value 40.1 | sequence 3 | approve | note ""
- p4 | "Book binding paper spine adhesive repair" | stream book | value 28 | sequence 4 | approve | note ""
- s4 | "Fabric shirt screen print black ink completion" | stream shirt | value 50 | sequence 4 | approve | note ""

## Bookbinding completion time (minutes)
Frozen mean 19.9; lower 17.24042553191489; upper 22.559574468085106; MR limit 3.267.
Fewer than 20 reference values: illustrative limits, not a reliable stable-process baseline.
- p1: -17; Outside frozen 3σ limits; outside specs: true
- p2: 20.5; Moving range above frozen limit; outside specs: false
- p3: 20.2; No configured signal; outside specs: false
- p4: 28; Outside frozen 3σ limits; Moving range above frozen limit; outside specs: false

## Shirt screenprinting completion time (minutes)
Frozen mean 39.9; lower 37.240425531914894; upper 42.5595744680851; MR limit 3.267.
Fewer than 20 reference values: illustrative limits, not a reliable stable-process baseline.
- s1: 40; No configured signal; outside specs: false
- s2: 40.3; No configured signal; outside specs: false
- s3: 40.1; No configured signal; outside specs: false
- s4: 50; Outside frozen 3σ limits; Moving range above frozen limit; outside specs: false

Investigation aid only. Reference stability, independent comparable observations and consistent units must be checked by a human. No automated interventions.
