# Validation

Production bundle and combined routes tested. Computational checks only; no physical print or metrology test.

```json
{
  "validation-report.json": {
    "builtInCases": 8,
    "importCases": 8,
    "eachCase": "all part meshes + full assembly sweep + retention + reading window probes + snips"
  },
  "browser-validation.json": {
    "downloads": 26,
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
  "combined-browser-validation.json": {
    "downloads": 26,
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
  "studio-validation.json": {
    "presets": {
      "Pocket Vernier": {
        "mesh": {
          "triangles": 1508,
          "genus": 13,
          "components": 1,
          "volumesMm3": [
            9174.76147867868
          ],
          "dimensions": [
            180,
            135,
            5.300000190734863
          ],
          "closedManifold": true,
          "consistentOutwardWinding": true
        },
        "assembly": {
          "maximumUnintendedIntersectionMm3": 0.000007324220598974322,
          "intersectionToleranceMm3": 0.001,
          "slidingSamples": 25,
          "scaleVisibilityProbes": 275,
          "lateralPlaySamples": 50,
          "minimumWithdrawalBlockingIntersectionMm3": 102.66002823829689,
          "endStopsVerified": true,
          "assemblyInsertionSamples": 18,
          "flatPartsDisjoint": true,
          "snippedComponents": 4,
          "tabsAvoidAllFunctionalParts": true,
          "physicalPrintTested": false
        }
      },
      "Long Reach": {
        "mesh": {
          "triangles": 1246,
          "genus": 13,
          "components": 1,
          "volumesMm3": [
            16728.509419253627
          ],
          "dimensions": [
            210,
            160,
            7.900000095367432
          ],
          "closedManifold": true,
          "consistentOutwardWinding": true
        },
        "assembly": {
          "maximumUnintendedIntersectionMm3": 0.00001647949676993228,
          "intersectionToleranceMm3": 0.001,
          "slidingSamples": 25,
          "scaleVisibilityProbes": 275,
          "lateralPlaySamples": 50,
          "minimumWithdrawalBlockingIntersectionMm3": 132.30004680633715,
          "endStopsVerified": true,
          "assemblyInsertionSamples": 18,
          "flatPartsDisjoint": true,
          "snippedComponents": 4,
          "tabsAvoidAllFunctionalParts": true,
          "physicalPrintTested": false
        }
      },
      "Mini Study": {
        "mesh": {
          "triangles": 1460,
          "genus": 13,
          "components": 1,
          "volumesMm3": [
            8641.497232785352
          ],
          "dimensions": [
            170,
            125,
            5.099999904632568
          ],
          "closedManifold": true,
          "consistentOutwardWinding": true
        },
        "assembly": {
          "maximumUnintendedIntersectionMm3": 0,
          "intersectionToleranceMm3": 0.001,
          "slidingSamples": 25,
          "scaleVisibilityProbes": 275,
          "lateralPlaySamples": 50,
          "minimumWithdrawalBlockingIntersectionMm3": 106.13997519493059,
          "endStopsVerified": true,
          "assemblyInsertionSamples": 18,
          "flatPartsDisjoint": true,
          "snippedComponents": 4,
          "tabsAvoidAllFunctionalParts": true,
          "physicalPrintTested": false
        }
      }
    },
    "checks": {
      "realPresets": true,
      "threeSilhouettes": true,
      "textIconsSVG": true,
      "portableImageAndMeshJSON": true,
      "localNamedDesignReload": true,
      "missingPayloadBlocked": true,
      "undoRedo": true,
      "engraving": true,
      "zipEveryPartParsed": true,
      "allViews": true,
      "darkThemeSaved": true,
      "keyboardFocus": true,
      "collapsibleSections": true,
      "reducedMotion": true,
      "desktopLeft374px": true,
      "phonePreviewFirst320px": true,
      "workerAbortAndRecovery": true,
      "runtimeErrors": []
    }
  },
  "supplemental-validation.json": {
    "axisImportRoundTrips": {
      "y": "c7a06174",
      "-z": "c7a06174"
    },
    "rapidEditsMatchCurrentParameters": true,
    "invalidEditBlocksLastGoodExport": true,
    "recovery": true,
    "assembledGaugePreview": true,
    "physicalPrintTested": false
  },
  "hole-validation.json": [
    {
      "style": "raised",
      "centreVolumeMm3": 0,
      "ringVolumeMm3": 0.0005119999999999804,
      "unraisedOrUnengravedHolePreserved": true
    },
    {
      "style": "engraved",
      "centreVolumeMm3": 0.0005119999999999804,
      "ringVolumeMm3": 0,
      "unraisedOrUnengravedHolePreserved": true
    }
  ],
  "pose-validation.json": {
    "assembledTravelPreviewChanges": true,
    "printGeometryUnaffected": true,
    "defaultStrokeMm": 53
  },
  "gallery-validation.json": {
    "scriptsCompiled": 1,
    "previousEntriesPreserved": 268,
    "totalEntries": 269,
    "newEntry": {
      "folder": "20261029-29",
      "name": "Caliper & Slide",
      "area": "stl",
      "desc": "Snip twelve runners, flip a tongue-bearing jaw and bond its underside keeper for a captive vernier teaching gauge. Measured sheet/socket reference, adjustable pitch, reach and calibrated gaps; local PNG/JPEG/SVG relief and verified ASCII/binary STL wing grips, connected-card and three-part STL/ZIP. Adhesive required; educational, not a calibrated instrument."
    },
    "newestFirst": true
  },
  "gallery-browser-validation.json": {
    "downloads": 0
  },
  "root-deploy-validation.json": {
    "appCount": 269,
    "everyAppIndexPresent": true,
    "rootIndexMatches": true,
    "failed": 0,
    "skipped": 0
  }
}
```
