# Lag Loom — reviewed alignment worksheet

Synthetic equally spaced archive monitoring traces with shifted logger starts.

Exploratory finite-window alignment only. Correlation is not causation or clock calibration. Positive lag pairs reference[i] with trace[i+lag]. Shifted windows have different overlap; edge optima, periodic signals, trends and short records can mislead. Constant windows are unavailable, tied maxima are ambiguous. No interpolation, resampling, clock changes or source deletions.

## s1 → light
Candidate lag 1 samples (60 seconds); overlap 11; zero-lag r -0.43200256487250616; best r 1; ambiguous false

## s2 → humidity
Candidate lag -2 samples (-120 seconds); overlap 10; zero-lag r -0.030005815299916194; best r 1; ambiguous false

## Complete source review
### s1
Brightness readings from the room illumination detector
approve; light
Original [0,2,5,1,8,3,7,4,9,2,6,0]
Reviewed [0,2,5,1,8,3,7,4,9,2,6,0]


### s2
Moisture levels in the air from the hygrometer
approve; humidity
Original [6,1,5,9,3,7,0,4,8,2,0,0]
Reviewed [6,1,5,9,3,7,0,4,8,2,0,0]
