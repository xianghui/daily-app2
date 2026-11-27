# Synthetic archive intake

REVIEWED SCAN PREFLIGHT — raw-raster estimate, not a preservation certification

## letters · approve
Source: Clean black and white typed correspondence printed text for bitonal scanning
Standard: TEXT; 300 dpi floor; 8 feature pixels; 1 bits × 1 channels
Dimensions: 210 × 297 mm; feature 0.5 mm; pages 40
Reviewer: 
Result: feasible; 425 dpi
Raw bytes: 87472000
Minimum 25-dpi step meets supplied standard and feature sampling

## prints · approve
Source: Color family photographic prints with continuous tones, full RGB
Standard: PHOTO; 400 dpi floor; 4 feature pixels; 8 bits × 3 channels
Dimensions: 152 × 102 mm; feature 0.4 mm; pages 12
Reviewer: 
Result: feasible; 400 dpi
Raw bytes: 138497688
Minimum 25-dpi step meets supplied standard and feature sampling

## diary · approve
Source: Faint handwritten pencil manuscript with faded handwriting and tonal paper
Standard: GRAY; 400 dpi floor; 8 feature pixels; 16 bits × 1 channels
Dimensions: 180 × 240 mm; feature 0.3 mm; pages 8
Reviewer: 
Result: feasible; 700 dpi
Raw bytes: 525072240
Minimum 25-dpi step meets supplied standard and feature sampling

## Summary
{
  "jobs": 3,
  "pages": 60,
  "held": 0,
  "feasible": 3,
  "infeasible": 0,
  "baselineFailures": 3,
  "rawBytes": 751041928,
  "baselineBytes": 217985360,
  "budgetExceeded": false,
  "manifestReady": true
}

## Complete sampling and fixed-300-dpi baseline
[
  {
    "id": "letters",
    "status": "feasible",
    "reason": "Minimum 25-dpi step meets supplied standard and feature sampling",
    "requiredDpi": 425,
    "capture": {
      "dpi": 425,
      "widthPx": 3514,
      "heightPx": 4970,
      "rowBytes": 440,
      "pageBytes": 2186800,
      "totalBytes": 87472000,
      "featureSamples": 8.366141732283465,
      "megapixels": 17.46458
    },
    "baseline": {
      "dpi": 300,
      "widthPx": 2481,
      "heightPx": 3508,
      "rowBytes": 311,
      "pageBytes": 1090988,
      "totalBytes": 43639520,
      "featureSamples": 5.905511811023622,
      "megapixels": 8.703348,
      "passes": false
    }
  },
  {
    "id": "prints",
    "status": "feasible",
    "reason": "Minimum 25-dpi step meets supplied standard and feature sampling",
    "requiredDpi": 400,
    "capture": {
      "dpi": 400,
      "widthPx": 2394,
      "heightPx": 1607,
      "rowBytes": 7182,
      "pageBytes": 11541474,
      "totalBytes": 138497688,
      "featureSamples": 6.299212598425197,
      "megapixels": 3.847158
    },
    "baseline": {
      "dpi": 300,
      "widthPx": 1796,
      "heightPx": 1205,
      "rowBytes": 5388,
      "pageBytes": 6492540,
      "totalBytes": 77910480,
      "featureSamples": 4.724409448818898,
      "megapixels": 2.16418,
      "passes": false
    }
  },
  {
    "id": "diary",
    "status": "feasible",
    "reason": "Minimum 25-dpi step meets supplied standard and feature sampling",
    "requiredDpi": 700,
    "capture": {
      "dpi": 700,
      "widthPx": 4961,
      "heightPx": 6615,
      "rowBytes": 9922,
      "pageBytes": 65634030,
      "totalBytes": 525072240,
      "featureSamples": 8.267716535433072,
      "megapixels": 32.817015
    },
    "baseline": {
      "dpi": 300,
      "widthPx": 2126,
      "heightPx": 2835,
      "rowBytes": 4252,
      "pageBytes": 12054420,
      "totalBytes": 96435360,
      "featureSamples": 3.5433070866141736,
      "megapixels": 6.02721,
      "passes": false
    }
  }
]

No OCR, image inspection, sharpening, optical-resolution verification or scanner control. DPI here means requested pixels per inch, not printer dots. Full-page capture; no crop or bleed. Row-packed uncompressed raster bytes exclude TIFF headers, metadata, compression, filesystem overhead and backups. Smallest feature and sampling targets are operator assumptions; inspect test scans. Synthetic standards are illustrative, not archival policy.
