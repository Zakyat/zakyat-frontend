<template>
  <div class="reports grey lighten-5">
    <v-container>
      <!-- Report management panel -->
      <v-layout justify-space-between>
        <div class="section__title--container">
          <v-layout>
            <nuxt-link
              to="/for-destitute"
              class="section__title--link"
            >
              <h2 class="section__title--content pt-0 mr-3">
                <span>
                  {{ feesTitle }}
                </span>
              </h2>
            </nuxt-link>
            <v-icon>
              mdi-chevron-down
            </v-icon>
          </v-layout>
        </div>
        <v-layout justify-end>
          <div class="reports__container--date-manager">
            <v-select
              v-model="userIntervals.month"
              :items="months"
              rounded
              outlined
              @change="handleSelectedInterval"
            />
          </div>
          <div class="reports__container--date-manager ml-5">
            <v-select
              v-model="userIntervals.year"
              :items="years"
              rounded
              outlined
              @change="handleSelectedInterval"
            />
          </div>
        </v-layout>
      </v-layout>

      <!-- Table subsection panel and total -->
      <v-layout class="section__description" justify-space-between>
        <h3>
          {{ feesDescription }}
        </h3>
        <h3 class="section__total">
          {{ calculateTotal() }}
        </h3>
      </v-layout>

      <!-- Table column names -->
      <v-layout
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
      </v-layout>

      <!-- Table data -->
      <v-data-iterator
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
      </v-data-iterator>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { rubles } from '@/plugins/currency';

export default Vue.extend({
  name: 'FeesSection',
  filters: {
    normalizeNumber (month: number) {
      return month.toString().padStart(2, '0');
    },
  },
  data () {
    return {
      // Global data for both sections
      months: this.$t('reports.interval.months'),
      years: this.$t('reports.interval.years'),

      // Data for Fees section
      feesTitle: this.$t('reports.section[0].title'),
      feesDescription: this.$t('reports.section[0].description'),
      feeColumnNames: this.$t('reports.section[0].table.title'),
      feeSectionItems: this.$t('reports.section[0].table.data'),

      // User's selections
      userIntervals: {
        month: this.$t('reports.interval.months[0]'),
        year: this.$t('reports.interval.years[0]'),
      },

      // Handling search errors
      haveDataFounded: true,
    };
  },
  methods: {
    rubles,

    calculateTotal () {
      let total: number = 0;

      for (let item of this.feeSectionItems) {
        total += parseInt(item.helpSize, 10);
      }

      return this.rubles(total);
    },

    handleSelectedInterval () {
      // Initializing variables
      const userMonth: number = this.months.indexOf(this.userIntervals.month);
      const userYear: number = parseInt(`${this.userIntervals.year}`, 10);

      const onlyAllMonths: boolean = userMonth === 0;
      const onlyAllYears: boolean = this.userIntervals.year.indexOf(this.$t('reports.interval.years[0]')) === 0;
      const allMonthsAndYears: boolean = onlyAllMonths && onlyAllYears;

      // Recovering table data by default
      this.feeSectionItems = this.$t('reports.section[0].table.data');

      // Handling user's selects
      this.feeSectionItems = this.feeSectionItems.filter((item: object) => {
        if (allMonthsAndYears) {
          return this.feeSectionItems;
        } else if (onlyAllMonths) {
          return item.helpDate.year === userYear;
        } else if (onlyAllYears) {
          return item.helpDate.month === userMonth;
        } else {
          return (item.helpDate.month === userMonth) && (item.helpDate.year === userYear);
        }
      });

      // Handling the error of non-existing data
      (this.feeSectionItems.length === 0) ? this.haveDataFounded = false : this.haveDataFounded = true;
    },
  },
});
</script>

<style lang="scss" scoped>
  .reports {
    min-height: calc(100vh - 400px);
    padding-top: 50px;
  }

  .reports__container--date-manager {
    width: 185px;
  }

  .reports__table--padding {
    padding-bottom: 95px;
  }

  .section__title--container {
    width: 400px;
  }

  .section__title--link {
    text-decoration: none;
  }

  .section__title--content {
    font-size: 36px;
    color: black;
  }

  .section__title--content:hover {
    cursor: pointer;
  }

  .section__description,
  .section__total {
    font-size: 24px;
  }

  .search-error__container {
    display: flex;
    justify-content: center;
    min-width: 100%;
  }
</style>
