# Pinpoint Commons — compatibility worksheet

Synthetic Python notebook compatibility handoff. Candidate releases and bounds are illustrative, not verified package support claims.

This is a reviewed direct-requirement worksheet, not a dependency resolver, lockfile, vulnerability audit or installation guarantee. Candidates and bounds are user-supplied, not checked against a registry. Numeric three-part versions only; no prereleases, epochs, post/dev/local versions, extras, environment markers, transitive dependencies or Python/platform compatibility. AI similarity is not identity proof. No packages are fetched or installed. Confirm with package owners and a real resolver in an isolated environment before use.

6 approved; 0 held; 6 originals. Policy newest
Newest-candidate baseline satisfies 0/3 packages; reviewed candidate selection satisfies 3/3. Pin draft ready.

## numpy
Selected 1.26.0; allowed 1.26.0
Bounds {"lower":"1.25.0","upper":"2.0.0"}
Requirements r0, r1
Conflict witnesses 
Newest baseline 2.0.0; violations r0
1.24.0: fails r1
1.26.0: passes all approved requirements
2.0.0: fails r0

## pandas
Selected 2.1.0; allowed 2.1.0
Bounds {"lower":"2.0.0","upper":"2.2.0"}
Requirements r2, r3
Conflict witnesses 
Newest baseline 2.2.0; violations r2
1.5.0: fails r3
2.1.0: passes all approved requirements
2.2.0: fails r2

## matplotlib
Selected 3.8.0; allowed 3.8.0
Bounds {"lower":"3.8.0","upper":"3.9.0"}
Requirements r4, r5
Conflict witnesses 
Newest baseline 3.9.0; violations r5
3.6.0: fails r5
3.8.0: passes all approved requirements
3.9.0: fails r5

## Complete source review
### r0
The vectorized numerical array library used in our matrix computations.
approve; package numpy; >=1.24.0, <2.0.0


### r1
The scientific n-dimensional array engine in our notebooks.
approve; package numpy; >=1.25.0, <3.0.0


### r2
The dataframe library that reads CSV files and joins tabular datasets.
approve; package pandas; >=1.0.0, <2.2.0


### r3
The spreadsheet-like table analysis package with DataFrames.
approve; package pandas; >=2.0.0, <3.0.0


### r4
The graph plotting package that draws figures with axes and legends.
approve; package matplotlib; >=3.0.0, <4.0.0


### r5
The scientific chart rendering library for line plots.
approve; package matplotlib; >=3.8.0, <3.9.0
