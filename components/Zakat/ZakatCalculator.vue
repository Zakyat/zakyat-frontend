<template>
  <v-card flat class="pb-1">
    <v-card-title class="font-weight-black">
      {{ $t('zakat.calculator.title') }}
    </v-card-title>
    <v-card-subtitle class="font-weight-bold zakat-description" style="font-weight: bold !important; color: #434343 !important; width: 250px;">
      Рассчитайте закят из вашего состояния
    </v-card-subtitle>
    <v-card-text>
      <v-text-field
        v-model.number="input"
        :label="$t('zakat.calculator.input_label')"
        rounded
        type="number"
        min="0"
        outlined
      />
    </v-card-text>
    <v-list-item class="mt-n8">
      <v-list-item-content>
        <v-list-item-title class="font-weight-medium">
          {{ $t('zakat.calculator.nisab_for') }} {{ siteSettings.nisabDate }}
        </v-list-item-title>
        <v-list-item-subtitle class="green--text">
          {{ $t('zakat.calculator.acording_to') }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-title class="font-weight-medium">
          {{ siteSettings.nisabPrice | rubles }}
        </v-list-item-title>
      </v-list-item-action>
    </v-list-item>
    <v-list-item>
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
          {{ input > siteSettings.nisabPrice ? 0.025 * input : 0 | rubles }}
        </v-list-item-title>
      </v-list-item-action>
    </v-list-item>
    <v-card-actions class="ma-2">
      <v-btn
        rounded
        :disabled="input < siteSettings.nisabPrice"
        block
        color="primary"
        large
        :to="`/charity?id=-1&type=1&amount=${0.025 * input}`"
      >
        {{ $t('zakat.calculator.donate') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from "graphql-tag";

export default Vue.extend({
  data () {
    return {
      goldPrice: 3848.83,
      nisab: 310000,
      input: null,
      updateDate: new Date(2021, 3, 7),
      siteSettings: '',
    };
  },
  apollo: {
    siteSettings: gql`query{
      siteSettings {
        nisabPrice
        nisabDate
      }
    }`,
  },
});
</script>

<style>
.zakat-description {
  font-size: 13px !important;
}
</style>
