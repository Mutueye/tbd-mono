<template>
  <div class="w-full bg-bg pb-64px">
    <ResponsiveContainer>
      <SectionWrapper>
        <SectionTitle title="常见问题" />
        <el-collapse v-model="activeName" accordion class="custom-collapse">
          <el-collapse-item v-for="item in qaData" :key="item.id" :name="item.id" :title="item.title">
            <div class="whitespace-pre-wrap text-size-14px">{{ item.content }}</div>
          </el-collapse-item>
        </el-collapse>
      </SectionWrapper>
    </ResponsiveContainer>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import ResponsiveContainer from '@/components/ResponsiveContainer.vue';
  import SectionWrapper from '../../../../components/SectionWrapper.vue';
  import SectionTitle from '../../../../components/SectionTitle.vue';

  const activeName = ref('1');

  const qaData = [
    {
      title: '如何使用？',
      id: '1',
      content: `使用前请先注册，注册后，您可以在首页看到您的账户信息。
点击头像进入个人中心，在个人中心可以设置您的头像，昵称，密码等。`,
    },
    {
      title: '如何使用？',
      id: '2',
      content:
        '使用前请先注册，注册后，您可以在首页看到您的账户信息，点击头像进入个人中心，在个人中心可以设置您的头像，昵称，密码等。',
    },
    {
      title: '如何使用？',
      id: '3',
      content:
        '使用前请先注册，注册后，您可以在首页看到您的账户信息，点击头像进入个人中心，在个人中心可以设置您的头像，昵称，密码等。',
    },
    {
      title: '如何使用？',
      id: '4',
      content:
        '使用前请先注册，注册后，您可以在首页看到您的账户信息，点击头像进入个人中心，在个人中心可以设置您的头像，昵称，密码等。',
    },
  ];
</script>

<style lang="scss">
  .custom-collapse {
    .el-collapse-item__header {
      @apply text-size-18px h-48px md:(text-size-24px h-90px)  color-text-primary;
      .el-collapse-item__arrow {
        @apply text-size-14px;
      }
    }
  }
</style>
