<!--
 * @Author: your name
 * @Date: 2021-12-01 15:26:51
 * @LastEditTime: 2021-12-07 15:38:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\components\HelloWorld.vue
-->
<template>
  <div>
    111
      <div v-for="website in list" :key="website.websiteId">
        <div>{{website.websiteName}}</div>
      </div>

  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { useWebsiteStore } from '@/store/modules/website'

interface IWebsite {
  websiteId: "1",
  websiteName: "2",
  websiteLogo: "3",
  websiteUrl: "4",
}

export default defineComponent({
  setup() {
    let list: IWebsite[] = reactive([]);
    const state = reactive({
      websiteList: []
    })

    const websiteStore = useWebsiteStore()

    function getPageData() {
      websiteStore.aGetWebsiteList().then(res => {
        state.websiteList = res
        list.values = res
        res.forEach(e => {
    arr.push(e);
  });
        console.log(res)
      })
    }

    onMounted(async () => {
      getPageData();
    });

    return {
      ...toRefs(state),
      list
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
