<template>
  <RouterView>
    <!-- <template #default="{ Component, route }">
      <transition name="zoom-fade" mode="out-in" appear>
        <keep-alive v-if="keepAliveComponents" :include="keepAliveComponents">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
        <component v-else :is="Component" :key="route.fullPath" />
      </transition>
    </template>-->
  </RouterView>
</template>

<script setup lang="ts">
</script>