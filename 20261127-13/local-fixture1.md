# Synthetic cartographic intake

REVIEWED SCAN PREFLIGHT — raw-raster estimate, not a preservation certification

## survey · approve
Source: Engineering map with fine colored cartographic linework and tiny annotations
Standard: MAP; 600 dpi floor; 6 feature pixels; 8 bits × 3 channels
Dimensions: 420 × 594 mm; feature 0.3 mm; pages 2
Reviewer: 
Result: feasible; 600 dpi
Raw bytes: 835353024
Minimum 25-dpi step meets supplied standard and feature sampling

## index · approve
Source: Clean printed typed correspondence black and white bitonal document
Standard: TEXT; 300 dpi floor; 8 feature pixels; 1 bits × 1 channels
Dimensions: 210 × 297 mm; feature 0.8 mm; pages 20
Reviewer: 
Result: feasible; 300 dpi
Raw bytes: 21819760
Minimum 25-dpi step meets supplied standard and feature sampling

## Summary
{
  "jobs": 2,
  "pages": 22,
  "held": 0,
  "feasible": 2,
  "infeasible": 0,
  "baselineFailures": 1,
  "rawBytes": 857172784,
  "baselineBytes": 230658016,
  "budgetExceeded": false,
  "manifestReady": true
}

## Complete sampling and fixed-300-dpi baseline
[
  {
    "id": "survey",
    "status": "feasible",
    "reason": "Minimum 25-dpi step meets supplied standard and feature sampling",
    "requiredDpi": 600,
    "capture": {
      "dpi": 600,
      "widthPx": 9922,
      "heightPx": 14032,
      "rowBytes": 29766,
      "pageBytes": 417676512,
      "totalBytes": 835353024,
      "featureSamples": 7.086614173228347,
      "megapixels": 139.225504
    },
    "baseline": {
      "dpi": 300,
      "widthPx": 4961,
      "heightPx": 7016,
      "rowBytes": 14883,
      "pageBytes": 104419128,
      "totalBytes": 208838256,
      "featureSamples": 3.5433070866141736,
      "megapixels": 34.806376,
      "passes": false
    }
  },
  {
    "id": "index",
    "status": "feasible",
    "reason": "Minimum 25-dpi step meets supplied standard and feature sampling",
    "requiredDpi": 300,
    "capture": {
      "dpi": 300,
      "widthPx": 2481,
      "heightPx": 3508,
      "rowBytes": 311,
      "pageBytes": 1090988,
      "totalBytes": 21819760,
      "featureSamples": 9.448818897637796,
      "megapixels": 8.703348
    },
    "baseline": {
      "dpi": 300,
      "widthPx": 2481,
      "heightPx": 3508,
      "rowBytes": 311,
      "pageBytes": 1090988,
      "totalBytes": 21819760,
      "featureSamples": 9.448818897637796,
      "megapixels": 8.703348,
      "passes": true
    }
  }
]

No OCR, image inspection, sharpening, optical-resolution verification or scanner control. DPI here means requested pixels per inch, not printer dots. Full-page capture; no crop or bleed. Row-packed uncompressed raster bytes exclude TIFF headers, metadata, compression, filesystem overhead and backups. Smallest feature and sampling targets are operator assumptions; inspect test scans. Synthetic standards are illustrative, not archival policy.
