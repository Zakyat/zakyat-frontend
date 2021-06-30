<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <SliderBar class="d-none d-md-block" />
    <SliderMobile class="d-flex d-md-none" />
    <DonationBar />
    <ProjectBar />
    <ZakatBannerBar />
    <NewsBar />
    <VolunteerBannerBar />
    <FundedProjectBar />
    <AboutUsBar />
    <DonationBar />
    <PartnerBar />
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import PartnerBar from '@/components/home/PartnerBar.vue';
import AboutUsBar from '@/components/home/AboutUsBar.vue';
import DonationBar from '@/components/home/DonationBar.vue';
import NewsBar from '@/components/home/NewsBar.vue';
import ZakatBannerBar from '@/components/home/ZakatBannerBar.vue';
import VolunteerBannerBar from '@/components/home/VolunteerBannerBar.vue';
import ProjectBar from '@/components/home/ProjectBar.vue';
import FundedProjectBar from '@/components/home/FundedProjectBar.vue';
import SliderBar from '@/components/home/SliderBar.vue';
import SliderMobile from '@/components/home/SliderMobile.vue';

export default Vue.extend({
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
    SliderMobile,
  },
  layout: 'white',
  head: {
    title: 'Официальный сайт благотвторительного фонда "Закят"',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Официальный сайт благотвторительного фонда "Закят"'
      }
    ],
  }
});
</script>

<style>
.v-btn {
  text-transform: none;
}
</style>
