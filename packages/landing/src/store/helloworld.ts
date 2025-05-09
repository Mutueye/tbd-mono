import { defineStore } from 'pinia';

export const useHelloWorldStore = defineStore('helloWorld', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++;
    },
  },
});
