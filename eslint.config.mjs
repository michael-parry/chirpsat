// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  // base configs
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,

  // custom rules
  {
    rules: {
      // disable the base rule
      "no-unused-expressions": "off",
      // enable TypeScript version with allowTernary
      "@typescript-eslint/no-unused-expressions": ["error", { allowTernary: true, allowShortCircuit: true }]
    }
  }
]);
