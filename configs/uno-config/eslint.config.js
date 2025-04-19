import config from '@vvts-mono/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default [{ files: ['**/*.{js,mjs,cjs,ts,vue}'] }, { ignores: ['**/dist/**/*'] }, ...config];
