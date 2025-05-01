<template>
  <SectionWrapper>
    <SectionTitle
      :title="t('多样的集成方案 满足业务所需')"
      :sub-title="t('基于开放能力灵活定制，满足复杂业务场景，助力团队数字化升级')" />
    <div
      class="grid gap-spacing-sm grid-cols-1 px-spacing lg:(grid-cols-3 gap-spacing) xl:(grid-cols-5 gap-spacing-xl px-spacing-xl max-w-1860px mx-auto)">
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
</template>

<script lang="ts" setup>
  import ResponsiveContainer from '@/components/ResponsiveContainer.vue';
  import { t } from '@/languages';
  import SectionTitle from '@/components/SectionTitle.vue';
  import SectionWrapper from '@/components/SectionWrapper.vue';
  import avatar_0 from '@/assets/images/avatar_0.png';
  import avatar_1 from '@/assets/images/avatar_1.png';
  import avatar_2 from '@/assets/images/avatar_2.png';
  import avatar_3 from '@/assets/images/avatar_3.png';
  import avatar_4 from '@/assets/images/avatar_4.png';

  const dataList = [
    {
      avatar: avatar_0,
      rate: 5,
      content:
        'I really like HICARD because it’s not only easy to use but also fully compliant. They have an official MSB license registered with FinCEN, which made me feel much safer using their services. Everything from top-up to payments works smoothly, and it’s clear they take regulations seriously. In today’s environment, finding a reliable and compliant service like this is super important!',
    },
    {
      avatar: avatar_1,
      rate: 5,
      content:
        'The integration with ChatGPT Plus was successful, and HICARD was of great help, effectively resolving the payment issues.\n\n' +
        'During the payment confirmation process, an issue of "Unable to verify payment method" was triggered. After several unsuccessful retries, I decided to check the HICARD official website out of curiosity and, sure enough, found the relevant documentation, which ultimately resolved the problem.',
    },
    {
      avatar: avatar_2,
      rate: 5,
      content:
        'I’ve been using HICARD for half a year now, and it’s been rock-solid. No worries about keeping ChatGPT Plus running.\n\n' +
        'Who gets it, right? It’s so convenient—just recharge and withdraw through Alipay. These days, it feels like you can’t even work without GPT!',
    },
    {
      avatar: avatar_3,
      rate: 5,
      content:
        "HICARD is just amazing. Recently, I've been using Claude so much that I had to log in to the website to top up my balance. To my surprise, I found that they've already updated so many new features. It seems like they've covered all the major use cases for using OpenAI in China.",
    },
    {
      avatar: avatar_4,
      rate: 5,
      content:
        "I'm moved to tears! After going through a hundred credit card rejections, trying every possible solution without success, and consulting Apple and bank customer service countless times to no avail, finally!!!\n" +
        'Thank you, HICARD!!!! For helping a small group of people to fully embrace AI, you bring such a blessing.',
    },
  ];
</script>
