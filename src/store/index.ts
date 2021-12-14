/*
 * @Author: your name
 * @Date: 2021-12-06 11:16:51
 * @LastEditTime: 2021-12-06 14:09:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\store\index.ts
 */
import type { App } from 'vue'
import { createPinia } from 'pinia'

const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };