<script setup>
// Кнопки и иконки вставлены в template
</script>

<template>
  <section class="relative bg-gray-900 py-32 lg:py-40 px-6 overflow-hidden">
    
    <!-- ВЕРХНИЙ ПЕРЕХОД (Косой срез) -->
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
      <svg class="relative block w-full h-16 md:h-24 lg:h-32" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48V0h1200v120z" class="fill-white"></path>
      </svg>
    </div>

    <!-- ФОНОВЫЙ ДЕКОР -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto relative z-20">
      
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        
        <!-- ЛЕВАЯ КОЛОНКА: Заголовок -->
        <div class="text-center lg:text-left lg:sticky lg:top-32">
          
          <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-1 leading-tight">
            Узнаете свой бизнес в этих <span class="text-red-500">ситуациях?</span>
          </h2>
          
          
        </div>

        <!-- ПРАВАЯ КОЛОНКА: Список "Болей" + Кнопки -->
        <div class="space-y-3">
          
          <!-- БОЛЬ 1: Потеря клиентов -->
          <div class="group flex gap-5 p-6 rounded-r-2xl border-l-4 border-red-500 bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:translate-x-2 cursor-default">
            <div class="shrink-0 mt-1">
              <div class="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                <!-- Иконка: Поиск пользователя (Лупа) -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-white font-bold text-lg mb-1 group-hover:text-red-400 transition-colors">Клиенты теряются</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Заявки записываются в Excel или блокноты. Менеджеры забывают перезванивать, и клиент уходит к конкурентам.
              </p>
            </div>
          </div>

          <!-- БОЛЬ 2: Рутина -->
          <div class="group flex gap-5 p-6 rounded-r-2xl border-l-4 border-red-500 bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:translate-x-2 cursor-default">
            <div class="shrink-0 mt-1">
              <div class="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                <!-- Иконка: Документы -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-white font-bold text-lg mb-1 group-hover:text-red-400 transition-colors">Рутина съедает время</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Вместо продаж сотрудники часами заполняют договора, счета и акты вручную. Это убивает мотивацию и снижает выручку.
              </p>
            </div>
          </div>

          <!-- БОЛЬ 3: Аналитика -->
          <div class="group flex gap-5 p-6 rounded-r-2xl border-l-4 border-red-500 bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:translate-x-2 cursor-default">
            <div class="shrink-0 mt-1">
              <div class="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                <!-- Иконка: График / Презентация -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-white font-bold text-lg mb-1 group-hover:text-red-400 transition-colors">Отсутствие сквозной аналитики</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Нет понимания, откуда пришел клиент. Маркетинговый бюджет тратится неэффективно, так как невозможно посчитать реальную стоимость лида и эффективность рекламы.
              </p>
            </div>
          </div>

          <!-- БОЛЬ 4: История коммуникаций (НОВАЯ) -->
          <div class="group flex gap-5 p-6 rounded-r-2xl border-l-4 border-red-500 bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:translate-x-2 cursor-default">
            <div class="shrink-0 mt-1">
              <div class="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                <!-- Иконка: Чат / История -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-white font-bold text-lg mb-1 group-hover:text-red-400 transition-colors">Нет истории общения</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Если менеджер заболел или уволился, никто не знает, о чем он договорился с клиентом. Вся переписка остается в его личном телефоне, и сделки срываются.
              </p>
            </div>
          </div>

          <p class="text-gray-400 text-lg mb-10 leading-relaxed">
            Обращайтесь к <strong>специалистам</strong> своего дела!
          </p>

          <!-- КНОПКИ (Снизу списка) -->
          <div class="pt-8 flex flex-col sm:flex-row gap-4 justify-start">
            <AppButton to="#contact" class="px-8 py-4 text-lg w-full sm:w-auto">
              Связаться
            </AppButton>
            
            <a 
              href="#" 
              target="_blank"
              class="px-8 py-4 rounded-full border border-gray-600 text-gray-300 font-bold text-lg hover:bg-white hover:text-gray-900 hover:border-white transition-all w-full sm:w-auto text-center"
            >
              Заполнить БРИФ
            </a>
          </div>

        </div>

      </div>

    </div>

    <!-- НИЖНИЙ ПЕРЕХОД (Косой срез) -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
      <svg class="relative block w-full h-16 md:h-24 lg:h-32" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="fill-gray-50"></path>
      </svg>
    </div>

  </section>
</template>