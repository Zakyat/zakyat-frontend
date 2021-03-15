<template>
  <v-layout white>
    <div class="container mt-10">
      <HelpCard />
      <FeedCard />
      <WearCard />
      <HayatCard />
      <SoulCard />
      <HafizCard />
      <TaxiCard />
      <SchoolCard />
    </div>
  </v-layout>
</template>

<script lang="ts">
import HelpCard from '@/components/projects/HelpCard.vue';
import FeedCard from '@/components/projects/FeedCard.vue';
import WearCard from '@/components/projects/WearCard.vue';
import HayatCard from '@/components/projects/HayatCard.vue';
import SoulCard from '@/components/projects/SoulCard.vue';
import HafizCard from '@/components/projects/HafizCard.vue';
import TaxiCard from '@/components/projects/TaxiCard.vue';
import SchoolCard from '@/components/projects/SchoolCard.vue';

export default {
  name: 'index',
  components: {
    SchoolCard,
    TaxiCard,
    HafizCard,
    SoulCard,
    HayatCard,
    WearCard,
    FeedCard,
    HelpCard,
  },
};
</script>
