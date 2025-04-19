/**
 * 拼接url路径
 * @param ...paths - 路径
 * @example
 * // https://www.baidu.com/a/b/c/d
 * joinPath('https://www.baidu.com/', '/a/b/c/', '/d/')
 */
export const joinPath = (...paths: string[]) => {
  const res: string[] = [];
  paths.forEach((path, index) => {
    let str = path;
    if (path.startsWith('/') && index !== 0) {
      str = path.slice(1);
    }
    if (str.endsWith('/') && index !== paths.length - 1) {
      str = str.slice(0, str.length - 1);
    }
    res.push(str);
  });
  return res.join('/');
};
