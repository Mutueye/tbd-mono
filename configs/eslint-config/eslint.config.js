import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import pluginPrettierRecommendedConfigs from "eslint-plugin-prettier/recommended";
// import multiWordComponentNames from "eslint-plugin-vue/lib/rules/multi-word-component-names";
// import parserVue from 'vue-eslint-parser'

// export default [
//   { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
//   { languageOptions: { globals: globals.browser } },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   ...pluginVue.configs["flat/essential"],
//   {
//     files: ["**/*.vue"],
//     languageOptions: { parserOptions: { parser: tseslint.parser } },
//   },
// ];

/** @type {import('eslint').Linter.Config[]} */
export default [
  // eslint 默认推荐规则
  pluginJs.configs.recommended,
  // ts 默认推荐规则
  ...tseslint.configs.recommended,
  // vue3 基础推荐规则
  ...pluginVue.configs["flat/recommended"],
  // prettier 默认推荐规则，these recommended rules automatically enables eslint-config-prettier to disable all formatting-related ESLint rules.
  pluginPrettierRecommendedConfigs,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
      },
      ecmaVersion: 2020,
      // parser: parserVue,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    files: ["**/*.vue"],
    rules: {
      "vue/multi-word-component-names": 0,
    },
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-unused-vars": 0,
    },
  },
];
