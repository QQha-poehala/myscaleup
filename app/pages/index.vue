<script setup>
useSeoMeta({
  title: 'ScaleUp — Внедрение CRM и разработка приложений',
  description: 'Команда экспертов по автоматизации бизнеса. Внедряем Битрикс24 и amoCRM, разрабатываем тиражные и локальные решения.',
})
</script>

<template>
  <div class="font-sans antialiased text-gray-900 bg-white selection:bg-red-100 selection:text-red-900">
    <TheHeader />

    <!-- HERO SECTION -->
    <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style="background-image: url('/mainpage.jpg');"
      ></div>
      <div class="absolute inset-0 bg-white/80 z-0"></div>

      <!-- Контент -->
      <div class="container mx-auto text-center max-w-4xl relative z-10">
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Масштабируй свой бизнес <br> через <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">технологии</span>
        </h1>
        <p class="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Внедряем CRM в Ваш бизнес, разрабатываем сложные интеграции и создаем приложения, которые экономят ваши деньги и время.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <AppButton to="#contact" class="text-lg px-8 py-4 shadow-xl shadow-red-600/20">Получить консультацию</AppButton>
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
          
          <!-- Карточка Битрикс -->
          <ServiceCard 
            id="bitrix"
            title="Внедрение Битрикс24" 
            description="Настройка воронок, автоматизация роботами, переезд с других систем, обучение сотрудников."
          >
            <template #icon>
              <span class="text-2xl font-bold text-blue-600">B24</span>
            </template>
            <template #features>
              <li class="flex items-center">✅ Коробочная версия</li>
              <li class="flex items-center">✅ Облачная версия</li>
              <li class="flex items-center">✅ REST API интеграции</li>
            </template>
          </ServiceCard>

          <!-- Карточка amoCRM -->
          <ServiceCard 
            id="amocrm"
            title="Настройка amoCRM" 
            description="Идеально для отделов продаж. Подключение телефонии, мессенджеров, Salesbot."
          >
            <template #icon>
              <span class="text-2xl font-bold text-blue-600">amo</span>
            </template>
            <template #features>
              <li class="flex items-center">✅ Digital Pipeline</li>
              <li class="flex items-center">✅ Разработка виджетов</li>
              <li class="flex items-center">✅ Аудит отдела продаж</li>
            </template>
          </ServiceCard>

          <!-- Карточка Разработка -->
          <ServiceCard 
            id="apps"
            title="Разработка приложений" 
            description="Создаем локальные и тиражные приложения. Публикуем ваши решения в маркетплейсах CRM."
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 text-red-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </template>
            <template #features>
              <li class="flex items-center">✅ Frontend (Vue/React)</li>
              <li class="flex items-center">✅ Backend (Python/PHP)</li>
              <li class="flex items-center">✅ Публикация в сторы</li>
            </template>
          </ServiceCard>

        </div>
      </div>
    </section>

    <ContactForm />

    <TheFooter />
  </div>
</template>