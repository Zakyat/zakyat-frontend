<template>
  <v-content>
    <v-row>
      <span class="subtitle">{{ $t('reports.expenses.subtitle') }}</span>
      <v-spacer />
      <span class="subtitle">{{ 1900500 | rubles }}</span>
    </v-row>
    <v-row style="padding: 30px 0px 10px">
      <v-flex lg2 class="text--secondary">
        {{ $t('reports.expenses.application_number') }}
      </v-flex>
      <v-flex lg2 class="text--secondary">
        {{ $t('reports.expenses.application_date') }}
      </v-flex>
      <v-flex lg3 class="text--secondary">
        {{ $t('reports.expenses.beneficiary_name') }}
      </v-flex>
      <v-flex lg3 class="text--secondary">
        {{ $t('reports.expenses.situation_description') }}
      </v-flex>
      <v-flex lg2 class="text--secondary text-right">
        {{ $t('reports.expenses.amounts') }}
      </v-flex>
    </v-row>
    <v-row
      v-for="(donatation, i) in donationData.slice(0,10)"
      :key="i"
      align="center"
      class="mt-4"
      style="background: white; border-radius: 10px; min-height: 60px; padding: 20px;"
    >
      <v-flex lg2 class="text">
        {{ donatation.applicationNumber }}
      </v-flex>
      <v-flex lg2 class="text">
        {{ donatation.date.toLocaleDateString($i18n.locale) }}
      </v-flex>
      <v-flex lg3 class="text" style="font-weight: bold">
        {{ donatation.beneficiary }}
      </v-flex>
      <v-flex lg3 class="text">
        {{ donatation.description }}
      </v-flex>
      <v-flex lg2 class="text-right text">
        <span style="font-weight: bold">{{ donatation.amounts.collected | rubles }}</span>/{{ donatation.amounts.needed | rubles }}
      </v-flex>
    </v-row>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    page: {
      type: Number,
      default: 1,
      required: false,
    },
    month: {
      type: Number,
      default: 0,
      required: false,
    },
    year: {
      type: Number,
      default: 2020,
      required: false,
    },
  },
  data () {
    return {
      donationData: [
        {
          applicationNumber: 1587,
          date: new Date(),
          beneficiary: 'Раджабов Ильес Исламович',
          description: 'Сыну требуется дорогостоящяя операция. Недостающая сумма 20000 рублей.',
          amounts: {
            collected: 20000,
            needed: 25000,
          },
        },
        {
          applicationNumber: 1417,
          date: new Date(),
          beneficiary: 'Сабирзянова Римма Минзагитовна',
          description: 'Сын с диагнозом ДЦП. Требуется беговая дорожка.',
          amounts: {
            collected: 220000,
            needed: 250000,
          },
        },
        {
          applicationNumber: 1587,
          date: new Date(),
          beneficiary: 'Раджабов Ильес Исламович',
          description: 'Сыну требуется дорогостоящяя операция. Недостающая сумма 20000 рублей.',
          amounts: {
            collected: 20000,
            needed: 25000,
          },
        },
        {
          applicationNumber: 1417,
          date: new Date(),
          beneficiary: 'Сабирзянова Римма Минзагитовна',
          description: 'Сын с диагнозом ДЦП. Требуется беговая дорожка.',
          amounts: {
            collected: 220000,
            needed: 250000,
          },
        },
        {
          applicationNumber: 1587,
          date: new Date(),
          beneficiary: 'Раджабов Ильес Исламович',
          description: 'Сыну требуется дорогостоящяя операция. Недостающая сумма 20000 рублей.',
          amounts: {
            collected: 20000,
            needed: 25000,
          },
        },
        {
          applicationNumber: 1417,
          date: new Date(),
          beneficiary: 'Сабирзянова Римма Минзагитовна',
          description: 'Сын с диагнозом ДЦП. Требуется беговая дорожка.',
          amounts: {
            collected: 220000,
            needed: 250000,
          },
        },
      ],
    };
  },
});
</script>

<style scoped>
.text {
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
}

.subtitle{
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
}
</style>
