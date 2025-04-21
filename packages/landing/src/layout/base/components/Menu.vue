<template>
  <el-menu default-active="activeRouteName" mode="horizontal" class="base-menu w-full">
    <template v-for="item in menuData" :key="item.name">
      <div v-if="item.children && item.children.length > 0">
        <div class="xxx">{{ item.children }}</div>
        <el-sub-menu :index="item.name" :title="item.meta?.title">
          <template v-for="child in item.children" :key="child.name">
            <el-menu-item :index="child.name">
              <RouterLink
                :to="{ name: child.name }"
                class="px-spacing"
                :target="child.meta?.blank ? '_blank' : '_self'">
                {{ child.meta?.title }}
              </RouterLink>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </div>
      <el-menu-item v-else :index="item.name">
        <RouterLink :to="{ name: item.name }" :target="item.meta?.blank ? '_blank' : '_self'">
          {{ item.meta?.title }}
        </RouterLink>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
  import { useMenuRoutes } from '@/composables/useMenuRoutes';
  import { computed } from 'vue';

  const props = defineProps<{ layout: string }>();

  const { getMenuDataFromRoutes, getActiveRouteName } = useMenuRoutes(props.layout || 'workbench');

  const menuData = computed(() => {
    const data = getMenuDataFromRoutes();
    return data;
  });

  const activeRouteName = computed(() => {
    const routeName = getActiveRouteName();
    return routeName?.toString();
  });
</script>

<style lang="scss">
  .base-menu {
    &.el-menu--horizontal {
      --el-menu-horizontal-height: 56px;
      &.el-menu {
        border-bottom: none;
      }
      > .el-menu-item {
        border-bottom: none;
        &.is-active {
          border-bottom: none;
        }
      }
      .el-menu-item {
        padding-right: 0;
        padding-left: 0;

        @apply color-text-regular;
        a {
          @apply px-spacing decoration-none font-bold text-size-16px;
        }
        &:hover {
          background-color: transparent;
        }
      }
    }
  }
</style>
