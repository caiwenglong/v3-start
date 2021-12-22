/*
 * @Author: your name
 * @Date: 2021-12-01 15:26:51
 * @LastEditTime: 2021-12-13 15:00:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\main.ts
 */
import { createApp } from "vue"
import App from "./App.vue"
import router, { setupRouter } from "./router"
import { setupNaive } from "@/plugins"
import { setupStore } from "@/store"

import { AppProvider } from "@/components/Application"

import VueGridLayout from "vue-grid-layout"

const app = createApp(App)
const appProvider = createApp(AppProvider)

setupNaive(app)
//优先挂载一下 Provider 解决路由守卫，Axios中可使用，Dialog，Message 等之类组件
appProvider.mount("#appProvider", true)

// 挂载状态管理
setupStore(app)

// 挂载路由
await setupRouter(app)
// 路由准备就绪后挂载APP实例
await router.isReady()

app.use(VueGridLayout)

app.mount("#app")
