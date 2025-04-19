<script setup lang="ts">
  import { ThemeToggler } from '@vvts-mono/common';
</script>

<template>
  <div class="w-full h-56px border-b border-solid border-border flex flex-row items-center justify-between px-spacing">
    <div class="flex-row-center">
      <i class="i-uplus:logo size-32px" />
      <div class="font-size-22px font-bold ml-spacing-xxs">Vite-Vue3-TS Common Scaffold</div>
    </div>
    <ThemeToggler />
  </div>
</template>
