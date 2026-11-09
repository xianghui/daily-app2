# Synthetic plant stand build

PARTIAL PLAN — held demanded branches are unknown. Quantities below are lower bounds, NOT a complete procurement list. Verify specifications and units; no orders or inventory changes.

## Raw parts · consolidated buy list
- board · Square wooden tabletop board for supporting flower pots: gross 2, stock used 1, BUY 1.
- timber · Wooden timber leg post for furniture: gross 1, stock used 1, BUY 0.
- screw · Steel wood screw for fastening timber joints: gross 3, stock used 3, BUY 0.

## Assembly build order (components first)
- stand: build 2
- leg: build 1

## Unresolved demanded branches
- P1: 2 × stand needs 8 unknown component units. Descendants excluded.

## Complete BOM review
- P1 · stand → leg · hold: Furniture leg subassembly made from timber and screws; 4 per parent × 2 = 8. =1+1 Reviewed, "held" 🪷
- P2 · stand → board · approve: Square wood top panel for a potted plant; 1 per parent × 2 = 2. 
- P3 · leg → timber · approve: Timber furniture leg post; 1 per parent × 1 = 1. 
- P4 · leg → screw · approve: Steel screws for joining wooden pieces; 3 per parent × 1 = 3. 

Gross raw units 6 vs buy 1 after using 5 raw stock units (ignoring-stock baseline). Units may be different kinds; sum is an accounting check, not cost/time savings.
