<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useHelloWorldStore } from '@/store/helloworld';

  defineProps<{ msg: string }>();

  const helloWorldStore = useHelloWorldStore();
  const { counter } = storeToRefs(helloWorldStore);
</script>

<template>
  <h1 class="color-text-primary mt-spacing-xxl">{{ msg }}</h1>

  <ElButton type="primary" class="mt-spacing" @click="helloWorldStore.increment">功德 +{{ counter }}</ElButton>
</template>
