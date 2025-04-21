import { createApp } from 'vue';
import App from './App.vue';
import { initQstTheme } from '@itshixun/qst-ui-system';
import { useToggleTheme } from '@vvts-mono/common';

import './styles/index.scss';

// element-plus css variables
import 'element-plus/theme-chalk/el-var.css';
// element-plus darkmode css variables
import 'element-plus/theme-chalk/dark/css-vars.css';
// 对于仅使用组件API的组件，需要手动导入样式
import 'element-plus/theme-chalk/el-dialog.css';
import 'element-plus/theme-chalk/el-message.css';
import 'element-plus/theme-chalk/el-message-box.css';
import 'element-plus/theme-chalk/el-loading.css';

import 'virtual:uno.css';

import { router } from '@/router';
import { pinia } from '@/store';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');

initQstTheme({ initialThemeIndex: useToggleTheme().themeIndex.value });
