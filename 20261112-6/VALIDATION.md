# Observed validation — Delegate Loom

## Production-bundle workflow

- Both real MiniLM WASM CPU fixtures passed: Workshop [bike, bake, garden, bike] and Creative [photo, web, music], **7/7** intended simple links. Exact-title lookup resolved **0/7**. Tiny curated fixtures, not a general accuracy estimate.
- Workshop: 120 members, 7 seats → [4, 2, 1]; absolute quota deviation 1.000 versus equal baseline 1.083 seat units. Creative: 100 members, 9 seats → [5, 3, 1]; deviation 1.060 versus 3.360. All values computed from source inputs.
- Edited count 52→62 retained original 52; undo, hold exclusion, all-held blocking, result invalidation and discard/export actions tested. Reviewed JSON/CSV/Markdown downloaded; independent Python CSV parsing confirmed all records, corrected values, chapter seats, escaped quoted/multiline formula-like notes and 24-record audit reimport. Clipboard matched downloaded Markdown.
- Max 6-chapter/24-report inference passed in real four-text chunks; all expected description-to-chapter links matched. Restoring the exported audit resets approvals and preserves originals.
- After a real online run, network was disabled and the old worker terminated; another fresh-worker **real inference** succeeded in the already-open page. Offline navigation/reload is not claimed.
- Empty/null/malformed/oversized JSON, duplicate IDs, out-of-range counts/seats, >24 reports, unsupported CSV/oversized files, cancellation/retry, changes during inference and invalid review counts were rejected safely.
- Fault-injection-only tests: blocked model downloads with real retry, worker download failure, missing module workers, malformed embeddings, worker error and shortened timeout all produced errors without fake outputs. Actual worker with WebAssembly removed showed an actionable requirement. Delayed file read, delayed worker download and late old valid vectors could not overwrite newer inputs.
- No model-host request before explicit loading. All captured requests were GET without bodies; no report text in download URLs. No provider/telemetry integration or secrets present in reviewed source; built assets scanned for known credential patterns.
- 1440, 390 and 320 px widths: no horizontal overflow; every form control labeled; keyboard input focus works; buttons ≥44 px; exports worked on narrow layout. Screenshots inspected. Physical phones, assistive technology audits and non-Chrome browsers untested.

## Exact arithmetic

19,950 enumerated three-chapter membership/seat-pool cases passed seat conservation, floor/ceiling quota rule, zero-member exclusion and quota deviation no worse than the equal baseline. Exact-remainder cutoff ties use ascending chapter ID. Schema/vector guards and all-zero/all-held rejection passed. See core-validation.json.

## Challenge, not success evidence

Negated and unrelated/instruction-like text still produces nearest-neighbor proposals (the model cannot abstain). Observed candidate IDs: ['bike', 'bike']. Both were held and a no-positive-membership worksheet was blocked. This is why identity and counts require human review; AI similarity is not authentication or confidence.

## Publication

Local checks passed. Combined-site and public-site results are recorded separately in combined-browser-validation.json, public-browser-validation.json, public-validation.json and publication-status.json when complete. A build/branch push alone is not public inference verification.

## Completed public release

Root predeploy assembled **607** app indexes with zero failed/skipped apps. Root deploy published commit `1ca8f175fcc74ab3391438dd76e455d2cf2b7e67`; Pages reported **built** and the matching workflow completed successfully. All production app files, worker, local WASM factory and immutable shared WASM were fetched from the public URLs and byte-matched. The public gallery matched the full working gallery, preserved all 606 prior entries and displayed Delegate Loom first under AI Utilities.

The **full real-model browser suite passed again at the public URL**, including both fixtures, max batches, current reviewed artifacts, clipboard, holds/undo/edit, input/error handling, fresh-worker offline inference and 1440/390/320 px layouts. Independent Python artifact parsing passed on the public-run downloads. See public-validation.json, public-browser-validation.json, public-gallery-validation.json and publication-status.json. No digest sent. Pre-existing unrelated source edits/drafts were preserved and excluded from this utility's source commit.
