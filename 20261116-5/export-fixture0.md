# Uncertainty Weave — reviewed measurement budget

Synthetic rectangular package: all lengths in cm, independent measurements. Output in cubic cm. Input uncertainty under 20% supports a local linear approximation only.

Model: y = 1 × length^(1) × width^(1) × height^(1) [cm³]. Independent inputs, first-order approximation.

3 sources = 3 approved + 0 held. Status: ready.

Output 100; combined standard uncertainty 1.5275252316519468; expanded uncertainty 3.0550504633038935 (supplied k=2). Relative expanded 3.0550504633038935%; worst-case-sum baseline 5.1547005383792515%; target 3.2%. Target met RSS / baseline: true / false. Not a confidence interval or certification.
Length: source a, standard u=0.05773502691896258 cm, sensitivity=10, variance share=0.14285714285714288
Width: source b, standard u=0.05 cm, sensitivity=20, variance share=0.4285714285714286
Height: source c, standard u=0.02 cm, sensitivity=50, variance share=0.4285714285714286

## Every source and review
- a: Length along the longest horizontal side of the carton; original {"id":"a","description":"Length along the longest horizontal side of the carton","value":10,"uncertainty":0.1,"kind":"rectangular","divisor":2}; reviewed length value=10 uncertainty=0.1 kind=rectangular divisor=2 [approve]
  
- b: Width across the short side of the rectangular package; original {"id":"b","description":"Width across the short side of the rectangular package","value":5,"uncertainty":0.05,"kind":"standard","divisor":2}; reviewed width value=5 uncertainty=0.05 kind=standard divisor=2 [approve]
  
- c: Vertical height from the base to top of the box; original {"id":"c","description":"Vertical height from the base to top of the box","value":2,"uncertainty":0.04,"kind":"expanded","divisor":2}; reviewed height value=2 uncertainty=0.04 kind=expanded divisor=2 [approve]
  

## Follow-up checklist
- [ ] Verify quantity identity, unit compatibility, model powers and coefficient. No automatic unit conversion.
- [ ] Check calibration evidence, uncertainty type and coverage divisor. Rectangular input means a symmetric half-width with uniform distribution.
- [ ] Verify independence. Shared calibration/covariance invalidates the RSS result. No covariance input or degrees-of-freedom calculation.
- [ ] Review the largest variance contributors for better measurement methods; never treat similarity as metrological evidence.
- [ ] Investigate biases, model inadequacy and nonlinear effects. A supplied output coverage factor does not establish a confidence level.
