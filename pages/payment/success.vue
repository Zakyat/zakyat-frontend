<template>
  <v-layout white class="payment-layout">
    <v-container>
      <div class="payment-success">
        <v-img width="325px" :src="require('@/assets/images/payment/payment-success.png')" alt="" />
        <div class="text-center">
          <h1>Успешная оплата</h1>
          <p>
            Спасибо! Ваше пожертвование <b>{{transaction.amount}}₽</b> успешно поступило на&nbsp;счет <b>сбора &#8470;&nbsp;{{transaction.campaign.id}}.</b> <br> Смотрите историю совершенных пожертвований в&nbsp;разделе
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
  apollo: {
    transaction: {
      query: gql`
        query getTransaction($id:Int!) {
          transaction (id: $id) {
            amount,
            campaign {
              id
            }
          }
        }
      `,
      variables () {
        return { id: 50 };
      },
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
