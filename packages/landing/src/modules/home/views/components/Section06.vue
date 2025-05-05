<template>
  <div class="w-full pb-64px">
    <ResponsiveContainer>
      <SectionWrapper>
        <SectionTitle :title="t('Unmatched Security & Compliance')" />
        <div class="grid grid-cols-1 md:(grid-cols-2 gap-spacing-xxl px-0) px-spacing">
          <div v-for="(item, index) in data" :key="index" class="w-full flex flex-col items-center">
            <img :src="item.img" class="max-w-260 w-full h-auto" />
            <div class="text-size-14px font-bold text-center lg:text-size-18px">{{ item.title }}</div>
          </div>
        </div>
      </SectionWrapper>
    </ResponsiveContainer>
  </div>
</template>

<script lang="ts" setup>
  import { t } from '@/languages';
  import ResponsiveContainer from '@/components/ResponsiveContainer.vue';
  import SectionWrapper from '../../../../components/SectionWrapper.vue';
  import SectionTitle from '../../../../components/SectionTitle.vue';
  import img_badge_1 from '@/assets/images/badge_1.png';
  import img_badge_2 from '@/assets/images/badge_2.png';
  import img_badge_3 from '@/assets/images/badge_3.png';

  const data = [
    {
      img: img_badge_1,
      title: t('The PCI Security Standards Council'),
    },
    // {
    //   img: img_badge_2,
    //   title: t('The Malta Financial Services Authority'),
    // },
    {
      img: img_badge_3,
      title: t('Hong Kong Money Service Operators License'),
    },
  ];
</script>

<style lang="scss">
  .custom-collapse {
    .el-collapse-item__header {
      @apply text-size-18px h-auto! leading-normal! text-left! py-spacing-md min-h-48px md:(text-size-24px min-h-90px)  color-text-primary;
      .el-collapse-item__arrow {
        @apply text-size-14px;
      }
    }
  }
</style>
