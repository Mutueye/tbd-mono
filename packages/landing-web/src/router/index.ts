import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { generateLayoutBasedRoutes, type LayoutRouteRecordData } from '@itshixun/vrouter-tools';
import BaseLayout from '@/layout/base/BaseLayout.vue';
import WorkbenchLayout from '@/layout/workbench/WorkbenchLayout.vue';

/**
 * 框架路由名称列表
 */
export type LayoutRouteNames = 'base' | 'workbench' | 'yard';
export type RouteRecordData = LayoutRouteRecordData<LayoutRouteNames>;

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/notfound',
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_PATH),
  routes: generateLayoutBasedRoutes<LayoutRouteNames>({
    staticRoutes: routes,
    moduleRoutes: import.meta.glob('@/modules/**/*/route.ts', { eager: true }),
    layoutRoutesConfig: [
      { name: 'base', component: BaseLayout },
      { name: 'workbench', component: WorkbenchLayout },
      // yard和workbench使用相同的布局组件
      { name: 'yard', component: WorkbenchLayout },
    ],
  }),
});
