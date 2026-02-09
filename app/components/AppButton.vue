<script setup>
defineProps({
  to: { type: String, default: null }, 
  variant: { type: String, default: 'primary' }
})
</script>

<template>
  <component 
    :is="to ? 'a' : 'button'" 
    :href="to"
    class="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all duration-300 transform active:scale-95"
    :class="[
      variant === 'primary' 
        ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/30' 
        : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50'
    ]"
  >
    <slot />
  </component>
</template>