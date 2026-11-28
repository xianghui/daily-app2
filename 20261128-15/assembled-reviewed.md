# Synthetic loaded indicator handoff

Nominal DC resistive-load planning only. Not hardware or safety authorization.

## L1 — approve

Source: Data acquisition analog voltage channel ten kilohm resistive load

Instrument DAQ; verified load 10000 Ω. Supply 12 V; target 4 V ±10%. Current cap 10 mA; power cap 100 mW per resistor.

Upper 22000 Ω; lower 470000 Ω. Loaded output 3.6959370904325035 V; supply 0.3774574049803408 mA. Lowest supply current among offered pairs meeting loaded-voltage, current and nominal resistor-power bounds.

Old pair: loaded 2.2222222222222223 V versus unloaded 3.75 V; all bounds met: false.

Reviewer: =SUM(1,2)
Check "load", approved

## L2 — approve

Source: Moving coil analog panel voltmeter low resistance one kilohm input

Instrument PANEL; verified load 1000 Ω. Supply 12 V; target 4 V ±10%. Current cap 10 mA; power cap 100 mW per resistor.

Upper 2200 Ω; lower 470000 Ω. Loaded output 3.7445226397556755 V; supply 3.752489709201965 mA. Lowest supply current among offered pairs meeting loaded-voltage, current and nominal resistor-power bounds.

Old pair: loaded 2.2222222222222223 V versus unloaded 3.75 V; all bounds met: false.

Reviewer: 

Computed baseline failures 2; unloaded-voltage false passes 2; infeasible rows 0. No measured accuracy/time claim.
