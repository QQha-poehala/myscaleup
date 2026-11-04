import { biReports, biReportsSupport } from './biReports'

export const biReportsLegal = {
  proprietor: 'Индивидуальный предприниматель Болотников Станислав Михайлович',
  inn: '541014640227',
  address: '630090, г. Новосибирск, ул. Академическая, д. 17',
  email: biReportsSupport.email,
  edition: '2 ноября 2026 года',
  licensePath: '/docs/bi-reports-license',
  privacyPath: '/docs/bi-reports-privacy',
}

// Общие документы относятся только к штатным отчётам BI Конструктора.
// При добавлении отчёта обновите редакцию; иные потоки данных требуют иных условий.
export const licensedBiReports = biReports.map(({ name }) => ({ name }))

// Отдельные документы приложения по требованию модерации Маркетплейса.
export const unansweredLeadsLegal = {
  ...biReportsLegal,
  name: 'Лиды без ответа [MyScaleUp]',
  edition: '4 ноября 2026 года',
  licensePath: '/docs/unanswered-leads-license',
  privacyPath: '/docs/unanswered-leads-privacy',
}
