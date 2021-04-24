<template>
  <v-main style="padding: 0 10px 10px;">
    <v-row>
<!--      <span class="subtitle">{{ $t('reports.income.subtitle') }}</span>-->
      <span class="subtitle">Всего собрано</span>
      <v-spacer />
      <span class="subtitle">{{ totalMoneyCollected | rubles }}</span>
    </v-row>
    <v-row style="padding: 30px 10px 10px;">
      <v-flex lg2 class="text--secondary">
        {{ $t('reports.income.date') }}
      </v-flex>
      <v-flex lg3 class="text--secondary">
        {{ $t('reports.income.benfactor_name') }}
      </v-flex>
      <v-flex lg3 class="text--secondary">
        {{ $t('reports.income.donation_target') }}
      </v-flex>
      <v-flex lg3 class="text--secondary">
        {{ $t('reports.income.donation_type') }}
      </v-flex>
      <v-flex lg1 class="text--secondary text-right">
        {{ $t('reports.income.amount') }}
      </v-flex>
    </v-row>
    <div v-if="transactions">
      <v-row
        v-for="transaction in transactions"
        :key="transaction.id"
        align="center"
        class="mt-4"
        style="background: white; border-radius: 10px; min-height: 60px; padding: 20px;"
      >
        <v-flex lg2 class="text">
          <!--  income.date.toLocaleDateString($i18n.locale)-->
          {{ localeDate(transaction.createAt) }}
        </v-flex>
        <v-flex lg3 class="text" v-if="transaction.fullName" style="font-weight: bold;">
          {{ transaction.fullName }}
        </v-flex>
        <v-flex lg3 class="text" v-else style="font-weight: bold;">
          Аноним
        </v-flex>
        <v-flex lg3 class="text" v-if="transaction.campaign">
          {{ transaction.campaign.title }}
        </v-flex>
        <v-flex lg3 class="text" v-else>
          Садака / Закят
        </v-flex>
        <v-flex lg3 class="text">
          {{ transaction.transactionType }}
        </v-flex>
        <v-flex lg1 class="text-right text" style="font-weight: bold;">
          {{ transaction.amount | rubles }}
        </v-flex>
      </v-row>
    </div>
    <v-row class="text-center mt-6 text-black" v-if="totalTransactionPages > 1">
      <v-pagination
        v-model="page"
        :length="totalTransactionPages"
        :total-visible="6"
        circle
      />
    </v-row>
  </v-main>
</template>

<script lang="js">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  name: 'Income',
  props: {
    // totalMoneyCollected: {
    //   type: Number,
    // },
    // totalTransactionPages: {
    //   type: Number,
    // },
    page: {
      type: Number,
      default: 1,
    },
    itemsOnPage: {
      type: Number,
    },
    // month: {
    //   type: Number,
    //   default: 0,
    // },
    // year: {
    //   type: Number,
    //   default: 2020,
    // },
  },
  apollo: {
    transactions: {
      query: gql` query transactions ($limit: Int, $offset: Int, $isSuccess: Boolean) {
        transactions (limit: $limit, offset: $offset, isSuccess: $isSuccess) {
          id
          fullName
          amount
          createAt
          transactionType
          campaign {
            title
          }
        }
      }`,
      variables () {
        return {
          limit: this.itemsOnPage,
          offset: (this.page - 1) * this.itemsOnPage,
          isSuccess: true,
        };
      },
    },
  },
  data () {
    return {
      transactions: [],
    };
  },
  methods: {
    localeDate (stringDate) {
      const date = new Date(stringDate).toLocaleDateString(this.$i18n.locale, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
      return date;
    },
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

<style scoped>
.text {
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
}

.subtitle {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
}
</style>
