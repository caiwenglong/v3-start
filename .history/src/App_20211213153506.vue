<!--
 * @Author: your name
 * @Date: 2021-12-01 15:26:51
 * @LastEditTime: 2021-12-13 15:35:06
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
  <NConfigProvider
    v-if="!isLock"
    :locale="zhCN"
    :theme="getDarkTheme"
    :theme-overrides="getThemeOverrides"
    :date-locale="dateZhCN"
  >
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>

<script setup lang='ts'>


</script>






<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}

.website-item {
  border-radius: 4px;
  .item-logo {
    width: 100%;
    height: 100px;
    & > img {
      max-width: 100%;
      height: 100%;
    }
  }
}

.light-green {
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
