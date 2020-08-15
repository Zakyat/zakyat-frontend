<template>
  <v-app class="app-wrapper">
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

import HeaderBar from '@/components/HeaderBar.vue';
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';

export default Vue.extend({
  name: 'DefaultLayout',
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

<style lang="scss" scoped>
.app-wrapper {
  max-width: 1440px;
  background-color: #f2f2f2;
  margin: 0 auto;
}
</style>
