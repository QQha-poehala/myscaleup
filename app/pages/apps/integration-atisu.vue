<script setup lang="ts">
import { cargoPublication as application } from '~/data/applications'

const supportEmail = 'myscaleup@mail.ru'

const sections = [
  { id: 'features', title: 'Возможности' },
  { id: 'installation', title: 'Установка и настройка' },
  { id: 'publication', title: 'Работа со сделкой' },
  { id: 'requirements', title: 'Условия работы' },
  { id: 'questions', title: 'Частые вопросы' },
  { id: 'support', title: 'Поддержка' },
]

const features = [
  {
    title: 'Маршрут и расписание',
    description: 'Подготовьте маршрут перевозки во вкладке ATI.SU, связанной с конкретной сделкой.',
    items: [
      'Города загрузки и выгрузки выбираются из подсказок справочника ATI.SU; точные адреса указываются отдельно.',
      'Для загрузки задаётся период «с» и «по», для выгрузки можно указать дату.',
      'Временные интервалы загрузки и выгрузки учитывают часовые пояса. Время вводится в формате ЧЧ:ММ, часовой пояс — например, +03:00.',
    ],
  },
  {
    title: 'Несколько грузов в одной заявке',
    description: 'Соберите грузовые позиции для одного маршрута, сохранив сведения о каждой из них.',
    items: [
      'Добавляйте и удаляйте строки грузов, указывайте наименование каждой позиции.',
      'Для каждого груза задавайте вес в килограммах или тоннах и объём.',
      'Список грузов сохраняется в хранилище портала и загружается при следующем открытии вкладки сделки.',
    ],
  },
  {
    title: 'Требования к транспорту',
    description: 'Передайте условия, которые нужны для перевозки ваших грузов.',
    items: [
      'Выбирайте тип перевозки: отдельная машина, догруз или «Не важно».',
      'Указывайте подходящие типы кузова, способы загрузки и выгрузки из справочников ATI.SU.',
      'Задавайте количество машин, температурный диапазон и дополнительное примечание к заявке.',
    ],
  },
  {
    title: 'Ставка и условия оплаты',
    description: 'Заполните финансовые условия до передачи заявки на площадку.',
    items: [
      'Укажите максимальную ставку перевозчику.',
      'Выберите оплату наличными, на карту или безналичным расчётом и вариант «С НДС» / «Без НДС».',
      'Валюта публикации задаётся администратором в общих настройках приложения.',
    ],
  },
  {
    title: 'Параметры публикации',
    description: 'Используйте единые настройки ATI.SU для сотрудников портала.',
    items: [
      'Администратор выбирает контакт ATI.SU и площадку, на которой будет опубликована заявка.',
      'Доступны режимы публикации «Сразу», «Через 15 минут» и «Через 30 минут».',
      'Если для этой сделки в журнале уже есть успешная публикация, повторный запрос блокируется с сообщением о ранее опубликованном грузе.',
    ],
  },
  {
    title: 'Проверки и журнал событий',
    description: 'Получайте понятный результат публикации и проверяйте историю обращений к ATI.SU.',
    items: [
      'Перед публикацией проверяются обязательные поля, выбранные города, сведения о грузах, даты, время и другие параметры.',
      'При успешном ответе отображается результат и идентификатор заявки, если он возвращён ATI.SU; при ошибке — сообщение о причине.',
      'В журнале доступны дата, номер сделки, статус, результат, а также подробности запроса и ответа ATI.SU.',
    ],
  },
]

