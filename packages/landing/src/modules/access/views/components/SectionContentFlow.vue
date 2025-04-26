<template>
  <div class="flex flex-col items-center df:(flex-row justify-between) mb-64px lg:mb-72px xl:mb-96px">
    <template v-for="(item, index) in data" :key="index">
      <div class="flex flex-col items-center df:flex-row">
        <div
          class="size-40px flex-shrink-0 bg-bg border-primary-light-7 border-1px border-solid rounded-full flex-row-center mb-spacing-xs df:(mb-0 mr-spacing-md)">
          <div class="text-size-20px font-bold color-text-primary">{{ index + 1 }}</div>
        </div>
        <div class="text-size-16px font-bold color-text-primary md:text-size-18px lg:text-size-22px">
          {{ item.title }}
        </div>
      </div>
      <i
        v-if="index !== data.length - 1"
        class="i-mdi:arrow-right-thin size-24px mx-spacing hidden df:block color-primary-light-7 scale-x-200" />
      <i
        v-if="index !== data.length - 1"
        class="i-mdi:arrow-down-thin size-24px my-spacing block df:hidden color-primary-light-7" />
    </template>
  </div>
</template>

<script setup lang="ts">
  import { t } from '@/languages';

  const data = [
    {
      title: t('开发准备'),
    },
    {
      title: t('开发调试（沙箱）'),
    },
    {
      title: t('测试发布（沙箱）'),
    },
    {
      title: t('上线运营'),
    },
  ];
</script>
