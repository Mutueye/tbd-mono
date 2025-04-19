import { defineConfig, loadEnv } from 'vite';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import UnoCSS from 'unocss/vite';

const envDir = path.join(__dirname + '/../../env');

// https://vitejs.dev/config/
const baseConfig = defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      version: 3,
    }),
  ],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  envDir,
});

export default defineConfig(({ mode }) => {
  // 取env环境变量配置，没取到则默认开发环境
  const viteEnvs = loadEnv(mode, envDir);
  for (const k in viteEnvs) {
    process.env[k] = viteEnvs[k];
  }

  // 要代理的地址
  const gateway = process.env.VITE_APP_GATEWAY ? process.env.VITE_APP_GATEWAY : 'https://tev.qstcloud.net';

  return {
    ...baseConfig,
    base: process.env.VITE_APP_BASE_PATH ? process.env.VITE_APP_BASE_PATH : '/',
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
      proxy: {
        '/api': {
          target: gateway,
          secure: false,
          changeOrigin: true,
        },
      },
    },
  };
});
