<script setup>
defineProps({
  logo: String,
  company: String,
  industry: String,
  desc: String
})
</script>

<template>

  <div class="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:bg-gray-750 hover:-translate-y-1 group hover:border-gray-600">
    
    <div class="flex justify-between items-start mb-6">
      
      <!-- Логотип -->
      <div class="h-15 w-auto max-w-[140px] flex items-center">
        <img 
          v-if="logo && logo.includes('/')" 
          :src="logo" 
          :alt="company" 
          class="h-full w-auto object-contain object-left opacity-80 group-hover:opacity-100 transition-opacity" 
        />
        <span v-else class="text-lg font-black text-white uppercase tracking-tight">
          {{ company }}
        </span>
      </div>

      <!-- Ниша -->
      <span class="px-3 py-1 bg-gray-900 text-red-400 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full border border-gray-700 whitespace-nowrap group-hover:text-red transition-colors">
        {{ industry }}
      </span>
    </div>

    <!-- Название -->
    <h3 class="text-xl font-bold text-white mb-4 leading-tight group-hover:text-red-500 transition-colors">
      {{ company }}
    </h3>

    <!-- Описание -->
    <div class="flex-grow">
      <p class="text-gray-400 text-sm leading-relaxed">
        {{ desc }}
      </p>
    </div>

    <div class="mt-6 w-12 h-1 bg-gray-700 rounded-full group-hover:bg-red-500 group-hover:w-full transition-all duration-500"></div>

  </div>
</template>