const installationSteps = [
  {
    title: 'Установите приложение от имени администратора',
    text: 'Администратор портала Битрикс24 устанавливает приложение и подтверждает запрашиваемые права. При установке создаются пользовательские поля сделок, хранилища данных и вкладка ATI.SU в карточке сделки.',
  },
  {
    title: 'Откройте настройки приложения',
    text: 'После установки откройте приложение через левое меню Битрикс24. Подключение к ATI.SU и общие настройки выполняет администратор портала.',
  },
  {
    title: 'Подключите API-токен ATI.SU',
    text: 'Получите токен для аккаунта ATI.SU, от имени которого будете публиковать грузы. Убедитесь, что у него есть права на получение справочников и публикацию грузов. Введите токен в поле API-ключа и нажмите «Сохранить настройки».',
  },
  {
    title: 'Загрузите справочники ATI.SU',
    text: 'После сохранения нового токена приложение запускает загрузку словарей. При необходимости нажмите «Обновить словари ATI.su». Будут загружены типы кузовов, способы загрузки и выгрузки, контакты, площадки и валюты. Дождитесь завершения; если списки ещё не появились, обновите страницу.',
  },
  {
    title: 'Предоставьте доступ сотрудникам',
    text: 'Выберите сотрудников, которым разрешена работа с приложением. Администратор имеет доступ к приложению; остальным пользователям он предоставляется через этот список. Сотрудникам также нужны права Битрикс24 на чтение и изменение соответствующих сделок.',
  },
  {
    title: 'Укажите значения публикации по умолчанию',
    text: 'Выберите контакт ATI.SU, площадку публикации, валюту и режим: сразу, через 15 или через 30 минут. Эти настройки используются при отправке заявок из сделок.',
  },
  {
    title: 'Сохраните и проверьте настройки',
    text: 'Нажмите «Сохранить настройки». Убедитесь, что выбранные сотрудники, контакт, площадка, валюта и режим публикации сохранены. После этого можно переходить к подготовке первой заявки.',
  },
]

const publicationSteps = [
  { title: 'Откройте сделку', text: 'Перейдите на вкладку ATI.SU в нужной карточке сделки. При повторном открытии приложение загрузит ранее сохранённые данные перевозки.' },
  { title: 'Заполните маршрут и грузы', text: 'Выберите города из подсказок ATI.SU, укажите адреса и расписание. Добавьте грузовые позиции: наименование, вес с единицей измерения и объём.' },
  { title: 'Задайте транспорт и оплату', text: 'Выберите тип перевозки и кузова, заполните ставку, тип оплаты и вариант НДС. При необходимости укажите способы загрузки и выгрузки, количество машин, температуру и примечание.' },
  { title: 'Сохраните данные', text: 'Нажмите «Сохранить» и дождитесь подтверждения. Параметры перевозки записываются в пользовательские поля сделки, а список грузов и выбранные города — в хранилище портала.' },
  { title: 'Опубликуйте заявку', text: 'Нажмите «Опубликовать груз в ATI.su». Если обязательные данные не заполнены или некорректны, приложение подскажет, что нужно исправить. Результат обращения к ATI.SU отобразится пользователю и будет записан в журнал.' },
  { title: 'Продолжите работу в ATI.SU', text: 'После публикации откройте заявку в интерфейсе ATI.SU. Дальнейшее взаимодействие с перевозчиками и работа с опубликованной заявкой выполняются на стороне площадки.' },
]

const requirements = [
  'Тариф Битрикс24 «Базовый» или выше.',
  'Возможность устанавливать приложения и использовать REST API на вашем портале.',
  'Установка и первоначальная настройка администратором портала.',
  'Действующий аккаунт ATI.SU.',
  'API-токен ATI.SU с правами на получение справочников и публикацию грузов.',
]

