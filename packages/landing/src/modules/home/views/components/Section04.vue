<template>
  <div class="w-full bg-bg pb-64px">
    <ResponsiveContainer>
      <SectionWrapper>
        <SectionTitle :title="t('常见问题')" />
        <el-collapse v-model="activeName" accordion class="custom-collapse">
          <el-collapse-item
            v-for="item in qaData[i18nScope.activeLanguage]"
            :key="item.id"
            :name="item.id"
            :title="item.title">
            <div class="whitespace-pre-wrap text-size-14px">{{ item.content }}</div>
          </el-collapse-item>
        </el-collapse>
      </SectionWrapper>
    </ResponsiveContainer>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { t } from '@/languages';
  import ResponsiveContainer from '@/components/ResponsiveContainer.vue';
  import SectionWrapper from '../../../../components/SectionWrapper.vue';
  import SectionTitle from '../../../../components/SectionTitle.vue';
  import { i18nScope } from '@/languages';

  const activeName = ref('1');

  const qaData: Record<string, { title: string; id: string; content: string }[]> = {
    'zh-CN': [
      {
        title: 'HICARD 是什么？',
        id: '1',
        content: `HICARD 是一家主营全球虚拟卡的支付服务商。主要提供一种无需实体介质的支付工具，它通常以数字形式存在，由银行或支付服务商发行，主要用于在线购物和订阅等。`,
      },
      {
        title: '我们支持哪些消费场景？',
        id: '2',
        content:
          '虚拟卡（Virtual Card）在现代金融和电子商务中有着广泛的应用。以下是一些 HICARD 支持的具体消费场景：\n' +
          '\n' +
          '1.在线购物：虚拟卡可以用于在各种电商平台上进行购物，包括购买实物商品和数字商品。\n' +
          '\n' +
          '2.订阅服务：虚拟卡可以用于支付各种在线订阅服务，如 Telegram、Twitter、Netflix、Spotify、Adobe Creative Cloud、Microsoft Office 365、ChatGPT、OpenAI、Claude 等。\n' +
          '\n' +
          '3.广告投放：可支付全球主流广告平台费用，如通过 FaceBook Ads、Google Ads、TikTok 等。\n' +
          '\n' +
          '4.旅游预订：您可以使用虚拟卡预订机票、酒店和租车服务，如通过 Expedia、Booking.com、Airbnb 等平台。\n' +
          '\n' +
          '5.游戏娱乐：虚拟卡也常用于购买游戏（如 Steam、PlayStation Store）、虚拟物品和在线娱乐。\n' +
          '\n' +
          '6.票务预订：可以用虚拟卡购买各种票务，如电影票、演唱会门票、以及其他活动的电子票。\n' +
          '\n' +
          '7.应用内购：虚拟卡可以用于在 App Store、Google Play、Paypal 进行应用内购买。\n' +
          '\n' +
          '8.教育服务：在线教育课程、培训班以及电子书等数字教育资源也可以通过虚拟卡支付。\n' +
          '\n' +
          '9.日常开销：因为虚拟卡通常可以绑定到手机支付应用（如 Apple Pay、Google Pay），因此可以在支持NFC支付的实体店进行付款。\n' +
          '\n' +
          '10.其它支付：常见主流平台域名购买、服务器租用，如 DogYun、Namesilo 等',
      },
      {
        title: '卡片资费标准或换卡政策？',
        id: '3',
        content:
          '卡片仅在创建时收取一次性制卡费用，后期无任何隐形月租、年费等。通常情况下，卡片有效期为三年，在有效期内若非用户原因导致卡片失效，平台将会免费更换相同卡片或类似用途的卡片。',
      },
      {
        title: '如果开卡后付款失败该怎么办？',
        id: '4',
        content:
          '通常情况下付款失败原因可能是：有效期格式输入错误 / 卡内余额不够 / 您的付款环境被商户标记为欺诈风险。请根据具体提示进行再次付款即可，不建议相同环境反复重试。\n' +
          '若仍然有问题，可尝试联系在线客服请求协助获取更多建议。',
      },
      {
        title: '卡内余额是否可以提现？',
        id: '5',
        content:
          '当然，卡内余额属于您的私有财产，我们将予以坚决保护。您可以在任何时候灵活转出卡内余额，并且可随时提现至您的外部账户而无需面临长时间的等待。',
      },
      {
        title: '我的卡片为何被注销？',
        id: '6',
        content:
          '根据您的历史交易数据，风控模型会自动评判异常交易。\n' +
          '如果您的卡片在短时间内出现连续拒付、大额拒付、恶意退款、频繁撤销等场景，可能会被风控系统强行注销且中止服务。\n' +
          '但请放心，您的资金是安全的。被强行删除的卡片，您的资金将会退回至您的钱包，您可以重新开卡或资金提现。',
      },
      {
        title: '我可以使用哪些方式付款？',
        id: '7',
        content: '根据平台政策，当前仅支持 USDT-TRC20 方式付款。后期若开通更多收款方式，我们将会第一时间公布。',
      },
      {
        title: '我有自己的推广媒介，可以合作么？',
        id: '8',
        content:
          '我们非常欢迎具有推广能力的用户参与合作，您可以在会员中心复制您的专属邀请链接，其它用户通过您的专属链接成功注册且创建卡片，您将立即获得最高 30% 佣金，上不封顶且可立即提现。',
      },
      {
        title: '如果我有开发能力，是否可以通过 API 方式接入？',
        id: '9',
        content:
          '是的，可以。作为持牌经营主体和源头服务商，通过API方式合作接入是我们支撑的主要业务之一。\n' +
          '如果您有这方面的需求，请联系在线客服提交商务合作意向，我们将为您提供个性化的量身定制方案。',
      },
    ],
    'en-US': [
      {
        title: 'What is HICARD?',
        id: '1',
        content: `HICARD is a payment service provider specializing in global virtual cards. It primarily offers a payment tool that does not require a physical medium. This tool usually exists in digital form and is issued by banks or payment service providers. It is mainly used for online shopping and subscriptions.`,
      },
      {
        title: 'What consumption scenarios do we support?',
        id: '2',
        content:
          'Virtual Cards have a wide range of applications in modern finance and e-commerce. Here are some specific consumption scenarios supported by HICARD:\n' +
          '\n' +
          '1.Online Shopping: Virtual Cards can be used for purchasing both physical and digital goods on various e-commerce platforms.\n' +
          '\n' +
          '2.Subscription Services: Virtual Cards can be used to pay for a variety of online subscription services, such as Telegram, Twitter, Netflix, Spotify, Adobe Creative Cloud, Microsoft Office 365, ChatGPT, OpenAI, Claude, etc.\n' +
          '\n' +
          '3.Advertising: Virtual Cards can be used to pay for advertising on major global platforms, such as Facebook Ads, Google Ads, TikTok, etc.\n' +
          '\n' +
          '4.Travel Booking: Virtual Cards can be used to book flights, hotels, and car rentals through platforms like Expedia, Booking.com, Airbnb, etc.\n' +
          '\n' +
          '5.Gaming and Entertainment: Virtual Cards are commonly used for purchasing games (such as on Steam, PlayStation Store), virtual items, and online entertainment.\n' +
          '\n' +
          '6.Ticket Booking: Virtual Cards can be used to purchase various tickets, such as movie tickets, concert tickets, and e-tickets for other events.\n' +
          '\n' +
          '7.In-App Purchases: Virtual Cards can be used for in-app purchases on the App Store, Google Play, and PayPal.\n' +
          '\n' +
          '8.Educational Services: Virtual Cards can be used to pay for online courses, training programs, e-books, and other digital educational resources.\n' +
          '\n' +
          '9.Daily Expenses: Since Virtual Cards can typically be linked to mobile payment applications (such as Apple Pay, Google Pay), they can be used for payments at physical stores that support NFC payments.\n' +
          '\n' +
          '10.Other Payments: Virtual Cards can be used for purchasing domain names on mainstream platforms, server rentals, and other services, such as on DogYun, Namesilo, etc.',
      },
      {
        title: 'Card fee standards or card replacement policy?',
        id: '3',
        content:
          'The card is charged a one-time card production fee at the time of creation, with no hidden monthly rent, annual fees, or other charges later on. Under normal circumstances, the card has a validity period of three years. If the card becomes invalid due to reasons not attributable to the user within the validity period, the platform will replace it with the same card or a card of similar use free of charge.',
      },
      {
        title: 'What should I do if the payment fails after opening the card?',
        id: '4',
        content:
          'Common reasons for payment failure may include: incorrect input of the expiration date format / insufficient balance in the card / your payment environment being flagged as a fraud risk by the merchant. Please attempt the payment again based on the specific error message. It is not recommended to retry repeatedly from the same environment.\n' +
          'If the issue persists, you may try to contact the online customer service for assistance and further suggestions.',
      },
      {
        title: 'Can the balance in the card be withdrawn?',
        id: '5',
        content:
          'Certainly, the balance in the card is your private property, and we will resolutely protect it. You can flexibly transfer the balance out of the card at any time, and you can withdraw it to your external account without having to face a long waiting period.',
      },
      {
        title: 'Why was my card canceled?',
        id: '6',
        content:
          'Based on your historical transaction data, the risk control model will automatically assess abnormal transactions.\n' +
          'If your card experiences consecutive declines, large-amount declines, malicious refunds, or frequent cancellations within a short period, it may be forcibly canceled and the service terminated by the risk control system.\n' +
          'However, please rest assured that your funds are safe. For cards that are forcibly deleted, your funds will be refunded to your wallet, and you can either open a new card or withdraw the funds.',
      },
      {
        title: 'What payment methods can I use?',
        id: '7',
        content:
          'According to the platform policy, only the USDT-TRC20 payment method is currently supported. If more payment methods are enabled in the future, we will announce it immediately.',
      },
      {
        title: 'I have my own promotional channels. Can I collaborate?',
        id: '8',
        content:
          'We warmly welcome users with promotional capabilities to join our cooperation. You can copy your exclusive referral link in the member center. Once other users successfully register and create a card through your exclusive link, you will immediately receive up to 30% commission, with no upper limit and the ability to withdraw funds immediately.',
      },
      {
        title: 'If I have development capabilities, can I integrate through an API?',
        id: '9',
        content:
          'Yes, you can. As a licensed operator and a primary service provider, API integration is one of our main supported business models.\n' +
          'If you have this requirement, please contact our online customer service to submit a business cooperation intention, and we will provide you with a customized solution.',
      },
    ],
  };
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
