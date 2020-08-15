<template>
  <v-container class="reports" fluid>
    <v-row>
      <v-col>
        <v-select
          v-model="selectedItem"
          :items="selectItems"
          item-value="component"
          class="page-selector"
          background-color="transparent"
          hide-details
          solo
          flat
        >
          <template #selection="{ item }">
            <span class="display-1 font-weight-bold ml-n3">
              {{ item.text }}
            </span>
          </template>
        </v-select>
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
    <Income v-if="selectedItem =='income'" :page="page" :month="month" :year="year" />
    <v-content v-if="selectedItem =='expenses'" style="padding: 0 10px 10px;">
      <v-row style="padding: 0 0 30px;">
        <v-tabs
          v-model="tab"
          hide-slider
          grow
          centered
          center-active
          show-arrows
          class="payment-tabs pa-1"
        >
          <v-tab
            v-for="item in components"
            :key="item.component"
            class="payment-tab"
            active-class="payment-tab-primary"
          >
            {{ item.text }}
          </v-tab>
        </v-tabs>
      </v-row>
      <Needly v-if="tab==0" :page="page" :month="month" :year="year" />
      <Spending v-if="tab==1" :page="page" :month="month" :year="year" />
    </v-content>
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
import Income from '@/components/reports/Income.vue';
import Needly from '@/components/reports/Needly.vue';
import Spending from '@/components/reports/Spending.vue';

export default Vue.extend({
  components: {
    Income,
    Needly,
    Spending,
  },
  data () {
    return {
      selectItems: [
        { text: this.$t('reports.income.title'), component: 'income' },
        { text: this.$t('reports.expenses.title'), component: 'expenses' },
      ],
      selectedItem: 'income',
      years: [2018, 2019, 2020],
      year: 2020,
      months: [
        { text: this.$t('reports.full_year'), num: 0 },
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
      tab: 'needly',
      components: [
        { text: this.$t('reports.expenses.needly'), component: 'needly' },
        { text: this.$t('reports.expenses.spending'), component: 'spending' },
      ],
      page: 1,
      total_page: 10,
    };
  },
});
</script>

<style lang="scss" scoped>
.reports {
  padding: 50px 6%;
}

// To stick the chevron next to the selection
.page-selector {
  ::v-deep .v-select__slot {
    width: initial;
  }

  ::v-deep .v-select__selections {
    input {
      width: 0;
    }
  }
}

.payment-tabs {
  border: 1px solid black;
  border-radius: 30px;
}

.payment-tab {
  width: 300px;
  border-radius: 30px;
  text-transform: inherit;
  font-size: 15px;
}

.payment-tab-primary {
  background-color: #00ac00;
  color: white !important;
}
</style>
