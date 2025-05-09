/**
 * 多项目共用的常见类型定义，添加到 tsconfig 的 compilerOptions.types 字段
 * common types shared between muliple projects. add this package to tsconfig's compilerOptions.types
 */

import 'vue-router';
import { RouteMeta, RouteRecordNameGeneric } from 'vue-router';

export interface MenuConfig {
  /** 菜单图标样式名称 */
  iconClass?: string;
  /** 菜单顺序号 */
  order?: number;
  /** 不在菜单中显示  */
  hidden?: boolean;
  /** 指定要高亮的菜单对应的路由name */
  activeRouteName?: string;
  /** 菜单权限表达式 */
  perm?: string | string[];
  /** 指定跳转的路由path或标准url*/
  linkPath?: string;
  /** 是否新标签打开 */
  blank?: boolean;
}

export interface MenuItemData {
  /** vue-router的name，用于匹配路由 */
  name: string;
  /** vue-router的meta数据 */
  meta?: RouteMeta;
  children?: MenuItemData[];
}

/** augment RoutMeta interface. */
declare module 'vue-router' {
  /** 路由meta数据 */
  interface RouteMeta {
    /** 页面标题 */
    title: string;
    /** i18n标题 .e.g {'zh-CN': '首页', 'en-US': 'HOME'} */
    i18ntitle?: Record<string, string>;
    /** layout菜单通过遍历路由树的menuConfig来生成菜单树 */
    menuConfig?: MenuConfig;
    /** 当前路由是否不需要登录即可访问。默认路由需要登录，在路由拦截器判断如果当前没有登录，跳转到登录页，除非当前路由meta.isPublic设为true */
    isPublic?: boolean;
  }
}

/** 全局类型定义 */
// declare global {
//   interface Window {
//     exampleKey: string
//   }
// }
