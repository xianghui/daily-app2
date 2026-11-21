# Seat Margin

A local-AI waitlist planning worksheet for small workshop organizers. **Not an invitation sender, booking service, individual reliability predictor, or occupancy permission.**

## Workflow

1. Paste/import source JSON or choose a synthetic fixture. Set room capacity, maximum acceptable `P(attendees > capacity)`, reservation-channel profiles and their historical attendance assumptions. Put waitlisted reservations in priority order; committed reservations are fixed.
2. Explicitly choose **Load AI & reconcile**. Real MiniLM embeddings match the meaning of each channel note to profile descriptions. This reconciles shorthand/paraphrases; it does not estimate personal attendance.
3. Review each source snippet, cosine evidence, profile and supplied probability. Edit any suggestion, add a multiline note, approve or hold; undo restores review state. Changing profile resets its probability to the selected supplied assumption. Any hold withholds the entire plan rather than dropping a reservation. No auto-approve.
4. Apply. Exact Poisson-binomial convolution checks every source-order waitlist prefix and proposes the largest satisfying the risk limit. Existing commitments are never removed. If they already breach the limit, no feasible plan is offered.
5. Inspect every prefix and the selected attendance distribution. Compare headcount-only and expected-attendance-only baselines. Copy the Markdown worksheet or download JSON, audit CSV, distribution CSV, prefix CSV and Markdown. Editing locks all exports until reapplication.

JSON imports can be a source or audit envelope (`originalInput`). Audit import restores **originals only**, not old approvals: fresh inference and review are required. This is deliberate, not a review-state backup. CSVs are outputs, not import formats.

## Real AI, runtime & licenses

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX (~23 MB). Feature extraction, mean pooling, normalized 384-dimensional vectors; cosine nearest-profile matching.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. No WebGPU needed. Model downloads use Hugging Face and its CDN, not agent-provider keys. No remote inference integration or mandatory paid service.
- Immutable same-origin collection dependencies: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` (~549 KB), `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` (~53 KB), `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (~27 MB). Preserve these old apps/assets when deploying. Byte hashes/source inspection are in `runtime-dependency-audit.json`. Sharing avoids duplicating a large runtime in the almost-full collection; this app’s own React UI is bundled locally.
- Model `main` is unpinned. Observed host commit recorded in runtime audit; upstream changes may alter results. The source worker passes max_length=256, but this Transformers.js feature-extraction implementation ignores that option. Actual tokenizer ceiling is **512 tokens**, independently verified from tokenizer config; each text is separately bounded to 300 characters. Four texts per chunk, at most 40 texts/10 chunks.

## Downloads, devices & offline scope

Before loading, UI shows ~23 MB weights + 27 MB CPU runtime on first use; internet required. Worker/runtime/weights are cached with Cache API when available, subject to browser eviction/storage policy. Cancellation terminates the worker, including inference; already downloaded cache entries can remain. Progress reports individual files and processed-text counts; 180-second timeout and explicit retry. No fake/deterministic model fallback.

Requires HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB available RAM. Desktop Chrome tested on CPU with GPU disabled. Phone-width layout tested at 320/390 CSS pixels; physical phones, other browsers and low-memory devices untested. Unsupported workers/WASM show actionable errors.

**Tested offline:** another real inference with all network disabled and a newly created worker in an already-open, warmed production page. **Not promised:** offline app-shell startup/reload/navigation, permanent model storage, or every device. No service worker provides an offline shell.

## Privacy & boundaries

Content stays in page/worker memory, not persistent document storage. Only explicitly initiated static downloads from the site/Hugging Face/CDN occur; no content upload, API keys, analytics, remote actions or provider credentials. Exported files may contain all imported notes and assumptions—handle them appropriately. The synthetic fixtures contain no personal data. Imported strings cannot invoke tools, change authority or request credentials; React escapes displayed text.

Probabilities are organizer-supplied event/channel assumptions, **not neural confidence or predictions of a person’s reliability**. Avoid sensitive traits, names as features, or automatic decisions. Similarity always chooses a nearest profile even when inappropriate. A negated probe was misclassified during validation; review or hold uncertain text. English short descriptions work best; multilingual accuracy not tested.

## Deterministic math & comparison

For independent Bernoulli probabilities `p_i`, update `P_new(k)=P_old(k)*(1-p_i)+P_old(k-1)*p_i`. Sum mass above capacity for overflow risk and `(k-capacity)*P(k)` above capacity for expected excess. Expected seated = expected attendance − expected excess. Enumerate all ranked prefixes including zero additions, keeping all commitments. Prefix risk is nondecreasing; select the largest feasible prefix. This is not arbitrary-subset selection or causal/forecast accuracy. Strict floating-point comparison is conservative at numerical boundary cases; no sampled simulations or invented confidence percentages.

Headcount baseline adds up to `capacity − committed count` (zero if already over). Mean-fill chooses the largest prefix with expected attendance ≤capacity, or zero additions if even commitments exceed the mean capacity. These baselines do not enforce the chosen chance limit. Their overflow is computed by the same convolution for a fair conditional comparison, not a measured improvement claim.

Important limitations: independent attendance, one seat per reservation, no parties/common weather/travel shocks, no walk-ins, no multiple sessions. Shared attendance dependencies can invalidate the calculation. A 20% risk cap means a conditional 1-in-5 overflow chance, not guaranteed accommodation. Never exceed physical/legal occupancy; separately arrange admission/contingency procedures. No invitations or admissions are changed by this app.

## Bounds & formats

Source object: `title` (1–120 chars), integer `capacity` (1–32), `maxOverflow` (0–1), `profiles` (1–8 `{id,text,probability}`), `guests` (1–32 `{id,description,state}`). Probabilities finite in [0,1]; state committed/waitlist; IDs unique within each list, alphanumeric/underscore 1–40 chars; descriptions 1–300 chars. Paste ≤60,000 chars; `.json` file/envelope ≤2 MB; notes ≤2,000 chars. Maximum audit reimport was tested. Empty, duplicate IDs, unsupported formats, invalid probabilities and oversized inputs are rejected.

JSON audit schema `seat-margin/1` preserves all original inputs/reviews/holds, chosen plan, comparisons, every prefix and probability distribution. Audit CSV preserves every reservation including deferred/withheld, source notes, AI/reviewed profile and probability. Distribution CSV contains all attendance counts including zero mass; prefix CSV every ranked prefix. CSV text is quoted/escaped with formula-leading text prefixed by an apostrophe; multiline notes survive. Held/infeasible audits never invent a selected distribution. Exports reflect current applied reviews only.

## Build/deployment

`npm install`; `npm run predeploy`. React + Vite; base `/daily-app2/20261121-20/`. Per-app scripts retain `predeploy: npm run build` and `deploy: gh-pages -d dist`, but **publish only through the root combined deployment**, never the individual deploy script.

See [VALIDATION.md](VALIDATION.md) for actual outcomes, defensive checks, artifact round trips, and publication status.
