# Alert Orchard — Finance checks

Scenario estimates, not live forecasts. Verify labeled samples and rate transfer.

## Repeated invoices
TP 90 / FP 50 / TN 850 / FN 10
Precision 64.29%; recall 90.00%; accuracy 94.00%; all-negative baseline 90.00%
Estimated alerts 640.00; false alerts 550.00; projected precision 14.06%

## Overdue accounts
TP 90 / FP 50 / TN 850 / FN 10
Precision 64.29%; recall 90.00%; accuracy 94.00%; all-negative baseline 90.00%
Estimated alerts 640.00; false alerts 550.00; projected precision 14.06%

- [x] R0-0 / duplicate: 90 / actual=true, alerted=true / "=Owner\n\"second\", line" / "=SUM(1,2)\n\"quoted\", investigate"
- [x] R0-1 / duplicate: 10 / actual=true, alerted=false / "QA reviewer" / ""
- [x] R0-2 / duplicate: 50 / actual=false, alerted=true / "QA reviewer" / ""
- [x] R0-3 / duplicate: 850 / actual=false, alerted=false / "QA reviewer" / ""
- [x] R1-0 / late: 90 / actual=true, alerted=true / "QA reviewer" / ""
- [x] R1-1 / late: 10 / actual=true, alerted=false / "QA reviewer" / ""
- [x] R1-2 / late: 50 / actual=false, alerted=true / "QA reviewer" / ""
- [x] R1-3 / late: 850 / actual=false, alerted=false / "QA reviewer" / ""