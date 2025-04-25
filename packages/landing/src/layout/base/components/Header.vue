<template>
  <div class="w-full h-56px flex-row-center fixed bg-[#fff9] backdrop-blur-100px">
    <div class="w-full flex-row-between px-spacing xxl:w-1500px">
      <div class="flex-row-center flex-shrink-0">
        <i class="i-ics:logo size-32px flex-shrink-0" />
        <div class="font-size-22px font-bold ml-spacing-xxs hidden md:block">TBD</div>
      </div>
      <div class="flex-row-center flex-1 pl-spacing">
        <Menu :layout="layout" />
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
  import Menu from './Menu.vue';
  import { t } from '@/languages';
  defineProps<{ layout: string }>();

  const goCS = () => {
    // TODO 跳转到客服页面
  };
</script>
