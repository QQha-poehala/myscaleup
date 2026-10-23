<script setup lang="ts">
import { biReports } from '~/data/biReports'

const route = useRoute()
const report = computed(() => {
  const found = biReports.find(item => item.slug === route.params.slug)
  if (!found) throw createError({ statusCode: 404, statusMessage: 'BI report not found' })
  return found
})

useSeoMeta({
  title: () => `${report.value.name} — BI-отчёт для Битрикс24 | MyScaleUp`,
  description: () => report.value.description,
  ogTitle: () => report.value.name,
  ogDescription: () => report.value.description,
})
</script>

<template>
  <BiReportPage :report="report" />
</template>
