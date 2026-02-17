<script setup>
import { ref } from 'vue'

// Настраиваем SEO для этой страницы
useSeoMeta({
  title: 'Внедрение Битрикс24 — ScaleUp',
  description: 'Полный комплекс услуг по настройке Битрикс24: CRM, автоматизация, задачи, сайты и КЭДО.',
})
const features = [
  {
    title: 'CRM и Продажи',
    desc: 'Управляйте клиентами, а не записными книжками. Воронки продаж, карточки сделок, запись звонков и полная история коммуникаций в одном окне.',
    icon: 'crm'
  },
  {
    title: 'Задачи и Проекты',
    desc: 'Канбан, Гант, Скрам. Контролируйте сроки, распределяйте нагрузку и следите за эффективностью сотрудников. Никаких «я забыл».',
    icon: 'tasks'
  },
  {
    title: 'Мессенджер и Видеозвонки',
    desc: 'Корпоративный чат, защищенный от утечек. Видеоконференции в HD, обмен файлами и голосовые сообщения внутри портала.',
    icon: 'mess'
  },
  {
    title: 'Автоматизация (RPA)',
    desc: 'Роботы и бизнес-процессы делают рутину за вас. Автоматическая отправка писем, смена стадий, генерация документов и счетов.',
    icon: 'auto'
  },
  {
    title: 'Сайты и Магазины',
    desc: 'Конструктор лендингов и интернет-магазинов, которые уже интегрированы с CRM. Заявка с сайта мгновенно попадает к менеджеру.',
    icon: 'site'
  },
  {
    title: 'CoPilot (BitrixGPT)',
    desc: 'Искусственный интеллект внутри CRM. Расшифрует звонок, напишет продающее письмо, создаст задачу или резюмирует встречу.',
    icon: 'ai'
  },
  {
    title: 'КЭДО и Госключ',
    desc: 'Кадровый электронный документооборот. Подписывайте отпуска, приказы и договоры с сотрудниками онлайн, без бумаги.',
    icon: 'doc'
  },
  {
    title: 'Совместная работа',
    desc: 'Единое онлайн-пространство: Живая лента новостей, база знаний, облачное хранилище (Диск) и календарь компании.',
    icon: 'people'
  }
]
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

    <!-- FEATURES GRID -->
    <section id="features" class="py-24 bg-white px-6">
      <div class="container mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
            Всё, что нужно для работы — <span class="text-blue-600">в одном окне</span>
          </h2>
          <p class="text-gray-500 text-lg">
            Битрикс24 закрывает потребности любого отдела: от продаж и маркетинга до производства.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(feature, idx) in features" 
            :key="idx"
            class="group p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1">
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

    <!-- DARK SECTION -->
    <section class="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.05]" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 30px 30px;"></div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-8">
          Битрикс24 — это конструктор. <br>
          <span class="text-blue-500">ScaleUp</span> — это инженеры.
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
          Сама по себе программа не решит ваши проблемы. Хаос в процессах, перенесенный в CRM, становится автоматизированным хаосом. Мы проектируем систему под вашу логику, а не наоборот.
        </p>
        
        <div class="inline-flex gap-4">
          <AppButton to="#contact" class="!bg-blue-600 hover:!bg-blue-700 text-white shadow-lg shadow-blue-600/30 border-none">
            Обсудить проект
          </AppButton>
        </div>
      </div>
    </section>


    <ContactForm />
    <TheFooter />
  </div>
</template>