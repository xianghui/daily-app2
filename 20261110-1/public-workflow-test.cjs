// Runs the same real-model workflow suite against Pages, never mocks successful inference.
process.env.TEST_URL='https://xianghui.github.io/daily-app2/20261110-1/';
process.env.REPORT='public-browser-validation.json';
require('./browser-test.cjs');
