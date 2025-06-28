module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  rules: {
    semi: ["error", "always"],
    "@typescript-eslint/no-unused-vars": "error",
    "react/prop-types": "off",
  },
};
