<template>
  <div>
    <v-row class="mt-3">
      <v-col cols="7" class="pr-9">
        <v-text-field
          class="category__default-text-field"
          dense
          height="50px"
          placeholder="  Введите полное имя ребенка"
          outlined
          type="text"
          :rules="fieldRules"
        />
      </v-col>
      <v-col cols="5">
        <v-autocomplete
          class="category__autocomplete-field category__default-text-field"
          dense
          outlined
          :items="gender"
          placeholder="  Пол"
          height="50px"
          type="text"
          :rules="fieldRules"
        />
      </v-col>
    </v-row>
    <h2 class="category__small-header ml-3">
      Дата рождения
    </h2>
    <v-menu
      :v-model="childDatePicker"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="childDate"
          outlined
          class="rounded-pill category__date-field"
          prepend-inner-icon="mdi-calendar-multiselect"
          readonly
          v-bind="attrs"
          placeholder="     __-__-____"
          color="success"
          :rules="fieldRules"
          v-on="on"
        />
      </template>
      <v-date-picker
        v-model="childDate"
        color="success"
        @input="childDatePicker = false"
      />
    </v-menu>
    <h2 class="category__default-header">
      Паспорт или свидетельство о рождении
    </h2>
    <v-file-input
      solo
      flat
      prepend-icon=""
      multiple="multiple"
      hide-details
      placeholder="Прикрепить 2 изображения паспорта: главная страница, прописка или свидетельство о рождении"
      class="category__file-sender ml-n3"
    />
  </div>
</template>
<script lang="ts">
export default {
  name: 'ChildForm',
  data () {
    return {
      fieldRules: [(v: string) => !!v],
      gender: ['М', 'Ж'],
      childDate: '',
      childDatePicker: false,
    };
  },
};
</script>

<style scoped lang="scss">
  .category__small-header {
    font-size: 16px;
    font-weight: normal;
    color: #b0b0b0;
  }

  .category__default-text-field {
    border-radius: 30px !important;
  }

  .category__autocomplete-field {
    width: 230px;
  }

  .category__date-field {
    width: 170px;
    border-radius: 30px !important;
    margin-top: 10px;
  }

  .category__default-header {
    font-weight: normal;
    font-size: 22px;
  }

  .category__file-sender {
    text-decoration: underline;
    text-underline-position: under;
    color: #666;
  }

</style>
