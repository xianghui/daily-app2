# Discovery Ledger — reviewed multiple-testing worksheet

Alpha: 0.05. 5 original observations = 5 approved + 0 held.
Ready families 2; blocked 0. Counts across READY families only: raw 4, BH 4, Holm 4 out of 5 registered tests. No collection-wide error guarantee.

## Predefined training endpoints [ready]
- safety (source w1): p 0.001; BH adjusted 0.003; Holm adjusted 0.003; raw/BH/Holm at alpha true/true/true
- assembly (source w2): p 0.012; BH adjusted 0.018000000000000002; Holm adjusted 0.024; raw/BH/Holm at alpha true/true/true
- inspection (source w3): p 0.049; BH adjusted 0.04900000000000001; Holm adjusted 0.049; raw/BH/Holm at alpha true/true/true

## Predefined equipment endpoints [ready]
- energy (source w4): p 0.02; BH adjusted 0.04; Holm adjusted 0.04; raw/BH/Holm at alpha true/true/true
- noise (source w5): p 0.08; BH adjusted 0.08; Holm adjusted 0.08; raw/BH/Holm at alpha false/false/false

## Complete originals and review
- w1: Workers answering occupational safety questions; original p 0.001; reviewed safety, p 0.001 [approve]
  =SUM(1,2)
"quoted", verify
- w2: Minutes spent putting mechanical products together; original p 0.012; reviewed assembly, p 0.012 [approve]
  
- w3: Inspectors correctly spotting faulty components; original p 0.049; reviewed inspection, p 0.049 [approve]
  
- w4: Electrical power used by factory equipment; original p 0.02; reviewed energy, p 0.02 [approve]
  
- w5: Loudness of sound from industrial machines; original p 0.08; reviewed noise, p 0.08 [approve]
  

## Interpretation checklist
- [ ] Verify the hypothesis register and families were defined before inspecting results; include every planned test.
- [ ] Verify each p-value came from a valid analysis; AI cannot check statistical assumptions or calculate p-values from summaries.
- [ ] Choose a correction for the scientific question, not whichever passes more tests.
- [ ] BH controls family FDR under independence or suitable positive dependence, not arbitrary dependence. Holm controls family-wise error under arbitrary dependence for valid p-values.
- [ ] Adjusted p-values are thresholds, not probabilities that a claim is false. Nonsignificance does not prove no effect; no effect-size or practical-importance conclusion follows.
- [ ] Resolve all blocked families before reporting. This worksheet does not control pooled error across separately defined families.
