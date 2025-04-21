<template>
  <div
    class="flex flex-row items-center justify-between h-44px px-spacing decoration-none font-bold transition-colors"
    :class="
      item.name === activeRouteName ? 'color-primary bg-primary-light-8' : 'color-text-regular hover:bg-primary-light-9'
    ">
    <div class="flex flex-row items-center">
      <i :class="item.meta?.menuConfig?.iconClass" class="w-16px h-16px mr-spacing-xxs" />
      <div>{{ item.meta?.title }}</div>
    </div>
    <i v-if="item.name === activeRouteName" class="i-ics:chevron-right size-14px color-primary-light-3" />
  </div>
</template>

<script setup lang="ts">
  import { MenuItemData } from '@vvts-mono/types';

  defineProps<{
    item: MenuItemData;
    activeRouteName: string;
  }>();
</script>
