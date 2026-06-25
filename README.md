# Study Night

Study Night is a flashcard application optimized with Parcel, automated with Gulp,
and tested with Mocha/Chai and Cypress.

## Requirements

- Node.js 20
- npm 10 or later

## Install

```bash
npm install
```

## Build and serve with Gulp

The default Gulp task first creates an optimized Parcel production build in
`dist/`, then starts Parcel's development server on port 1234:

```bash
npm run gulp
```

Open `http://localhost:1234`.

## Production build

```bash
npm run build
```

Parcel writes the optimized application to `dist/`, including hashed image
assets and minified HTML, CSS, and JavaScript bundles.

## Unit tests

```bash
npm run gulp:test
```

## Cypress end-to-end tests

Keep the Parcel server running in one terminal, then run:

```bash
npm run gulp:cypress
```

The Cypress specs use independent test setup, `beforeEach`, stable `data-cy`
selectors, happy and unhappy paths, and complete workflows that combine feature
interactions with navigation and persistence checks.

## Full verification

```bash
npm run verify
```
