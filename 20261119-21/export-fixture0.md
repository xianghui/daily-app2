# Slot Orchard — reviewed slotting worksheet

Synthetic workshop. Each pick is one separate round trip from the same packing desk.

4 originals = 4 approved + 0 held. Status: ready



## Comparison
Observed picks 74; current-layout estimate 1100 m; optimized estimate 560 m; difference 540 m; moved containers 2. Baseline load violations: none.

## Proposed layout (not move order)
- drill: far → near; 40 picks; 3 kg ≤ 5 kg; 1 m one-way; estimated 80 m.
- anvil: deep → deep; 4 picks; 18 kg ≤ 20 kg; 20 m one-way; estimated 160 m.
- tape: near → far; 10 picks; 2 kg ≤ 20 kg; 10 m one-way; estimated 200 m.
- paint: middle → middle; 20 picks; 7 kg ≤ 10 kg; 3 m one-way; estimated 120 m.

## Every original and review
- p1: Battery powered drill set; original picks 40
  Reviewed drill: 40 picks [approve]
  
- p2: Steel anvil for forging iron; original picks 4
  Reviewed anvil: 4 picks [approve]
  
- p3: Rolls of masking tape adhesive; original picks 10
  Reviewed tape: 10 picks [approve]
  
- p4: Paint bucket for walls; original picks 20
  Reviewed paint: 20 picks [approve]
  

## Supplied registers
{
  "items": [
    {
      "id": "drill",
      "description": "Cordless power drill kit",
      "massKg": 3,
      "currentSlot": "far",
      "fixed": false
    },
    {
      "id": "anvil",
      "description": "Heavy steel blacksmith anvil",
      "massKg": 18,
      "currentSlot": "deep",
      "fixed": false
    },
    {
      "id": "tape",
      "description": "Adhesive masking tape rolls",
      "massKg": 2,
      "currentSlot": "near",
      "fixed": false
    },
    {
      "id": "paint",
      "description": "Buckets of wall paint",
      "massKg": 7,
      "currentSlot": "middle",
      "fixed": false
    }
  ],
  "slots": [
    {
      "id": "near",
      "distanceM": 1,
      "capacityKg": 5
    },
    {
      "id": "middle",
      "distanceM": 3,
      "capacityKg": 10
    },
    {
      "id": "far",
      "distanceM": 10,
      "capacityKg": 20
    },
    {
      "id": "deep",
      "distanceM": 20,
      "capacityKg": 20
    }
  ]
}

## Before use
- [ ] Verify every item link, observation period, pick count, mass, distance, capacity and fixed flag.
- [ ] One whole item container per slot. All item demand must be represented, including explicit zero rows. Holds block planning.
- [ ] Estimate assumes independent single-item round trips from one origin: 2 × distance × picks. Not observed travel savings; ignores routing, order combinations, congestion and relocation cost.
- [ ] Mass limits are user assumptions, not a structural or handling certification. Dimensional fit, compatibility and safe movement must be checked independently.
- [ ] Layout is not a move sequence: swaps may require temporary space. No stock movement, dispatch or uploads.
- [ ] Cosine similarity is not confidence or identity; unrelated/negated text can mislink. Imported notes are inert data.
