<template>
  <div :key="layout" class="w-full flex flex-col items-center">
    <Header :layout="layout" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import Header from './components/Header.vue';
  // layout属性从/src/router/index.ts中通过generateLayoutBasedRoutes方法传过来，
  // 对应当前layout的名称，用于区分使用相同布局组件的不同路由layout
  defineProps<{ layout: string }>();
</script>
