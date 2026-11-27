# Synthetic outdoor shot list

REVIEWED FOCUS WORKSHEET — geometrical estimate, verify with camera

## ridge · approve
Source: Wide angle landscape lens for the twenty four millimetre full frame view
Reference: WIDE; 35 mm; CoC 0.025 mm; widest f/2.8
Subject band: 2.2–18 m
Reviewer: =SUM(1,2)
Check "finish", approved
Result: feasible; focus 3.9207920792079207 m; f/11
Near limit 2.0940815001756397 m; far limit 30.708119357161536 m
Both subject bounds covered in the thin-lens model

## portrait · approve
Source: Standard fifty millimetre normal prime on full frame
Reference: NORMAL; 50 mm; CoC 0.03 mm; widest f/1.4
Subject band: 3–5 m
Reviewer: 
Result: feasible; focus 3.75 m; f/8
Near limit 2.7671192443919717 m; far limit 5.8157568238213395 m
Both subject bounds covered in the thin-lens model

## bird · approve
Source: Long telephoto two hundred millimetre wildlife lens
Reference: TELE; 200 mm; CoC 0.03 mm; widest f/4
Subject band: 20–25 m
Reviewer: 
Result: feasible; focus 22.22222222222222 m; f/8
Near limit 19.62862638872532 m; far limit 25.605571772417683 m
Both subject bounds covered in the thin-lens model

## Summary
{
  "shots": 3,
  "held": 0,
  "feasible": 3,
  "infeasible": 0,
  "baselineDifferences": 1
}

## Full optical worksheet and arithmetic-focus baseline
[
  {
    "id": "ridge",
    "status": "feasible",
    "reason": "Both subject bounds covered in the thin-lens model",
    "focus": 3.9207920792079207,
    "aperture": 11,
    "near": 2.0940815001756397,
    "far": 30.708119357161536,
    "infinity": false,
    "baseline": {
      "focus": 10.1,
      "aperture": null,
      "near": null,
      "far": null,
      "feasible": false
    },
    "requiredF": 9.863299912094073
  },
  {
    "id": "portrait",
    "status": "feasible",
    "reason": "Both subject bounds covered in the thin-lens model",
    "focus": 3.75,
    "aperture": 8,
    "near": 2.7671192443919717,
    "far": 5.8157568238213395,
    "infinity": false,
    "baseline": {
      "focus": 4,
      "aperture": 8,
      "near": 2.9002320185614847,
      "far": 6.443298969072165,
      "feasible": true
    },
    "requiredF": 5.63063063063063
  },
  {
    "id": "bird",
    "status": "feasible",
    "reason": "Both subject bounds covered in the thin-lens model",
    "focus": 22.22222222222222,
    "aperture": 8,
    "near": 19.62862638872532,
    "far": 25.605571772417683,
    "infinity": false,
    "baseline": {
      "focus": 22.5,
      "aperture": 8,
      "near": 19.844769800670313,
      "far": 25.97552528284461,
      "feasible": true
    },
    "requiredF": 6.7272115708039015
  }
]

Finite subject bands only. No diffraction, focus breathing, pupil magnification, field curvature, lens markings or sensor-resolution model. Sample lenses are synthetic. Infinity is explicit; null otherwise means unavailable, not zero. Verify a test frame before relying on these estimates.
