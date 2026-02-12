
<template>
    <section class="py-20 px-6">
        <div class="container mx-auto">
            <div class="grid md:grid-cols-2 gap-12 items-center">
            
            <div class="relative group order-2 md:order-1">
                <img 
                src="/team.jpg" 
                alt="Команда ScaleUp" 
                class="rounded-3xl w-full h-[500px] object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                />
                
                <!-- Декоративный элемент -->
                <div class="absolute -top-6 -left-6 w-32 h-32 bg-red-100 rounded-full -z-10 blur-xl opacity-70"></div>
                <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-gray-100 rounded-full -z-10"></div>
            </div>
            
            <div>
                <h2 class="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                Scale<span class="text-red-600">Up</span> превращает хаос <br> в работающую <span class="text-red-600">систему</span>
                </h2>
                <p class="text-gray-800 mb-8 text-lg leading-relaxed">
                ScaleUp не просто внедряет софт. Мы погружаемся в бизнес-процессы, находим узкие места и оцифровываем процессы так, чтобы бизнес работал как швейцарские часы.
                </p>

                <!-- Список преимуществ -->
                <div class="space-y-6 mb-10">
                
                <!-- Пункт 1: Анализ -->
                <div class="flex gap-4">
                    <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    </div>
                    <div>
                    <h4 class="font-bold text-gray-900">Глубокий аудит процессов</h4>
                    <p class="text-sm text-gray-500 mt-1">Изучаем, как вы работаете сейчас, чтобы спроектировать то, как это должно работать идеально.</p>
                    </div>
                </div>

                <!-- Пункт 2: Индивидуальный подход -->
                <div class="flex gap-4">
                    <div class="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    </div>
                    <div>
                    <h4 class="font-bold text-gray-900">Персональная разработка</h4>
                    <p class="text-sm text-gray-500 mt-1">Создаем кастомные решения под уникальные задачи вашей компании, если тиражные решения не подходят</p>
                    </div>
                </div>

                <!-- Пункт 3: 24/7 -->
                <div class="flex gap-4">
                    <div class="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </div>
                    <div>
                    <h4 class="font-bold text-gray-900">Поддержка 24/7</h4>
                    <p class="text-sm text-gray-500 mt-1">Мы понимаем цену простоя. Наша команда на связи круглосуточно, чтобы ваш бизнес не останавливался.</p>
                    </div>
                </div>

                </div>
                
                <!-- Цифры -->
                <div class="flex gap-12 border-t border-gray-100 pt-8">
                <div>
                    <div class="text-4xl font-extrabold text-gray-900">50+</div>
                    <div class="text-sm font-medium text-gray-500 mt-1">Успешных кейсов</div>
                </div>
                <div>
                    <div class="text-4xl font-extrabold text-gray-900">10+</div>
                    <div class="text-sm font-medium text-gray-500 mt-1">Своих продуктов</div>
                </div>
                </div>

            </div>

            </div>
        </div>
    </section>
</template>