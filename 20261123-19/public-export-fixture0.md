# Slab Ledger — USD

1. "garden" · ready
   Source: {"id":"garden","context":"Water consumption from irrigation and building taps utility meter","unit":"m3","quantity":35,"billedCents":7500}
   Review: {"id":"garden","system":"water","quantity":35,"billedCents":7500,"unit":"m3","decision":"approve","note":"","evidence":[{"system":"water","similarity":0.9122472565679824},{"system":"storage","similarity":0.11186029368988801},{"system":"print","similarity":-0.032508304604188965}]}
   Charge breakdown: {"id":"garden","system":"water","quantity":35,"unit":"m3","billedCents":7500,"status":"ready","totalCents":5500,"baselineCents":7500,"slabs":[{"from":0,"to":10,"units":10,"rateCents":100,"cents":1000},{"from":10,"to":30,"units":20,"rateCents":150,"cents":3000},{"from":30,"to":35,"units":5,"rateCents":200,"cents":1000}],"allocatedUnits":35,"deltaCents":2000,"baselineDeltaCents":0,"fixedCents":500}

2. "office" · ready
   Source: {"id":"office","context":"Document printing and photocopy sheets from office copier","unit":"page","quantity":150,"billedCents":1600}
   Review: {"id":"office","system":"print","quantity":150,"billedCents":1600,"unit":"page","decision":"approve","note":"","evidence":[{"system":"print","similarity":0.9310851346269077},{"system":"storage","similarity":0.08205081104359438},{"system":"water","similarity":-0.010999394275884603}]}
   Charge breakdown: {"id":"office","system":"print","quantity":150,"unit":"page","billedCents":1600,"status":"ready","totalCents":1600,"baselineCents":1400,"slabs":[{"from":0,"to":100,"units":100,"rateCents":10,"cents":1000},{"from":100,"to":150,"units":50,"rateCents":8,"cents":400}],"allocatedUnits":150,"deltaCents":0,"baselineDeltaCents":200,"fixedCents":200}

3. "vault" · ready
   Source: {"id":"vault","context":"Cloud archive backup storage retained file gigabytes","unit":"GB","quantity":250,"billedCents":1800}
   Review: {"id":"vault","system":"storage","quantity":250,"billedCents":1800,"unit":"GB","decision":"approve","note":"","evidence":[{"system":"storage","similarity":0.8952749536943876},{"system":"print","similarity":0.1320997991906856},{"system":"water","similarity":-0.0410360463264395}]}
   Charge breakdown: {"id":"vault","system":"storage","quantity":250,"unit":"GB","billedCents":1800,"status":"ready","totalCents":1700,"baselineCents":1500,"slabs":[{"from":0,"to":50,"units":50,"rateCents":0,"cents":0},{"from":50,"to":200,"units":150,"rateCents":4,"cents":600},{"from":200,"to":250,"units":50,"rateCents":2,"cents":100}],"allocatedUnits":250,"deltaCents":100,"baselineDeltaCents":300,"fixedCents":1000}

Computed counts and integer-cent totals: {"records":3,"ready":3,"held":0,"blocked":0,"discrepancies":2,"baselineDisagreements":3,"totalCents":8800,"billedCents":10900,"deltaCents":2100}

All-units baseline: fixed fee plus all units at the highest occupied tier rate. Each record is an independent full billing period. No tax, proration, currency conversion or billing execution.