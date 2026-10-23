import { biReports, biReportPath } from './biReports'

export interface Application {
  slug: string
  name: string
  description: string
  logo: string
  to: string
}

export const cargoPublication: Application = {
  slug: 'integration-atisu',
  name: 'Публикация грузов (интеграция с ATI.SU)',
  description: 'Публикуйте грузы в ATI.SU прямо из сделки Битрикс24',
  logo: '/appslogo/ati.png',
  to: '/apps/integration-atisu',
}

export const applications: Application[] = [
  cargoPublication,
  ...biReports.map(report => ({
    slug: `bi-${report.slug}`,
    name: report.name,
    description: report.description,
    logo: report.logo,
    to: biReportPath(report.slug),
  })),
]
