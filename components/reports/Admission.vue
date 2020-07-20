<template>
  <v-content style="padding: 0 10px 10px">
    <v-row>
      <h3>{{ $t('reports.admission.subtitle') }}</h3>
      <v-spacer />
      <h3>{{ 15000 | rubles }}</h3>
    </v-row>
    <v-row style="padding: 30px 10px 10px">
      <v-flex lg2 class="text--secondary">
        {{ $t('reports.admission.date') }}
      </v-flex>
      <v-flex lg3 class="text--secondary">
        {{ $t('reports.admission.benfactor_name') }}
      </v-flex>
      <v-flex lg3 class="text--secondary">
        {{ $t('reports.admission.donation_target') }}
      </v-flex>
      <v-flex lg3 class="text--secondary">
        {{ $t('reports.admission.donation_type') }}
      </v-flex>
      <v-flex lg1 class="text--secondary text-right">
        {{ $t('reports.admission.amount') }}
      </v-flex>
    </v-row>
    <v-row
      v-for="(income, i) in incomeData"
      :key="i"
      align="center"
      class="mt-4"
      style="background: white; border-radius: 10px; min-height: 60px; padding: 0 20px;"
    >
      <v-flex lg2 class="text">
        {{ income.date.toLocaleDateString($i18n.locale) }}
      </v-flex>
      <v-flex lg3 class="text" style="font-weight: bold">
        {{ income.benefactor }}
      </v-flex>
      <v-flex lg3 class="text">
        {{ income.target }}
      </v-flex>
      <v-flex lg3 class="text">
        {{ income.donationType }}
      </v-flex>
      <v-flex lg1 class="text-right text" style="font-weight: bold">
        {{ income.amount | rubles }}
      </v-flex>
    </v-row>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      incomeData: [
        {
          date: new Date(),
          benefactor: 'Фатхуллина Алия Мударисовна',
          target: 'Бурганова Альфия, сбор 309',
          donationType: 'Разовое пожертвование',
          amount: 20000,
        },
        {
          date: new Date(),
          benefactor: 'Ибрагимов Марат',
          target: 'Садака',
          donationType: 'Ежедневное пожертвование',
          amount: 10,
        },
        {
          date: new Date(),
          benefactor: 'Фатхуллина Алия Мударисовна',
          target: 'Бурганова Альфия, сбор 309',
          donationType: 'Разовое пожертвование',
          amount: 20000,
        },
        {
          date: new Date(),
          benefactor: 'Ибрагимов Марат',
          target: 'Садака',
          donationType: 'Ежедневное пожертвование',
          amount: 10,
        },
        {
          date: new Date(),
          benefactor: 'Фатхуллина Алия Мударисовна',
          target: 'Бурганова Альфия, сбор 309',
          donationType: 'Разовое пожертвование',
          amount: 20000,
        },
        {
          date: new Date(),
          benefactor: 'Ибрагимов Марат',
          target: 'Садака',
          donationType: 'Ежедневное пожертвование',
          amount: 10,
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

</style>
