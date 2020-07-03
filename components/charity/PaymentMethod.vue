<template>
  <v-row
    class="mt-12"
  >
    <h3>Способ оплаты</h3>
    <v-row class="mt-3">
      <v-tabs
        v-model="tab"
        hide-slider
        grow
        centered
        show-arrows
        class="payment-tabs pa-1"
      >
        <v-tab
          v-for="item in paymentTabs"
          :key="item"
          class="payment-tab"
          active-class="payment-tab-primary"
        >
          {{ item.payment }}
        </v-tab>
      </v-tabs>
    </v-row>
    <v-card flat>
      <v-card-text>
        Все деньги с данного сбора перейдут на счет нуждающегося
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DonationAmountSelection',
  data () {
    return {
      tab: null,
      paymentTabs: [
        {
          payment: 'Банковская карта',
        },
        {
          payment: 'SMS',
        },
        {
          payment: 'Мобильный телефон',
        },
        {
          payment: 'Яндекс деньги',
        },
        {
          payment: 'PayPal',
        },
        {
          payment: 'PayPal',
        },
        {
          payment: 'PayPal',
        },
        {
          payment: 'PayPal',
        },
        {
          payment: 'PayPal',
        },
        {
          payment: 'PayPal',
        },
        {
          payment: 'PayPal',
        },
      ],
    };
  },
});
</script>

<style scoped>
.payment-tabs {
  border: 1px solid grey;
  border-radius: 30px;
}

.payment-tab
{
  border-radius: 30px !important;
}

.payment-tab-primary {
  background-color: #00ac00;
  color: white;
}
</style>
