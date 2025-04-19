import { onMounted } from 'vue';
import { currentThemeList, currentThemeOption, setThemeClassByIndex } from '@itshixun/qst-ui-system';
import { useLocalStorage } from '@vueuse/core';

/**
 * 主题切换 通过 localStorage 持久化存储主题索引
 * @param isInit 是否为初始化，初始化时，qst-ui-system读取localStorage中的主题索引，并根据索引设置当前的主题
 * @param defaultThemeIndex 使用useLocalStorage来配置主题索引时的默认值
 */
export const useToggleTheme = (defaultThemeIndex: number = 0) => {
  const themeIndex = useLocalStorage('qst-theme-index', defaultThemeIndex);

  const changeThemeByIndex = (index: number) => {
    setThemeClassByIndex(index);
    themeIndex.value = index;
  };

  return {
    themeIndex,
    changeThemeByIndex,
    currentThemeList,
  };
};
