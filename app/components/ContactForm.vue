<script setup>
// Здесь можно будет добавить логику отправки формы
</script>

<template>
  <section id="contact" class="py-20 px-6 relative overflow-hidden">
    
    <!-- ФОНОВАЯ КАРТИНКА -->
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
      style="background-image: url('/footpage.jpg');"
    ></div>
    <!-- ЗАТЕМНЕНИЕ-->
    <div class="absolute inset-0 bg-gray-900/95 z-0"></div>

    <!-- КОНТЕНТ ФОРМЫ -->
    <div class="container mx-auto max-w-6xl relative z-10">
      
      <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <!-- ЛЕВАЯ КОЛОНКА: Контакты -->
        <div class="text-white">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Давайте обсудим <br> <span class="text-red-500">ваш проект</span>
          </h2>
          <p class="text-gray-400 mb-10 text-lg">
            Свяжитесь с нами любым удобным способом. Мы проведем бесплатный аудит и предложим решение.
          </p>

          <div class="space-y-6">
            <!-- Телефон -->
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <div class="text-sm text-gray-400">Позвонить нам</div>
                <a href="tel:+79529263803" class="text-xl font-bold hover:text-red-500 transition-colors">+7 (952) 926-38-03</a>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <div class="text-sm text-gray-400">Написать на почту</div>
                <a href="mailto:hello@myscaleup.ru" class="text-xl font-bold hover:text-red-500 transition-colors">info@scaleup.ru</a>
              </div>
            </div>

            <!-- Мессенджеры -->
             <div class="flex flex-wrap gap-3 pt-6">
              
              <!-- WhatsApp -->
              <a href="#" class="group flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-green-600/20 hover:border-green-600/50 transition-all hover:-translate-y-1">
                <img src="/whatsapplogo.png" alt="WhatsApp" class="w-6 h-6 object-contain" />
                <span class="font-medium text-gray-300 group-hover:text-green-400 transition-colors">WhatsApp</span>
              </a>

              <!-- Telegram -->
              <a href="#" class="group flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-blue-500/20 hover:border-blue-500/50 transition-all hover:-translate-y-1">
                <img src="/tglogo.png" alt="Telegram" class="w-6 h-6 object-contain" />
                <span class="font-medium text-gray-300 group-hover:text-blue-400 transition-colors">Telegram</span>
              </a>

              <!-- Виджет Max (дополнительная кнопка) -->
              <a href="#" class="group flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-purple-600/20 hover:border-purple-600/50 transition-all hover:-translate-y-1">
                <img src="/maxlogo.png" alt="Max" class="w-6 h-6 object-contain rounded-full" />
                <span class="font-medium text-gray-300 group-hover:text-purple-400 transition-colors">MAX</span>
              </a>

            </div>

            <!-- Адрес -->
             <div class="flex items-center gap-4 pt-4">
               <div class="w-10 h-10 flex items-center justify-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div class="text-gray-400 text-sm">Новосибирск</div>
            </div>
          </div>
        </div>

        <!-- ПРАВАЯ КОЛОНКА: Форма -->
        <div>
          <form class="bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl">
            <h3 class="text-white text-xl font-bold mb-6">Заявка на аудит</h3>
            
            <div class="space-y-4">
              <div>
                <label class="text-xs font-medium text-gray-400 mb-1 block ml-1 uppercase tracking-wider">Ваше имя</label>
                <input type="text" class="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder-gray-600" placeholder="Иван Иванов">
              </div>
              <div>
                <label class="text-xs font-medium text-gray-400 mb-1 block ml-1 uppercase tracking-wider">Email или Телефон</label>
                <input type="text" class="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder-gray-600" placeholder="+7 (999) ...">
              </div>
              <div>
                <label class="text-xs font-medium text-gray-400 mb-1 block ml-1 uppercase tracking-wider">Задача</label>
                <textarea rows="3" class="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder-gray-600" placeholder="Опишите ваш запрос..."></textarea>
              </div>
            </div>
            
            <AppButton type="button" class="w-full mt-6 py-4 text-lg">
              Отправить заявку
            </AppButton>
            
            <p class="text-xs text-gray-500 text-center mt-4 opacity-70">Ваши данные в безопасности</p>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>