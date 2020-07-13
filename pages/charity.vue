<template>
  <v-layout white>
    <v-container>
      <CharityBanner
        class="mt-5"
      />
      <h1 class="mt-12">
        {{ $t('charity.title') }}
      </h1>
      <GatheringSelection
        :gatheringId="gatheringId"
      />
      <PaymentMethod class="mb-12" />
    </v-container>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import CharityBanner from '@/components/charity/CharityBanner.vue';
import GatheringSelection from '@/components/charity/GatheringSelection.vue';
import PaymentMethod from '~/components/charity/PaymentMethod.vue';

export default Vue.extend({
  components: {
    CharityBanner,
    GatheringSelection,
    PaymentMethod,
  },
  data () {
    return {
      gatheringId: this.$route.query.id,
    };
  },
});
</script>

<style scoped>
  .white-background {
    background-color: white;
  }
</style>
