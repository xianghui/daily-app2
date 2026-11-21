# Synthetic workshop lighting mix

Preliminary mixed-fixture worksheet, not an electrical or photometric design. Lumen method estimates average maintained illuminance using one shared utilization and maintenance factor. It cannot assess uniformity, glare, shadows, beam angles, mounting, driver startup or wiring. Watts are supplied steady ratings, not a circuit safety certification. Verify actual fixture equivalence and manufacturer data; use a qualified designer before installation. No orders, account or equipment changes.

## Estimated fixture mix
{
  "requiredLumens": 16071.428571428572,
  "factor": 0.5599999999999999,
  "targetLux": 300,
  "wattCap": 180,
  "examined": 23,
  "greedy": {
    "counts": [
      0,
      3,
      0
    ],
    "lumens": 9000,
    "watts": 180,
    "lux": 167.99999999999997,
    "costCents": 7500,
    "units": 3,
    "meets": false
  },
  "best": {
    "counts": [
      0,
      1,
      2
    ],
    "lumens": 17000,
    "watts": 160,
    "lux": 317.33333333333326,
    "costCents": 22500,
    "units": 3,
    "meets": true
  },
  "savedCents": null,
  "assignments": [
    {
      "id": "P",
      "profile": "panel",
      "ratedLumens": 3600,
      "ratedWatts": 36,
      "maxUnits": 3,
      "units": 0,
      "lumens": 0,
      "watts": 0,
      "costCents": 0
    },
    {
      "id": "B",
      "profile": "batten",
      "ratedLumens": 3000,
      "ratedWatts": 60,
      "maxUnits": 3,
      "units": 1,
      "lumens": 3000,
      "watts": 60,
      "costCents": 2500
    },
    {
      "id": "H",
      "profile": "highbay",
      "ratedLumens": 7000,
      "ratedWatts": 50,
      "maxUnits": 3,
      "units": 2,
      "lumens": 14000,
      "watts": 100,
      "costCents": 20000
    }
  ]
}

## Every reviewed offer
### P
Flat LED luminous ceiling panel
AI: panel; reviewed: panel; max units 3; cents/fixture 6000; approve


### B
Fluorescent tube strip batten luminaire
AI: batten; reviewed: batten; max units 3; cents/fixture 2500; approve


### H
Industrial high bay hanging pendant fixture
AI: highbay; reviewed: highbay; max units 3; cents/fixture 10000; approve


## Method
Real MiniLM neural cosine matching reconciles fixture offers to supplied photometric profiles. Similarity is not confidence or product equivalence. Maintained average lux = sum(rated lumens) × utilization × maintenance / floor area. Exhaustive integer enumeration minimizes supplied installed cents within each offer limit, total fixture cap and hard supplied watt cap. Ties prefer lower watts then fewer fixtures. Greedy baseline selects most rated lumens per cent among fitting offers until target or capacity exhaustion. All comparisons are model estimates, never measured illuminance or circuit safety.
