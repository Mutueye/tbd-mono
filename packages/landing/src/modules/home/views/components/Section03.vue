<template>
  <div class="w-full bg-bg">
    <ResponsiveContainer>
      <SectionWrapper>
        <div
          class="w-full flex flex-row items-center py-spacing px-spacing md:px-spacing-xxl lg:px-100px bg-bg-page rounded-12px">
          <div class="md:flex-1 h-auto flex-col flex">
            <div class="text-size-18px md:text-size-30px lg:text-size-40px color-text-primary font-500">
              {{ title }}
            </div>
            <div class="text-size-12px md:text-size-16px color-text-primary mt-spacing">{{ info }}</div>
          </div>
          <div class="flex-shrink-0 size-72px md:(size-200px) lg:(size-260px) ml-spacing-xs">
            <img :src="PerksImg" class="w-full h-auto object-cover" />
          </div>
        </div>
      </SectionWrapper>
    </ResponsiveContainer>
  </div>
</template>

<script lang="ts" setup>
  import ResponsiveContainer from '@/components/ResponsiveContainer.vue';
  import SectionWrapper from '@/components/SectionWrapper.vue';
  import PerksImg from '@/assets/images/perks.svg';

  const title = '邀请返佣';
  const info =
    '如果你觉得平台能给你和身边的朋友带来价值，可以复制下述地址分享给身边的朋友，若邀请的新用户在平台中有消费行为，你将获得平台一定的奖励';
</script>
