<template>
  <ResponsiveContainer>
    <SectionWrapper>
      <SectionTitle :title="t('支持全球海量优质服务')" />
      <div class="flex-row-center flex-wrap gap-spacing-sm md:gap-spacing-md lg:gap-spacing">
        <div v-for="(item, index) in supportList" :key="index" class="w-60px df:w-80px lg:w-110px h-auto">
          <img :src="item.url" class="w-full h-auto" />
        </div>
      </div>
    </SectionWrapper>
  </ResponsiveContainer>
</template>

<script lang="ts" setup>
  import ResponsiveContainer from '@/components/ResponsiveContainer.vue';
  import SectionTitle from '@/components/SectionTitle.vue';
  import SectionWrapper from '@/components/SectionWrapper.vue';
  import { t } from '@/languages';
  import support_img_1 from '@/assets/images/support_1.png';
  import support_img_2 from '@/assets/images/support_2.png';
  import support_img_3 from '@/assets/images/support_3.png';
  import support_img_4 from '@/assets/images/support_4.png';
  import support_img_5 from '@/assets/images/support_5.png';
  import support_img_6 from '@/assets/images/support_6.png';
  import support_img_7 from '@/assets/images/support_7.png';
  import support_img_8 from '@/assets/images/support_8.png';
  import support_img_9 from '@/assets/images/support_9.png';
  import support_img_10 from '@/assets/images/support_10.png';
  import support_img_11 from '@/assets/images/support_11.png';
  import support_img_12 from '@/assets/images/support_12.png';
  import support_img_13 from '@/assets/images/support_13.png';
  import support_img_15 from '@/assets/images/support_15.png';
  import support_img_16 from '@/assets/images/support_16.png';
  import support_img_17 from '@/assets/images/support_17.png';
  import support_img__1 from '@/assets/images/support__1.png';
  import support_img__2 from '@/assets/images/support__2.png';

  const supportList = [
    { url: support_img__1 },
    { url: support_img__2 },
    { url: support_img_1 },
    { url: support_img_2 },
    { url: support_img_6 },
    { url: support_img_8 },
    { url: support_img_15 },
    { url: support_img_17 },
    { url: support_img_7 },
    { url: support_img_13 },
    { url: support_img_9 },
    { url: support_img_12 },
    { url: support_img_10 },
    { url: support_img_16 },
    { url: support_img_5 },
    { url: support_img_11 },
    { url: support_img_3 },
    { url: support_img_4 },
  ];
</script>
