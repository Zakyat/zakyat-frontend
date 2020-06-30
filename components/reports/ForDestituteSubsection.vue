<template>
  <div class="reports grey lighten-5">
    <v-container>
      <!-- Report management panel -->
      <v-layout justify-space-between>
        <div class="section__title--container">
          <v-layout>
            <nuxt-link
              to="/reports"
              class="section__title--link"
            >
              <h2 class="section__title--content pt-0 mr-3">
                <span>
                  {{ realisedSupportTitle }}
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
      <v-layout
        justify-center
        class="mb-5 pb-3"
      >
        <v-btn-toggle
          rounded
          dense
        >
          <v-btn
            class="reports__subsection--button"
            color="green lighten-3"
          >
            {{ forDestituteTitle }}
          </v-btn>
          <v-btn
            class="reports__subsection--button"
            to="/other-costs"
            nuxt
          >
            {{ otherCostsTitle }}
          </v-btn>
        </v-btn-toggle>
      </v-layout>
      <v-layout justify-space-between>
        <div class="section__description">
          <h3>
            {{ realisedSupportDescription }}
          </h3>
        </div>
        <div>
          <h3 class="section__total">
            {{ calculateTotal() }}
          </h3>
        </div>
      </v-layout>

      <!-- Table column names -->
      <v-layout
        class="mt-5 pr-3"
        row
      >
        <v-flex lg2 class="pl-3 text--secondary">
          {{ forDestituteColumnNames[0] }}
        </v-flex>
        <v-flex lg2 class="pl-2 text--secondary">
          {{ forDestituteColumnNames[1] }}
        </v-flex>
        <v-flex lg2 class="pl-2 text--secondary">
          {{ forDestituteColumnNames[2] }}
        </v-flex>
        <v-flex lg4 class="pl-1 text--secondary">
          {{ forDestituteColumnNames[3] }}
        </v-flex>
        <v-flex lg2 class="text--secondary text-right">
          {{ forDestituteColumnNames[4] }}
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
      <div class="reports__table--padding">
        <v-card
          v-for="item of forDestituteItems"
          :key="'feesTitle-' + Math.floor((Math.random() * 10000)).toString()"
          elevation="0"
        >
          <v-layout row class="mt-4 pr-3 pl-3">
            <v-flex lg2 class="mt-4 mb-4 pl-5">
              {{ item.documentNumber }}
            </v-flex>
            <v-flex lg2 class="mt-4 mb-4">
              {{ item.documentDate.day }}.{{ item.documentDate.month | normalizeNumber }}.{{ item.documentDate.year }}
            </v-flex>
            <v-flex lg2 class="mt-4 mb-4 font-weight-bold">
              {{ item.helpObject }}
            </v-flex>
            <v-flex lg4 class="mt-4 mb-4">
              {{ item.situationDescription }}
            </v-flex>
            <v-flex lg2 class="mt-4 mb-4 pr-5 text-right">
              <span class="font-weight-bold">{{ rubles(item.summary.done) }}</span>/{{ rubles(item.summary.needed) }}
            </v-flex>
          </v-layout>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { rubles } from '@/plugins/currency';

export default Vue.extend({
  name: 'ForDestituteSubsection',
  filters: {
    normalizeNumber (month: number) {
      if (0 < month && month < 10) {
        return '0' + month.toString();
      }
    },
  },
  data () {
    return {
      // Global data for both sections
      months: this.$t('reports.interval.months'),
      years: this.$t('reports.interval.years'),

      // Data for Realised Support section
      realisedSupportTitle: this.$t('reports.section[1].title'),
      realisedSupportDescription: this.$t('reports.section[1].description'),

      // For Destitute subsection's data
      forDestituteTitle: this.$t('reports.section[1].subsection[0].title'),
      forDestituteColumnNames: this.$t('reports.section[1].subsection[0].table.title'),
      forDestituteItems: this.$t('reports.section[1].subsection[0].table.data'),

      // Other Costs subsection's data
      otherCostsTitle: this.$t('reports.section[1].subsection[1].title'),

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

      for (let item of this.forDestituteItems) {
        total += parseInt(item.summary.done, 10);
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
      this.forDestituteItems = this.$t('reports.section[1].subsection[0].table.data');

      // Handling user's selects
      this.forDestituteItems = this.forDestituteItems.filter((item: object) => {
        if (allMonthsAndYears) {
          return this.forDestituteItems;
        } else if (onlyAllMonths) {
          return item.documentDate.year === userYear;
        } else if (onlyAllYears) {
          return item.documentDate.month === userMonth;
        } else {
          return (item.documentDate.month === userMonth) && (item.documentDate.year === userYear);
        }
      });

      // Handling the error of non-existing data
      (this.forDestituteItems.length === 0) ? this.haveDataFounded = false : this.haveDataFounded = true;
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
    padding-bottom: 105px;
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

  .reports__subsection--button {
    text-transform: none;
    width: 40vw;
  }

  .search-error__container {
    display: flex;
    justify-content: center;
    min-width: 100%;
  }
</style>
