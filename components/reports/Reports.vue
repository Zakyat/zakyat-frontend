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
              {{ fees }}
            </span>
            <span v-else>
              {{ realisedSupport }}
            </span>
          </h2>
          <v-icon>
            mdi-chevron-down
          </v-icon>
        </v-layout>
      </div>
      <v-layout justify-end>
        <div class="reports__select">
          <v-select
            :items="months"
            :placeholder="months[new Date().getMonth()]"
            dense
            rounded
            outlined
          />
        </div>
        <div class="reports__select ml-5">
          <v-select
            :items="years"
            :placeholder="new Date().getFullYear().toString()"
            dense
            rounded
            outlined
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
        <v-btn class="reports__subsection--button">
          {{ forDestitute }}
        </v-btn>
        <v-btn class="reports__subsection--button">
          {{ otherCosts }}
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
        <h3 onload="items.forEach(item => total + item.size)">
          {{ rubles(total) }}
        </h3>
      </div>
    </v-layout>

    <!-- Table column names -->
    <v-layout v-show="isMainFeesSection" row class="mt-5 pr-3">
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
    <v-layout v-show="!isMainFeesSection" row class="mt-5 pr-3">
      <v-flex lg2 class="pl-3 text--secondary">
        {{ realisedSupportColumnNames[0] }}
      </v-flex>
      <v-flex lg2 class="pl-2 text--secondary">
        {{ realisedSupportColumnNames[1] }}
      </v-flex>
      <v-flex lg2 class="pl-2 text--secondary">
        {{ realisedSupportColumnNames[2] }}
      </v-flex>
      <v-flex lg4 class="pl-1 text--secondary">
        {{ realisedSupportColumnNames[3] }}
      </v-flex>
      <v-flex lg2 class="text--secondary text-right">
        {{ realisedSupportColumnNames[4] }}
      </v-flex>
    </v-layout>

    <!-- Table data -->
    <v-card
      v-for="(item, index) of feeSectionItems"
      v-show="isMainFeesSection"
      :key="'fees-' + index.toString()"
      elevation="0"
    >
      <v-layout row class="mt-4 pr-3 pl-3">
        <v-flex lg2 class="mt-4 mb-4 pl-5">
          {{ item.date }}
        </v-flex>
        <v-flex lg3 class="mt-4 mb-4">
          {{ item.helper }}
        </v-flex>
        <v-flex lg3 class="mt-4 mb-4">
          {{ item.object }}
        </v-flex>
        <v-flex lg3 class="mt-4 mb-4">
          {{ item.type }}
        </v-flex>
        <v-flex lg1 class="mt-4 mb-4 pr-5 text-right">
          {{ rubles(item.size) }}
        </v-flex>
      </v-layout>
    </v-card>
    <v-card
      v-for="(item, index) of realisedSupportSectionItems"
      v-show="!isMainFeesSection"
      :key="'realised-support-' + index.toString()"
      elevation="0"
    >
      <v-layout row class="mt-4 pr-3 pl-3">
        <v-flex lg2 class="mt-4 mb-4 pl-5">
          {{ item.documentNumber }}
        </v-flex>
        <v-flex lg2 class="mt-4 mb-4">
          {{ item.documentDate }}
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
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { rubles } from '@/plugins/currency';

export default Vue.extend({
  name: 'Reports',
  data () {
    return {
      // Global data for both sections
      months: this.$t('reports.interval.months'),
      years: this.$t('reports.interval.years'),
      total: 0,

      // Data for Fees section
      fees: this.$t('reports.section[0].title'),
      feesDescription: this.$t('reports.section[0].description'),
      feeColumnNames: this.$t('reports.section[0].table.title'),
      feeSectionItems: this.$t('reports.section[0].table.data'),

      // Data for Realised Support section
      realisedSupport: this.$t('reports.section[1].title'),
      realisedSupportDescription: this.$t('reports.section[1].description'),
      forDestitute: this.$t('reports.section[1].subsection[0]'),
      otherCosts: this.$t('reports.section[1].subsection[1]'),
      realisedSupportColumnNames: this.$t('reports.section[1].table.title'),
      realisedSupportSectionItems: this.$t('reports.section[1].table.data'),

      // Data for managing sections and subsections
      isMainFeesSection: true,
    };
  },
  methods: {
    rubles,
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

  .reports__select {
    width: 150px;
  }

  .reports__subsection--button {
    text-transform: none;
    width: 40vw;
  }
</style>
