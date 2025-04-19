<template>
  <!-- 通过key=layout属性，避免切换到使用相同布局组件的不同布局路由时页面不会重新渲染。 -->
  <div :key="layout" class="w-full flex flex-row w-vw h-vh">
    <div class="w-240px flex flex-col bg-bg-page">
      <div v-if="title" class="text-size-18px font-bold p-spacing">{{ title }}</div>
      <WorkbenchMenu :layout="layout" />
    </div>
    <div class="flex flex-1 flex-col h-vh">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import WorkbenchMenu from './components/WorkbenchMenu.vue';
  import { LayoutRouteNames } from '@/router';

  // layout属性从/src/router/index.ts中通过generateLayoutBasedRoutes方法传过来，
  // 对应当前layout的名称，用于区分使用相同布局组件的不同路由layout
  const props = defineProps<{ layout: LayoutRouteNames }>();

  const title = computed(() => {
    return props.layout === 'workbench' ? '工作台' : props.layout === 'yard' ? '广场' : '';
  });
</script>
