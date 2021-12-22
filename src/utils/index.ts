/*
 * @Author: your name
 * @Date: 2021-12-13 16:17:47
 * @LastEditTime: 2021-12-13 16:17:48
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\utils\index.ts
 */

import { h } from "vue"
import { NIcon } from "naive-ui"

/**
 * render 图标
 * */

export function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

/**
 * 随机生成颜色
 */
export function randomHex(alpha?: number) {
  let r = Math.floor(Math.random() * 256) //随机生成256以内r值
  let g = Math.floor(Math.random() * 256) //随机生成256以内g值
  let b = Math.floor(Math.random() * 256) //随机生成256以内b值
  alpha = alpha ? alpha : 0.5 //随机生成1以内a值
  return `rgb(${r},${g},${b},${alpha})`
}
