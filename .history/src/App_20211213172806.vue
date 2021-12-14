<!--
 * @Author: your name
 * @Date: 2021-12-01 15:26:51
 * @LastEditTime: 2021-12-13 15:36:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\App.vue
-->


<!-- <template>
  <div>
    <n-grid :x-gap="12" :y-gap="8" :cols="4">
      <n-grid-item v-for="w in websiteList">
        <div class="website-item green">
          <div class="item-logo">
            <img :src="w.websiteLogo" :alt="w.websiteName" />
          </div>
        </div>
      </n-grid-item>
    </n-grid>
  </div>
</template> -->




<!-- <script setup lang="ts">
import { reactive } from 'vue'
import { useWebsiteStore } from '@/store/modules/website'


const websiteStore = useWebsiteStore();
interface IWebsite {
  websiteId: "1",
  websiteName: "2",
  websiteLogo: "3",
  websiteUrl: "4",
}

let websiteList: IWebsite[] = reactive([])

function getPageData() {
  websiteStore.aGetWebsiteList().then(res => {
    res.forEach(item => {
      websiteList.push(item)
    })
    console.log(websiteList)
  })
}

getPageData();


</script> -->


<template>
  <NScrollbar>
    <div class="page-app">
      <NConfigProvider>
        <AppProvider>
          <RouterView />
        </AppProvider>
      </NConfigProvider>
    </div>
  </NScrollbar>
</template>

<script setup lang='ts'>

import { AppProvider } from './components/Application';

</script>






<style lang="scss">
@import "styles/index.scss";
</style>