const questions = [
  {
    question: 'Почему кнопка публикации недоступна?',
    answer: 'Проверьте поля со звёздочкой, выбор городов из подсказок, наличие хотя бы одного груза с наименованием, весом и объёмом, а также ставку и оплату. В настройках приложения должны быть выбраны контакт ATI.SU, площадка и валюта. Подсказка у кнопки сообщает, какие данные нужно заполнить. Во время сохранения или отправки нужно дождаться завершения текущей операции.',
  },
  {
    question: 'Город введён, но приложение просит выбрать его снова. Что делать?',
    answer: 'Начните вводить название города и выберите подходящий вариант из подсказок ATI.SU. Одного текстового названия недостаточно: для публикации нужен идентификатор города из справочника. Точный адрес загрузки или выгрузки заполняется в отдельном поле.',
  },
  {
    question: 'Какие ограничения есть у данных о грузе?',
    answer: 'У каждой позиции должны быть наименование, вес и положительный объём. Допустимый вес одной позиции — от 10 кг до 9999 т. Наименование может содержать до 200 символов, адрес — до 100, примечание — до 1000. Emoji в этих текстовых полях не поддерживаются. Если указываете время, заполните обе границы интервала и часовой пояс; для температуры задайте целые значения «от» и «до» в диапазоне от −100 до +100 °C.',
  },
  {
    question: 'Справочники или списки контактов не загрузились. Как действовать?',
    answer: 'Убедитесь, что API-токен сохранён и имеет необходимые права ATI.SU. Дождитесь окончания загрузки, повторите обновление словарей и при необходимости обновите страницу приложения. Если ошибка сохраняется, запишите её текст и время возникновения и обратитесь в поддержку.',
  },
  {
    question: 'Можно ли повторно опубликовать груз из той же сделки?',
    answer: 'Если для сделки уже записана успешная публикация, приложение блокирует повторную отправку. Проверьте запись в журнале событий и результат в ATI.SU. Перед повторной попыткой после ошибки также проверьте журнал и площадку, чтобы понимать, был ли принят предыдущий запрос.',
  },
  {
    question: 'Где посмотреть результат или причину ошибки?',
    answer: 'Результат отображается после отправки заявки. Журнал событий открывается из основного окна приложения: в нём можно обновить список, найти сделку и посмотреть статус обращения, идентификатор заявки ATI.SU или текст ошибки. В разделе «Запрос и ответ» доступны подробности для диагностики.',
  },
]

const supportDetails = [
  'Адрес портала Битрикс24, на котором установлено приложение.',
  'Дата и примерное время возникновения проблемы; укажите часовой пояс.',
  'Полный текст ошибки или сообщение, которое отображает приложение.',
  'Последовательность выполненных действий и результат, который вы ожидали получить.',
  'Номер сделки и идентификатор заявки ATI.SU, если проблема связана с публикацией и эти данные доступны.',
  'При наличии — сведения о соответствующей записи в журнале событий.',
]

useSeoMeta({
  title: `${application.name} | MyScaleUp`,
  description: 'Публикация грузов в ATI.SU из сделки Битрикс24: маршрут, грузы, транспорт и оплата. Возможности приложения, установка, настройка и техническая поддержка.',
  ogTitle: `${application.name} — MyScaleUp`,
  ogDescription: 'Подготовка и публикация заявок на перевозку из карточки сделки. Подробная инструкция по подключению ATI.SU и работе с приложением.',
  ogImage: `https://myscaleup.ru${application.logo}`,
  ogUrl: 'https://myscaleup.ru/apps/integration-atisu',
  keywords: 'логистика, грузоперевозки, публикация грузов, грузовая биржа, заявки на перевозку, транспортная логистика, перевозки, грузы, логист, маршрут перевозки, перевозчик, интеграция CRM, автоматизация логистики, карточка сделки, управление грузами, заявка на грузоперевозку',
})
</script>

