# Observed validation — Roomkind Planner

## Local production bundle (desktop Chrome, GPU disabled)

- React/Vite predeploy passed. Real no-key MiniLM q8 WASM ran on two materially different synthetic intakes: orchard/root notes **4/4**, tropical/tuber notes **6/6** nearest references matched the intended keys. First-reference-only comparison would match 1/10. These tiny easy fixtures are not representative accuracy.
- Review changes affect actual downstream room membership/constraints. Fixture 1: 90 kg, 3 minimum rooms, first-fit 3. Fixture 2: 37 kg, **4 minimum vs 5 first-fit rooms**, same constraints, one room avoided in this synthetic ordering only. No elapsed-time/energy/accuracy improvement claims.
- Known limitation actually observed: “Not apples. Only carrots in these crates.” selected **apple**. Unrelated credential-seeking text selected cucumber but caused no upload or tool action. Both require human correction/hold. AI is semantic retrieval, not reliable negation/unknown detection or storage expertise.
- Mandatory review, editable profile/mass, multiline reviewer note, undo, hold/reject, invalid edited kg and export invalidation passed. Insufficient rooms and individually oversized lots preserve all records and block operational manifests.
- Maximum 12 lots / 8 profiles: 20 texts in chunks of four; all records retained and audit reimport restored all originals. Empty/invalid/oversized JSON, invalid format, duplicate IDs, reversed ranges, role/integer validation passed.
- Cancellation during run and pending worker fetch, retry, actual worker/model-host download aborts, unsupported Worker/WASM, worker construction/error, malformed vectors and timeout guards passed. Fault injection is only for defensive checks. Actual network failure followed by real retry passed; late schema-valid old results/errors could not overwrite a newer real run.
- Real inference passed after setting the browser context offline and recreating the worker in the already-open warmed page. No offline reload/navigation claim; cache eviction/private browsing remain limitations.
- Request capture from page startup through all flows: all requests GET with no bodies, only local runtime plus documented HF/CDN file paths, no model requests before explicit loading, no fixture text in URLs. Audit retains host/path and query-key names only, not signed query values. Runtime worker source/protocol inspected and hashes saved. Built-text credential pattern scan passed (not a formal exhaustive security proof); no external inference integration exists.
- Actual JSON/CSV/Markdown downloads and clipboard tested. Independent Python stdlib parsers passed **397 artifact assertions**: IDs, original and reviewed values, formula-prefix escaping, quotes/newlines/Unicode, every record, kg conservation, room constraints and review gates.
- Independent Python recursive partition enumeration passed **240 cases / 4,454 assertions**, compared with app subset DP: exact minimum room count, first-fit, individual infeasibility, room intersections, ethylene, capacity, no dropped/duplicated lots, holds and release gates. Endpoint/capacity/schema core checks also passed.
- Desktop 1440px and narrow 390/320px: no horizontal overflow, normal viewport screenshots for hero/input/review/results, labels for all controls, keyboard order and ≥44px interactive controls passed. Desktop hero and 320px results screenshots visually inspected. Zero browser page errors.

## Untested / limitations

Physical phones, other browser engines, cold offline startup, actual warehouse conditions and representative semantic accuracy are not tested. Profiles are synthetic demonstrations, not storage or food-safety guidance; simplified ethylene role exclusion does not model gas, duration, packaging, airflow, odors or pathogens. Exact mathematical feasibility is not safety certification. Model host `main` remains an external mutable dependency.

## Publication

Assembled combined site passed: all **905** gallery entries, new entry exactly once, every prior entry byte-identical and legacy categories intact; every inline script compiled. Real model recovery/stale-new-run check also passed against assembled paths. Seven app/gallery/runtime assets match source production bytes. Root predeploy reports 905 built, 0 failed, 0 skipped; combined **821,510,330 bytes**, below unchanged 1 GB guard; shared-runtime rules untouched.

**Public release verified.** Matching Pages commit `d0772489054c399d885611761d061c8b64d9e689` is built; workflow [45888897212](https://github.com/xianghui/daily-app2/actions/runs/45888897212) succeeded. Public gallery/app/worker/module/WASM: **7 exact byte/hash matches**. Full real-AI suite reran at the public URL: both fixtures 10/10, edited/current exports, maximum batch, held/blocked gates, invalid input, cancellation/retry, warmed-page fresh-worker offline inference, desktop/phone checks and privacy capture passed. Independent public download parsing passed **397 assertions**; gallery rendered all **905** cards and preserved old categories. Actual public network abort recovered to real inference, and late old results/errors could not overwrite a newer real run. See `public-*.json`, screenshots and test scripts.

[Open public app](https://xianghui.github.io/daily-app2/20261127-5/). No digest sent. Source main commit/push is the final release bookkeeping step.
