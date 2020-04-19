<template>
  <v-app>
    <HeaderBar />
    <NavBar />
    <v-divider />
    <v-content>
      <v-container>
        <nuxt />
        <!-- <PartnerBarSlide /> -->
        <PartnerBar />
      </v-container>
    </v-content>
    <FooterBar />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import HeaderBar from '@/components/HeaderBar.vue';
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import PartnerBar from '@/components/PartnerBar.vue';
import PartnerBarSlide from '@/components/PartnerBarSlide.vue';

export default Vue.extend({
  components: {
    HeaderBar,
    NavBar,
    FooterBar,
    PartnerBar,
    PartnerBarSlide,

  },
  head () {
    return this.$nuxtI18nSeo();
  },
});
</script>
