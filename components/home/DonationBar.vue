<template>
  <v-container class="donation-container">
    <v-row>
      <v-col cols="11">
        <h1>{{ $t('home.sadaka.title') }}</h1>
        <p class="my-3">
          {{ $t('home.sadaka.description') }}
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-text-field
          v-model.number="amount"
          rounded
          dense
          single-line
          hide-details
          class="amount"
          :placeholder="`${$t('home.sadaka.enter_amount')}, ₽`"
          outlined
          dark
          type="number"
          min="1"
          height="50"
        />
      </v-col>
      <v-col cols="7">
        <v-radio-group
          v-model="amount"
          row
          dark
          dense
          hide-details
          class="amounts ml-5"
          height="30"
        >
          <v-radio
            v-for="a in amounts"
            :key="a"
            :label="`${a} ₽`"
            :value="a"
          />
        </v-radio-group>
      </v-col>
      <v-col cols="2" class="text-right">
        <v-btn height="50" class="black--text ml-6" rounded depressed @click="donate(amount, -1, '', 0, 0)">
          {{ $t('home.sadaka.donate') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  data () {
    return {
      amounts: [1, 5, 10, 50, 100, 200, 300],
      amount: null,
      url: '',
      errors: '',
      ok: '',
      transaction: Object,
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
          amount: amount,
          campaignId: campaignId,
          description: description,
          subscriptionDays: subscriptionDays,
          transactionType: transactionType,
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

<style lang="scss" scoped>
.donation-container {
  background-color: #00ac00;
  max-width: 100%;
  padding: 30px 6% 30px;
  color: #fff;

  h1 {
    font: bold 36px;
    line-height: 43px;
  }

  p {
    width: 85%;
  }

  .amounts {
    border: 1px solid #fff;
    border-radius: 25px;
    padding: 10px;
    margin-top: 0;
  }

  .amount {
    border: thin solid;
  }
}
</style>
