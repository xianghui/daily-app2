# Studio desk — Flow Caliper

Planning arithmetic, not a measured throughput forecast. Each unit must visit every stage once; observations must time one full unit and one stage. Parallel servers are assumed identical, continuously available and independent. No variability, queueing, setup, rework, breaks, shared workers or material constraints are modeled. Staffing is a necessary mean-load bound, not a service-level guarantee. Missing approved stages block whole-process capacity.

Demand: 80 units/day; available: 18000 seconds/server/day. Takt: 225.00 seconds/unit.

## Capacity worksheet
- Creative briefing: 1 observations; mean 250.00 sec; current 1 servers; capacity 72 units/day; required 2 servers; add 1.
- Image retouching: 2 observations; mean 450.00 sec; current 1 servers; capacity 40 units/day; required 2 servers; add 1.
- Print preparation: 0 observations; mean missing sec; current 1 servers; capacity blocked units/day; required blocked servers; add blocked.

Process capacity: blocked: missing stage data; proposed mean-load capacity: blocked.

## Complete source audit
- S1 [approve] Discussed the customer goals and collected their visual brand preferences. · Creative briefing · 250 sec (original 200); =1+1 / Reviewed, "verified" 🪷
- S2 [approve] Removed spots from a photograph and corrected its exposure. · Image retouching · 400 sec (original 400); 
- S3 [hold] Added crop marks and bleed to the press-ready exported document. · Print preparation · 120 sec (original 120); 
- S4 [approve] Adjusted lighting and color balance in the product photos. · Image retouching · 500 sec (original 500); 
