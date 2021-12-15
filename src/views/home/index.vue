<template>
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
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useWebsiteStore } from '@/store/modules/website'

const websiteStore = useWebsiteStore()
interface IWebsite {
  websiteId: '1'
  websiteName: '2'
  websiteLogo: '3'
  websiteUrl: '4'
}

let websiteList: IWebsite[] = reactive([])

function getPageData() {
  websiteStore.aGetWebsiteList().then((res) => {
    console.log(res)
    console.log(websiteList)
  })
}

getPageData()
</script>
