<!--
 * @Author: your name
 * @Date: 2021-12-13 15:09:00
 * @LastEditTime: 2021-12-13 15:44:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\layout\index.vue
-->

<template>
  <n-layout has-sider>
    <n-layout-sider content-style="padding: 24px; height: 100px;">
      <Menu></Menu>
    </n-layout-sider>
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content content-style="padding: 24px;">平山道</n-layout-content>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import Menu from '@/components/Menu/index.vue'

console.log(1)
</script>