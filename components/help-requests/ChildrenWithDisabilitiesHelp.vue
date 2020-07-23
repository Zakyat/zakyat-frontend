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
    <h2 class="mainHeader mt-8">
      Информация о вас
    </h2>
    <h2 class="defaultHeader mt-8">Фамилия Имя Отчество</h2>
    <v-row class="mt-3">
      <v-col cols="7" class="pr-9">
        <v-text-field
          class="nameTextField"
          dense
          height="50px"
          placeholder="Введите свое полное имя"
          outlined
        >
        </v-text-field>
        <v-text-field
          class="nameTextField"
          dense
          height="50px"
          placeholder="Введите гражданство"
          outlined
        >
        </v-text-field>
      </v-col>
      <v-col cols="5">
        <v-text-field
          class="nameTextField genderField"
          dense
          height="50px"
          placeholder="Пол"
          outlined
        >
        </v-text-field>
      </v-col>
    </v-row>
    <h2 class="defaultHeader">Дата рождения</h2>
    <v-text-field
      class="dateField"
      dense
      height="50px"
      outlined
      append-icon="mdi-close"
    >
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: 'ChildrenWithDisabilitiesHelp',
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

.nameTextField {
  border-radius: 30px !important;
}

.genderField {
  width: 230px;
}

.dateField {
  width: 170px;
  border-radius: 30px !important;
  margin-top: 10px;
}
</style>
