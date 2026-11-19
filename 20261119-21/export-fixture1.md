# Slot Orchard — reviewed slotting worksheet

Synthetic art-room storage, one item container per shelf slot; counts are observed trips.

3 originals = 3 approved + 0 held. Status: ready



## Comparison
Observed picks 63; current-layout estimate 1652 m; optimized estimate 430 m; difference 1222 m; moved containers 2. Baseline load violations: none.

## Proposed layout (not move order)
- clay: front → back; 3 picks; 12 kg ≤ 20 kg; 15 m one-way; estimated 90 m.
- brush: back → front; 50 picks; 1 kg ≤ 20 kg; 2 m one-way; estimated 200 m.
- paper: side → side; 10 picks; 4 kg ≤ 5 kg; 7 m one-way; estimated 140 m.

## Every original and review
- a1: Bag of clay for pottery ceramics; original picks 3
  Reviewed clay: 3 picks [approve]
  
- a2: Watercolour painting brushes; original picks 50
  Reviewed brush: 50 picks [approve]
  
- a3: Sketching paper drawing pads; original picks 10
  Reviewed paper: 10 picks [approve]
  

## Supplied registers
{
  "items": [
    {
      "id": "clay",
      "description": "Heavy bag of pottery clay",
      "massKg": 12,
      "currentSlot": "front",
      "fixed": false
    },
    {
      "id": "brush",
      "description": "Fine paint brushes for watercolor",
      "massKg": 1,
      "currentSlot": "back",
      "fixed": false
    },
    {
      "id": "paper",
      "description": "Drawing paper sketch pads",
      "massKg": 4,
      "currentSlot": "side",
      "fixed": false
    }
  ],
  "slots": [
    {
      "id": "front",
      "distanceM": 2,
      "capacityKg": 20
    },
    {
      "id": "side",
      "distanceM": 7,
      "capacityKg": 5
    },
    {
      "id": "back",
      "distanceM": 15,
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
