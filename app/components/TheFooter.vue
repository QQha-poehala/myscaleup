<template>
  <footer class="bg-gray-900 text-white py-10 border-t border-gray-800">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div class="text-2xl font-bold mb-4">Scale<span class="text-red-500">Up</span></div>
          <p class="text-gray-400">Масштабируем ваш бизнес с помощью передовых CRM-технологий и кастомной разработки.</p>
        </div>
        <div>
          <h3 class="font-bold mb-4 text-lg">Услуги</h3>
          <ul class="text-gray-400 space-y-2">
            <li>Внедрение Битрикс24</li>
            <li>Внедрение amoCRM</li>
            <li>Разработка приложений</li>
            <li>Интеграции по API</li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-4 text-lg">Контакты</h3>
          <ul class="text-gray-400 space-y-2">
            <li>Email: info@scaleup.ru</li>
            <li>Телефон: +7 (952) 926-38-03</li>
            <li>Новосибирск</li>
          </ul>
        </div>
      </div>
      <div class="text-center text-gray-600 pt-2 border-t border-gray-800">
        © {{ new Date().getFullYear() }} ScaleUp
      </div>
    </div>
  </footer>
</template>