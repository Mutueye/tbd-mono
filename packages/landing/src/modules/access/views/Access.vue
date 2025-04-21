<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue';
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';

  const example = ref('');
</script>

<template>
  <div class="w-full flex flex-col items-center justify-start h-vh pt-spacing">
    <HelloWorld msg="About" />
    <RouterLink to="/" style="display: block; margin-top: 20px">
      <ElButton type="primary">
        <div class="flex-row-center">
          <i class="i-ics:chevron-left size-14px" />
          <span>Home</span>
        </div>
      </ElButton>
    </RouterLink>
    <div class="w-200px">
      <ElSelect v-model="example" class="mt-spacing">
        <ElOption label="Hello World 1" value="Hello World 1" />
        <ElOption label="Hello World 2" value="Hello World 2" />
      </ElSelect>
    </div>
  </div>
</template>
