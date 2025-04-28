<script setup lang="ts">
  import { ElConfigProvider } from 'element-plus';
  import zhCn from 'element-plus/es/locale/lang/zh-cn';
  import { i18nScope } from './languages';
  import { onMounted } from 'vue';

  // onMounted(() => {
  //   i18nScope.defaultLanguage = 'en-US';
  // });
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <RouterView />
  </ElConfigProvider>
</template>
