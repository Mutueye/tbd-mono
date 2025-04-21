import { type RouteRecordData } from '@/router';
import NotFound from './views/NotFound.vue';

const routeData: RouteRecordData = {
  base: [
    {
      path: '/notfound',
      name: 'notfound',
      component: NotFound,
    },
  ],
};

export default routeData;
