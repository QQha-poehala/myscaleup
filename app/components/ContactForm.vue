<script setup>
import { computed, ref, reactive, onMounted } from 'vue'
import AppButton from './AppButton.vue'
import emailjs from '@emailjs/browser'

const props = defineProps({
  color: { type: String, default: 'red' }
})

const theme = computed(() => {
  return props.color === 'blue' 
    ? {
        highlight: 'text-blue-500',
        hoverText: 'hover:text-blue-500',
        iconHoverBg: 'hover:bg-blue-500/20',
        iconHoverBorder: 'hover:border-blue-500/50',
        inputFocus: 'focus:border-blue-500 focus:ring-blue-500',
        btnVariant: 'blue',
        checkboxColor: 'text-blue-600 focus:ring-blue-500'
      }
    : {
        highlight: 'text-red-500',
        hoverText: 'hover:text-red-500',
        iconHoverBg: 'hover:bg-blue-500/20',
        iconHoverBorder: 'hover:border-blue-500/50',
        inputFocus: 'focus:border-red-500 focus:ring-red-500',
        btnVariant: 'primary',
        checkboxColor: 'text-red-600 focus:ring-red-500'
      }
})

const isAgreed = ref(true)
const isLoading = ref(false)
const formData = reactive({
  name: '',
  contact: '',
  message: ''
})

const handleSubmit = async () => {
  if (!isAgreed.value) {
    alert('Для отправки заявки необходимо подтвердить согласие на обработку персональных данных.')
    return
  }
  if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
    alert('Пожалуйста, заполните все поля формы.')
    return
  }

  const templateParams = {
    user_name: formData.name,
    user_contact: formData.contact,
    message_body: formData.message
  }

  const SERVICE_ID = 'service_biwgcys'
  const TEMPLATE_ID = 'template_k389evd'
  const PUBLIC_KEY = '4blR_h0n83lKqxHD1'

  try {
    isLoading.value = true 
    
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    
    console.log('Письмо успешно отправлено!')
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
    
    formData.name = ''
    formData.contact = ''
    formData.message = ''
    
  } catch (error) {
    console.error('Ошибка отправки:', error)
    alert('Произошла ошибка при отправке. Пожалуйста, напишите нам в мессенджеры.')
  } finally {
    isLoading.value = false
  }
}

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 } 
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
   <section id="contact" ref="sectionRef" class="py-20 px-6 relative overflow-hidden">
    
    <!-- ФОНОВАЯ КАРТИНКА -->
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
      style="background-image: url('/footpage.jpg');"
    ></div>
    <div class="absolute inset-0 bg-gray-900/95 z-0"></div>

    <!-- КОНТЕНТ ФОРМЫ -->
    <div class="container mx-auto max-w-6xl relative z-10">
      
      <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <!-- ЛЕВАЯ КОЛОНКА: Контакты -->
         <div 
           class="text-white transition-all duration-1000 ease-out"
           :class="isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-200px] opacity-0'"
         >
          <h2 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Давайте обсудим <br> <span :class="theme.highlight">ваш проект</span>
          </h2>
          <p class="text-gray-400 mb-10 text-lg">
            Свяжитесь с нами любым удобным способом. Мы проведем бесплатный аудит и предложим решение.
          </p>

          <div class="space-y-6">
            <!-- Телефон -->
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center" :class="theme.highlight">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
              </div>
              <div>
                <div class="text-sm text-gray-400">Позвонить нам</div>
                 <a href="tel:+79955763803" class="text-xl font-bold transition-colors" :class="theme.hoverText">
                  +7 (995) 576-38-03
                </a>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center" :class="theme.highlight">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              </div>
              <div>
                <div class="text-sm text-gray-400">Написать на почту</div>
                <a href="mailto:myscaleup@mail.ru" class="text-xl font-bold transition-colors" :class="theme.hoverText">myscaleup@mail.ru</a>
              </div>
            </div>

            <!-- Мессенджеры -->
             <div class="flex flex-wrap gap-3 pt-6">
               <a 
                href="https://t.me/myscaleup" 
                target="_blank" 
                rel="noopener noreferrer"
                class="group flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-blue-500/20 hover:border-blue-500/50 transition-all hover:-translate-y-1"
              >
                <img src="/tglogo.png" alt="Telegram" class="w-6 h-6 object-contain" />
                <span class="font-medium text-gray-300 group-hover:text-blue-400 transition-colors">Telegram</span>
              </a>
              <a 
                href="https://max.ru/u/f9LHodD0cOLd9d5ljdUy0xKBYHT23JCPGrOFf3v9pvNHi-JhAkFVI71VhCA" 
                target="_blank" 
                rel="noopener noreferrer"
                class="group flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-purple-600/20 hover:border-purple-600/50 transition-all hover:-translate-y-1"
              >
                <img src="/maxlogo.png" alt="Max" class="w-6 h-6 object-contain rounded-full" />
                <span class="font-medium text-gray-300 group-hover:text-purple-400 transition-colors">MAX</span>
              </a>
              <a 
                href="https://wa.me/79955763803" 
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-green-600/20 hover:border-green-600/50 transition-all hover:-translate-y-1"
              >
                <img src="/whatsapplogo.png" alt="WhatsApp" class="w-6 h-6 object-contain" />
                <span class="font-medium text-gray-300 group-hover:text-green-400 transition-colors">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <!-- ПРАВАЯ КОЛОНКА: Форма -->
        <div 
          class="transition-all duration-1000 ease-out delay-200"
          :class="isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[200px] opacity-0'"
        >
          <form class="bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl">
            <h3 class="text-white text-xl font-bold mb-6">Оставьте контакты и мы предложим наилучшее решение</h3>
            <div class="space-y-4">
              <div>
                <label class="text-xs font-medium text-gray-400 mb-1 block ml-1 uppercase tracking-wider">Ваше имя</label>
                <input 
                  type="text" 
                  v-model="formData.name"
                  class="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-1 transition-all placeholder-gray-600" 
                  :class="theme.inputFocus" 
                  placeholder="Иван Иванов"
                >
              </div>
              <div>
                <label class="text-xs font-medium text-gray-400 mb-1 block ml-1 uppercase tracking-wider">Email или Телефон</label>
                <input 
                  type="text" 
                  v-model="formData.contact"
                  class="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-1 transition-all placeholder-gray-600" 
                  :class="theme.inputFocus" 
                  placeholder="+7 (999) ..."
                > 
              </div>
              <div>
                <label class="text-xs font-medium text-gray-400 mb-1 block ml-1 uppercase tracking-wider">Задача</label>
                <textarea 
                  rows="3" 
                  v-model="formData.message"
                  class="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-1 transition-all placeholder-gray-600" 
                  :class="theme.inputFocus" 
                  placeholder="Опишите ваш запрос..."
                ></textarea>
              </div>
            </div>
            
            <div class="flex items-start gap-3 mt-4">
              <input 
                id="policy" 
                type="checkbox" 
                v-model="isAgreed"
                class="mt-1 w-4 h-4 rounded border-gray-600 bg-gray-800 focus:ring-offset-gray-900 transition-colors cursor-pointer"
                :class="theme.checkboxColor"
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

            <AppButton 
              type="button" 
              class="w-full mt-6 py-4 text-lg transition-opacity disabled:opacity-70 disabled:cursor-not-allowed" 
              :variant="theme.btnVariant"
              :disabled="isLoading"
              @click="handleSubmit"
            >
              <span v-if="!isLoading">Отправить заявку</span>
              <span v-else class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Отправка...
              </span>
            </AppButton>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>