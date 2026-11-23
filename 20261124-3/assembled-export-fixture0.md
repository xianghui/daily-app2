# Tie Ledger

1. "bank-even-tie" · ready
   Source: {"id":"bank-even-tie","context":"Bank settlement reconciliation: use nearest cents and resolve an exact halfway value by choosing the even cent.","raw":"1.005"}
   Review: {"id":"bank-even-tie","system":"bank-even","raw":"1.005","decision":"approve","note":"","evidence":[{"system":"bank-even","similarity":0.8226965216262113},{"system":"merchant-away","similarity":0.5725175957446615},{"system":"ledger-cut","similarity":0.49727020731144295}]}
   Check: {"id":"bank-even-tie","system":"bank-even","raw":"1.005","cents":"100","amount":"1.00","residual":"-0.005","quotient":"100","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":"100","differs":false,"exactVerified":true,"status":"ready"}

2. "bank-odd-tie" · ready
   Source: {"id":"bank-odd-tie","context":"Bank settlement reconciliation: use nearest cents and resolve an exact halfway value by choosing the even cent.","raw":"1.015"}
   Review: {"id":"bank-odd-tie","system":"bank-even","raw":"1.015","decision":"approve","note":"","evidence":[{"system":"bank-even","similarity":0.8189119767928894},{"system":"merchant-away","similarity":0.5654172611575821},{"system":"ledger-cut","similarity":0.490970095642276}]}
   Check: {"id":"bank-odd-tie","system":"bank-even","raw":"1.015","cents":"102","amount":"1.02","residual":"0.005","quotient":"101","remainder":"500","denominator":"1000","tie":true,"increment":true,"baseline":"101","differs":true,"exactVerified":true,"status":"ready"}

3. "sale" · ready
   Source: {"id":"sale","context":"Merchant invoice line or negative refund. Round to nearest cent, breaking half-cent ties away from zero.","raw":"1.005"}
   Review: {"id":"sale","system":"merchant-away","raw":"1.005","decision":"approve","note":"","evidence":[{"system":"merchant-away","similarity":0.8118788435616526},{"system":"bank-even","similarity":0.538435826636132},{"system":"ledger-cut","similarity":0.5267701321842845}]}
   Check: {"id":"sale","system":"merchant-away","raw":"1.005","cents":"101","amount":"1.01","residual":"0.005","quotient":"100","remainder":"500","denominator":"1000","tie":true,"increment":true,"baseline":"100","differs":true,"exactVerified":true,"status":"ready"}

4. "refund" · ready
   Source: {"id":"refund","context":"Merchant invoice line or negative refund. Round to nearest cent, breaking half-cent ties away from zero.","raw":"-1.005"}
   Review: {"id":"refund","system":"merchant-away","raw":"-1.005","decision":"approve","note":"","evidence":[{"system":"merchant-away","similarity":0.8118788435616526},{"system":"bank-even","similarity":0.538435826636132},{"system":"ledger-cut","similarity":0.5267701321842845}]}
   Check: {"id":"refund","system":"merchant-away","raw":"-1.005","cents":"-101","amount":"-1.01","residual":"-0.005","quotient":"100","remainder":"500","denominator":"1000","tie":true,"increment":true,"baseline":"-100","differs":true,"exactVerified":true,"status":"ready"}

5. "legacy" · ready
   Source: {"id":"legacy","context":"Legacy ledger export import. Discard fractional cents toward zero without rounding up.","raw":"-1.009"}
   Review: {"id":"legacy","system":"ledger-cut","raw":"-1.009","decision":"approve","note":"","evidence":[{"system":"ledger-cut","similarity":0.9034392168499926},{"system":"merchant-away","similarity":0.5358579508798186},{"system":"bank-even","similarity":0.4456547161106815}]}
   Check: {"id":"legacy","system":"ledger-cut","raw":"-1.009","cents":"-100","amount":"-1.00","residual":"0.009","quotient":"100","remainder":"900","denominator":"1000","tie":false,"increment":false,"baseline":"-101","differs":true,"exactVerified":true,"status":"ready"}

6. "bad-format" · blocked
   Source: {"id":"bad-format","context":"Legacy ledger export import. Discard fractional cents toward zero without rounding up.","raw":"1,000.25"}
   Review: {"id":"bad-format","system":"ledger-cut","raw":"1,000.25","decision":"approve","note":"","evidence":[{"system":"ledger-cut","similarity":0.9047529844203155},{"system":"merchant-away","similarity":0.5379718690349554},{"system":"bank-even","similarity":0.4442188132097101}]}
   Check: {"id":"bad-format","system":"ledger-cut","raw":"1,000.25","status":"blocked","reason":"Use ASCII decimal notation: ≤24 integer digits, ≤12 fractional digits; no grouping, exponent, spaces or currency."}

Computed counts: {"records":6,"ready":5,"held":0,"blocked":1,"ties":4,"differences":4,"baselineComparable":5,"baselineUnavailable":0,"totalCents":"102"}

Baseline is Math.round(Number(raw) * 100); unsafe integers are excluded. Differences reflect tie policy and binary floating-point behavior, not measured AI accuracy. One currency per batch, independent line rounding, no payments or accounting writes.