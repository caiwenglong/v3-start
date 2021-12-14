/*
 * @Author: your name
 * @Date: 2021-12-13 14:46:39
 * @LastEditTime: 2021-12-13 15:53:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\router\index.ts
 */
import { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const modules = import.meta.globEager("./modules/**/*.ts");

const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

function sortRoute(a, b) {
  return (a.meta?.sort || 0) - (b.meta?.sort || 0);
}

routeModuleList.sort(sortRoute);

export const RootRoute: RouteRecordRaw = {
  path: "/",
  name: "",
  redirect: "/home",
  meta: {
    title: "home",
  },
};

export const HomeRoute: RouteRecordRaw = {
  path: "/home",
  name: "home",
  component: () => import("@/layout/index.vue"),
  meta: {
    title: "主页",
  },
};

export const asyncRouter: any[] = [...routeModuleList];

// 固定路由
export const constantRouter: any[] = [RootRoute, HomeRoute];

const router = createRouter({
  history: createWebHashHistory(""),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
