# Cost Tapestry — reviewed overhead worksheet

Allocated 1200.02; BLOCKED 0.00; total supplied overhead 1200.02. One currency and one complete period.

## Products
- "posters": "Posters"; units 200; activity overhead 60.00; volume baseline 960.02; difference -900.02; overhead per unit 0.30
- "books": "Booklets"; units 50; activity overhead 1140.02; volume baseline 240.00; difference 900.02; overhead per unit 22.80

## Pools
- "design": 900.01; allocated; total driver 14; [{"product":"posters","driver":0,"cents":0},{"product":"books","driver":14,"cents":90001}]
- "delivery": 300.01; allocated; total driver 10; [{"product":"posters","driver":2,"cents":6000},{"product":"books","driver":8,"cents":24001}]

## Complete usage audit
- "P1": "Graphic artwork preparation and poster layout design"; pool "design"; product "books"; driver 11; approve; allocated cents 70715; note "=1+1, \"review\"\nnext line"
- "P2": "Booklet page layout and typography design"; pool "design"; product "books"; driver 3; approve; allocated cents 19286; note ""
- "P3": "Courier shipping parcels of posters to customers"; pool "delivery"; product "posters"; driver 2; approve; allocated cents 6000; note ""
- "P4": "Transporting book parcels to customer addresses"; pool "delivery"; product "books"; driver 8; approve; allocated cents 24001; note ""

Allocations are descriptive assumptions, not measured causation, profit or savings. Held usage blocks the entire linked pool. Review driver consistency within each pool and completeness of the period.
