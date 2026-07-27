<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import emailjs from '@emailjs/browser'

const isVisible = ref(false)
const isAgreed = ref(false)
const isLoading = ref(false)
const isClosedManually = ref(false)

const formData = reactive({
  name: '',
  contact: '',
  message: ''
})

const errors = reactive({
  name: '',
  contact: '',
  message: ''
})

const limits = {
  name: { min: 2, max: 80 },
  contact: { min: 5, max: 100 },
  message: { min: 10, max: 1000 }
}

const validateName = (value) => {
  const trimmed = value.trim()
  if (!trimmed) return 'Введите имя'
  if (trimmed.length < limits.name.min) return `Минимум ${limits.name.min} символа`
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s\-\.]+$/
  if (!nameRegex.test(trimmed)) return 'Только буквы'
  return ''
}

const validateContact = (value) => {
  const trimmed = value.trim()
  if (!trimmed) return 'Введите email или телефон'
  const isEmail = trimmed.includes('@')
  if (isEmail) {
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(trimmed)) return 'Некорректный email'
  } else {
    const digits = trimmed.replace(/\D/g, '')
    if (digits.length < 7) return 'Телефон слишком короткий'
  }
  return ''
}

const validateMessage = (value) => {
  const trimmed = value.trim()
  if (!trimmed) return 'Опишите задачу'
  if (trimmed.length < limits.message.min) return `Минимум ${limits.message.min} симв.`
  return ''
}

const handleSubmit = async () => {
  if (!isAgreed.value) {
    alert('Подтвердите согласие на обработку данных')
    return
  }

  errors.name = validateName(formData.name)
  errors.contact = validateContact(formData.contact)
  errors.message = validateMessage(formData.message)

  if (errors.name || errors.contact || errors.message) return

  const SERVICE_ID = 'service_biwgcys'
  const TEMPLATE_ID = 'template_k389evd'
  const PUBLIC_KEY = '4blR_h0n83lKqxHD1'

  try {
    isLoading.value = true
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      user_name: formData.name,
      user_contact: formData.contact,
      message_body: formData.message
    }, PUBLIC_KEY)
    
    isVisible.value = false
    await navigateTo('/thanks')
  } catch (error) {
    console.error(error)
    alert('Ошибка при отправке.')
  } finally {
    isLoading.value = false
  }
}

const closeForm = () => {
  isVisible.value = false
  isClosedManually.value = true
  // Сохраняем в сессию, чтобы не надоедать пользователю при переходе по страницам
  sessionStorage.setItem('popup_closed', 'true')
}

onMounted(() => {
  const hasBeenClosed = sessionStorage.getItem('popup_closed')
  if (!hasBeenClosed) {
    setTimeout(() => {
      if (!isClosedManually.value) {
        isVisible.value = true
      }
    }, 7000)
  }
})
</script>

<template>
  <Transition name="slide">
    <div 
      v-if="isVisible" 
      class="fixed top-0 right-0 h-full w-full md:w-[35%] z-[100] p-4 md:p-8 flex items-center"
    >
      <!-- Основная подложка формы -->
      <div class="bg-gray-900/95 backdrop-blur-xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative flex flex-col p-6 md:p-10">
        
        <!-- Кнопка закрытия -->
        <button 
          @click="closeForm"
          class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2"
          aria-label="Закрыть"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="mb-6">
          <h3 class="text-white text-2xl md:text-3xl font-bold mb-2">Обсудим проект?</h3>
          <p class="text-gray-400 text-sm">Оставьте контакты, и мы перезвоним вам в ближайшее время</p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <input 
              type="text" 
              v-model="formData.name"
              placeholder="Ваше имя"
              class="w-full bg-white/5 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
            >
            <p v-if="errors.name" class="text-red-400 text-xs mt-1">{{ errors.name }}</p>
          </div>

          <div>
            <input 
              type="text" 
              v-model="formData.contact"
              placeholder="Телефон или Email"
              class="w-full bg-white/5 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
            >
            <p v-if="errors.contact" class="text-red-400 text-xs mt-1">{{ errors.contact }}</p>
          </div>

          <div>
            <textarea 
              v-model="formData.message"
              placeholder="Кратко о вашей задаче"
              rows="3"
              class="w-full bg-white/5 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all resize-none"
            ></textarea>
            <p v-if="errors.message" class="text-red-400 text-xs mt-1">{{ errors.message }}</p>
          </div>

          <div class="flex items-start gap-3">
            <input 
              id="popup-policy" 
              type="checkbox" 
              v-model="isAgreed"
              class="mt-1 w-4 h-4 rounded border-gray-600 bg-gray-800 text-red-600 focus:ring-red-500"
            >
            <label for="policy" class="text-xs text-gray-400 cursor-pointer select-none leading-relaxed">
                Нажимая кнопку, я даю согласие на  
                <NuxtLink to="/agreement" target="_blank" class="underline hover:text-white transition-colors">
                  обработку персональных данных
                </NuxtLink>
                и соглашаюсь с 
                <NuxtLink to="/policy" target="_blank" class="underline hover:text-white transition-colors">
                  политикой конфиденциальности
                </NuxtLink>
              </label>
          </div>

          <button 
            type="submit" 
            :disabled="isLoading || !isAgreed"
            class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-red-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isLoading">Отправить заявку</span>
            <span v-else class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
          </button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Анимация вылета справа */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Стилизация скроллбара внутри формы, если текста много */
div::-webkit-scrollbar {
  width: 4px;
}
div::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}
div::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
</style>