<template>
  <v-container class="reports grey lighten-5">
    <!-- Report management panel -->
    <v-layout justify-space-between>
      <div class="section__title--container">
        <v-layout>
          <h2
            class="section__title--content pt-0"
            @click="isMainFeesSection = !isMainFeesSection"
          >
            <span v-if="isMainFeesSection">
              {{ feesTitle }}
            </span>
            <span v-else>
              {{ realisedSupportTitle }}
            </span>
          </h2>
          <v-icon>
            mdi-chevron-down
          </v-icon>
        </v-layout>
      </div>
      <v-layout justify-end>
        <div class="reports__data-manager">
          <v-select
            v-model="timeInterval.month"
            :items="months"
            :placeholder="months[new Date().getMonth()]"
            dense
            rounded
            outlined
            @change="handleSelectedMonth"
          />
        </div>
        <div class="reports__data-manager ml-5">
          <v-select
            v-model="timeInterval.year"
            :items="years"
            :placeholder="new Date().getFullYear().toString()"
            dense
            rounded
            outlined
            @change="handleSelectedYear"
          />
        </div>
      </v-layout>
    </v-layout>

    <!-- Table subsection panel and total -->
    <v-layout
      v-show="!isMainFeesSection"
      justify-center
      class="mb-5"
    >
      <v-btn-toggle
        color="green darken-1"
        mandatory
        rounded
        dense
      >
        <v-btn
          class="reports__subsection--button"
          @click="handleClickOnForDestitute"
        >
          {{ forDestituteTitle }}
        </v-btn>
        <v-btn
          class="reports__subsection--button"
          @click="handleClickOnOtherCosts"
        >
          {{ otherCostsTitle }}
        </v-btn>
      </v-btn-toggle>
    </v-layout>
    <v-layout justify-space-between>
      <div class="section__description">
        <h3 v-if="isMainFeesSection">
          {{ feesDescription }}
        </h3>
        <h3 v-else>
          {{ realisedSupportDescription }}
        </h3>
      </div>
      <div>
        <h3>
          0
        </h3>
      </div>
    </v-layout>

    <!-- Table column names -->
    <v-layout
      v-show="isMainFeesSection"
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
    <v-layout
      v-show="!isMainFeesSection && isMainForDestituteSubsection"
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
    <v-layout
      v-show="!isMainFeesSection && !isMainForDestituteSubsection && isOtherCostsButtonActive"
      class="mt-5 pr-3"
      row
    >
      <v-flex lg2 class="pl-3 text--secondary">
        {{ otherCostsColumnNames[0] }}
      </v-flex>
      <v-flex lg2 class="pl-2 text--secondary">
        {{ otherCostsColumnNames[1] }}
      </v-flex>
      <v-flex lg2 class="pl-2 text--secondary">
        {{ otherCostsColumnNames[2] }}
      </v-flex>
      <v-flex lg4 class="pl-1 text--secondary">
        {{ otherCostsColumnNames[3] }}
      </v-flex>
      <v-flex lg2 class="text--secondary text-right">
        {{ otherCostsColumnNames[4] }}
      </v-flex>
    </v-layout>

    <!-- Table data -->
    <v-card
      v-for="item of feeSectionItems"
      v-show="isMainFeesSection"
      :key="'feesTitle-' + Math.floor((Math.random() * 10000)).toString()"
      elevation="0"
    >
      <v-layout row class="mt-4 pr-3 pl-3">
        <v-flex lg2 class="mt-4 mb-4 pl-5">
          {{ item.helpDate.day }}.{{ item.helpDate.month | normalizeNumber }}.{{ item.helpDate.year }}
        </v-flex>
        <v-flex lg3 class="mt-4 mb-4">
          {{ item.helper }}
        </v-flex>
        <v-flex lg3 class="mt-4 mb-4">
          {{ item.helpObject }}
        </v-flex>
        <v-flex lg3 class="mt-4 mb-4">
          {{ item.helpType }}
        </v-flex>
        <v-flex lg1 class="mt-4 mb-4 pr-5 text-right">
          {{ rubles(item.helpSize) }}
        </v-flex>
      </v-layout>
    </v-card>
    <v-card
      v-for="item of forDestituteItems"
      v-show="!isMainFeesSection && isMainForDestituteSubsection"
      :key="'realised-support-' + Math.floor((Math.random() * 10000)).toString()"
      elevation="0"
    >
      <v-layout row class="mt-4 pr-3 pl-3">
        <v-flex lg2 class="mt-4 mb-4 pl-5">
          {{ item.documentNumber }}
        </v-flex>
        <v-flex lg2 class="mt-4 mb-4">
          {{ item.documentDate.day }}.{{ item.documentDate.month | normalizeNumber }}.{{ item.documentDate.year }}
        </v-flex>
        <v-flex lg2 class="mt-4 mb-4">
          {{ item.helpObject }}
        </v-flex>
        <v-flex lg4 class="mt-4 mb-4">
          {{ item.situationDescription }}
        </v-flex>
        <v-flex lg2 class="mt-4 mb-4 pr-5 text-right">
          {{ rubles(item.summary.done) }} / {{ rubles(item.summary.needed) }}
        </v-flex>
      </v-layout>
    </v-card>
    <v-card
      v-for="item of otherCostsItems"
      v-show="!isMainFeesSection && !isMainForDestituteSubsection && isOtherCostsButtonActive"
      :key="'realised-support-' + Math.floor((Math.random() * 10000)).toString()"
      elevation="0"
    >
      <v-layout row class="mt-4 pr-3 pl-3">
        <v-flex lg2 class="mt-4 mb-4 pl-5">
          {{ item.documentNumber }}
        </v-flex>
        <v-flex lg2 class="mt-4 mb-4">
          {{ item.documentDate.day }}.{{ item.documentDate.month | normalizeNumber }}.{{ item.documentDate.year }}
        </v-flex>
        <v-flex lg2 class="mt-4 mb-4">
          {{ item.target }}
        </v-flex>
        <v-flex lg4 class="mt-4 mb-4">
          {{ item.targetDescription }}
        </v-flex>
        <v-flex lg2 class="mt-4 mb-4 pr-5 text-right">
          {{ rubles(item.summary.done) }} / {{ rubles(item.summary.needed) }}
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { rubles } from '@/plugins/currency';

