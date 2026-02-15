<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import CaseCard from './CaseCard.vue' 

const cases = [
  {
    logo: '/keyslogo/logo.png', 
    company: 'Global Logistics',
    industry: 'Логистика',
    desc: 'Автоматизация отдела продаж. Внедрение воронки "Холодный звонок -> Договор". Интеграция с 1С и телефонией.'
  },
  {
    logo: '/keyslogo/logo.png', 
    company: 'Этажи Недвижимость',
    industry: 'Недвижимость',
    desc: 'Создание виджета для авто-выгрузки объектов на Авито. Сквозная аналитика рекламных каналов.'
  },
  {
    logo: '/keyslogo/logo.png', 
    company: 'Dental Clinic',
    industry: 'Медицина',
    desc: 'Чат-бот для записи пациентов через WhatsApp. Автоматические напоминания о приеме.'
  },
  {
    logo: '/keyslogo/logo.png', 
    company: 'Fashion Store',
    industry: 'E-commerce',
    desc: 'Синхронизация остатков склада с сайтом. Единая база заказов в CRM. Увеличение скорости обработки на 40%.'
  },
  {
    logo: '/keyslogo/logo.png', 
    company: 'Law Partners',
    industry: 'Услуги',
    desc: 'Генерация договоров по шаблонам за 1 клик. Контроль сроков судебных заседаний и автоматическая постановка задач юристам.'
  },
  {
    logo: '/keyslogo/logo.png', 
    company: 'Auto Dealer',
    industry: 'Автобизнес',
    desc: 'Интеграция с телефонией. Запись звонков и автоматическое создание сделок при входящем.'
  }
]

const currentIndex = ref(0)
const itemsPerPage = ref(3) // По умолчанию 3, но пересчитается при маунте

// Логика адаптивности (сколько карточек показывать)
const updateItemsPerPage = () => {
  const width = window.innerWidth
  if (width < 768) {
    itemsPerPage.value = 1
  } else if (width < 1024) {
    itemsPerPage.value = 2
  } else {
    itemsPerPage.value = 3
  }
}

// Логика кнопки "Вправо"
// Сдвигаем индекс. Если дошли до края (total - visible), сбрасываем в 0.
const nextSlide = () => {
  const maxIndex = cases.length - itemsPerPage.value
  
  if (currentIndex.value < maxIndex) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

onMounted(() => {
  updateItemsPerPage()
  window.addEventListener('resize', updateItemsPerPage)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerPage)
})
</script>

<template>
  <!-- 
    bg-gray-900: Темный фон.
    -mb-px: Отрицательный отступ в 1px снизу. 
    Это заставляет следующий блок (FAQ) наехать на 1 пиксель на этот блок.
    Это физически уничтожает любую возможность появления "серой линии" между блоками.
    z-10: Чтобы лежать под следующим блоком.
  -->
  <section id="experience" class="bg-gray-900 py-24 relative z-10 -mb-px">
    <div class="container mx-auto px-6">
      
      <!-- Шапка: Заголовок + Кнопка -->
      <div class="flex flex-row justify-between items-end mb-12 gap-6">
        
        <!-- Заголовок -->
        <div class="max-w-2xl">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-0 text-white leading-tight">
            Нам доверяют <span class="text-red-600">свой рост</span>
          </h2>
        </div>

        <!-- Кнопка (Стрелка вправо) -->
        <button 
          @click="nextSlide" 
          class="shrink-0 w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 bg-transparent hover:border-red-600 hover:text-white hover:bg-red-600 transition-all duration-300 active:scale-95 group focus:outline-none"
          aria-label="Следующий кейс"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 transform group-hover:translate-x-1 transition-transform">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>

      <!-- Контейнер слайдера -->
      <!-- overflow-hidden только здесь. Он не режет фон секции, а только скрывает карточки -->
      <div class="overflow-hidden -mx-4 px-4 py-4">
        
        <!-- Движущаяся лента -->
        <div 
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }"
        >
          <div 
            v-for="(item, index) in cases" 
            :key="index"
            class="shrink-0 px-3 box-border"
            :style="{ width: `${100 / itemsPerPage}%` }"
          >
            <!-- Карточка -->
            <CaseCard 
              :logo="item.logo"
              :company="item.company"
              :industry="item.industry"
              :desc="item.desc"
            />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>