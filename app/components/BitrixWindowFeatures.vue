<script setup>
import { ref, onMounted } from 'vue'
const features = [
  { title: 'CRM и Продажи', desc: 'Управляйте клиентами, а не записными книжками. Воронки, запись звонков, история.', icon: 'crm' },
  { title: 'Задачи и Проекты', desc: 'Канбан, Гант, Скрам. Контроль сроков и распределение нагрузки.', icon: 'tasks' },
  { title: 'Мессенджер', desc: 'Корпоративный чат, видеозвонки в HD, обмен файлами.', icon: 'mess' },
  { title: 'Автоматизация', desc: 'Роботы делают рутину за вас. Генерация документов, смена стадий.', icon: 'auto' },
  { title: 'Сайты и Магазины', desc: 'Конструктор лендингов, интегрированный с CRM.', icon: 'site' },
  { title: 'CoPilot (AI)', desc: 'ИИ внутри CRM. Расшифровка звонков, генерация писем.', icon: 'ai' },
  { title: 'КЭДО', desc: 'Подписывайте отпуска и приказы онлайн без бумаги.', icon: 'doc' },
  { title: 'Совместная работа', desc: 'Живая лента, база знаний, диск и календарь.', icon: 'people' }
]
const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1 } // Сработает, когда покажется 10% блока
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section id="features" ref="sectionRef" class="py-24 bg-white px-6 overflow-hidden">
    <div class="container mx-auto">
      <div 
        class="text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out delay-200"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
          Всё, что нужно для работы — <span class="text-blue-600">в одном окне</span>
        </h2>
        <p class="text-gray-500 text-lg">
          Битрикс24 закрывает потребности любого отдела: от продаж до бухгалтерии.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(feature, idx) in features" 
          :key="idx"
          class="group p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-700 ease-out"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          :style="{ transitionDelay: `${idx * 200 + 400}ms` }"
        >
          <div class="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
            <img 
              :src="`/icons24/icons_${feature.icon}.png`" 
              :alt="feature.title"
              class="w-8 h-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            >
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
            {{ feature.title }}
          </h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            {{ feature.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>