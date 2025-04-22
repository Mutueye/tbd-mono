<script setup lang="ts">
  import Banner from './components/Banner.vue';
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="w-full flex flex-col items-center justify-start">
    <Banner />
    <!-- <RouterLink to="/about" class="block mt-spacing-md">
      <ElButton type="primary">
        <div class="flex-row-center">
          <span>About</span>
          <i class="i-ics:chevron-right size-14px" />
        </div>
      </ElButton>
    </RouterLink> -->
  </div>
</template>
