<template>
  <v-row
    class="mt-5"
  >
    <v-col cols="12">
      <h3>{{ $t('charity.paymentMethod.title') }}</h3>
    </v-col>
    <v-col cols="12" class="mt-n2">
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
          v-for="method in paymentMethods"
          :key="method"
          class="payment-tab"
          active-class="payment-tab-primary"
        >
          {{ method }}
        </v-tab>
      </v-tabs>
    </v-col>
    <v-col cols="12">
      <v-tabs-items v-model="tab" class="mt-n4">
        <v-tab-item>
          <v-card
            flat
          >
            <v-card-text
              class="pa-0 ma-0"
              style="color: black;"
            >
              {{ $t('charity.paymentMethod.bankDonationText') }}
            </v-card-text>
            <DonationAmountSelection />
            <Contacts />
          </v-card>
        </v-tab-item>
        <v-tab-item
          v-for="i in paymentMethods.length"
          :key="i"
        >
          <v-card
            flat
          >
            <v-card-text
              class="pa-0 ma-0"
              style="color: black;"
            >
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
import DonationAmountSelection from '@/components/charity/DonationAmountSelection.vue';
import Contacts from '@/components/charity/Contacts.vue';

export default Vue.extend({
  name: 'PaymentMethod',
  components: {
    DonationAmountSelection,
    Contacts,
  },
  data () {
    return {
      tab: null,
      paymentMethods: [
        this.$t('charity.paymentMethod.methods.bank_card'),
        this.$t('charity.paymentMethod.methods.SMS'),
        this.$t('charity.paymentMethod.methods.mobile_phone'),
        this.$t('charity.paymentMethod.methods.yandex_money'),
        this.$t('charity.paymentMethod.methods.paypal'),
      ],
    };
  },
});
</script>

<style scoped>
.payment-tabs {
  border: 1px solid black;
  border-radius: 30px;
}

.payment-tab {
  width: 300px;
  border-radius: 30px;
  text-transform: inherit;
  font-size: 15px;
}

.payment-tab-primary {
  background-color: #00ac00;
  color: white;
}
</style>
