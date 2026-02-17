<script setup>
import AppButton from './AppButton.vue'
</script>

<template>
  <section class="py-20 bg-gray-900 text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-[0.05]" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 30px 30px;"></div>
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-40 bg-blue-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10 text-center">
      <h2 class="text-3xl md:text-4xl font-extrabold mb-6">
        Встреча со специалистом
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
        Запишитесь на бесплатную консультацию с нашим ведущим экспертом по внедрению Битрикс24
      </p>

      <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12 text-left">
        <!-- Пункт 1 -->
        <div class="flex gap-4">
          <div class="shrink-0 w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-500">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
          </div>
          <div>
            <h4 class="font-bold text-white text-lg mb-1">Аудит "As Is"</h4>
            <p class="text-gray-400 text-sm leading-relaxed">Разберем текущие процессы. Найдем точки потери клиентов.</p>
          </div>
        </div>
        <!-- Пункт 2 -->
        <div class="flex gap-4">
          <div class="shrink-0 w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
          </div>
          <div>
            <h4 class="font-bold text-white text-lg mb-1">Модель "To Be"</h4>
            <p class="text-gray-400 text-sm leading-relaxed">Спроектируем правильную логику работы системы.</p>
          </div>
        </div>
        <!-- Пункт 3 -->
        <div class="flex gap-4">
          <div class="shrink-0 w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-500">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>
          </div>
          <div>
            <h4 class="font-bold text-white text-lg mb-1">Демонстрация кейсов</h4>
            <p class="text-gray-400 text-sm leading-relaxed">Покажем реальные примеры настроек в похожих нишах.</p>
          </div>
        </div>
        <!-- Пункт 4 -->
        <div class="flex gap-4">
          <div class="shrink-0 w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-500">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
          </div>
          <div>
            <h4 class="font-bold text-white text-lg mb-1">Бюджет и Сроки</h4>
            <p class="text-gray-400 text-sm leading-relaxed">Рассчитаем точную смету и составим план.</p>
          </div>
        </div>
      </div>

      <div class="inline-flex gap-4">
        <AppButton to="#contact" variant="blue">Обсудить проект</AppButton>
      </div>
    </div>
  </section>
</template>