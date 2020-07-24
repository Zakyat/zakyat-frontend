<template>
  <div class="category-wrapper">
    <v-row justify="space-between">
      <v-col cols="10">
        <v-card
          flat
          class="category"
        >
          ребенок, имеющий проблемы со здоровьем
        </v-card>
      </v-col>
      <v-col cols="2" style="text-align: right;">
        <v-btn
          depressed
          dark
          color="#56B756"
          height="46px"
          class="buttonTo text-none rounded-pill"
          @click="$emit('set-content', 'linkOfCategories')"
        >
          Изменить
        </v-btn>
      </v-col>
    </v-row>
    <p class="mt-3" style="font-size: 16px;">
      Для выбранной категории вам нужно заполнить информацию о себе, супруге и о всех своих детях
    </p>
    <v-form
      ref="form"
    >
      <div class="infoAboutYou">
        <h2 class="mainHeader mt-8">
          Информация о вас
        </h2>
        <v-row class="mt-3">
          <v-col cols="7" class="pr-9">
            <v-text-field
              class="defaultTextField"
              dense
              height="50px"
              placeholder="Введите свое полное имя"
              outlined
              type="text"
            >
            </v-text-field>
            <v-text-field
              class="defaultTextField"
              dense
              height="50px"
              placeholder="Введите гражданство"
              outlined
              type="text"
            >
            </v-text-field>
            <v-text-field
              class="defaultTextField"
              dense
              height="50px"
              placeholder="Номер телефона"
              outlined
              type="number"
            >
            </v-text-field>
            <v-autocomplete
              class="autocompleteField defaultTextField"
              dense
              outlined
              :items="religion"
              placeholder="Религия"
              height="50px"
              type="text"
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="5">
            <v-autocomplete
              class="autocompleteField defaultTextField"
              dense
              outlined
              :items="gender"
              placeholder="Пол"
              height="50px"
              type="text"
            >
            </v-autocomplete>
          </v-col>
        </v-row>
        <h2 class="smallHeader ml-3">Дата рождения</h2>
        <v-text-field
          class="dateField"
          type="date"
          dense
          height="50px"
          outlined
        >
        </v-text-field>
        <v-text-field
          class="defaultTextField outerRowTextField"
          dense
          height="50px"
          placeholder="Адрес проживания"
          outlined
          type="text"
        ></v-text-field>
        <h2 class="defaultHeader">Паспорт</h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          multiple="multiple"
          hide-details
          placeholder="Прикрепить изображения главной страницы,  прописки,  о браке и дети (4 шт)"
          class="sendFiles ml-n3"
        >
        </v-file-input>
        <h2 class="smallHeader mt-4">Заполните данные о работе или прикрепите справку с биржы труда</h2>
        <v-expansion-panels
          flat
        >
          <v-expansion-panel
          >
            <v-expansion-panel-header
              class="workInfo"
            >
              <h2 class="defaultHeader ml-n6">Работа и доход</h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="ml-n6">
              <v-text-field
                class="defaultTextField outerRowTextField"
                dense
                height="50px"
                placeholder="Место работы"
                outlined
                type="text"
              ></v-text-field>
              <v-text-field
                class="defaultTextField outerRowTextField"
                dense
                height="50px"
                placeholder="Рабочая позиция на работе"
                outlined
                type="text"
              ></v-text-field>
              <v-text-field
                class="defaultTextField outerRowTextField"
                dense
                height="50px"
                placeholder="Заработная плата"
                outlined
                type="text"
              ></v-text-field>
              <v-text-field
                class="defaultTextField outerRowTextField"
                dense
                height="50px"
                placeholder="Пенсия (в руб), если есть"
                outlined
                type="text"
              ></v-text-field>
              <h2 class="defaultHeader">Справка с места работы</h2>
              <v-file-input
                solo
                flat
                prepend-icon=""
                multiple="multiple"
                hide-details
                placeholder="Прикрепить изображение"
                class="sendFiles ml-n3"
              >
              </v-file-input>
              <h2 class="defaultHeader">Трудовая книжка</h2>
              <v-file-input
                solo
                flat
                prepend-icon=""
                multiple="multiple"
                hide-details
                placeholder="Прикрепить изображения"
                class="sendFiles ml-n3"
              >
              </v-file-input>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <h2 class="defaultHeader mt-2">Справка о доходах за последние 6 месяцев</h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          multiple="multiple"
          hide-details
          placeholder="Прикрепить изображения о доходах: заработная плата, пенсия и/или пособия."
          class="sendFiles ml-n3"
        ></v-file-input>
        <h2 class="defaultHeader mt-3">Справка с биржи труда</h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          multiple="multiple"
          hide-details
          placeholder="Прикрепить изображения справки из биржы труда, если безработный"
          class="sendFiles ml-n3"
        ></v-file-input>
        <h2 class="defaultHeader mt-3">Статус в семье</h2>
        <v-autocomplete
          class="autocompleteField defaultTextField mt-3"
          dense
          outlined
          :items="familyStatus"
          placeholder="Женат/замужем"
          height="50px"
          type="text"
        ></v-autocomplete>
      </div>


      <div class="spouseInfo">
        <h2 class="mainHeader mt-8">
          Супруг(-а)
        </h2>
        <v-row class="mt-3">
          <v-col cols="7" class="pr-9">
            <v-text-field
              class="defaultTextField"
              dense
              height="50px"
              placeholder="Введите свое полное имя"
              outlined
              type="text"
            >
            </v-text-field>
            <v-text-field
              class="defaultTextField"
              dense
              height="50px"
              placeholder="Введите гражданство"
              outlined
              type="text"
            >
            </v-text-field>
            <v-text-field
              class="defaultTextField"
              dense
              height="50px"
              placeholder="Номер телефона"
              outlined
              type="number"
            >
            </v-text-field>
            <v-autocomplete
              class="autocompleteField defaultTextField"
              dense
              outlined
              :items="religion"
              placeholder="Религия"
              height="50px"
              type="text"
            >
            </v-autocomplete>
          </v-col>
        </v-row>
        <h2 class="smallHeader ml-3">Дата рождения</h2>
        <v-text-field
          class="dateField"
          type="date"
          dense
          height="50px"
          outlined
        >
        </v-text-field>
        <v-text-field
          class="defaultTextField outerRowTextField"
          dense
          height="50px"
          placeholder="Адрес проживания"
          outlined
          type="text"
        ></v-text-field>
        <h2 class="defaultHeader">Паспорт</h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          multiple="multiple"
          hide-details
          placeholder="Прикрепить изображения главной страницы,  прописки,  о браке и дети (4 шт)"
          class="sendFiles ml-n3"
        >
        </v-file-input>
        <h2 class="smallHeader mt-4">Заполните данные о работе или прикрепите справку с биржы труда</h2>
        <v-expansion-panels
          flat
        >
          <v-expansion-panel
          >
            <v-expansion-panel-header
              class="workInfo"
            >
              <h2 class="defaultHeader ml-n6">Работа и доход</h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="ml-n6">
              <v-text-field
                class="defaultTextField outerRowTextField"
                dense
                height="50px"
                placeholder="Место работы"
                outlined
                type="text"
              ></v-text-field>
              <v-text-field
                class="defaultTextField outerRowTextField"
                dense
                height="50px"
                placeholder="Рабочая позиция на работе"
                outlined
                type="text"
              ></v-text-field>
              <v-text-field
                class="defaultTextField outerRowTextField"
                dense
                height="50px"
                placeholder="Заработная плата"
                outlined
                type="text"
              ></v-text-field>
              <v-text-field
                class="defaultTextField outerRowTextField"
                dense
                height="50px"
                placeholder="Пенсия (в руб), если есть"
                outlined
                type="text"
              ></v-text-field>
              <h2 class="defaultHeader">Справка с места работы</h2>
              <v-file-input
                solo
                flat
                prepend-icon=""
                multiple="multiple"
                hide-details
                placeholder="Прикрепить изображение"
                class="sendFiles ml-n3"
              >
              </v-file-input>
              <h2 class="defaultHeader">Трудовая книжка</h2>
              <v-file-input
                solo
                flat
                prepend-icon=""
                multiple="multiple"
                hide-details
                placeholder="Прикрепить изображения"
                class="sendFiles ml-n3"
              >
              </v-file-input>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <h2 class="defaultHeader mt-2">Справка о доходах за последние 6 месяцев</h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          multiple="multiple"
          hide-details
          placeholder="Прикрепить изображения о доходах: заработная плата, пенсия и/или пособия."
          class="sendFiles ml-n3"
        ></v-file-input>
        <h2 class="defaultHeader mt-3">Справка с биржи труда</h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          multiple="multiple"
          hide-details
          placeholder="Прикрепить изображения справки из биржы труда, если безработный"
          class="sendFiles ml-n3"
        ></v-file-input>
      </div>
      <div class="childInfo">



      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'ChildrenWithDisabilitiesHelp',
  data () {
    return {
      gender: ['man', 'woman'],
      religion: ['Islam', 'Christianity', 'Hinduism', 'Buddhism'],
      familyStatus: ['Женат/замужем', 'Разведен', 'Одинок', 'Вдова/вдовец', 'Другое'],
    };
  },
};
</script>

<style scoped>
.buttonTo {
  letter-spacing: normal;
  font-weight: normal;
  width: 140px;
  border-radius: 30px;
  font-size: 16px;
}

.category {
  height: 46px;
  display: grid;
  place-items: center;
  margin-bottom: 13px;
  border-radius: 30px !important;
  background-color: #e5e5e5;
  border: 1px solid #ccc;
  font-size: 20px;
}

.mainHeader {
  color: #1c6739;
}

.defaultHeader {
  font-weight: normal;
  font-size: 22px;
}

.smallHeader {
  font-size: 16px;
  font-weight: normal;
  color: #b0b0b0;
}

.defaultTextField {
  border-radius: 30px !important;
}

.autocompleteField {
  width: 230px;
}

.dateField {
  width: 200px;
  border-radius: 30px !important;
  margin-top: 10px;
}

.outerRowTextField {
  width: 600px;
}

.sendFiles {
  text-decoration: underline;
  text-underline-position: under;
  color: #666;
}

.workInfo {
  width: 220px;
}

.childInfo {
  width: 150px;
}
</style>
