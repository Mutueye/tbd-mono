<template>
  <div class="w-full h-56px flex-row-center fixed bg-[#fff9] backdrop-blur-100px z-999">
    <div class="w-full flex-row-between px-spacing xxl:w-1500px">
      <div class="flex-row-center flex-shrink-0">
        <!-- <i class="i-ics:logo size-32px flex-shrink-0" /> -->
        <img :src="LogoA" class="h-32px w-auto hidden md:block" />
        <img :src="LogoB" class="h-32px w-auto block md:hidden" />
      </div>
      <div class="flex-row-center flex-1 pl-spacing-xs md:pl-spacing-md df:pl-spacing">
        <Menu :layout="layout" />
        <el-dropdown trigger="click">
          <div class="flex-row-center mr-spacing-md cursor-pointer">
            <i class="i-mdi:language size-20px mr-spacing-4px" />
            <i class="i-mdi:chevron-down size-16px" />
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="item in languages" :key="item.value" @click="() => changeLan(item.value)">
                <span :class="i18nScope.activeLanguage === item.value ? 'color-primary' : 'color-text-regular'">{{
                  item.label
                }}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <div class="hidden md:block">
          <el-button type="primary" round size="small" @click="goCS">
            <div class="flex-row-center">
              <i class="i-mdi:customer-service size-16px mr-4px" />
              <span>{{ t('在线客服') }}</span>
            </div>
          </el-button>
        </div>
        <div class="flex-row-center md:hidden" @clock="goCS">
          <i class="i-mdi:customer-service size-20px color-primary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { nextTick } from 'vue';
  import Menu from './Menu.vue';
  import { t, i18nScope } from '@/languages';
  import LogoA from '@/assets/images/logo_A.png';
  import LogoB from '@/assets/images/logo_B.png';
  import { useGoCS } from '@/composables/useGoCS';

  defineProps<{ layout: string }>();

  const goCS = useGoCS();

  // const languages = computed(() => {
  //   console.log('i18nScope.messages::::', i18nScope);
  //   return Object.keys(i18nScope.messages);
  // });

  const languages = [
    {
      value: 'zh-CN',
      label: '简体中文',
    },
    {
      value: 'en-US',
      label: 'English',
    },
  ];

  const changeLan = (value: string) => {
    i18nScope.change(value).then(() => {
      nextTick(() => {
        window.location.reload();
      });
    });
  };
</script>
