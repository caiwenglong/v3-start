/*
 * @Author: your name
 * @Date: 2021-12-06 14:10:18
 * @LastEditTime: 2021-12-06 16:16:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\store\modules\website.ts
 */
import { getWebsiteList } from "@/api/website";
import { defineStore } from "pinia";

export interface IWebsiteState {
  id: string,
  name: string,
  logo: string,
  url: string,
}

export const useWebsiteStore = defineStore({
  id: 'store-website',
  state: (): IWebsiteState => ({
    id: '',
    name: '',
    logo: '',
    url: '',
  }),

  getters: {},
  
  actions: {
    async aGetWebsiteList() {
      try {
        const res = await getWebsiteList()
        return Promise.resolve(res);
      } catch (e) {
        
      }
    }
  }

})