/*
 * @Author: your name
 * @Date: 2021-12-13 16:17:47
 * @LastEditTime: 2021-12-13 16:17:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE/**
 * render 图标
 * */
export function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

 * @FilePath: \my-vue-app\src\utils\index.ts
 */
