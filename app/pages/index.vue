<script setup>
useSeoMeta({
  title: 'ScaleUp — Внедрение CRM и разработка приложений',
  description: 'Команда экспертов по автоматизации бизнеса. Внедряем Битрикс24 и amoCRM, разрабатываем тиражные решения.',
})
</script>

<template>
  <div class="font-sans antialiased text-gray-900 bg-white selection:bg-red-100 selection:text-red-900">
    <TheHeader />

    <!-- HERO SECTION (Первый экран) -->
    <section class="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto text-center max-w-4xl">
        <div class="inline-block px-3 py-1 mb-6 text-sm font-semibold text-red-600 bg-red-50 rounded-full border border-red-100">
          🚀 Автоматизация продаж и процессов
        </div>
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Масштабируй свой бизнес <br> через <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">технологии</span>
        </h1>
        <p class="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Внедряем Битрикс24 и amoCRM, разрабатываем сложные интеграции и создаем приложения, которые экономят ваши деньги и время.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" class="px-8 py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">
            Получить консультацию
          </a>
          <a href="#experience" class="px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
            Наши кейсы
          </a>
        </div>
      </div>
    </section>

    <!-- О КОМПАНИИ -->
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <!-- Плейсхолдер для фото команды/офиса -->
            <div class="bg-gray-200 rounded-2xl h-[400px] w-full flex items-center justify-center text-gray-400">
              <span class="text-lg">Фото команды / Офиса</span>
            </div>
            <!-- Декоративный элемент -->
            <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-red-50 rounded-full -z-10"></div>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-6">Команда ScaleUp</h2>
            <p class="text-gray-600 mb-4 text-lg">
              Мы не просто "настройщики". Мы — инженеры бизнес-процессов.
            </p>
            <p class="text-gray-600 mb-6 leading-relaxed">
              ScaleUp специализируется на сложной технической разработке для CRM-систем. Там, где штатные инструменты заканчиваются, начинаем работать мы. Создаем тиражные приложения для Маркетплейсов и локальные решения под уникальные задачи бизнеса.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="border-l-4 border-red-500 pl-4">
                <div class="text-3xl font-bold text-gray-900">50+</div>
                <div class="text-sm text-gray-500">Реализованных проектов</div>
              </div>
              <div class="border-l-4 border-red-500 pl-4">
                <div class="text-3xl font-bold text-gray-900">10+</div>
                <div class="text-sm text-gray-500">Собственных приложений</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- УСЛУГИ (Блоки) -->
    <section class="py-20 bg-gray-50 px-6" id="services">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Наши компетенции</h2>
          <p class="text-gray-500">Полный цикл работ с CRM-системами</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Блок Битрикс24 -->
          <div id="bitrix" class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
            <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span class="text-2xl font-bold">B24</span>
            </div>
            <h3 class="text-xl font-bold mb-3">Внедрение Битрикс24</h3>
            <p class="text-gray-500 mb-4">Настройка воронок, автоматизация роботами, переезд с других систем, обучение сотрудников.</p>
            <ul class="space-y-2 text-sm text-gray-600 mb-6">
              <li class="flex items-center">✅ Коробочная версия</li>
              <li class="flex items-center">✅ Облачная версия</li>
              <li class="flex items-center">✅ REST API интеграции</li>
            </ul>
          </div>

          <!-- Блок amoCRM -->
          <div id="amocrm" class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
            <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span class="text-2xl font-bold">amo</span>
            </div>
            <h3 class="text-xl font-bold mb-3">Настройка amoCRM</h3>
            <p class="text-gray-500 mb-4">Идеально для отделов продаж. Подключение телефонии, мессенджеров, Salesbot.</p>
            <ul class="space-y-2 text-sm text-gray-600 mb-6">
              <li class="flex items-center">✅ Digital Pipeline</li>
              <li class="flex items-center">✅ Разработка виджетов</li>
              <li class="flex items-center">✅ Аудит отдела продаж</li>
            </ul>
          </div>

          <!-- Блок Разработка -->
          <div id="apps" class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
            <div class="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Разработка приложений</h3>
            <p class="text-gray-500 mb-4">Создаем локальные и тиражные приложения. Публикуем ваши решения в маркетплейсах CRM.</p>
            <ul class="space-y-2 text-sm text-gray-600 mb-6">
              <li class="flex items-center">✅ Frontend (Vue/React)</li>
              <li class="flex items-center">✅ Backend (Python/PHP)</li>
              <li class="flex items-center">✅ Публикация в сторы</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ФОРМА (Связь) -->
    <section id="contact" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl bg-gray-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
        <!-- Декор фона -->
        <div class="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500 via-gray-900 to-gray-900"></div>
        
        <div class="relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Готовы масштабировать бизнес?</h2>
          <p class="text-gray-400 mb-10 text-lg">Оставьте заявку, и мы проведем бесплатный аудит вашей текущей CRM-системы.</p>
          
          <form class="max-w-md mx-auto space-y-4 text-left">
            <div>
              <label class="text-sm font-medium text-gray-400 mb-1 block">Ваше имя</label>
              <input type="text" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Иван Иванов">
            </div>
            <div>
              <label class="text-sm font-medium text-gray-400 mb-1 block">Email или Телефон</label>
              <input type="text" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="+7 (999) ...">
            </div>
            <div>
              <label class="text-sm font-medium text-gray-400 mb-1 block">Задача</label>
              <textarea rows="3" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Хочу внедрить CRM..."></textarea>
            </div>
            <button type="button" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-red-900/50 mt-4">
              Отправить заявку
            </button>
            <p class="text-xs text-gray-500 text-center mt-4">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
          </form>
        </div>
      </div>
    </section>

    <TheFooter />
  </div>
</template>