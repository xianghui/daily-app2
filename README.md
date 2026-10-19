# Daily App Lab 2

Fresh continuation of [Daily App Lab](https://xianghui.github.io/daily-app/), retaining the same gallery styling and React + Vite mini-game workflow without copying the old apps, dependencies, or Git history.

- Local root: `/Volumes/ExternalHD/daily_app2`
- Source: https://github.com/xianghui/daily-app2
- Gallery: https://xianghui.github.io/daily-app2/
- Original collection remains at `/Volumes/ExternalHD/daily_app` and is not modified.

## Builder workflow

Hourly (Asia/Singapore), using the existing Daily App Builder cron job and model. Create `YYYYMMDD-N/`, scaffold React + Vite, install gh-pages, set Vite base to `/daily-app2/YYYYMMDD-N/`, and implement a polished mobile-first mini game with instructions, restart, score, persistence where appropriate, and README.

Each app retains `predeploy: npm run build` and `deploy: gh-pages -d dist`. Validate the app and mobile UX before adding its entry to `const APPS` in the root gallery. Check the original gallery for previously used ideas, but do not build or write into the original tree.

```sh
npm install
npm run predeploy
npm run deploy
git add -A
git commit -m "YYYYMMDD-N: Game Name (game)"
git push origin main
```

Root predeploy assembles `deploy/index.html` and app builds in `deploy/YYYYMMDD-N/`; root deploy publishes that combined site to `gh-pages`. `npm run deploy` also invokes predeploy automatically via npm lifecycle. GitHub Pages serves the root of gh-pages.

Daily digest remains at 22:00 Asia/Singapore and scans both collections, with each app linked to its own gallery.
