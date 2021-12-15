<template>
  <n-menu @update:value="handleUpdateValue" :options="menuOptions" :inverted="state.inverted" />
  <n-divider />
  <div class="menu-add">添加菜单</div>
</template>

<script setup lang="ts">
import { useMessage } from "naive-ui"
import { h, reactive } from "vue"
import { renderIcon } from "@/utils/index"
import { useMenuStore } from "@/store/modules/menu"
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5"

// const menuStore = useMenuStore()

const menuOptions = []
const state = reactive({
  inverted: true,
})

const message = useMessage()

const getMenuData = () => {
  /* menuStore.aGetMenuList().then(res => {
    console.log(res)
  }) */
}

getMenuData()

const handleUpdateValue = (key, item) => {
  message.info("[onUpdate:value]: " + JSON.stringify(key))
  message.info("[onUpdate:value]: " + JSON.stringify(item))
}
</script>
