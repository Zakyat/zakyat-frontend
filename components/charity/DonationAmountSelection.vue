<template>
  <v-container
    class="mt-8"
  >
    <v-row>
      <v-tabs
        v-model="tab"
        hide-slider
        grow
        centered
        center-active
        show-arrows
        class="payment-tabs pa-1"
        :onchange="selectDays()"
      >
        <v-tab
          v-for="{ title } in donationTabs"
          :key="title"
          class="payment-tab"
          active-class="payment-tab-primary"
        >
          {{ title }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" class="mt-3">
        <v-tab-item
          v-for="{title, description} in donationTabs"
          :key="title"
        >
          <v-card flat>
            <v-card-text
              class="pa-0 ma-0"
              style="color: black;"
            >
              {{ description }}
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-row>
    <v-row class="mt-2">
      <v-col
        cols="12"
        md="3"
        class="pl-0"
      >
        <v-text-field
          v-model.number="selectedAmount"
          rounded
          dense
          hide-details
          :placeholder="$t('charity.donationAmountSelection.amountInput')"
          outlined
          type="number"
          min="1"
        />
      </v-col>
      <v-col
        cols="12"
        md="9"
        class="pr-0"
      >
        <v-radio-group
          v-model="selectedAmount"
          row
          dense
          hide-details
          class="my-0 py-0 amounts"
          :onchange="selectAmount()"
        >
          <v-radio
            v-for="a in amounts"
            :key="a"
            :label="a | rubles"
            :value="a"
            class="pa-2 black-label"
          />
        </v-radio-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DonationAmountSelection',
  props: {
    donationTabs: {
      type: Array,
      required: true,
    },
    amounts: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      tab: null,
      selectedAmount: 0,
    };
  },
  methods: {
    selectAmount () {
      this.$emit('select-amount', this.selectedAmount);
    },
    selectDays () {
      this.$emit('select-days', this.tab);
    },
  },
});
</script>

<style scoped>
.amounts {
  border: 1px solid black;
  border-radius: 25px;
}

.black-label /deep/ label {
  color: black;
}

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
  color: white !important;
}
</style>
