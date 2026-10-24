# Observed validation

All checks below passed on 2026-10-25. No physical printing, fatigue testing or elastic simulation was performed.

```json
{
  "geometry": {
    "passed": true,
    "parameterCases": 132,
    "importCases": 35
  },
  "browser": {
    "passed": true,
    "downloads": 23,
    "rejections": 10,
    "checks": {
      "phoneWidths": [
        320,
        390
      ],
      "touchOrbit": true,
      "pinchZoom": true,
      "pngJpegAsciiBinaryFilePicker": true,
      "transformsAffectExport": true,
      "replaceRemoveReset": true,
      "exactPreviewExport": true,
      "runtimeErrors": [],
      "remoteRequests": []
    }
  },
  "feature": {
    "passed": true
  },
  "gallery": {
    "passed": true
  },
  "production": {
    "passed": true
  },
  "resilience": {
    "passed": true
  }
}
```

Reports and browser screenshots are stored alongside the source. Geometric arm/pad approach checks are rigid-envelope screening, not proof of real TPU behavior. Root combined build: 135 apps, zero failed, zero skipped; every gallery folder has a deployed index.
