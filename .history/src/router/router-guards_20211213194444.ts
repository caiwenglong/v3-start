import { isNavigationFailure, Router } from "vue-router";

export function createRouterGuards(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const Loading = window["$loading"] || null;
    Loading && Loading.start();

    Loading && Loading.finish();
  });
}
