<template>
  <div class="w-full bg-bg">
    <ResponsiveContainer>
      <SectionWrapper>
        <SectionTitle :gradient-title="true" :title="t('HICARD')" />
        <div class="w-full flex flex-col border-t-1px border-t-border border-t-solid">
          <div
            v-for="(item, index) in tableData"
            :key="index"
            class="w-full py-50px border-b-1px border-b-border border-b-solid grid grid-cols-6 gap-spacing">
            <div class="text-size-30px lg:text-size-40px font-bold color-primary flex-row-center justify-start">
              {{ '0' + (index + 1) }}
            </div>
            <div class="col-span-2 text-size-16px lg:text-size-24px font-bold flex-row-center justify-start">
              {{ item.title }}
            </div>
            <div class="col-span-3 text-size-14px lg:text-size-20px flex-row-center justify-start">{{ item.desc }}</div>
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

  const tableData = [
    {
      title: t('Fully Regulated'),
      desc: t('Licensed as MSO and VASP.'),
    },
    {
      title: t('Dual Safeguards'),
      desc: t('Your assets are protected with KYT & MEV security protocols.'),
    },
    {
      title: t('Global Acceptance'),
      desc: t('Shop, tap, and withdraw at any POS terminal or ATM worldwide.'),
    },
  ];
</script>
