<template>
  <div class="w-full p-spacing h-full flex flex-col items-center justify-center">
    <div class="text-size-24px font-bold">{{ route.meta.title ? route.meta.title : route.name ? route.name : '' }}</div>
    <div class="color-text-secondary">{{ route.fullPath }}</div>
    <RouterLink to="/" class="block mt-spacing">
      <ElButton type="primary">Home</ElButton>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';

  const route = useRoute();
</script>
