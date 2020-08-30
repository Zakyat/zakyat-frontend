<template>
  <div>
    <CategoryHeader>
      ребенок, имеющий проблемы со здоровьем
    </CategoryHeader>
    <p class="mt-3" style="font-size: 16px;">
      Для выбранной категории вам нужно заполнить информацию о себе, супруге и о всех своих детях
    </p>
    <v-form
      ref="form"
      v-model="isValid"
    >
      <div class="infoAboutYou">
        <h2 class="category__main-header mt-8">
          Информация о вас
        </h2>
        <v-row class="mt-3">
          <v-col cols="7" class="pr-9">
            <v-text-field
              dense
              height="50"
              placeholder="Введите свое полное имя"
              rounded
              outlined
              type="text"
              :rules="fieldRules"
            />
            <v-text-field
              rounded
              dense
              height="50"
              placeholder="Введите гражданство"
              outlined
              type="text"
              :rules="fieldRules"
            />
            <v-text-field
              rounded
              dense
              height="50"
              placeholder="Номер телефона"
              outlined
              type="number"
              :rules="fieldRules"
            />
            <v-autocomplete
              class="category__autocomplete-field"
              outlined
              dense
              height="50"
              solo
              flat
              rounded
              :items="religion"
              placeholder="Религия"
              type="text"
              :rules="fieldRules"
            />
          </v-col>
          <v-col cols="5">
            <v-autocomplete
              v-model="userGender"
              class="category__autocomplete-field"
              outlined
              solo
              dense
              flat
              rounded
              height="50"
              :items="gender"
              placeholder="Пол"
              type="text"
              :rules="fieldRules"
            />
          </v-col>
        </v-row>
        <h2 class="category__small-header ml-3">
          Дата рождения
        </h2>
        <v-menu
          v-model="userDatePicker"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="userDate"
              outlined
              class="category__date-field"
              prepend-inner-icon="mdi-calendar-multiselect"
              readonly
              v-bind="attrs"
              placeholder="__-__-____"
              rounded
              color="success"
              :rules="fieldRules"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="userDate"
            color="success"
            @input="userDatePicker = false"
          />
        </v-menu>
        <v-text-field
          class="category__outer-row-field"
          dense
          height="50"
          placeholder="Адрес проживания"
          outlined
          rounded
          type="text"
          :rules="fieldRules"
        />
        <h2 class="category__default-header">
          Паспорт
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          multiple="multiple"
          hide-details
          placeholder="Прикрепить изображения главной страницы,  прописки,  о браке и дети (4 шт)"
          class="category__file-sender ml-n3"
        />
        <h2 class="category__small-header mt-4">
          Заполните данные о работе или прикрепите справку с биржы труда
        </h2>
        <v-expansion-panels
          flat
        >
          <v-expansion-panel>
            <v-expansion-panel-header
              class="category__work-info"
            >
              <h2 class="category__default-header ml-n6">
                Работа и доход
              </h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="ml-n6">
              <v-text-field
                class="category__outer-row-field"
                dense
                height="50"
                placeholder="Место работы"
                outlined
                rounded
                type="text"
                :rules="fieldRules"
              />
              <v-text-field
                class="category__outer-row-field"
                dense
                height="50"
                placeholder="Рабочая позиция на работе"
                outlined
                rounded
                type="text"
                :rules="fieldRules"
              />
              <v-text-field
                class="category__outer-row-field"
                dense
                height="50"
                placeholder="Заработная плата"
                outlined
                rounded
                type="text"
                :rules="fieldRules"
              />
              <v-text-field
                class="category__outer-row-field"
                dense
                height="50"
                placeholder="Пенсия (в руб), если есть"
                outlined
                rounded
                type="text"
                :rules="fieldRules"
              />
              <h2 class="category__default-header">
                Справка с места работы
              </h2>
              <v-file-input
                solo
                flat
                prepend-icon=""
                hide-details
                placeholder="Прикрепить изображение"
                class="category__file-sender ml-n3"
              />
              <h2 class="category__default-header">
                Трудовая книжка
              </h2>
              <v-file-input
                solo
                flat
                prepend-icon=""
                multiple="multiple"
                hide-details
                placeholder="Прикрепить изображения"
                class="category__file-sender ml-n3"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <h2 class="category__default-header mt-2">
          Справка о доходах за последние 6 месяцев
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          multiple="multiple"
          hide-details
          placeholder="Прикрепить изображения о доходах: заработная плата, пенсия и/или пособия."
          class="category__file-sender ml-n3"
        />
        <h2 class="category__default-header mt-3">
          Справка с биржи труда
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          multiple="multiple"
          hide-details
          placeholder="Прикрепить изображения справки из биржы труда, если безработный"
          class="category__file-sender ml-n3"
        />
        <h2 class="category__default-header mt-3">
          Статус в семье
        </h2>
        <!--here, depending on gender, the endings of the items and placeholders changes-->
        <v-autocomplete
          v-model="familyStatus"
          class="category__autocomplete-field mt-3"
          outlined
          dense
          solo
          flat
          rounded
          :items="userGender === 'М' || userGender === '' ? familyStatusMan : familyStatusWoman"
          :placeholder="(userGender === 'М' || userGender === '' ? familyStatusMan[0] : familyStatusWoman[0])"
          height="50"
          type="text"
          :rules="fieldRules"
        />
      </div>

      <div class="childInfoBlock">
        <h2 class="category__main-header mt-2">
          Ребёнок, нуждающийся в помощи
        </h2>
        <h2 class="category__default-header mt-6">
          Справка об инвалидности
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          hide-details
          placeholder="Прикрепить изображение"
          class="category__file-sender ml-n3"
        />
        <h2 class="category__default-header mt-3">
          Выписка (справка) от врача
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          hide-details
          placeholder="Прикрепить изображение"
          class="category__file-sender ml-n3"
        />
        <h2 class="category__default-header mt-3">
          Счет на медицинские услуги или на приобретение медикаментов
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          hide-details
          placeholder="Прикрепить изображение"
          class="category__file-sender ml-n3"
        />
        <h2 class="category__default-header mt-3">
          Паспорт или свидетельство о рождении
        </h2>
        <v-file-input
          solo
          flat
          prepend-icon=""
          hide-details
          multiple="multiple"
          placeholder="Прикрепить 2 изображения паспорта: главная страница, прописка или свидетельство о рождении"
          class="category__file-sender ml-n3"
        />
      </div>

      <div class="spouseInfo">
        <v-expansion-panels
          flat
        >
          <!--this panel "Spouse" is disabled when user selects family-status - "Alone" or "Other"-->
          <v-expansion-panel
            :disabled="!(familyStatus !== 'Одинокая' && familyStatus !== 'Одинок' && familyStatus !== 'Другое')"
          >
            <v-expansion-panel-header
              class="category___spouse-header"
              expand-icon="mdi-plus-circle-outline"
            >
              <h2 class="category__main-header ml-n6">
                Супруг(-а)
              </h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="ml-n6">
              <v-row class="mt-n2">
                <v-col cols="7" class="pr-9">
                  <v-text-field
                    rounded
                    dense
                    height="50"
                    placeholder="Введите свое полное имя"
                    outlined
                    type="text"
                    :rules="fieldRules"
                  />
                  <v-text-field
                    rounded
                    dense
                    height="50"
                    placeholder="Введите гражданство"
                    outlined
                    type="text"
                    :rules="fieldRules"
                  />
                </v-col>
              </v-row>
              <h2 class="category__small-header ml-3">
                Дата рождения
              </h2>
              <v-menu
                v-model="spouseDatePicker"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="spouseDate"
                    outlined
                    rounded
                    class="category__date-field"
                    prepend-inner-icon="mdi-calendar-multiselect"
                    readonly
                    v-bind="attrs"
                    placeholder="__-__-____"
                    color="success"
                    :rules="fieldRules"
                    v-on="on"
                  />
                </template>
                <v-date-picker
                  v-model="spouseDate"
                  color="success"
                  @input="spouseDatePicker = false"
                />
              </v-menu>
              <v-text-field
                class="category__outer-row-field"
                dense
                height="50"
                placeholder="Адрес проживания"
                outlined
                rounded
                type="text"
                :rules="fieldRules"
              />
              <h2 class="category__default-header">
                Паспорт
              </h2>
              <v-file-input
                solo
                flat
                prepend-icon=""
                multiple="multiple"
                hide-details
                placeholder="Прикрепить изображения главной страницы,  прописки,  о браке и дети (4 шт)"
                class="category__file-sender ml-n3"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <!--here user can add other child-form-->
      <div class="otherChildInfoBlock">
        <h2 class="category__main-header mt-2">
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
            <ChildForm />
          </div>
        </template>
      </div>

      <div class="category__agreement">
        <v-checkbox
          v-model="agreedToTerms"
          label="Я принимаю условия публичной оферты и даю согласие на обработку персональных данных"
          color="success"
          :rules="fieldRules"
        />
        <v-btn
          depressed
          dark
          height="46"
          width="300"
          :color="(isValid && agreedToTerms) ? '#56B756' : '#899a89'"
          class="button-to"
          @click="validate"
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
      <WarningDialog @close-dialog="closeDialog" />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CategoryHeader from '@/components/help-requests/CategoryHeader.vue';
