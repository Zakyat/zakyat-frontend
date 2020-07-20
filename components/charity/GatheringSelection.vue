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
          outlined
          rounded
          flat
          :placeholder="$t('charity.gathering.gatheringSelection')"
          :items="gatherings"
          item-text="id"
          class="pa-0 ma-0"
        />
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
      v-if="selectedGathering"
      :gathering="gatherings.find(x => x.id === selectedGathering)"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import CharityCard from '@/components/charity/CharityCard.vue';

export default Vue.extend({
  name: 'GatheringSelection',
  components: {
    CharityCard,
  },
  props: {
    gatheringId: {
      type: String,
      required: true,
    },
    gatherings: {
      type: Array,
      required: true,
    },
  },
  computed: {
    selectedGathering: {
      get () {
        return this.gatheringId;
      },
      set (newSelectedGathering) {
        this.gatheringId = newSelectedGathering;
      },
    },
  },
});
</script>
