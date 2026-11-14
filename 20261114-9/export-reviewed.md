# Variance Loom — Synthetic sewing material review

4 records retained; 4 approved; 0 held. Held records are excluded from the bridge.

- planned: 880.00
- flexible: 835.00
- actual: 857.30
- price: -3.70
- usage: 26.00
- volume: -45.00
- controllable: 22.30
- total: -22.70

Positive price/usage means adverse cost, negative means favorable cost, not quality or cause. Volume is activity change, not efficiency.

## Supplied standards
- cloth: Cotton textile fabric cloth measured in metres for sewing garments. | metre | 500 cents/unit
- zip: Zipper fasteners with sliding teeth for clothing and bags. | piece | 100 cents/unit

## Complete reviewed register
- S1 | cloth | approve
  Original: {"id":"S1","description":"Woven cotton cloth cut into dress panels.","plannedQty":100,"allowedQty":80,"actualQty":90,"actualCostCents":40500,"owner":"Cost reviewer"}
  Reviewed: planned 100, allowed 80, actual 90, cost 40500 cents
  Owner: =Owner
"second", line
  Note: =SUM(1,2)
"quoted", verify units
- S2 | zip | approve
  Original: {"id":"S2","description":"Metal zip fasteners sewn into jackets.","plannedQty":50,"allowedQty":60,"actualQty":58,"actualCostCents":6960,"owner":"Cost reviewer"}
  Reviewed: planned 50, allowed 60, actual 58, cost 6960 cents
  Owner: Cost reviewer
  Note: 
- S3 | cloth | approve
  Original: {"id":"S3","description":"Cotton textile rolls for sewing shirts.","plannedQty":60,"allowedQty":70,"actualQty":65,"actualCostCents":35750,"owner":"Cost reviewer"}
  Reviewed: planned 60, allowed 70, actual 65, cost 35750 cents
  Owner: Cost reviewer
  Note: 
- S4 | zip | approve
  Original: {"id":"S4","description":"Sliding tooth fasteners for bags.","plannedQty":30,"allowedQty":25,"actualQty":28,"actualCostCents":2520,"owner":"Cost reviewer"}
  Reviewed: planned 30, allowed 25, actual 28, cost 2520 cents
  Owner: Cost reviewer
  Note: 

## Approved bridges (cents)
{"id":"S1","kind":"cloth","planned":50000,"flexible":40000,"actual":40500,"price":-4500,"usage":5000,"volume":-10000,"controllable":500,"total":-9500}
{"id":"S2","kind":"zip","planned":5000,"flexible":6000,"actual":6960,"price":1160,"usage":-200,"volume":1000,"controllable":960,"total":1960}
{"id":"S3","kind":"cloth","planned":30000,"flexible":35000,"actual":35750,"price":3250,"usage":-2500,"volume":5000,"controllable":750,"total":5750}
{"id":"S4","kind":"zip","planned":3000,"flexible":2500,"actual":2520,"price":-280,"usage":300,"volume":-500,"controllable":20,"total":-480}

Supplied allowances must reflect actual output; no output, prices, causes or savings inferred by AI. Consumption-basis price variance, not purchase variance. No postings or uploads.
