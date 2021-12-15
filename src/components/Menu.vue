<template>
  <n-menu
    @update:value="handleUpdateValue"
    :options="menuOptions"
    :location="location"
  />
</template>

<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { h, reactive } from 'vue'
import { renderIcon } from '@/utils/index'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from '@vicons/ionicons5'

const menuOptions = []

const props = defineProps({
  mode: {
    type: String,
    default: 'vertical',
  },
  collapsed: {
    // 侧边栏菜单是否收起
    type: Boolean,
  },
  //位置
  location: {
    type: String,
    default: 'left',
  },
})

const state = reactive({
  inverted: false,
})

const message = useMessage()

const handleUpdateValue = (key, item) => {
  message.info('[onUpdate:value]: ' + JSON.stringify(key))
  message.info('[onUpdate:value]: ' + JSON.stringify(item))
}
</script>
