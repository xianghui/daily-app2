# Handoff Harbor transition worksheet
4 retained rows; 4 approved; 0 held.
Workshop repair: 10 observed outgoing transitions; expected transitions to any terminal = 3.076923076923077.
  Repair completed: one-step baseline 0.4; eventual scenario 0.7692307692307694
  Repair abandoned: one-step baseline 0; eventual scenario 0.23076923076923078
Waiting for parts: 10 observed outgoing transitions; expected transitions to any terminal = 3.4615384615384617.
  Repair completed: one-step baseline 0; eventual scenario 0.6153846153846155
  Repair abandoned: one-step baseline 0.2; eventual scenario 0.38461538461538464

## Reviewed handoff follow-ups
- T1: repair → parts; count 6; approve
  Owner: =Owner
line, "two"
  =SUM(1,2)
  "quoted", recheck
- T2: repair → done; count 4; approve
  Owner: Operations analyst
  
- T3: parts → repair; count 8; approve
  Owner: Operations analyst
  
- T4: parts → lost; count 2; approve
  Owner: Operations analyst
  

Conditional absorbing Markov worksheet, not a forecast or causal intervention estimate. Stationary, memoryless transitions, representative complete observation and truly absorbing terminal states required. Expected steps include the final transition, not elapsed time or distinct cases. Held rows excluded from model, preserved in audit.