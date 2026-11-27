# Synthetic detail and establishing shots

REVIEWED FOCUS WORKSHEET — geometrical estimate, verify with camera

## detail · approve
Source: Close detail one hundred millimetre macro lens on crop sensor
Reference: MACRO; 100 mm; CoC 0.02 mm; widest f/2.8
Subject band: 0.55–0.6 m
Reviewer: 
Result: infeasible; focus 0.5739130434782609 m; f/—
Near limit — m; far limit — m
No listed stop within the supplied lens/ceiling covers both bounds

## room · approve
Source: Wide angle landscape twenty four millimetre lens full frame
Reference: WIDE; 24 mm; CoC 0.03 mm; widest f/2.8
Subject band: 1–5 m
Reviewer: 
Result: feasible; focus 1.6666666666666667 m; f/8
Near limit 0.9894459102902374 m; far limit 5.28169014084507 m
Both subject bounds covered in the thin-lens model

## Summary
{
  "shots": 2,
  "held": 0,
  "feasible": 1,
  "infeasible": 1,
  "baselineDifferences": 1
}

## Full optical worksheet and arithmetic-focus baseline
[
  {
    "id": "detail",
    "status": "infeasible",
    "reason": "No listed stop within the supplied lens/ceiling covers both bounds",
    "focus": 0.5739130434782609,
    "aperture": null,
    "near": null,
    "far": null,
    "infinity": false,
    "baseline": {
      "focus": 0.575,
      "aperture": null,
      "near": null,
      "far": null,
      "feasible": false
    },
    "requiredF": 45.87155963302752
  },
  {
    "id": "room",
    "status": "feasible",
    "reason": "Both subject bounds covered in the thin-lens model",
    "focus": 1.6666666666666667,
    "aperture": 8,
    "near": 0.9894459102902374,
    "far": 5.28169014084507,
    "infinity": false,
    "baseline": {
      "focus": 3,
      "aperture": 16,
      "near": 0.8620689655172414,
      "far": null,
      "feasible": true
    },
    "requiredF": 7.792207792207792
  }
]

Finite subject bands only. No diffraction, focus breathing, pupil magnification, field curvature, lens markings or sensor-resolution model. Sample lenses are synthetic. Infinity is explicit; null otherwise means unavailable, not zero. Verify a test frame before relying on these estimates.
