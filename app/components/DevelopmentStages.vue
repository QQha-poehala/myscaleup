<script setup>
const stages = [
  {
    id: '1',
    title: 'Интервью',
    desc: 'Анализируем текущие процессы.',
    bullets: ['Интервью с сотрудниками', 'Выявление узких мест', 'Постановка целей внедрения']
  },
  {
    id: '2',
    title: 'Формирование ТЗ',
    desc: 'Проектируем логику работы системы.',
    bullets: ['Подбираем продукт и тариф', 'Описание бизнес-процессов', 'Утверждение технического задания']
  },
  {
    id: '3',
    title: 'Настройка системы',
    desc: 'Базовая конфигурация под ваши задачи.',
    bullets: ['Настройка воронок продаж', 'Права доступа и структура компании', 'Карточки сделок и контактов']
  },
  {
    id: '4',
    title: 'Разработка и Интеграции',
    desc: 'Расширяем возможности штатного функционала.',
    bullets: ['Подключение телефонии и сайтов', 'Разработка виджетов и отчетов', 'Интеграция с 1С и мессенджерами']
  },
  {
    id: '5',
    title: 'Тестирование',
    desc: 'Проверка работы перед запуском.',
    bullets: ['Тест всех сценариев', 'Демонстрация работы', 'Финальные правки']
  },
  {
    id: '6',
    title: 'Обучение команды',
    desc: 'Чтобы сотрудники реально работали в CRM.',
    bullets: ['Обучающие вебинары', 'Написание регламентов', 'Видеоинструкции']
  },
  {
    id: '7',
    title: 'Запуск и Поддержка',
    desc: 'Начинаете работать с системой.',
    bullets: [ 'Контроль первых дней работы', 'Техническая поддержка']
  }
]
</script>

<template>
  <section class="py-20 bg-gray-50 border-t border-gray-100">
    <div class="container mx-auto px-6">
      
      <!-- Заголовок -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
          7 шагов к <span class="text-red-600">системному</span> бизнесу
        </h2>
        <p class="text-gray-500">
          Весь путь внедрения: от знакомства до результата.
        </p>
      </div>

      <!-- СЕТКА (GRID) -->
      <!-- gap-x-12: дает место для стрелки справа на планшете/ПК -->
      <!-- gap-y-12: дает место для стрелки снизу на телефоне -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 lg:gap-y-16">
        
        <div 
          v-for="(stage, index) in stages" 
          :key="stage.id"
          class="relative group"
          :class="{ 
            'md:col-span-2 lg:col-span-1 lg:col-start-2': index === 6,
            'md:mx-auto md:w-2/3 lg:w-full lg:mx-0': index === 6
          }" 
        >
          <!-- 
            Логика центровки 7-го элемента (:class выше):
            1. На планшете (md) он занимает 2 колонки (всю ширину), и мы сжимаем его до 2/3 и центруем.
            2. На ПК (lg) он встает во 2-ю колонку (по центру).
          -->
          
          <!-- САМА КАРТОЧКА -->
          <div class="relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-red-900/5 hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full z-10">
            <!-- Красная полоска сверху -->
            <div class="absolute top-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

            <!-- Фоновая цифра -->
            <div class="absolute -right-4 -top-6 text-8xl font-black text-gray-100 group-hover:text-red-50 transition-colors duration-300 select-none pointer-events-none">
              {{ stage.id }}
            </div>

            <div class="relative z-10">
              <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                {{ stage.title }}
              </h3>
              
              <p class="text-sm text-gray-500 font-medium mb-4 min-h-[40px]">
                {{ stage.desc }}
              </p>

              <ul class="space-y-2">
                <li v-for="bullet in stage.bullets" :key="bullet" class="flex items-start text-sm text-gray-600">
                  <span class="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 mr-2 shrink-0 opacity-70"></span>
                  {{ bullet }}
                </li>
              </ul>
            </div>
          </div>

          <!-- СТРЕЛКА -->
          <!-- ИЗМЕНЕНИЯ: заменил lg: на md: -->
          <!-- Теперь на планшете (md) стрелка уже сбоку -->
          <div 
            v-if="index !== stages.length - 1" 
            class="absolute text-gray-300 z-0 transition-colors duration-300 group-hover:text-red-500
                   left-1/2 -translate-x-1/2 -bottom-10 rotate-90
                   md:left-auto md:translate-x-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:-right-10 md:rotate-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>