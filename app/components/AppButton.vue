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
    :class="{
      'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/30': variant === 'primary',
      'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30': variant === 'blue',
      'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50': variant === 'secondary'
    }"
  >
    <slot />
  </component>
</template>