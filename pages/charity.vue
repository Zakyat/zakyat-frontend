<template>
  <v-container>
    <CharityBanner />
    <h1 class="mt-12">
      {{ $t('charity.title') }}
    </h1>
    <GatheringSelection
      :gatheringId="gatheringId"
    />
    <PaymentMethod />
  </v-container>
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
  props: [
    'slideId',
  ],
  data () {
    return {
      gatheringId: this.$route.params.slideId,
    };
  },
});
</script>

<style scoped>
</style>
