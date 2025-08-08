import omer from "@omer-x/eslint-config";

export default [
  ...omer,
  {
    rules: {
      "@stylistic/max-len": "off"
    },
  },
];
