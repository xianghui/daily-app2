# Synthetic website QA inspection

Exploratory batch-boundary Bernoulli likelihood-ratio worksheet, not a lot-release instruction. Preselect p0/p1 and error targets before observations; assume independent comparable binary outcomes and a stable protocol. Wald boundaries are nominal approximations; batched looks, overshoot, finite horizons, dependent outcomes and multiple protocols change error behavior. Never reset the evidence after an inconvenient result. AI similarity is not protocol equivalence. No inspection execution, purchases or account changes.

## Reviewed sequential evidence
{
  "lower": -2.197224577336219,
  "upper": 2.1972245773362196,
  "badIncrement": 2.0149030205422647,
  "goodIncrement": -0.1423162221802555,
  "streams": [
    {
      "id": "links",
      "text": "Website hyperlink destination broken link test",
      "batches": 3,
      "totalTested": 30,
      "totalDefective": 2,
      "stop": {
        "batch": "L1",
        "observations": 10,
        "defective": 2,
        "llr": 2.891276263642485,
        "direction": "higher-defect evidence"
      },
      "direction": "higher-defect evidence",
      "lastActiveLLR": 2.891276263642485,
      "fixed": {
        "status": "lower sample rate",
        "observations": 30,
        "defective": 2,
        "batch": "L3",
        "threshold": 0.08499999999999999
      },
      "observedDifference": 20,
      "plannedRemainder": 20,
      "postBoundaryTested": 20
    },
    {
      "id": "contrast",
      "text": "Text foreground background color contrast accessibility test",
      "batches": 3,
      "totalTested": 30,
      "totalDefective": 2,
      "stop": {
        "batch": "C2",
        "observations": 20,
        "defective": 0,
        "llr": -2.84632444360511,
        "direction": "lower-defect evidence"
      },
      "direction": "lower-defect evidence",
      "lastActiveLLR": -2.84632444360511,
      "fixed": {
        "status": "lower sample rate",
        "observations": 30,
        "defective": 2,
        "batch": "C3",
        "threshold": 0.08499999999999999
      },
      "observedDifference": 10,
      "plannedRemainder": 10,
      "postBoundaryTested": 10
    }
  ],
  "trace": [
    {
      "id": "L1",
      "protocol": "links",
      "tested": 10,
      "defective": 2,
      "cumulativeTested": 10,
      "cumulativeDefective": 2,
      "delta": 2.891276263642485,
      "llr": 2.891276263642485,
      "phase": "higher-defect evidence"
    },
    {
      "id": "C1",
      "protocol": "contrast",
      "tested": 10,
      "defective": 0,
      "cumulativeTested": 10,
      "cumulativeDefective": 0,
      "delta": -1.423162221802555,
      "llr": -1.423162221802555,
      "phase": "continue"
    },
    {
      "id": "L2",
      "protocol": "links",
      "tested": 10,
      "defective": 0,
      "cumulativeTested": 20,
      "cumulativeDefective": 2,
      "delta": -1.423162221802555,
      "llr": null,
      "phase": "after first boundary · retained, not used"
    },
    {
      "id": "C2",
      "protocol": "contrast",
      "tested": 10,
      "defective": 0,
      "cumulativeTested": 20,
      "cumulativeDefective": 0,
      "delta": -1.423162221802555,
      "llr": -2.84632444360511,
      "phase": "lower-defect evidence"
    },
    {
      "id": "L3",
      "protocol": "links",
      "tested": 10,
      "defective": 0,
      "cumulativeTested": 30,
      "cumulativeDefective": 2,
      "delta": -1.423162221802555,
      "llr": null,
      "phase": "after first boundary · retained, not used"
    },
    {
      "id": "C3",
      "protocol": "contrast",
      "tested": 10,
      "defective": 2,
      "cumulativeTested": 30,
      "cumulativeDefective": 2,
      "delta": 2.891276263642485,
      "llr": null,
      "phase": "after first boundary · retained, not used"
    }
  ],
  "totalTested": 60,
  "totalDefective": 4
}

## Every reviewed source batch
### L1
Broken website hyperlink destination checks
AI: links; reviewed: links; 2 defective / 10 tested; approve
=SUM(1,2)
Reviewed "source", preserved.

### C1
Text and background colour contrast accessibility audit
AI: contrast; reviewed: contrast; 0 defective / 10 tested; approve


### L2
Website broken links destination inspection
AI: links; reviewed: links; 0 defective / 10 tested; approve


### C2
Foreground background text colour contrast check
AI: contrast; reviewed: contrast; 0 defective / 10 tested; approve


### L3
Hyperlink destination broken link verification
AI: links; reviewed: links; 0 defective / 10 tested; approve


### C3
Text foreground background color contrast inspection
AI: contrast; reviewed: contrast; 2 defective / 10 tested; approve


## Method
Real MiniLM embeddings reconcile rough batch descriptions with supplied protocol definitions. Deterministic log likelihood = x ln(p1/p0) + (n−x) ln((1−p1)/(1−p0)); inspect only supplied batch ends, freeze at the first crossing of ln(beta/(1−alpha)) or ln((1−beta)/alpha). Later batches remain in the audit, never silently used to reverse a stop. Fixed-count baseline inspects the first whole-batch prefix reaching fixedN and compares its rate with (p0+p1)/2; this simple baseline has no matched error guarantee. A positive observed observation difference is descriptive, not a time saving or accuracy claim. Planned remainder compares a stop with an unobserved supplied target, not measured saved work.
