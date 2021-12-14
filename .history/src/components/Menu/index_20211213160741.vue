<!--
 * @Author: your name
 * @Date: 2021-12-13 16:03:35
 * @LastEditTime: 2021-12-13 16:07:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\components\Menu\index.vue
-->
<template>
  <NMenu
    :options="menus"
    :inverted="inverted"
    :mode="mode"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="20"
    :indent="24"
    :expanded-keys="openKeys"
    :value="getSelectedKeys"
    @update:value="clickMenuItem"
    @update:expanded-keys="menuExpanded"
  />
</template>

<script setup lang='ts'>

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
</script>