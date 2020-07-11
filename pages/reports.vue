<template>
  <v-container class="my-6">
    <!-- Report management panel -->
    <v-row justify="space-between">
      <v-col cols="4">
        <v-select
          v-model="selectedSection"
          :items="sections"
          rounded
          outlined
        />
      </v-col>
      <v-spacer />
      <v-col cols="3">
        <v-select
          v-model="selectedMonth"
          :items="months"
          rounded
          outlined
        >
          <template v-slot:item="{ item }">
            {{ new Date(0, item).toLocaleDateString($i18n.locale, { month: 'long' }) }}
          </template>
          <template v-slot:selection="{ item }">
            {{ new Date(0, item).toLocaleDateString($i18n.locale, { month: 'long' }) }}
          </template>
        </v-select>
      </v-col>
      <v-col cols="2">
        <v-select
          v-model="selectedYear"
          :items="years"
          rounded
          outlined
        />
      </v-col>
    </v-row>

    <v-row v-if="selectedSection === 'expenditure'" justify="space-between">
      <v-btn-toggle
        v-model="selectedSubSectionIndex"
        rounded
        dense
        mandatory
        :borderless="false"
        style="width: 100%;"
      >
        <v-col cols="6">
          <v-btn
            rounded
            block
            depressed
            :dark="selectedSubSection === 'donations'"
            :text="selectedSubSection !== 'donations'"
            :color="selectedSubSection === 'donations' ? 'primary' : ''"
          >
            {{ $t('reports.donations.title') }}
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn
            rounded
            block
            depressed
            :dark="selectedSubSection === 'other'"
            :text="selectedSubSection !== 'other'"
            :color="selectedSubSection === 'other' ? 'primary' : ''"
          >
            {{ $t('reports.other_expenses.title') }}
          </v-btn>
        </v-col>
      </v-btn-toggle>
    </v-row>

    <!-- Table subsection panel and total -->
    <v-row justify="space-between">
      <v-col>
        <h2 v-if="selectedSection === 'income'" class="headline font-weight-bold">
          {{ $t('reports.income.description') }}
        </h2>
        <h2 v-else class="headline font-weight-bold">
          {{ $t('reports.provided_assistance.description') }}
        </h2>
      </v-col>
      <v-col align="right">
        <p class="headline font-weight-bold">
          {{ total | rubles }}
        </p>
      </v-col>
    </v-row>

    <v-data-table :items="items" :headers="headers">
      <template v-slot:item.date="{ value }">
        {{ value.toLocaleDateString($i18n.locale) }}
      </template>
      <template v-if="selectedSection === 'income'" v-slot:item.amount="{ value }">
        {{ value | rubles }}
      </template>
      <template v-else v-slot:item.amounts="{ value }">
        {{ value.collected | rubles }} / {{ value.needed | rubles }}
      </template>
    </v-data-table>

    <!-- Table column names -->
    <!-- <v-layout
      class="mt-5 pr-3"
      row
    >
      <v-flex lg2 class="pl-3 text--secondary">
        {{ feeColumnNames[0] }}
      </v-flex>
      <v-flex lg3 class="pl-2 text--secondary">
        {{ feeColumnNames[1] }}
      </v-flex>
      <v-flex lg3 class="pl-2 text--secondary">
        {{ feeColumnNames[2] }}
      </v-flex>
      <v-flex lg3 class="pl-1 text--secondary">
        {{ feeColumnNames[3] }}
      </v-flex>
      <v-flex lg1 class="text--secondary text-right">
        {{ feeColumnNames[4] }}
      </v-flex>
    </v-layout>
    <v-layout v-show="!haveDataFounded" column align-center class="search-error__container mt-5 pt-3">
      <img
        src="@/assets/images/errors/search-error.svg"
        style="height: 350px; width: 350px;"
        class="search-error__image"
      >
      <h2 class="mt-5 text-center">
        {{ $t('reports.errorText.description') }}
        <br>
        {{ $t('reports.errorText.suggestion') }}
      </h2>
    </v-layout> -->

    <!-- Table data -->
    <!-- <v-data-iterator
      class="reports__table--padding"
      :items="feeSectionItems"
      loading-text=""
      no-data-text=""
      no-results-text=""
      hide-default-footer
    >
      <v-card
        v-for="item of feeSectionItems"
        :key="'feesTitle-' + Math.floor((Math.random() * 10000)).toString()"
        elevation="0"
      >
        <v-layout row class="mt-4 pr-3 pl-3">
          <v-flex lg2 class="mt-4 mb-4 pl-5">
            {{ item.helpDate.day }}.{{ item.helpDate.month | normalizeNumber }}.{{ item.helpDate.year }}
          </v-flex>
          <v-flex lg3 class="mt-4 mb-4 font-weight-bold">
            {{ item.helper }}
          </v-flex>
          <v-flex lg3 class="mt-4 mb-4">
            {{ item.helpObject }}
          </v-flex>
          <v-flex lg3 class="mt-4 mb-4">
            {{ item.helpType }}
          </v-flex>
          <v-flex lg1 class="mt-4 mb-4 pr-5 text-right font-weight-bold">
            {{ rubles(item.helpSize) }}
          </v-flex>
        </v-layout>
      </v-card>
    </v-data-iterator> -->
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

