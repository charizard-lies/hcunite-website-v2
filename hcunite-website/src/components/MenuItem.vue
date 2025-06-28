<template>
  <li class="mb-4">
    <div class="flex items-center justify-between cursor-pointer text-white" v-on="item.subitems ? {click: () => $emit('toggle')} : {}">
      <!-- label -->
      <component :is="item.to ? 'router-link' : 'div'" :to="item.to" class="text-xl cursor-pointer" @click="$emit('closeMenu')">
        {{ item.label }}
      </component>

      <!-- arrow -->
      <span v-if="item.subitems" class="ml-2 text-xl">
        <span :class="{ 'rotate-180': isActive }" class="transition-transform">▼</span>
      </span>
    </div>

    <!-- list -->
    <ul v-if="item.subitems && isActive" class="ml-4 mt-2 space-y-2">
      <li v-for="(sub, i) in item.subitems" :key="i" class="text-gray-200">
        <router-link :to="sub.to" @click="$emit('closeMenu')">{{ sub.label }}</router-link>
      </li>
    </ul>
  </li>
</template>

<script setup>
const props = defineProps({
  item: Object,
  isActive: Boolean
})

const emit = defineEmits(['toggle', 'closeMenu'])
</script>
