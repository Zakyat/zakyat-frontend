<template>
  <div>
    <v-expansion-panel-header>
      <h3>Родитель-одиночка</h3>
    </v-expansion-panel-header>
    <v-expansion-panel-content class="mt-5">
      <p class="mb-5">Для выбранной категории вам нужно предоставить</p>
      <div class="documents-title">
        <img class="mr-3" width="25" :src="require('@/assets/images/help_request/document.svg')" alt="">
        <h2>Документы по нуждающемуся:</h2>
      </div>
      <ul class="pl-5 mt-3">
        <li>Паспорт с&nbsp;страницами: главная, страница с&nbsp;регистрацией места жительства, брака и&nbsp;&laquo;дети&raquo;</li>
        <li>Справка об&nbsp;инвалидности (при наличии)</li>
        <li>Справка о&nbsp;размере пенсии</li>
        <li>Выписка/справка от&nbsp;врача</li>
        <li>Справки о&nbsp;доходах за&nbsp;последние 6&nbsp;месяцев (о&nbsp;заработной плате, о&nbsp;размере пенсии и/или пособия, трудовая книжка)</li>
      </ul>
      <div class="documents-title mt-5">
        <img class="mr-3" width="25" :src="require('@/assets/images/help_request/document.svg')" alt="">
        <h2>Документы по&nbsp;всем детям:</h2>
      </div>
      <ul class="pl-5 mt-3">
        <li>Если старше 14&nbsp;лет&nbsp;&mdash; паспорт со&nbsp;страницами: главная, страница по&nbsp;регистрации места жительства</li>
        <li>Если младше 14&nbsp;лет&nbsp;&mdash; свидетельство о&nbsp;рождении</li>
        <li>Справки о&nbsp;доходах за&nbsp;последние 6&nbsp;месяцев (о&nbsp;заработной плате, о&nbsp;размере пенсии и/или пособия, трудовая книжка)</li>
        <li>Выписка из&nbsp;домовой книги</li>
      </ul>
      <div class="documents-title mt-5">
        <img class="mr-3" width="25" :src="require('@/assets/images/help_request/document.svg')" alt="">
        <h2>Документы по&nbsp;супругу(-е):</h2>
      </div>
      <ul class="pl-5 mt-3">
        <li>Свидетельство о&nbsp;смерти (при наличии)</li>
        <li>Свидетельство об&nbsp;отбывании наказания в&nbsp;местах лишения свободы (при наличии)</li>
        <li>Свидетельство о&nbsp;разводе (при наличии)</li>
        <li>Иные документы, доказывающие отсутствие родителя</li>
      </ul>
      <div class="documents-title mt-5">
        <img class="mr-3" width="25" :src="require('@/assets/images/help_request/document.svg')" alt="">
        <h2>Общее:</h2>
      </div>
      <ul class="pl-5 mt-3">
        <li>Выписка из&nbsp;домовой книги</li>
        <li>Общая фотография</li>
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
