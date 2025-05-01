<template>
  <div class="w-full flex-col-center mb-64px lg:mb-72px xl:mb-96px px-spacing" style="line-height: 1.5">
    <div
      class="mx-auto text-center color-text-primary font-500 text-size-20px md:text-size-36px lg:text-size-40px"
      :class="gradientTitle ? 'gradient-bg' : ''">
      {{ title }}
    </div>
    <div
      v-if="subTitle"
      class="w-full text-center color-text-primary font-400 text-size-12px md:text-size-16px lg:text-size-18px">
      {{ subTitle }}
    </div>
  </div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      title: string;
      subTitle?: string;
      gradientTitle?: boolean;
    }>(),
    { subTitle: '' }
  );
</script>

<style scoped lang="scss">
  .gradient-bg {
    background: linear-gradient(90deg, #7f6bf3 0%, #80d4e5 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