export default Vue.extend({
  name: 'Reports',
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

      // Data for Fees section
      feesTitle: this.$t('reports.section[0].title'),
      feesDescription: this.$t('reports.section[0].description'),
      feeColumnNames: this.$t('reports.section[0].table.title'),
      feeSectionItems: this.$t('reports.section[0].table.data'),

      // Data for Realised Support section
      realisedSupportTitle: this.$t('reports.section[1].title'),
      realisedSupportDescription: this.$t('reports.section[1].description'),

      // For Destitute subsection's data
      forDestituteTitle: this.$t('reports.section[1].subsection[0].title'),
      forDestituteColumnNames: this.$t('reports.section[1].subsection[0].table.title'),
      forDestituteItems: this.$t('reports.section[1].subsection[0].table.data'),

      // Other Costs subsection's data
      otherCostsTitle: this.$t('reports.section[1].subsection[1].title'),
      otherCostsColumnNames: this.$t('reports.section[1].subsection[1].table.title'),
      otherCostsItems: this.$t('reports.section[1].subsection[1].table.data'),

      // Managing sections and subsections
      isMainFeesSection: true,
      isMainForDestituteSubsection: true,
      isOtherCostsButtonActive: false,

      // Resetting selection counters
      hasMonthSelected: false,
      hasYearSelected: false,
      timeInterval: {
        month: 0,
        year: '',
      },
    };
  },
  methods: {
    rubles,

    handleClickOnForDestitute () {
      if (!this.isMainForDestituteSubsection) {
        this.isMainForDestituteSubsection = !this.isMainForDestituteSubsection;
      }
    },

    handleClickOnOtherCosts () {
      if (this.isMainForDestituteSubsection) {
        this.isMainForDestituteSubsection = !this.isMainForDestituteSubsection;
      }

      if (!this.isOtherCostsButtonActive) {
        this.isOtherCostsButtonActive = !this.isOtherCostsButtonActive;
      }
    },

    handleSelectedMonth (selectedMonth: string) {

      // Initialisation variables
      const allMonthsSelect: string = this.$t('reports.interval.months[0]');
      let counter: number = 0;

      const isFeesSection: boolean = this.isMainFeesSection;
      const isForDestituteSubsection: boolean = !this.isMainFeesSection && this.isMainForDestituteSubsection;
      const isOtherCostsSubsection: boolean = !this.isMainFeesSection && !this.isMainForDestituteSubsection && this.isOtherCostsButtonActive;

      // Recovering table data by default after defining of a current section
      if (isFeesSection) {
        this.feeSectionItems = this.$t('reports.section[0].table.data');
      } else if (isForDestituteSubsection) {
        this.forDestituteItems = this.$t('reports.section[1].subsection[0].table.data');
      } else if (isOtherCostsSubsection) {
        this.otherCostsItems = this.$t('reports.section[1].subsection[1].table.data');
      }

      // Resetting selection counters
      if (this.hasMonthSelected && this.hasYearSelected) {
        this.feeSectionItems = this.$t('reports.section[0].table.data');
        this.feeSectionItems = this.feeSectionItems.filter(item => {
          return item.helpDate.year === parseInt(this.timeInterval.year, 10);
        });
      }
      this.hasMonthSelected = true;

      // Handling table data by month
      for (let month of this.months) {
        counter++;

        // Handling the case when a user chose All months
        if (selectedMonth === allMonthsSelect) {
          if (isFeesSection) {
            return this.feeSectionItems;
          } else if (isForDestituteSubsection) {
            return this.forDestituteItems;
          } else if (isOtherCostsSubsection) {
            return this.otherCostsItems;
          }
        }

        // Handling the cases when a user chose one of other months
        if (selectedMonth === month) {
          if (isFeesSection) {
            this.feeSectionItems = this.feeSectionItems.filter(item => {
              return item.helpDate.month === counter - 1;
            });
          } else if (isForDestituteSubsection) {
            this.forDestituteItems = this.forDestituteItems.filter(item => {
              return item.documentDate.month === counter - 1;
            });
          } else if (isOtherCostsSubsection) {
            this.otherCostsItems = this.otherCostsItems.filter(item => {
              return item.documentDate.month === counter - 1;
            });
          }
        }
      }
    },

    handleSelectedYear (selectedYear: string) {
      // Initialisation variables
      const allYearsSelect: string = this.$t('reports.interval.years[0]');
      const currentHumanMonthNumber = this.$t(`reports.interval.months`).indexOf(this.timeInterval.month);

      const isFeesSection: boolean = this.isMainFeesSection;
      const isForDestituteSubsection: boolean = !this.isMainFeesSection && this.isMainForDestituteSubsection;
      const isOtherCostsSubsection: boolean = !this.isMainFeesSection && !this.isMainForDestituteSubsection && this.isOtherCostsButtonActive;

      // Recovering table data by default after defining of a current section
      if (isFeesSection) {
        this.feeSectionItems = this.$t('reports.section[0].table.data');
      } else if (isForDestituteSubsection) {
        this.forDestituteItems = this.$t('reports.section[1].subsection[0].table.data');
      } else if (isOtherCostsSubsection) {
        this.otherCostsItems = this.$t('reports.section[1].subsection[1].table.data');
      }

      // Resetting selection counters
      if (this.hasMonthSelected && this.hasYearSelected) {
        this.feeSectionItems = this.$t('reports.section[0].table.data');
        this.feeSectionItems = this.feeSectionItems.filter(item => {
          return item.helpDate.month === currentHumanMonthNumber;
        });
      }
      this.hasYearSelected = true;

      // Handling table data by year
      for (let year of this.years) {

        // Handling the case when a user chose All years
        if (selectedYear === allYearsSelect) {
          if (isFeesSection) {
            return this.feeSectionItems;
          } else if (isForDestituteSubsection) {
            return this.forDestituteItems;
          } else if (isOtherCostsSubsection) {
            return this.otherCostsItems;
          }
        }

        // Handling the cases when a user chose one of other years
        if (selectedYear === year) {
          if (isFeesSection) {
            this.feeSectionItems = this.feeSectionItems.filter(item => {
              return item.helpDate.year === parseInt(selectedYear, 10);
            });
          } else if (isForDestituteSubsection) {
            this.forDestituteItems = this.forDestituteItems.filter(item => {
              return item.documentDate.year === parseInt(selectedYear, 10);
            });
          } else if (isOtherCostsSubsection) {
            this.otherCostsItems = this.otherCostsItems.filter(item => {
              return item.documentDate.year === parseInt(selectedYear, 10);
            });
          }
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
  .section__title--container {
    width: 400px;
  }

  .section__title--content {
    font-size: 30px;
  }

  .section__title--content:hover {
    cursor: pointer;
  }

  .section__description {
    font-size: 18px;
  }

  .reports {
    padding-top: 50px;
    padding-bottom: 105px;
  }

  .reports__data-manager {
    width: 200px;
  }

  .reports__subsection--button {
    text-transform: none;
    width: 40vw;
  }
</style>
