# Cadence Loom

A local-AI maintenance reminder planner for workshop/archive coordinators. Distinct from deadline clocks and recall grading: it reconciles free-text cadence notes to explicit recurrence types, then expands a finite, human-reviewed maintenance calendar.

## Workflow

1. Open either synthetic example or paste/import JSON. Fields: `name`, `goal`, `start`, `end`, `weekends` (`keep` or `nextMonday`), and `tasks` with unique `id`, `description`, free-text `cadenceText`, `firstDue`.
2. Explicitly load AI. The recurrence note is embedded independently of task-domain words to avoid domain words overpowering frequency wording. Dates are supplied, never inferred.
3. Review every proposed daily/weekly/monthly/quarterly/annual cadence and first due date. Inspect all anchor cosine similarities (not confidence). Correct dates or cadence, add notes, then approve, hold or exclude. An edit resets approval; undo restores the last review. Originals remain intact.
4. Apply reviewed calendar. Only approved tasks produce reminders. Held/excluded records remain in the complete audit. Edit source constraints to rerun; imports reset approvals and restore original inputs, not review edits.
5. Download current JSON audit, spreadsheet-safe CSV (one row per task with all generated dates), Markdown checklist, or RFC 5545 dated all-day ICS. Copy the current Markdown plan. Test ICS in a separate calendar; repeat imports may duplicate in some clients. No calendar/account connection or sending occurs.

## Real AI, runtime, licensing and privacy

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT). Model files currently resolve through the model host's main revision; upstream changes may affect future downloads.
- Normalized mean-pooled 384-dimensional embeddings; cosine ranking of five recurrence anchors. Four texts per batch, max 256 tokens. Runtime is bundled in a local module worker; WASM CPU path requires no WebGPU or API key.
- First load ~23 MB model/tokenizer from huggingface.co and hf.co delivery hosts, plus 26,861,777-byte same-origin WASM (~50 MB total). Download progress, cancel and retry are visible. App/runtime JS is same-origin; no CDN runtime scripts. Shared byte-identical WASM is at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; root deployment must retain it. Local factory mjs is bundled under `runtime/`.
- User data stays in browser memory. Downloads are weight/config requests, not content uploads; no analytics, remote inference, credentials or agent-provider integration. Model files/worker/runtime cache through Cache API, not user inputs. Exports are explicit local downloads. Clear site data to clear model caches.
- Tested offline scope: after a successful online load, create a fresh worker and perform real inference in the already-open production page with networking disabled. Offline navigation/reload is **not promised**. Eviction/private mode may require downloads again.
- Use a current desktop browser with module workers and WebAssembly SIMD plus adequate memory. Chrome desktop tested. Other engines, physical phones and constrained-memory devices unverified. Errors do not substitute heuristics or fake outputs.

## Deterministic calendar contract

- Daily = one UTC calendar day; weekly = seven days. Monthly/quarterly/annual advance 1/3/12 calendar months from the original firstDue anchor, clamping invalid month days without cumulative drift. Jan 31 → Feb 28 → Mar 31; Feb 29 returns in a future leap year.
- Expand nominal dates first, then move Saturdays/Sundays forward to Monday when requested. Filter **shifted** dates to the inclusive horizon. Nominal dates before horizon may shift into it; dates shifted past its end are omitted. Several nominal dates can land on one Monday and remain separate events with distinct stable task/nominal UIDs.
- No holidays, durations, work capacity, legal compliance or safety certification. It is a reminder calendar, not a resource schedule. All-day ICS has exclusive next-day DTEND; no RRULE ambiguity. UTF-8 lines folded to ≤75 octets.
- Metrics are computed reminder/date/shift counts, literal cadence-word baseline coverage, and human/model agreement. They are not confidence, measured accuracy, measured savings or predicted task completion.

## Limits and failure handling

1–24 tasks, IDs ≤30 chars, descriptions ≤400, cadenceText ≤200, name ≤100, goal ≤400, review notes ≤500. Payload ≤40 KB; JSON/audit file ≤1 MB. Dates 2000–2099, inclusive horizon ≤366 days. First date must not exceed end. Only JSON import; PDF/CSV inputs unsupported. Structured finite 384-vector validation, run identities, worker termination, stale file-read/run guards and 180-second timeout prevent late results overwriting newer state. Network, unsupported-worker/WASM, schema and malformed-output failures show actionable errors and no recommendations. Imported text is data; cannot invoke tools or request credentials.

MiniLM is English-oriented and forced to pick one of five anchors. Unsupported twice-weekly, event-triggered, mixed or negated notes can be wrong. Hold them or split/rephrase instructions after human verification; do not use for safety-critical intervals without authoritative review. Tiny synthetic validation is not general accuracy evidence.

## Build and checks

`npm install`; `npm run predeploy`. React + Vite, base `/daily-app2/20261110-2/`. Required per-app scripts retained; **publish from root**, never per-app deploy (it would replace the collection).

`node core-test.mjs`; `python3 serve-test.py` (production bundle at port 6412); `node browser-test.cjs`; `node network-test.cjs`; `node cancel-download-test.cjs`; `node runtime-test.cjs`; `python3 asset-test.py`. Browser checks use the workspace Playwright install and Chrome. Independent artifact parsing needs Python `icalendar`: `python artifact-test.py`. See VALIDATION.md and machine-readable reports for observed outcomes, including limitations.
