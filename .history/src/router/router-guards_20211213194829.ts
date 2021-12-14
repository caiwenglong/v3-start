import { Router } from "vue-router";
import { PageEnum } from "@/enums/pageEnum";

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
