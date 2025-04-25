<template>
  <ResponsiveContainer>
    <SectionWrapper>
      <SectionTitle
        title="多样的集成方案 满足业务所需"
        sub-title="基于开放能力灵活定制，满足复杂业务场景，助力团队数字化升级" />
      <div class="grid gap-spacing-sm grid-cols-1 md:(grid-cols-2 gap-spacing) df:(grid-cols-4 gap-spacing-xxl)">
        <div
          v-for="(item, index) in dataList"
          :key="index"
          class="w-full h-auto rounded-8px bg-bg p-spacing flex flex-col items-start">
          <div class="size-48px df:size-64px rounded-full overflow-hidden">
            <img :src="item.avatar" alt="avatar" class="w-full h-full object-cover" />
          </div>
          <el-rate v-model="item.rate" disabled size="large" />
          <div class="mt-spacing-sm color-text-primary text-size-12px md:text-size-14px">{{ item.content }}</div>
        </div>
      </div>
    </SectionWrapper>
  </ResponsiveContainer>
</template>

<script lang="ts" setup>
  import ResponsiveContainer from '@/components/ResponsiveContainer.vue';
  import SectionTitle from './SectionTitle.vue';
  import SectionWrapper from './SectionWrapper.vue';
  import avatar_1 from '@/assets/images/avatar_1.png';
  import avatar_2 from '@/assets/images/avatar_2.png';
  import avatar_3 from '@/assets/images/avatar_3.png';
  import avatar_4 from '@/assets/images/avatar_4.png';

  const dataList = [
    {
      avatar: avatar_1,
      rate: 5,
      content: '基于开放能力灵活定制，满足复杂业务场景，助力团队数字化升级',
    },
    {
      avatar: avatar_2,
      rate: 5,
      content: '基于开放能力灵活定制，满足复杂业务场景，助力团队数字化升级',
    },
    {
      avatar: avatar_3,
      rate: 5,
      content: '基于开放能力灵活定制，满足复杂业务场景，助力团队数字化升级',
    },
    {
      avatar: avatar_4,
      rate: 5,
      content: '基于开放能力灵活定制，满足复杂业务场景，助力团队数字化升级',
    },
  ];
</script>
