import { isNavigationFailure, Router } from "vue-router";

export function createRouterGuards(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const Loading = window["$loading"] || null;
    Loading && Loading.start();

    if (to.name === "errorPage") {
      next(PageEnum.BASE_HOME);
      return;
    }
    Loading && Loading.finish();
  });
}
