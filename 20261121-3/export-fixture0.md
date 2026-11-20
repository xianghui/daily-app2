# Lag Loom — reviewed alignment worksheet

Synthetic equal-interval workshop logs. Positive lag means trace occurs later than reference.

Exploratory finite-window alignment only. Correlation is not causation or clock calibration. Positive lag pairs reference[i] with trace[i+lag]. Shifted windows have different overlap; edge optima, periodic signals, trends and short records can mislead. Constant windows are unavailable, tied maxima are ambiguous. No interpolation, resampling, clock changes or source deletions.

## r1 → heat
Candidate lag 2 samples (20 seconds); overlap 10; zero-lag r 0.6670119601631492; best r 1; ambiguous false

## r2 → flow
Candidate lag -1 samples (-10 seconds); overlap 11; zero-lag r -0.3441945531918192; best r 1; ambiguous false

## Complete source review
### r1
Thermometer readings inside the heated drying enclosure
approve; heat
Original [0,0,2,5,1,8,3,7,4,9,2,6]
Reviewed [0,0,2,5,1,8,3,7,4,9,2,6]


### r2
Liquid throughput readings from the pipe water meter
approve; flow
Original [2,6,1,5,9,3,7,0,4,8,2,0]
Reviewed [2,6,1,5,9,3,7,0,4,8,2,0]
