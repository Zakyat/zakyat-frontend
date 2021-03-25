<template>
  <v-layout white class="payment-layout">
    <v-container>
      <div class="payment-success">
        <v-img width="325px" :src="require('@/assets/images/payment/payment-error.png')" alt="" />
        <div class="text-center">
          <h1>Ошибка</h1>
          <p>
            Произошла ошибка при оплате
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
