<script setup>
defineProps({
  title: String,
  description: String,
  id: String
})
</script>

<template>
  <div :id="id" class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
    <!-- Слот для иконки -->
    <div class="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <slot name="icon" />
    </div>
    
    <h3 class="text-xl font-bold mb-3">{{ title }}</h3>
    <p class="text-gray-500 mb-4 leading-relaxed">{{ description }}</p>
    
    <!-- Слот для списка фич -->
    <ul class="space-y-2 text-sm text-gray-600 mb-6">
      <slot name="features" />
    </ul>
  </div>
</template>