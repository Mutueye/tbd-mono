<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue';
  import { RouterLink, useRoute } from 'vue-router';
  import { toZeroStr } from '@vvts-mono/utils';
  import { onMounted } from 'vue';

  onMounted(() => {
    console.log('test toZeroStr:::', toZeroStr(9));
  });
</script>

<template>
  <div class="w-full flex flex-col items-center justify-start h-vh pt-spacing">
    <HelloWorld msg="Home" />
    <RouterLink to="/about" class="block mt-spacing-md">
      <ElButton type="primary">
        <div class="flex-row-center">
          <span>About</span>
          <i class="i-uplus:chevron-right size-14px" />
        </div>
      </ElButton>
    </RouterLink>
    <RouterLink to="/workbench" class="block mt-spacing-md">
      <ElButton type="primary">
        <div class="flex-row-center">
          <span>Workbench</span>
          <i class="i-uplus:chevron-right size-14px" />
        </div>
      </ElButton>
    </RouterLink>
  </div>
</template>
