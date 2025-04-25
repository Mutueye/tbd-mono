<template>
  <div class="w-full pt-56px h-300px md:h-400px df:h-450px lg:h-600px flex-row-center banner-bg">
    <ResponsiveContainer>
      <div class="flex flex-col items-start">
        <div
          class="color-text-primary text-size-24px text-left md:text-size-30px df:text-size-40px whitespace-pre-wrap lg:text-size-50px font-500">
          <span>{{ banner_title_1 }}</span>
          <br />
          <span>{{ banner_title_2 }}</span>
        </div>
        <div class="flex flex-col items-start my-20px md:my-30px lg:my-40px">
          <div class="color-text-primary leading-30px text-left text-size-14px md:text-size-18px whitespace-pre-wrap">
            {{ banner_intro }}
          </div>
        </div>
        <el-button type="primary" round size="large" @click="goCS">
          <div class="flex-row-center pl-16px">
            <span>{{ t('立即咨询') }}</span>
            <i class="i-mdi:arrow-right-thin size-24px ml-4px" />
          </div>
        </el-button>
      </div>
    </ResponsiveContainer>
  </div>
</template>

<script lang="ts" setup>
  import { t } from '@/languages';
  import ResponsiveContainer from '@/components/ResponsiveContainer.vue';

  const banner_title_1 = t('源头服务商一体化');
  const banner_title_2 = t('全球支付解决方案');
  const banner_intro = t('提供强大丰富的应用开发和系统集成能力，为团队专属的个性化定制方案');

  const goCS = () => {
    // TODO 跳转到客服页面
  };
</script>

<style lang="scss" scoped>
  .banner-bg {
    background-image: url('@/assets/images/banner_bg.jpg');
    background-position: center;
    background-size: cover;
  }
</style>
