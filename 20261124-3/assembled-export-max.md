# Tie Ledger

1. "=row \"0\"\nnext" · ready
   Source: {"id":"=row \"0\"\nnext","context":"Bank settlement reconciliation uses nearest cent rounding with ties to even: an exact half cent chooses the even integer minor unit.","raw":"0.005"}
   Review: {"id":"=row \"0\"\nnext","system":"bank-even","raw":"0.005","decision":"approve","note":"","evidence":[{"system":"bank-even","similarity":1.0000002644710264},{"system":"merchant-away","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"0\"\nnext","system":"bank-even","raw":"0.005","cents":"0","amount":"0.00","residual":"-0.005","quotient":"0","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":"1","differs":true,"exactVerified":true,"status":"ready"}

2. "=row \"1\"\nnext" · ready
   Source: {"id":"=row \"1\"\nnext","context":"Merchant invoice line amounts use nearest cent rounding with exact half cents rounded away from zero, including negative refund lines.","raw":"-9007199254740993.125"}
   Review: {"id":"=row \"1\"\nnext","system":"merchant-away","raw":"-9007199254740993.125","decision":"approve","note":"","evidence":[{"system":"merchant-away","similarity":0.9999999145299489},{"system":"bank-even","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5858953723430036}]}
   Check: {"id":"=row \"1\"\nnext","system":"merchant-away","raw":"-9007199254740993.125","cents":"-900719925474099313","amount":"-9007199254740993.13","residual":"-0.005","quotient":"900719925474099312","remainder":"500","denominator":"1000","tie":true,"increment":true,"baseline":null,"differs":false,"exactVerified":true,"status":"ready"}

3. "=row \"2\"\nnext" · ready
   Source: {"id":"=row \"2\"\nnext","context":"Legacy ledger import truncates all fractional cents toward zero, discarding the fraction without rounding up for positive or negative amounts.","raw":"0.005"}
   Review: {"id":"=row \"2\"\nnext","system":"ledger-cut","raw":"0.005","decision":"approve","note":"","evidence":[{"system":"ledger-cut","similarity":1.0000000003789966},{"system":"merchant-away","similarity":0.5858953723430036},{"system":"bank-even","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"2\"\nnext","system":"ledger-cut","raw":"0.005","cents":"0","amount":"0.00","residual":"-0.005","quotient":"0","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":"1","differs":true,"exactVerified":true,"status":"ready"}

4. "=row \"3\"\nnext" · ready
   Source: {"id":"=row \"3\"\nnext","context":"Bank settlement reconciliation uses nearest cent rounding with ties to even: an exact half cent chooses the even integer minor unit.","raw":"-9007199254740993.125"}
   Review: {"id":"=row \"3\"\nnext","system":"bank-even","raw":"-9007199254740993.125","decision":"approve","note":"","evidence":[{"system":"bank-even","similarity":1.0000002644710264},{"system":"merchant-away","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"3\"\nnext","system":"bank-even","raw":"-9007199254740993.125","cents":"-900719925474099312","amount":"-9007199254740993.12","residual":"0.005","quotient":"900719925474099312","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":null,"differs":false,"exactVerified":true,"status":"ready"}

5. "=row \"4\"\nnext" · ready
   Source: {"id":"=row \"4\"\nnext","context":"Merchant invoice line amounts use nearest cent rounding with exact half cents rounded away from zero, including negative refund lines.","raw":"0.005"}
   Review: {"id":"=row \"4\"\nnext","system":"merchant-away","raw":"0.005","decision":"approve","note":"","evidence":[{"system":"merchant-away","similarity":0.9999999145299489},{"system":"bank-even","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5858953723430036}]}
   Check: {"id":"=row \"4\"\nnext","system":"merchant-away","raw":"0.005","cents":"1","amount":"0.01","residual":"0.005","quotient":"0","remainder":"500","denominator":"1000","tie":true,"increment":true,"baseline":"1","differs":false,"exactVerified":true,"status":"ready"}

6. "=row \"5\"\nnext" · ready
   Source: {"id":"=row \"5\"\nnext","context":"Legacy ledger import truncates all fractional cents toward zero, discarding the fraction without rounding up for positive or negative amounts.","raw":"-9007199254740993.125"}
   Review: {"id":"=row \"5\"\nnext","system":"ledger-cut","raw":"-9007199254740993.125","decision":"approve","note":"","evidence":[{"system":"ledger-cut","similarity":1.0000000003789966},{"system":"merchant-away","similarity":0.5858953723430036},{"system":"bank-even","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"5\"\nnext","system":"ledger-cut","raw":"-9007199254740993.125","cents":"-900719925474099312","amount":"-9007199254740993.12","residual":"0.005","quotient":"900719925474099312","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":null,"differs":false,"exactVerified":true,"status":"ready"}

7. "=row \"6\"\nnext" · ready
   Source: {"id":"=row \"6\"\nnext","context":"Bank settlement reconciliation uses nearest cent rounding with ties to even: an exact half cent chooses the even integer minor unit.","raw":"0.005"}
   Review: {"id":"=row \"6\"\nnext","system":"bank-even","raw":"0.005","decision":"approve","note":"","evidence":[{"system":"bank-even","similarity":1.0000002644710264},{"system":"merchant-away","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"6\"\nnext","system":"bank-even","raw":"0.005","cents":"0","amount":"0.00","residual":"-0.005","quotient":"0","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":"1","differs":true,"exactVerified":true,"status":"ready"}

8. "=row \"7\"\nnext" · ready
   Source: {"id":"=row \"7\"\nnext","context":"Merchant invoice line amounts use nearest cent rounding with exact half cents rounded away from zero, including negative refund lines.","raw":"-9007199254740993.125"}
   Review: {"id":"=row \"7\"\nnext","system":"merchant-away","raw":"-9007199254740993.125","decision":"approve","note":"","evidence":[{"system":"merchant-away","similarity":0.9999999145299489},{"system":"bank-even","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5858953723430036}]}
   Check: {"id":"=row \"7\"\nnext","system":"merchant-away","raw":"-9007199254740993.125","cents":"-900719925474099313","amount":"-9007199254740993.13","residual":"-0.005","quotient":"900719925474099312","remainder":"500","denominator":"1000","tie":true,"increment":true,"baseline":null,"differs":false,"exactVerified":true,"status":"ready"}

9. "=row \"8\"\nnext" · ready
   Source: {"id":"=row \"8\"\nnext","context":"Legacy ledger import truncates all fractional cents toward zero, discarding the fraction without rounding up for positive or negative amounts.","raw":"0.005"}
   Review: {"id":"=row \"8\"\nnext","system":"ledger-cut","raw":"0.005","decision":"approve","note":"","evidence":[{"system":"ledger-cut","similarity":1.0000000003789966},{"system":"merchant-away","similarity":0.5858953723430036},{"system":"bank-even","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"8\"\nnext","system":"ledger-cut","raw":"0.005","cents":"0","amount":"0.00","residual":"-0.005","quotient":"0","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":"1","differs":true,"exactVerified":true,"status":"ready"}

10. "=row \"9\"\nnext" · ready
   Source: {"id":"=row \"9\"\nnext","context":"Bank settlement reconciliation uses nearest cent rounding with ties to even: an exact half cent chooses the even integer minor unit.","raw":"-9007199254740993.125"}
   Review: {"id":"=row \"9\"\nnext","system":"bank-even","raw":"-9007199254740993.125","decision":"approve","note":"","evidence":[{"system":"bank-even","similarity":1.0000002644710264},{"system":"merchant-away","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"9\"\nnext","system":"bank-even","raw":"-9007199254740993.125","cents":"-900719925474099312","amount":"-9007199254740993.12","residual":"0.005","quotient":"900719925474099312","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":null,"differs":false,"exactVerified":true,"status":"ready"}

11. "=row \"10\"\nnext" · ready
   Source: {"id":"=row \"10\"\nnext","context":"Merchant invoice line amounts use nearest cent rounding with exact half cents rounded away from zero, including negative refund lines.","raw":"0.005"}
   Review: {"id":"=row \"10\"\nnext","system":"merchant-away","raw":"0.005","decision":"approve","note":"","evidence":[{"system":"merchant-away","similarity":0.9999999145299489},{"system":"bank-even","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5858953723430036}]}
   Check: {"id":"=row \"10\"\nnext","system":"merchant-away","raw":"0.005","cents":"1","amount":"0.01","residual":"0.005","quotient":"0","remainder":"500","denominator":"1000","tie":true,"increment":true,"baseline":"1","differs":false,"exactVerified":true,"status":"ready"}

12. "=row \"11\"\nnext" · ready
   Source: {"id":"=row \"11\"\nnext","context":"Legacy ledger import truncates all fractional cents toward zero, discarding the fraction without rounding up for positive or negative amounts.","raw":"-9007199254740993.125"}
   Review: {"id":"=row \"11\"\nnext","system":"ledger-cut","raw":"-9007199254740993.125","decision":"approve","note":"","evidence":[{"system":"ledger-cut","similarity":1.0000000003789966},{"system":"merchant-away","similarity":0.5858953723430036},{"system":"bank-even","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"11\"\nnext","system":"ledger-cut","raw":"-9007199254740993.125","cents":"-900719925474099312","amount":"-9007199254740993.12","residual":"0.005","quotient":"900719925474099312","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":null,"differs":false,"exactVerified":true,"status":"ready"}

13. "=row \"12\"\nnext" · ready
   Source: {"id":"=row \"12\"\nnext","context":"Bank settlement reconciliation uses nearest cent rounding with ties to even: an exact half cent chooses the even integer minor unit.","raw":"0.005"}
   Review: {"id":"=row \"12\"\nnext","system":"bank-even","raw":"0.005","decision":"approve","note":"","evidence":[{"system":"bank-even","similarity":1.0000002644710264},{"system":"merchant-away","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"12\"\nnext","system":"bank-even","raw":"0.005","cents":"0","amount":"0.00","residual":"-0.005","quotient":"0","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":"1","differs":true,"exactVerified":true,"status":"ready"}

14. "=row \"13\"\nnext" · ready
   Source: {"id":"=row \"13\"\nnext","context":"Merchant invoice line amounts use nearest cent rounding with exact half cents rounded away from zero, including negative refund lines.","raw":"-9007199254740993.125"}
   Review: {"id":"=row \"13\"\nnext","system":"merchant-away","raw":"-9007199254740993.125","decision":"approve","note":"","evidence":[{"system":"merchant-away","similarity":0.9999999145299489},{"system":"bank-even","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5858953723430036}]}
   Check: {"id":"=row \"13\"\nnext","system":"merchant-away","raw":"-9007199254740993.125","cents":"-900719925474099313","amount":"-9007199254740993.13","residual":"-0.005","quotient":"900719925474099312","remainder":"500","denominator":"1000","tie":true,"increment":true,"baseline":null,"differs":false,"exactVerified":true,"status":"ready"}

15. "=row \"14\"\nnext" · ready
   Source: {"id":"=row \"14\"\nnext","context":"Legacy ledger import truncates all fractional cents toward zero, discarding the fraction without rounding up for positive or negative amounts.","raw":"0.005"}
   Review: {"id":"=row \"14\"\nnext","system":"ledger-cut","raw":"0.005","decision":"approve","note":"","evidence":[{"system":"ledger-cut","similarity":1.0000000003789966},{"system":"merchant-away","similarity":0.5858953723430036},{"system":"bank-even","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"14\"\nnext","system":"ledger-cut","raw":"0.005","cents":"0","amount":"0.00","residual":"-0.005","quotient":"0","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":"1","differs":true,"exactVerified":true,"status":"ready"}

16. "=row \"15\"\nnext" · ready
   Source: {"id":"=row \"15\"\nnext","context":"Bank settlement reconciliation uses nearest cent rounding with ties to even: an exact half cent chooses the even integer minor unit.","raw":"-9007199254740993.125"}
   Review: {"id":"=row \"15\"\nnext","system":"bank-even","raw":"-9007199254740993.125","decision":"approve","note":"","evidence":[{"system":"bank-even","similarity":1.0000002644710264},{"system":"merchant-away","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"15\"\nnext","system":"bank-even","raw":"-9007199254740993.125","cents":"-900719925474099312","amount":"-9007199254740993.12","residual":"0.005","quotient":"900719925474099312","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":null,"differs":false,"exactVerified":true,"status":"ready"}

17. "=row \"16\"\nnext" · ready
   Source: {"id":"=row \"16\"\nnext","context":"Merchant invoice line amounts use nearest cent rounding with exact half cents rounded away from zero, including negative refund lines.","raw":"0.005"}
   Review: {"id":"=row \"16\"\nnext","system":"merchant-away","raw":"0.005","decision":"approve","note":"","evidence":[{"system":"merchant-away","similarity":0.9999999145299489},{"system":"bank-even","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5858953723430036}]}
   Check: {"id":"=row \"16\"\nnext","system":"merchant-away","raw":"0.005","cents":"1","amount":"0.01","residual":"0.005","quotient":"0","remainder":"500","denominator":"1000","tie":true,"increment":true,"baseline":"1","differs":false,"exactVerified":true,"status":"ready"}

18. "=row \"17\"\nnext" · ready
   Source: {"id":"=row \"17\"\nnext","context":"Legacy ledger import truncates all fractional cents toward zero, discarding the fraction without rounding up for positive or negative amounts.","raw":"-9007199254740993.125"}
   Review: {"id":"=row \"17\"\nnext","system":"ledger-cut","raw":"-9007199254740993.125","decision":"approve","note":"","evidence":[{"system":"ledger-cut","similarity":1.0000000003789966},{"system":"merchant-away","similarity":0.5858953723430036},{"system":"bank-even","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"17\"\nnext","system":"ledger-cut","raw":"-9007199254740993.125","cents":"-900719925474099312","amount":"-9007199254740993.12","residual":"0.005","quotient":"900719925474099312","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":null,"differs":false,"exactVerified":true,"status":"ready"}

19. "=row \"18\"\nnext" · ready
   Source: {"id":"=row \"18\"\nnext","context":"Bank settlement reconciliation uses nearest cent rounding with ties to even: an exact half cent chooses the even integer minor unit.","raw":"0.005"}
   Review: {"id":"=row \"18\"\nnext","system":"bank-even","raw":"0.005","decision":"approve","note":"","evidence":[{"system":"bank-even","similarity":1.0000002644710264},{"system":"merchant-away","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"18\"\nnext","system":"bank-even","raw":"0.005","cents":"0","amount":"0.00","residual":"-0.005","quotient":"0","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":"1","differs":true,"exactVerified":true,"status":"ready"}

20. "=row \"19\"\nnext" · ready
   Source: {"id":"=row \"19\"\nnext","context":"Merchant invoice line amounts use nearest cent rounding with exact half cents rounded away from zero, including negative refund lines.","raw":"-9007199254740993.125"}
   Review: {"id":"=row \"19\"\nnext","system":"merchant-away","raw":"-9007199254740993.125","decision":"approve","note":"","evidence":[{"system":"merchant-away","similarity":0.9999999145299489},{"system":"bank-even","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5858953723430036}]}
   Check: {"id":"=row \"19\"\nnext","system":"merchant-away","raw":"-9007199254740993.125","cents":"-900719925474099313","amount":"-9007199254740993.13","residual":"-0.005","quotient":"900719925474099312","remainder":"500","denominator":"1000","tie":true,"increment":true,"baseline":null,"differs":false,"exactVerified":true,"status":"ready"}

21. "=row \"20\"\nnext" · ready
   Source: {"id":"=row \"20\"\nnext","context":"Legacy ledger import truncates all fractional cents toward zero, discarding the fraction without rounding up for positive or negative amounts.","raw":"0.005"}
   Review: {"id":"=row \"20\"\nnext","system":"ledger-cut","raw":"0.005","decision":"approve","note":"","evidence":[{"system":"ledger-cut","similarity":1.0000000003789966},{"system":"merchant-away","similarity":0.5858953723430036},{"system":"bank-even","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"20\"\nnext","system":"ledger-cut","raw":"0.005","cents":"0","amount":"0.00","residual":"-0.005","quotient":"0","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":"1","differs":true,"exactVerified":true,"status":"ready"}

22. "=row \"21\"\nnext" · ready
   Source: {"id":"=row \"21\"\nnext","context":"Bank settlement reconciliation uses nearest cent rounding with ties to even: an exact half cent chooses the even integer minor unit.","raw":"-9007199254740993.125"}
   Review: {"id":"=row \"21\"\nnext","system":"bank-even","raw":"-9007199254740993.125","decision":"approve","note":"","evidence":[{"system":"bank-even","similarity":1.0000002644710264},{"system":"merchant-away","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"21\"\nnext","system":"bank-even","raw":"-9007199254740993.125","cents":"-900719925474099312","amount":"-9007199254740993.12","residual":"0.005","quotient":"900719925474099312","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":null,"differs":false,"exactVerified":true,"status":"ready"}

23. "=row \"22\"\nnext" · ready
   Source: {"id":"=row \"22\"\nnext","context":"Merchant invoice line amounts use nearest cent rounding with exact half cents rounded away from zero, including negative refund lines.","raw":"0.005"}
   Review: {"id":"=row \"22\"\nnext","system":"merchant-away","raw":"0.005","decision":"approve","note":"","evidence":[{"system":"merchant-away","similarity":0.9999999145299489},{"system":"bank-even","similarity":0.5924944360612338},{"system":"ledger-cut","similarity":0.5858953723430036}]}
   Check: {"id":"=row \"22\"\nnext","system":"merchant-away","raw":"0.005","cents":"1","amount":"0.01","residual":"0.005","quotient":"0","remainder":"500","denominator":"1000","tie":true,"increment":true,"baseline":"1","differs":false,"exactVerified":true,"status":"ready"}

24. "=row \"23\"\nnext" · ready
   Source: {"id":"=row \"23\"\nnext","context":"Legacy ledger import truncates all fractional cents toward zero, discarding the fraction without rounding up for positive or negative amounts.","raw":"-9007199254740993.125"}
   Review: {"id":"=row \"23\"\nnext","system":"ledger-cut","raw":"-9007199254740993.125","decision":"approve","note":"","evidence":[{"system":"ledger-cut","similarity":1.0000000003789966},{"system":"merchant-away","similarity":0.5858953723430036},{"system":"bank-even","similarity":0.5027195801843644}]}
   Check: {"id":"=row \"23\"\nnext","system":"ledger-cut","raw":"-9007199254740993.125","cents":"-900719925474099312","amount":"-9007199254740993.12","residual":"0.005","quotient":"900719925474099312","remainder":"500","denominator":"1000","tie":true,"increment":false,"baseline":null,"differs":false,"exactVerified":true,"status":"ready"}

Computed counts: {"records":24,"ready":24,"held":0,"blocked":0,"ties":24,"differences":8,"baselineComparable":12,"baselineUnavailable":12,"totalCents":"-10808639105689191744"}

Baseline is Math.round(Number(raw) * 100); unsafe integers are excluded. Differences reflect tie policy and binary floating-point behavior, not measured AI accuracy. One currency per batch, independent line rounding, no payments or accounting writes.