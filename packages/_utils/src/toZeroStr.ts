/**
 * @name toZeroStr
 * 将数字转换为指定长度的字符串，长度不够前缀0，
 * 比如targetNumLength默认为2，8转换为'08'，10转换为'10';如果目标长度为3,则9转换为'009'，34转换为'034'
 * @param num 要转换的数组
 * @param targetNumLength 要转换为的字符串的长度
 * @returns string
 */
const toZeroStr = (num: number, targetNumLength = 2) => {
  const numLength = num.toString().length;
  if (targetNumLength > numLength) {
    return `${'0'.repeat(targetNumLength - numLength)}${num.toString()}`;
  } else {
    return num.toString();
  }
};

export default toZeroStr;
