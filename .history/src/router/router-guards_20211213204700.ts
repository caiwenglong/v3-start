import { Router } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { PageEnum } from "@/enums/pageEnum";
import { ErrorPageRoute } from "@/router/base";

export function createRouterGuards(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const Loading = window["$loading"] || null;
    Loading && Loading.start();
    if (to.name === "errorPage") {
      next(PageEnum.BASE_HOME);
      return;
    }

    //添加404
    const isErrorPage = router
      .getRoutes()
      .findIndex((item) => item.name === ErrorPageRoute.name);
    if (isErrorPage === -1) {
      router.addRoute(ErrorPageRoute as unknown as RouteRecordRaw);
    }

    const redirectPath = (from.query.redirect || to.path) as string;
    const redirect = decodeURIComponent(redirectPath);
    const nextData =
      to.path === redirect ? { ...to, replace: true } : { path: redirect };
    console.log(nextData);
    next();

    Loading && Loading.finish();
  });
}
