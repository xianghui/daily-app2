# Synthetic gallery lighting mix

Preliminary mixed-fixture worksheet, not an electrical or photometric design. Lumen method estimates average maintained illuminance using one shared utilization and maintenance factor. It cannot assess uniformity, glare, shadows, beam angles, mounting, driver startup or wiring. Watts are supplied steady ratings, not a circuit safety certification. Verify actual fixture equivalence and manufacturer data; use a qualified designer before installation. No orders, account or equipment changes.

## Estimated fixture mix
{
  "requiredLumens": 10416.666666666668,
  "factor": 0.48,
  "targetLux": 250,
  "wattCap": 90,
  "examined": 25,
  "greedy": {
    "counts": [
      0,
      2,
      1
    ],
    "lumens": 7000,
    "watts": 84,
    "lux": 168,
    "costCents": 8500,
    "units": 3,
    "meets": false
  },
  "best": null,
  "savedCents": null,
  "assignments": [
    {
      "id": "T",
      "profile": "track",
      "ratedLumens": 1800,
      "ratedWatts": 18,
      "maxUnits": 3,
      "units": null,
      "lumens": null,
      "watts": null,
      "costCents": null
    },
    {
      "id": "P",
      "profile": "pendant",
      "ratedLumens": 2400,
      "ratedWatts": 32,
      "maxUnits": 3,
      "units": null,
      "lumens": null,
      "watts": null,
      "costCents": null
    },
    {
      "id": "D",
      "profile": "downlight",
      "ratedLumens": 2200,
      "ratedWatts": 20,
      "maxUnits": 3,
      "units": null,
      "lumens": null,
      "watts": null,
      "costCents": null
    }
  ]
}

## Every reviewed offer
### T
LED directional track spot for exhibits
AI: track; reviewed: track; max units 3; cents/fixture 4000; approve
=SUM(1,2)
"reviewer", verify profile

### P
Decorative pendant hanging lamp
AI: pendant; reviewed: pendant; max units 3; cents/fixture 2500; approve


### D
Recessed LED ceiling down light
AI: downlight; reviewed: downlight; max units 3; cents/fixture 3500; approve


## Method
Real MiniLM neural cosine matching reconciles fixture offers to supplied photometric profiles. Similarity is not confidence or product equivalence. Maintained average lux = sum(rated lumens) × utilization × maintenance / floor area. Exhaustive integer enumeration minimizes supplied installed cents within each offer limit, total fixture cap and hard supplied watt cap. Ties prefer lower watts then fewer fixtures. Greedy baseline selects most rated lumens per cent among fitting offers until target or capacity exhaustion. All comparisons are model estimates, never measured illuminance or circuit safety.
