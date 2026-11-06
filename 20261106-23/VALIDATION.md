# Validation — 2026-11-06

Production Vite bundle tested in real headless desktop Chrome using Playwright. Successful AI checks use the real q8 MiniLM model on WASM CPU, not mocked output. Synthetic fixtures only. See browser-validation.json and later live-browser-validation.json.

## Observed quality and constraints

- Product circle, default threshold 0.35: A↔B accessibility paraphrases (cosine 0.360470), C↔D customer research (0.605278), unrelated gardening participant E unpaired. Both expected pairs found; 5/5 source participants retained. Exact-description baseline: zero pairs.
- Important limitation: at threshold 0.45, accessibility paraphrases were missed; only C↔D paired. This was observed before selecting the 0.35 default and is retained as a regression check. Five obvious pairs in two tiny synthetic rosters do not establish general accuracy.
- Community circle: M↔N sourdough, O↔P marathon training, Q↔R watercolor painting. Three expected pairs, 6/6 participants retained.
- Maximum 16-person batch: 8 disjoint pairs, no lost/duplicate people. Same-team identical interests: zero pairs when cross-team enabled, one when disabled. Accepted conflicting edits block applying. Exact optimizer checked against independent exhaustive perfect-matching enumeration on a six-node weighted graph. Cardinality is prioritized over score.
- Checked invalid/empty/malformed headers, duplicate IDs, oversized descriptions, excess rows, 30 KB limits and unsupported file formats. Normalized vector schema rejects malformed/NaN data.

## Workflow, artifacts and resilience

- Review partner edits, reject, note, undo, apply, reapply; changes invalidate exported snapshots. Actual JSON/CSV/Markdown downloads and clipboard copy tested. Python csv/json independently parsed downloaded artifacts, verifying all people, mutual partner links, reviewed notes, commas/quotes/newlines and leading formula-like content. Formula escaping uses intentional leading apostrophes in CSV; JSON preserves originals.
- Real online model download, cached reload without additional remote requests, fresh worker with all networking blocked in already-open page, cold-download cancellation/retry, mid-run cancellation/retry, stale edited input and delayed file read guards tested.
- Real blocked model-host network failure/recovery tested. Fault injection solely for unsupported Worker/WASM, malformed vectors, worker error/construction failure, accelerated 180-second timeout and cancelled late response checks. These yield explicit errors/no fabricated pairing plans.
- Default startup caused no model-host downloads before explicit loading. Captured network traffic contains only GET/HEAD weight/config downloads without request bodies to huggingface.co/us.aws.cdn.hf.co. No roster content in remote URLs/bodies. Built text scan found no common API key patterns; app has no provider/key integration. This pattern scan alone is not a universal security proof.
- Desktop 1440px and narrow 390/320px layouts, no horizontal overflow, labeled form controls, keyboard focus, live status and touch controls checked. Phone screenshot visually inspected. No physical phones, Firefox/Safari or assistive-technology certification performed.

## Offline scope and limitations

Only fresh-worker inference in the already-open page is claimed offline. Offline page navigation/reopening is not supported/promised. Cache eviction/private browsing require another download. English-focused model can miss paraphrases/negations and does not determine personality, availability, consent or learning compatibility. Only existing suggested pair slots can be manually reassigned; to seek more pairs change the threshold and rerun.

Root gallery inline scripts compiled and all previous entries/categories preserved. Root combined deployment/public verification recorded separately in deployment-validation.json and live reports. Public verification is complete only when those reports exist and Pages commit matches the gh-pages head.

## Public verification completed

GitHub Pages built commit `a724fa3c6a2e87d50f1021805f1d1de1488b3653`, matching remote gh-pages. Every production file, including worker, WASM and module factory, was fetched publicly and SHA-256 matched. Full live browser suite passed at https://xianghui.github.io/daily-app2/20261106-23/ with both real-inference fixtures, review/export, cache/offline checks and defensive paths. Public gallery renders all 494 apps, AI Utilities first, legacy categories retained; search finds the new app exactly once. See deployment-validation.json, live-browser-validation.json and live-gallery-validation.json.
