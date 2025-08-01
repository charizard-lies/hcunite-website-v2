<template>
  <li class="mb-4">
    <div class="flex items-center justify-between cursor-pointer text-white" v-on="item.subitems ? {click: () => $emit('toggle')} : {}">
      <!-- label -->
      <component :is="resolveComponent(item)" v-bind="resolveAttrs(item)" class="text-xl cursor-pointer" @click="handleClick(item)">
        {{ item.label }}
      </component>

      <!-- arrow -->
      <span v-if="item.subitems" class="ml-2 text-xl">
        <span :class="{ 'rotate-180': isActive }" class="transition-transform">▼</span>
      </span>
    </div>

    <!-- list -->
    <transition name="submenu-slide">
      <ul v-show="item.subitems && isActive" class="ml-4 mt-2 space-y-2 overflow-hidden">
        <li v-for="(sub, i) in item.subitems" :key="i" class="text-gray-200">
          <!-- <router-link :to="sub.to" @click="$emit('closeMenu')">{{ sub.label }}</router-link> -->

          <a v-if="sub.external" :href="sub.to" target="_blank" rel="noopener" @click="$emit('closeMenu')">
              {{ sub.label }}
          </a>
          
          <router-link v-else :to="sub.to" @click="$emit('closeMenu')">
              {{ sub.label }}
          </router-link>
        </li>
      </ul>
    </transition>
  </li>
</template>

<script setup>
const props = defineProps({
  item: Object,
  isActive: Boolean
})

const emit = defineEmits(['toggle', 'closeMenu'])

function resolveComponent(item) {
  if (item.subitems) return 'div'
  return item.external ? 'a' : 'router-link'
}

function resolveAttrs(item) {
  if (item.subitems) return {}

  if (item.external) {
    return {
      href: item.to,
      target: '_blank',
      rel: 'noopener noreferrer',
    }
  }

  return {
    to: item.to,
  }
}

function handleClick(item) {
  if (!item.subitems) {
    // only emit when there are no subitems
    emit('closeMenu')
  }
}
</script>

<style scoped>
.submenu-slide-enter-active,
.submenu-slide-leave-active {
  transition: all 0.4s ease;
  max-height: 500px; /* change if needed */
}

.submenu-slide-enter-from,
.submenu-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
  max-height: 0;
}

.submenu-slide-enter-to,
.submenu-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 500px;
}
</style>
