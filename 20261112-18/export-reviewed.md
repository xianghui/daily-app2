# Expiry Relay rescue worksheet

Reviewed FEFO scenario, not an inventory transaction. Verify product labels and condition.

- clay-long | "Sculpting clay that hardens in air without a kiln" | product clay | 17 packs | usable through day 20 | approve | note "=SUM(1,2)\n\"quoted\", note"
- paint-long | "Acrylic artists colours for canvas pictures" | product paint | 2 packs | usable through day 20 | approve | note ""
- clay-soon | "Hand modelling air dried pottery clay" | product clay | 4 packs | usable through day 2 | approve | note ""
- paint-soon | "Canvas art acrylic paint packs" | product paint | 3 packs | usable through day 1 | approve | note ""

RESCUE PLAN: 2 packs handed off before expiry; 1 still expire, versus FEFO no-rescue baseline 3. Goal ≤0: NOT MET. Protect all planned demand picks.

FEFO expired 3, unmet 1, closing 14 packs. FIFO baseline expired 7, unmet 2, closing 11. Computed scenarios on supplied demand, not measured savings.

- Rescue day 1 · capacity 1: paint-soon × 1; unused 0
- Rescue day 2 · capacity 1: clay-soon × 1; unused 0
- Rescue day 3 · capacity 0: none; unused 0
- Rescue day 4 · capacity 0: none; unused 0

Protected demand picks:
- Day 1 · clay: demand 2; pick clay-soon × 2; unmet 0
- Day 1 · paint: demand 1; pick paint-soon × 1; unmet 0
- Day 2 · clay: demand 1; pick clay-soon × 1; unmet 0
- Day 2 · paint: demand 1; pick paint-long × 1; unmet 0
- Day 3 · clay: demand 2; pick clay-long × 2; unmet 0
- Day 3 · paint: demand 1; pick paint-long × 1; unmet 0
- Day 4 · clay: demand 1; pick clay-long × 1; unmet 0
- Day 4 · paint: demand 1; pick none; unmet 1