// Temporary interfaces until real data comes from backend
interface IncomeItem {
  date: Date;
  benefactor: string;
  target: string;
  donationType: string;
  amount: number;
}
interface DonationItem {
  applicationNumber: number;
  date: Date;
  beneficiary: string;
  description: string;
  amounts: {
    collected: number;
    needed: number;
  };
}
type ExpenseItem = Omit<DonationItem, 'beneficiary'> & { target: string };

export default Vue.extend({
  name: 'Reports',
  data () {
    return {
      incomeHeaders: [
        { text: this.$t('reports.income.headers.date'), value: 'date' },
        { text: this.$t('reports.income.headers.benfactor_name'), value: 'benefactor' },
        { text: this.$t('reports.income.headers.donation_target'), value: 'target' },
        { text: this.$t('reports.income.headers.donation_type'), value: 'donationType' },
        { text: this.$t('reports.income.headers.amount'), value: 'amount', align: 'end' },
      ],
      donationHeaders: [
        { text: this.$t('reports.donations.headers.application_number'), value: 'applicationNumber' },
        { text: this.$t('reports.donations.headers.application_date'), value: 'date' },
        { text: this.$t('reports.donations.headers.beneficiary_name'), value: 'beneficiary' },
        { text: this.$t('reports.donations.headers.situation_description'), value: 'description' },
        { text: this.$t('reports.donations.headers.amounts'), value: 'amounts', align: 'end' },
      ],
      otherExpensesHeaders: [
        { text: this.$t('reports.other_expenses.headers.application_number'), value: 'applicationNumber' },
        { text: this.$t('reports.other_expenses.headers.application_date'), value: 'date' },
        { text: this.$t('reports.other_expenses.headers.goal_title'), value: 'target' },
        { text: this.$t('reports.other_expenses.headers.situation_description'), value: 'description' },
        { text: this.$t('reports.other_expenses.headers.amounts'), value: 'amounts', align: 'end' },
      ],
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
      ] as IncomeItem[],
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
      ] as DonationItem[],
      otherExpensesData: [
        {
          applicationNumber: 1587,
          date: new Date(),
          target: 'Фитр-садака',
          description: 'Все собранные деньги будут потращены на покупку еды для бедняков.',
          amounts: {
            collected: 20000,
            needed: 'Нет ограничения',
          },
        },
        {
          applicationNumber: 1417,
          date: new Date(),
          target: 'Покупка книг для школы',
          description: 'Закупаем книги для Школы №XXX.',
          amounts: {
            collected: 46000,
            needed: 46000,
          },
        },
      ] as ExpenseItem[],
      months: [...new Array(12)].map((_, i) => i),
      selectedMonth: new Date().getMonth(),
      selectedYear: new Date().getFullYear(),
      selectedSection: 'income',
      selectedSubSectionIndex: 0,
      sections: [
        { text: this.$t('reports.income.title'), value: 'income' },
        { text: this.$t('reports.provided_assistance.title'), value: 'expenditure' },
      ],
    };
  },
  computed: {
    years () {
      const years = this.incomeData.map(item => item.date.getFullYear());
      const minYear = Math.min(...years);
      if (isNaN(minYear)) {
        return [new Date().getFullYear()];
      }
      const maxYear = Math.max(...years);
      return [...new Array(maxYear - minYear + 1)].map((_, i) => i + minYear);
    },
    items (): (IncomeItem | DonationItem | ExpenseItem)[] {
      let data: (IncomeItem | DonationItem | ExpenseItem)[] = [];
      if (this.selectedSection === 'income') {
        data = this.incomeData;
      } else if (this.selectedSubSection === 'donations') {
        data = this.donationData;
      } else if (this.selectedSubSection === 'other') {
        data = this.otherExpensesData;
      }
      return data.filter(item =>
        item.date.getMonth() === this.selectedMonth && item.date.getFullYear() === this.selectedYear);
    },
    headers (): any[] {
      if (this.selectedSection === 'income') {
        return this.incomeHeaders;
      }
      if (this.selectedSubSection === 'donations') {
        return this.donationHeaders;
      }
      if (this.selectedSubSection === 'other') {
        return this.otherExpensesHeaders;
      }
      return [];
    },
    total (): number {
      if (this.selectedSection === 'income') {
        return (this.items as IncomeItem[]).reduce((acc, item) => acc + item.amount, 0);
      }
      if (this.selectedSubSection === 'donations') {
        return (this.items as DonationItem[]).reduce((acc, item) => acc + item.amounts.collected, 0);
      }
      if (this.selectedSubSection === 'other') {
        return (this.items as ExpenseItem[]).reduce((acc, item) => acc + item.amounts.collected, 0);
      }
      return 0;
    },
    selectedSubSection () {
      switch (this.selectedSubSectionIndex) {
        case 0: return 'donations';
        case 1: return 'other';
        default: return '';
      }
    },
  },
});
</script>
