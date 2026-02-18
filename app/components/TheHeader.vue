<script setup>
import { ref } from 'vue'
import AppButton from './AppButton.vue'

const isMenuOpen = ref(false)
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
    <div class="container mx-auto px-6 h-[85px] flex items-center justify-between relative">
       <NuxtLink to="/" class="flex items-center gap-3 group" @click="closeMenu">
        <img 
          src="/logo.png" 
          alt="ScaleUp Logo" 
          class="h-20 w-auto transition-transform duration-300 group-hover:scale-[1.2]"
        >
      </NuxtLink>

      <nav class="hidden lg:flex items-center gap-8 font-medium">
        <NuxtLink to="/"  class="text-gray-600 hover:text-red-600 transition-all duration-300 transform hover:scale-[1.2] inline-block origin-center">Главная</NuxtLink>
        <NuxtLink to="/bitrix24" class="text-gray-600 hover:text-red-600 transition-all duration-300 transform hover:scale-[1.2] inline-block origin-center">Битрикс24</NuxtLink>
        
        <div class="relative group cursor-default text-gray-400"> amoCRM
          <BadgeSoon />
        </div>
        <div class="relative group cursor-default text-gray-400"> Приложения
          <BadgeSoon />
        </div>
      </nav>

      <div class="hidden lg:block">
        <AppButton to="#contact">Связаться</AppButton>
      </div>
      
      <!-- Мобильное меню (упрощенно) -->
      <button class="lg:hidden p-2 -mr-2 text-gray-700 active:scale-95 transition-transform" @click="isMenuOpen = !isMenuOpen">
        <img 
          v-if="!isMenuOpen"
          src="/icon_menu.png" 
          alt="Menu" 
          class="w-8 h-8 object-contain"
        >
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-5"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-5"
    >
      <div 
        v-if="isMenuOpen" 
        class="lg:hidden absolute top-[85px] left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-85px)]">
        <div class="flex flex-col px-6 py-6 space-y-6 text-center">
          
          <NuxtLink 
            to="/" 
            class="text-xl font-medium text-gray-800 hover:text-red-600 transition-colors"
            @click="closeMenu"
          >Главная</NuxtLink>
          
          <NuxtLink 
            to="/bitrix24" 
            class="text-xl font-medium text-gray-800 hover:text-red-600 transition-colors"
            @click="closeMenu"
          >Битрикс24</NuxtLink>

          <!-- Неактивные пункты -->
          <div class="text-xl font-medium text-gray-400 relative inline-block mx-auto">
            amoCRM
            <div class="absolute -top-3 -right-8 scale-75"><BadgeSoon /></div>
          </div>
          
          <div class="text-xl font-medium text-gray-400 relative inline-block mx-auto">
            Приложения
            <div class="absolute -top-3 -right-8 scale-75"><BadgeSoon /></div>
          </div>

          <div class="pt-4 pb-4">
            <AppButton to="#contact" class="w-full" @click.native="closeMenu">
              Связаться
            </AppButton>
          </div>

        </div>
      </div>
    </transition>
  </header>
</template>