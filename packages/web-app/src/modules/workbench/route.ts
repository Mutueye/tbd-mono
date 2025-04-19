import { type RouteRecordData } from '@/router';
import Dashboard from './dashboard/views/Dashboard.vue';
import ExampleA from './exampleA/views/ExampleA.vue';
import ExampleB from './exampleB/views/ExampleB.vue';

const routeData: RouteRecordData = {
  workbench: [
    {
      path: '/workbench',
      name: 'workbench_home',
      redirect: '/workbench/dashboard',
    },
    {
      path: 'dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        title: '仪表盘',
        menuConfig: {
          iconClass: 'i-uplus:dashboard',
          order: 1,
        },
      },
    },
    {
      path: 'example_a',
      name: 'example_a',
      meta: {
        title: '示例A',
        menuConfig: {
          iconClass: 'i-uplus:dashboard',
          order: 2,
        },
      },
      component: ExampleA,
    },
    {
      path: 'example_b',
      name: 'example_b',
      meta: {
        title: '示例B',
        menuConfig: {
          iconClass: 'i-uplus:dashboard',
        },
      },
      component: ExampleB,
    },
    {
      path: 'yard_link',
      redirect: '/yard',
      meta: {
        title: '广场',
        menuConfig: {
          iconClass: 'i-uplus:dashboard',
        },
      },
    },
    {
      path: 'example_outer_link',
      redirect: 'https://www.baidu.com',
      meta: {
        title: '外链',
        menuConfig: {
          iconClass: 'i-uplus:dashboard',
          linkPath: 'https://www.baidu.com',
          blank: true,
        },
      },
    },
  ],
};

export default routeData;
