<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  // Проверяем, было ли уже дано согласие
  const hasAccepted = localStorage.getItem('cookie_accepted')
  if (!hasAccepted) {
    // Показываем баннер с небольшой задержкой для плавности
    setTimeout(() => {
      isVisible.value = true
    }, 1000)
  }
})

const acceptCookies = () => {
  localStorage.setItem('cookie_accepted', 'true')
  isVisible.value = false
}
</script>

<template>
  <Transition name="cookie-fade">
    <div 
      v-if="isVisible" 
      class="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-sm z-[100]"
    >
      <div class="bg-gray-900 border border-white/10 shadow-2xl rounded-2xl p-6 backdrop-blur-md">
        <div class="flex items-start gap-4">
          <div class="flex-1">
            <h4 class="text-white font-bold mb-2">Файлы cookie 🍪</h4>
            <p class="text-gray-400 text-sm leading-relaxed">
              Мы используем их для анализа трафика и улучшения сайта. Оставаясь с нами, вы соглашаетесь с нашей 
              <NuxtLink to="/policy" class="text-red-500 hover:underline">политикой конфиденциальности</NuxtLink>.
            </p>
          </div>
        </div>
        
        <div class="mt-5">
          <button 
            @click="acceptCookies"
            class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-xl transition-colors text-sm"
          >
            Принять и продолжить
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-fade-enter-active,
.cookie-fade-leave-active {
  transition: all 0.5s ease;
}
.cookie-fade-enter-from,
.cookie-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>