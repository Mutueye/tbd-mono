<template>
  <ResponsiveContainer>
    <div
      class="grid grid-cols-2 gap-spacing-xs md:(grid-cols-3 gap-spacing) lg:(grid-cols-3 gap-spacing-xxl) mt-50px md:mt-80px lg:mt-100px">
      <div
        v-for="item in cards"
        :key="item.title"
        class="flex-col-center justify-start rounded-8px px-spacing w-full bg-[#fff9] backdrop-blur-20px py-spacing lg:py-spacing-xxl">
        <img :src="item.icon" class="w-80px h-auto mb-spacing" />
        <div class="text-size-16px font-500 color-text-primary text-center">{{ item.title }}</div>
        <div class="text-size-14px color-text-secondary mt-spacing text-center">{{ item.desc }}</div>
      </div>
    </div>
  </ResponsiveContainer>
</template>

<script setup lang="ts">
  import ResponsiveContainer from '@/components/ResponsiveContainer.vue';
  import { t } from '@/languages';
  import icon_1 from '@/assets/images/icon_1.png';
  import icon_2 from '@/assets/images/icon_2.png';
  import icon_3 from '@/assets/images/icon_3.png';
  import icon_4 from '@/assets/images/icon_4.png';
  import icon_5 from '@/assets/images/icon_5.png';
  import icon_6 from '@/assets/images/icon_6.png';

  const cards: { title: string; icon: string; desc: string }[] = [
    {
      title: t('Customizable Options'),
      icon: icon_5,
      desc: t(
        'Support for custom Apple Pay & Google Pay card logos, covering both physical and virtual cards. Enhance brand visibility and upgrade the payment experience with seamless end-to-end delivery.'
      ),
    },
    {
      title: t('Management System Provided'),
      icon: icon_6,
      desc: t(
        'An efficient and user-friendly management system helps businesses easily integrate data, optimize processes, and make smarter decisions, boosting operational efficiency and management capabilities.'
      ),
    },
    {
      title: t('无需实名'),
      icon: icon_1,
      desc: t(
        'Simplified KYC – get your card instantly issued and ready to use, with full privacy protection guaranteed.'
      ),
    },
    {
      title: t('无限开卡'),
      icon: icon_2,
      desc: t('根据您的会员权益最多可支持无限的开卡数量，享受个性化的服务和体验。'),
    },
    {
      title: t('开发接入'),
      icon: icon_3,
      desc: t('如果您有市场营销策略，且具备一定的开发能力，您可以通过API快速部署您自己的站点。'),
    },
    {
      title: t('高可用性'),
      icon: icon_4,
      desc: t('金融级的集群服务以及精心优化的网络线路，确保我们的服务拥有极高的可用性用以支撑您业务需求。'),
    },
  ];
</script>
