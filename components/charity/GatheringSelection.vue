<template>
  <div class="px-3">
    <v-row
      justify="space-between"
      class="mt-5"
    >
      <v-col
        cols="12"
        md="4"
        class="pa-0 ma-0"
      >
        <v-select
          v-model="selectedGathering"
          append-icon="mdi-chevron-down"
          outlined
          rounded
          flat
          solo
          :placeholder="$t('charity.gathering.gatheringSelection')"
          :items="items"
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
          on-icon="mdi-check-box-outline"
        >
          <span slot="label" class="black-label"> {{ $t('charity.gathering.anonymous') }} </span>
        </v-checkbox>
      </v-col>
    </v-row>
    <CharityCard
      v-if="selectedGathering"
      :gathering="gatherings[items.indexOf(selectedGathering)]"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CharityCard from '@/components/charity/CharityCard.vue';

export default Vue.extend({
  name: 'GatheringSelection',
  components: {
    CharityCard,
  },
  props: [
    'gatheringId',
    'gatherings',
    'items',
  ],
  data () {
    return {
      selectedGathering: this.gatheringId,
    };
  },
});
</script>

<style scoped>
.black-label {
  color: black;
}
</style>
