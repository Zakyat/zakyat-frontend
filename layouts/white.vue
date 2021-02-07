<template>
  <div v-if="!isLoaded" class="app">
    <Loader />
  </div>
  <v-app v-else class="app-wrapper">
    <HeaderBar />
    <NavBar />
    <v-divider />
    <v-main>
      <nuxt />
    </v-main>
    <FooterBar />
  </v-app>
</template>

<script lang='ts'>
import Vue from 'vue';

import HeaderBar from '@/components/HeaderBar.vue';
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import Loader from '~/components/loader/Loader.vue';

export default Vue.extend({
  name: 'White',
  components: {
    HeaderBar,
    NavBar,
    FooterBar,
    Loader,
  },

  head () {
    return this.$nuxtI18nSeo();
  },

  data () {
    return {
      isLoaded: false,
    };
  },

  mounted () {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        this.isLoaded = true;
      }
    };
  },
});
</script>

<style lang="scss" scoped>
.app-wrapper {
  max-width: 1440px;
  background-color: white;
  margin: 0 auto;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
