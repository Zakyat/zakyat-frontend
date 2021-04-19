<template>
  <v-layout white class="payment-layout">
    <v-container>
      <div class="payment-success">
        <v-img width="250px" :src="require('@/assets/images/payment/payment-error.png')" alt="" />
        <div class="text-center mt-10">
          <h1>Ошибка при попытке оплаты</h1>
          <p class="mt-5" v-for="(error, i) in errors" :key="i">
            {{ error }}
          </p>
        </div>
      </div>
    </v-container>
  </v-layout>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'PaymentFail',
  data () {
    return {
      transaction: '',
      errors: '',
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
          this.errors = result.data.checkPaymentStatus.errors;
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
</style>
