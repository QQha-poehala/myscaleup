<template>
     <section class="py-20 bg-gray-50 px-6">
    <div class="container mx-auto max-w-5xl">
      
      <!-- Заголовок секции -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
          Как мы работаем над <span class="text-red-600">Вашим </span> проектом?
        </h2>
        <p class="text-gray-500 max-w-2xl mx-auto">
          Прозрачный процесс от первого звонка до поддержки готового продукта. Никакой магии, только системный подход.
        </p>
      </div>

      <!-- Список этапов -->
      <div class="space-y-6">
        
        <!-- Этап 1 -->
        <div class="group relative bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
          <div class="absolute top-0 left-0 w-2 h-full bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          <div class="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
            <!-- Цифра -->
            <div class="text-6xl md:text-8xl font-black text-gray-100 group-hover:text-red-50 transition-colors duration-300 select-none">
              1
            </div>
            <!-- Текст -->
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-3 text-gray-900">Аудит и Аналитика</h3>
              <p class="text-gray-600 leading-relaxed">
                Не начинаем разработку "вслепую". Изучаем ваши бизнес-процессы, проводим интервью с сотрудниками, находим "узкие места" и составляем подробное Техническое Задание (ТЗ).
              </p>
            </div>
            <!-- Иконка -->
            <div class="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center shrink-0 text-red-600 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Этап 2 -->
        <div class="group relative bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
          <div class="absolute top-0 left-0 w-2 h-full bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          <div class="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
            <div class="text-6xl md:text-8xl font-black text-gray-100 group-hover:text-red-50 transition-colors duration-300 select-none">
              2
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-3 text-gray-900">Проектирование</h3>
              <p class="text-gray-600 leading-relaxed">
                Разрабатываем архитектуру будущего решения. Рисуем прототипы интерфейсов, продумываем логику работы роботов в CRM и структуру базы данных. Вы видите результат еще до начала кода.
              </p>
            </div>
            <div class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 text-blue-600 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Этап 3 -->
        <div class="group relative bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
          <div class="absolute top-0 left-0 w-2 h-full bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          <div class="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
            <div class="text-6xl md:text-8xl font-black text-gray-100 group-hover:text-red-50 transition-colors duration-300 select-none">
              3
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-3 text-gray-900">Разработка и Внедрение</h3>
              <p class="text-gray-600 leading-relaxed">
                Настраиваем воронки, пишем код виджетов и приложений. Настраиваем интеграции с телефонией, сайтами и 1С. Тестируем каждый сценарий.
              </p>
            </div>
            <div class="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center shrink-0 text-purple-600 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Этап 4 -->
        <div class="group relative bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
          <div class="absolute top-0 left-0 w-2 h-full bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          <div class="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
            <div class="text-6xl md:text-8xl font-black text-gray-100 group-hover:text-red-50 transition-colors duration-300 select-none">
              4
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-3 text-gray-900">Обучение и Запуск</h3>
              <p class="text-gray-600 leading-relaxed">
                Самый важный этап. Мы не бросаем вас с новой программой. Проводим обучение для сотрудников и руководителей, записываем видеоинструкции и присутствуем в офисе в первые дни запуска.
              </p>
            </div>
            <div class="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center shrink-0 text-green-600 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>