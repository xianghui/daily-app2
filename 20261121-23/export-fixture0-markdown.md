# Synthetic packaging inspection

Exploratory batch-boundary Bernoulli likelihood-ratio worksheet, not a lot-release instruction. Preselect p0/p1 and error targets before observations; assume independent comparable binary outcomes and a stable protocol. Wald boundaries are nominal approximations; batched looks, overshoot, finite horizons, dependent outcomes and multiple protocols change error behavior. Never reset the evidence after an inconvenient result. AI similarity is not protocol equivalence. No inspection execution, purchases or account changes.

## Reviewed sequential evidence
{
  "lower": -2.197224577336219,
  "upper": 2.1972245773362196,
  "badIncrement": 2.0149030205422647,
  "goodIncrement": -0.1423162221802555,
  "streams": [
    {
      "id": "seal",
      "text": "Package heat seal integrity leak inspection",
      "batches": 3,
      "totalTested": 30,
      "totalDefective": 1,
      "stop": {
        "batch": "A2",
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
        "defective": 1,
        "batch": "A3",
        "threshold": 0.08499999999999999
      },
      "observedDifference": 10,
      "plannedRemainder": 10,
      "postBoundaryTested": 10
    },
    {
      "id": "print",
      "text": "Printed package barcode label readability inspection",
      "batches": 3,
      "totalTested": 30,
      "totalDefective": 7,
      "stop": {
        "batch": "B1",
        "observations": 10,
        "defective": 3,
        "llr": 5.048495506365005,
        "direction": "higher-defect evidence"
      },
      "direction": "higher-defect evidence",
      "lastActiveLLR": 5.048495506365005,
      "fixed": {
        "status": "higher sample rate",
        "observations": 30,
        "defective": 7,
        "batch": "B3",
        "threshold": 0.08499999999999999
      },
      "observedDifference": 20,
      "plannedRemainder": 20,
      "postBoundaryTested": 20
    }
  ],
  "trace": [
    {
      "id": "A1",
      "protocol": "seal",
      "tested": 10,
      "defective": 0,
      "cumulativeTested": 10,
      "cumulativeDefective": 0,
      "delta": -1.423162221802555,
      "llr": -1.423162221802555,
      "phase": "continue"
    },
    {
      "id": "B1",
      "protocol": "print",
      "tested": 10,
      "defective": 3,
      "cumulativeTested": 10,
      "cumulativeDefective": 3,
      "delta": 5.048495506365005,
      "llr": 5.048495506365005,
      "phase": "higher-defect evidence"
    },
    {
      "id": "A2",
      "protocol": "seal",
      "tested": 10,
      "defective": 0,
      "cumulativeTested": 20,
      "cumulativeDefective": 0,
      "delta": -1.423162221802555,
      "llr": -2.84632444360511,
      "phase": "lower-defect evidence"
    },
    {
      "id": "B2",
      "protocol": "print",
      "tested": 10,
      "defective": 4,
      "cumulativeTested": 20,
      "cumulativeDefective": 7,
      "delta": 7.205714749087526,
      "llr": null,
      "phase": "after first boundary · retained, not used"
    },
    {
      "id": "A3",
      "protocol": "seal",
      "tested": 10,
      "defective": 1,
      "cumulativeTested": 30,
      "cumulativeDefective": 1,
      "delta": 0.7340570209199653,
      "llr": null,
      "phase": "after first boundary · retained, not used"
    },
    {
      "id": "B3",
      "protocol": "print",
      "tested": 10,
      "defective": 0,
      "cumulativeTested": 30,
      "cumulativeDefective": 7,
      "delta": -1.423162221802555,
      "llr": null,
      "phase": "after first boundary · retained, not used"
    }
  ],
  "totalTested": 60,
  "totalDefective": 8
}

## Every reviewed source batch
### A1
Pouch heat-seal leak test
AI: seal; reviewed: seal; 0 defective / 10 tested; approve


### B1
Printed barcode label scan readability check
AI: print; reviewed: print; 3 defective / 10 tested; approve


### A2
Heat sealed pouch leakage inspection
AI: seal; reviewed: seal; 0 defective / 10 tested; approve


### B2
Barcode print scanner readability inspection
AI: print; reviewed: print; 4 defective / 10 tested; approve


### A3
Package heat seal integrity test
AI: seal; reviewed: seal; 1 defective / 10 tested; approve


### B3
Printed barcode label quality check
AI: print; reviewed: print; 0 defective / 10 tested; approve


## Method
Real MiniLM embeddings reconcile rough batch descriptions with supplied protocol definitions. Deterministic log likelihood = x ln(p1/p0) + (n−x) ln((1−p1)/(1−p0)); inspect only supplied batch ends, freeze at the first crossing of ln(beta/(1−alpha)) or ln((1−beta)/alpha). Later batches remain in the audit, never silently used to reverse a stop. Fixed-count baseline inspects the first whole-batch prefix reaching fixedN and compares its rate with (p0+p1)/2; this simple baseline has no matched error guarantee. A positive observed observation difference is descriptive, not a time saving or accuracy claim. Planned remainder compares a stop with an unobserved supplied target, not measured saved work.
