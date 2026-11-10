# Bundle Bench — Studio turnaround
Currency: EUR
Computed reviewed standalone cents: 9000
Computed bundle plan cents: 6500
Difference cents (not a quote or measured saving): 2500
Held notes: 1

## Camera A
Sources: S1, S2, S3
Unique requested services: C, F
- Refresh [C, F]: 6500 cents

## Complete source audit
{"id":"S1","asset":"Camera A","selected":"C","proposed":"C","candidates":[{"service":"C","cosine":0.6251618193807288},{"service":"F","cosine":0.293601040387819},{"service":"L","cosine":0.19616325563238102}],"decision":"approve","note":"=1+1\nReviewed, \"verified\" 🪷","source":"Dust on the imaging chip leaves dark dots in photographs."}
{"id":"S2","asset":"Camera A","selected":"C","proposed":"L","candidates":[{"service":"L","cosine":0.5513716977854228},{"service":"F","cosine":0.3606663935212013},{"service":"C","cosine":0.21039360737497828}],"decision":"approve","note":"","source":"The autofocus misses its target and needs alignment."}
{"id":"S3","asset":"Camera A","selected":"F","proposed":"F","candidates":[{"service":"F","cosine":0.8281294346368312},{"service":"C","cosine":0.377471294832594},{"service":"L","cosine":0.22204089116399375}],"decision":"approve","note":"","source":"Install the newest internal camera software release."}
{"id":"S4","asset":"Camera B","selected":"C","proposed":"F","candidates":[{"service":"F","cosine":0.5028867225066629},{"service":"C","cosine":0.47118278688521925},{"service":"L","cosine":0.1581123946898965}],"decision":"hold","note":"","source":"Remove specks from the imaging chip."}