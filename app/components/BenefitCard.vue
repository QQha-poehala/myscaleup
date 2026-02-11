<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<template>
  <!-- Карточка -->
  <div class="group relative w-full md:w-[48%] lg:w-[22%] bg-gray-50 rounded-3xl p-8 border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-red-900/10">
    
    <!-- Декор: Красная линия сверху (выезжает при наведении) -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    
    <!-- Декор: Фоновое свечение (пятно) -->
    <div class="absolute -top-10 -right-10 w-32 h-32 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors duration-500"></div>

    <!-- Иконка -->
    <div class="relative w-16 h-16 mb-6">
      <!-- Подложка иконки -->
      <div class="absolute inset-0 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-red-700 group-hover:border-red-500 group-hover:rotate-6"></div>
      
      <!-- Сама -->
      <div class="relative z-10 w-full h-full flex items-center justify-center text-gray-800 transition-colors duration-500 group-hover:text-white">
        <slot name="icon" />
      </div>
    </div>

    <h3 class="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors duration-300">
      {{ title }}
    </h3>
    <p 
      class="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors"
      v-html="description"
    ></p>
    
  </div>
</template>