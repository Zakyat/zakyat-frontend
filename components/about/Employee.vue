<template>
  <v-row>
    <v-col
      v-for="i in 5"
      :key="i"
      cols="12"
      md="6"
    >
      <v-card
        flat
      >
        <v-img
          rounded
          class="main-img"
          :src="require('@/assets/images/about/102113 1.png')"
        />
        <v-card-title class="pa-0 mt-3" style="font-size: 26px;">
          Марданов Булат Раифович
        </v-card-title>
        <v-card-subtitle class="pa-0 mt-1">
          Генеральный директор БФ «Закят»
        </v-card-subtitle>
        <v-card-text class="pa-0 black--text">
          Функции:
        </v-card-text>
        <v-card-text class="pa-0 black--text" style="width: 80%;">
          1. Распоряжание средствами фонда.
          2. Формирование задач, поставленных перед фондом и осуществление организации их решений.
          3. Представление интересов фонда при взаимодействии с юридическими и физическими лицами.
        </v-card-text>
      </v-card>
      <v-card-text class="pa-0 mt-3 black--text">
        <v-icon>mdi-phone</v-icon> + 7 (843) 225-33-22
      </v-card-text>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Employee',
});
</script>

<style scoped>
.main-img {
  border-radius: 10px !important;
}
</style>
