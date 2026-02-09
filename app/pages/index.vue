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

  <Aboutus />

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