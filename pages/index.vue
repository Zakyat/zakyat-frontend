<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <!-- <PartnerBarSlide /> -->
    <NewsBar />
    <AboutUsBar />
    <DonationBar />
    <PartnerBar />
  </v-layout>
</template>

<script>
import PartnerBar from '@/components/PartnerBar.vue';
import AboutUsBar from '@/components/AboutUsBar.vue';
import DonationBar from '@/components/DonationBar.vue';
import NewsBar from '@/components/NewsBar.vue';

export default {
  components: {
    PartnerBar,
    AboutUsBar,
    DonationBar,
    NewsBar,
  },
};
</script>
