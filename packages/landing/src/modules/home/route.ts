import { type RouteRecordData } from '@/router';
import { t } from '@/languages';

const Home = () => import('./views/Home.vue');

const routeData: RouteRecordData = {
  base: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: t('首页'),
        menuConfig: {
          iconClass: 'i-ics:dashboard',
          order: 1,
        },
      },
    },
  ],
};

export default routeData;
