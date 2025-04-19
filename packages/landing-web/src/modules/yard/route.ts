import { type RouteRecordData } from '@/router';
import PageMocker from '@/components/PageMocker.vue';

const routeData: RouteRecordData = {
  yard: [
    {
      path: '/yard',
      name: 'yard_home',
      redirect: '/yard/yard_a',
    },
    {
      path: 'yard_a',
      name: 'yard_a',
      component: PageMocker,
      meta: {
        title: '广场A',
        menuConfig: {
          iconClass: 'i-uplus:dashboard',
          order: 1,
        },
      },
    },
    {
      path: 'yard_b',
      name: 'yard_b',
      component: PageMocker,
      meta: {
        title: '广场B',
        menuConfig: {
          iconClass: 'i-uplus:dashboard',
          order: 2,
        },
      },
    },
  ],
};

export default routeData;
