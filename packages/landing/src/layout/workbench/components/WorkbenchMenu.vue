<template>
  <div class="flex flex-col w-240px pb-spacing h-full">
    <div v-for="item in getMenuDataFromRoutes()" :key="item.name" class="w-full mb-spacing">
      <a
        v-if="item.meta?.menuConfig?.linkPath"
        :href="item.meta?.menuConfig?.linkPath"
        :target="item.meta?.menuConfig?.blank ? '_blank' : '_self'"
        class="decoration-none">
        <WorkbenchMenuItem :item="item" :active-route-name="activeRouteName" />
      </a>
      <RouterLink
        v-else
        :to="{ name: item.name }"
        :target="item.meta?.blank ? '_blank' : '_self'"
        class="decoration-none">
        <WorkbenchMenuItem :item="item" :active-route-name="activeRouteName" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useMenuRoutes } from '@/composables/useMenuRoutes';
  import WorkbenchMenuItem from './WorkbenchMenuItem.vue';
  import { computed } from 'vue';

  const props = defineProps<{ layout: string }>();

  const { getMenuDataFromRoutes, getActiveRouteName } = useMenuRoutes(props.layout || 'workbench');

  const activeRouteName = computed(() => {
    return getActiveRouteName();
  });
</script>
