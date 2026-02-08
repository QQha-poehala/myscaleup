<template>
  <header class="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
    <div class="container mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Логотип -->
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <div class="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white transform group-hover:-translate-y-1 transition-transform">
          <!-- Иконка стрелки вверх -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </div>
        <span class="text-2xl font-bold text-gray-900 tracking-tight">Scale<span class="text-red-600">Up</span></span>
      </NuxtLink>

      <!-- Меню (для десктопа) -->
      <nav class="hidden md:flex items-center gap-8 font-medium text-gray-600">
        <NuxtLink to="/" class="hover:text-red-600 transition-colors">Главная</NuxtLink>
        <a href="#bitrix" class="hover:text-red-600 transition-colors">Битрикс24</a>
        <a href="#amocrm" class="hover:text-red-600 transition-colors">amoCRM</a>
        <a href="#apps" class="hover:text-red-600 transition-colors">Приложения</a>
      </nav>

      <!-- Кнопка связаться -->
      <a href="#contact" class="hidden md:block px-6 py-2 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
        Обсудить проект
      </a>
      
      <!-- Мобильное меню (упрощенно) -->
      <button class="md:hidden text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  </header>
</template>