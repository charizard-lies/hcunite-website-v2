<template>
  <div class="relative group">
    <a v-if="item.external" :href="item.to" target="_blank" rel="noopener" class="m-auto h-full flex items-center font-inter font-normal text-md xl:text-lg 2xl:text-xl hover:text-hwachred">
        {{ item.label }}
    </a>
    
    <router-link v-else :to="item.to" class="m-auto h-full flex items-center font-inter font-normal text-md xl:text-lg 2xl:text-xl hover:text-hwachred">
        {{ item.label }}
    </router-link>
    <!-- dropdown -->
    <div v-if="item.subitems != null" class="absolute left-0 top-[90%] w-40 bg-hwachred shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 group-hover:block transition duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto z-50">
      <ul class="py-2">
        <li v-for="(subitem, index) in item.subitems" :key="index">
            <a v-if="subitem.external" :href="subitem.to" target="_blank" rel="noopener" class="block px-4 py-2 hover:bg-blue-50 text-white hover:text-hwachred">{{ subitem.label }}</a>
            <router-link v-else :to="subitem.to" class="block px-4 py-2 hover:bg-blue-50 text-white hover:text-hwachred">{{ subitem.label }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

defineProps({
    item: Object,
})

</script>