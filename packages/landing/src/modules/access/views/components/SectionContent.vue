<template>
  <ResponsiveContainer class="pb-64px">
    <SectionWrapper>
      <SectionTitle
        title="全面的开放能力 实现高效集成"
        sub-title="丰富灵活的开放能力，流畅便捷的开发体验，优易付深度整合解决方案" />
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
  import ResponsiveContainer from '@/components/ResponsiveContainer.vue';
  import SectionTitle from '@/components/SectionTitle.vue';
  import SectionWrapper from '@/components/SectionWrapper.vue';
  import SectionContentFlow from './SectionContentFlow.vue';

  const dataList = [
    {
      title: '日志追踪检索',
      badge: '工具',
      content: '可快捷回溯服务器端、客户端 API 调用的异常日志，方便进行问题排查',
    },
    {
      title: '日志追踪检索',
      badge: '工具',
      content: '可快捷回溯服务器端、客户端 API 调用的异常日志，方便进行问题排查',
    },
    {
      title: '日志追踪检索',
      badge: '工具',
      content: '可快捷回溯服务器端、客户端 API 调用的异常日志，方便进行问题排查',
    },
    {
      title: '日志追踪检索',
      badge: '工具',
      content: '可快捷回溯服务器端、客户端 API 调用的异常日志，方便进行问题排查',
    },
    {
      title: '日志追踪检索',
      badge: '工具',
      content: '可快捷回溯服务器端、客户端 API 调用的异常日志，方便进行问题排查',
    },
    {
      title: '日志追踪检索',
      badge: '工具',
      content: '可快捷回溯服务器端、客户端 API 调用的异常日志，方便进行问题排查',
    },
  ];
</script>
