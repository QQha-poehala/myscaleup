<script setup lang="ts">
import { biReportsLegal, licensedBiReports } from '~/data/biReportsLegal'

defineProps<{ title: string; relatedPath: string; relatedTitle: string }>()
</script>

<template>
  <div class="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-900 antialiased selection:bg-red-100 selection:text-red-900">
    <TheHeader />
    <main class="flex-grow px-6 pb-20 pt-32">
      <div class="container mx-auto max-w-4xl">
        <NuxtLink to="/applist" class="mb-6 inline-flex text-sm font-medium text-gray-600 hover:text-red-600">← К решениям MyScaleUp</NuxtLink>
        <article class="rounded-3xl border border-gray-100 bg-white p-6 text-gray-800 shadow-sm md:p-12">
          <header class="mb-8 border-b border-gray-100 pb-6">
            <h1 class="mb-4 break-words text-3xl font-bold leading-tight md:text-4xl">{{ title }}</h1>
            <p class="mb-3 text-lg font-medium">BI-отчёты MyScaleUp для BI Конструктора Битрикс24</p>
            <p class="text-sm text-gray-500">Редакция от {{ biReportsLegal.edition }}</p>
          </header>
          <section class="mb-8 rounded-2xl border border-red-100 bg-red-50 p-5" aria-labelledby="covered-reports">
            <h2 id="covered-reports" class="mb-3 text-lg font-bold">Отчёты, на которые распространяется документ</h2>
            <ul class="list-disc space-y-2 pl-5 leading-relaxed">
              <li v-for="report in licensedBiReports" :key="report.name">«{{ report.name }}»</li>
            </ul>
          </section>
          <div class="legal-text space-y-8 text-sm leading-relaxed md:text-base"><slot /></div>
          <section id="contact" class="mt-10 scroll-mt-28 border-t border-gray-100 pt-8" aria-labelledby="bi-legal-contacts">
            <h2 id="bi-legal-contacts" class="mb-4 text-xl font-bold">Реквизиты и контакты разработчика</h2>
            <dl class="space-y-3 text-sm leading-relaxed md:text-base">
              <div><dt class="font-medium">Лицензиар и разработчик</dt><dd>{{ biReportsLegal.proprietor }}</dd></div>
              <div><dt class="inline font-medium">ИНН: </dt><dd class="inline">{{ biReportsLegal.inn }}</dd></div>
              <div><dt class="inline font-medium">Адрес: </dt><dd class="inline">{{ biReportsLegal.address }}</dd></div>
              <div><dt class="font-medium">Электронная почта</dt><dd><a :href="`mailto:${biReportsLegal.email}`" class="break-all text-red-600 underline underline-offset-4">{{ biReportsLegal.email }}</a></dd></div>
            </dl>
          </section>
          <NuxtLink :to="relatedPath" class="mt-8 inline-block font-medium text-red-600 underline underline-offset-4">{{ relatedTitle }}</NuxtLink>
        </article>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.legal-text :deep(h2) { margin-bottom: 1rem; font-size: 1.25rem; line-height: 1.75rem; font-weight: 700; }
.legal-text :deep(p + p), .legal-text :deep(ul + p), .legal-text :deep(p + ul) { margin-top: 0.75rem; }
.legal-text :deep(ul) { list-style-type: disc; padding-left: 1.25rem; }
.legal-text :deep(li + li) { margin-top: 0.5rem; }
.legal-text :deep(a) { color: #dc2626; text-decoration: underline; text-underline-offset: 3px; overflow-wrap: anywhere; }
</style>
