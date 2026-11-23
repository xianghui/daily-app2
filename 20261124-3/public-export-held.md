# Tie Ledger

1. "bank-refund" · held
   Source: {"id":"bank-refund","context":"Clearing bank settlement values: nearest minor unit, exact halfway selects an even number of cents.","raw":"-2.685"}
   Review: {"id":"bank-refund","system":"bank-even","raw":"-3.005","decision":"hold","note":"=SUM(1,2)\nReviewed \"contract\", exactly.","evidence":[{"system":"bank-even","similarity":0.8117880484950164},{"system":"merchant-away","similarity":0.5810632130553782},{"system":"ledger-cut","similarity":0.5074979693102005}]}
   Check: {"id":"bank-refund","system":"bank-even","raw":"-3.005","status":"held","reason":"Reviewer hold"}

2. "invoice-refund" · ready
   Source: {"id":"invoice-refund","context":"Customer credit note on a merchant invoice: nearest cents, tie values go away from zero even for a refund.","raw":"-2.685"}
   Review: {"id":"invoice-refund","system":"merchant-away","raw":"-2.685","decision":"approve","note":"","evidence":[{"system":"merchant-away","similarity":0.736878817809029},{"system":"bank-even","similarity":0.51999457295806},{"system":"ledger-cut","similarity":0.4674149368549277}]}
   Check: {"id":"invoice-refund","system":"merchant-away","raw":"-2.685","cents":"-269","amount":"-2.69","residual":"-0.005","quotient":"268","remainder":"500","denominator":"1000","tie":true,"increment":true,"baseline":"-268","differs":true,"exactVerified":true,"status":"ready"}

3. "legacy-credit" · ready
   Source: {"id":"legacy-credit","context":"Old ledger converter drops every sub-cent fraction toward zero; it never rounds to the next cent.","raw":"-2.6899"}
   Review: {"id":"legacy-credit","system":"ledger-cut","raw":"-2.6899","decision":"approve","note":"","evidence":[{"system":"ledger-cut","similarity":0.7588022418177892},{"system":"merchant-away","similarity":0.46327611714175077},{"system":"bank-even","similarity":0.43821318820942584}]}
   Check: {"id":"legacy-credit","system":"ledger-cut","raw":"-2.6899","cents":"-268","amount":"-2.68","residual":"0.0099","quotient":"268","remainder":"9900","denominator":"10000","tie":false,"increment":false,"baseline":"-269","differs":true,"exactVerified":true,"status":"ready"}

4. "large-exact" · ready
   Source: {"id":"large-exact","context":"Bank financial reconciliation with nearest-cent rounding and even-number half-cent tie handling.","raw":"9007199254740993.125"}
   Review: {"id":"large-exact","system":"bank-even","raw":"9007199254740993.125","decision":"approve","note":"","evidence":[{"system":"bank-even","similarity":0.8084117244937478},{"system":"merchant-away","similarity":0.557898060700347},{"system":"ledger-cut","similarity":0.44896237205461215}]}
   Check: {"id":"large-exact","system":"bank-even","raw":"9007199254740993.125","cents":"900719925474099312","amount":"9007199254740993.12","residual":"-0.005","quotient":"900719925474099312","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":null,"differs":false,"exactVerified":true,"status":"ready"}

5. "small-credit" · ready
   Source: {"id":"small-credit","context":"Merchant invoice payment amount: nearest cent, exact halves away from zero for debits and credits.","raw":"-0.005"}
   Review: {"id":"small-credit","system":"merchant-away","raw":"-0.005","decision":"approve","note":"","evidence":[{"system":"merchant-away","similarity":0.740466781935577},{"system":"bank-even","similarity":0.5598170131080393},{"system":"ledger-cut","similarity":0.4670472249257913}]}
   Check: {"id":"small-credit","system":"merchant-away","raw":"-0.005","cents":"-1","amount":"-0.01","residual":"-0.005","quotient":"0","remainder":"500","denominator":"1000","tie":true,"increment":true,"baseline":"0","differs":true,"exactVerified":true,"status":"ready"}

6. "bad-exponent" · blocked
   Source: {"id":"bad-exponent","context":"Legacy ledger migration strips fractional cents toward zero instead of rounding.","raw":"1e3"}
   Review: {"id":"bad-exponent","system":"ledger-cut","raw":"1e3","decision":"approve","note":"","evidence":[{"system":"ledger-cut","similarity":0.8522128549837321},{"system":"merchant-away","similarity":0.5932165634721938},{"system":"bank-even","similarity":0.5860108112614943}]}
   Check: {"id":"bad-exponent","system":"ledger-cut","raw":"1e3","status":"blocked","reason":"Use ASCII decimal notation: ≤24 integer digits, ≤12 fractional digits; no grouping, exponent, spaces or currency."}

Computed counts: {"records":6,"ready":4,"held":1,"blocked":1,"ties":3,"differences":3,"baselineComparable":3,"baselineUnavailable":1,"totalCents":"900719925474098774"}

Baseline is Math.round(Number(raw) * 100); unsafe integers are excluded. Differences reflect tie policy and binary floating-point behavior, not measured AI accuracy. One currency per batch, independent line rounding, no payments or accounting writes.