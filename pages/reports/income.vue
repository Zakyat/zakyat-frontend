<template>
  <v-content style="padding: 0 10px 10px;">
    <v-row>
      <span class="subtitle">{{ $t('reports.income.subtitle') }}</span>
      <v-spacer />
      <span class="subtitle">{{ total | rubles }}</span>
    </v-row>
    <v-row style="padding: 30px 10px 10px;">
      <v-flex lg2 class="text--secondary">
        {{ $t('reports.income.date') }}
      </v-flex>
      <v-flex lg3 class="text--secondary">
        {{ $t('reports.income.benfactor_name') }}
      </v-flex>
      <v-flex lg3 class="text--secondary">
        {{ $t('reports.income.donation_target') }}
      </v-flex>
      <v-flex lg3 class="text--secondary">
        {{ $t('reports.income.donation_type') }}
      </v-flex>
      <v-flex lg1 class="text--secondary text-right">
        {{ $t('reports.income.amount') }}
      </v-flex>
    </v-row>
    <v-row
      v-for="(income, i) in incomeData.slice(0,10)"
      :key="i"
      align="center"
      class="mt-4"
      style="background: white; border-radius: 10px; min-height: 60px; padding: 20px;"
    >
      <v-flex lg2 class="text">
        {{ income.date.toLocaleDateString($i18n.locale) }}
      </v-flex>
      <v-flex lg3 class="text" style="font-weight: bold;">
        {{ income.benefactor }}
      </v-flex>
      <v-flex lg3 class="text">
        {{ income.target }}
      </v-flex>
      <v-flex lg3 class="text">
        {{ income.donationType }}
      </v-flex>
      <v-flex lg1 class="text-right text" style="font-weight: bold;">
        {{ income.amount | rubles }}
      </v-flex>
    </v-row>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Income',
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
  computed: {
    total (): number {
      return this.incomeData.reduce((acc, item) => item.amount + acc, 0);
    },
  },
});
</script>

<style scoped>
.text {
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
}

.subtitle {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
}
</style>
