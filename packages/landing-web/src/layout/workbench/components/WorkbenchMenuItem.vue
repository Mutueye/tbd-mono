<template>
  <div
    class="flex flex-row items-center justify-between h-44px px-spacing decoration-none font-bold transition-colors"
    :class="
      item.path === activeRoutePath ? 'color-primary bg-primary-light-8' : 'color-text-regular hover:bg-primary-light-9'
    ">
    <div class="flex flex-row items-center">
      <i :class="item.meta?.menuConfig?.iconClass" class="w-16px h-16px mr-spacing-xxs" />
      <div>{{ item.meta?.title }}</div>
    </div>
    <i v-if="item.path === activeRoutePath" class="i-uplus:chevron-right size-14px color-primary-light-3" />
  </div>
</template>

<script setup lang="ts">
  import { MenuItemData } from '@/global';

  defineProps<{
    item: MenuItemData;
    activeRoutePath: string;
  }>();
</script>
