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
          outlined
          rounded
          flat
          :placeholder="$t('charity.gathering.gatheringSelection')"
          :items="gatherings"
          item-value="id"
          class="pa-0 ma-0"
          :value="gatheringId"
          @input="$router.push(`/charity?id=${$event}`)"
        >
          <template #item="{ item }">
            {{ item.name }}, {{ item.id }}
          </template>
          <template #selection="{ item }">
            {{ item.name }}, {{ item.id }}
          </template>
        </v-select>
      </v-col>
      <v-spacer />
      <v-col
        cols="auto"
        class="pa-0 md-0"
      >
        <v-checkbox
          class="pa-0 md-0"
          on-icon="mdi-check-box-outline"
        >
          <template v-slot:label>
            <span class="black--text"> {{ $t('charity.gathering.anonymous') }} </span>
          </template>
        </v-checkbox>
      </v-col>
    </v-row>
    <CharityCard
      v-if="gatheringId"
      v-bind="selectedGathering"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import CharityCard from '@/components/charity/CharityCard.vue';

export default Vue.extend({
  name: 'GatheringSelection',
  components: {
    CharityCard,
  },
  props: {
    gatheringId: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapState(['gatherings']),
    selectedGathering () {
      return this.gatherings.find(gathering => gathering.id === this.gatheringId);
    },
  },
});
</script>
