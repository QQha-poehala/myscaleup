<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BenefitCard from './BenefitCard.vue'

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      observer.disconnect()
    }
  }, { threshold: 0.1 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section ref="sectionRef" class="py-20 bg-white px-6 relative overflow-hidden">
    <!-- Декор фона -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(#cc0000 1px, transparent 1px); background-size: 20px 20px;"></div>

    <div class="container mx-auto relative z-10">
      
      <!-- Заголовок  -->
      <div 
        class="text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out"
        :class="isVisible ? 'opacity-200 translate-y-0' : 'opacity-0 translate-y-20'"
      >
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
          Почему бизнес выбирает <span class="text-red-600">Scale</span>Up?
        </h2>
        <p class="text-gray-500 text-lg">
          Мы минимизируем риски, с которыми сталкиваются компании при внедрении CRM. 
          Создаем инструменты, которые приносят прибыль.
        </p>
      </div>
      
      <!-- Контейнер карточек -->
      <div class="flex flex-wrap justify-center gap-6">
        
        <!-- 1. Стоимость -->
        <BenefitCard 
          title="Стоимость" 
          description="Наши цены <strong>ниже рынка</strong>, потому что у нас нет раздутого штата. Вы платите только за результат, а стоимость фиксируется на старте."
          class="transition-all duration-700 ease-out transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          style="transition-delay: 500ms"
        >
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </template>
        </BenefitCard>

        <!-- 2. IT-команда -->
        <BenefitCard 
          title="Сильная IT-команда" 
          description="Объединяем узкопрофильных инженеров для решения любых задач: от сложных интеграций с 1С до разработки <strong>уникальных</strong> локальных приложений."
          class="transition-all duration-700 ease-out transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          style="transition-delay: 750ms"
        >
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>
          </template>
        </BenefitCard>

        <!-- 3. Гарантия -->
        <BenefitCard 
          title="Гарантия результата" 
          description="Не бросаем после сдачи проекта. Дарим 2 часа <strong>бесплатной</strong> поддержки после внедрения на доработки и техническое обслуживание."
          class="transition-all duration-700 ease-out transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          style="transition-delay: 1000ms"
        >
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>
          </template>
        </BenefitCard>

        <!-- 4. Обучение -->
        <BenefitCard 
          title="Обучение команды" 
          description="Внедрение бесполезно, если сотрудники не умеют работать. Мы пишем регламенты, снимаем <strong>видеоуроки</strong> и проводим вебинары."
          class="transition-all duration-700 ease-out transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          style="transition-delay: 1250ms"
        >
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
          </template>
        </BenefitCard>

        <!-- 5. Личный эксперт -->
        <BenefitCard 
          title="Ваш личный эксперт" 
          description="Ваш проект ведет <strong>один эксперт</strong> от первого звонка до сдачи. Никаких переключений между менеджерами и потери информации."
          class="transition-all duration-700 ease-out transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          style="transition-delay: 1500ms"
        >
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
          </template>
        </BenefitCard>

        <!-- 6. Время -->
        <BenefitCard 
          title="Экономия времени" 
          description="Не изобретаем велосипед там, где этого не нужно. Используем готовые решения и опыт предыдущих проектов, чтобы запустить вашу систему <strong>в 2 раза быстрее</strong>."
          class="transition-all duration-700 ease-out transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          style="transition-delay: 1750ms"
        >
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
          </template>
        </BenefitCard>

        <!-- 7. Связь -->
        <BenefitCard 
          title="На связи с вами" 
          description="Общаемся через удобные для вас каналы связи: от мессенджеров до обычных телефонных звонков. <strong>Никакой лишней бюрократии</strong>."
          class="transition-all duration-700 ease-out transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          style="transition-delay: 2000ms"
        >
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>
          </template>
        </BenefitCard>

      </div>
    </div>
  </section>
</template>