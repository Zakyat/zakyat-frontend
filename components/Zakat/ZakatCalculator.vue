<template>
  <v-card flat class="pb-1">
    <v-card-title class="font-weight-black">
      {{ $t('zakat.calculator.title') }}
    </v-card-title>
    <v-card-subtitle class="font-weight-bold">
      {{ $t('zakat.calculator.subtitle') }}
    </v-card-subtitle>
    <v-card-text class="mt-3">
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
          {{ $t('zakat.calculator.nisab_for') }} {{ updateDate.toLocaleDateString($i18n.locale) }}
        </v-list-item-title>
        <v-list-item-subtitle class="green--text">
          {{ $t('zakat.calculator.acording_to') }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-title class="font-weight-medium">
          {{ nisab | rubles }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ $t('zakat.calculator.gold') }}
        </v-list-item-subtitle>
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
          {{ input > nisab ? 0.025 * input : 0 | rubles }}
        </v-list-item-title>
      </v-list-item-action>
    </v-list-item>
    <v-card-actions class="ma-2">
      <v-btn rounded :disabled="input < nisab" block color="primary" large>
        {{ $t('zakat.calculator.donate') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      goldPrice: 3848.83,
      nisab: 326380.784,
      input: null,
      updateDate: new Date(2020, 6, 12),
    };
  },
});
</script>
