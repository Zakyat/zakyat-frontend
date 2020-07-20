<template>
  <v-container class="reports" fluid>
    <v-row>
      <v-col cols="3">
        <v-select
          v-model="selectedItem"
          :items="selectItems"
          item-text="text"
          item-value="component"
          rounded
          hide-selected
          class="select"
        />
      </v-col>
      <v-spacer />
      <v-col cols="2">
        <v-select
          v-model="month"
          :items="months"
          item-text="text"
          item-value="num"
          rounded
          outlined
          style="font-weight: bold;"
        />
      </v-col>
      <v-col cols="2">
        <v-select
          v-model="year"
          :items="years"
          rounded
          outlined
          style="font-weight: bold;"
        />
      </v-col>
    </v-row>
    <v-content v-if="selectedItem =='admission'">
      <Admission />
    </v-content>
    <v-content v-if="selectedItem =='expenses'">
      <Expense />
    </v-content>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Admission from '@/components/reports/Admission.vue';
import Expense from '@/components/reports/Expenses.vue';
export default Vue.extend({
  components: {
    Admission,
    Expense,
  },
  data () {
    return {
      selectItems: [
        { text: this.$t('reports.admission.title'), component: 'admission' },
        { text: this.$t('reports.expenses.title'), component: 'expenses' },
      ],
      selectedItem: 'admission',
      years: [2018, 2019, 2020],
      year: 2020,
      months: [
        { text: 'январь', num: 1 },
        { text: 'февраль', num: 2 },
        { text: 'март', num: 3 },
        { text: 'апрель', num: 4 },
        { text: 'май', num: 5 },
        { text: 'июнь', num: 6 },
        { text: 'июль', num: 7 },
        { text: 'август', num: 8 },
        { text: 'сентябрь', num: 9 },
        { text: 'октябрь', num: 10 },
        { text: 'ноябрь', num: 11 },
        { text: 'декабрь', num: 12 },
      ],
      month: new Date().getMonth() + 1,
    };
  },
});
</script>

<style scoped>
.reports {
  padding: 50px 6%;
}

.select {
    width: 285px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
  }
</style>
