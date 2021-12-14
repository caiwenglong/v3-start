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
      show-trigger="bar"
      bordered
      :native-scrollbar="false"
      :inverted="state.inverted"
    >
      <Menu></Menu>
    </n-layout-sider>
    <n-layout>
      <n-layout-content ref="content" content-style="padding: 24px;" :native-scrollbar="false">
        <MainView />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { MainView } from '@/components/Main';

import Menu from '@/components/Menu/index.vue'

const state = reactive({
  inverted: true
})

</script>

<style lang="scss" scoped>
.page-layout {
  height: 100%;
}
</style>