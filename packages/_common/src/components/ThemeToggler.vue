<template>
  <div class="flex flex-row items-center">
    <button
      v-for="(theme, index) in currentThemeList"
      :key="'primary' + theme.name"
      class="theme-btn mr-spacing color-white"
      :style="{ backgroundColor: theme.config[dayNightMode].color.primary }"
      @click="changeThemeByIndex(index)">
      <i v-if="themeIndex === index" class="inline-block align-middle text-size-large i-mdi:check-circle-outline" />
    </button>
    <button class="theme-btn" @click="toggleDayNight">
      <i
        class="inline-block align-middle text-size-large dark:i-line-md-moon-filled i-line-md-moon-filled-to-sunny-filled-loop-transition color-text-regular" />
    </button>
  </div>
</template>

<script lang="ts" setup>
  import { useToggleTheme } from '../composables/useToggleTheme';
  import { useToggleDayNight } from '../composables/useToggleDayNight';

  const { toggleDayNight, dayNightMode } = useToggleDayNight();
  const { currentThemeList, themeIndex, changeThemeByIndex } = useToggleTheme();
</script>

<style lang="scss" scoped>
  $btn-size: 28px;
  .theme-btn {
    @apply rounded-full bg-bg-secondary border-none cursor-pointer flex flex-col items-center justify-center;

    width: $btn-size;
    height: $btn-size;
    outline-offset: 1px;
    &:focus-visible,
    &:hover {
      outline: 2px solid var(--el-text-color-disabled);
    }
  }
</style>
