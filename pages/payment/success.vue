<template>
  <v-layout white class="payment-layout">
    <v-container>
      <div class="payment-success">
        <v-img width="250px" :src="require('@/assets/images/payment/payment-success.png')" alt="" />
        <div class="text-center">
          <h1>Успешная оплата</h1>
          <p class="my-0">
            Спасибо! Ваше пожертвование <b v-if="transaction">{{transaction.amount | rubles}}</b> успешно поступило на&nbsp;счет <b v-if="transaction.campaign">сбора &#8470;&nbsp;{{transaction.campaign.id}}.</b></p>
          <p class="my-0" v-if="this.$apolloHelpers.getToken()">
            Смотрите историю совершенных пожертвований в&nbsp;разделе
            <nuxt-link
              to="/"
              class="green-text"
            >
              &laquo;Мои пожертвования&raquo;.
            </nuxt-link>
          </p>
        </div>
      </div>
    </v-container>
  </v-layout>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'PaymentSuccess',
  data () {
    return {
      transaction: '',
    };
  },
  created () {
    this.checkPaymentStatus();
  },
  methods: {
    checkPaymentStatus () {
      this.$apollo.mutate({
        mutation: gql`
          mutation checkPaymentStatus ($bankId: ID!) {
            checkPaymentStatus (bankId: $bankId) {
              ok
              transaction {
                id
                amount
                paymentId
                status
                campaign {
                  title
                }
              }
              errors
            }
          }
        `,
        variables: {
          bankId: this.$route.query.orderId,
        },
        update: (cache, result) => {
          this.transaction = result.data.checkPaymentStatus.transaction;
        },
      });
    },
  },
};
</script>

<style scoped>
.payment-layout {
  height: 600px;
  display: flex;
  align-items: center;
}

.payment-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.green-text {
  color: #00ac00;
}
</style>
