<template>
  <div>
    <v-expansion-panel-header>
      <h3>Ребенок, имеющий проблемы со здоровьем</h3>
    </v-expansion-panel-header>
    <v-expansion-panel-content class="mt-5">
      <p class="mb-5">Для выбранной категории вам нужно предоставить</p>
      <div class="documents-title">
        <img class="mr-3" width="25" :src="require('@/assets/images/help_request/document.svg')" alt="">
        <h2>Документы по ребенку:</h2>
      </div>
      <ul class="pl-5 mt-3">
        <li>Если старше 14 лет - паспорт со страницами: главная, страница по регистрации места жительства</li>
        <li>Если младше 14 лет - свидетельство о рождении</li>
        <li>Справка об инвалидности (при наличии)</li>
        <li>Выписка/справка от врача</li>
        <li>Счет на медицинские услуги или на приобретение медикаментов</li>
        <li>Фотография</li>
      </ul>
      <div class="documents-title mt-5">
        <img class="mr-3" width="25" :src="require('@/assets/images/help_request/document.svg')" alt="">
        <h2>Документы по родителям или опекунам:</h2>
      </div>
      <ul class="pl-5 mt-3">
        <li>Паспорт со страницами: главная, страница с регистрацией места жительства, брака и «дети»</li>
        <li>Справки о доходах за последние 6 месяцев(о заработной плате, о размере пенсии и/или пособия, трудовая книжка)</li>
        <li>Выписка из домовой книги</li>
      </ul>

      <p class="mb-2 mt-5">Для подачи заявления и при возникновении вопросов обратитесь по номеру:</p>
      <div class="phone mb-3">
        <img class="mr-3" width="20" :src="require('@/assets/images/help_request/phone.svg')" alt="">
        <p class="phone-number mr-3 mb-0">8 (843) 225-33-22</p>
        <p class="mb-0">или по адресу:</p>
      </div>
      <div class="address">
        <img class="mr-3" width="20" :src="require('@/assets/images/help_request/pin.svg')" alt="">
        <p class="mb-0">г.Казань, ул. Габдуллы Тукая, 89/14</p>
      </div>
    </v-expansion-panel-content>
  </div>
</template>

<style scoped lang="scss">
.documents-title {
  display: flex;
  align-items: center;
  color: #1C6739;
}

.phone {
  display: flex;
  align-items: center;
}

.phone-number {
   color: #00ac00;
}

.address {
  display: flex;
  align-items: center;
  color: #00ac00;
}

li {
  color: #666666;
  margin-top: 10px;
}
</style>
