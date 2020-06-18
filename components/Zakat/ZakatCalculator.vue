<template>
  <v-card
    class="calculator-container"
    elevation="0"
  >
    <v-card-title class="font-weight-black">
      {{ $t('zakat.calculator.title') }}
    </v-card-title>
    <v-card-subtitle class="font-weight-bold">
      {{ $t('zakat.calculator.subtitle') }}
    </v-card-subtitle>
    <v-card-text class="mt-3">
      <v-text-field
        v-model.number="inputSum"
        :label="$t('zakat.calculator.input_label')"
        rounded
        outlined
        @input="flag=inputSum>=nisabSum"
      />
    </v-card-text>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="font-weight-medium">
          {{ $t('zakat.calculator.nisab_for') }} {{ updatedate }}
        </v-list-item-title>
        <v-list-item-subtitle class="green--text">
          {{ $t('zakat.calculator.acording_to') }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-title class="font-weight-medium">
          {{ nisabSum | rubles }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ $t('zakat.calculator.gold') }}
        </v-list-item-subtitle>
      </v-list-item-action>
    </v-list-item>
    <v-list-item v-if="flag">
      <v-list-item-content>
        <v-list-item-title class="font-weight-black">
          {{ $t('zakat.calculator.your_zakat') }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ $t('zakat.calculator.taxable_amount') }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          {{ $t('zakat.calculator.taxable_amount2') }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-title class="font-weight-black">
          {{ 0.025*inputSum | rubles }}
        </v-list-item-title>
      </v-list-item-action>
    </v-list-item>
    <v-list-item v-else>
      <v-list-item-title class="font-weight-black">
        {{ $t('zakat.calculator.not_taxable_amount') }}
      </v-list-item-title>
    </v-list-item>
    <v-card-text v-if="flag">
      <v-btn rounded block color="primary" large>
        {{ $t('zakat.calculator.donate') }}
      </v-btn>
    </v-card-text>
    <v-card-text v-else>
      <v-btn rounded disabled block color="primary" large>
        {{ $t('zakat.calculator.donate') }}
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return { goldPrice: 3848.83, nisabSum: 326380.784, inputSum: null, updatedate: '12.06.20', flag: true };
  },
});
</script>

<style lang="scss" scoped>
.calculator-container {
  border-radius: 10px !important;
  }
</style>
