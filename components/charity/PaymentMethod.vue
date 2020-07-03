<template>
  <v-row
    class="mt-12"
  >
    <v-col cols="12">
      <h3>{{ $t('charity.paymentMethod.title') }}</h3>
    </v-col>
    <v-col cols="12" class="mt-3">
      <v-tabs
        v-model="tab"
        hide-slider
        grow
        centered
        center-active
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
    </v-col>
    <v-col cols="12">
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in paymentTabs"
          :key="item"
        >
          <v-card
            v-if="item.payment === 'Банковская карта'"
            flat
          >
            <v-card-text>{{ $t('charity.paymentMethod.bankDonationText') }}</v-card-text>
            <DonationAmountSelection />
            <Contacts />
          </v-card>
          <v-card
            v-else
            flat
          >
            <v-card-text>
              {{ $t('charity.paymentMethod.defaultText') }}
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import DonationAmountSelection from '~/components/charity/DonationAmountSelection.vue';
import Contacts from '~/components/charity/Contacts.vue';

export default Vue.extend({
  name: 'PaymentSelection',
  components: {
    DonationAmountSelection,
    Contacts,
  },
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
          payment: 'Paypal',
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
  width: 300px;
  border-radius: 30px !important;
}

.payment-tab-primary {
  background-color: #00ac00;
  color: white;
}
</style>
