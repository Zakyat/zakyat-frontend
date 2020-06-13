<template>
  <v-app>
    <HeaderBar />
    <NavBar />
    <v-divider />
    <v-content>
      <nuxt />
    </v-content>
    <FooterBar />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import HeaderBar from '~/components/HeaderBar.vue';
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';

export default Vue.extend({
  components: {
    HeaderBar,
    NavBar,
    FooterBar,
  },
  head () {
    return this.$nuxtI18nSeo();
  },
});
</script>
