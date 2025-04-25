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

  const supportList = [
    { url: support_img_1 },
    { url: support_img_2 },
    { url: support_img_1 },
    { url: support_img_2 },
    { url: support_img_1 },
    { url: support_img_2 },
    { url: support_img_1 },
    { url: support_img_2 },
    { url: support_img_1 },
    { url: support_img_2 },
    { url: support_img_1 },
    { url: support_img_2 },
    { url: support_img_1 },
    { url: support_img_2 },
    { url: support_img_1 },
    { url: support_img_2 },
    { url: support_img_1 },
  ];
</script>
