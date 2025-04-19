import { type RouteRecordData } from '@/router';
import About from './views/About.vue';

const routeData: RouteRecordData = {
  base: [
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
};

export default routeData;
