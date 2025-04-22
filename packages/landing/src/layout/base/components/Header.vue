<template>
  <div class="w-full h-56px flex-row-center fixed bg-[#fff9] backdrop-blur-100px">
    <div class="w-full flex-row-between px-spacing xxl:w-1500px">
      <div class="flex-row-center flex-shrink-0">
        <i class="i-ics:logo size-32px flex-shrink-0" />
        <div class="font-size-22px font-bold ml-spacing-xxs">TBD</div>
      </div>
      <div class="flex-row-center flex-1 pl-spacing">
        <Menu :layout="layout" />
        <el-button type="primary" round size="small">
          <div class="flex-row-center">
            <i class="i-mdi:customer-service size-16px mr-4px" />
            <span>在线客服</span>
          </div>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{ layout: string }>();
  import Menu from './Menu.vue';
</script>
