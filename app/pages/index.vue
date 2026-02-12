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
    <TheBenefits />
    <ThePainPoints />
    <DevelopmentStages />
    <TheCases />
    <TheFAQ />
    <ContactForm />
    <TheFooter />
  </div>
</template>