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
    name: 'MyScaleUp',
    description: 'Внедрение CRM и автоматизация бизнеса',
    defaultLocale: 'ru',
  },
  app: {
    baseURL: '/', 
    head: {
      htmlAttrs: { lang: 'ru' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
       script: [
        {
          innerHTML: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=110886707', 'ym');

            ym(110886707, 'init', {
              ssr:true, 
              webvisor:true, 
              clickmap:true, 
              trackLinks:true, 
              accurateTrackBounce:true
            });
          `,
          type: 'text/javascript',
        }
      ],
      // Добавляем noscript (на случай отключенного JS)
      noscript: [
        {
          innerHTML: '<div><img src="https://mc.yandex.ru/watch/110886707" style="position:absolute; left:-9999px;" alt="" /></div>'
        }
      ]
    }
  }
})