import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', {
  state: (): { commonStateStr: string } => ({
    commonStateStr: 'demo',
  }),
  getters: {
    //
  },
  actions: {
    setCommonStateStr(str: string) {
      this.commonStateStr = str;
    },
  },
});
