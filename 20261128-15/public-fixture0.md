# Synthetic high-impedance bench handoff

Nominal DC resistive-load planning only. Not hardware or safety authorization.

## M1 — approve

Source: Handheld digital multimeter DC voltmeter high impedance input

Instrument DMM; verified load 10000000 Ω. Supply 12 V; target 4 V ±10%. Current cap 10 mA; power cap 100 mW per resistor.

Upper 470000 Ω; lower 220000 Ω. Loaded output 3.7695976240111944 V; supply 0.01751149441699746 mA. Lowest supply current among offered pairs meeting loaded-voltage, current and nominal resistor-power bounds.

Old pair: loaded 3.724394785847299 V versus unloaded 3.75 V; all bounds met: true.

Reviewer: 

## M2 — approve

Source: Oscilloscope direct cable into one megohm input without attenuation probe

Instrument SCOPE; verified load 1000000 Ω. Supply 12 V; target 4 V ±10%. Current cap 10 mA; power cap 100 mW per resistor.

Upper 100000 Ω; lower 47000 Ω. Loaded output 3.717864205669084 V; supply 0.08282135794330918 mA. Lowest supply current among offered pairs meeting loaded-voltage, current and nominal resistor-power bounds.

Old pair: loaded 3.508771929824561 V versus unloaded 3.75 V; all bounds met: false.

Reviewer: 

Computed baseline failures 1; unloaded-voltage false passes 1; infeasible rows 0. No measured accuracy/time claim.
