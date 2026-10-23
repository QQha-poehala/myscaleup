import content from './biReports.json'

export interface BiReport {
  slug: string
  name: string
  description: string
  logo: string
  intro: string
  sections: { title: string; items: string[] }[]
  metrics: { name: string; description: string }[]
  filters: { name: string; description: string }[]
  requirements: string[]
  limitations: string[]
  installation: { title: string; text: string }[]
  imageNote: string
  images: { src: string; alt: string; caption: string }[]
}

// Общие данные страниц, каталога и юридического перечня BI-отчётов.
// Новый отчёт добавляется в biReports.json только под точным названием Маркетплейса.
export const biReports: BiReport[] = content.reports
export const biReportsSupport = content.support
export const biReportPath = (slug: string) => `/apps/${slug}`
