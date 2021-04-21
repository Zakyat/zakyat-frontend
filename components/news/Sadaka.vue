<template>
  <v-col
    cols="6"
    md="3"
    class="px-2"
  >
    <v-card
      flat
      class="pa-5 sadaka-card"
    >
      <v-card-title class="pa-0">
        {{ $t('news.sadaka.title') }}
      </v-card-title>
      <v-card-text class="pa-0">
        {{ $t('news.sadaka.description') }}
        <v-text-field
          :label="$t('news.sadaka.money_amount_input')"
          v-model.number="amount"
          type="number"
          min="0"
          rounded
          outlined
          hide-details
          color="black"
          class="mt-3"
        />
      </v-card-text>
      <v-radio-group
        v-model="amount"
        row
        hide-details
        class="amounts pa-2"
      >
        <v-radio
          v-for="a in amounts"
          :key="a"
          class="pa-0 mr-2"
          :label="`${a} ₽`"
          :value="a"
        />
      </v-radio-group>
      <v-btn
        rounded
        dark
        block
        color="primary"
        class="mt-4"
        :to="`/charity?id=-1&amount=${amount}`"
      >
        Пожертвовать
      </v-btn>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  name: 'Sadaka',
  data () {
    return {
      amounts: [1, 50, 100],
      amount: null,
      url: '',
    };
  },
  methods: {
    donate (amount: number, campaignId: number, description: string, subscriptionDays: number, transactionType: number) {
      this.$apollo.mutate({
        mutation: gql`
          mutation startPayment(
              $amount: Float!,
              $campaignId: Int!,
              $description: String!,
              $subscriptionDays: Int!,
              $transactionType: Int!,
              $successUrl: String!,
              $failUrl: String!
            ) {
              startPayment(
                amount: $amount,
                campaignId: $campaignId,
                description: $description,
                subscriptionDays: $subscriptionDays,
                transactionType: $transactionType,
                successUrl: $successUrl,
                failUrl: $failUrl,
              ) {
                url,
                errors,
                ok,
                transaction{
                  id
                  amount
                  payment{
                    uid
                    status
                  }
                }
              }
            }
        `,
        variables: {
          amount,
          campaignId,
          description,
          subscriptionDays,
          transactionType,
          successUrl: process.env.SUCCESS_PAYMENT_PAGE,
          failUrl: process.env.FAIL_PAYMENT_PAGE,
        },
        update: (cache, result) => {
          this.url = result.data.startPayment.url;
          window.open(this.url, '_blank');
        },
      });
    },
  },
});
</script>

<style scoped>
.sadaka-card {
  width: 310px;
}

.amounts {
  border: 1px solid black;
  border-radius: 25px;
}
</style>
