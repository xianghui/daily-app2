# Queue Cushion

A local-AI staffing scenario bench for service-desk leads. Rough descriptions of simultaneous contact streams are semantically linked to supplied queue profiles. Humans verify each queue/rate, then deterministic Erlang C finds the smallest parallel team meeting a wait-threshold target and occupancy ceiling. Compare against an occupancy-only baseline, and export a complete reviewed worksheet. This differs from the collection's occupancy-observation tools: it models stationary queue waiting and minimum service-target capacity, not observed occupancy or calendar assignment.

## Workflow

1. Choose Software helpdesk or Community services, paste JSON, or import a JSON audit. Supply 2–6 queue profiles (`id`, `title`, `description`, `handleMinutes`), 1–12 contact streams (`id`, `text`, `arrivalRate` per hour), a name and settings.
2. Use **Load AI & match queues**. Before loading, the page discloses ~50 MB initial download. Model progress and four-text chunk progress appear; cancellation terminates the worker. No model requests before this explicit action.
3. Inspect source snippets, queue descriptions and cosine-ranked alternatives. Correct rates/queue IDs, add notes, and explicitly approve every stream or hold uncertainty. Undo restores the previous review state. Handling-time changes require editing originals and rerunning. A single hold blocks every staffing recommendation.
4. Set wait threshold 0–600 seconds, target fraction 0.50–0.99, occupancy ceiling 0.10–0.95 and agent cap 1–100. Apply reviewed scenario. Minimum staffing and occupancy-only baseline use the same reviewed load, service time and cap. Infeasible queues remain explicit; totals exclude unresolved queues.
5. Download JSON, CSV or Markdown, or copy Markdown. Edits invalidate exports. JSON keeps every original, reviewed field, candidate and computed plan; reimport restores originals only and requires fresh inference/review. CSV includes every stream with repeated queue totals (do not sum them), properly quotes multiline fields and prefixes formula-like text with an apostrophe. Markdown includes every stream and queue plan.

All contact streams must be disjoint simultaneous demand for a single steady planning hour. Do not sum alternative days, overlapping samples or repeated counts. Rates and handling times are user inputs, never AI estimates. Original text is preserved and escaped by React. Nothing sends emails, changes schedules or calls operational systems.

## Real AI and static runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX, normalized mean-pooled 384-dimensional embeddings, cosine ranking. AI bridges paraphrased stream descriptions to your queue definitions; not keyword rules or canned results.
- Runtime: `@huggingface/transformers` 4.3.2, ONNX Runtime Web single-thread WASM CPU. React + Vite, `/daily-app2/20261111-19/`. Browser worker and factory bundled locally. No WebGPU requirement, API keys, provider integration or paid mandatory service.
- First run: approximately 23 MB model/config/tokenizer from huggingface.co / hf.co and their CDN, plus 26,861,777-byte same-origin WASM; allow about 50 MB transfer and several hundred MB working memory. Model host revisions are not pinned; upstream changes/cache eviction may require downloads. Runtime factory and worker use explicit Cache API, model uses Transformers.js browser cache.
- Reuses the byte-identical immutable WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve that earlier app in combined deployment. Per-app predeploy/deploy scripts remain required, but publish only using root combined workflow.
- Current desktop Chrome tested with module workers, WebAssembly SIMD and Cache API. Other browsers/physical phones not validated. WASM/device, network, worker, timeout and malformed-output failures show actionable errors and no substitute output.
- Offline claim is limited: following an online run, a **new worker in the already-open page** successfully inferred with network disabled. Offline navigation/reload/app-shell startup is NOT promised. Private-mode/cache eviction can break cache reuse.

## Privacy and bounded data

Content stays in browser memory, passed only to a local worker. Model downloads are GET requests for files, not content uploads. No analytics, remote inference, keys, persistence of source documents or external actions. Runtime/model assets may remain in browser caches; reviewed user content is not deliberately cached. Inputs are data, including instruction-like text; there are no AI tools or credential authority. Only synthetic fixtures are committed.

Original input ≤18,000 characters; imported JSON/audit ≤1 MB. Text ≤400 characters, model context capped at 256 tokens, four-text chunks, up to 18 embeddings. Rates 0–200/hour/stream; handling 0.1–60 minutes. Finite near-unit 384-vector schema required; no confidence percentages. Run IDs invalidate stale file reads and downloaded worker sources; input edits/cancel terminate workers; timeout 180 seconds. Unsupported formats and malformed/empty/oversized inputs are rejected.

## Mathematical assumptions and limitations

Erlang C assumes independent stationary Poisson arrivals, exponential handling times, identical agents, FIFO service, infinite waiting space and no abandonment. It does not model skill sharing, breaks/shrinkage, callbacks, appointment queues, correlated bursts or forecast uncertainty. Teams are separate. Output is simultaneous productive agents, NOT paid headcount or a roster. Validate assumptions with operational evidence and add organizational allowances separately.

With offered load `a = contacts/hour × handlingMinutes/60`, the planner requires `n > a`. Stable Erlang-B recurrence gives B, then `C = B/(1-a/n+(a/n)B)`; service fraction within t is `1-C exp(-(n-a)t/(60×handlingMinutes))`. Search agents up to cap, returning the first satisfying service/occupancy constraints. Baseline is the first stable team satisfying occupancy only. Zero demand uses zero agents. These percentages are modeled estimates, not measured performance or AI confidence. Similarity is not queue identity: negation/unrelated inputs can still be forced to a wrong top candidate. Mandatory review/hold is essential.

## Validation

See [VALIDATION.md](VALIDATION.md), machine-readable reports and reproducible scripts. Actual production-bundle browser inference, two materially different known-answer fixtures, batching, offline fresh-worker, exports/round-trips, defensive injections, privacy requests and 1440/390/320 px layouts were checked. Independent formula comparisons validate mathematics, not its applicability to real operations. Small fixture matches do not establish universal accuracy. Public deployment verification is recorded separately.

## Development

`npm install`, `npm run dev`, `npm run predeploy`. The required per-app scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`; do not run the latter to publish the collection. Use repository root predeploy/deploy. Tests use installed Playwright/Chrome at the local documented path; `serve.py` serves production dist at port 6449 with collection paths.
