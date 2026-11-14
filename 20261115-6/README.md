# Circuit Cove — reviewed no-wait capacity planning

For service-capacity planners reconciling recurring, differently worded traffic notes. Unlike a waiting-queue staffing tool, this models **lost arrivals** at a finite shared pool with no queue. No external actions.

## Workflow

1. Use either synthetic example, paste source JSON or import a `.json` source/audit file. Supply 2–6 pool descriptions with `channels`, `maxChannels` and blocking probability `target`; 1–32 disjoint simultaneous traffic classes with `arrivals` (offered attempts/hour, **including busy attempts**), `minutes` (mean total channel holding minutes), and `owner`.
2. Explicitly load AI. Inspect the source notes and ranked pool-description evidence. Review pool, numeric inputs, owner and multiline notes. Every row must be approved or held. Unrelated text still receives a nearest suggestion; hold it.
3. Apply the reviewed worksheet. Approved traffic is aggregated by pool. Compare current blocking and lost arrivals with an 80%-occupancy heuristic and the smallest integer channel count meeting the chosen blocking target within the cap. Unmet caps return no feasible recommendation. Held rows are excluded and flag partial input. Source changes require another inference; review edits invalidate exports. Undo restores the preceding review state.
4. Download complete JSON (originals, reviews, calculations), spreadsheet-safe reviewed CSV (every held row retained) or Markdown; copy the current applied worksheet. JSON reimport restores **originals only**, not trusted approvals. No remote channels are provisioned.

## Real AI, source and runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8, uses real local normalized mean-pooled 384-dimensional feature inference. [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT) WASM CPU, one thread, four texts/batch, max 256 tokens/text. The tokenizer may truncate unusually token-dense strings. AI reconciles paraphrased notes against user-supplied canonical pool descriptions; ordinary exact-name matching misses these inputs. AI does **not** invent demand, prove traffic suitability, or estimate holding times. Cosines are similarity, not probabilities or confidence.

Model files (~23 MB) download from Hugging Face and its CDN; first load also needs ~27 MB of WASM plus local JS. Module worker and WASM factory are bundled locally. To preserve the collection's Pages size budget, Vite references the byte-identical immutable runtime at `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve that asset. Asset checks confirm the binary and module factory match this installation. No server-only inference or paid/key service.

## Privacy, caching and requirements

Only static GET file downloads occur; source descriptions are not put in requests or URLs. Content, approvals and notes stay in volatile browser memory; there is no analytics, key collection or optional remote inference. Cache API stores model/runtime files, not content. An online inference warms the cache; **a fresh worker in that already-open page** was verified with all network blocked. Offline reload/new navigation is not promised. Cache eviction, disabled storage and private sessions can require redownload. Model host availability remains an external dependency.

Tested headless desktop Chrome on macOS with GPU disabled. Requires WebAssembly SIMD, module workers and several hundred MB available RAM; no WebGPU required. Phone-width UI tested at 320/390 px, not on physical phones. Other browsers/devices unverified. Source ≤30,000 characters; description ≤300, unique IDs ≤50, 1–32 rows, 2–6 pools; file ≤2 MB (separate envelope allowance). Offered arrivals 0–10000/hour, mean holding .01–240 minutes, integer current/max channels 1–200 with max ≥ current, target .00001–.5. Four texts/batch, 180-second timeout. Empty/invalid inputs, downloads, unsupported runtimes, malformed vectors and worker failure give actionable errors, never canned AI. Cancel terminates workers; run identities guard late worker downloads and file reads.

## Deterministic method and limitations

A = Σ(arrivals/hour × holding minutes / 60). Stable Erlang B: B(0,A)=1; B(c,A)=A B(c−1,A)/(c+A B(c−1,A)). Lost attempts/hour = Σarrivals × B. Scan 1…maxChannels for minimum B ≤ target; one channel is the lower bound even at zero load. Occupancy-only comparison is min(maxChannels, max(1, ceil(A/.8))); it can miss the loss target. Results are conditional steady-state scenarios, not measured improvements or forecasts.

Assume stationary Poisson offered arrivals, independent holding times, identical fully shared channels, no waiting, reservations, retries, overflow or multi-channel jobs. Every class must cover the same time window and be disjoint. AI cannot establish these assumptions. Pools are independent; no sharing across pools. At large load a cap may make the target infeasible. No utilization-based staffing, causal demand model, reservation scheduling, equipment control or operational certification. Approving a link means approval for calculation only.

## Build / deployment

`npm install`; `npm run dev`; `npm run predeploy` builds with `/daily-app2/20261115-6/`. Required per-app `deploy: gh-pages -d dist` remains present but **do not invoke it for publication**. The repository-root predeploy/deploy assembles and publishes the entire collection. Test the production bundle, then the actual public page and worker assets.

## Observed validation

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Synthetic fixtures only, no real customer data. Eight expected semantic matches passed across community call traffic and workshop bays; unrelated instruction-like data still matched a pool and required a hold. Independent exact Fraction probabilities and channel searches passed 1,504 cases. Reviewed JSON/CSV/Markdown artifacts retained edits, originals, multiline formula-like values and held/max-batch rows. No universal accuracy, production suitability or physical-device claim.
