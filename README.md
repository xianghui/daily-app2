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
