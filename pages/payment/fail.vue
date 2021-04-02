<template>
  <v-layout white class="payment-layout">
    <v-container>
      <div class="payment-success">
        <v-img width="250px" :src="require('@/assets/images/payment/payment-error.png')" alt="" />
        <div class="text-center mt-10">
          <h1>Ошибка при попытке оплаты</h1>
          <p class="mt-5">
            Текст ошибки
          </p>
        </div>
      </div>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: 'PaymentFail',
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
