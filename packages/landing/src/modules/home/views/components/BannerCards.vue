<template>
  <ResponsiveContainer>
    <div
      class="grid grid-cols-2 gap-spacing-xs md:(grid-cols-2 gap-spacing) lg:(grid-cols-4 gap-spacing-xxl) mt-50px md:mt-80px lg:mt-100px">
      <div
        v-for="item in cards"
        :key="item.title"
        class="flex-col-center justify-start rounded-8px px-spacing w-full bg-[#fff9] backdrop-blur-20px py-spacing lg:py-spacing-xxl">
        <img :src="item.icon" class="w-80px h-auto mb-spacing" />
        <div class="text-size-16px font-500 color-text-primary">{{ item.title }}</div>
        <div class="text-size-14px color-text-secondary mt-spacing text-justify">{{ item.desc }}</div>
      </div>
    </div>
  </ResponsiveContainer>
</template>

<script setup lang="ts">
  import ResponsiveContainer from '@/components/ResponsiveContainer.vue';
  import icon_1 from '@/assets/images/icon_1.png';
  import icon_2 from '@/assets/images/icon_2.png';
  import icon_3 from '@/assets/images/icon_3.png';
  import icon_4 from '@/assets/images/icon_4.png';

  const cards: { title: string; icon: string; desc: string }[] = [
    {
      title: '无需实名',
      icon: icon_1,
      desc: '无需您提交任何实名认证（KYC）文件，即可快速完成开卡并投入使用，确保您隐私安全的充分保障。',
    },
    {
      title: '无限开卡',
      icon: icon_2,
      desc: '根据您的会员权益最多可支持无限的开卡数量，享受个性化的服务和体验。',
    },
    {
      title: '开发接入',
      icon: icon_3,
      desc: '如果您有市场营销策略，且具备一定的开发能力，您可以通过API快速部署您自己的站点。',
    },
    {
      title: '高可用性',
      icon: icon_4,
      desc: '金融级的集群服务以及精心优化的网络线路，确保我们的服务拥有极高的可用性用以支撑您业务需求。',
    },
  ];
</script>
