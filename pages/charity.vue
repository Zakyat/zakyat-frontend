<template>
  <v-container>
    <h1 class="mt-12">
      {{ $t('charity.title') }}
    </h1>
    <GatheringSelection @anonymous="makeAnonymous" :campaign-id="campaignId" />
    <PaymentMethod :isAnonymous="isAnonymous" :campaign-id="campaignId" :donation-amount="donationAmount" class="mb-12" />
  </v-container>
</template>

<script lang="js">
import Vue from 'vue';
import GatheringSelection from '@/components/charity/GatheringSelection.vue';
import PaymentMethod from '@/components/charity/PaymentMethod.vue';

export default Vue.extend({
  name: 'charity',
  layout: 'white',
  components: {
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
      return parseInt(this.$route.query.id);
    },
    donationAmount () {
      return this.$route.query.amount;
    },
  },
  methods: {
    makeAnonymous (isAnonymou) {
      this.isAnonymous = isAnonymous;
    },
  },
});
</script>
