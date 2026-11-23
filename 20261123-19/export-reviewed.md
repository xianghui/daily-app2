# Slab Ledger — USD

1. "cold-archive" · ready
   Source: {"id":"cold-archive","context":"Retained files occupy cloud backup archive storage space","unit":"GB","quantity":50,"billedCents":1000}
   Review: {"id":"cold-archive","system":"storage","quantity":250,"billedCents":1000,"unit":"GB","decision":"approve","note":"=SUM(1,2)\nReviewed \"source\", exactly.","evidence":[{"system":"storage","similarity":0.8360699390318526},{"system":"print","similarity":0.1292078685872744},{"system":"water","similarity":-0.033678925638983614}]}
   Charge breakdown: {"id":"cold-archive","system":"storage","quantity":250,"unit":"GB","billedCents":1000,"status":"ready","totalCents":1700,"baselineCents":1500,"slabs":[{"from":0,"to":50,"units":50,"rateCents":0,"cents":0},{"from":50,"to":200,"units":150,"rateCents":4,"cents":600},{"from":200,"to":250,"units":50,"rateCents":2,"cents":100}],"allocatedUnits":250,"deltaCents":-700,"baselineDeltaCents":-500,"fixedCents":1000}

2. "copy-room" · ready
   Source: {"id":"copy-room","context":"Shared office photocopier document paper printing","unit":"page","quantity":600,"billedCents":3200}
   Review: {"id":"copy-room","system":"print","quantity":600,"billedCents":3200,"unit":"page","decision":"approve","note":"","evidence":[{"system":"print","similarity":0.8576521308019575},{"system":"storage","similarity":0.061066687757973054},{"system":"water","similarity":0.01632500020275747}]}
   Charge breakdown: {"id":"copy-room","system":"print","quantity":600,"unit":"page","billedCents":3200,"status":"ready","totalCents":4900,"baselineCents":3200,"slabs":[{"from":0,"to":100,"units":100,"rateCents":10,"cents":1000},{"from":100,"to":500,"units":400,"rateCents":8,"cents":3200},{"from":500,"to":600,"units":100,"rateCents":5,"cents":500}],"allocatedUnits":600,"deltaCents":-1700,"baselineDeltaCents":0,"fixedCents":200}

3. "outdoor" · ready
   Source: {"id":"outdoor","context":"Irrigation water utility meter and building tap consumption","unit":"m3","quantity":10,"billedCents":1500}
   Review: {"id":"outdoor","system":"water","quantity":10,"billedCents":1500,"unit":"m3","decision":"approve","note":"","evidence":[{"system":"water","similarity":0.8946918502859461},{"system":"storage","similarity":0.10968402323613961},{"system":"print","similarity":-0.06378662453869204}]}
   Charge breakdown: {"id":"outdoor","system":"water","quantity":10,"unit":"m3","billedCents":1500,"status":"ready","totalCents":1500,"baselineCents":1500,"slabs":[{"from":0,"to":10,"units":10,"rateCents":100,"cents":1000}],"allocatedUnits":10,"deltaCents":0,"baselineDeltaCents":0,"fixedCents":500}

Computed counts and integer-cent totals: {"records":3,"ready":3,"held":0,"blocked":0,"discrepancies":2,"baselineDisagreements":2,"totalCents":8100,"billedCents":5700,"deltaCents":-2400}

All-units baseline: fixed fee plus all units at the highest occupied tier rate. Each record is an independent full billing period. No tax, proration, currency conversion or billing execution.