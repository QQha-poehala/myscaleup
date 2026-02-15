<template>
  <header class="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
    <div class="container mx-auto px-6 h-[85px] flex items-center justify-between">
      <!-- Логотип -->
       <NuxtLink to="/" class="flex items-center gap-3 group">
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
      <button class="lg:hidden text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  </header>
</template>