# Pilot Prior

A local-AI decision worksheet for operations teams reviewing small binary-outcome pilots. Reconcile informal trial-result notes to supplied pilots, verify counts, then calculate **whether one more paid test has positive expected information value before one terminal launch/skip decision**. Distinct from a success-rate dashboard: explicit priors, payoffs and branch-dependent action changes determine whether learning is worth paying for. No trial, purchase or launch is executed.

## Workflow and inputs

1. Use either synthetic example, paste source JSON, or import source/audit `.json` ≤2 MB. Source limit 30,000 characters; 2–6 pilots and 1–32 disjoint result batches. IDs must be unique within each list.
2. `rules`: `id`, `label` (≤100), `description` (≤300), integer `priorAlpha` / `priorBeta` (1–1,000), `successValue` / `failureLoss` (.01–100,000), `pilotCost` (0–100,000). Use one consistent utility/currency scale. Prior counts are assumptions, not observed data.
3. `records`: `id`, `description` (≤300), `weight` (observed successes, integer 0–trials), `trials` (integer 1–100,000), `owner` (≤150). Every batch must be disjoint and represent the same stable binary process as the assigned pilot. Do not double count trials.
4. Explicitly **Load AI & match trials**. First use downloads about 23 MB model plus 27 MB CPU runtime and tokenizer/app files. Progress, cancel and retry are visible; no model download before clicking.
5. Review source and ranked pilot-description evidence. Change pilot, successes, trials, owner and multiline note; approve or hold every batch. Undo review edits. Source/goal/prior changes terminate the run and clear prior review/results.
6. Apply reviewed assumptions to the in-app worksheet; inspect the raw-rate baseline, posterior, one-success/one-failure branches, pilot cost and prior sensitivity. Then export current JSON, CSV, Markdown or copy the worksheet. Any review edit disables exports until reapplying. Holds stay in all audits, excluded from both analyses. Audit reimport restores originals only and requires renewed inference/review.

## Real AI and runtime

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), q8 WASM **CPU** feature extraction with normalized mean-pooled 384-dimensional embeddings. Cosine ranking between result/pilot descriptions drives recommendations—not regex or canned classifications. Similarity is NOT confidence; even unrelated/negated text gets a nearest pilot and may need holding. AI does not infer counts, priors, payoffs or truth.

Model files download from Hugging Face/CDN; app, worker and runtime factory are locally bundled. Identical immutable WASM is reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, avoiding 26.9 MB duplicate collection storage. Preserve that older app asset. SHA-256 is recorded in `asset-audit.json`; factory and binary match the installed distribution. Lockfile pins dependencies; model uses upstream `main`, so future host changes may require revalidation.

## Bayesian arithmetic, baseline and limits

For prior Beta(α,β), approved s successes in n trials give a=α+s, b=β+n−s and p=a/(a+b). The posterior predictive mean p is an explicit model-dependent probability, **not an AI confidence score**.

Terminal launch expected payoff: `U(p) = p × successValue − (1−p) × failureLoss`. Skip payoff: zero. Current optimal payoff: `max(0,U(p))`.

After a hypothetical test success, use `(a+1)/(a+b+1)`; after failure, `a/(a+b+1)`. Compute each branch's optimal launch/skip payoff. `EVSI = p × optimalAfterSuccess + (1−p) × optimalAfterFailure − optimalNow`. Clamp tiny negative floating residue to zero. `netPilotValue = EVSI − pilotCost`. Suggest one pilot if net >1e−9 utility units; otherwise launch if U(p)>0, else skip. Ties skip/do not test. Zero-approved-evidence pilots get no posterior or recommendation.

Baseline uses raw s/n and launch/skip payoff, ignoring prior and learning. Uniform Beta(1,1), skeptical Beta(1,3) and optimistic Beta(3,1) sensitivity rows show alternate **assumptions**, not credible bounds or a confidence interval. No prior is certified as appropriate. Small displayed values may round to zero; JSON keeps numerical precision.

Assumptions: conditionally independent/exchangeable Bernoulli outcomes, stable success probability, disjoint counts, supplied utilities, exactly one new observation and one terminal decision, no delay or implementation cost beyond supplied payoff/pilotCost. No multi-step stopping policy, correlated observations, process drift, hypothesis tests, causal inference, launch automation or high-stakes assurance. Posterior summaries are conditional on assumptions, not proof. A pilot can have high success rate and zero information value when either next outcome leads to the same action.

## Privacy, devices and tested offline scope

No API keys, paid services, telemetry, external inference or content upload. Content/reviews stay in browser memory unless explicitly exported/copied. Only model/runtime GET downloads leave the page; host sees download metadata, not source content. Cache API stores model/runtime/worker files, not input records. Imported instructions are inert data, never tool authority or credential requests.

Recommended: current desktop Chrome, module workers, WebAssembly SIMD and several hundred MB free RAM. No WebGPU needed. Physical phones, non-Chrome browsers and memory-constrained hardware unverified. Layouts tested at 1440/390/320 CSS pixels in desktop Chrome.

After successful online inference, another real inference with a **fresh worker in the already-open warmed page** was tested with network disabled. Offline reload/navigation/app-shell startup is NOT promised. Cache eviction, private mode, unavailable Cache API or changed assets may require internet/redownload.

Four texts/batch, maximum 38 texts, 256 tokens/text, 180-second overall timeout. Exact vector count/dimension, finite values and near-unit norms validated before ranking. Malformed/oversized inputs, unavailable runtime, network/worker/model errors and timeouts block results; no deterministic fake fallback. Run tokens plus worker termination guard delayed messages/downloads/file reads.

## Exports and development

JSON retains originals, every review and per-pilot branch calculations. CSV keeps all result batches, held rows, original/reviewed successes/trials and linked recommendations; per-pilot metrics repeat for linked rows and are NOT additive. Formula-like text is apostrophe-escaped (including multiline fields); numbers remain numeric. CSV/JSON/Markdown preserve quoted commas and newlines. Markdown is a source-linked handoff checklist. All included data are synthetic.

`npm install`; `npm run dev`; `npm run predeploy`. The per-app `deploy` script remains for the collection contract but **publish only from the repository root** combined workflow.

See [VALIDATION.md](VALIDATION.md), browser reports and `posterior-test.py` (independent exact Fraction oracle). Successful inference tests use the real model; injected faults are only defensive checks.
