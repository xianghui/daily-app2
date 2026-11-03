# Validation — Geneva & Index

All checks below are computational, on synthetic fixtures. **No physical print, mechanical operation, fit, shaft bond, collar retention, force, wear or fatigue test.**

## Reference

Fresh binary download SHA256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; parsed30,616triangles,179.819997×178.019994×3.1899996mm,27edge-adjacent components. Source not fully watertight and not redistributed. Source sections0.1/0.5/1.59mm visually inspected; measured1.60mm sheet,4.50×1.700012mm sockets and0.21–0.22mm low runner tops. Local switch/link candidates actually parsed and rejected as unsuitable first. Upstream README/license/SCAD instructions inspected. `reference-analysis.json` distinguishes all measured facts from redesigned sheet,round pin,slot and shaft fits.

## Geometry and mechanism — PASS

- `npm test`: **40 configurations**, all3presets,3silhouettes,each field lower/upper bounds,simultaneous bounds,both STLfixtures andthreshold/grayscale at extremes. Invalid ranges/noninteger station counts reject; empty artwork rejects.
- Independent binarySTL checks for connected card,each4cleanparts,translated loose plate: exact84+50*N bytes,finite coordinates,nonzero faces,normalized normals matching winding,1e-5mm welded edges exactly2opposite incidents,positive volume per intended component,mm bounds andbedZ=0.
- One genuine Boolean-connected card;16accessible runners;cuts release exactly carrier+4undamaged parts;no flat overlaps;actualZ=2*sheet+gap+0.8. Upper sections within bed footprint with0.003mm numerical skin (model simplification0.001mm,float32coordinates);no support-requiring upper geometry detected.
- Full-turn part intersections sampled in every configuration. `dense-motion-validation.json`: each4/5/6station preset checked every0.5degree through360degrees,**4326pair checks per preset**,maximum unwanted overlap below0.001mm³.
- Actual base→driver→spacer→follower axial insertion order checked before external collars,3mmrod envelopes clear everybore,collar radial overlap>2mm,backing≥1mm,and tangent radius identity `r²+R²=C²`.
- Open follower explicitly UNLOCKED in idle. Ideal parked preview is not called positive dwell retention. Retention depends on correctly fitted/clamped external collars and bonded rods,not geometry alone. No force/adhesive/collar-security proof.

## Browser production imports/export — PASS

Real production bundle served at`/daily-app2/20261104-2/`,not development mode. `browser-validation.json`:

- ActualPNG/JPEG/ASCII/binarySTL picker uploads,real downloads independently parsed. Pixel content,threshold,depth,crop,conversion,scale,rotation,XYplacement all change exported geometry vs baseline. Reset/remove reproduces baseline signature.
- Every downloaded mesh hash matches exact current preview plus independently regenerated portableJSON model. Same final mesh/mechanism checks apply to image/STL-derived outputs.
- Invalid/truncated/open/nonmanifold/concave/oversized/too-many-triangles/bad-dimensions/fakeimages/too-many-pixels/emptyimages/transforms blocked;recovery/reset works;invalid export disabled.
- Explicitmmconfirmation gates STL;Z/Y/−Z orientation and proportionalXY/independentZ scaling verified.
- Zero browser runtime errors andzero external service requests during generation/import/export.

Additional reports:

- `studio-validation.json`: presets,thumbnails,3silhouettes,text/searchableicons/SVG,portableimage+meshJSON,nameddesignreload,missingpayloaderror,undo/redo,realEverythingZIPcontents with allSTLs parsed,allviews,savedtheme,focus,collapsibles,reducedmotion,374pxdesktoprail,preview-first320px,workerabort/recovery.
- `icons-drop-validation.json`: sixicons change solid geometry;realPNGdrag/drop;independent per-part geometry/mechanism checks.
- `import-extremes-validation.json`: bothSTLfixtures atsimultaneousmin/max,ring-hole backing anddark-ring actualengraving probes.
- `stale-validation.json`: rapidparameter/imageedits immediatelydisableexport;onlynewestvalidgeometrymatchesNode;invalidtransformsrecover.
- `isolated-validation.json`: allfourisolatedviewscanvases andactualper-partdownloads.
- `orientation-validation.json`: Z/Y/−Zsourcecoordinates,unitconfirmation,exactregenerationandfinalsolids.
- `presentation-validation.json`: **320/390/1440px**,everyeditortab,expandedassemblyguide,nohorizontaloverflow,reachableactualJSONsave. Driverangle visiblymovesassembledmeshes withoutchangingbed-flatSTLsignature. Browser tests prove touchorbit/pinch bycanvaschanges andphoneimage/STLdownloads.

## Build/gallery/publication

Per-app`npm run predeploy`passed. GalleryinlineJavaScriptcompiledwith`new Function`,newentryexactlyonce/first/areaSTL,**424previousentriespreserved**,STLcategoryfirst,correctlink/search/fullrestorationandzeroruntimeerrors. Combined-rootstaging/publicationverification recorded separately in deployment reports after successful deployment.

Early failures fixed before publication: missingPythonanalysisdependencies;assembly-testorderincorrectlyinsertedspacerafterfollower;cardminimumheightincreasedto240mmtofitallmechanisms;upperfootprintcomparisonnowusesexplicit0.003mmnumericalskinconsistentwith0.001mmsimplification;browserfieldrouting/rapid-editfixturesupdatedtonewparametercontracts. No failed output accepted as a valid result.

## Combined staging — PASS

Root `npm run predeploy`: **425 built,0failed,0skipped**. Complete import/error/export/touch suite rerun against actual combined `deploy/` under the base prefix; `staged-validation.json` passed. Root gallery renders all425cards with no runtime errors.
