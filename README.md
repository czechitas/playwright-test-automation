# Prerequisites

First you should check if you have playwright installed globally.

`npm list -g`

If not, then you need to install it.

`npm install -g playwright`

You also want to install browsers so framework can run tests against them (chromium will do for our examples)
`npx playwright install --with-deps chromium`

# How to start the tests locally

Start by downloading the required packages

`npm install`

Then you can run the tests

`npm run test`