import WarningDialog from '~/components/help-requests/WarningDialog.vue';
import ChildForm from '~/components/help-requests/ChildForm.vue';

export default Vue.extend({
  name: 'ChildrenWithDisabilities',
  components: {
    ChildForm,
    WarningDialog,
    CategoryHeader,
  },
  data () {
    return {
      // options for choose
      // need to add this fields into the ru.json, in the en.json we need
      // only one default array of common familyStatusItems
      gender: ['М', 'Ж'],
      religion: ['Ислам', 'Христианство', 'Иудаизм', 'Атеизм', 'Другое'],
      familyStatusMan: ['Женат', 'Разведен', 'Одинок', 'Разведен', 'Другое'],
      familyStatusWoman: ['Замужем', 'Разведена', 'Одинокая', 'Разведена', 'Другое'],
      // user data
      userGender: '',
      userDate: '',
      spouseDate: '',
      userDatePicker: false,
      spouseDatePicker: false,
      childFormsAmount: 0,
      familyStatus: '',
      hasSpouse: false,
      getWarning: false,
      agreedToTerms: false,
      isValid: '',
      fieldRules: [(v: string) => !!v],
    };
  },
  methods: {
    addChildForm () {
      this.childFormsAmount++;
    },
    validate () {
      if (!this.isValid || !this.agreedToTerms) {
        (this.$refs.form as HTMLFormElement).validate();
        this.getWarning = !this.getWarning;
      }
    },
    closeDialog () {
      this.getWarning = !this.getWarning;
    },
  },
});
</script>

<style scoped lang="scss">
.button-to {
  letter-spacing: normal;
  font-weight: normal;
  width: 140px;
  border-radius: 30px;
  font-size: 16px;
}

.category__main-header {
  color: #1c6739;
}

.category__default-header {
  font-weight: normal;
  font-size: 22px;
}

.category__small-header {
  font-size: 16px;
  font-weight: normal;
  color: #b0b0b0;
}

.category__autocomplete-field {
  width: 230px;
  height: 50px !important;
}

.category__date-field {
  width: 170px;
  margin-top: 10px;
}

.category__outer-row-field {
  width: 600px;
}

.category__file-sender {
  text-decoration: underline;
  text-underline-position: under;
  color: #666;
}

.category__work-info {
  width: 220px;
}

.category___spouse-header {
  width: 170px;
}

.category__agreement {
  display: grid;
  place-items: center;
}
</style>
