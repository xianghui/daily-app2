# Observed validation — Discovery Ledger

All inputs are synthetic. Build success is not counted as AI verification.

## Real inference and workflow

Production-bundle Chrome tests with GPU disabled loaded actual Q8 MiniLM via WASM CPU. No mock or deterministic fallback was used for successful workflow checks.

| Fixture | Known-answer identities | Raw at alpha | BH at alpha | Holm at alpha |
|---|---:|---:|---:|---:|
| Storefront experiment | 4/4 | 3 | 1 | 1 |
| Workshop study (two predefined families) | 5/5 | 4 | 4 | 4 |

These tiny clear fixtures are checks, not general accuracy estimates. The storefront family has reviewed p-values .01, .03, .04, .2; BH adjusted .04, .053333…, .053333…, .2 and Holm .04, .09, .09, .2. Thus correction changes the usable review output compared with the raw threshold baseline. The workshop fixture demonstrates that adjustment need not remove findings. An initially mistaken expected Holm count in the test was corrected against the standard formula before rerunning; no application arithmetic was changed to fit a fixture.

The maximum 36-text/24-row/12-hypothesis/4-family input ran nine actual embedding batches. Exact canonical descriptions matched all twelve identities, including duplicate observations; all duplicate-affected families were correctly blocked. Audit reimport retained all originals and required new inference/review. A deliberately unrelated instruction-like sentence still received a nearest candidate (`noise`); it was held and emitted no corrected result. Embeddings cannot verify a scientific identity or valid p-value.

## Deterministic oracle, review and artifacts

- Independent closed-form checks verified 7,800 adjusted values, ties, zero/one p-values, monotonicity and ordering `p <= BH <= Holm`; the known family matched its exact expected values.
- Every hypothesis needs exactly one approved observation. Missing, duplicate and held observations blocked the whole affected family. Separate unaffected families remained inspectable; no denominator shrank. Pending reviews and nonnumeric/out-of-range reviewed p-values blocked application.
- Identity/p-value edits reset approval; any edit invalidated export. Holds, undo, edited numerical results, all-held state, source preservation and source/audit imports passed.
- Actual browser downloads of JSON, CSV, complete-register CSV and Markdown were parsed independently with Python JSON/CSV readers. All ten audit artifacts preserved ordered observation IDs/original p-values and current review data. Register CSV preserved every planned hypothesis, including missing/duplicate/held blocks, without emitting corrected values for blocked families. Adjustments were independently recomputed from downloads.
- Quoted commas, literal quotes, multiline formula-leading notes and spreadsheet apostrophe escaping survived actual exports. Numeric p-values were not formula-sanitized. Clipboard matched the current Markdown snapshot. Max audit import restored every original record.

## Defensive, privacy and offline

- Empty/malformed/oversized source; empty hypotheses/observations; duplicate IDs; invalid alpha, p-value and long descriptions; unsupported PDF, malformed JSON and >2 MB file rejected.
- Fresh-browser network abort produced an actionable error with no fabricated output; unblocking network and retry performed real inference. Fault-injected missing WASM/module workers, worker construction/runtime errors, malformed result vectors/envelope and 180-second timeout each blocked output/export. Fault injection was used only to test defensive paths.
- Cancel/retry and input change during inference passed. Delayed worker fetch and delayed file read could not revive stale input. A deliberately late result from an old injected worker could not replace a completed newer run.
- No model-host request occurred before explicit loading. Startup-through-inference requests used GET with no request body, no fixture text in full URLs and only documented same-origin/Hugging Face/CDN hosts. Public audit saves URL paths and query-key names, not signed CDN query values. No provider integration exists. Built text credential-pattern scan passed (not an exhaustive security proof).
- Actual model tokenizer config reports 512 tokens; runtime protocol/pooling/Q8/CPU/batch settings were inspected. The app does not claim the worker's max_length option enforces a lower cap.
- After online warming, networking was disabled and a NEW worker performed real inference successfully in the already-open production page. Offline reload/navigation/startup is NOT claimed.

## Layout and limitations

1440, 390 and 320 px layouts passed no-horizontal-overflow, explicit form labels, >=44 px buttons and keyboard focus checks. Normal-height overview/review/results screenshots were inspected. No page errors. Physical phones, other browsers, constrained RAM and offline startup were not tested. Native select controls show their selected value within the control and offer the full option in their picker.

No statistical validity, effect importance, causal conclusion or universal matching accuracy is established. Guarantees require complete predefined families and valid individual p-values; BH additionally requires independence/suitable positive dependence. Separate-family summary counts do not imply a pooled guarantee. All output requires analyst interpretation.

## Release verification

Combined/public release verification is recorded below after deployment. Machine-readable evidence lives alongside this document: browser, defensive, arithmetic, artifact, tokenizer, asset and stale-run reports.


## Combined and public release

Root predeploy and deploy each assembled **700 apps, zero failed/skipped**, at **999,592,423 bytes** under the existing conservative size guard. The assembled bundle passed the complete actual-inference/review/export/privacy/offline suite. Root deployment published Pages commit `69ef048375904abb69c593740a64ea71af591766`; the matching Pages build reached **built** without fallback/rebuild triggers. Public HTTPS app/worker/factory/WASM files byte-matched validated builds. Both real-AI fixtures, maximum batching, all reviewed JSON/CSV/register CSV/Markdown and clipboard actions, warmed-page fresh-worker offline inference, defensive input handling and desktop/phone-width checks passed again at the public URL.

The public 700-card gallery preserves all 699 earlier working-tree entries/categories and search. To fit the existing size guard, the deploy-only runtime deduplicator now also reuses byte-identical Manifold WASM for older app `20261030-28`, preserving its source build and JS URLs with query-versioned worker/shell references. That app loaded the shared runtime, built its current solid and exported a parsed valid **2,080-triangle binary STL** both locally and publicly; the public compare audit confirms all other older app files are byte-unchanged. No original `/Volumes/ExternalHD/daily_app` files were modified.

An intermediate combined metadata audit was attempted while the deployment lifecycle was rebuilding its directory and encountered the temporarily absent metadata file. It was rerun after deployment assembly and passed; successful browser checks were completed before publishing, not concurrently with directory rebuild. Source staging excludes unrelated pre-existing drafts and root edits. No digest was sent. See public/combined JSON audits, legacy-runtime reports, preserved-legacy-assets.json, pages-build.json and publication-status.json.
