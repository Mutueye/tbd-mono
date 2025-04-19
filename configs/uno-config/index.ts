import {
  defineConfig,
  presetIcons,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  UserConfig,
} from 'unocss';
import { Theme } from 'unocss/preset-mini';
import { generateUnocssTheme } from '@itshixun/qst-ui-system';
import { iconCollection, iconCollectionName } from './iconCollection';

export const theme: Theme = Object.assign(generateUnocssTheme(), {
  breakpoints: {
    sm: '640px',
    md: '768px',
    df: '900px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
    xxxl: '1860px',
  },
});

/** 将上方自定义的svg图表类明生成列表，传给下面配置中的safeList，保证动态嵌入的自定义图标样式有效 */
export const getIconCollectionList = () => {
  const list: string[] = [];
  for (const key in iconCollection) {
    list.push(`i-${iconCollectionName}:${key}`);
  }
  return list;
};

const config: UserConfig = defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1,
      warn: true,
      collections: {
        [iconCollectionName]: iconCollection,
      },
    }),
  ],
  // unocss can't render icon class dynamically, when adding menu icon class
  // in route.meta.menuConfig, you must also add the icon class in safelist.
  safelist: [
    ...getIconCollectionList(),
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',
    'grid-cols-7',
    'grid-cols-8',
    'grid-cols-9',
    'grid-cols-10',
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme,
  shortcuts: [
    {
      'flex-row-center': 'flex flex-row items-center justify-center',
      'flex-row-between': 'flex flex-row items-center justify-between',
      'flex-col-center': 'flex flex-col items-center justify-center',
      'flex-col-between': 'flex flex-col items-center justify-between',
    },
  ],
});

export default config;
