# Prefix Press — reviewed event codebook

Synthetic workshop instrumentation; this codebook is not used to control equipment.

3 originals = 3 approved + 0 held. Status: ready.

temperature: 1; count 80
vibration: 01; count 15
pressure: 00; count 5

Weighted Huffman payload 120 bits; fixed-width baseline 200 bits; dictionary/header/padding excluded.

Sample bits: 1001011
Decoded: temperature, pressure, temperature, vibration, temperature
Round-trip: true

## Every source and review
- t: How hot the probe reports the enclosure is; original count 80; reviewed temperature count 80 [approve]
  =SUM(1,2)
"quoted", verify
- v: Oscillation intensity picked up on the rotating machine; original count 15; reviewed vibration count 15 [approve]
  
- p: Pneumatic line compression measured in the pipe; original count 5; reviewed pressure count 5 [approve]
  

## Follow-up
- [ ] Verify meanings and observation window; do not confuse similarity with identity.
- [ ] Validate future traffic and include dictionary, framing and padding costs before adoption.
- [ ] Preserve this codebook alongside its bitstream; this worksheet is not a production codec.
