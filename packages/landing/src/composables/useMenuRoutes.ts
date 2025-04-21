import { type RouteRecordRaw, useRouter } from 'vue-router';
import type { MenuConfig, MenuItemData } from '@vvts-mono/types';

/**
 * @name useMenuRoutes
 * @description 根据vue-router的路由表，获取指定layout路由下的菜单路由数组
 * @param {string} layoutRouteName  布局路由(根路由)的名称，菜单路由数组从该布局路由下获取
 * @param {function} customFilter 自定义的路由数组过滤方法，比如增加权限过滤等自定义过滤功能
 */
export const useMenuRoutes = (layoutRouteName: string, customFilter?: (routes: MenuItemData[]) => MenuItemData[]) => {
  const router = useRouter();

  /** 获取菜单路由数组 */
  const getMenuDataFromRoutes = () => {
    const layoutRoute = router.getRoutes().find((route) => route.name === layoutRouteName);
    let result: MenuItemData[] = [];
    if (layoutRoute && layoutRoute.children) {
      result = recursiveMenuData(layoutRoute.children);
    }
    return result;
  };

  /** 递归获取菜单路由数组 */
  const recursiveMenuData = (routes: RouteRecordRaw[]) => {
    let result: MenuItemData[] = [];
    routes.forEach((route) => {
      if (route.meta && route.meta.menuConfig && !(route.meta.menuConfig as MenuConfig).hidden) {
        // 拼接完整的path
        // const path = route.path.startsWith('/') ? route.path : parentRoutePath + '/' + route.path;
        if (!route.name) {
          console.warn(`路由${route.path}的name属性为空，请检查路由配置`);
        }
        const menuItemData: MenuItemData = {
          name: route.name?.toString() || '',
          meta: { title: route.meta.title as string, menuConfig: route.meta.menuConfig as MenuConfig },
        };
        if (route.children && route.children.length > 0) {
          menuItemData.children = recursiveMenuData(route.children);
        }
        result.push(menuItemData);
      }
    });
    if (typeof customFilter === 'function') {
      result = customFilter(result);
    }

    return result.sort((a, b) => {
      const orderA = a.meta?.menuConfig?.order || 1000;
      const orderB = b.meta?.menuConfig?.order || 1000;
      return orderA - orderB;
    });
  };

  /** 获取指定路由对应的激活菜单对应的(路由path) */
  const getMenuRouteNameFromRoute = <T extends MenuItemData>(route: T) => {
    if (route && route.meta && route.meta.menuConfig) {
      // activeMenuPath对应的路由数据的meta信息中有需要有menuConfig
      if ((route.meta.menuConfig as MenuConfig).activeRouteName) {
        return (route.meta.menuConfig as MenuConfig).activeRouteName?.toString();
      } else {
        return route.name.toString();
      }
    } else {
      return '';
    }
  };

  const getActiveRouteName = () => {
    const route = router.currentRoute.value;
    const menuRouteName = getMenuRouteNameFromRoute({ name: route.name?.toString() || '', meta: route.meta });
    return menuRouteName || '';
  };

  return { getMenuDataFromRoutes, getMenuRouteNameFromRoute, getActiveRouteName };
};
