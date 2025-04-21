import { type RouteRecordData } from '@/router';

const Home = () => import('./views/Home.vue');

const routeData: RouteRecordData = {
  base: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
        menuConfig: {
          iconClass: 'i-ics:dashboard',
          order: 1,
        },
      },
    },
  ],
};

export default routeData;
