<template>
  <v-container class="reports grey lighten-5">
    <v-layout justify-space-between>
      <div class="section-title__container">
        <v-select
          class="section-title__content pt-0"
          :items="[sectionTitles[0].title, sectionTitles[1].title]"
          placeholder="Поступления"
        />
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
    <v-layout justify-space-between>
      <div>
        <h3>{{ $t('reports.section[0].description') }}</h3>
      </div>
      <div>
        <h3 onload="items.forEach(item => total + item.size)">{{ total }}</h3>
      </div>
    </v-layout>
    <v-layout row class="mt-5 pr-3">
      <v-flex lg2 class="pl-3 text--secondary">
        {{ columnNames[0] }}
      </v-flex>
      <v-flex lg3 class="pl-2 text--secondary">
        {{ columnNames[1] }}
      </v-flex>
      <v-flex lg3 class="pl-2 text--secondary">
        {{ columnNames[2] }}
      </v-flex>
      <v-flex lg3 class="pl-1 text--secondary">
        {{ columnNames[3] }}
      </v-flex>
      <v-flex lg1 class="text--secondary text-right">
        {{ columnNames[4] }}
      </v-flex>
    </v-layout>
    <v-card v-for="(item, index) of items" :key="index" elevation="0">
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
          {{ item.size + ' ' + currency }}
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ParameterBar',
  data () {
    return {
      currency: this.$t('reports.currency'),
      sectionTitles: this.$t('reports.section'),
      columnNames: this.$t('reports.table.title'),
      items: this.$t('reports.table.data'),
      months: this.$t('reports.interval.months'),
      years: this.$t('reports.interval.years'),
      total: 0,
    };
  },
});
</script>

<style lang="scss" scoped>
  .section-title__container {
    width: 280px;
  }

  .section-title__content {
    font-size: 24px;
  }

  .reports {
    padding-top: 50px;
    padding-bottom: 105px;
  }

  .reports__select {
    width: 150px;
  }
</style>
