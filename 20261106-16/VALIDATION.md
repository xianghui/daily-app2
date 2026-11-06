# Validation — 2026-11-06

Production Vite bundle tested in real headless Chrome with CPU/WASM inference; see browser-validation.json and reproducible browser-test.cjs.

- Actual MiniLM q8 model downloaded and encoded two different 4-source / 4-destination datasets. Shop destinations: billing, delivery, returns, account recovery; library destinations: gardening, cycling, baking, astronomy. All eight known-answer mappings selected at cosine threshold 0.35. Shop cosines: 0.628, 0.662, 0.585, 0.726; library: 0.684, 0.725, 0.738, 0.803. Tiny synthetic check only, not a general accuracy benchmark. Exact-path baseline: 0/4 for both fixtures.
- 24 source pages plus 4 destinations processed across batches; all 24 preserved, two expected destinations selected. Text import tested with a different two-row input.
- Reviewed destination edit, rejection, undo, note edit, apply, post-apply invalidation, JSON download, CSV download and clipboard copy passed. Downloaded CSV parsed with Python csv.DictReader and compared field-for-field to JSON: all four records, quote/comma note and unresolved mapping preserved.
- Empty input, invalid URLs, duplicate paths, overlong descriptions and unsupported import rejected. Unit checks also cover traversal, query/protocol-relative paths, 25-page input and malformed vectors. Model failures never generate substitute matches.
- Cancel/retry and source change during an active run left no stale results. Network blocked in a fresh browser context produced an actionable error and no mappings; unblocking and retry loaded the actual model. Unsupported Worker, malformed vectors and deadline paths tested with explicit failure injection; successful workflow tests never mock inference.
- Already-loaded page ran fully offline with a fresh worker after caching. Online reload made no extra model-host requests. Offline navigation/reopening not promised.
- Network audit: 14 external GET/HEAD requests to huggingface.co and us.aws.cdn.hf.co; no request bodies/user-content uploads. No network before explicit AI invocation except same-origin app assets. No API integration or credentials used.
- Desktop 1440px and narrow 390/320px viewports: screenshots recorded, no horizontal overflow, labels and keyboard focus present; 320px screenshot visually inspected. Physical phones and other browsers not tested.
- Build and core-test.mjs passed. Public deployment results are recorded separately in live-browser-validation.json and deployment-validation.json after Pages verification.

Additional real inference check: raising the cosine threshold to 0.80 left all four shop source pages unresolved, rather than inventing destinations. Root predeploy assembled 487 apps with zero failures/skips. Gallery inline script compiled and the exact new entry/category plus all previous entries were preserved.

## Public deployment verification

GitHub Pages finished building gh-pages commit `9157c1f7c2f3699894222ac553386726a2959e93`. verify-deployment.py verified every deployed production file byte-for-byte, including the actual worker, WASM, local runtime factory and favicon. Public gallery rendered AI Utilities first with previous STL Generators and Mini Games sections intact, and exactly one Redirect Desk entry. No SaaS section was populated before or after this change; its category support is preserved.

The complete browser suite then passed against https://xianghui.github.io/daily-app2/20261106-16/, including both real model fixtures, batch24, review/edit/rejection/undo, downloaded artifacts/copy, offline fresh-worker inference, cached reload, cancellation/stale guards, 1440/390/320 layouts and failure injections. See live-browser-validation.json, live-gallery-validation.json and deployment-validation.json. Public-run CSV/JSON artifacts also round-tripped exactly. Source lint passed; no embedded credential patterns found in source/build assets. No user/provider credentials were used.

An early public test ran while Pages was still building and received the not-yet-published page; it was rerun successfully once the expected commit reached built. Initial supplemental test harness assertions were corrected (range input requires `0.8`, and unpopulated SaaS categories do not render a section); the corrected actual inference and combined-gallery tests passed. No application workaround or fake model was introduced.
