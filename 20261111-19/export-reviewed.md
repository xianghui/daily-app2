# Queue Cushion — reviewed staffing scenario

Community services

Erlang C estimates, not observed service performance. No abandonment, no shared staffing, no shrinkage allowance.

Target: 90.0% within 60 seconds; occupancy cap 80.0%; maximum 30 agents per queue.

## library · planned
25.5 contacts/hour; 4 minutes/contact
4 simultaneous agents; predicted service 93.9%; predicted mean wait 11.3 seconds.
Occupancy-only baseline: 3 agents, predicted service 77.4%

## fitness · planned
15 contacts/hour; 7 minutes/contact
4 simultaneous agents; predicted service 91.4%; predicted mean wait 22.1 seconds.
Occupancy-only baseline: 3 agents, predicted service 72.1%

## housing · planned
10 contacts/hour; 10 minutes/contact
4 simultaneous agents; predicted service 91.9%; predicted mean wait 26.4 seconds.
Occupancy-only baseline: 3 agents, predicted service 73.8%

## All reviewed streams
C1 · Readers asking to extend their borrowed novels · library · 25.5/hour · approve · =1+1, "review"
second line
C2 · Visitors booking swimming lessons and workout classes · fitness · 15/hour · approve · 
C3 · Tenants need repairs in their rented apartments · housing · 10/hour · approve · 

Queue totals repeat per stream in CSV; do not sum repeated totals. JSON preserves every original and reviewed record.
