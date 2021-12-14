<!--
 * @Author: your name
 * @Date: 2021-12-13 15:09:00
 * @LastEditTime: 2021-12-13 15:44:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\layout\index.vue
-->

<template>
  <n-layout class="page-layout" has-sider>
    <n-layout-sider
      content-style="padding: 24px;"
      :native-scrollbar="false"
      show-trigger="bar"
      bordered
    >
      <Menu></Menu>
    </n-layout-sider>
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content ref="content" content-style="padding: 24px;" :native-scrollbar="false">
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
      </n-layout-content>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import Menu from '@/components/Menu/index.vue'
</script>

<style lang="scss" scoped>
.page-layout {
  height: 100%;
}
</style>