import { listMenu } from "@/api/menu";
import { defineStore } from "pinia";

export const useMenuStore = defineStore({
  id: "store-menu",
  state: () => ({}),
  getters: {},

  actions: {
    async aGetMenuList() {
      try {
        const res = await listMenu();
        return Promise.resolve(res);
      } catch (e) {}
    },
  },
});
