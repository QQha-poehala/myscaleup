<script setup lang="ts">
import { atiLegal } from '~/data/atiLegal'

defineProps<{
  title: string
  relatedPath: string
  relatedTitle: string
}>()
</script>

<template>
  <div class="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-900 antialiased selection:bg-red-100 selection:text-red-900">
    <TheHeader />

    <main class="flex-grow px-6 pb-20 pt-32">
      <div class="container mx-auto max-w-4xl">
        <NuxtLink :to="atiLegal.applicationPath" class="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-red-600">
          <span aria-hidden="true">←</span> К приложению
        </NuxtLink>

        <article class="rounded-3xl border border-gray-100 bg-white p-6 text-gray-800 shadow-sm md:p-12">
          <header class="mb-8 border-b border-gray-100 pb-6">
            <h1 class="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">{{ title }}</h1>
            <p class="mb-3 text-lg font-medium leading-relaxed">{{ atiLegal.applicationName }}</p>
            <p class="text-sm text-gray-500">Редакция от {{ atiLegal.edition }}</p>
          </header>

          <div class="legal-text space-y-8 text-sm leading-relaxed md:text-base">
            <slot />
          </div>

          <section class="mt-10 border-t border-gray-100 pt-8" aria-labelledby="legal-contacts">
            <h2 id="legal-contacts" class="mb-4 text-xl font-bold text-gray-900">Реквизиты и контакты</h2>
            <dl class="space-y-3 text-sm leading-relaxed md:text-base">
              <div><dt class="font-medium">Правообладатель и разработчик</dt><dd>{{ atiLegal.proprietor }}</dd></div>
              <div><dt class="inline font-medium">ИНН: </dt><dd class="inline">{{ atiLegal.inn }}</dd></div>
              <div><dt class="inline font-medium">Адрес: </dt><dd class="inline">{{ atiLegal.address }}</dd></div>
              <div><dt class="inline font-medium">Электронная почта: </dt><dd class="inline"><a :href="`mailto:${atiLegal.email}`" class="break-all text-red-600 underline underline-offset-4 hover:text-red-700">{{ atiLegal.email }}</a></dd></div>
            </dl>
          </section>

          <NuxtLink :to="relatedPath" class="mt-8 inline-block font-medium text-red-600 underline underline-offset-4 hover:text-red-700">{{ relatedTitle }}</NuxtLink>
        </article>
      </div>
    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
.legal-text :deep(h2) {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: #111827;
}

.legal-text :deep(p + p),
.legal-text :deep(ul + p),
.legal-text :deep(p + ul) {
  margin-top: 0.75rem;
}

.legal-text :deep(ul) {
  list-style-type: disc;
  padding-left: 1.25rem;
}

.legal-text :deep(li + li) {
  margin-top: 0.5rem;
}

.legal-text :deep(a) {
  color: #dc2626;
  text-decoration: underline;
  text-underline-offset: 3px;
  overflow-wrap: anywhere;
}
</style>
