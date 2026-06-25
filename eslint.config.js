import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    ignores: ["dist/**", "node_modules/**", ".parcel-cache/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        console: "readonly",
        process: "readonly",
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        cy: "readonly",
        Cypress: "readonly",
        expect: "readonly"
      }
    },
    rules: {
      "no-console": "off"
    }
  }
];
