<template>
  <v-container class="reports" fluid>
    <v-row>
      <v-col>
        <span class="select">{{ selectItems.find(x=>x.component==selectedItem).text }}
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon color="black">mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in selectItems"
                :key="i"
                @click="selectedItem=item.component"
              >
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </span>
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
    <Admission v-if="selectedItem =='admission'" :page="page" :month="month" :year="year" />
    <Expense v-if="selectedItem =='expenses'" :page="page" :month="month" :year="year" />
    <v-row class="text-center mt-6 text-black">
      <v-pagination
        v-model="page"
        :length="total_page"
        :total-visible="6"
        circle
      />
    </v-row>
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
        { text: '', num: 0 },
        { text: this.$t('reports.months.january'), num: 1 },
        { text: this.$t('reports.months.february'), num: 2 },
        { text: this.$t('reports.months.march'), num: 3 },
        { text: this.$t('reports.months.april'), num: 4 },
        { text: this.$t('reports.months.may'), num: 5 },
        { text: this.$t('reports.months.june'), num: 6 },
        { text: this.$t('reports.months.july'), num: 7 },
        { text: this.$t('reports.months.august'), num: 8 },
        { text: this.$t('reports.months.september'), num: 9 },
        { text: this.$t('reports.months.october'), num: 10 },
        { text: this.$t('reports.months.november'), num: 11 },
        { text: this.$t('reports.months.december'), num: 12 },
      ],
      month: new Date().getMonth() + 1,
      page: 1,
      total_page: 10,
    };
  },
});
</script>

<style scoped>
.reports {
  padding: 50px 6%;
}

.select {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
  }
</style>
