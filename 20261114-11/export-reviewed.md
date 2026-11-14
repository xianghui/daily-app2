# Forecast Folio — Synthetic weekend market retrospective

8 records retained; 0 held. Complete common-event panel.

## Brier scores (lower is better; 50/50 baseline = 0.25)
- Reed: 0.025000; skill against 50/50 = 0.900000
  Bins: [{"lower":0,"upper":0.2,"count":1,"meanProbability":0.1,"observedRate":0},{"lower":0.2,"upper":0.4,"count":1,"meanProbability":0.2,"observedRate":0},{"lower":0.4,"upper":0.6,"count":0,"meanProbability":null,"observedRate":null},{"lower":0.6,"upper":0.8,"count":0,"meanProbability":null,"observedRate":null},{"lower":0.8,"upper":1,"count":2,"meanProbability":0.8500000000000001,"observedRate":1}]
- Fern: 0.365000; skill against 50/50 = -0.460000
  Bins: [{"lower":0,"upper":0.2,"count":0,"meanProbability":null,"observedRate":null},{"lower":0.2,"upper":0.4,"count":0,"meanProbability":null,"observedRate":null},{"lower":0.4,"upper":0.6,"count":2,"meanProbability":0.45,"observedRate":1},{"lower":0.6,"upper":0.8,"count":2,"meanProbability":0.6499999999999999,"observedRate":0},{"lower":0.8,"upper":1,"count":0,"meanProbability":null,"observedRate":null}]

## Supplied resolved events
{"id":"rain","label":"Wet afternoon","description":"Rain falls at the outdoor market during the afternoon.","outcome":1}
{"id":"sellout","label":"Bread sold out","description":"All loaves of bread sell before closing time.","outcome":0}
{"id":"delivery","label":"Timely delivery","description":"The produce delivery arrives before the market opens.","outcome":1}
{"id":"power","label":"Power failure","description":"An electrical power failure interrupts the market.","outcome":0}

## Complete reviewed register
- Original: {"id":"M1","vendor":"Reed","description":"Afternoon showers fall on the open air stalls.","value":90,"owner":"Forecast reviewer"}
  Reviewed: {"id":"M1","vendor":"Reed","description":"Afternoon showers fall on the open air stalls.","value":90,"owner":"=Owner\n\"second\", line","kind":"rain","proposed":"rain","evidence":[{"id":"rain","score":0.4593116208745958},{"id":"sellout","score":0.18858221811493597},{"id":"power","score":0.13457619804936194},{"id":"delivery","score":0.10566202995913598}],"decision":"approve","reviewNote":"=SUM(1,2)\n\"quoted\", verify evidence"}
- Original: {"id":"M2","vendor":"Fern","description":"Every loaf is purchased before the stall closes.","value":70,"owner":"Forecast reviewer"}
  Reviewed: {"id":"M2","vendor":"Fern","description":"Every loaf is purchased before the stall closes.","value":70,"owner":"Forecast reviewer","kind":"sellout","proposed":"sellout","evidence":[{"id":"sellout","score":0.7493213271858412},{"id":"delivery","score":0.4227774234854935},{"id":"rain","score":0.19576073393055188},{"id":"power","score":0.1643929860336098}],"decision":"approve","reviewNote":""}
- Original: {"id":"M3","vendor":"Reed","description":"The vegetable truck reaches the site ahead of opening.","value":80,"owner":"Forecast reviewer"}
  Reviewed: {"id":"M3","vendor":"Reed","description":"The vegetable truck reaches the site ahead of opening.","value":80,"owner":"Forecast reviewer","kind":"delivery","proposed":"delivery","evidence":[{"id":"delivery","score":0.5338494796853815},{"id":"sellout","score":0.250445743747097},{"id":"rain","score":0.14230655869081388},{"id":"power","score":0.10177200993466255}],"decision":"approve","reviewNote":""}
- Original: {"id":"M4","vendor":"Fern","description":"Electricity cuts out during the trading day.","value":60,"owner":"Forecast reviewer"}
  Reviewed: {"id":"M4","vendor":"Fern","description":"Electricity cuts out during the trading day.","value":60,"owner":"Forecast reviewer","kind":"power","proposed":"power","evidence":[{"id":"power","score":0.59242231670035},{"id":"rain","score":0.3012754773337302},{"id":"sellout","score":0.2443052037106605},{"id":"delivery","score":0.16460526631486458}],"decision":"approve","reviewNote":""}
- Original: {"id":"M5","vendor":"Reed","description":"Every loaf is purchased before the stall closes.","value":20,"owner":"Forecast reviewer"}
  Reviewed: {"id":"M5","vendor":"Reed","description":"Every loaf is purchased before the stall closes.","value":20,"owner":"Forecast reviewer","kind":"sellout","proposed":"sellout","evidence":[{"id":"sellout","score":0.7493213271858412},{"id":"delivery","score":0.4227774234854935},{"id":"rain","score":0.19576073393055188},{"id":"power","score":0.1643929860336098}],"decision":"approve","reviewNote":""}
- Original: {"id":"M6","vendor":"Fern","description":"Afternoon showers fall on the open air stalls.","value":40,"owner":"Forecast reviewer"}
  Reviewed: {"id":"M6","vendor":"Fern","description":"Afternoon showers fall on the open air stalls.","value":40,"owner":"Forecast reviewer","kind":"rain","proposed":"rain","evidence":[{"id":"rain","score":0.4593116208745958},{"id":"sellout","score":0.18858221811493597},{"id":"power","score":0.13457619804936194},{"id":"delivery","score":0.10566202995913598}],"decision":"approve","reviewNote":""}
- Original: {"id":"M7","vendor":"Reed","description":"Electricity cuts out during the trading day.","value":10,"owner":"Forecast reviewer"}
  Reviewed: {"id":"M7","vendor":"Reed","description":"Electricity cuts out during the trading day.","value":10,"owner":"Forecast reviewer","kind":"power","proposed":"power","evidence":[{"id":"power","score":0.59242231670035},{"id":"rain","score":0.3012754773337302},{"id":"sellout","score":0.2443052037106605},{"id":"delivery","score":0.16460526631486458}],"decision":"approve","reviewNote":""}
- Original: {"id":"M8","vendor":"Fern","description":"The vegetable truck reaches the site ahead of opening.","value":50,"owner":"Forecast reviewer"}
  Reviewed: {"id":"M8","vendor":"Fern","description":"The vegetable truck reaches the site ahead of opening.","value":50,"owner":"Forecast reviewer","kind":"delivery","proposed":"delivery","evidence":[{"id":"delivery","score":0.5338494796853815},{"id":"sellout","score":0.250445743747097},{"id":"rain","score":0.14230655869081388},{"id":"power","score":0.10177200993466255}],"decision":"approve","reviewNote":""}

AI retrieves event meaning only, not outcomes or probabilities. Scores describe this supplied sample, not future ability or statistical significance. Verify event identity, time horizon and outcome. No external action.
