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
import PartnerBar from '@/components/home/PartnerBar.vue';
import AboutUsBar from '@/components/home/AboutUsBar.vue';
import DonationBar from '@/components/home/DonationBar.vue';
import NewsBar from '@/components/home/NewsBar.vue';

export default {
  components: {
    PartnerBar,
    AboutUsBar,
    DonationBar,
    NewsBar,
  },
};
</script>
