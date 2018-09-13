module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: "module"
  },
  parser: "typescript-eslint-parser",
  plugins: ["typescript"],
  rules: {
    "no-undef": "off",
    "no-unused-vars": "off",
    indent: ["error", 2],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "single"],
    semi: ["error", "always"]
  }
};
