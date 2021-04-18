<template>
  <v-content style="padding: 0 10px 10px;">
    <v-row>
      <span class="subtitle">{{ $t('reports.income.subtitle') }}</span>
      <v-spacer />
      <span class="subtitle">{{ total | rubles }}</span>
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
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  name: 'Income',
  props: {
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
      query: gql` query transactions ($limit: Int, $offset: Int) {
        transactions (limit: $limit, offset: $offset) {
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
          limit: this.itemsOnPage,
          offset: (this.page - 1) * this.itemsOnPage,
        };
      },
    },
  },
  data () {
    return {
      transactions: [],
      allTransactions: [],
    };
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
  computed: {
    total (): number {
      return this.allTransactions.reduce((acc, item) => item.amount + acc, 0);
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
