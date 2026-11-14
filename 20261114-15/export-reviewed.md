# Budget Beacon — Synthetic media review

6 records retained; 0 held. Complete supplied window coverage; source accuracy not verified.

## Reviewed follow-up worksheet
### Account sign-in
- [ ] Investigate exhausted observed-request budget
- Reviewed coverage 180/180 minutes; 12000 requests; 12 bad requests.
- Good rate 0.999 vs window-average baseline 0.9963
- Observed-request budget 12; remaining 0; aggregate burn 1; latest-window burn 10

### Image delivery
- [ ] Investigate latest-window burn
- Reviewed coverage 180/180 minutes; 10200 requests; 18 bad requests.
- Good rate 0.9982352941176471 vs window-average baseline 0.973
- Observed-request budget 102; remaining 84; aggregate burn 0.17647058823529413; latest-window burn 4

## Complete reviewed register
- Original: {"id":"A1","description":"Authenticating members with their passwords.","start":0,"end":60,"calls":10000,"errors":1,"owner":"Service reviewer"}
  Reviewed: {"id":"A1","description":"Authenticating members with their passwords.","start":0,"end":60,"calls":10000,"errors":1,"owner":"=Owner\n\"second\", line","kind":"signin","proposed":"signin","evidence":[{"id":"signin","score":0.6878215161472514},{"id":"images","score":0.15341250507483759}],"decision":"approve","reviewNote":"=SUM(1,2)\n\"quoted\", investigate"}
- Original: {"id":"I1","description":"Serving picture thumbnails from cached media.","start":0,"end":60,"calls":100,"errors":4,"owner":"Service reviewer"}
  Reviewed: {"id":"I1","description":"Serving picture thumbnails from cached media.","start":0,"end":60,"calls":100,"errors":4,"owner":"Service reviewer","kind":"images","proposed":"images","evidence":[{"id":"images","score":0.7946998257468592},{"id":"signin","score":-0.002592455560854987}],"decision":"approve","reviewNote":""}
- Original: {"id":"A2","description":"Verifying user credentials to enter an account.","start":60,"end":120,"calls":1000,"errors":1,"owner":"Service reviewer"}
  Reviewed: {"id":"A2","description":"Verifying user credentials to enter an account.","start":60,"end":120,"calls":1000,"errors":1,"owner":"Service reviewer","kind":"signin","proposed":"signin","evidence":[{"id":"signin","score":0.6245068258559512},{"id":"images","score":0.019784730055468425}],"decision":"approve","reviewNote":""}
- Original: {"id":"I2","description":"Delivering photo files to article readers.","start":60,"end":120,"calls":10000,"errors":10,"owner":"Service reviewer"}
  Reviewed: {"id":"I2","description":"Delivering photo files to article readers.","start":60,"end":120,"calls":10000,"errors":10,"owner":"Service reviewer","kind":"images","proposed":"images","evidence":[{"id":"images","score":0.7099372939383872},{"id":"signin","score":0.07041389708046582}],"decision":"approve","reviewNote":""}
- Original: {"id":"A3","description":"Logging members into their profiles.","start":120,"end":180,"calls":1000,"errors":10,"owner":"Service reviewer"}
  Reviewed: {"id":"A3","description":"Logging members into their profiles.","start":120,"end":180,"calls":1000,"errors":10,"owner":"Service reviewer","kind":"signin","proposed":"signin","evidence":[{"id":"signin","score":0.4989831740518683},{"id":"images","score":0.1689268446930302}],"decision":"approve","reviewNote":""}
- Original: {"id":"I3","description":"Fetching small preview pictures.","start":120,"end":180,"calls":100,"errors":4,"owner":"Service reviewer"}
  Reviewed: {"id":"I3","description":"Fetching small preview pictures.","start":120,"end":180,"calls":100,"errors":4,"owner":"Service reviewer","kind":"images","proposed":"images","evidence":[{"id":"images","score":0.5826483638950056},{"id":"signin","score":0.003663100737982346}],"decision":"approve","reviewNote":""}

Budget = observed requests × (1 − target). Burn = bad-request fraction / allowed bad-request fraction. Window-average baseline weights windows equally, not requests. No projected future traffic, fixed monthly budget, paging, incident diagnosis or operational control. Targets and error definitions are user supplied. AI matches meanings only.
