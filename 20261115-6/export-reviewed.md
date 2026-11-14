# Circuit Cove capacity review
4 records retained; 4 approved; 0 held.

## charge
2 approved traffic rows; 3.5 offered erlangs. Current 3 channels: blocking 0.4021101992966003; expected lost arrivals/hour 3.2168815943728024.
Occupancy-only 80% baseline 5 channels: blocking 0.1541120698350404. Target 0.02; minimum within cap 8. 

## wash
1 approved traffic rows; 1.6666666666666667 offered erlangs. Current 2 channels: blocking 0.3424657534246575; expected lost arrivals/hour 3.4246575342465753.
Occupancy-only 80% baseline 3 channels: blocking 0.159846547314578. Target 0.1; minimum within cap 4. 

## inflate
1 approved traffic rows; 0.6 offered erlangs. Current 1 channels: blocking 0.37499999999999994; expected lost arrivals/hour 4.499999999999999.
Occupancy-only 80% baseline 1 channels: blocking 0.37499999999999994. Target 0.05; minimum within cap 3. 

- W1: charge; approve; 6 offered arrivals/hour × 25 minutes.
  Owner: =Owner
line, "two"
  =SUM(1,2)
  "quoted", recheck
- W2: wash; approve; 10 offered arrivals/hour × 10 minutes.
  Owner: Wash operations
  
- W3: inflate; approve; 12 offered arrivals/hour × 3 minutes.
  Owner: Forecourt
  
- W4: charge; approve; 2 offered arrivals/hour × 30 minutes.
  Owner: Energy operations
  

Conditional steady-state Erlang-B estimates, not forecasts or measured loss. Poisson offered arrivals, independent holding times, identical fully shared channels, no waiting/retries/reservations/overflow. All rows must describe simultaneous nonoverlapping traffic classes. No provisioning or external actions.