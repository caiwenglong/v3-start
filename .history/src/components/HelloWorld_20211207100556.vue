<!--
 * @Author: your name
 * @Date: 2021-12-01 15:26:51
 * @LastEditTime: 2021-12-07 10:05:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\components\HelloWorld.vue
-->
<template>
  <div>
      <div v-for="website in websiteList" :key="website.websiteId">
        <div>{{website.websiteName}}</div>
      </div>

  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs } from 'vue';
import { useWebsiteStore } from '@/store/modules/website'

interface IWebsite {
  websiteId: "1",
  websiteName: "2",
  websiteLogo: "3",
  websiteUrl: "4",
}

export default defineComponent({
  setup() {
    let websiteList: IWebsite[] = []

    const websiteStore = useWebsiteStore()

    function getPageData() {
      websiteStore.aGetWebsiteList().then(res => {
        websiteList = res
        console.log(res)
      })
    }

    onMounted(async () => {
      getPageData();
    });

    return {
      websiteList
    }
  }
})
</script>


<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
