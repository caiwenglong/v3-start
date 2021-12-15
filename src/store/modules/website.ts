import { getWebsiteList } from '@/api/website'
import { defineStore } from 'pinia'

export interface IWebsiteState {
  id: string
  name: string
  logo: string
  url: string
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
        console.log(res)
        return Promise.resolve(res)
      } catch (e) {}
    },
  },
})
