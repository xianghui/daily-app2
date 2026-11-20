# Power Reserve — reviewed battery worksheet

Synthetic off-grid digitization demo. Equipment watts are DC-equivalent battery input, including conversion loss.

Planning estimate only, not electrical design or a safety certificate. The piecewise Peukert extension assumes constant voltage, known battery-input watts, no recovery, stable temperature and a suitable measured exponent. It is mainly a lead-acid approximation, not a lithium BMS model. It omits surge power, voltage sag, wiring/inverter ratings, aging and thermal effects. Held loads are excluded, so this plan may be incomplete. A lower required Ah is not universally better or a promise of runtime. Verify manufacturer discharge curves and obtain qualified advice before use; never use this for life-critical loads. No equipment is controlled.

Required nominal Ah: 28.339476841610818; ideal Ah baseline: 24; energy Wh: 432; peak W: 168
Chosen battery: 30 Ah; within usable fraction: true; first estimated limit hour: not reached

## Run sheet
0–1 h: 120 W / 5 A [s1]
1–2 h: 168 W / 7 A [s1, s2]
2–5 h: 48 W / 2 A [s2]

## Complete source review
### s1
Show the slides on the large projection screen
approve; projector; 0–2 h; units 1
=SUM(1,2)
"reviewed", with newline

### s2
Digitize paper pages into image files with the scanning machine
approve; scanner; 1–5 h; units 1
