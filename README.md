# Daily App Lab 2

## Current focus: AI-powered workflow utilities (2026-11-06)

The hourly Daily App Builder now creates practical utility apps that use real AI to improve repeatable processes, replacing the earlier fidget/kit-card STL direction. Examples include document triage, semantic data cleanup/entity matching, meeting-to-action planning, knowledge search, batch organization and constraint-aware task planning. Each app must complete a useful input → AI assistance → review/edit → usable export workflow; generic chat wrappers and AI-branded heuristics do not qualify.

- Local root: `/Volumes/ExternalHD/daily_app2`
- Source: https://github.com/xianghui/daily-app2
- Gallery: https://xianghui.github.io/daily-app2/
- Original collection `/Volumes/ExternalHD/daily_app` remains read-only.
- Existing STL apps/games remain intact, accurately categorized. Historical requirements are in [legacy STL builder direction](docs/legacy-stl-builder-through-20261105.md) and are NOT requirements for new apps.

## AI and product requirements

Use real browser-compatible AI inference with a small suitable open-weight model and a no-key default path. GitHub Pages remains the host, so do not assume a backend. Document the real model/runtime/license, download size/network and device requirements, caching, privacy and limitations. Model weights may download from a documented host; keep default user content on-device. Optional remote inference must be explicitly user-invoked/configured, and any user-supplied key stays in memory by default. Never reuse agent credentials, commit secrets or personal data, or silently substitute canned output for failed inference.

Validate structured model outputs, input/batch/context limits, cancellation, stale results and failure paths. Let users review/edit/undo suggestions, retain original data, and export actual CSV/JSON/Markdown/calendar artifacts as appropriate. Measure a meaningful baseline or task quality/constraints honestly; do not invent improvement percentages or accuracy. External sending/deletion/account actions are not part of the default utilities.

Require actual model inference on at least two materially different synthetic inputs, small known-answer quality checks, production runtime/worker loading, privacy/network and claimed offline checks, export parse/round trips, and responsive desktop/phone UX before marking complete. A successful build, mock inference or AI-generated source code does not establish that the app itself uses AI. Clearly mark blocked work as unpublished rather than counting a placeholder.

Keep the polished responsive utility styling; familiar lavender/pink accents are fine, but 3D previews, millimeter controls, reference STLs and mandatory image/STL imports are no longer required. Gallery entries use `area:"ai-utility"` labeled "AI Utilities", ahead of earlier categories.

## Shared browser runtime assets

