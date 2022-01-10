import { getAllMenus, updateTbMenu } from "@/api/menu"
import { defineStore } from "pinia"

export const useMenuStore = defineStore({
  id: "store-menu",
  state: () => ({}),
  getters: {},

  actions: {
    async aGetMenuList() {
      try {
        const res = await getAllMenus()
        return Promise.resolve(res)
      } catch (e) {}
    },

    async aUpdateTbMenu(menuId: string, menuName: string) {
      try {
        const res = await updateTbMenu(menuId, menuName)
        return Promise.resolve(res)
      } catch (e) {}
    },
  },
})
