# Mocha Browserstack Bridge Demo

This aims to be a minimum example of running mocha DOM tests (not pure JS tests) within an HTML file in a selenium cloud like browserstack.

### How to start

1. `cp .env.example .env` and fill in your values
2. `npm i`
3. `npm run test`

Currently, there will be an error, which is yet to be fixed:

```
WebDriverError: [browserstack.local] is set to true but local testing through BrowserStack is not connected.
```