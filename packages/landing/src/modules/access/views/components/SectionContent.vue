<template>
  <ResponsiveContainer class="pb-64px">
    <SectionWrapper>
      <SectionTitle
        :title="t('全面的开放能力 实现高效集成')"
        :sub-title="t('丰富灵活的开放能力，流畅便捷的开发体验，优易付深度整合解决方案')" />
      <SectionContentFlow />
      <div class="grid gap-spacing-sm grid-cols-1 df:(grid-cols-3 gap-spacing-xxl)">
        <div
          v-for="(item, index) in dataList"
          :key="index"
          class="w-full h-auto rounded-8px bg-bg p-spacing flex flex-col items-start">
          <div class="flex-row-center">
            <div class="text-size-18px df:text-size-22px color-text-primary font-bold">{{ item.title }}</div>
            <div
              class="flex-row-center h-20px leading-20px df:(h-24px leading-24px) bg-primary-light-9 rounded-base px-6px text-size-13px font-400 color-primary ml-4px">
              {{ item.badge }}
            </div>
          </div>
          <div class="mt-spacing-sm color-text-primary text-size-12px md:text-size-14px">{{ item.content }}</div>
        </div>
      </div>
    </SectionWrapper>
  </ResponsiveContainer>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import ResponsiveContainer from '@/components/ResponsiveContainer.vue';
  import { t } from '@/languages';
  import SectionTitle from '@/components/SectionTitle.vue';
  import SectionWrapper from '@/components/SectionWrapper.vue';
  import SectionContentFlow from './SectionContentFlow.vue';
  import { i18nScope } from '@/languages';

  const data: Record<string, { title: string; badge: string; content: string }[]> = {
    'zh-CN': [
      {
        title: '日志追踪检索',
        badge: '工具',
        content: '可快捷回溯服务器端、客户端 API 调用的异常日志，方便进行问题排查',
      },
      {
        title: '周期数据报表',
        badge: '功能',
        content: '根据历史数据，可周期性提供数据分析报告，为您运营决策提供科学高效的支撑。',
      },
      {
        title: '开发接入文档',
        badge: '文档',
        content: '标准化的 Open-API 接入规范以及沙箱化的开发环境，协助您快速敏捷开发。',
      },
      {
        title: '技术专员对接',
        badge: '独享',
        content: '一对一技术工程师协助贵司在开发对接过程中遇到的一切技术范畴的问题，并保持持续跟进。',
      },
      {
        title: '共享风控模型',
        badge: '独享',
        content: '生产环境将与平台共享大数据风控模型，以高效应对各种突发状况，杜绝非法用户及行为。',
      },
      {
        title: '推广营销培训',
        badge: '独享',
        content: '我们将会根据贵司实际情况，提供持续化的推广营销培训或建议，以快速占领目标市场实现共赢。',
      },
    ],
    'en-US': [
      {
        title: 'Log Tracking and Retrieval',
        badge: 'Tool',
        content:
          'You can quickly trace exception logs of server-side and client-side API calls, facilitating problem troubleshooting.',
      },
      {
        title: 'Periodic Data Reports',
        badge: 'Func',
        content:
          'Based on historical data, it can periodically provide data analysis reports, offering scientific and efficient support for your operational decision-making.',
      },
      {
        title: 'Development Integration Documentation',
        badge: 'Docs',
        content:
          'Standardized Open-API integration specifications and a sandboxed development environment to assist you in rapid and agile development.',
      },
      {
        title: 'Dedicated Technical Specialist Support',
        badge: 'Exclusive',
        content:
          'A one-on-one technical engineer will assist your company with any technical issues encountered during the development and integration process, and will maintain continuous follow-up.',
      },
      {
        title: 'Shared Risk Control Model',
        badge: 'Exclusive',
        content:
          'The production environment will share the big data risk control model with the platform to efficiently handle various emergencies and eliminate illegal users and behaviors.',
      },
      {
        title: 'Promotion and Marketing Training',
        badge: 'Exclusive',
        content:
          "We will provide continuous promotion and marketing training or suggestions tailored to your company's actual situation, to quickly capture the target market and achieve a win-win situation.",
      },
    ],
  };

  const dataList = computed(() => data[i18nScope.activeLanguage]);
</script>
