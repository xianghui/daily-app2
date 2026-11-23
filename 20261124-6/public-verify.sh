#!/bin/bash
set -e
ASSET_BASE=https://xianghui.github.io/daily-app2/ PREFIX=public- python3 asset-test.py
ASSET_BASE=https://xianghui.github.io/daily-app2/ LEGACY_ASSET_REPORT=public-legacy-asset-validation.json python3 legacy-asset-test.py
GALLERY_URL=https://xianghui.github.io/daily-app2/ PREFIX=public- node gallery-browser-test.cjs
APP_URL=https://xianghui.github.io/daily-app2/20261124-6/ PREFIX=public- node browser-test.cjs
PREFIX=public- /tmp/glyph-validation-venv/bin/python artifact-test.py
LEGACY_ORIGIN=https://xianghui.github.io LEGACY_REPORT=public-legacy-runtime-validation.json node legacy-runtime-test.cjs
