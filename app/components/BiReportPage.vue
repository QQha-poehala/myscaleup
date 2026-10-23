<script setup lang="ts">
import { biReportPath, biReportsSupport as support, type BiReport } from '~/data/biReports'
import { biReportsLegal } from '~/data/biReportsLegal'

defineProps<{ report: BiReport }>()

const sections = [
  { id: 'features', title: 'Возможности' },
  { id: 'methodology', title: 'Показатели' },
  { id: 'installation', title: 'Установка' },
  { id: 'requirements', title: 'Условия' },
  { id: 'support', title: 'Поддержка' },
]
</script>

<template>
  <div class="bg-white font-sans text-gray-900 antialiased selection:bg-red-100 selection:text-red-900">
    <TheHeader />
    <main class="px-6 pb-20 pt-32">
      <div class="container mx-auto max-w-6xl">
        <NuxtLink to="/applist" class="mb-6 inline-flex text-sm font-medium text-gray-600 hover:text-red-600">← Все решения</NuxtLink>
        <header class="rounded-3xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-white p-6 md:p-10">
          <img :src="report.logo" alt="" width="64" height="64" class="mb-5 h-16 w-16">
          <p class="mb-3 text-sm font-bold uppercase tracking-wider text-red-600">BI-отчёт для Битрикс24</p>
          <h1 class="mb-5 break-words text-3xl font-extrabold leading-tight md:text-5xl">{{ report.name }}</h1>
          <p class="max-w-4xl text-lg leading-relaxed text-gray-600">{{ report.intro }}</p>
          <div class="mt-7 flex flex-wrap gap-3">
            <AppButton to="#installation">Как установить</AppButton>
            <AppButton to="https://myscaleup.ru" variant="secondary">Запросить демонстрацию</AppButton>
          </div>
        </header>
        <nav aria-label="Разделы страницы отчёта" class="my-8 flex flex-wrap gap-3">
          <a v-for="section in sections" :key="section.id" :href="`#${section.id}`" class="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-red-200 hover:text-red-600">{{ section.title }}</a>
        </nav>

        <section id="features" class="scroll-mt-28 space-y-8">
          <div v-for="section in report.sections" :key="section.title" class="rounded-2xl border border-gray-100 bg-slate-50 p-6 md:p-8">
            <h2 class="mb-5 text-2xl font-bold">{{ section.title }}</h2>
            <ul class="list-disc space-y-3 pl-5 leading-relaxed text-gray-600"><li v-for="item in section.items" :key="item">{{ item }}</li></ul>
          </div>
          <div class="space-y-6">
            <figure v-for="image in report.images" :key="image.src" class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <img :src="image.src" :alt="image.alt" loading="lazy" class="h-auto w-full">
              <figcaption class="px-5 py-3 text-sm text-gray-500">{{ image.caption }}</figcaption>
            </figure>
            <p class="text-sm leading-relaxed text-gray-500">{{ report.imageNote }}</p>
          </div>
        </section>

        <section id="methodology" class="scroll-mt-28 pt-16">
          <h2 class="mb-6 text-3xl font-bold">Как считаются показатели</h2>
          <dl class="grid gap-5 md:grid-cols-2">
            <div v-for="metric in report.metrics" :key="metric.name" class="rounded-2xl border border-gray-100 p-6">
              <dt class="mb-3 text-lg font-bold">{{ metric.name }}</dt><dd class="leading-relaxed text-gray-600">{{ metric.description }}</dd>
            </div>
          </dl>
          <h3 class="mb-5 mt-10 text-2xl font-bold">Фильтры и настройки</h3>
          <dl class="space-y-4">
            <div v-for="filter in report.filters" :key="filter.name"><dt class="font-bold">{{ filter.name }}</dt><dd class="mt-1 leading-relaxed text-gray-600">{{ filter.description }}</dd></div>
          </dl>
        </section>

        <section id="installation" class="scroll-mt-28 pt-16">
          <h2 class="mb-7 text-3xl font-bold">Установка и первый запуск</h2>
          <ol class="space-y-5">
            <li v-for="(step, index) in report.installation" :key="step.title" class="flex gap-4 rounded-2xl bg-slate-50 p-5 md:p-6">
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-700">{{ index + 1 }}</span>
              <div class="min-w-0"><h3 class="mb-2 text-lg font-bold">{{ step.title }}</h3><p class="break-words leading-relaxed text-gray-600">{{ step.text }}</p></div>
            </li>
          </ol>
          <p class="mt-5 leading-relaxed text-gray-600">Дополнительная информация: <a href="https://helpdesk.bitrix24.ru/open/19123608/" target="_blank" rel="noopener noreferrer" class="text-red-600 underline underline-offset-4">начало работы с BI Конструктором</a>, <a href="https://helpdesk.bitrix24.ru/open/19498394/" target="_blank" rel="noopener noreferrer" class="text-red-600 underline underline-offset-4">редактирование отчётов</a>, <a href="https://helpdesk.bitrix24.ru/open/25556500/" target="_blank" rel="noopener noreferrer" class="text-red-600 underline underline-offset-4">права доступа</a>.</p>
        </section>

        <section id="requirements" class="scroll-mt-28 pt-16">
          <h2 class="mb-6 text-3xl font-bold">Требования и дополнительные условия</h2>
          <ul class="list-disc space-y-3 pl-5 leading-relaxed text-gray-600"><li v-for="item in report.requirements" :key="item" class="break-words">{{ item }}</li></ul>
          <h3 class="mb-5 mt-9 text-2xl font-bold">Что важно учитывать</h3>
          <ul class="list-disc space-y-3 pl-5 leading-relaxed text-gray-600"><li v-for="item in report.limitations" :key="item">{{ item }}</li></ul>
          <p class="mt-6 text-sm leading-relaxed text-gray-500">Актуальные функции тарифов: <a href="https://www.bitrix24.ru/prices/compare_cloud_plans.php" target="_blank" rel="noopener noreferrer" class="text-red-600 underline underline-offset-4">сравнение тарифов Битрикс24</a>. Возможности платформы и условия доступа могут меняться.</p>
        </section>

        <section id="support" class="scroll-mt-28 pt-16">
          <h2 class="mb-6 text-3xl font-bold">Поддержка и обратная связь</h2>
          <dl class="space-y-4 leading-relaxed">
            <div><dt class="font-bold">Почта</dt><dd><a :href="`mailto:${support.email}`" class="break-all text-red-600 underline underline-offset-4">{{ support.email }}</a></dd></div>
            <div><dt class="font-bold">Телефон</dt><dd><a :href="support.phoneHref" class="text-red-600">{{ support.phone }}</a></dd></div>
            <div><dt class="font-bold">Мессенджеры</dt><dd class="flex flex-wrap gap-x-5 gap-y-2"><a :href="support.telegram" target="_blank" rel="noopener noreferrer" class="text-red-600 underline">Telegram</a><a :href="support.max" target="_blank" rel="noopener noreferrer" class="text-red-600 underline">MAX</a><a :href="support.whatsapp" target="_blank" rel="noopener noreferrer" class="text-red-600 underline">WhatsApp</a></dd></div>
            <div><dt class="font-bold">График работы</dt><dd class="text-gray-600">{{ support.hours }}</dd></div>
            <div><dt class="font-bold">Срок ответа</dt><dd class="text-gray-600">{{ support.responseTime }}</dd></div>
          </dl>
          <div class="mt-8 rounded-2xl bg-slate-50 p-6">
            <h3 class="mb-4 text-xl font-bold">Что указать в форме для связи</h3>
            <ul class="list-disc space-y-2 pl-5 leading-relaxed text-gray-600">
              <li>Название отчёта «{{ report.name }}» и адрес портала Битрикс24.</li>
              <li>Тариф и облачную или коробочную версию портала.</li>
              <li>Вкладку или график, выбранный период и применённые фильтры.</li>
              <li>Дату и время ошибки, её текст, выполненные действия.</li>
              <li>Ожидаемый и фактический результат, контакт для ответа.</li>
            </ul>
            <p class="mt-4 leading-relaxed text-gray-600">Снимки экрана и файлы отправляйте по почте, скрыв имена клиентов и другие лишние сведения. Не отправляйте пароли, ключи BI, API-токены и полные выгрузки CRM. Для демонстрации достаточно названия отчёта, интересующей задачи и контакта.</p>
          </div>
          <div class="mt-7 flex flex-wrap gap-5 text-sm font-medium text-red-600">
            <NuxtLink :to="biReportsLegal.licensePath" class="underline underline-offset-4">Лицензионное соглашение</NuxtLink>
            <NuxtLink :to="biReportsLegal.privacyPath" class="underline underline-offset-4">Политика конфиденциальности</NuxtLink>
          </div>
          <p class="mt-6 text-sm text-gray-500">Страница отчёта: <NuxtLink :to="biReportPath(report.slug)" class="break-all text-red-600 underline">https://myscaleup.ru{{ biReportPath(report.slug) }}</NuxtLink></p>
        </section>
      </div>
    </main>
    <ContactForm :key="report.slug" :initial-message="`Вопрос по BI-отчёту «${report.name}». `" />
    <TheFooter />
    <TheCookieBanner />
  </div>
</template>
