<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <!-- <PartnerBarSlide /> -->
    <SliderBar />
    <DonationBar />
    <ProjectBar />
    <VolunteerBannerBar />
    <NewsBar />
    <ZakatBannerBar />
    <FundedProjectBar />
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
import ZakatBannerBar from '@/components/home/ZakatBannerBar.vue';
import VolunteerBannerBar from '@/components/home/VolunteerBannerBar.vue';
import ProjectBar from '@/components/home/ProjectBar.vue';
import FundedProjectBar from '@/components/home/FundedProjectBar.vue';
import SliderBar from '@/components/home/SliderBar.vue';

export default {
  components: {
    PartnerBar,
    AboutUsBar,
    DonationBar,
    NewsBar,
    ZakatBannerBar,
    VolunteerBannerBar,
    ProjectBar,
    FundedProjectBar,
    SliderBar,
  },
};
</script>
