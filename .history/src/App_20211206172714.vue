<!--
 * @Author: your name
 * @Date: 2021-12-01 15:26:51
 * @LastEditTime: 2021-12-06 17:27:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\App.vue
-->


<template>
  <div>
    <div v-for="w in getPageData()">
      <div>{{ w.websiteId }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useWebsiteStore } from '@/store/modules/website'


const websiteStore = useWebsiteStore();
interface IWebsite {
  websiteId: "1",
  websiteName: "2",
  websiteLogo: "3",
  websiteUrl: "4",
}
let websiteList =  reactive([])

function getPageData() {
  websiteStore.aGetWebsiteList().then(res => {
    return res
  })
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
