<template>
  <div class="reports grey lighten-5">
    <v-container>
      <!-- Report management panel -->
      <v-layout justify-space-between>
        <div class="section__title--container">
          <v-layout>
            <h2
              class="section__title--content pt-0"
              @click="handleClickOnSection"
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
      <v-layout v-show="!haveDataFounded" column align-center class="search-error__container mt-5 pt-3">
        <img
          src="@/assets/images/errors/search-error.svg"
          style="height: 350px; width: 350px"
          class="search-error__image"
        >
        <h2 class="mt-5 text-center">
          {{ $t('reports.errorText.description') }}
          <br>
          {{ $t('reports.errorText.suggestion') }}
        </h2>
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

      <!-- Table data -->
      <div class="reports__table--padding">
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
      </div>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue';
import { rubles } from '@/plugins/currency';

export default {
  name: 'ForDestituteSubsection',
};
</script>

<style scoped>

</style>
