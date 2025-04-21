<template>
  <div class="w-full h-56px flex flex-row items-center justify-between px-spacing">
    <div class="flex-row-center">
      <i class="i-ics:logo size-32px" />
      <div class="font-size-22px font-bold ml-spacing-xxs">Vite-Vue3-TS Common Scaffold</div>
    </div>
    <div class="flex-row-center flex-1 pl-spacing">
      <Menu :layout="layout" />
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{ layout: string }>();
  import Menu from './Menu.vue';
</script>
