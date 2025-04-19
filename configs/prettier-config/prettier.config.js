/** @type {import('prettier').Options} */
export default {
  tabWidth: 2, // 缩进
  useTabs: false, // 缩进方式
  semi: true, // 语句结尾是否加分号
  singleQuote: true, // 单引号
  trailingComma: 'es5',
  printWidth: 120, // 换行长度
  bracketSameLine: true,
  arrowParens: 'always', // 箭头函数参数
  bracketSpacing: true, // 对象花括号内是否加空格
  endOfLine: 'auto', // 换行符
  vueIndentScriptAndStyle: true, // vue文件内script和style标签缩进
};
