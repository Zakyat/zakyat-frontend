<template>
  <v-card
    class="ma-4"
    color="#FFFFFF"
    outlined
    style="border-radius: 10px"
  >
    <v-list class="ma-4">
      <v-list-item-content>
        <v-list-item-title class="headline font-weight-black">
          {{ $t('zakat.calculator.title') }}
        </v-list-item-title>
        <v-list-item-subtitle class="font-weight-medium">
          {{ $t('zakat.calculator.subtitle') }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-content>
        <v-text-field
          v-model="inputSum"
          :label="$t('zakat.calculator.input_label')"
          filled
          rounded
          type="Number"
          dense
          outlined
          @input="flag=inputSum>=nisabSum"
        />
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
              {{ nisabSum }} ₽
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $t('zakat.calculator.gold') }}
            </v-list-item-subtitle>
          </v-list-item-action>
        </v-list-item>
        <div v-if="flag">
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
              <v-list-item-title>
                {{ 0.025*inputSum }} ₽
              </v-list-item-title>
            </v-list-item-action>
          </v-list-item>
          <v-btn rounded block color="primary" large>
            {{ $t('zakat.calculator.donate') }}
          </v-btn>
        </div>
        <div v-else>
          <v-list-item>
            <v-list-item-title class="font-weight-black">
              {{ $t('zakat.calculator.not_taxable_amount') }}
            </v-list-item-title>
          </v-list-item>
          <v-btn rounded disabled block color="primary" large>
            {{ $t('zakat.calculator.donate') }}
          </v-btn>
        </div>
      </v-list-item-content>
    </v-list>
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
