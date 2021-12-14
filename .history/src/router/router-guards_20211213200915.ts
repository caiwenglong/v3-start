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

    Loading && Loading.finish();
  });
}
