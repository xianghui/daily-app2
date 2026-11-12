# Observed validation — 2026-11-12

## Production app and real model

React + Vite production build passed. Headless installed desktop Chrome with GPU disabled ran the actual q8 MiniLM model through WASM CPU; successful fixture inference was not mocked.

- Beverage shifts: 4/4 intended identities (`fill, pack, fill, pack`). Pooled ideal good 855 / planned 1320 minutes = OEE 0.64772727. Stop/speed/reject = 270/130/65 minutes. Unweighted shift mean 0.646875.
- Print-room shifts: 4/4 intended identities (`cut, press, cut, press`). Pooled ideal good 697.5 / planned 960 = OEE 0.7265625. Stop/speed/reject = 140/80/42.5. Unweighted mean 0.6553125.
- Exact-title lookup recognizes 0/4 in each fixture; real semantic inference supplies machine links and therefore machine-specific grouping. These eight tiny answers are not a general accuracy estimate.
- Unrelated instruction-like text mislinked to `fill`. It remained pending; holding blocked release. This demonstrates the limitation, not successful adversarial understanding.

## Calculations and schemas

3,000 seeded randomized cases compared OEE and each loss against independent BigInt-seconds sums; bounds, A×P×Q identity and loss-minute conservation passed. Fixture totals, parse/envelope round trips, numeric guards, malformed vectors, pending/held review and duplicate machine/shift guards passed. The initial hand-written fixture oracle totals were corrected from 785/691.5 to independently recomputed 855/697.5; no implementation change was needed.

## Workflow and defensive behavior

Both fixture flows; required approval; editable counts/notes; export invalidation; hold/reject; undo; clipboard; JSON reimport restores originals and clears approvals; empty/malformed/oversized input; numeric errors; duplicate blocking; cancellation/retry; input changes; all 24 shifts through four-text batches; maximum-envelope reimport passed. Actual downloaded CSV/JSON/Markdown independently reopened with Python, preserving every ID and edited good count; multiline comma/quote formula text was escaped; Loss CSV reconciled to JSON and planned totals.

Fault injection was used **only for defensive checks**: unavailable Worker, unavailable WebAssembly in the actual worker, download failure, malformed vectors, worker error, timeout and an old worker ignoring termination. Each produced no fabricated result; late old valid vectors could not overwrite newer inputs. Real model-host download cancellation, delayed worker fetch, delayed file read and subsequent real inference retry passed. Network failure/recovery passed.

## Privacy, assets, offline, layout

Browser-context request capture from startup through inference observed GET-only/no-body downloads, no fixture text in URLs and no model requests before explicit loading. Local app/blob plus huggingface.co and us.aws.cdn.hf.co were observed; no content-upload endpoint exists. Built JS/MJS credential-pattern scan found none; this is not a universal secret detector. Worker/factory are locally bundled and shared WASM is hash-audited.

After online success, offline mode blocked all network, and a **fresh terminated/recreated worker** performed real inference in the already-open warmed production page. Reload/navigation offline was not tested and is not promised. Desktop 1440px and phone-emulated 390/320px had no page overflow, labeled forms, focus controls and working actions; screenshots saved. A 390px touch-emulated Chrome context also tapped the second fixture and performed real inference; 14 initially visible controls were all at least 44px tall. Physical phones/other browser engines untested.

Gallery/combined/public checks are recorded in the corresponding JSON reports after publishing. Source files and all validation artifacts contain synthetic data only.

## Public release

The first root combined deployment succeeded. GitHub Pages commit `e8b4e8818d0dfe22c244de6b981a884f514e83bf` reached `built`. Every public app file, bundled worker, runtime factory and shared WASM was byte-matched against the production build. Both real-AI fixtures and the complete workflow suite (including offline fresh-worker inference, 24-row batch and downloaded artifact round trips) passed at the public URL. The public gallery rendered Shift Prism first, AI Utilities before legacy categories, and all 623 previous entries preserved (624 total). Touch emulation was tested on the equivalent local production build; physical devices remain untested.
