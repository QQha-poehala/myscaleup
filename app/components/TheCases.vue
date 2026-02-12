<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

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
const itemsPerPage = ref(3) // Сколько карточек на экране

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

onMounted(() => {
  updateItemsPerPage()
  window.addEventListener('resize', updateItemsPerPage)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerPage)
})

const nextSlide = () => {
  const maxIndex = cases.length - itemsPerPage.value
  if (currentIndex.value >= maxIndex) {
    currentIndex.value = 0
  } else {
    currentIndex.value++
  }
}

const prevSlide = () => {
  const maxIndex = cases.length - itemsPerPage.value
  if (currentIndex.value <= 0) {
    currentIndex.value = maxIndex
  } else {
    currentIndex.value--
  }
}
</script>

<template>
  <section id="experience" class="relative bg-gray-900 overflow-hidden -mx-3 px-6 py-24">
    
    <!-- ВЕРХНИЙ ПЕРЕХОД -->
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
      <svg class="relative block w-full h-12 md:h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"  shape-rendering="geometricPrecision">
        <path d="M1200 120L0 16.48V0h1200v120z" class="fill-gray-50"></path>
      </svg>
    </div>

    <div class="container mx-auto relative z-20">
      
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div class="max-w-2xl">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            Нам доверяют <span class="text-red-500">свой рост</span>
          </h2>

        </div>

        <!-- Кнопки навигации (Десктоп) -->
        <div class="hidden md:flex gap-3">
          <button @click="prevSlide" class="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-red-500 hover:text-white hover:bg-red-600 transition-all active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button @click="nextSlide" class="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-red-500 hover:text-white hover:bg-red-600 transition-all active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      <!-- ОКНО СЛАЙДЕРА -->
      <div class="overflow-hidden -mx-3 px-3 py-4">
        <div 
          class="flex transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }"
        >
          <div 
            v-for="(item, index) in cases" 
            :key="index"
            class="shrink-0 box-border p-3"
            :style="{ width: `${100 / itemsPerPage}%` }"
          >
            <!-- Карточки остаются белыми для контраста -->
            <CaseCard 
              :logo="item.logo"
              :company="item.company"
              :industry="item.industry"
              :desc="item.desc"
            />
          </div>
        </div>
      </div>

      <!-- Кнопки навигации (Мобильные) -->
      <div class="flex md:hidden gap-3 justify-center mt-6">
        <button @click="prevSlide" class="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-red-500 hover:text-white hover:bg-red-600 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button @click="nextSlide" class="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-red-500 hover:text-white hover:bg-red-600 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

    </div>
  </section>
</template>