import { Router } from "vue-router";

export function createRouterGuards(router: Router) {
  router.beforeEach(async (to, from, next) => {
    console.log(to);
    console.log(from);

    next();
  });
}
