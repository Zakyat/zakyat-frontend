<template>
  <v-content style="padding: 0 10px 10px;">
    <v-row style="padding: 0 0 30px;">
      <v-tabs
        v-model="tab"
        hide-slider
        grow
        centered
        center-active
        show-arrows
        class="payment-tabs pa-1"
      >
        <v-tab class="payment-tab" active-class="payment-tab-primary" value="needy">
          {{ $t('reports.expenses.needly') }}
        </v-tab>
        <v-tab class="payment-tab" active-class="payment-tab-primary" value="spending">
          {{ $t('reports.expenses.spending') }}
        </v-tab>
      </v-tabs>
    </v-row>
    <v-tabs-items v-model="tab" style="background-color: initial;">
      <v-tab-item><Needly :page="page" :month="month" :year="year" /></v-tab-item>
      <v-tab-item><Spending :page="page" :month="month" :year="year" /></v-tab-item>
    </v-tabs-items>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';
import Needly from '@/components/reports/Needly.vue';
import Spending from '@/components/reports/Spending.vue';

export default Vue.extend({
  name: 'Expenses',
  components: {
    Needly,
    Spending,
  },
  props: {
    page: {
      type: Number,
      default: 1,
    },
    month: {
      type: Number,
      default: 0,
    },
    year: {
      type: Number,
      default: 2020,
    },
  },
  data () {
    return {
      tab: null,
      components: [
        { text: this.$t('reports.expenses.needly'), component: 'needly' },
        { text: this.$t('reports.expenses.spending'), component: 'spending' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.payment-tab-primary {
  background-color: #00ac00;
  color: white !important;
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
</style>
