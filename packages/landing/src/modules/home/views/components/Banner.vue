<template>
  <div class="w-full min-h-100vh py-100px flex-row-center banner-bg">
    <div class="flex-col-center">
      <div
        class="color-text-primary text-size-24px text-center md:text-size-40px df:text-size-50px lg:text-size-60px font-500">
        {{ banner_title }}
      </div>
      <div class="flex-col-center my-40px">
        <div class="color-text-primary leading-30px text-center text-size-14px md:text-size-18px whitespace-pre-wrap">
          {{ banner_intro }}
        </div>
      </div>
      <el-button type="primary" round size="large" @click="router.push('/access')">
        <div class="flex-row-center pl-16px">
          <span>立即体验</span>
          <i class="i-mdi:arrow-right-thin size-24px ml-4px" />
        </div>
      </el-button>
      <BannerCards />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import BannerCards from './BannerCards.vue';

  const banner_title = '轻松订阅海外软件服务';
  const banner_intro = `无需改变习惯，即刻进入支付新时代；
更公道的价格，更卓越的性能，更有保障的安全和服务。`;

  const router = useRouter();
</script>

<style lang="scss" scoped>
  .banner-bg {
    background-image: url('@/assets/images/banner_bg.jpg');
    background-position: center;
    background-size: cover;
  }
</style>
