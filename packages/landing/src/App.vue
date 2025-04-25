<script setup lang="ts">
  import { i18nScope } from './languages';
  import { ElConfigProvider } from 'element-plus';
  import zhCn from 'element-plus/es/locale/lang/zh-cn';
  import { onMounted } from 'vue';

  onMounted(() => {
    // i18nScope.change('en-US');
    i18nScope.change('zh-CN');
  });
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <RouterView />
  </ElConfigProvider>
</template>
