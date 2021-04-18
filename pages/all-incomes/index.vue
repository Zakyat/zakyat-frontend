<template>
  <v-container class="mt-10">
    <v-row>
      <span class="subtitle">Для сбора "{{ transactions[0].campaign.title }}" всего собрано</span>
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
      <v-flex lg3 class="text" v-if="transaction.user" style="font-weight: bold;">
        {{ transaction.user.firstName }} {{ transaction.user.lastName }}
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
    <v-row class="text-center mt-6 text-black">
      <v-pagination
        v-model="page"
        :length="totalTransactionPages"
        :total-visible="6"
        circle
      />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  data () {
    return {
      transactions: [],
      itemsOnPage: 10,
      campaignId: this.$route.query.id,
    };
  },
  apollo: {
    transactions: {
      query: gql` query transactions ($campaignId: ID, $limit: Int, $offset: Int) {
        transactions (campaignId: $campaignId, limit: $limit, offset: $offset) {
          id
          user {
            firstName
            lastName
          }
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
          campaignId: this.campaignId,
          limit: this.itemsOnPage,
          offset: (this.page - 1) * this.itemsOnPage,
        };
      },
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
  methods: {
    localeDate (stringDate: string) {
      const date = new Date(stringDate).toLocaleDateString(this.$i18n.locale, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
      return date;
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
