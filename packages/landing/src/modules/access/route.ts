import { type RouteRecordData } from '@/router';

const Access = () => import('./views/Access.vue');

const routeData: RouteRecordData = {
  base: [
    {
      path: '/access',
      name: 'access',
      component: Access,
      meta: {
        title: '接入',
        menuConfig: {
          iconClass: 'i-ics:dashboard',
          order: 2,
        },
      },
    },
  ],
};

export default routeData;
