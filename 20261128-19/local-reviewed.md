# Synthetic sensor handoff: greenhouse and motor

Nominal single-pole RC worksheet. Ideal unloaded output, zero source impedance. Not a circuit simulation or hardware authorization.

## S1 — approve

Source: Greenhouse temperature and humidity change slowly; suppress electrical mains hum

Profile: CLIMATE

Pair: R100000 / C2200; R 100000 Ω; C 2200 nF; cutoff 0.7234315595086153 Hz; pass loss 0.31985880347033924 dB; rejection 36.79236013284233 dB; 1% settling 1013.1374409173801 ms. Largest allowed resistance meeting all nominal constraints; smallest capacitor breaks ties

Reviewer: =SUM(1,2)
Check "geometry", approved

## S2 — approve

Source: Motor vibration sensor must follow rapid mechanical oscillations

Profile: VIBRATION

Pair: R10000 / C47; R 10000 Ω; C 47 nF; cutoff 338.6275384933943 Hz; pass loss 0.3631256929447587 dB; rejection 23.40482904568664 dB; 1% settling 2.1644299874144037 ms. Largest allowed resistance meeting all nominal constraints; smallest capacitor breaks ties

Reviewer: 

Cutoff-at-pass-frequency baseline misses: 1; constrained misses: 0. Computed checks, not measured performance.
