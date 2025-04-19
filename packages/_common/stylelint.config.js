/** @type {import('stylelint').Config} */
export default {
  extends: ['@vvts-mono/stylelint-config'],
  ignoreFiles: ['node_modules/**/*', 'dist/**/*', 'public/**/*', '.vscode/**/*'],
};
