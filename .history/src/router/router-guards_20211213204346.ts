import { Router } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { PageEnum } from "@/enums/pageEnum";
import { ErrorPageRoute } from "@/router/base";

export function createRouterGuards(router: Router) {
  router.beforeEach(async (to, from, next) => {});
}
