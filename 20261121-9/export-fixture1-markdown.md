# Pinpoint Commons — compatibility worksheet

Synthetic web-tooling handoff. One incompatible pair deliberately requires owner reconciliation. No package registry is contacted.

This is a reviewed direct-requirement worksheet, not a dependency resolver, lockfile, vulnerability audit or installation guarantee. Candidates and bounds are user-supplied, not checked against a registry. Numeric three-part versions only; no prereleases, epochs, post/dev/local versions, extras, environment markers, transitive dependencies or Python/platform compatibility. AI similarity is not identity proof. No packages are fetched or installed. Confirm with package owners and a real resolver in an isolated environment before use.

6 approved; 0 held; 6 originals. Policy newest
Newest-candidate baseline satisfies 0/3 packages; reviewed candidate selection satisfies 2/3. Pin draft blocked.

## requests
Selected 2.31.0; allowed 2.31.0
Bounds {"lower":"2.30.0","upper":"2.32.0"}
Requirements r0, r1
Conflict witnesses 
Newest baseline 2.32.0; violations r1
2.28.0: fails r1
2.31.0: passes all approved requirements
2.32.0: fails r1

## pillow
Reviewed bounds have an empty intersection. Reconcile the two witness requirements.
Bounds {"lower":"10.0.0","upper":"10.0.0"}
Requirements r2, r3
Conflict witnesses r3, r2
Newest baseline 11.0.0; violations r2
9.5.0: fails r3
10.0.0: fails r2
11.0.0: fails r2

## pytest
Selected 8.0.0; allowed 8.0.0
Bounds {"lower":"8.0.0","upper":"8.3.0"}
Requirements r4, r5
Conflict witnesses 
Newest baseline 8.3.0; violations r5
7.0.0: fails r5
8.0.0: passes all approved requirements
8.3.0: fails r5

## Complete source review
### r0
The HTTP library we use to fetch URLs and call REST services.
approve; package requests; >=2.0.0, <3.0.0


### r1
The Python web request client used for API downloads.
approve; package requests; >=2.30.0, <2.32.0


### r2
The PIL photo manipulation library that resizes image files.
approve; package pillow; >=9.0.0, <10.0.0


### r3
The image opening and thumbnail transformation package.
approve; package pillow; >=10.0.0, <12.0.0


### r4
The automated test runner with reusable test fixtures.
approve; package pytest; >=7.0.0, <9.0.0


### r5
The Python testing framework for assertions and parametrized tests.
approve; package pytest; >=8.0.0, <8.3.0
