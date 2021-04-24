<template>
  <v-container class="reports" fluid>
    <v-row class="mb-10">
      <v-col v-if="campaigns.filter(item => !item.isActive).length !== 0">
        <v-select
          v-model="selectedPage"
          :items="pages"
          item-text="text"
          item-value="path"
          class="page-selector"
          background-color="transparent"
          hide-details
          solo
          flat
          @input="$router.push($event)"
        >
          <template #selection="{ item }">
            <span class="text-h4 font-weight-bold ml-n3">
              {{ item.text }}
            </span>
          </template>
        </v-select>
      </v-col>
      <v-col v-else>
        <span class="text-h4 font-weight-bold">
          Поступления
        </span>
      </v-col>
      <v-spacer />
<!--      <v-col cols="2">-->
<!--        <v-select-->
<!--          v-model="month"-->
<!--          :items="months"-->
<!--          item-text="text"-->
<!--          item-value="num"-->
<!--          hide-details-->
<!--          rounded-->
<!--          outlined-->
<!--          style="font-weight: bold;"-->
<!--        />-->
<!--      </v-col>-->
<!--      <v-col cols="2">-->
<!--        <v-select-->
<!--          v-model="year"-->
<!--          :items="years"-->
<!--          hide-details-->
<!--          rounded-->
<!--          outlined-->
<!--          style="font-weight: bold;"-->
<!--        />-->
<!--      </v-col>-->
    </v-row>
<!--    <nuxt-child :page="page" :month="month" :year="year" />-->
    <nuxt-child
      :page="page"
      :total-transaction-pages="totalTransactionPages"
      :total-money-collected="totalMoneyCollected"
      :items-on-page="itemsOnPage"
    />
  </v-container>
</template>

<script lang="js">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  name: 'Reports',
  apollo: {
    transactions: {
      query: gql` query {
        transactions {
          id
          amount
        }
      }`,
    },
    campaigns: {
      query: gql`
        query campaigns {
          campaigns {
            id
            isActive
          }
        }
      `,
    },
  },
  data () {
    return {
      transactions: [],
      pages: [
        { text: this.$t('reports.income.title'), path: '/reports/income' },
        { text: this.$t('reports.expenses.title'), path: '/reports/expenses' },
      ],
      campaigns: '',
      selectedPage: this.$route.path,
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
      page: 1,
      itemsOnPage: 10,
    };
  },
  computed: {
    totalTransactionPages () {
      return Math.ceil(this.transactions?.length / this.itemsOnPage);
    },
    totalMoneyCollected () {
      return this.transactions.reduce((acc, item) => item.amount + acc, 0);
    },
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
</style>
