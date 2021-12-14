import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/router/constant";

/*
 * @Author: your name
 * @Date: 2021-12-13 15:01:13
 * @LastEditTime: 2021-12-13 15:42:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\router\modules\home.ts
 */
const routeName = "home";

const routes: Array<RouteRecordRaw> = [
  {
    path: "home",
    name: routeName,
    component: Layout,
    meta: {
      title: "home",
    },
  },
];

export default routes;
