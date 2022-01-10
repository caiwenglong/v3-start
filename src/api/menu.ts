import http from "@/utils/https/axios"

// 查询菜单列表
export function getAllMenus() {
  return http.request(
    {
      url: "/api/uInterface/tb-menu/getAllTbMenus",
      method: "get",
    },
    {
      isShowMessage: true,
    }
  )
}

export function updateTbMenu(menuId: string, menuName: string) {
  return http.request(
    {
      url: `/api/uInterface/tb-menu/updateTbMenu/${menuId}/${menuName}`,
      method: "get",
    },
    {
      isShowMessage: true,
    }
  )
}
