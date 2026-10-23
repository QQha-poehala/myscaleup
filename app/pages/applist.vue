<script setup lang="ts">
import { applications } from '~/data/applications'

useSeoMeta({
  title: 'Приложения и BI-отчёты — MyScaleUp',
  description: 'Приложения, интеграции и BI-отчёты MyScaleUp для Битрикс24: публикация грузов в ATI.SU и анализ упущенных продаж.',
  ogTitle: 'Приложения и BI-отчёты — MyScaleUp',
  ogDescription: 'Готовые приложения, интеграции и аналитические отчёты для ваших бизнес-процессов.',
})
</script>

<template>
  <div class="bg-white font-sans text-gray-900 antialiased selection:bg-red-100 selection:text-red-900">
    <TheHeader />

    <main class="relative min-h-screen overflow-hidden bg-slate-50 px-6 pb-16 pt-32">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 bg-gradient-to-bl from-red-50/70 via-transparent to-transparent"></div>
      <div class="container relative mx-auto max-w-6xl">
        <div class="mb-8">
          <h1 class="mb-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Приложения и <span class="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">BI-отчёты</span>
          </h1>
          <p class="max-w-2xl text-lg leading-relaxed text-gray-600">
            Готовые решения, интеграции и аналитические отчёты для Битрикс24.
          </p>
        </div>

        <div class="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2">
          <ApplicationCard
            v-for="application in applications"
            :key="application.slug"
            :application="application"
          />
        </div>
      </div>
    </main>

    <ContactForm />
    <TheFooter />
    <TheCookieBanner />
  </div>
</template>
