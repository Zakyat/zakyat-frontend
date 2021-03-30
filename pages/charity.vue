<template>
  <v-container>
    <CharityBanner class="mt-5" />
    <h1 class="mt-12">
      {{ $t('charity.title') }}
    </h1>
    <GatheringSelection @anonymous="makeAnonymous" :campaign-id="campaignId" />
    <PaymentMethod :isAnonymous="isAnonymous" :campaign-id="campaignId" class="mb-12" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import CharityBanner from '@/components/charity/CharityBanner.vue';
import GatheringSelection from '@/components/charity/GatheringSelection.vue';
import PaymentMethod from '@/components/charity/PaymentMethod.vue';

export default Vue.extend({
  name: 'charity',
  layout: 'white',
  components: {
    CharityBanner,
    GatheringSelection,
    PaymentMethod,
  },
  data () {
    return {
      isAnonymous: false,
    };
  },
  computed: {
    campaignId () {
      return parseInt(this.$route.query.id as string);
    },
  },
  methods: {
    makeAnonymous (isAnonymous: boolean) {
      this.isAnonymous = isAnonymous;
    },
  },
});
</script>
