<template>
  <div style="padding: 10px 5%;">
    <h1 class="mt-12" v-if="donationType !== 1">
      {{ $t('charity.title') }}
    </h1>
    <h1 class="mt-10" v-if="donationType === 1">
      Закят в размере {{ parseInt(this.$route.query.amount) | rubles}}
    </h1>
    <GatheringSelection @anonymous="makeAnonymous" v-if="donationType !== 1" :campaign-id="campaignId" />
    <PaymentMethod :isAnonymous="isAnonymous" :campaign-id="campaignId" :donation-amount="donationAmount" class="mb-12" />
  </div>
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
    donationType () {
      return parseInt(this.$route.query.type);
    },
    donationAmount () {
      return this.$route.query.amount;
    },
  },
  methods: {
    makeAnonymous () {
      this.isAnonymous = !this.isAnonymous;
    },
  },
  head: {
    title: `Пожертвование | Благотворительный фонд "Закят"`,
  },
});
</script>
