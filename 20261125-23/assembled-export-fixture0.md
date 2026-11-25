# Synthetic service percentile migration

12 observations retained. 2 percentile values differ from observed-rank baseline. Descriptive sample statistics, not a population guarantee.

## homepage / approve

Browser page load speed for the website homepage.

Contract: web; linear; p90; upper limit 400 ms

Percentile: 440; observed-rank baseline: 500; passes: false; ranks 3–4; weight 0.7000000000000002

Original values: [500,100,300,200]

Reviewer: 

## phone / approve

Minutes callers waited on the support phone line for an agent.

Contract: queue; linear; p50; upper limit 6 minutes

Percentile: 6; observed-rank baseline: 4; passes: true; ranks 2–3; weight 0.5

Original values: [10,2,8,4]

Reviewer: 

## boxes / approve

Days spent by shipped parcels before customer delivery.

Contract: parcel; rank; p90; upper limit 5 days

Percentile: 5; observed-rank baseline: 5; passes: true; ranks 4–4; weight 0

Original values: [2,5,3,4]

Reviewer: 
