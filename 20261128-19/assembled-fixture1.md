# Synthetic sensor handoff: room lighting and music meter

Nominal single-pole RC worksheet. Ideal unloaded output, zero source impedance. Not a circuit simulation or hardware authorization.

## S3 — approve

Source: Ambient room brightness tracking with high frequency flicker rejection

Profile: LIGHT

Pair: R47000 / C100; R 47000 Ω; C 100 nF; cutoff 33.862753849339434 Hz; pass loss 0.09366729753741382 dB; rejection 29.410531667261782 dB; 1% settling 21.644299874144032 ms. Largest allowed resistance meeting all nominal constraints; smallest capacitor breaks ties

Reviewer: 

## S4 — approve

Source: Music loudness envelope meter; smooth audio carrier ripple, keep dynamics

Profile: ENVELOPE

Pair: R22000 / C47; R 22000 Ω; C 47 nF; cutoff 153.92160840608832 Hz; pass loss 0.0727117267156416 dB; rejection 36.25503694492738 dB; 1% settling 4.761745972311687 ms. Largest allowed resistance meeting all nominal constraints; smallest capacitor breaks ties

Reviewer: 

Cutoff-at-pass-frequency baseline misses: 2; constrained misses: 0. Computed checks, not measured performance.
