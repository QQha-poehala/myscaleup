export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo'
  ],
  site: {
    url: 'https://myscaleup.ru', 
    name: 'ScaleUp',
    description: 'Внедрение CRM и автоматизация бизнеса',
    defaultLocale: 'ru',
  },
  app: {
    baseURL: '/', 
    head: {
      htmlAttrs: { lang: 'ru' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})