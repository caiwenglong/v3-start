import { Router } from "vue-router"

/**
 * 路由守卫
 * @param router
 */
export function createRouterGuards(router: Router) {
  router.beforeEach(async (to, from, next) => {
    // console.log(to);
    // console.log(from);
    console.log(1)
    next()
  })
}
