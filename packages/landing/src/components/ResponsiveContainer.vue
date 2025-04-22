<!-- 响应式内容容器 1200px / 980px / 100% 三种情况 -->
<template>
  <div class="w-full flex flex-col px-spacing lg:(px-0 mx-auto w-980px) xl:(px-0 mx-auto w-1200px)">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>
