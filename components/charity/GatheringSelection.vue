<template>
  <div class="px-3">
    <v-row
      justify="space-between"
      class="mt-12"
    >
      <v-col
        cols="12"
        md="4"
        class="pa-0 ma-0"
      >
        <v-select
          append-icon="mdi-chevron-down"
          outlined
          rounded
          flat
          solo
          :placeholder="$t('charity.gathering.gatheringSelection')"
          :items="items"
          :value="items[0]"
          class="pa-0 ma-0"
        >
        </v-select>
      </v-col>
      <v-spacer/>
      <v-col
        cols="auto"
        class="pa-0 md-0"
      >
        <v-checkbox
          class="pa-0 md-0"
          :label="$t('charity.gathering.anonymous')"
        >
        </v-checkbox>
      </v-col>
    </v-row>
    <CharityCard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CharityCard from '~/components/charity/CharityCard.vue';

export default Vue.extend({
  name: 'GatheringSelection',
  components: {
    CharityCard,
  },
  data () {
    return {
      items: ['Бурганова Альфия, сбор 309', 'Садыков Амирхан, сбор 400'],
    };
  },
});
</script>

<style scoped>
</style>
