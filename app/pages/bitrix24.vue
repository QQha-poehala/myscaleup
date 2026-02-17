<script setup>
import { ref } from 'vue'
useSeoMeta({
  title: 'Внедрение Битрикс24 — ScaleUp',
  description: 'Полный комплекс услуг по настройке Битрикс24: CRM, автоматизация, задачи, сайты и КЭДО.',
})
</script>

<template>
  <div class="font-sans antialiased text-gray-900 bg-white selection:bg-blue-100 selection:text-blue-900">
    <TheHeader />

    <!-- HERO BLOCK: BITRIX24 -->
    <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-slate-50">
      <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60 z-0 pointer-events-none"></div>
      <div class="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <!-- Текст -->
        <div>
           <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            Битрикс24 — <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">операционная система</span>
            вашего бизнеса
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Замените десятки разрозненных сервисов одной платформой. 
            Мы настроим Битрикс24 так, чтобы он работал на вашу прибыль, а не усложнял жизнь.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
             <AppButton to="#contact" variant="blue">
              Заказать внедрение
            </AppButton> 
            <AppButton to="#features" variant="secondary" class="border border-gray-300 hover:bg-white hover:text-blue-600">
              Изучить возможности
            </AppButton>
          </div>
        </div>
        
        <!-- Иллюстрация -->
        <div class="relative hidden lg:block">
          <div class="relative z-10 bg-white rounded-2xl shadow-2xl border border-gray-200 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
             <img 
               src="/b24_hero.png" 
               alt="Интерфейс Битрикс24" 
               class="rounded-xl w-full h-auto bg-gray-100 min-h-[400px] object-cover" 
               onerror="this.src='https://placehold.co/600x400/e2e8f0/1e293b?text=Image+Not+Found'"
             >
          </div>
          <!-- Декоративные круги -->
          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-sky-400 rounded-full blur-3xl opacity-20"></div>
        </div>
      </div>
    </section>

    <BitrixWindowFeatures />
    <BitrixConsultation />
    <DevelopmentStages color="blue" />
    <ContactForm color="blue" />
    <TheFooter color="blue" />
  </div>
</template>