<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div class="mobile">
      <div class="loader-inner">
        <img :src="require(`@/assets/logo/ru.svg`)">
      </div>
      <h1>Сайт временно не доступен для маленьких экранов</h1>
      <h2>Пожалуйста перейдите на компьютер</h2>
    </div>
    <SliderBar />
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
  },
  layout: 'white',
});
</script>

<style lang="css">
@media screen and (min-width: 1060px) {
  .mobile {
    display: none;
  }
}

@media screen and (max-width: 1060px) {
  .mobile {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: white;
    width: 100%;
    height: 100%;
  }
}
</style>