<template>
  <div class="bg-white font-sans text-gray-900 antialiased selection:bg-red-100 selection:text-red-900">
    <TheHeader />

    <main>
      <section class="relative overflow-hidden bg-slate-50 px-6 pb-16 pt-32 md:pb-24">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 bg-gradient-to-bl from-red-50 via-transparent to-transparent"></div>
        <div class="container relative mx-auto max-w-6xl">
          <NuxtLink to="/applist" class="mb-10 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-red-600">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m6-6-6 6 6 6" />
            </svg>
            Все приложения
          </NuxtLink>

          <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span class="mb-5 inline-flex rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-bold text-red-600">Приложение для Битрикс24</span>
              <h1 class="mb-6 text-4xl font-extrabold leading-tight md:text-4xl">
                {{ application.name }}
              </h1>
              <p class="mb-8 text-xl leading-relaxed text-gray-600">
                Формируйте и публикуйте заявки на перевозку в ATI.SU непосредственно из карточки сделки. Маршрут, параметры грузов, требования к транспорту и условия оплаты — в отдельной вкладке вашего Битрикс24.
              </p>
              <div class="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <AppButton to="#installation">Как подключить</AppButton>
                <AppButton to="#features" variant="secondary">Возможности приложения</AppButton>
              </div>
            </div>

            <div class="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg md:p-10">
              <img :src="application.logo" :alt="`Логотип приложения «${application.name}»`" width="80" height="80" class="mb-6 h-20 w-20 rounded-2xl object-contain">
              <h2 class="mb-3 text-2xl font-bold">От сделки до заявки на перевозку</h2>
              <p class="mb-6 leading-relaxed text-gray-500">Приложение связывает подготовку перевозки в CRM с публикацией на площадке ATI.SU.</p>
              <ol class="space-y-4">
                <li class="flex items-start gap-3"><span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-600">1</span><span class="leading-relaxed text-gray-600">Заполните вкладку ATI.SU в сделке.</span></li>
                <li class="flex items-start gap-3"><span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-600">2</span><span class="leading-relaxed text-gray-600">Сохраните данные и отправьте заявку.</span></li>
                <li class="flex items-start gap-3"><span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-600">3</span><span class="leading-relaxed text-gray-600">Проверьте результат и продолжите работу в ATI.SU.</span></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Разделы страницы приложения" class="border-b border-gray-100 px-6 py-6">
        <div class="container mx-auto flex max-w-6xl flex-wrap gap-3">
          <NuxtLink v-for="section in sections" :key="section.id" :to="`#${section.id}`" class="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600">
            {{ section.title }}
          </NuxtLink>
        </div>
      </nav>

      <section id="features" class="scroll-mt-28 px-6 py-16 md:py-20">
        <div class="container mx-auto max-w-6xl">
          <div class="mb-10 max-w-3xl">
            <h2 class="mb-5 text-3xl font-bold md:text-4xl">Возможности приложения</h2>
            <p class="text-lg leading-relaxed text-gray-600">Приложение помогает логистам подготовить заявку, сохранить данные перевозки в Битрикс24 и передать их в ATI.SU. Каждая заявка формируется в контексте конкретной сделки.</p>
          </div>
          <div class="grid gap-6 md:grid-cols-2">
            <article v-for="(feature, index) in features" :key="feature.title" class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
              <span class="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-sm font-bold text-red-600">{{ String(index + 1).padStart(2, '0') }}</span>
              <h3 class="mb-3 text-xl font-bold">{{ feature.title }}</h3>
              <p class="mb-5 leading-relaxed text-gray-500">{{ feature.description }}</p>
              <ul class="list-disc space-y-3 pl-5 text-sm leading-relaxed text-gray-600 marker:text-red-600">
                <li v-for="item in feature.items" :key="item">{{ item }}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="installation" class="scroll-mt-28 bg-slate-50 px-6 py-16 md:py-20">
        <div class="container mx-auto max-w-6xl">
          <div class="mb-10 max-w-3xl">
            <h2 class="mb-5 text-3xl font-bold md:text-4xl">Установка и настройка</h2>
            <p class="text-lg leading-relaxed text-gray-600">Первоначальную настройку выполняет администратор портала. Подготовьте аккаунт ATI.SU и API-токен, затем настройте доступ и общие параметры публикации.</p>
          </div>
          <ol class="max-w-4xl space-y-4">
            <li v-for="(step, index) in installationSteps" :key="step.title" class="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 md:gap-6">
              <span aria-hidden="true" class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">{{ index + 1 }}</span>
              <div class="min-w-0">
                <h3 class="mb-2 text-lg font-bold">{{ step.title }}</h3>
                <p class="leading-relaxed text-gray-600">{{ step.text }}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section id="publication" class="scroll-mt-28 px-6 py-16 md:py-20">
        <div class="container mx-auto max-w-6xl">
          <div class="mb-10 max-w-3xl">
            <h2 class="mb-5 text-3xl font-bold md:text-4xl">Как опубликовать груз из сделки</h2>
            <p class="text-lg leading-relaxed text-gray-600">После настройки сотрудники с доступом могут готовить заявки прямо в CRM. Сначала сохраните сведения о перевозке, затем отправляйте их на площадку.</p>
          </div>
          <ol class="grid gap-6 md:grid-cols-2">
            <li v-for="(step, index) in publicationSteps" :key="step.title" class="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8">
              <p aria-hidden="true" class="mb-4 text-sm font-bold uppercase tracking-wider text-red-600">Шаг {{ index + 1 }}</p>
              <h3 class="mb-3 text-xl font-bold">{{ step.title }}</h3>
              <p class="leading-relaxed text-gray-600">{{ step.text }}</p>
            </li>
          </ol>
          <aside class="mt-8 rounded-2xl border border-red-100 bg-red-50 p-6 md:p-8">
            <h3 class="mb-3 text-lg font-bold">Границы интеграции</h3>
            <p class="leading-relaxed text-gray-700">Приложение публикует заявки на перевозку. Оно не выполняет поиск и выбор перевозчика, не принимает ставки перевозчиков и не синхронизирует статусы перевозки в фоновом режиме. Дальнейшая работа с опубликованной заявкой выполняется в интерфейсе ATI.SU.</p>
          </aside>
        </div>
      </section>

      <section id="requirements" class="scroll-mt-28 bg-slate-50 px-6 py-16 md:py-20">
        <div class="container mx-auto max-w-6xl">
          <h2 class="mb-10 text-3xl font-bold md:text-4xl">Условия работы и защита подключения</h2>
          <div class="grid gap-6 lg:grid-cols-2">
            <div class="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
              <h3 class="mb-5 text-xl font-bold">Что нужно для запуска</h3>
              <ul class="list-disc space-y-3 pl-5 leading-relaxed text-gray-600 marker:text-red-600">
                <li v-for="requirement in requirements" :key="requirement">{{ requirement }}</li>
              </ul>
              <p class="mt-6 border-t border-gray-100 pt-5 text-sm font-medium leading-relaxed text-gray-700">Работа в BitrixMobile не поддерживается. Используйте приложение в веб-интерфейсе Битрикс24.</p>
            </div>
            <div class="space-y-6">
              <div class="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
                <h3 class="mb-3 text-xl font-bold">Услуги ATI.SU оплачиваются отдельно</h3>
                <p class="leading-relaxed text-gray-600">Доступ к API, лицензии, тарифы и другие услуги ATI.SU приобретаются пользователем непосредственно у ATI.SU и не входят в стоимость приложения. Возможность публикации зависит от прав API-токена и условий вашего аккаунта ATI.SU.</p>
              </div>
              <div class="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
                <h3 class="mb-3 text-xl font-bold">Хранение токена и соединение</h3>
                <p class="mb-4 leading-relaxed text-gray-600">API-токен ATI.SU и служебные данные подключения хранятся на сервере приложения в зашифрованном виде. Параметры перевозки сохраняются в полях сделки и хранилище вашего портала.</p>
                <p class="leading-relaxed text-gray-600">Соединение с сервером приложения защищено стандартным публичным HTTPS-сертификатом. Сертификаты Минцифры не используются; дополнительная установка сертификатов не требуется.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="questions" class="scroll-mt-28 px-6 py-16 md:py-20">
        <div class="container mx-auto max-w-6xl">
          <h2 class="mb-10 text-3xl font-bold md:text-4xl">Частые вопросы</h2>
          <div class="max-w-4xl space-y-4">
            <details v-for="question in questions" :key="question.question" class="rounded-2xl border border-gray-100 bg-gray-50 p-6 open:border-red-200 open:bg-white">
              <summary class="cursor-pointer text-lg font-bold text-gray-900 marker:text-red-600">{{ question.question }}</summary>
              <p class="mt-4 leading-relaxed text-gray-600">{{ question.answer }}</p>
            </details>
          </div>
        </div>
      </section>

      <section id="support" class="scroll-mt-28 border-t border-gray-100 bg-slate-50 px-6 py-16 md:py-20">
        <div class="container mx-auto max-w-6xl">
          <div class="mb-10 max-w-3xl">
            <h2 class="mb-5 text-3xl font-bold md:text-4xl">Поддержка приложения</h2>
            <p class="text-lg leading-relaxed text-gray-600">Если возникла проблема, свяжитесь с нами — поможем разобраться в её причине. Подробное описание позволит быстрее проверить ситуацию и предложить решение.</p>
            <div class="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <NuxtLink to="/apps/integration-atisu-eula" class="font-medium text-red-600 underline underline-offset-4 hover:text-red-700">Лицензионное соглашение</NuxtLink>
              <NuxtLink to="/apps/integration-atisu-privacy" class="font-medium text-red-600 underline underline-offset-4 hover:text-red-700">Политика конфиденциальности приложения</NuxtLink>
            </div>
          </div>
          <div class="grid gap-6 lg:grid-cols-3">
            <div class="rounded-2xl border border-gray-100 bg-white p-6 md:p-8 lg:col-span-2">
              <h3 class="mb-4 text-xl font-bold">Что указать в форме для связи</h3>
              <p class="mb-5 leading-relaxed text-gray-600">В форме ниже заполните имя и контакт для ответа. В поле «Задача» укажите, что обращаетесь по приложению «Публикация грузов (интеграция с ATI.SU)», и добавьте:</p>
              <ul class="list-disc space-y-3 pl-5 leading-relaxed text-gray-600 marker:text-red-600">
                <li v-for="detail in supportDetails" :key="detail">{{ detail }}</li>
              </ul>
              <p class="mt-6 leading-relaxed text-gray-600">Снимки экрана при наличии и длинные журналы отправляйте по электронной почте <a :href="`mailto:${supportEmail}`" class="break-all font-medium text-red-600 underline decoration-red-200 underline-offset-4 hover:text-red-700">{{ supportEmail }}</a>. Перед отправкой скройте секретные данные.</p>
              <p class="mt-5 rounded-xl border border-red-100 bg-red-50 p-4 text-sm font-medium leading-relaxed text-gray-700">Не отправляйте API-токен ATI.SU, пароль от портала или другие секретные данные — ни в форме, ни в письме, ни на снимках экрана.</p>
            </div>
            <aside class="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
              <h3 class="mb-5 text-xl font-bold">Контакты и сроки</h3>
              <dl class="space-y-6">
                <div>
                  <dt class="mb-2 text-sm font-medium text-gray-500">Электронная почта</dt>
                  <dd><a :href="`mailto:${supportEmail}`" class="break-all font-bold text-red-600 hover:text-red-700">{{ supportEmail }}</a></dd>
                </div>
                <div>
                  <dt class="mb-2 text-sm font-medium text-gray-500">График работы</dt>
                  <dd class="leading-relaxed text-gray-700">Понедельник–пятница, 08:00–16:00 по московскому времени, кроме официальных праздничных дней.</dd>
                </div>
                <div>
                  <dt class="mb-2 text-sm font-medium text-gray-500">Срок первичного ответа</dt>
                  <dd class="font-bold leading-relaxed text-gray-700">Не более 3 рабочих дней.</dd>
                </div>
              </dl>
              <p class="mt-6 border-t border-gray-100 pt-5 text-sm leading-relaxed text-gray-500">Вопросы выдачи API-токена, тарифов и ограничений аккаунта ATI.SU рассматривает техническая поддержка ATI.SU.</p>
            </aside>
          </div>
        </div>
      </section>
    </main>

    <ContactForm :email="supportEmail" />
    <TheFooter />
    <TheCookieBanner />
  </div>
</template>
