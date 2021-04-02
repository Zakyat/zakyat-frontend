<template>
  <v-app class="app-wrapper">
    <div class="app">
      <Loader />
    </div>
    <HeaderBar :siteSettings="siteSettings" />
    <NavBar />
    <v-divider />
    <v-main>
      <nuxt />
    </v-main>
    <FooterBar :siteSettings="siteSettings" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

import HeaderBar from '@/components/HeaderBar.vue';
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import Loader from '~/components/loader/Loader.vue';

export default Vue.extend({
  name: 'Default',
  components: {
    HeaderBar,
    NavBar,
    FooterBar,
    Loader,
  },
  apollo: {
    siteSettings: gql`query{
      siteSettings {
        email,
        phone,
        vk,
        fb,
        insta,
        fondInformation,
        allCollectedMoney
      }
    }`,
  },
  data () {
    return {
      siteSettings: '',
    };
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

.app {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
