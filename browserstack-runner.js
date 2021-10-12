const reporter = require('mocha/lib/reporters').min;
const bridgeTests = require('mocha-selenium-bridge');
const { Builder } = require('selenium-webdriver');

const bsConfig = {
	project: 'js-api',
	'browserstack.local': 'true',
	'browserstack.user': process.env.BROWSERSTACK_USER,
	'browserstack.key': process.env.BROWSERSTACK_KEY,
	'browserstack.localIdentifier': 'abc123',
	'forceLocal': 'true'
};

const PORT = 3000;
const url = `http://localhost:${PORT}/tests/test.html`;

/* eslint-disable camelcase */
exports.testBrowser = async function (browserName, browser_version) {
	const cap = { browserName, browser_version, ...bsConfig };
	const driver = new Builder()
		.usingServer('http://hub-cloud.browserstack.com/wd/hub')
		.withCapabilities(cap)
		.build();
	const code = await bridgeTests(driver, reporter, url, { timeout: 20000 });
	driver.quit();
	if (code > 0) throw new Error(`Failed ${code} tests`);
	if (code < 0) throw new Error(`MSB error ${code}`);
};