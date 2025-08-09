import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSodacheStore = defineStore('sodacheStore', () => {
  const activeSection = ref('song')
  return { activeSection }
})