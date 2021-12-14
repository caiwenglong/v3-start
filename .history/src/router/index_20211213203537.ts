import { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { PageEnum } from "@/enums/pageEnum";
import { ErrorPageRoute } from "@/router/base";
import { Layout, Home } from "@/router/constant";

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
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: "home",
  },
};

export const HomeRoute: RouteRecordRaw = {
  path: PageEnum.BASE_HOME,
  name: "home",
  component: Layout,
  meta: {
    title: "主页",
  },
  children: [
    {
      path: "",
      component: Home,
      meta: {
        title: "主页",
      },
    },
  ],
};

export const asyncRouter: any[] = [...routeModuleList];

// 固定路由
export const constantRouter: any[] = [RootRoute, HomeRoute, ErrorPageRoute];

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
