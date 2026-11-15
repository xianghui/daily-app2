# Discovery Ledger — reviewed multiple-testing worksheet

Alpha: 0.05. 4 original observations = 4 approved + 0 held.
Ready families 1; blocked 0. Counts across READY families only: raw 3, BH 1, Holm 1 out of 4 registered tests. No collection-wide error guarantee.

## Predefined customer journey endpoints [ready]
- checkout (source a): p 0.01; BH adjusted 0.04; Holm adjusted 0.04; raw/BH/Holm at alpha true/true/true
- newsletter (source c): p 0.03; BH adjusted 0.05333333333333334; Holm adjusted 0.09; raw/BH/Holm at alpha true/false/false
- search (source b): p 0.04; BH adjusted 0.05333333333333334; Holm adjusted 0.09; raw/BH/Holm at alpha true/false/false
- returns (source d): p 0.2; BH adjusted 0.2; Holm adjusted 0.2; raw/BH/Holm at alpha false/false/false

## Complete originals and review
- a: Customers finishing their online purchases; original p 0.01; reviewed checkout, p 0.01 [approve]
  
- b: Shoppers locating products through search; original p 0.04; reviewed search, p 0.04 [approve]
  
- c: Readers joining the email mailing list; original p 0.03; reviewed newsletter, p 0.03 [approve]
  
- d: Buyers sending back items for refunds; original p 0.2; reviewed returns, p 0.2 [approve]
  

## Interpretation checklist
- [ ] Verify the hypothesis register and families were defined before inspecting results; include every planned test.
- [ ] Verify each p-value came from a valid analysis; AI cannot check statistical assumptions or calculate p-values from summaries.
- [ ] Choose a correction for the scientific question, not whichever passes more tests.
- [ ] BH controls family FDR under independence or suitable positive dependence, not arbitrary dependence. Holm controls family-wise error under arbitrary dependence for valid p-values.
- [ ] Adjusted p-values are thresholds, not probabilities that a claim is false. Nonsignificance does not prove no effect; no effect-size or practical-importance conclusion follows.
- [ ] Resolve all blocked families before reporting. This worksheet does not control pooled error across separately defined families.
