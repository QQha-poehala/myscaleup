<script setup lang="ts">
import type { Application } from '~/data/applications'

defineProps<{
  application: Application
}>()
</script>

<template>
  <NuxtLink
    :to="application.to"
    :aria-label="`Подробнее о приложении «${application.name}»`"
    class="group flex h-full min-h-[240px] flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-4 motion-reduce:transform-none motion-reduce:transition-none"
  >
    <div class="mb-4 flex items-start justify-between gap-4">
      <img
        :src="application.logo"
        :alt="`Логотип приложения «${application.name}»`"
        width="48"
        height="48"
        class="h-12 w-12 shrink-0 rounded-xl object-contain object-left"
      >
    </div>

    <h2 class="mb-3 text-xl font-bold leading-tight transition-colors group-hover:text-red-600">
      {{ application.name }}
    </h2>
    <p class="flex-grow text-sm leading-relaxed text-gray-500">
      {{ application.description }}
    </p>

    <span class="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-600">
      Подробнее
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m-6-6 6 6-6 6" />
      </svg>
    </span>
  </NuxtLink>
</template>
