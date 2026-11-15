# Uncertainty Weave — reviewed measurement budget

Synthetic density worksheet. Mass in grams, displacement volume in mL. Independent inputs; no covariance or systematic-bias correction. Output in g/mL.

Model: y = 1 × mass^(1) × volume^(-1) [g/mL]. Independent inputs, first-order approximation.

2 sources = 2 approved + 0 held. Status: ready.

Output 5; combined standard uncertainty 0.02929732638541158; expanded uncertainty 0.05859465277082316 (supplied k=2). Relative expanded 1.171893055416463%; worst-case-sum baseline 1.3547005383792516%; target 1%. Target met RSS / baseline: false / false. Not a confidence interval or certification.
Mass: source m, standard u=0.1 g, sensitivity=0.05, variance share=0.029126213592233004
Volume: source v, standard u=0.11547005383792516 mL, sensitivity=-0.25, variance share=0.9708737864077669

## Every source and review
- m: Weight of the specimen on the laboratory balance; original {"id":"m","description":"Weight of the specimen on the laboratory balance","value":100,"uncertainty":0.2,"kind":"expanded","divisor":2}; reviewed mass value=100 uncertainty=0.2 kind=expanded divisor=2 [approve]
  
- v: Amount of water displaced by the immersed specimen; original {"id":"v","description":"Amount of water displaced by the immersed specimen","value":20,"uncertainty":0.2,"kind":"rectangular","divisor":2}; reviewed volume value=20 uncertainty=0.2 kind=rectangular divisor=2 [approve]
  

## Follow-up checklist
- [ ] Verify quantity identity, unit compatibility, model powers and coefficient. No automatic unit conversion.
- [ ] Check calibration evidence, uncertainty type and coverage divisor. Rectangular input means a symmetric half-width with uniform distribution.
- [ ] Verify independence. Shared calibration/covariance invalidates the RSS result. No covariance input or degrees-of-freedom calculation.
- [ ] Review the largest variance contributors for better measurement methods; never treat similarity as metrological evidence.
- [ ] Investigate biases, model inadequacy and nonlinear effects. A supplied output coverage factor does not establish a confidence level.
