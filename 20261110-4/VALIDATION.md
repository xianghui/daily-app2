# Observed validation

Production bundle, headless desktop Chrome, WASM CPU; synthetic data only.

- Methods workshop: 4/4 intended topic families. Actual nearest reviewers ['Q1', 'Q2', 'N1', 'N2']; metrics {'papers': 4, 'held': 0, 'required': 8, 'assigned': 8, 'totalScore': 3901, 'baselineAssigned': 7, 'baselineScore': 2943}.
- Community workshop: 4/4 intended topic families. Actual nearest reviewers ['G2', 'G2', 'T1', 'T1']; metrics {'papers': 4, 'held': 0, 'required': 4, 'assigned': 4, 'totalScore': 2548, 'baselineAssigned': 4, 'baselineScore': 1572}.

8/8 simple topic-family matches is not accuracy assurance. Negated/unrelated challenge still produces nearest-expertise scores; held manually. The methods baseline filled 7/8 slots, so its score is not comparable with the complete 8-slot result. Community baseline and optimized plan both fill four slots; 2548 vs 1572 are computed relevance points, not measured review quality.

Passed browser checks:

- real inference Methods workshop
- real inference Community workshop
- review undo held exclusions current artifacts clipboard
- offline fresh worker real inference
- maximum batch and audit roundtrip
- infeasible invalid score all held
- negated unrelated challenge
- empty invalid oversized unsupported imports
- cancel stale input retry
- desktop phone labels focus touch exports no overflow
- malformed output unsupported worker runtime timeout stale callbacks recovery

Additional checks: real model-host network abort then successful retry; cancellation during actual weight request followed by actual retry; 500 independent exhaustive cases match maximum-flow/maximum-score objective. Independent Python parsing confirms all 16 reviewed CSV pairs, scores, holds, assignments and quoted/multiline formula-safe notes survive. JSON source import roundtrip resets approvals. Request audit sees only documented GET download traffic, no user-content request bodies, no initial model request before explicit loading.

Offline scope: network disabled, fresh worker inference in the same already-open page. No offline reload claim. Responsive widths 1280, 390 and 320; labels/focus, touch targets and no horizontal overflow. Physical phones, other browsers and real proposal quality untested. Runtime failure/timeout/malformed output are fault-injected defensive tests, not substitute inference.

Publication checks are recorded separately; local success alone does not establish public availability.

## Public verification

Root predeploy assembled 566 apps, zero failures/skips. Root deploy published gh-pages `c9032bd2510cc657ac6aad1e54d16a9aeb670204`; Pages workflow 42680382184 completed successfully and build API reported that same commit built. All public app files, runtime factory, worker and shared WASM were byte-identical to local production artifacts. Public gallery was byte-identical to source; rendered 566 cards, AI Utilities first, legacy categories/search intact. Actual public WASM inference generated all four reviewed paper records and a downloaded JSON with eight valid assignments and 3901 points. See public-assets-validation.json, public-inference-validation.json, export-public.json and gallery-public-ui-validation.json.
