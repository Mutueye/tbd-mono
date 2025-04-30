<!-- license -->
<template>
  <div class="w-full bg-bg">
    <ResponsiveContainer>
      <SectionWrapper>
        <div class="w-full grid grid-cols-1 gap-spacing-sm df:(grid-cols-2 gap-spacing-xxl)">
          <div
            class="text-size-18px md:text-size-30px df:mt-spacing lg:(text-size-40px mt-spacing-lg) color-text-primary font-500">
            {{ info }}
          </div>
          <img :src="licenseImg" class="w-full h-auto" />
        </div>
      </SectionWrapper>
    </ResponsiveContainer>
  </div>
</template>

<script lang="ts" setup>
  import ResponsiveContainer from '@/components/ResponsiveContainer.vue';
  import SectionWrapper from '@/components/SectionWrapper.vue';
  import { t } from '@/languages';
  import licenseImg from '@/assets/images/license.png';

  const info = t(
    'Proudly Registered and Licensed as a Money Services Business (MSB) in USA Administered by the Financial Crimes Enforcement Network (FinCEN)'
  );
</script>
