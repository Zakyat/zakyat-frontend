<template>
  <v-app style="background-color: white;">
    <HeaderBar />
    <NavBar />
    <v-divider />
    <v-content class="contentcontainer">
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

<style scoped>
.contentcontainer {
  max-width: 1440px;
  min-width: 1000px;
  margin: 0 auto;
}
</style>
