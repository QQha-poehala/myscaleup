<script setup>
import { ref } from 'vue'

const questions = [
  {
    q: 'Сколько времени занимает внедрение?',
    a: 'Базовое внедрение занимает от 3 до 7 дней. Сложные проекты с разработкой и интеграциями могут длиться от 2 до 6 недель. Мы фиксируем сроки в договоре.'
  },
  {
    q: 'Нужно ли останавливать работу компании?',
    a: 'Нет. Мы настраиваем систему параллельно с вашей работой. Переход происходит плавно: сначала обучаем сотрудников, потом переключаем процессы в новую CRM.'
  },
  {
    q: 'Входит ли обучение в стоимость?',
    a: 'Да, обязательно. Мы проводим онлайн-вебинар для сотрудников, записываем видеоинструкции и пишем регламенты. Вы получаете не просто программу, а обученную команду.'
  },
  {
    q: 'Что, если нам не подойдет Битрикс24?',
    a: 'На этапе аудита мы честно скажем, какая система лучше решит ваши задачи (amoCRM или Битрикс24). Если ни одна из них не подходит — мы не будем навязывать внедрение.'
  },
  {
    q: 'Есть ли техническая поддержка?',
    a: 'Да, после сдачи проекта мы предоставляем 2 недели бесплатного сопровождения: отвечаем на вопросы, правим мелкие недочеты и помогаем привыкнуть к системе.'
  }
]

const activeIndex = ref(0) 

const toggle = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null
  } else {
    activeIndex.value = index
  }
}
</script>

<template>
  <section class="py-24 bg-white px-6 relative overflow-hidden">

    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
      <svg class="relative block w-full h-12 md:h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48V0h1200v120z" class="fill-gray-900"></path>
      </svg>
    </div>

    <div class="container mx-auto relative z-20">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <!-- ЛЕВАЯ КОЛОНКА -->
        <div>
          <div class="mb-10">
            <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
              Часто задаваемые  <span class="text-red-600">вопросы</span>
            </h2>
          </div>

          <div class="space-y-4">
            <div 
              v-for="(item, index) in questions" 
              :key="index"
              class="group"
            >
              <!-- КНОПКА -->
              <button 
                @click="toggle(index)"
                class="w-full flex items-center justify-between p-6 rounded-3xl border transition-all duration-300 text-left outline-none"
                :class="[
                  activeIndex === index 
                    ? 'bg-gray-900 border-gray-900 text-white shadow-lg' 
                    : 'bg-white border-gray-200 text-gray-800 hover:border-red-500 hover:text-red-600'
                ]"
              >
                <span class="font-bold text-lg pr-4">{{ item.q }}</span>
                
                <!-- Стрелка -->
                <span 
                  class="w-8 h-8 flex items-center justify-center rounded-full border shrink-0 transition-transform duration-300"
                  :class="[
                    activeIndex === index 
                      ? 'bg-white text-gray-900 border-white rotate-180' 
                      : 'bg-transparent border-gray-300 group-hover:border-red-500'
                  ]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>

              <!-- ОТВЕТ -->
              <div 
                v-show="activeIndex === index"
                class="px-6 pb-4 pt-2 text-gray-600 leading-relaxed"
              >
                {{ item.a }}
              </div>
            </div>
          </div>
        </div>

        <!-- Фотография -->
        <div class="relative hidden lg:block h-full min-h-[700px]">
          <img 
            src="/faq.png" 
            alt="FAQ" 
            class="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>