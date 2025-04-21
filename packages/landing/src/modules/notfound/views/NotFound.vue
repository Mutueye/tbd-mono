<script setup lang="ts"></script>

<template>
  <div class="w-full flex flex-col items-center justify-center h-vh">
    <div class="text-size-96px font-bold">404</div>
    <p>Page not found</p>
    <RouterLink to="/" style="display: block; margin-top: 20px">
      <ElButton type="primary">首页</ElButton>
    </RouterLink>
  </div>
</template>
