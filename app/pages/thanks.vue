<template>
  <div class="font-sans antialiased text-gray-900 bg-white selection:bg-red-100 selection:text-red-900 min-h-screen flex flex-col">
    <TheHeader />

    <!-- ОСНОВНОЙ КОНТЕНТ -->
    <main class="flex-grow flex items-center justify-center px-6 py-20 bg-gray-50">
      <div class="text-center max-w-2xl mx-auto">
        
        <!-- Анимированная иконка успеха -->
        <div class="mb-8 flex justify-center">
          <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center ring-4 ring-green-50 animate-bounce-slow">
            <svg class="w-14 h-14 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>

        <!-- Заголовок и текст -->
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
          Спасибо за обращение!
        </h1>
        <p class="text-xl text-gray-600 mb-10 leading-relaxed">
          Ваша заявка успешно отправлена. Наш эксперт свяжется с вами в ближайшее время для обсуждения деталей проекта.
        </p>

        <!-- Кнопка -->
        <AppButton to="/" class="text-lg px-8 py-4 shadow-xl shadow-red-600/20">
          Вернуться на главную
        </AppButton>

      </div>
    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
/* Небольшая кастомная анимация для иконки */
.animate-bounce-slow {
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>