Notice Atelier (`20261107-3`), Brief Quarry (`20261107-4`), Split Sentinel (`20261107-6`), Veil Desk (`20261107-7`), Folder Ferry (`20261107-8`), Scope Harbor (`20261107-9`), Revision Dock (`20261107-10`), Mention Atlas (`20261107-11`), Outcome Map (`20261107-12`), Retention Desk (`20261107-14`), Parallel Room (`20261107-15`), Pack Relay (`20261107-16`), Form Pruner (`20261107-17`), Queue Mosaic (`20261107-18`), Rewrite Guard (`20261107-20`), Claim Ledger (`20261107-21`), Chapter Cut (`20261107-22`), Anchor Desk (`20261107-23`) and Distractor Desk (`20261107-24`) reuse the byte-identical ONNX Runtime WASM already hosted at `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, avoiding 26,861,777 duplicate deployed bytes. Their Vite builds rewrite fallback URLs to that immutable same-origin asset. Preserve referenced older app builds and paths when assembling the collection; the app README and asset/deployment audits record the SHA-256 and production-bundle/offline validation. No model inference or user content moves to a server.

## Label Lens — 20261108-2

Local semantic label-consistency auditing with MiniLM leave-one-out neighbor evidence, human corrections/holds and lossless JSON plus reviewed CSV. Reuses the immutable shared WASM from `20261107-2`; preserve that app asset when deploying. Both seeded errors in two synthetic batches were flagged, along with four false-positive neighbor cues: this is a human audit aid, not an automatic label fixer. See [workflow and requirements](20261108-2/README.md) and [observed validation](20261108-2/VALIDATION.md).

## Builder and publishing workflow

Preserve the existing enabled hourly Asia/Singapore cron, model, run budget, routing and delivery settings. Create `YYYYMMDD-N/`, scaffold React + Vite, install gh-pages and use Vite base `/daily-app2/YYYYMMDD-N/`. Each app retains `predeploy: npm run build` and `deploy: gh-pages -d dist`. Validate the working AI flow and artifacts, add the gallery entry, run root predeploy/deploy, commit and push main using `YYYYMMDD-N: App Name (ai-utility)`.

Deployment directory guard: always run publishing commands with the repository root as the explicit working directory (or `npm --prefix /Volumes/ExternalHD/daily_app2 run deploy`). Verify the npm package is `daily_app2`, not an individual utility, before publishing; per-app `deploy` would replace the collection.

Root predeploy assembles `deploy/index.html` and app builds in `deploy/YYYYMMDD-N/`; root deploy publishes that combined site to `gh-pages`. `npm run deploy` also invokes predeploy automatically via npm lifecycle. GitHub Pages serves the root of gh-pages.

Deployment verification: `gh-pages` reporting “Published” proves the branch push, not that Pages has rebuilt. Compare `git ls-remote origin refs/heads/gh-pages` with `gh api repos/xianghui/daily-app2/pages/builds/latest --jq '{status,commit,error}'`. If the latest build still targets an older commit and no new run is queued, request the existing legacy Pages build with `gh api --method POST repos/xianghui/daily-app2/pages/builds`. Wait for that commit to reach `built`, then verify the new app URL and its bundled worker/WASM. Do not change the Pages source or repeatedly republish the same files to resolve this trigger delay. This fallback was needed for 20261021-27.

Daily digest remains at 22:00 Asia/Singapore and scans both collections, with each app linked to its own gallery.


## Unpublished draft — 20261107-5: Retrieval Bench

Local real MiniLM inference, four known-answer queries, 320-pair full-batch conservation, review/undo/export round trips, offline fresh-worker inference and defensive tests passed. Three Pages deployments of commit `2d7fb1ad7ad11b0cd817fdf2170263a737ff5913` timed out during synchronization/finalization despite successful builds. The new public URL remained HTTP 404, so public inference/assets could not be verified. The draft is deliberately excluded from APPS and the combined deployment; do not count it as completed. See [draft README](20261107-5/README.md), [publication status](20261107-5/publication-status.json) and [validation](20261107-5/VALIDATION.md). Existing gallery entries and public apps are preserved.

The failed autogenerated legacy Pages workflow accepted a failed-job rerun but exposed a ghost queued state with zero jobs, while its cancellation endpoint said the workflow was completed. A fresh legacy build was requested only after confirming the deployment itself had failed; this did not resolve the provider timeout. Do not assume queued status alone establishes an active deployment in this inconsistent state, and do not repeatedly repush unchanged files. Resolve Pages synchronization before promoting the draft and rerun its public real-AI/asset checks.


## Unpublished draft — 20261107-13: Dependency Loom

Real local MiniLM inference, six known-answer task links across two synthetic workflows, shuffled-source topological ordering, 12-task batching, cycle blocking, review/undo/export round trips, fully offline fresh-worker inference and defensive browser checks passed. Three GitHub Pages deployment attempts for `5ce4e25f78483c21bc053c8645dd0cb811a6c225` built successfully but failed/timed out during Pages deployment (synchronization/queue). The public app remained unavailable, so public AI/assets could not be verified. This tested draft is excluded from APPS and combined deployment; do not count it as completed. See [draft README](20261107-13/README.md), [publication status](20261107-13/publication-status.json), and [validation](20261107-13/VALIDATION.md). The prior gallery is restored unchanged. Resolve the hosting synchronization blocker before promotion and rerun public inference/assets/gallery checks.


## Unpublished draft — 20261107-19: Alias Calendar

Real local MiniLM inference matched eight known-answer room aliases across two synthetic booking sets, exposed the seeded double booking, and passed 24-booking conservation, conflict blocking, reviewed JSON/CSV/ICS round-trips, fully offline fresh-worker inference, responsive layout and defensive browser checks. Three GitHub Pages deployments of `4b1c67cf9ee06d1a43d7d46cb19ad52e8954e0f1` built successfully but timed out during deployment/synchronization. The new public app remained HTTP 404; public runtime and inference could not be verified. This tested draft is excluded from APPS and the combined deployment and must not be counted as completed. See [draft README](20261107-19/README.md), [publication status](20261107-19/publication-status.json), [hosting attempts](20261107-19/hosting-attempts.json) and [validation](20261107-19/VALIDATION.md). The prior 511-entry public gallery was independently verified byte-identical to restored source. Resolve the hosting blocker and rerun public inference/assets/gallery checks before promotion. No further app/model simplification can repair a provider synchronization timeout while preserving the existing collection; the new app added only 881,989 deployed bytes and already reused the shared runtime.

## Scale Compass — 20261108-3

Local MiniLM opposing-anchor inference assists survey-item direction review before deterministic reverse scoring. Every item requires human acceptance or hold; originals and missing cells survive JSON/CSV export. Simple fixtures matched 8/8 keys, but a double-negative challenge failed: this is a scoring-key review aid, not psychometric validation. Reuses the immutable shared WASM from `20261107-2`; preserve that asset. See [workflow](20261108-3/README.md) and [observed checks](20261108-3/VALIDATION.md).

## Sense Margin — 20261108-4

Local MiniLM contextual acronym disambiguation for technical editors. Review every source occurrence against approved glossary senses, edit or hold expansions and export exact-span expanded TXT plus complete JSON/CSV. Simple fixtures matched 8/8 meanings versus 4/8 first-sense baseline, but a negation challenge failed; mandatory human review remains essential. Reuses the immutable shared WASM from `20261107-2`. See [workflow](20261108-4/README.md) and [observed checks](20261108-4/VALIDATION.md).

## Evidence Split — 20261108-5

Construct reviewed train/evaluation partitions using local MiniLM semantic components and exact group-size allocation. Originals and holds survive JSON/CSV export. Six known paraphrase pairs across two interleaved synthetic batches were grouped correctly; the negation challenge overmerged opposing instructions, so semantic similarity is not equivalence or a leakage guarantee. Reuses the immutable WASM from `20261107-2`; preserve its asset. See [workflow](20261108-5/README.md) and [observed checks](20261108-5/VALIDATION.md).

## Redirect Harbor — 20261108-6

Local MiniLM semantic matching helps editors route retired web pages to live replacements. Every redirect requires acceptance or hold; disjoint local paths prevent self-redirects, chains and loops. Export all originals as JSON/CSV and approved Netlify-style rules without changing a website. Six simple known-answer targets matched across two synthetic migrations; a negation challenge selected an opposing policy, so similarity is not policy equivalence and human review is mandatory. Reuses the shared immutable WASM from `20261107-2`; preserve its asset. See [workflow](20261108-6/README.md) and [observed validation](20261108-6/VALIDATION.md).

## Packet Proof — 20261108-7

Local MiniLM document-type inference assists application/vendor manifest completeness audits. Review every assignment or hold, inspect missing and duplicate required slots and export complete JSON/CSV plus a Markdown handoff checklist. Nine simple types matched across two synthetic fixtures; a negated expiry challenge failed, so this is manifest reconciliation, never document validity/authenticity certification. Reuses the shared immutable WASM from `20261107-2`; preserve that asset. See [workflow](20261108-7/README.md) and [observed validation](20261108-7/VALIDATION.md).

## Inquiry Grid — 20261108-8

Local MiniLM quote-to-question inference plus min-cost flow creates participant-balanced interview evidence boards under both question and participant caps. Review every proposal, hold irrelevant excerpts and export a complete JSON/CSV audit plus source-linked Markdown. Two simple fixtures matched 9/9 topics versus 3/9 first-question baseline; a negation challenge failed, so this is a human source-curation tool, not automated interpretation. Reuses immutable shared WASM from `20261107-2`; preserve that asset. See [workflow](20261108-8/README.md) and [observed validation](20261108-8/VALIDATION.md).

## Search Rescue — 20261108-9

Local MiniLM query-to-concept inference helps search editors repair missed queries with reviewed one-way synonyms. Collision guards preserve canonical identities; all originals and holds survive JSON/CSV, while approved new rules export as directional synonym JSON. Two simple fixtures matched 8/8 targets and recovered three exact-dictionary misses each. An instruction-like semantic false positive confirms that threshold adoption is not relevance validation. Reuses immutable shared WASM from `20261107-2`; preserve its asset. See [workflow](20261108-9/README.md) and [observed validation](20261108-9/VALIDATION.md).

## Sentinel Sheet — 20261108-10

Local MiniLM links risk statements to user-supplied monitoring indicators. Review source descriptions, approve/hold risks, edit triggers/cadence/owners, inspect coverage gaps/shared signals and export a complete JSON/CSV/Markdown register. Six simple known-answer links matched; two negation/causal challenges failed suitability, so mandatory human review is essential and no safety assurance is claimed. Reuses immutable shared WASM from `20261107-2`; preserve that asset. See [workflow](20261108-10/README.md) and [observed checks](20261108-10/VALIDATION.md).

## Triplet Foundry — 20261108-11

Local MiniLM hard-negative mining for contrastive training data with mandatory pair review, train-only and distinct-source triplet constraints, capped negative reuse and approved three-column JSONL plus complete audits. Two tiny known-answer fixtures selected 16/16 intended sibling negative labels versus 8/16 input-order baseline; this is not a training-gain claim and a deliberately mislabeled positive still required human rejection. Reuses the immutable shared WASM from `20261107-2`; preserve that asset. See [workflow](20261108-11/README.md) and [observed validation](20261108-11/VALIDATION.md).


## Route Caliper — 20261108-12

Local MiniLM request-routing evaluation with calibration-only abstention thresholds and independent holdout precision/coverage reporting. Review/correct gold labels, exclude ambiguous samples, preserve all originals and export JSON/CSV/Markdown. Both simple fixtures matched 12/12 in-domain labels, but thresholding abstained on three valid cases and a negation challenge was misclassified before abstaining. This is a small-sample evaluation aid, not production accuracy assurance. Reuses the immutable shared WASM from `20261107-2`; preserve it. See [workflow](20261108-12/README.md) and [observed validation](20261108-12/VALIDATION.md).

## Repeat Radar — 20261108-13

Local MiniLM paraphrase grouping turns weekly task diaries into a reviewed automation-opportunity backlog; exact setup-budget optimization uses explicitly editable savings assumptions. Confirm/split/merge or hold tasks and export complete JSON/CSV/Markdown audits. Three of four tiny known paraphrase pairs grouped; one interview-scheduling pair required a human merge. Estimated savings are not measured productivity gains or feasibility predictions. Reuses the immutable shared WASM from `20261107-2`; preserve that asset. See [workflow](20261108-13/README.md) and [observed checks](20261108-13/VALIDATION.md).

## Practice Weave — 20261108-14

Local MiniLM topic discovery helps educators interleave practice question banks. Review topics and supplied answers, hold prompts and optimize a no-same-topic-neighbors sequence; export learner Markdown, separate answer keys and complete JSON/CSV audits. Both synthetic banks recovered their intended topic pairs and reduced same-topic adjacency from 2 to 0; this is not a learning-gain claim and answers are not fact-checked. Reuses the immutable WASM from `20261107-2`; preserve that asset. See [workflow](20261108-14/README.md) and [observed checks](20261108-14/VALIDATION.md).


## Rubric Relay — 20261108-15

Local MiniLM answer-to-anchor comparison assists human second marking for a single supplied rubric criterion. Review every final mark, hold uncertain answers, preserve originals and export complete JSON/CSV/Markdown audits. The two simple synthetic batches matched 8/8 intended anchor levels versus 2/8 deliberately inconsistent original marks; a negated incorrect answer still matched the full-credit anchor, so this is not an automatic grader or accuracy guarantee. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow](20261108-15/README.md) and [observed checks](20261108-15/VALIDATION.md).

## Purpose Fence — 20261108-16

Local MiniLM purpose matching helps privacy coordinators minimize proposed data-use fields and retention within user-supplied policy limits. Review every purpose and approve or hold; export a complete JSON/CSV audit and approved manifest. Two tiny synthetic batches matched 6/6 intended purposes, but a prohibited negated marketing request still matched scheduling: this is planning, not consent/legal authorization or compliance verification. Reuses immutable shared WASM from `20261107-2`; preserve that asset. See [workflow](20261108-16/README.md) and [observed validation](20261108-16/VALIDATION.md).

## Locale Relay — 20261108-17

Real local MiniLM retrieval helps English → French localization editors reuse bilingual translation memories beyond exact-source lookup. Human-reviewed targets, deterministic placeholder parity and valid XLIFF 2.0 releases plus complete JSON/CSV audits. Six fixture matches passed; a negation challenge selected opposing meaning, so every draft requires human review. Reuses the immutable shared WASM from `20261107-2`; preserve that asset. See [workflow](20261108-17/README.md) and [observed validation](20261108-17/VALIDATION.md).

## Cohort Current — 20261108-18

Compare two feedback periods using local MiniLM topic inference, mandatory assignment review and explicit approved-record denominators. Export complete JSON/CSV/Markdown trend audits. Ten known-answer synthetic topics matched across two batches; unrelated text still receives a nearest topic and must be held. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow](20261108-18/README.md) and [observed validation](20261108-18/VALIDATION.md).

## Handoff Trace — 20261108-19

Local MiniLM responsibility inference turns ordered SOP steps into reviewed cross-role handoff checklists. Holds explicitly block adjacent boundaries; human deliverables, originals and all ordered steps survive JSON/CSV/Markdown. Two tiny known-answer fixtures matched 8/8 owners, but a negated refund instruction still matched Finance: this is not authorization or competence certification. Reuses immutable shared WASM from `20261107-2`; preserve that asset. See [workflow](20261108-19/README.md) and [observed validation](20261108-19/VALIDATION.md).

## Barrier Budget — 20261108-20

Real local MiniLM links reported accessibility barriers to supplied remedies; mandatory human review feeds a shared-fix hours-budget optimizer. Complete JSON/CSV/Markdown audits retain originals, held and deferred reports. Both simple synthetic batches matched 8/8 links; a reviewed cost/impact scenario improved computed planning points from 8 to 10 at five hours, not measured accessibility gains. A negation challenge still returned an unsuitable nearest remedy. Reuses the immutable WASM from `20261107-2`; preserve that asset. See [workflow](20261108-20/README.md) and [observed checks](20261108-20/VALIDATION.md).

## Script Stitch — 20261108-21

Local MiniLM semantic inference and order-preserving gap-tolerant alignment help speakers audit rehearsal transcripts against planned cues. Review every spoken segment, block crossing/duplicate approved links and export both complete source sequences as JSON/CSV/Markdown. Two tiny fixtures matched six links, two digressions and two unconfirmed cues; a negated photography instruction still matched the opposing cue, so this is mandatory human review, not verified script delivery. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow](20261108-21/README.md) and [observed checks](20261108-21/VALIDATION.md).

## Citation Loom — 20261108-22

Local MiniLM retrieves supplied bibliography candidates from rough citation notes. Review sources, hold uncertain links and export first-appearance-numbered Markdown with complete JSON/CSV audits. Eight simple known-answer links matched; a negated claim still retrieved a topically related paper, so this is retrieval, not fact verification. Reuses the immutable WASM from 20261107-2; preserve that asset. See [workflow](20261108-22/README.md) and [observed validation](20261108-22/VALIDATION.md).

## Dependency Lens — 20261108-23

Local MiniLM matches required task inputs to other tasks’ deliverables, with mandatory human review, cycle rejection, transitive blocked-task propagation and earliest-start planning. Complete JSON/CSV/Markdown audits retain every task and input. Both tiny known-answer fixtures matched six links; a negated prerequisite still retrieved an unsuitable producer. Timing is a dependency-only lower bound with unlimited resources, not a staffed schedule or measured gain. Reuses the immutable WASM from `20261107-2`; preserve that asset. See [workflow](20261108-23/README.md) and [observed checks](20261108-23/VALIDATION.md).

## Coverage Loom — 20261109-1

Local MiniLM retrieves requirement links and classifies scenario intent for an explicit requirement × scenario coverage matrix, with mandatory human review, held/orphan tracking and complete JSON/CSV/Markdown gap checklists. Six intended feature top candidates matched across two tiny synthetic releases, but scenario labels matched only 4/6; the library batch produced four extra links and a negation challenge failed. Linked coverage is not test adequacy or execution evidence. Reuses immutable shared WASM from `20261107-2`; preserve that asset. See [workflow](20261109-1/README.md) and [observed validation](20261109-1/VALIDATION.md).

## Rater Bridge — 20261109-2

Reconcile independently named qualitative codebooks with real local MiniLM definition embeddings and exact one-to-one assignment, then inspect paired judgments after human-approved normalization. All six expected links across two small synthetic fixtures matched; normalized agreement is not correctness or inter-rater reliability. Every pair survives reviewed JSON/CSV/Markdown exports. See [workflow/privacy](20261109-2/README.md) and [observed validation](20261109-2/VALIDATION.md). Reuses the immutable shared WASM asset from `20261107-2`.


## Invoice Moor — 20261109-3

Local MiniLM links reworded invoice lines to received purchase orders; human review feeds many-to-one quantity reconciliation and integer-cent unit-price checks. All eight simple fixture links matched and both split-line overages were caught; negated/unrelated text still receives unsuitable nearest proposals. This is an exception-planning desk, not payment authorization. Complete JSON/CSV/Markdown preserves all receipts, lines and cents. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261109-3/README.md) and [observed validation](20261109-3/VALIDATION.md).

## Branch Harbor — 20261109-4

Real local MiniLM identity alignment assists three-way checklist merging. Review every branch link and every edit/delete resolution, preserve all originals and export a merged checklist plus complete JSON/CSV/Markdown audit. Two tiny synthetic workflows matched 13/13 expected identities/additions; a negated backup instruction was still mislinked, so human review is mandatory. Output order is base order with appended additions, not inferred process sequencing. Reuses immutable WASM from `20261107-2`. See [workflow/privacy](20261109-4/README.md) and [observed validation](20261109-4/VALIDATION.md).

## Recall Calendar — 20261109-5

Real local MiniLM reference/misconception comparisons help learners review recall attempts, then a human-approved bounded SM-2 scheduler exports all-day ICS plus complete JSON/CSV/Markdown audits. Six simple synthetic labels matched, but a negation challenge failed; this is study planning, never automatic correctness/mastery certification. Reuses the immutable shared WASM from `20261107-2`; preserve that asset. See [workflow](20261109-5/README.md) and [observed validation](20261109-5/VALIDATION.md).

## Privilege Quilt — 20261109-6

Local MiniLM duty-to-permission matching plus exhaustive minimum-extra-access role bundling. Mandatory review/holds, forbidden-permission and cap checks; complete JSON/CSV/Markdown access plans without account changes. Six simple fixture links matched; a negated deletion need failed semantically and was blocked by the deterministic forbidden gate. Reuses shared WASM from `20261107-2`; preserve that asset. See [workflow](20261109-6/README.md) and [observed validation](20261109-6/VALIDATION.md).

## Packet Seam — 20261109-7

Local MiniLM semantic insertion costs and exact capacity-slot assignment help editors update ordered reading packets. Review every incoming placement, protect gaps, hold unsuitable content and export complete JSON/CSV/Markdown manifests with original order preserved. Six simple expected gaps matched across two tiny fixtures; topical similarity does not check truth or stance. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261109-7/README.md) and [observed validation](20261109-7/VALIDATION.md).


## Fault Lantern — 20261109-8

Local MiniLM symptom-to-signature retrieval plus exact budgeted diagnostic-check coverage, mandatory review/holds and complete JSON/CSV/Markdown audits. Six simple expected matches passed; a negated jam observation still matched jam, so no automatic diagnosis is claimed. Both catalogs cover three approved observations in five assumed minutes vs two in four for input-order baseline. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow](20261109-8/README.md) and [validation](20261109-8/VALIDATION.md).

## Screening Harbor — 20261109-9

Local MiniLM opposing-anchor evidence supports multi-criterion title/abstract screening with mandatory human decisions, primary exclusion reasons and complete JSON/CSV/Markdown exports. Two simple synthetic fixtures matched 8/8 intended proposals and reasons; negation and missing-design challenges failed, so no automated eligibility or accuracy claim is made. Offline fresh-worker inference is tested only within an already-open cached page. Reuses immutable shared WASM from `20261107-2`; preserve that asset. See [workflow and limits](20261109-9/README.md) and [observed validation](20261109-9/VALIDATION.md).

## Measure Moor — 20261109-10

Local real MiniLM metric-description matching plus dimension-checked affine unit conversion helps operations analysts normalize measurement batches. Every row needs human approval or hold; original values survive complete JSON/CSV/Markdown audits. Two tiny synthetic batches matched 8/8 expected metric links, six conversions and two incompatible-unit blocks; a negated temperature description still mislinked, so similarity is not equivalence. Offline fresh-worker inference is tested only within an already-open cached page. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261109-10/README.md) and [observed checks](20261109-10/VALIDATION.md).

## Clock Harbor — 20261109-11

Real local MiniLM request-to-policy matching plus deterministic UTC working-hour response clocks, explicit holidays and pause intervals. Human review/holds and complete JSON/CSV/Markdown audits retain every request. Six simple policy links and six deadlines matched across two tiny synthetic fixtures; a negated login request still mislinked, so semantic similarity is not contractual applicability. Offline fresh-worker inference is tested only inside an already-open cached page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261109-11/README.md) and [observed validation](20261109-11/VALIDATION.md).

## Round Circuit — 20261109-12

Local MiniLM inspection-to-checkpoint retrieval plus exact closed walking-round optimization on supplied corridor graphs. Review/holds and complete JSON/CSV/Markdown preserve all checks. Seven simple checkpoint links matched across two synthetic facilities fixtures; a negated cafe instruction still mislinked, so mandatory human review remains essential. Offline fresh-worker inference is tested only inside an already-open cached page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow](20261109-12/README.md) and [observed checks](20261109-12/VALIDATION.md).

## Cut Ledger — 20261109-13

Real local MiniLM material matching plus exact minimum-board one-dimensional cutting allocation with conservative kerf accounting. Mandatory human review/holds and complete JSON/CSV/Markdown preserve every piece. Two tiny synthetic batches matched 12/12 material links; each used three stock lengths vs four next-fit baseline. A negated pine prohibition still mislinked, so similarity is not material compatibility. Fresh-worker offline inference is tested only inside an already-open cached page. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow](20261109-13/README.md) and [observed checks](20261109-13/VALIDATION.md).

## Decision Docket — 20261109-14

Real local MiniLM meeting-note intent classification assists a human-approved decision register with attached reasons/actions, explicit unassigned owners/dates and complete JSON/CSV/Markdown handoffs. Nine of ten simple fixture labels matched; one release follow-up was misclassified as a decision and corrected during review. A separate shorthand challenge matched 2/3, so model intent is not proof of agreement. Offline fresh-worker inference is tested only within an already-open cached page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261109-14/README.md) and [observed checks](20261109-14/VALIDATION.md).


## Ballot Bridge — 20261109-15

Local MiniLM reconciles reworded ranked choices with canonical poll options; mandatory whole-ballot review feeds tie-explicit instant-runoff counting with exhausted-ballot conservation and complete JSON/CSV/Markdown audits. All 16 simple fixture links matched; negated/unrelated choices still receive unsuitable proposals. For informal team preferences only, not binding elections. Fresh-worker offline inference tested only inside an already-open page. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261109-15/README.md) and [observed validation](20261109-15/VALIDATION.md).

## Witness Window — 20261109-16

Local real MiniLM event retrieval helps incident coordinators reconcile time-bounded recollections. Mandatory review/holds feed interval intersections, explicit contradictions and strict non-overlap before-links, with complete JSON/CSV/Markdown source audits. Both tiny fixtures matched all eight intended identities and exposed the seeded five-minute conflict; negation still mislinked, so semantic similarity is not identity or truth verification. Offline fresh-worker inference tested only inside an already-open page. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261109-16/README.md) and [observed validation](20261109-16/VALIDATION.md).


## Transfer Twin — 20261109-18

Real local MiniLM memo inference plus exact one-to-one internal-transfer pairing under opposite-cent/account/date constraints. Mandatory review, preserved unmatched rows and complete JSON/CSV/Markdown audits. Two tiny synthetic fixtures matched all six intended debit outcomes (four transfer pairs and two unpaired); a negated memo still mislinked, so this is never identity verification or transaction posting. Fresh-worker offline inference tested only inside an already-open page. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261109-18/README.md) and [observed validation](20261109-18/VALIDATION.md).


## Pantry Current — 20261109-19

Real local MiniLM ingredient retrieval plus human-reviewed earliest-expiry lot reservation for cafe/bakery prep. Complete JSON/CSV/Markdown preserves every request, lot and gram, including holds and shortages. Two tiny synthetic batches matched all eight intended ingredient links; FEFO reserved 1,800 vs 1,400 g and 2,200 vs 1,900 g under identical reviewed mappings. A negated ingredient prohibition still mislinked, so no safety, allergen or substitution judgment is claimed. Fresh-worker offline inference tested only inside an already-open page. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261109-19/README.md) and [observed validation](20261109-19/VALIDATION.md).


## Setup Harbor — 20261109-20

Real local MiniLM setup-family retrieval plus exhaustive single-machine sequencing balances transition minutes against weighted tardiness. Mandatory review/holds and complete JSON/CSV/Markdown preserve every job. Both tiny synthetic queues matched all eight intended families; computed objectives were 32 vs 171 and 30 vs 159 input-order, not measured savings. Negation still mislinked. Fresh-worker offline inference tested only inside an already-open page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261109-20/README.md) and [observed validation](20261109-20/VALIDATION.md).


## Borrow Bridge — 20261109-21

Real local MiniLM equipment matching plus minimum-unit fixed-interval checkout allocation with turnaround buffers and explicit capacity shortages. Mandatory review/holds and complete JSON/CSV/Markdown preserve every request. Two tiny synthetic batches matched all eight intended equipment links; required units were four vs five/six dedicated-per-loan baselines, with one extra unit needed in each. A negated request still mislinked, so similarity is not compatibility. Fresh-worker offline inference tested only inside an already-open page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261109-21/README.md) and [observed checks](20261109-21/VALIDATION.md).


## Assembly Ledger — 20261109-22

Real local MiniLM retrieves reworded BOM components for mandatory human review; deterministic cycle detection and nested demand expansion produce consolidated raw-stock buy lists and components-first build orders. Complete JSON/CSV/Markdown preserves originals, held lines and unresolved branches; partial plans are explicit lower bounds. Both synthetic batches matched 8/8 intended links, but negation still mislinked; this is not compatibility or manufacturing validation. 600 random DAGs matched independent recursive quantities. Fresh-worker offline inference tested only inside an already-open page. Reuses immutable shared WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261109-22/README.md) and [observed validation](20261109-22/VALIDATION.md).


## Question Compass — 20261109-23

Real local MiniLM question-to-anchor inference assists interview-guide framing review. Human-written revisions, mandatory approval/holds, integer-minute budget checks and complete JSON/CSV/Markdown preserve every original prompt. Seven of eight tiny fixture labels matched; a multi-part question was misclassified and an assumed-premise challenge was missed, so this is not bias certification. Fresh-worker offline inference tested only inside an already-open page. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261109-23/README.md) and [observed validation](20261109-23/VALIDATION.md).


## Panel Ledger — 20261109-24

Real local MiniLM bio-to-experience retrieval assists low-stakes pilot-panel planning. Mandatory human review/holds feed exact quota-constrained priority maximization with complete JSON/CSV/Markdown panel, reserve and held audits. Both tiny synthetic fixtures matched all 16 intended group links; negated/unrelated bios still receive unsuitable closest-group proposals. 500 generated cases matched an independent exhaustive solver. Fresh-worker offline inference is tested only inside an already-open page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261109-24/README.md) and [observed validation](20261109-24/VALIDATION.md).


## Breakwater Budget — 20261110-1

Real local MiniLM cost-behavior inference assists a mandatory human-reviewed single-product monthly budget. Integer-cent break-even, target-profit volume, capacity profit and target price floors follow; holds block projections and complete JSON/CSV/Markdown retains every cost. Seven of eight tiny fixture labels matched; a per-attendee cost required correction, and negation/mixed-cost challenges failed. No accounting-verification claim. Fresh-worker offline inference tested only inside an already-open page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-1/README.md) and [observed validation](20261110-1/VALIDATION.md).


## Cadence Loom — 20261110-2

Real local MiniLM reconciles free-text maintenance cadence notes to reviewed recurrence types, then exact date expansion produces finite month-end/weekend-aware reminder calendars. Eight tiny fixture notes matched; event-triggered and twice-weekly notes still need holds. Complete JSON/CSV/Markdown preserves every task; ICS contains approved dated reminders only. Fresh-worker offline inference tested in an already-open page, not reload. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-2/README.md) and [observed checks](20261110-2/VALIDATION.md).


## Unpublished draft — 20261110-3: Quote Canopy

Real local MiniLM inference matched 12/12 tiny synthetic quote links; fee-inclusive order comparison matched 600 independent assignment-oracle cases. Review/holds, exact units/quantities, all maximum dimensions, exports, offline fresh-worker inference and defensive production-browser checks passed locally. Three Pages workflows failed (one before jobs, one after a successful combined build, and the documented legacy rebuild). GitHub reported an Actions partial outage; the new public app remained unavailable, so public AI/runtime verification could not pass. This tested draft is excluded from APPS and combined deployment; do not count it as completed. Preserve all older entries and resolve hosting before promotion. See [draft workflow](20261110-3/README.md), [publication status](20261110-3/publication-status.json), [attempts](20261110-3/hosting-attempts.json) and [validation](20261110-3/VALIDATION.md).



## Referee Weave — 20261110-4

Real local MiniLM abstract-to-expertise inference assists mandatory human-reviewed workshop reader allocation. Exact min-cost flow respects declared conflicts, distinct readers and capacities; complete JSON/CSV/Markdown preserves every paper–reader pair and holds. Eight tiny fixture topic families matched; methods allocation filled 8/8 vs 7/8 input-order slots and community allocation scored 2548 vs 1572 with four slots each. These are computed planning objectives, not reviewer-quality claims. Negated/unrelated text still needs manual exclusion. 500 generated cases matched an independent exhaustive solver. Offline fresh-worker inference is tested only inside an already-open cached page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-4/README.md) and [observed validation](20261110-4/VALIDATION.md). Publication status is recorded in the app validation files.


## Recall Ledger — 20261110-5

Real local MiniLM matches rough recall-session notes to supplied flashcards; mandatory human card verification and recall ratings drive transparent SM-2-style review dates. All notes, holds and untouched cards survive JSON, with reviewed CSV/Markdown outputs. Six tiny fixture links matched versus zero exact-title hits; negated/unrelated text still mislinks, so AI never grades recall. Fresh-worker offline inference is tested only inside an already-open cached page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-5/README.md) and [observed checks](20261110-5/VALIDATION.md).


## Unpublished draft — Driver Ledger (20261110-6)

Real local MiniLM matched 10/10 tiny synthetic activity-to-cost-pool links; reviewed integer-cent allocation, 2,000 generated conservation/rounding cases, current JSON/CSV/Markdown artifacts, offline fresh-worker inference and defensive browser checks passed. Three GitHub Pages workflows built successfully but failed during deployment: two synchronization timeouts and one immediate cancellation. The new public URL remained HTTP 404, preventing public AI/runtime verification. This tested draft is excluded from APPS and the restored combined deployment; do not count it as completed. Reducing the model cannot repair Pages synchronization: the new app adds only ~0.9 MB and already reuses immutable collection WASM. Preserve old apps and resolve hosting before promotion. See [draft workflow](20261110-6/README.md), [observed validation](20261110-6/VALIDATION.md), [hosting attempts](20261110-6/hosting-attempts.json) and [publication status](20261110-6/publication-status.json).


## Index Folio — 20261110-7

Real local MiniLM matches paginated excerpts to controlled subject headings for a mandatory human-reviewed back-of-book index. Edit multi-subject links and page spans, hold unsuitable excerpts, deduplicate overlapping page references and export complete JSON/CSV/Markdown. Both tiny fixtures matched 12/12 intended single subjects versus no literal-title hits; negated/unrelated text still needs holds. Fresh-worker offline inference tested inside an already-open cached page, not reload. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-7/README.md) and [observed validation](20261110-7/VALIDATION.md).

### Combined-site size guard

The combined site reached 1,270,905,714 bytes, exceeding GitHub Pages’ documented 1 GB published-site limit. Root `deploy.sh` now runs `scripts/dedupe-runtime.py`: it verifies byte-identical ONNX WASM copies, reuses the immutable `20261107-2` asset for 14 earlier apps, cache-busts changed workers and entry shells, retains compatibility JS URLs and leaves every source/dist build untouched. The generated `deploy/runtime-deduplication.json` records exact sizes and paths; the build fails above a conservative 1,000,000,000-byte budget. Real inference was verified on every affected legacy worker locally and publicly; the optimized Pages deployment succeeded. Old open sessions may need a reload after cache migration. Do not remove the shared asset or bypass the root size guard.


## Milestone Meter — 20261110-8

Real local MiniLM links rough progress reports to budgeted work packages; mandatory human link/date/completion verification feeds latest-report earned value, exact-cent PV/EV and explicit missing-progress/conflict guards. All reports survive JSON/CSV/Markdown. Eight tiny fixture links matched, but negated/unrelated reports still mislink: AI does not certify completion or financial inputs. 1,200 generated cases independently verified rounding, latest-state selection and guards. Offline fresh-worker inference tested only in an already-open cached page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-8/README.md) and [observed checks](20261110-8/VALIDATION.md).


## Unpublished draft — Bundle Bench (20261110-9)

Real local MiniLM matched 7/8 tiny synthetic repair-note links; one camera-cleaning note required human correction. Reviewed exact-scope service-bundle partitioning passed 1,800 independent exhaustive pricing cases. Production workflow, complete exports, offline fresh-worker inference and defensive browser checks passed locally and in the assembled collection. Three Pages workflows built successfully but failed during deployment: two synchronization timeouts and one immediate cancellation. The new public URL remained HTTP 404, preventing public AI/runtime verification. This tested draft is excluded from APPS and the restored combined deployment; do not count it as completed. The new app adds only ~0.88 MB and already reuses immutable WASM, so reducing the AI model cannot repair this provider deployment failure. Preserve older apps and resolve hosting before promotion. See [draft workflow](20261110-9/README.md), [observed validation](20261110-9/VALIDATION.md), [hosting attempts](20261110-9/hosting-attempts.json) and [publication status](20261110-9/publication-status.json).


## Unpublished draft — Failure Folio (20261110-10)

Real local MiniLM reconciles office-process observations with supplied failure modes; mandatory human link/rating/action review feeds stable FMEA priority ordering and explicitly hypothetical post-action ratings. Eight tiny fixture links matched; negated/unrelated text still needs holds, and ordinal RPN is not probability or safety certification. Complete JSON/CSV/Markdown retains every source. 1,200 generated cases verified calculations, order and conservation. Fresh-worker offline inference tested only in an already-open cached page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-10/README.md), [observed checks](20261110-10/VALIDATION.md) and [publication status](20261110-10/publication-status.json).

Three GitHub Pages workflows built successfully but failed to deploy (two file-synchronization timeouts and one immediate cancellation). The public URL remained HTTP 404, so public AI/runtime verification could not be performed. This draft is excluded from APPS and the restored combined deployment; do not count it as completed. The app adds only 882,874 bytes and already shares immutable WASM; simplifying its model cannot repair provider synchronization. Resolve hosting and repeat public asset/inference checks before promotion.


## Flow Caliper — 20261110-11

Real local MiniLM matches rough single-unit time-study notes to process stages for mandatory human verification. Reviewed seconds feed mean-load capacity and minimum parallel-server arithmetic, with missing-stage guards and complete JSON/CSV/Markdown audits. Both tiny fixtures matched all eight intended links; negated/unrelated text still needs holds. 1,500 generated cases independently checked exact arithmetic and conservation. Fresh-worker offline inference tested only in an already-open cached page. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-11/README.md) and [observed validation](20261110-11/VALIDATION.md). Public Pages release, byte-verified worker/runtime/WASM, both real inference fixtures, complete production-browser suite and the 570-entry gallery were verified successfully.


## Process Ribbon — 20261110-12

Real local MiniLM reconciles rough measurement notes with monitored characteristics; mandatory human stream/value/unit/order review feeds frozen-baseline exploratory I–MR charts. Both tiny batches matched 20/20 links across four unique repeated phrasings, versus zero literal-title hits; negated/unrelated notes still mislink. 1,600 generated cases independently checked chart arithmetic, frozen limits and guards. Complete JSON/CSV/Markdown preserves every reading and hold. Small baselines are explicitly preliminary, not operational quality certification. Offline fresh-worker inference tested only inside an already-open cached page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-12/README.md) and [observed validation](20261110-12/VALIDATION.md). Public Pages build, byte-matched runtime/worker/WASM, both real inference fixtures, complete production-browser suite, 25-reading baseline and 571-entry gallery were verified.


## Unpublished draft — 20261110-13: Defect Atlas

Local real MiniLM defect-category inference, mandatory correction/holds, reviewed target-coverage Pareto ranking, 400 exhaustive-oracle cases, complete JSON/CSV/Markdown artifact checks, fresh-worker offline inference and defensive/mobile-layout production-browser tests passed. Seven of eight tiny known-answer links matched; the crushed-corner misclassification requires human correction. Three successful Pages builds timed out during deployment synchronization and were cancelled; the new public URL remained HTTP 404. Public inference/assets could not be verified. This draft is excluded from APPS and assembled deployment; do not count it as completed. The existing 571-entry public gallery was independently verified intact. Changing the tested model cannot repair the hosting blocker; the candidate adds only 886,867 bytes and reuses shared WASM. Resolve hosting, then rerun public runtime/inference/gallery checks before promotion. See [draft workflow](20261110-13/README.md), [publication status](20261110-13/publication-status.json), [attempts](20261110-13/hosting-attempts.json) and [validation](20261110-13/VALIDATION.md).


## Unpublished draft — 20261110-14: Criterion Canvas

Real local MiniLM criterion inference matched 12/12 tiny synthetic evaluation-note links. Mandatory score/link review feeds complete-cell guarded weighted decision matrices, equal-weight comparisons and leave-one-criterion-out scenarios; all originals and holds survive JSON/CSV/Markdown. 1,500 generated cases verified arithmetic, ties and completeness guards. Production browser, artifact, offline fresh-worker and defensive checks passed locally and in the assembled collection. Three successful Pages builds timed out during deployment synchronization and were cancelled; the new public URL remained HTTP 404, so public inference/assets could not be verified. This draft is excluded from APPS and restored deployment; do not count it as completed. The candidate adds only 887,438 bytes and already reuses shared WASM; reducing the model cannot repair provider synchronization. See [draft workflow](20261110-14/README.md), [validation](20261110-14/VALIDATION.md), [attempts](20261110-14/hosting-attempts.json) and [publication status](20261110-14/publication-status.json).


## Demand Loom — 20261110-15

Real local MiniLM reconciles rough weekly demand descriptions to stocked items. Mandatory item/week/quantity review and a complete-coverage declaration gate deterministic rolling naive-versus-MA3 comparisons and one-week replenishment arithmetic. Both tiny fixtures matched 24/24 record links across four repeated phrasings; negated/unrelated text still mislinks. 1,800 generated cases checked arithmetic and conservation; complete JSON/CSV/Markdown, fresh-worker offline inference and defensive production-browser checks passed. No ordering or future-accuracy guarantee. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-15/README.md) and [observed validation](20261110-15/VALIDATION.md). Publication status is recorded in the app validation files.


## Sample Balance — 20261110-16

Real local MiniLM branch inference reconciles survey location notes for mandatory human branch/rating verification. Confirm a disjoint target frame, inspect raw versus poststratified means and weight-imbalance ESS, and export complete JSON/CSV/Markdown. Holds, empty branches and oversampling block weighted estimates. Both tiny fixtures matched 12/12 links; negated/unrelated notes still mislink, and weighting cannot fix within-branch nonresponse bias. 1,800 generated cases checked arithmetic and conservation. Production browser, artifacts, fresh-worker offline inference, public asset hashes, both public real-AI fixtures and the 573-entry gallery passed. Offline scope is an already-open cached page, not reload. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-16/README.md), [observed validation](20261110-16/VALIDATION.md) and [public release](20261110-16/publication-status.json).


## Trial Harbor — 20261110-17

Real local MiniLM arm inference reconciles messy fixed-horizon A/B batch labels. Mandatory human arm/count review and design confirmation gate transparent Wilson/Newcombe conversion-lift intervals against a predeclared practical target; complete JSON/CSV/Markdown preserves every original and hold. Both tiny fixtures matched 8/8 links, but negated/unrelated descriptions still mislink. 1,800 independent score-equation/conservation cases, production browser, artifact and fresh-worker offline checks passed. No automatic launch or causal guarantee. Offline scope is an already-open cached page, not reload. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-17/README.md), [observed validation](20261110-17/VALIDATION.md) and [publication status](20261110-17/publication-status.json).


## Unpublished draft — 20261110-18: Pair Compass

Real local MiniLM method inference matched 16/16 links across two tiny synthetic instrument-comparison fixtures. Mandatory specimen/value review feeds unique complete pairs, exploratory Bland–Altman bias/limits, a predeclared tolerance comparison and complete JSON/CSV/Markdown. A negated challenge mislinked, so review/holds remain essential. 1,600 independent arithmetic cases, production-browser, artifact and offline fresh-worker checks passed locally and in the assembled collection. Three successful Pages builds timed out during deployment synchronization; the public app remained HTTP 404, preventing public AI/runtime verification. This tested draft is excluded from APPS and the restored combined deployment; do not count it as completed. The candidate adds only 887,814 bytes and already reuses immutable WASM, so changing its tested model cannot repair hosting synchronization. Resolve hosting before promotion and rerun public asset/inference/gallery checks. See [draft workflow](20261110-18/README.md), [validation](20261110-18/VALIDATION.md), [attempts](20261110-18/hosting-attempts.json) and [publication status](20261110-18/publication-status.json).


## Resolution Tide — 20261110-19

Real local MiniLM stream inference assists mandatory review of completed/open work-item observations. Confirm cohort and censoring assumptions, compare completed-only medians with Kaplan–Meier completion estimates and export complete JSON/CSV/Markdown audits. Both tiny fixtures matched 24/24 links; unrelated descriptions still receive a nearest stream. 1,800 generated arithmetic cases, current artifact parsing, fresh-worker offline inference and defensive production-browser checks passed locally. Offline scope is an already-open cached page, not reload. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-19/README.md), [observed validation](20261110-19/VALIDATION.md) and [publication status](20261110-19/publication-status.json).


## Unpublished draft — 20261110-20: Share Ledger

Real local MiniLM policy inference matched 7/8 tiny shared-expense links; one software subscription needed human correction. Mandatory payer/amount/split review feeds exact-cent weighted allocations and greedy net reimbursements, with complete JSON/CSV/Markdown and a transparent per-expense transfer baseline. 1,800 generated arithmetic cases, actual production-browser inference, artifacts, fresh-worker offline and defensive checks passed locally and in the assembled collection. Three successful Pages builds timed out during deployment synchronization; the public app remained HTTP 404, so public runtime/inference verification could not pass. This tested draft is excluded from APPS and the restored combined deployment; do not count it as completed. It adds only 886,709 bytes and already shares immutable WASM from `20261107-2`; changing the tested model cannot repair hosting synchronization. Preserve older apps and resolve hosting before promotion. See [draft workflow](20261110-20/README.md), [observed validation](20261110-20/VALIDATION.md), [attempts](20261110-20/hosting-attempts.json) and [publication status](20261110-20/publication-status.json).


## Sequence Dock — 20261110-21

Real local MiniLM setup-family inference helps small workshops review freely reorderable jobs before exact directed-changeover sequencing. Mandatory approval/holds preserve every job; supplied transition estimates feed an original-order comparison and complete JSON/CSV/Markdown queues. Both tiny fixtures matched 10/10 links; unrelated descriptions still mislink and need holds. 600 independent exhaustive-permutation cases verified the optimizer, and maximum six-family/12-job bounds passed. Production and public browser suites, real artifacts, offline fresh-worker inference, public worker/runtime/WASM hashes and gallery preservation passed. Offline scope is an already-open cached page, not reload. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-21/README.md), [observed validation](20261110-21/VALIDATION.md) and [public release](20261110-21/publication-status.json).


## Rotation Ledger — 20261110-22

Real local MiniLM duty inference reconciles informal past-shift notes for mandatory human review. Eligibility and recent-duty cooldowns gate exact next-round assignments minimizing maximum cumulative workload, with complete JSON/CSV/Markdown history audits. Both tiny fixtures matched 8/8 links; negated/unrelated notes still mislink and require holds. 900 independent permutation-oracle cases, maximum eight-person planning, real 40-text batching, reviewed artifacts, offline fresh-worker and defensive production-browser checks passed. Window completeness and estimates are user verified; no interpersonal fairness guarantee or volunteer contact. Offline scope is an already-open cached page, not reload. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-22/README.md), [observed validation](20261110-22/VALIDATION.md) and [publication status](20261110-22/publication-status.json).

Public Pages release, byte-matched worker/runtime/WASM, both real-AI fixtures, complete public browser suite and the 577-entry gallery were verified for Rotation Ledger.


## Cart Weave — 20261110-23

Real local MiniLM item inference reconciles supplier quote descriptions with purchasing requirements. Mandatory equivalence/unit/pack/stock/price review gates exact one-offer-per-item baskets including per-supplier delivery and free-delivery thresholds. Both tiny fixtures matched 12/12 intended links; unrelated descriptions still mislink and require holds. 1,200 independent exhaustive-oracle cost cases, 4,096-combination maximum, real 24-offer batches, reviewed JSON/CSV/Markdown parsing, fresh-worker offline and defensive production-browser checks passed locally. No ordering or actual-savings guarantee; offline scope is an already-open cached page, not reload. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-23/README.md), [observed validation](20261110-23/VALIDATION.md) and [publication status](20261110-23/publication-status.json).

Public Pages release, byte-matched worker/runtime/WASM, both real-AI fixtures, complete public browser suite, shipping-threshold boundary case and the 578-entry gallery were verified for Cart Weave after two synchronization timeouts and a successful third deployment.


## Deadline Foundry — 20261110-24

Real local MiniLM task inference links rough expediting offers for mandatory human review before exact minimum-cost deadline planning on a supplied parallel dependency graph. Both tiny fixtures matched 8/8 links versus 2/8 literal-title hits; unrelated sources still need holds. 1,000 independent subset-oracle cases, six critical boundary cases, reviewed JSON/CSV/Markdown parsing, real maximum batches and fresh-worker offline inference passed. Unlimited parallel resources and independent offers are explicit assumptions, not delivery guarantees. After two Pages synchronization timeouts, the unchanged third rebuild succeeded: public asset hashes, both real-AI fixtures, all 11 public workflow checks and the preserved 579-entry gallery passed. Offline scope is an already-open cached page, not reload. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-24/README.md), [observed validation](20261110-24/VALIDATION.md) and [public release](20261110-24/publication-status.json).


## Unpublished draft — 20261111-1: Buffer Bench

Real local MiniLM item inference matched 16/16 tiny lead-time-demand links; the full 4-item/24-observation boundary fixture also matched 24/24. Mandatory unit/window/count review feeds exploratory empirical reorder points, mean-only baselines and descriptive leave-one-out exceedances, with complete JSON/CSV/Markdown. 1,800 arithmetic/oracle cases, production/assembled browser workflows, artifacts, fresh-worker offline inference and defensive checks passed. Negation/unrelated text still mislinks; no future-service improvement is claimed. Three successful Pages builds failed during deployment/synchronization; the new public URL remained HTTP 404, blocking public runtime/inference verification. This draft is excluded from APPS and restored combined deployment and must not count as completed. It adds under 1 MB and already reuses shared WASM, so a model change cannot repair the hosting blocker. See [draft workflow](20261111-1/README.md), [validation](20261111-1/VALIDATION.md), [attempts](20261111-1/hosting-attempts.json) and [publication status](20261111-1/publication-status.json).

## Quota Spring — 20261111-2

Real local MiniLM funding-pot inference matched 16/16 tiny synthetic microgrant links and 24/24 repeated requests at the four-pot boundary. Mandatory eligibility/claim review feeds capped equal awards, exact-cent residual handling and a same-budget first-come comparison, with complete JSON/CSV/Markdown. 1,800 independent cent-oracle cases, production/assembled browser flows, artifacts, offline fresh-worker and defensive checks passed. Unrelated text still mislinks; equal awards are a declared policy, not a fairness guarantee. No payments or content uploads. Offline scope is an already-open warmed page, not reload. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261111-2/README.md), [observed validation](20261111-2/VALIDATION.md) and [publication status](20261111-2/publication-status.json).

Quota Spring public release, byte-matched assets, both public real-AI fixtures, the complete public browser suite and preserved 580-entry gallery passed on the first deployment.


## Unpublished draft — 20261111-3: Reserve Relay

Real local MiniLM matched 12/12 product links across two tiny multi-site stock fixtures. Mandatory product/site/count review gates maximum-deficit-fill, minimum directed per-unit-cost transfers that retain donor reserves, with complete JSON/CSV/Markdown. 1,600 independent exhaustive-flow oracle cases, production/assembled browser workflows, artifacts, offline fresh-worker inference and defensive checks passed. Unrelated text still mislinks and needs holds.

Three successful Pages builds timed out during deployment synchronization/finalization; the public app remained HTTP 404, preventing public AI/runtime verification. This tested draft is excluded from APPS and the restored combined deployment; do not count it as completed. It adds under 1 MB and already shares immutable WASM from `20261107-2`; reducing the tested model cannot repair provider synchronization. Preserve older apps and resolve hosting before promotion. See [draft workflow](20261111-3/README.md), [observed validation](20261111-3/VALIDATION.md), [attempts](20261111-3/hosting-attempts.json) and [publication status](20261111-3/publication-status.json).


## Revenue Weave — 20261111-4

Real local MiniLM product inference reconciles messy two-period sales labels for mandatory human review. Exact symmetric price/volume attribution reconciles revenue changes against an old-price/old-quantity interaction baseline, with complete JSON/CSV/Markdown. Both tiny fixtures matched 8/8 intended links; unrelated text still mislinks and needs holds. 2,000 independent BigInt arithmetic cases, maximum batching, downloaded artifacts, fresh-worker offline and defensive production-browser checks passed. Attribution is descriptive, not causal or profit forecasting. Offline scope is an already-open warmed page, not reload. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261111-4/README.md), [observed validation](20261111-4/VALIDATION.md) and [publication status](20261111-4/publication-status.json).

Revenue Weave public release, byte-matched assets, both real-AI fixtures, full public workflow and maximum-batch checks, and the preserved 581-entry gallery passed on the first deployment.


## Reserve Mosaic — 20261111-5

Local MiniLM reconciles rough event incident notes to supplied cost templates, followed by mandatory human verification of costs and likelihoods. Independent one-off Bernoulli convolution compares rounded expected loss against a chosen hypothetical loss-coverage reserve; no prediction, calibration or independence claim is made. Five tiny known-answer links matched; unrelated text still receives a nearest-template suggestion and requires a hold. Real offline fresh-worker inference is tested only inside an already-open warmed page. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261111-5/README.md) and [observed validation](20261111-5/VALIDATION.md).


## Dilution Desk — 20261111-6

Real local MiniLM stock retrieval helps classroom demonstrators reconcile informal solution requests. Mandatory identity/quantity review feeds deterministic C1V1=C2V2, additive-volume checks and aggregate stock-shortage guards. Complete JSON/CSV/Markdown preserves every original and hold. Five tiny known-answer requests matched; negation failed, so this is not identity/safety certification. Fresh-worker offline inference tested in an already-open warmed page only. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261111-6/README.md) and [observed checks](20261111-6/VALIDATION.md).


## Audit Orchard — 20261111-7

Real local MiniLM stratum inference assists operations auditors before complete-frame human review and deterministic minimum-constrained proportional quotas with seeded selection without replacement. Both tiny fixtures matched all 12 links; sample coverage was 3/3 strata versus first-N baselines 1/3 and 2/3. A wider six-stratum challenge confused hotel records with catering, so review is mandatory and coverage is not statistical assurance. Complete JSON/CSV/Markdown preserves every record. Fresh-worker offline inference tested only in an already-open page. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261111-7/README.md) and [observed validation](20261111-7/VALIDATION.md).


## Yield Ledger — 20261111-8

Real local MiniLM defect-family inference helps rework coordinators reconcile rough batch notes before mandatory count/loss review and tie-aware Pareto investigation priorities. Furniture matched 5/6 tiny known-answer links; print matched 6/6. One arrival-related lacquer defect was misclassified as packaging and explicitly corrected in review. Reviewed coverage is descriptive, not cause or predicted savings. 2,100 independent descending/tie-closed prefix oracle cases, real maximum batching, downloaded JSON/CSV/Markdown, offline fresh-worker and defensive production-browser checks passed. Offline scope is an already-open warmed page, not reload. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261111-8/README.md), [observed validation](20261111-8/VALIDATION.md) and [publication status](20261111-8/publication-status.json).

Yield Ledger public release, byte-matched assets, both real-AI fixtures, the complete public workflow suite and the preserved 585-entry gallery were verified on the first Pages deployment.

## Calibration Bench — 20261111-9

Local MiniLM instrument identity inference supports reviewed linear calibration worksheets. Separate fit/check rows, unit/tolerance/range guards and complete JSON/CSV/Markdown audits; never equipment control. Reuses the immutable shared WASM from `20261107-2`. See [workflow](20261111-9/README.md) and [observed validation](20261111-9/VALIDATION.md).


## Flow Balance — 20261111-10

Real local MiniLM reconciles informal visit notes to service stations; mandatory review feeds exact occupancy sweeps and budgeted waiting-seat allocation. Both synthetic workflows matched 16/16 intended identities. Community excess occupancy was 40 person-minutes with two optimized extras versus 45 for the same-budget first-station baseline; repair fixture tied its baseline at 20. Historical replay only, not queue-time or staffing predictions. Complete JSON/CSV/Markdown, fresh-worker offline inference in an already-open page and defensive checks are documented in [workflow/privacy](20261111-10/README.md) and [observed validation](20261111-10/VALIDATION.md). Reuses immutable shared WASM from `20261107-2`; preserve that asset.


## Transit Footprint — 20261111-11

Real local MiniLM mode retrieval helps reconcile informal travel diaries with supplied transport factors. Mandatory review/holds feed explicit mile conversion and vehicle-versus-passenger occupancy arithmetic, complete audits and a clearly hypothetical same-distance scenario. Eight tiny synthetic links matched against four for a first-factor baseline; unrelated text still receives a mode, requiring human exclusion. Example factors are teaching values, not official carbon factors or reporting certification. Fresh-worker offline inference is tested only in an already-open cached page. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261111-11/README.md) and [observed checks](20261111-11/VALIDATION.md).


## Asset Calendar — 20261111-12

Real local MiniLM links asset notes to user-supplied useful-life policies, followed by mandatory review/holds and exact-cent full-month straight-line schedules. Two simple fixtures matched 8/8 links, but negation misclassified; similarity is not accounting equivalence. All 2,400 generated arithmetic cases matched a BigInt oracle. Complete JSON, all-asset CSV, monthly Schedule CSV and Markdown preserve the audit. Offline fresh-worker inference tested only inside an already-open page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261111-12/README.md), [validation](20261111-12/VALIDATION.md) and public verification reports.


## Watt Folio — 20261111-13

Real local MiniLM reconciles appliance notes to supplied power profiles. Mandatory review/holds feed exact integer watt-minute energy scenarios, tariff estimates and reduction-target checks; complete JSON/CSV/Markdown retains every original. Eight simple fixture links matched, but a negated lamp description misclassified as computer, so this is not measured power or safety advice. Fresh-worker offline inference is tested only inside an already-open cached page. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261111-13/README.md) and [observed validation](20261111-13/VALIDATION.md).


## Horizon Folio — 20261111-14

Real local MiniLM reconciles rough cash-flow notes to independent capital projects. Mandatory amount/year review, held-project blocking and exhaustive discounted subset selection compare portfolios within an initial budget. Eight tiny fixture links matched; negation/unrelated text mislinked and needs holds. 1,800 arithmetic/oracle cases, production-browser workflows, artifacts and already-open-page offline fresh-worker inference passed. No AI forecasts or financial execution. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261111-14/README.md), [observed validation](20261111-14/VALIDATION.md) and publication status.

Horizon Folio public release, byte-matched runtime assets, full public real-AI/browser suite and preserved 591-entry gallery passed on the first deployment.


## Cost Tapestry — 20261111-15

Real local MiniLM activity-pool inference supports reviewed activity-based overhead allocation. Exact-cent largest remainders reconcile product and source-row shares against an output-volume baseline; held/absent usage blocks its complete pool. Both tiny synthetic workflows matched 8/8 intended links, but negation mislinked and needs review. 2,400 arithmetic/oracle cases, downloaded JSON/usage and product CSV/Markdown, maximum batching and fresh-worker offline inference passed. Offline scope is an already-open warmed page only. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261111-15/README.md), [observed validation](20261111-15/VALIDATION.md) and publication status.

Cost Tapestry public release, byte-matched runtime assets, both real-AI fixtures, full public workflow suite and the preserved 592-entry gallery passed on the first deployment.


## Fiber Balance — 20261111-16

Real local MiniLM grade retrieval supports mandatory human review of recycled-fiber stock. Exact bounded whole-kg optimization meets mass/recycled-content constraints at minimum supplied cost, compared with a cheapest-first baseline. Six simple fixture links matched; optimizer matched 250 independent exhaustive cases. Complete JSON/CSV/Markdown preserves originals and held lots. Offline fresh-worker inference tested only in an already-open page. Material compatibility, recycled properties and certification are not inferred. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261111-16/README.md) and [observed validation](20261111-16/VALIDATION.md).


## Carton Compass — 20261111-17

Real local MiniLM reconciles packing-slip item descriptions with supplied product catalogs. Mandatory quantity/dimension/weight review feeds homogeneous-grid carton fit and dimensional-weight charge comparison; complete JSON/CSV/Markdown preserves held/no-fit orders. Both tiny fixtures matched 6/6 links; negation mislinked and requires review. 1800 independent grid/BigInt billing cases, maximum batches, downloaded artifacts, offline fresh-worker inference and defensive browser checks passed. Not unrestricted 3D packing, live postage or packaging certification. Offline scope is an already-open warmed page only. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261111-17/README.md) and [observed checks](20261111-17/VALIDATION.md).

Carton Compass public release, byte-matched runtime assets, both real-AI fixtures, the full public workflow suite and the preserved 594-entry gallery passed on the first Pages deployment.


## Batch Breakwater — 20261111-18

Real local MiniLM product inference supports reviewed demand aggregation and exact additive whole-batch cost planning under explicit extra-unit limits. Holds block all plans; infeasible demand stays visible. Six tiny known-answer links matched, and 1,680 independent exhaustive cost/extra/count oracle cases passed. Complete JSON/CSV/Markdown preserves every request. Offline fresh-worker inference tested only within an already-open warmed page. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261111-18/README.md) and [observed validation](20261111-18/VALIDATION.md).

Batch Breakwater public release, byte-matched runtime assets, both real-AI fixtures, full public workflow suite and preserved 595-entry gallery passed on the first Pages deployment.


## Queue Cushion — 20261111-19

Real local MiniLM reconciles rough contact streams with service queues, followed by mandatory human review and deterministic minimum-agent Erlang-C planning. Compare occupancy-only teams with explicit wait-target staffing; complete JSON/CSV/Markdown preserves all streams. Six tiny known-answer links matched; a negated description mislinked, so review/hold remains essential. Estimates assume stationary M/M/c queues, not observed service guarantees or rosters. Fresh-worker offline inference tested only inside an already-open page. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261111-19/README.md) and [observed validation](20261111-19/VALIDATION.md).


## Lot Lantern — 20261111-20

Local MiniLM catalog inference reconciles annual consumption notes before deterministic pack-constrained economic order-lot optimization. All records require approval or hold; exports preserve originals and reviews. Six simple known-answer matches succeeded, while an unrelated note was forced to a catalog item, so mandatory review remains essential. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow](20261111-20/README.md) and [observed validation](20261111-20/VALIDATION.md).


## Concordance Bench — 20261111-21

Real local MiniLM codebook inference reconciles two independent coders’ free-text annotations before mandatory review, complete-pair contingency counts and nominal Cohen kappa. Both tiny fixtures matched 16/16 intended codes and exposed their seeded disagreements; negation and unrelated text mislinked, so human approval/holds are essential. Complete JSON/CSV/Markdown preserves every annotation, missing partner and adjudication unit. 1,701 independent matrix/kappa oracle cases and fresh-worker offline inference in an already-open page passed. Reuses immutable shared WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261111-21/README.md) and [observed validation](20261111-21/VALIDATION.md).

Concordance Bench public release, byte-matched runtime assets, both real-AI fixtures, full public workflow suite and preserved 598-entry gallery passed on the first Pages deployment.


## Uptime Mosaic — 20261111-22

Real local MiniLM reconciles rough equipment stoppage notes before mandatory identity/time review and deterministic overlap-safe downtime unions. Both tiny fixtures matched 12/12 intended links; naive sums double-counted 20 and 30 asset-minutes respectively. Negation/unrelated text mislinked, so holds and complete-log verification are essential. 2,400 independent minute-grid cases, complete JSON/CSV/Markdown artifacts and fresh-worker offline inference passed. Offline scope is an already-open warmed page only; logged availability is not proof of operation or a reliability forecast. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261111-22/README.md) and [observed validation](20261111-22/VALIDATION.md).

Uptime Mosaic public release, byte-matched runtime assets, both real-AI fixtures, the full public workflow suite and preserved 599-entry gallery passed on the first Pages deployment.


## Mix Observatory — 20261111-23

Real local MiniLM family inference reconciles inspection notes before mandatory count/period review and symmetric Kitagawa failure-rate decomposition. Two synthetic fixtures matched 12/12 labels and exposed opposing aggregate-versus-family reversals; negation/unrelated text mislinked and needs holds. 2,400 counterfactual-oracle cases, reviewed JSON/CSV/Markdown artifacts and fresh-worker offline inference passed. Offline scope is an already-open warmed page only. Descriptive rate/mix contributions are not causal or significance claims. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261111-23/README.md) and [observed validation](20261111-23/VALIDATION.md).

Mix Observatory public release, byte-matched runtime assets, both real-AI fixtures, full public workflow suite and preserved 600-entry working-tree gallery passed on the first Pages deployment.


## Sieve Folio — 20261111-24

Real local MiniLM material inference reconciles sieve-analysis sample notes before mandatory specification/mass review and exact cumulative-passing checks. Eight tiny fixture links matched; each workflow exposed one envelope failure missed by mass-only recovery. A negated description mislinked, so approval/holds remain essential. 2,400 independent arithmetic cases, complete JSON/CSV/Markdown artifacts and fresh-worker offline inference passed. Offline scope is an already-open warmed page only; synthetic envelopes are not standards or certification. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261111-24/README.md) and [observed validation](20261111-24/VALIDATION.md).

Sieve Folio public release, byte-matched runtime assets, both real-AI fixtures, full public workflow suite and preserved 601-entry working-tree gallery passed on the first Pages deployment.


## Basket Signal — 20261112-1

Real local MiniLM receipt reconciliation supports mandatory product/basket review and deterministic basket-association worksheets. All 22 tiny known-answer item links matched; transparent support/lift exposes repeated pairings beyond a popularity-only baseline. Negation/unrelated text mislinked, requiring holds; a held line excludes its whole basket. 1,800 independent arithmetic cases, complete JSON/audit and pair CSV/Markdown artifacts and fresh-worker offline inference passed. Offline scope is an already-open cached page only; associations are not sales or causal predictions. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261112-1/README.md) and [observed checks](20261112-1/VALIDATION.md).


## Severity Ledger — 20261112-2

Real local MiniLM reconciles informal issue notes to supplied failure modes before mandatory rating/action review. A custom severity-first capacity rule exposes gate-reaching issues hidden by plain RPN ranking; complete JSON/CSV/Markdown preserves held and deferred notes. Six simple fixture identities matched, but negation/unrelated text mislinked. This is a workshop aid, not an industry action-priority standard or safety certification. Fresh-worker offline inference tested within an already-open warmed page only. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261112-2/README.md) and [observed validation](20261112-2/VALIDATION.md).


## Value Canopy — 20261112-3

Real local MiniLM product inference reconciles annual consumption notes before mandatory quantity/cost review and tie-aware ABC counting worksheets. Eight tiny intended identities matched, while negation/unrelated text mislinked and requires holds. Exact-cent totals/classes matched 2,400 independent BigInt oracle cases; complete JSON/audit and product CSV/Markdown preserves originals and held lines. Fresh-worker offline inference tested only inside an already-open warmed page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261112-3/README.md) and [observed validation](20261112-3/VALIDATION.md).

Value Canopy public release, byte-matched runtime assets, both real-AI fixtures, full public workflow suite and preserved 604-entry working-tree gallery passed on the first Pages deployment.


## Buffer Estuary — 20261112-4

Real local MiniLM reconciles rough stock notes before mandatory identity/quantity review and empirical lead-time demand buffers. Six tiny intended identities matched; exact-title matching resolved none. Computed historical-window coverage is compared with a mean-demand baseline, not a future service guarantee. Negation/unrelated text mislinked and needs holds; held/absent stock blocks its assigned product. 2,400 independent BigInt oracle cases, complete reviewed JSON/CSV/Markdown artifacts and fresh-worker offline inference passed. Offline scope is an already-open warmed page only. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261112-4/README.md) and [observed validation](20261112-4/VALIDATION.md).

Buffer Estuary public release, byte-matched runtime assets, both real-AI fixtures, full public workflow suite and preserved 605-entry working-tree gallery passed on the first Pages deployment.


## Aging Harbor — 20261112-5

Real local MiniLM reconciles informal invoice recipients before mandatory customer/date/payment review and deterministic exact-cent receivables aging. Both tiny fixtures matched 7/7 customer links; negation and unrelated text mislinked, so legal identity still requires human verification. Held balances stay separate, every invoice survives JSON/CSV/Markdown, and fresh-worker offline inference works only in an already-open warmed page. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261112-5/README.md) and [observed validation](20261112-5/VALIDATION.md).


## Delegate Loom — 20261112-6

Real local MiniLM reconciles informal club chapter reports before mandatory identity/count review and exact largest-remainder delegate apportionment. Both tiny fixtures matched 7/7 links; 19,950 integer allocation cases conserved seats and respected quota bounds. Negation/unrelated text still needs holds. Complete JSON/CSV/Markdown preserves every report and exposes held membership; offline fresh-worker inference works only in an already-open warmed page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261112-6/README.md) and [observed validation](20261112-6/VALIDATION.md).

## Margin Weft — 20261112-7

Real local MiniLM reconciles crossed survey cohort descriptions before mandatory identity/count/rating review and deterministic two-margin iterative proportional fitting. Unlike single-axis weighting, both margins are balanced; structural-zero convergence failures and extreme weights block released estimates. Five of eight paraphrased cohort labels matched automatically; three required review corrections. 1,800 independent odds-ratio oracle cases, complete reviewed JSON/CSV/Markdown artifacts and fresh-worker offline inference passed. Offline scope is an already-open warmed page only. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261112-7/README.md) and [observed validation](20261112-7/VALIDATION.md).

Margin Weft public release, byte-matched runtime assets, both real-AI/reviewed fixtures, full public workflow suite and preserved 608-entry gallery passed on the first Pages deployment.


## Supplier Prism — 20261112-8

Real local MiniLM reconciles rough supplier spend descriptions before mandatory ownership/amount review and exact-cent concentration analysis. Eight tiny fixture links matched; consolidation exposed HHI 0.300→0.540 and 0.270→0.445 versus split names. Unrelated text mislinked and needs holds. 2,300 independent concentration cases, complete reviewed JSON/CSV/Markdown and fresh-worker offline inference passed. Offline scope is an already-open warmed page only; not legal-identity verification or outage prediction. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261112-8/README.md) and [observed checks](20261112-8/VALIDATION.md).

Supplier Prism public release, byte-matched runtime assets, both real-AI fixtures, full public workflow suite and preserved 609-entry gallery passed on the first Pages deployment.


## Tally Quay — 20261112-9

Real local MiniLM reconciles stocktake notes before mandatory product/bin/count review and deterministic gross-versus-net variance worksheets. Eight tiny fixture links matched; both net-zero stocktakes exposed gross variances of 2,000 and 500 cents. Duplicate bins, holds and missing counts block affected product totals; all source records survive JSON/CSV/Markdown. 2,400 independent BigInt oracle cases and fresh-worker offline inference passed. Offline scope is an already-open warmed page only. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261112-9/README.md) and [observed checks](20261112-9/VALIDATION.md).

Tally Quay public release, byte-matched runtime assets, both real-AI fixtures, full public workflow suite and preserved 610-entry gallery passed on the first Pages deployment.


## Trace Orchard — 20261112-10

Real local MiniLM reconciles informal source-batch transfer notes before mandatory endpoint/quantity review and deterministic downstream investigation paths. Eight tiny fixture links matched; both traces exposed two indirect batches missed by one-hop review. Unrelated text mislinked, so primary-record checks remain essential. Holds/cycles block release; 2,400 independent graph-oracle cases, complete reviewed JSON/CSV/Markdown and fresh-worker offline inference passed. Offline scope is an already-open warmed page only. No safety certification, mass balance or recall actions. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261112-10/README.md) and [observed checks](20261112-10/VALIDATION.md).


## Share Tapestry — 20261112-11

Real local MiniLM payer retrieval supports mandatory human-reviewed shared expenses. Exact-cent largest-remainder weighted splits feed deterministic greedy balance netting, compared with per-expense reimbursements. Eight tiny fixture payers matched; a negated payer note mislinked, so this is not authentication or payment execution. Both fixtures yielded 3 transfers versus 12 direct reimbursements; computed counts, not measured savings. Complete JSON/CSV/Markdown preserves all expenses and holds. 3,000 independent rounding/netting cases, offline fresh-worker inference and defensive production-browser checks passed. Offline scope is an already-open warmed page only. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261112-11/README.md) and [observed checks](20261112-11/VALIDATION.md).


## Fair Current — 20261112-12

Real local MiniLM routes rough service requests before mandatory queue/duration review and deterministic weighted-fair backlog scheduling. Twelve tiny fixture links matched; unrelated text still needs holds. Queue waiting estimates expose entitlement tradeoffs versus FIFO, not universal time savings. 3,000 independent rational scheduling-oracle cases, complete reviewed JSON/CSV/Markdown artifacts and fresh-worker offline inference passed. Offline scope is an already-open warmed page only. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261112-12/README.md) and [observed checks](20261112-12/VALIDATION.md).


## Tier Harbor — 20261112-13

Real local MiniLM reconciles rough annual-demand notes before mandatory product/count review and exact all-units price-break purchasing worksheets. Eight tiny intended product links matched; unrelated text still mislinked and needs holds. 2,400 independent rational cost-oracle cases, complete reviewed JSON/CSV/Markdown artifacts and fresh-worker offline inference passed. Offline scope is an already-open warmed page only; costs are model estimates, not quotes or purchases. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261112-13/README.md) and [observed checks](20261112-13/VALIDATION.md).


## Rain Reserve — 20261112-14

Local MiniLM inference reconciles catchment notes with supplied runoff profiles before reviewed monthly water-balance and discrete tank-sizing estimates. Eight simple surface matches passed across two batches; a negated metal-roof challenge incorrectly chose green, so mandatory human verification remains essential. One hundred independent sizing/conservation cases passed. This is not engineering, weather or water-quality certification. Reuses the immutable WASM from `20261107-2`; preserve its asset. See [workflow](20261112-14/README.md) and [observed validation](20261112-14/VALIDATION.md).


## Learning Loom — 20261112-15

Local MiniLM matches rough repeat-work notes to task profiles before mandatory review and Crawford unit-time labor estimates. Eight simple intended links matched; negation and unrelated notes still mislinked, so holds and human verification are essential. One thousand arithmetic oracle cases, reviewed JSON/CSV/Markdown and warmed-page fresh-worker offline inference passed. Reuses immutable WASM from `20261107-2`; preserve its asset. See [workflow/privacy](20261112-15/README.md) and [observed validation](20261112-15/VALIDATION.md).


## Echo Canopy — 20261112-16

Local MiniLM reconciles room surface notes with supplied acoustic materials before mandatory area/coefficient review and three-band Sabine treatment estimates. Eight tiny intended links matched; a negated description and unrelated note still mislinked. Reading room required 16 modules versus 6 for a mid-band-only baseline; studio required 30 versus 13, exceeding its cap of 20. These are synthetic assumption-based scenarios, not acoustic measurements or installation advice. 3,000 independent exact sizing cases, reviewed JSON/CSV/Markdown and warmed-page fresh-worker offline inference passed. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261112-16/README.md) and [observed validation](20261112-16/VALIDATION.md).

Echo Canopy public release, byte-matched runtime assets, both real-AI fixtures, full public workflow suite and preserved 617-entry working-tree gallery passed on the first Pages deployment.


## Lumen Ledger — 20261112-17

Local MiniLM matches rough work-area notes to task profiles before mandatory inventory/target review and deterministic maintained-light fixture estimates. Eight tiny intended links matched; negation and unrelated text still mislinked. Required additions were 10 versus a raw-lumen baseline of 1, and 28 versus 8; these are synthetic estimates, not lighting measurements or compliance. 3,000 independent BigInt sizing cases, reviewed JSON/CSV/Markdown and warmed-page fresh-worker offline inference passed. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261112-17/README.md) and [observed validation](20261112-17/VALIDATION.md).

Lumen Ledger public release, byte-matched runtime assets, both real-AI fixtures, full public workflow suite and preserved 618-entry working-tree gallery passed on the first Pages deployment.


## Expiry Relay — 20261112-18

Real local MiniLM reconciles supply-lot notes before mandatory product/count/expiry review and shared-capacity expiry rescue scheduling after protecting daily demand. Eight tiny fixture links matched; unrelated text still needs holds. Print stock rescued all 3 otherwise-expiring packs; ceramics rescued 2 of 3 and explicitly missed its zero-loss goal. These are supplied-demand scenarios, not measured savings or stock-safety certification. 2,500 independent pack-oracle cases, 200 exhaustive small picking optimizations plus 2,000 independent rescue cases and 200 exhaustive shared-capacity rescue optima, reviewed JSON/CSV/Markdown and warmed-page offline fresh-worker inference passed. Reuses immutable WASM from `20261107-2`; preserve its asset. See [workflow/privacy](20261112-18/README.md) and [observed checks](20261112-18/VALIDATION.md).

Expiry Relay public release, byte-matched app/worker/runtime assets, both real-AI rescue fixtures, full public workflow suite and preserved 619-entry working-tree gallery passed on the first Pages deployment.


## Signal Loom — 20261112-19

Real local MiniLM stream inference reconciles rough service measurements before mandatory identity/value/sequence review. Frozen-reference individuals/MR and same-side run checks complement a spec-only baseline; complete JSON/CSV/Markdown preserves every observation and holds. Two tiny fixtures matched 16/16 intended links and exposed two chart-signalled observations each versus zero spec violations. Nearest similarity cannot reject unknown processes; human review and valid stable baselines remain essential. 1,200 independent formula-oracle cases, current reviewed artifacts, offline fresh-worker inference and defensive production-browser checks passed. Offline scope is an already-open warmed page only; physical phone and non-Chrome inference untested. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261112-19/README.md), [observed validation](20261112-19/VALIDATION.md) and [publication status](20261112-19/publication-status.json).


## Decibel Quilt — 20261112-21

Real local MiniLM inference reconciles rough sound-log notes before human session/duration/level review. Exact-minute coverage guards energetic Leq and time/energy contribution summaries, with an arithmetic-mean comparison and complete JSON/CSV/Markdown exports. Both tiny fixtures matched 8/8 links; unrelated text still maps to a nearest profile and must be held. Not a sound meter, exposure assessment or compliance certificate. Offline fresh-worker inference tested only inside an already-open warmed page. Reuses immutable shared WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261112-21/README.md) and [observed checks](20261112-21/VALIDATION.md).


## Cash Estuary — 20261112-22

Real local MiniLM reconciles operating-balance notes before mandatory role/period/amount review and deterministic cash-conversion and target-funding scenarios. Twelve tiny fixture links matched; unrelated text still needs holds. Modeled release was 33,000 versus an inventory-only 18,000 currency units, and 25,000 versus zero; supplied assumptions, not measured recovery. 3,000 independent BigInt rational cases, reviewed JSON/CSV/Markdown and warmed-page fresh-worker offline inference passed. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261112-22/README.md) and [observed checks](20261112-22/VALIDATION.md).


## Shift Prism — 20261112-23

Real local MiniLM reconciles informal shift equipment notes before mandatory timing/count review and deterministic OEE loss-minute worksheets. Eight tiny intended links matched; unrelated text still mislinked and needs holds. Pooled OEE is compared with unweighted shift means, not claimed productivity savings. 3,000 BigInt-seconds oracle cases, complete reviewed JSON/CSV/Markdown and fresh-worker offline inference passed. Offline scope is an already-open warmed page only. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261112-23/README.md) and [observed checks](20261112-23/VALIDATION.md).


## Counter Folio — 20261112-24

Real local MiniLM meter identity inference assists mandatory human review of cumulative readings and explicit single rollovers. Both tiny fixtures matched 12/12 intended links; interval arithmetic recovered 71 m³ versus naive −929 and 88 kWh versus naive −912, without pooling unlike units. Resets/hidden wraps cannot be inferred; unrelated text still needs holding. 1,000 independent arithmetic cases, complete JSON/CSV/Markdown artifacts, max batches, defensive checks and fresh-worker offline inference passed. Offline scope is an already-open warmed page only. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261112-24/README.md) and [observed checks](20261112-24/VALIDATION.md).


## Flow Window — 20261113-1

Real local MiniLM matches informal queue observations before mandatory stream/window/count review and deterministic Little’s-law pooling. Eight tiny intended links matched; unrelated text still needs holds. Pooled lead estimates are compared with unweighted period ratios, not measured wait or time savings. 1,500 independent BigInt ratio-oracle cases, reviewed JSON/CSV/Markdown and fresh-worker offline inference passed. Offline scope is an already-open warmed page only. Stable flow and genuine time-average WIP must be verified externally. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261113-1/README.md) and [observed checks](20261113-1/VALIDATION.md).

Flow Window public release, byte-matched app/worker/runtime assets, both real-AI fixtures, full public workflow suite and preserved 626-entry working-tree gallery passed on the corrected Pages deployment.


## Sample Signal — 20261113-2

Real local MiniLM matches informal inspection notes before mandatory product/count review and deterministic pooled defect proportions with Wilson 95% intervals. Eight tiny intended links matched; unrelated text still needs holds. Unequal-lot baselines, 3,000 independent score-equation cases, complete reviewed JSON/CSV/Markdown artifacts and warmed-page fresh-worker offline inference passed. Sampling assumptions remain external; not lot certification. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-2/README.md) and [observed checks](20261113-2/VALIDATION.md).

Sample Signal public release, byte-matched runtime assets, both real-AI fixtures, full public workflow suite and preserved 627-entry working-tree gallery passed on the first Pages deployment.


## Column Harbor — 20261113-3

Real local MiniLM suggests CSV column-to-schema mappings before explicit review/omission and editable cell validation. Target CSV blocks holds, duplicate targets, missing required fields and invalid cells; a lossless JSON audit preserves every original row/column. Eight intended fixture links matched, but irrelevant columns still require human omission. 700 multiline CSV conservation cases, independent artifact parsing, 100-row batches, fresh-worker offline inference and defensive checks passed locally. Offline scope is an already-open warmed page only. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-3/README.md) and [observed checks](20261113-3/VALIDATION.md).


## Closure Horizon — 20261113-4

Real local MiniLM suggests workstream and completed/still-open labels before mandatory human review and deterministic Kaplan–Meier completion worksheets. The tiny fixtures matched 16/16 workstreams but only 12/16 outcomes; corrections or holds are essential. Three thousand independent rational risk-set cases, complete reviewed artifacts and warmed-page fresh-worker offline inference passed. No forecast or measured performance improvement is claimed. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-4/README.md) and [observed validation](20261113-4/VALIDATION.md).


## Renewal Beacon — 20261113-5

Local MiniLM classifies contract renewal clauses before mandatory policy/date/notice review and deterministic calendar-day preparation worksheets. Six of eight tiny fixture labels matched; fixed/opt-in wording sometimes misclassified as automatic renewal. Each reviewed fixture exposes two earlier notices and one already-past notice before term end versus term-end-only reminders. 3,000 independent calendar cases, lossless reviewed audit, independently parsed CSV/ICS, warmed-page offline fresh-worker inference and defensive checks passed locally. No legal deadline certification or notices sent. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261113-5/README.md) and [observed checks](20261113-5/VALIDATION.md).


## Component Tide — 20261113-6

Real local MiniLM matches informal kit requests before mandatory identity/quantity review and parent-first multi-level component netting. Eight tiny fixture links matched; unrelated text still needs holds. Finished and shared assembly stock reduces modeled leaf requirements versus leaf-stock-only explosion, with explicit exceeded caps. 2,000 independent BigInt DAG cases, reviewed artifacts and warmed-page fresh-worker offline inference passed locally. Not live inventory, purchasing or a lead-time plan. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261113-6/README.md) and [observed validation](20261113-6/VALIDATION.md).

Component Tide public release, byte-matched app/worker/runtime assets, both real-AI fixtures, full public workflow suite and preserved 631-entry working-tree gallery passed on the first Pages deployment.


## Quality Ledger — 20261113-7

Real local MiniLM classifies quality-cost activity notes before mandatory category/amount review and exact-cent prevention/appraisal/internal/external-failure worksheets. Seven of eight tiny intended labels matched; pre-shipment testing required correction and unrelated spending still needs holds. Supplied reduction/investment scenarios are not measured savings or accounting certification. 3,000 independent BigInt cases, complete reviewed JSON/CSV/Markdown and warmed-page fresh-worker offline inference passed locally. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-7/README.md) and [observed validation](20261113-7/VALIDATION.md).

Quality Ledger public release, byte-matched app/worker/runtime assets, both real-AI fixtures, complete public workflow suite and preserved 632-entry working-tree gallery passed on the first Pages deployment.


## Role Accord — 20261113-8

Real local MiniLM classifies informal handoff notes before mandatory person/deliverable/role review and deterministic RACI coverage checks. Seven of eight tiny intended roles matched; a contributor note required correction and unrelated notes still need holds. Exact-one accountability, responsible-person coverage and repeated-assignment warnings preserve missing deliverables; complete JSON/CSV/Markdown includes a task-linked follow-up checklist. Three thousand independent coverage-oracle cases, reviewed artifacts, defensive checks and warmed-page fresh-worker offline inference passed locally. No authority, consent, invitations or assignments are created. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-8/README.md) and [observed checks](20261113-8/VALIDATION.md).


## Version Harbor — 20261113-9

Real local MiniLM classifies change-note compatibility before mandatory maintainer review and deterministic stable-version worksheets. Eight intended labels matched in two tuned synthetic examples; earlier prototype wording missed a breaking change and unrelated text still requires holds. Any hold blocks the final candidate. Patch-only comparisons, 12,000 independent version cases, complete reviewed JSON/CSV/Markdown and warmed-page fresh-worker offline inference passed locally. No compatibility certification, tags or releases. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-9/README.md) and [observed checks](20261113-9/VALIDATION.md).


## Terms Orchard — 20261113-10

Real local MiniLM supplier-profile retrieval supports mandatory human-reviewed early-payment discount planning. Deterministic cent-rounded discounts and simple advance-financing costs compare eligible payments with a pay-at-net baseline. Both tiny synthetic batches matched 8/8 profiles; unrelated text still received a match and required a hold. Full 40-invoice exports, 2,400 independent BigInt financial cases, defensive browser checks and fresh-worker offline inference passed locally. Offline scope is only an already-open warmed page. No supplier authentication, calendar scheduling or payment execution. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-10/README.md) and [observed validation](20261113-10/VALIDATION.md).


## Restore Harbor — 20261113-11

Real local MiniLM links informal backup notes to system profiles before mandatory evidence review and deterministic RPO/RTO gap checks. Eight tiny intended links matched; unrelated text still needs holds. Successful-job coverage versus tested target-meeting copies was 4 vs 1 and 3 vs 2 systems in the fixtures. Three thousand independent coverage cases, complete reviewed artifacts, defensive tests and warmed-page fresh-worker offline inference passed locally. No resilience certification, account access or restore execution. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-11/README.md) and [observed checks](20261113-11/VALIDATION.md).


## Asset Almanac — 20261113-12

Real local MiniLM links informal asset-register notes to supplied accounting policies before mandatory review and exact-cent annual SL/DDB book-value worksheets. Eight tiny intended links matched; unrelated text still needs holding. All-SL comparisons show timing, not savings. Four thousand independent BigInt cases, complete reviewed artifacts, defensive browser checks and warmed-page fresh-worker offline inference passed locally. No tax certification or ledger writes. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-12/README.md) and [observed checks](20261113-12/VALIDATION.md).

Asset Almanac public release, byte-matched worker/runtime assets, both real-AI fixtures, full public workflow suite and preserved 637-entry working-tree gallery passed on the first Pages deployment.

## Time Folio — 20261113-13

Real local MiniLM work-category proposals with mandatory billability review, exact-minute reconciliation and daily-versus-entry contract rounding. All records survive reviewed JSON/CSV/Markdown; no uploads or invoices sent. Reuses the immutable shared WASM from 20261107-2. See [workflow](20261113-13/README.md) and [observed checks](20261113-13/VALIDATION.md).

Time Folio public release: both real-AI fixtures and complete public workflow suite, byte-matched worker/runtime assets, warmed-page offline inference and preserved 638-entry gallery verified. Harder paraphrases matched 3/4; human category/billability review remains essential.


## Paydown Harbor — 20261113-14

Real local MiniLM account retrieval supports mandatory review of debt notes before fixed-budget monthly repayment simulation. Compare highest-APR-first with smallest-balance-first under explicit fixed-rate/minimum assumptions; held or duplicate links block plans. Complete JSON/CSV/Markdown preserves every original/review and monthly ledgers. Eight simple fixture links and four paraphrases matched; 600 independent BigInt scenarios checked exact arithmetic. Not lender quotes or payment advice. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261113-14/README.md) and [observed checks](20261113-14/VALIDATION.md).

Paydown Harbor public release: byte-matched worker/runtime assets, both real-AI fixtures, all ten public workflow checks, full-ledger reimport, warmed-page offline inference and preserved 639-entry gallery verified on the first Pages deployment.

## Dry Matter — 20261113-15

Real local MiniLM material inference assists mandatory intake review before exact-ratio wet-basis moisture mass accounting. Eight simple fixture links matched; unrelated text still needs holds. Dry solids and standardized equivalents compare with gross received mass, not measured savings or processing instructions. 3,003 independent Fraction-oracle cases, current reviewed JSON/CSV/Markdown, maximum batches, defensive checks and warmed-page fresh-worker offline inference passed. Offline scope is an already-open warmed page only. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-15/README.md) and [observed checks](20261113-15/VALIDATION.md).

Dry Matter public release: byte-matched app/worker/runtime assets, both real-AI fixtures, all eight public workflow checks, warmed-page offline inference and preserved 640-entry working-tree gallery verified on the first Pages deployment.


## Gauge Harbor — 20261113-16

Real local MiniLM reconciles rough inspection notes with drawing features before mandatory identity/reading/uncertainty review. Deterministic closed-interval checks expose nominal-inside boundary cases; complete JSON/CSV/Markdown preserves all records and follow-ups. Eight tiny fixture links matched; unrelated text still needs holds. 4,009 independent BigInt cases, reviewed artifacts, defensive checks and warmed-page fresh-worker offline inference passed locally. Not conformity certification or lot release. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-16/README.md) and [observed checks](20261113-16/VALIDATION.md).

Gauge Harbor public release: byte-matched app/worker/runtime assets, both real-AI fixtures, all eight public workflow checks, warmed-page offline inference and preserved 641-entry working-tree gallery verified on the final phone-layout revision.


## Dough Atlas — 20261113-17

Real local MiniLM ingredient identity proposals support mandatory review before exact-mass baker-hydration scaling. Eight tiny intended links matched; unrelated text still needs holds. Whole-gram formulas account for milk/egg/butter water and expose rounding deviation versus an added-water-only baseline. Three thousand independent Fraction-oracle cases, complete reviewed artifacts, defensive browser checks and warmed-page fresh-worker offline inference passed locally. Not ingredient authentication or baking-performance certification. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-17/README.md) and [observed validation](20261113-17/VALIDATION.md).

Dough Atlas public release: both real-AI fixtures, all nine public workflow groups, byte-matched app/worker/runtime assets, warmed-page fresh-worker offline inference and the preserved 642-entry gallery verified on the first Pages deployment.


## Thermal Ledger — 20261113-18

Real local MiniLM matches rough envelope notes before mandatory dimension/unit/coefficient review and deterministic surface-plus-linear-bridge transmission worksheets. Eight tiny intended links matched; unrelated text still needs holds. Scenario degree-day estimates are not measured savings, heating-system sizing or compliance. Three thousand independent Fraction cases, complete reviewed artifacts, defensive browser checks and warmed-page fresh-worker offline inference passed locally. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-18/README.md) and [observed checks](20261113-18/VALIDATION.md).

Thermal Ledger public release: byte-matched app/worker/runtime assets, both real-AI fixtures, all nine public workflow groups, warmed-page offline fresh-worker inference and the preserved 643-entry gallery verified on the first Pages deployment.


## Reliability Grove — 20261113-19

Real local MiniLM matches rough service-component evidence before mandatory stage/probability review and deterministic budgeted series-parallel redundancy worksheets. Eight tiny intended links matched; unrelated text still needs holds. 1,000 independent Fraction exhaustive-allocation cases, complete reviewed artifacts, defensive browser checks and warmed-page fresh-worker offline inference passed locally. Scenario probabilities are not measured reliability or certification; common-cause failures are excluded. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-19/README.md) and [observed checks](20261113-19/VALIDATION.md).

Reliability Grove public release: both real-AI fixtures, all nine public workflow groups, byte-matched app/worker/runtime assets, warmed-page fresh-worker offline inference and the preserved 644-entry gallery verified on the first Pages deployment.


## Peak Folio — 20261113-20

Real local MiniLM reconciles rough equipment notes before mandatory identity/power/timing review and deterministic quarter-hour coincident-demand worksheets. Eight tiny intended links matched; unrelated text still needs holds. Three thousand independent Fraction cases, complete reviewed artifacts, defensive checks and warmed-page fresh-worker offline inference passed locally. Scenario tariff comparisons are not measured savings, bills or electrical design. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-20/README.md) and [observed checks](20261113-20/VALIDATION.md).

Peak Folio public release: both real-AI fixtures, all nine public workflow groups, byte-matched app/worker/runtime assets, warmed-page fresh-worker offline inference and the preserved 645-entry gallery verified on the first Pages deployment.


## Pack Ledger — 20261113-21

Real local MiniLM material retrieval supports mandatory packaging-component evidence review before deterministic mass-weighted recycled-content and supplied-fee ledgers. Eight tiny fixture links matched; unrelated text still needs holds. Three thousand independent Fraction cases, actual reviewed artifacts, defensive checks and warmed-page fresh-worker offline inference passed locally. Scenario rates are not regulations, measured savings or filings. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-21/README.md) and [observed checks](20261113-21/VALIDATION.md).

Pack Ledger public release: both real-AI fixtures, all nine public workflow groups, reviewed artifact round-trips, byte-matched app/worker/runtime assets, warmed-page fresh-worker offline inference and the preserved 646-entry gallery verified on the first Pages deployment.


## Service Compass — 20261113-22

Local MiniLM topic-to-dimension inference assists mandatory review of paired importance/performance survey ratings. Descriptive quadrants, weighted target shortfalls and performance-only baselines retain all source ratings, holds and owner follow-ups in JSON/CSV/Markdown. Eight simple known-answer links matched; 500 independent Fraction checks and fresh-worker offline inference passed. Nearest matching is not truth, ordinal means are planning assumptions and no representative/causal claims are made. Offline scope is an already-open warmed page only. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-22/README.md) and [observed validation](20261113-22/VALIDATION.md).

Service Compass corrected public release, byte-matched runtime assets, both real-AI fixtures, the full public workflow suite and preserved 647-entry gallery passed. See the app validation reports for evidence and untested-device limits.


## Stream Steward — 20261113-23

Local MiniLM material matching supports recurring waste-bin audits. Review every identity, measured mass and supplied acceptance rule; compare count-only versus mass contamination and export a minimum-whole-record-touch re-sort worksheet without disposal actions. Two synthetic batches matched 8/8 identities; 400 independent exhaustive-subset cases confirmed minimum-touch plans. Similarity cannot establish actual composition, cleanliness or local collection acceptance. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow](20261113-23/README.md) and [observed validation](20261113-23/VALIDATION.md).


## Folio Press — 20261113-24

Real local MiniLM section proposals support mandatory document-placement/page-count review before recto-aware booklet pagination and saddle-stitch sheet pairing. Both tiny synthetic batches matched 8/8 intended sections. Three thousand independent pagination cases in two orders, complete reviewed JSON/CSV/Markdown/sheet artifacts, defensive browser checks and warmed-page fresh-worker offline inference passed locally. Not PDF processing or print-production certification; fold a paper dummy and verify printer orientation. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261113-24/README.md) and [observed validation](20261113-24/VALIDATION.md).

Folio Press public release: byte-matched app/worker/runtime assets, both real-AI fixtures, all nine public workflow groups, reviewed artifact round-trips, warmed-page fresh-worker offline inference and the preserved 649-entry gallery verified on the first Pages deployment.


## Changeover Grove — 20261114-1

Real local MiniLM job-family proposals support mandatory process/timing review before exact deadline-constrained asymmetric changeover sequencing. Both tiny synthetic batches matched 8/8 intended links; unrelated text still needs holding. Six hundred independent exhaustive permutation cases, complete reviewed artifacts, defensive browser checks and warmed-page fresh-worker offline inference passed locally. Scenario comparisons are not measured savings or live dispatch. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261114-1/README.md) and [observed validation](20261114-1/VALIDATION.md).

Changeover Grove public release: byte-matched app/worker/runtime assets, both real-AI fixtures, all nine public workflow groups, warmed-page fresh-worker offline inference and the preserved 650-entry working-tree gallery verified on the first Pages deployment.


## Funnel Prism — 20261114-2

Real local MiniLM reconciles rough notes to ordered journey stages before mandatory human count review. Exact handoff checks and backwards integer sizing produce minimum-intake target worksheets, compared with a first-stage-only baseline. Ten tiny fixture links and six reworded notes matched; 1,200 independent sizing-oracle cases passed. Complete JSON/CSV/Markdown preserves every held observation and original. Offline fresh-worker inference is tested only inside an already-open warmed page. Reuses immutable shared WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261114-2/README.md) and [observed validation](20261114-2/VALIDATION.md).

Funnel Prism public release, byte-matched runtime assets, both real-AI fixtures, the full public workflow suite and preserved 651-entry gallery passed on the first Pages deployment.


## Strata Orchard — 20261114-3

Local MiniLM reconciles roster-segment meanings before mandatory stratum/count review. Exact convex integer sample allocation uses supplied within-stratum SDs and population caps, comparing assumed mean variance with equal allocation. Both tiny fixtures matched 8/8 links; 1,125 exhaustive optimization cases and reviewed artifact conservation passed. No respondent selection or representativeness guarantee. Fresh-worker offline inference is limited to an already-open warmed page. Reuses immutable shared WASM from `20261107-2`. See [workflow](20261114-3/README.md) and [validation](20261114-3/VALIDATION.md).

Strata Orchard public release: Pages built commit `280e7e79a6ef0c3d97654e17a975ad31161179f6`; byte-matched assets and the complete public real-AI workflow suite passed, with all 652 gallery entries preserved.


## Decision Estuary — 20261114-4

Real local MiniLM reconciles both identities in pairwise consultation logs before mandatory option/count review. Winning-votes strongest-path tiers expose cycles beyond direct-win baselines, retaining missing/tied/repeated pairs and complete JSON/CSV/Markdown reviews. Two tiny fixtures matched 16/16 intended identities; 650 independent simple-path oracle cases passed. Counts are preference observations, not unique respondents, and incomplete/incomparable logs can mislead. Offline fresh-worker inference is limited to an already-open warmed page. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261114-4/README.md) and [observed validation](20261114-4/VALIDATION.md).

Decision Estuary public release: Pages built commit `04fc63f9bebc4271bea4c6c9ae3b9f236389227a`; byte-matched public app/worker/runtime, both real-AI fixtures, all nine public workflow groups and preserved 653-entry gallery passed on the first deployment.


## Price Lens — 20261114-5

Local MiniLM reconciles repeated sales-log product descriptions before mandatory identity, price, units and exposure review. Deterministic log-demand fits compare bounded contribution-maximizing price grids against current-price baselines; no causal or realized-profit claims. Both six-row synthetic fixtures matched expected products, known curves and independent grid objectives. Complete JSON/CSV/Markdown preserves originals and held rows; fresh-worker offline inference is tested only on an already-open warmed page. Reuses the immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261114-5/README.md) and [observed validation](20261114-5/VALIDATION.md).

Price Lens public release passed on the first Pages workflow: matching built gh-pages head, byte-matched app/runtime assets, both real-AI fixtures, full reviewed workflow/export/offline suite and preserved 654-entry gallery.


## Trace Current — 20261114-6

Local real MiniLM event-to-activity retrieval assists reviewed process trace reconstruction. Explicit prerequisite checks, repeated-step cues and inter-event gaps expose ordering evidence beyond count-only logs. Tiny repair/publishing fixtures matched 14/14 links, both expected prerequisite exceptions and long gaps; unrelated text still gets a nearest candidate and requires human hold. Complete JSON/CSV/Markdown preserves every original/reviewed event. Fresh-worker offline inference tested only in an already-open warmed page. Reuses immutable shared WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261114-6/README.md) and [observed validation](20261114-6/VALIDATION.md).

Trace Current public release: Pages built the matching final gh-pages head; byte-matched public app/worker/runtime/WASM, both real-AI fixtures, the full review/export/offline browser suite and preserved 655-entry current gallery passed. Physical phones and offline navigation remain unverified.


## Tax Weave — 20261114-7

Real local MiniLM category inference supports mandatory purchase/rate/basis review before exact-cent inclusive/exclusive tax worksheets. Both tiny synthetic batches matched 8/8 intended categories; 8,004 independent rational-arithmetic cases and complete reviewed artifact checks passed. Hypothetical supplied rates are not tax rules, eligibility or filing advice. Fresh-worker offline inference is limited to an already-open warmed page. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261114-7/README.md) and [observed checks](20261114-7/VALIDATION.md).

Tax Weave public release: Pages built matching gh-pages head `00a33cd42d7d2e1fb47523a1e36cc08cd28ce30b`; byte-matched app/worker/runtime assets, both real-AI fixtures, all nine public workflow groups, warmed-page fresh-worker offline inference and preserved 656-entry gallery passed.


## Contingency Lens — 20261114-8

Real local MiniLM scenario matching assists recurring stock, venue and production decision worksheets. Review supplied likelihood weights, options and signed payoffs; incomplete/duplicate matrices block recommendations. Exact weighted expected value, minimax regret and a perfect-information ceiling expose different choices beyond an optimistic baseline. Both tiny fixtures matched 8/8 scenario links; 1,500 independent rational-arithmetic cases, reviewed artifact conservation and warmed-page fresh-worker offline inference passed locally. No forecasts or real-study valuation. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261114-8/README.md) and [observed validation](20261114-8/VALIDATION.md).

Contingency Lens public release: matching Pages gh-pages `86efbfac06b7c90700e6eb5f35a6bee844242632`, byte-matched public assets, both real-AI fixtures, all nine workflow groups, reviewed artifact round-trips, warmed-page offline fresh-worker inference and preserved 657-entry gallery passed.


## Variance Loom — 20261114-9

Real local MiniLM reconciles material consumption notes before mandatory unit/allowance/cost review. Exact-cent price, usage and activity-volume bridges expose offsets beyond a net-budget baseline. Both synthetic batches matched 8/8 links; 2,000 independent Fraction cases and reviewed artifact conservation passed. No unit conversion, cause inference or ledger posting. Offline fresh-worker inference is limited to an already-open warmed page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261114-9/README.md) and [observed validation](20261114-9/VALIDATION.md).

Variance Loom public release: matching Pages gh-pages `a4d348bc27f2398f7a71bec8a79fdb4d9b9b7dc4`, byte-matched public assets, both real-AI fixtures, all nine reviewed workflow groups, artifact round-trips, warmed-page offline inference and preserved 658-entry gallery passed on the first deployment.

## Tender Prism — 20261114-10

Local MiniLM criterion inference reconciles vendor evidence into reviewed weighted scorecards. Fixed performance anchors, complete-pair guards, equal-weight baseline and omit-one sensitivity make priorities explicit. Six expected links in each of two synthetic workflows matched; nearest-neighbor retrieval still requires human review. See [workflow](20261114-10/README.md) and [validation](20261114-10/VALIDATION.md). Preserves the shared immutable WASM at `20261107-2`.


## Forecast Folio — 20261114-11

Real local MiniLM event inference assists reviewed probability-forecast retrospectives. A mandatory common-event panel prevents unequal-subset comparisons; Brier scores and fixed-bin calibration worksheets expose misses beyond a constant 50/50 baseline. Both synthetic workflows matched 16/16 notes; 2,000 independent rational scoring cases, complete reviewed artifacts and warmed-page offline fresh-worker inference passed. No generated probabilities or verified outcomes. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow](20261114-11/README.md) and [observed validation](20261114-11/VALIDATION.md).

Forecast Folio public release: matching Pages gh-pages `d194029d2db3892572acbe02d0e1f01849d38db4`, byte-matched app/worker/runtime, both real-AI fixtures, all eight public workflow groups, reviewed artifact round-trips, warmed-page offline inference and preserved 660-card gallery passed.


## Capacity Commons — 20261114-12

Real local MiniLM resource inference assists mandatory shared-usage/team/unit review. Exact factorial-weighted Shapley tier-cost allocations compare equal splits and stand-alone costs, flag non-subadditive pooling and retain every held note in complete JSON/CSV/Markdown. Both tiny fixtures matched 12/12 links; 1,000 independent permutation/Fraction cases and actual maximum 6-team/6-pool/32-record inference passed. Offline fresh-worker inference is limited to an already-open warmed page. Not an invoice or fairness guarantee. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow](20261114-12/README.md) and [observed validation](20261114-12/VALIDATION.md).

Capacity Commons public release: matching Pages gh-pages `6a6e40f747cbb7fec41819dca5162e807837ec1c`, byte-matched public assets, both real-AI fixtures, all eight public workflow groups, reviewed artifact round-trips, warmed-page offline inference and preserved 661-card working-tree gallery passed on the first deployment.


## Agreement Grove — 20261114-13

Real local MiniLM feature inference supports reviewed paired-method comparisons. Verify sample independence, same-unit readings and tolerance before inspecting bias ±1.96 sample SD against an average-bias-only baseline. Both tiny fixtures matched 12/12 notes; 1,500 independent arithmetic cases, maximum 6-feature/32-pair inference, complete reviewed artifacts and warmed-page offline fresh-worker inference passed. No calibration, clinical interpretation or certification. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow](20261114-13/README.md) and [observed validation](20261114-13/VALIDATION.md).

Agreement Grove public release: matching Pages gh-pages `029db140da4295ea64c9ea466ba684b86842bb48` built successfully after one documented status-reconciliation rebuild. Byte-matched public app/worker/runtime, both real-AI fixtures, all eight workflow groups, reviewed artifact round-trips, warmed-page offline inference and preserved 662-card gallery passed.

## Drift Orchard — 20261114-14

Local MiniLM inference reconciles rough process readings before mandatory sequence/unit/specification review. Exploratory individuals/moving-range checks expose a seeded spike missed by specification-only checks; complete JSON/CSV/Markdown retains holds and originals. Twelve small-fixture identities matched, 32-row conservation/export round-trips and warmed-page offline fresh-worker inference passed. Same-series limits and tiny samples are not validated stability/capability evidence. Shared immutable WASM from `20261107-2` must remain available. See [workflow/privacy](20261114-14/README.md) and [observed validation](20261114-14/VALIDATION.md).


## Budget Beacon — 20261114-15

Local real MiniLM service reconciliation plus mandatory window/count review supports request-weighted SLO error budgets and a window-average baseline. Both synthetic fixtures matched 12/12 links; negation still mislinked and requires human correction. Complete JSON/CSV/Markdown preserves held reports; gaps mark partial coverage. Offline fresh-worker inference tested only in an already-open warmed page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261114-15/README.md) and [observed validation](20261114-15/VALIDATION.md).

Budget Beacon public release verified on the first combined deployment: matching Pages commit built, public assets byte-matched, real-AI workflow and offline fresh-worker checks passed, and all 663 prior gallery entries preserved.


## Alert Orchard — 20261114-16

Real local MiniLM rule inference assists mandatory detector-tally review. Precision/recall and explicit base-rate workload scenarios expose false-alert burden beyond accuracy and an all-negative baseline. Both synthetic batches matched 16/16 links; 2,000 independent arithmetic cases, maximum-batch conservation, reviewed artifact round-trips and warmed-page offline fresh-worker inference passed. No verified labels or forecast guarantees. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261114-16/README.md) and [observed validation](20261114-16/VALIDATION.md).

Alert Orchard public release: matching Pages gh-pages `b8885aa67264994c1b26771ca6c1c3f31794c9f7` built on the first deployment; byte-matched public assets, both real-AI fixtures, all eight workflow groups, reviewed artifact round-trips, warmed-page offline inference and all 664 prior gallery entries preserved.


## Audit Estuary — 20261114-17

Real local MiniLM category inference reconciles two inspection logs before mandatory pass/shared-ID review. Duplicate/conflicting detections block applying; A-only/B-only lists support cross-checks and exploratory Chapman totals expose assumptions beyond the observed union. Both tiny synthetic fixtures matched 16/16 links; 3,311 independent Fraction cases, reviewed artifact conservation and warmed-page fresh-worker offline inference passed locally. Independence, equal detectability and correct IDs are unverified user assumptions—not audit certification. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261114-17/README.md) and [observed validation](20261114-17/VALIDATION.md).

Audit Estuary public release: matching Pages `0f780ca29e7c44110e10328e3885b74ea60fef2d` built on the first deployment; byte-matched public app/worker/runtime/WASM, both real-AI fixtures, all eight workflow groups, reviewed artifacts, warmed-page offline inference and all 665 prior gallery entries passed.


## Crossed Bench — 20261114-18

Real local MiniLM feature inference reconciles repeated measurements before mandatory part/operator/trial/unit review. Balanced crossed ANOVA retains interaction, flags incomplete cells and compares full measurement SD against repeat-only noise. Both synthetic workflows matched 32/32 links; 1,200 independent Fraction cases, reviewed artifact conservation and warmed-page fresh-worker offline inference passed. No certification, capability or causal operator claims. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261114-18/README.md) and [observed validation](20261114-18/VALIDATION.md).

Crossed Bench public release: first combined Pages deployment built matching gh-pages `9209cda1bdd175baa85c96fdc61f6f277c77b862`; byte-matched public app/runtime, both real-AI fixtures, all eight workflow groups, reviewed artifacts, warmed-page offline inference and all 666 prior working-tree gallery entries passed.


## Stack Harbor — 20261114-19

Real local MiniLM reconciles rough contribution notes to supplied signed tolerance chains. Mandatory review feeds worst-case bounds and explicitly conditional RSS, compared with nominal-only target placement; complete JSON/CSV/Markdown retains held rows and originals. Both tiny synthetic fixtures matched all 12 links; 500 independently enumerated corner cases matched bounds. No unit conversion, correlation handling or certification. Fresh-worker offline inference tested only on an already-open warmed page. Reuses immutable shared WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261114-19/README.md) and [observed validation](20261114-19/VALIDATION.md).

Stack Harbor public release: first combined Pages deployment built matching gh-pages `7044095fcd425f357d4d36cffab7908e3a98452e`; byte-matched public runtime assets, both real-AI fixtures, all eight workflow groups, reviewed artifacts, warmed-page offline inference and all 667 prior working-tree gallery entries passed. Negation challenge mislinked and is documented.

## Mix Lantern — 20261114-20

Real local MiniLM segment inference assists reviewed A/B cohort comparisons at a user-supplied target audience mix. Pooled baselines, common-weight rates, segment contributions and mix break-even stress tests expose composition effects without claiming causality or forecasts. Both initial tiny fixtures matched 8/8 expected links; 2,000 independent Fraction cases and reviewed artifact checks passed. Fresh-worker offline inference is limited to an already-open warmed page. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261114-20/README.md) and [observed validation](20261114-20/VALIDATION.md).

Mix Lantern public release: first combined Pages deployment built matching gh-pages `8eebc7659b8005858344e0f5c228c49e3ccb0853`; byte-matched public app/runtime/WASM, both real-AI fixtures, all nine workflow groups, target-mix crossover, reviewed artifacts, warmed-page offline inference and all 668 prior working-tree gallery entries passed.


## Uptime Orchard — 20261114-21

Real local MiniLM maps rough component inventories into mandatory human-reviewed functional groups. Supplied independent availability assumptions feed heterogeneous k-of-n recurrence, series-system comparison against all-required baseline and one-at-a-time perfect-component sensitivity. All nine simple fixture links matched; a negation challenge misclassified and needs review. 462 independent enumeration cases, lossless reviewed artifacts, defensive checks and warmed-page fresh-worker offline inference passed. No common-cause/standby modeling, SLA guarantee or equipment actions. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261114-21/README.md) and [observed validation](20261114-21/VALIDATION.md).

Uptime Orchard public release: first combined Pages deployment built matching gh-pages `c94f150d9e1b248fd77f32b745a66425f1c384c1`; all public app/worker/runtime/WASM bytes matched, both real-AI fixtures and eight workflow groups passed, including fresh-worker offline inference and reopened reviewed artifacts. All 669 prior working-tree gallery entries were preserved. Negation challenge failed as documented; human review remains required.


## Stock Saffron — 20261114-22

Real local MiniLM reconciles full-period demand scenarios before mandatory product/quantity/weight review. Bounded single-period shortage/overage loss optimization compares a rounded-mean baseline; complete JSON/CSV/Markdown preserves all originals and holds. Both tiny fixtures matched 8/8 links; 2,500 exhaustive quantity checks and reviewed artifact round-trips passed. No demand forecasting or purchases. Offline fresh-worker inference is limited to an already-open warmed page. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261114-22/README.md) and [observed checks](20261114-22/VALIDATION.md).


## Window Weave — 20261114-23

Real local MiniLM service inference assists appointment waitlist review. Verify availability, required minutes and priorities before exact count-first/priority-second matching against FIFO; complete JSON/CSV/Markdown retains every held/unplaced request and original. Both tiny synthetic batches matched 8/8 links; 2,000 independent exhaustive allocation cases, reviewed artifact round-trips and warmed-page fresh-worker offline inference passed locally. No bookings or messages. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261114-23/README.md) and [observed validation](20261114-23/VALIDATION.md).

Window Weave public release: first combined Pages deployment built matching gh-pages `c0cc05502eacc0d2377d3c8740cdc8cf3f6102db`; byte-matched public app/worker/runtime/WASM, both real-AI fixtures, all eight workflow groups, reviewed artifacts, warmed-page offline inference and all 671 prior working-tree gallery entries passed. No appointments were booked or messages sent.


## Hub Orchard — 20261114-24

Local MiniLM neighborhood reconciliation plus mandatory demand review supports radius-constrained candidate pickup-hub scoring. Both synthetic fixtures matched 8/8 zone links; independent 500-case distance checks, max-batch conservation, offline warmed-page fresh-worker inference and real exports passed. Not road routing, geocoding or site certification. See [workflow/privacy](20261114-24/README.md) and [observed validation](20261114-24/VALIDATION.md).

Hub Orchard public release: first combined Pages build `19861ca377d19ba7688025469a502f4ea8902839` built successfully; live byte-matched runtime/worker/WASM, both real-AI fixtures, full workflow/artifact checks and preserved 673-entry working-tree gallery passed. Source commit excludes unrelated pre-existing edits.


## Pilot Prior — 20261115-1

Real local MiniLM pilot inference reconciles binary trial-result notes before mandatory human review. Explicit Beta priors and supplied utilities support one-step sample-information values and paid-pilot/launch/skip scenario comparisons against raw-rate decisions. Not a sequential stopping policy, causal claim or automatic launch. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261115-1/README.md) and [observed validation](20261115-1/VALIDATION.md).

Pilot Prior public release: matching Pages `2304ca7b82db0ca37a3dc612592197fc8904b7e8` built on the first combined deployment; byte-matched public app/runtime/worker/WASM, both real-AI fixtures, seven workflow groups, prior/cost sensitivity, complete reviewed artifacts, warmed-page offline inference and all 673 prior working-tree gallery entries passed. Source commit excludes unrelated pre-existing edits.


## Evidence Loom — 20261115-2

Real local MiniLM outcome inference reconciles rough experiment summaries before mandatory signed-effect/SE/independence review. Inverse-variance common-effect synthesis, descriptive heterogeneity and leave-one-out sensitivity compare against unweighted means; complete JSON/CSV/Markdown retains every held/original row. Both tiny fixtures matched 8/8 links; 1,200 independent Fraction cases, reviewed artifact round-trips and warmed-page fresh-worker offline inference passed locally. Not random-effects, clinical or study-validity inference. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261115-2/README.md) and [observed validation](20261115-2/VALIDATION.md).

Evidence Loom public release: first combined Pages deployment built matching gh-pages `208e164e2a00237c581ee96f83886538c8c09b0e`; byte-matched public app/runtime/worker/WASM, both real-AI fixtures, all seven workflow groups, reviewed artifacts, warmed-page offline inference and all 674 earlier working-tree gallery entries passed. Source commit excludes unrelated pre-existing edits.


## Handoff Harbor — 20261115-3

Real local MiniLM endpoint inference reconciles recurring transition tallies before mandatory stage/count review. Absorbing-state calculations expose return loops beyond next-step closure rates; complete JSON/CSV/Markdown preserves all originals and holds. Both tiny synthetic batches matched 18/18 endpoints; 1,000 independent exact-arithmetic chains, reviewed artifact round-trips and warmed-page fresh-worker offline inference passed locally. No forecasts, causal effects or dispatch. Reuses immutable shared WASM from `20261107-2`; preserve it. See [workflow/privacy](20261115-3/README.md) and [observed validation](20261115-3/VALIDATION.md).

Combined-site size guard recovery: deploy-only byte-verified geometry runtime reuse for `20261025-7` and `20261025-8` now uses the preserved immutable WASM in `20261028-24`. Source builds and legacy JS filenames are retained; changed references are query-versioned. Both older apps passed actual browser worker/import/STL-export checks. Combined site is 999,506,265 bytes, below the existing 1 GB guard.

Handoff Harbor public release: first combined Pages deployment built matching gh-pages `a71ce0b1578b0fcecd10b2d2b5d14c54b6fc690b` and completed successfully; byte-matched public app/runtime/worker/WASM, both real-AI fixtures, six workflow groups, reviewed artifacts, warmed-page offline inference and all 675 earlier working-tree gallery entries passed. Two older geometry apps affected by byte-identical runtime reuse also passed public worker/import/export checks. Source commit excludes unrelated pre-existing edits.


## Lot Accord — 20261115-4

Real local MiniLM maps rough incoming-inspection notes to supplied procedures. Mandatory human review of lot/scenario assumptions and sample limits precedes finite-population acceptance-risk calculations, explicit goals and binomial baselines. Six simple semantic links matched; 187 independent arithmetic cases and complete reviewed JSON/CSV/Markdown exports passed. Unrelated text can still match and must be held. No quality certification or lot release. Offline inference verified only in an already-open warmed page. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261115-4/README.md) and [observed validation](20261115-4/VALIDATION.md).

Lot Accord deployment extends byte-verified, deploy-only geometry runtime reuse to `20261030-10`, preserving its source build and existing JavaScript URLs with query-versioned worker/shell references. The earlier `20261028-24` shared geometry asset remains required. All three rewritten legacy apps passed real geometry worker/import/STL checks; see [combined checks](20261115-4/VALIDATION.md).

Lot Accord public release: first Pages deployment `1d1d59b91528a04407c76b02971aca325a1a654c` reached built. Public byte-matched app/worker/runtime/WASM and 677-entry gallery, both real-AI fixtures, full reviewed workflow/export/offline checks and all three deduplicated legacy geometry users passed. Source commit preserves and excludes unrelated pre-existing edits.


## Interval Orchard — 20261115-5

Real local MiniLM reconciles rough maintenance notes to supplied lifetime profiles before mandatory human review. Deterministic Weibull age-replacement renewal calculations compare explicit feasible interval grids with current practice; complete JSON/CSV/Markdown preserves every held asset. Six simple synthetic links matched, 248 independent incomplete-gamma reference cases and six fixture grid optima passed. Nearest-profile matching is not identity or suitability verification. Offline scope is fresh-worker inference in an already-open warmed page only. See [workflow/privacy](20261115-5/README.md) and [observed validation](20261115-5/VALIDATION.md).

Root predeploy initially exceeded the conservative 1 GB budget; byte-identical geometry-runtime reuse now also covers 20261030-11 through -14, preserving source builds and legacy JS URLs. All seven affected real geometry workers, image imports and binary STL exports were retested. Combined site is 998,571,969 bytes; retain the guard and shared runtime hosts. New/public AI and runtime verification are recorded in the app publication reports.


## Circuit Cove — 20261115-6

Real local MiniLM reconciles rough offered-traffic notes to supplied finite channel pools before mandatory human review. Deterministic Erlang-B loss probabilities and capped integer search compare blocking targets against occupancy-only sizing; complete JSON/CSV/Markdown preserves held rows and originals. Eight simple fixture links matched, 1,504 independent exact Fraction cases and reviewed artifact round-trips passed. Not a waiting-queue staffing model, demand forecast or provisioning action. Offline scope is fresh-worker inference in an already-open warmed page only. Reuses immutable WASM from `20261107-2`; preserve that asset. See [workflow/privacy](20261115-6/README.md) and [observed validation](20261115-6/VALIDATION.md).

Circuit Cove public release: first combined Pages deployment `60e8cbe6e80814d286fbb9bb4a27dd0a990e77e4` built successfully; byte-matched public app/worker/runtime/WASM, both real-AI fixtures, all seven workflow groups, reviewed artifacts, warmed-page offline inference and the preserved 679-entry gallery passed. Source commit excludes unrelated pre-existing edits.
