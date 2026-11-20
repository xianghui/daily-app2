# Power Reserve — reviewed battery worksheet

Synthetic portable workshop. Constant-watt DC-equivalent loads; supplied measurements, not nameplate guesses.

Planning estimate only, not electrical design or a safety certificate. The piecewise Peukert extension assumes constant voltage, known battery-input watts, no recovery, stable temperature and a suitable measured exponent. It is mainly a lead-acid approximation, not a lithium BMS model. It omits surge power, voltage sag, wiring/inverter ratings, aging and thermal effects. Held loads are excluded, so this plan may be incomplete. A lower required Ah is not universally better or a promise of runtime. Verify manufacturer discharge curves and obtain qualified advice before use; never use this for life-critical loads. No equipment is controlled.

Required nominal Ah: 41.56360415206914; ideal Ah baseline: 32.5; energy Wh: 312; peak W: 108
Chosen battery: 40 Ah; within usable fraction: false; first estimated limit hour: 3.672048905007962

## Run sheet
0–1 h: 48 W / 4 A [r1]
1–3 h: 108 W / 9 A [r1, r2]
3–4 h: 48 W / 4 A [r1]

## Complete source review
### r1
Illuminate the repair table with the work lamps
approve; light; 0–4 h; units 2


### r2
Circulate air using the portable ventilator
approve; fan; 1–3 h; units 1
