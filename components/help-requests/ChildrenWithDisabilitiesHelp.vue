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
            />
            <v-text-field
              class="defaultTextField"
              dense
              height="50px"
              placeholder="Введите гражданство"
              outlined
              type="text"
            />
            <v-text-field
              class="defaultTextField"
              dense
              height="50px"
              placeholder="Номер телефона"
              outlined
              type="number"
            />
            <v-autocomplete
              class="autocompleteField defaultTextField"
              dense
              outlined
              :items="religion"
              placeholder="Религия"
              height="50px"
              type="text"
            />
          </v-col>
          <v-col cols="5">
            <v-autocomplete
              v-model="userGender"
              class="autocompleteField defaultTextField"
              dense
              outlined
              :items="gender"
              placeholder="Пол"
              height="50px"
              type="text"
            />
          </v-col>
        </v-row>
        <h2 class="smallHeader ml-3">
          Дата рождения
        </h2>
        <v-text-field
          class="dateField"
          type="date"
          dense
          height="50px"
          outlined
        />
        <v-text-field
          class="defaultTextField outerRowTextField"
          dense
          height="50px"
          placeholder="Адрес проживания"
          outlined
          type="text"
        />
        <h2 class="defaultHeader">
          Паспорт
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          multiple="multiple"
          hide-details
          placeholder="Прикрепить изображения главной страницы,  прописки,  о браке и дети (4 шт)"
          class="sendFiles ml-n3"
        />
        <h2 class="smallHeader mt-4">
          Заполните данные о работе или прикрепите справку с биржы труда
        </h2>
        <v-expansion-panels
          flat
        >
          <v-expansion-panel>
            <v-expansion-panel-header
              class="workInfo"
            >
              <h2 class="defaultHeader ml-n6">
                Работа и доход
              </h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="ml-n6">
              <v-text-field
                class="defaultTextField outerRowTextField"
                dense
                height="50px"
                placeholder="Место работы"
                outlined
                type="text"
              />
              <v-text-field
                class="defaultTextField outerRowTextField"
                dense
                height="50px"
                placeholder="Рабочая позиция на работе"
                outlined
                type="text"
              />
              <v-text-field
                class="defaultTextField outerRowTextField"
                dense
                height="50px"
                placeholder="Заработная плата"
                outlined
                type="text"
              />
              <v-text-field
                class="defaultTextField outerRowTextField"
                dense
                height="50px"
                placeholder="Пенсия (в руб), если есть"
                outlined
                type="text"
              />
              <h2 class="defaultHeader">
                Справка с места работы
              </h2>
              <v-file-input
                solo
                flat
                prepend-icon=""
                multiple="multiple"
                hide-details
                placeholder="Прикрепить изображение"
                class="sendFiles ml-n3"
              />
              <h2 class="defaultHeader">
                Трудовая книжка
              </h2>
              <v-file-input
                solo
                flat
                prepend-icon=""
                multiple="multiple"
                hide-details
                placeholder="Прикрепить изображения"
                class="sendFiles ml-n3"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <h2 class="defaultHeader mt-2">
          Справка о доходах за последние 6 месяцев
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          multiple="multiple"
          hide-details
          placeholder="Прикрепить изображения о доходах: заработная плата, пенсия и/или пособия."
          class="sendFiles ml-n3"
        />
        <h2 class="defaultHeader mt-3">
          Справка с биржи труда
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          multiple="multiple"
          hide-details
          placeholder="Прикрепить изображения справки из биржы труда, если безработный"
          class="sendFiles ml-n3"
        />
        <h2 class="defaultHeader mt-3">
          Статус в семье
        </h2>
        <v-autocomplete
          v-model="familyStatus"
          class="autocompleteField defaultTextField mt-3"
          dense
          outlined
          :items="userGender === 'М' || '' ? familyStatusMan : familyStatusWoman"
          :placeholder="userGender === 'М' || '' ? familyStatusMan[0] : familyStatusWoman[0]"
          height="50px"
          type="text"
        />
      </div>

      <div class="childInfoBlock">
        <h2 class="mainHeader mt-2">
          Ребёнок, нуждающийся в помощи
        </h2>
        <h2 class="defaultHeader mt-6">
          Справка об инвалидности
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          hide-details
          placeholder="Прикрепить изображение"
          class="sendFiles ml-n3"
        />
        <h2 class="defaultHeader mt-3">
          Выписка (справка) от врача
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          hide-details
          placeholder="Прикрепить изображение"
          class="sendFiles ml-n3"
        />
        <h2 class="defaultHeader mt-3">
          Счет на медицинские услуги или на приобретение медикаментов
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          hide-details
          placeholder="Прикрепить изображение"
          class="sendFiles ml-n3"
        />
        <h2 class="defaultHeader mt-3">
          Паспорт или свидетельство о рождении
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          hide-details
          placeholder="Прикрепить 2 изображения паспорта: главная страница, прописка или свидетельство о рождении"
          class="sendFiles ml-n3"
        />
      </div>

      <div class="spouseInfo">
        <v-expansion-panels
          flat
        >
          <v-expansion-panel
            :disabled="!(familyStatus !== 'Одинокая' && familyStatus !== 'Одинок' && familyStatus !== 'Другое')"
          >
            <v-expansion-panel-header
              class="spouseHeader"
              expand-icon="mdi-plus-circle-outline"
            >
              <h2 class="mainHeader ml-n6">
                Супруг(-а)
              </h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="ml-n6">
              <v-row class="mt-n2">
                <v-col cols="7" class="pr-9">
                  <v-text-field
                    class="defaultTextField"
                    dense
                    height="50px"
                    placeholder="Введите свое полное имя"
                    outlined
                    type="text"
                  />
                  <v-text-field
                    class="defaultTextField"
                    dense
                    height="50px"
                    placeholder="Введите гражданство"
                    outlined
                    type="text"
                  />
                </v-col>
              </v-row>
              <h2 class="smallHeader ml-3">
                Дата рождения
              </h2>
              <v-text-field
                class="dateField"
                type="date"
                dense
                height="50px"
                outlined
              />
              <v-text-field
                class="defaultTextField outerRowTextField"
                dense
                height="50px"
                placeholder="Адрес проживания"
                outlined
                type="text"
              />
              <h2 class="defaultHeader">
                Паспорт
              </h2>
              <v-file-input
                solo
                flat
                prepend-icon=""
                multiple="multiple"
                hide-details
                placeholder="Прикрепить изображения главной страницы,  прописки,  о браке и дети (4 шт)"
                class="sendFiles ml-n3"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div class="otherChildInfoBlock">
        <h2 class="mainHeader mt-2">
          Ребёнок
          <v-btn icon @click="addChildForm">
            <v-icon>mdi-plus-circle-outline</v-icon>
          </v-btn>
        </h2>
        <template>
          <div
            v-for="form in childFormsAmount"
            :key="form"
          >
            <v-row class="mt-3">
              <v-col cols="7" class="pr-9">
                <v-text-field
                  class="defaultTextField"
                  dense
                  height="50px"
                  placeholder="Введите полное имя ребенка"
                  outlined
                  type="text"
                />
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
                />
              </v-col>
            </v-row>
            <h2 class="smallHeader ml-3">
              Дата рождения
            </h2>
            <v-text-field
              class="dateField"
              type="date"
              dense
              height="50px"
              outlined
            />
            <h2 class="defaultHeader">
              Паспорт или свидетельство о рождении
            </h2>
            <v-file-input
              solo
              flat
              prepend-icon=""
              multiple="multiple"
              hide-details
              placeholder="Прикрепить 2 изображения паспорта: главная страница, прописка или свидетельство о рождении"
              class="sendFiles ml-n3"
            />
          </div>
        </template>
      </div>

      <div class="agreementToProcessing">
        <v-checkbox
          label="Я принимаю условия публичной оферты и даю согласие на обработку персональных данных"
          color="success"
        />
        <!--add @click event for test-->
        <v-btn
          depressed
          dark
          color="#56B756"
          height="46px"
          width="300"
          class="buttonTo text-none rounded-pill"
          @click="getWarning = !getWarning"
        >
          Написать заявление и отправить
        </v-btn>
      </div>
    </v-form>
    <v-dialog
      v-model="getWarning"
      width="440"
      class="warningDialog"
    >
      <div class="button-wrapper white">
        <v-btn
          icon
          color="black"
          x-large
          @click="getWarning = !getWarning"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="success__container white">
        <v-icon right size="60px" color="#EB3050">
          mdi-close-circle
        </v-icon>
        <p class="pt-4 description">
          Заполните все поля для отправки заявления
        </p>
        <v-btn
          text
          class="mt-8 custom-transform-class text-none buttonTo"
          color="#EB3050"
          @click="getWarning = !getWarning"
        >
          <span>
            Вернуться
          </span>
        </v-btn>
      </div>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ChildrenWithDisabilitiesHelp',
  data () {
    return {
      // options for choose
      // need to add this fields into the ru.json, in the en.json we need only one default array of familyStatus
      gender: ['М', 'Ж'],
      religion: ['Ислам', 'Христианство', 'Иудаизм', 'Атеизм', 'Другое'],
      familyStatusMan: ['Женат', 'Разведен', 'Одинок', 'Разведен', 'Другое'],
      familyStatusWoman: ['Замужем', 'Разведена', 'Одинокая', 'Разведена', 'Другое'],
      // user data
      userGender: '',
      childFormsAmount: 0,
      familyStatus: '',
      hasSpouse: false,
      getWarning: false,
    };
  },
  methods: {
    addChildForm () {
      this.childFormsAmount++;
    },
  },
});
</script>

<style scoped lang="scss">
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

.spouseHeader {
  width: 170px;
}

.childInfo {
  width: 150px;
}

.agreementToProcessing {
  display: grid;
  place-items: center;
}

.info-wrapper {
  text-align: center;
}

.button-wrapper {
  text-align: right;
}

.success__container {
  padding: 0 50px 50px 50px;
  text-align: center;
}

.description {
  font-size: 14px;
}
</style>
