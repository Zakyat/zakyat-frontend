<template>
  <div style="background-color: white;">
    <v-app-bar flat color="white" height="120" class="navbar_style">
      <router-link to="/">
        <img :src="require(`@/assets/logo/${$i18n.locale}.svg`)">
      </router-link>
      <v-btn
        v-for="(page, i) in pages"
        :key="i"
        :to="page.link"
        text
        nuxt
        small
        class="black--text"
      >
        {{ page.text }}
      </v-btn>
      <v-btn
        to="/zakat"
        text
        nuxt
        small
        class="green--text"
      >
        {{ $t('links.pay') }}
      </v-btn>
      <v-btn
        rounded
        dark
        small
        color="primary"
        class="ml-6"
        height="40px"
      >
        {{ $t('give_help') }}
      </v-btn>
      <v-btn
        rounded
        dark
        small
        color="accent"
        class="mx-3"
        height="40px"
      >
        {{ $t('get_help') }}
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      pages: [
        { text: this.$t('links.fees'), link: '/' },
        { text: this.$t('links.projects'), link: '/' },
        { text: this.$t('links.reports'), link: '/' },
        { text: this.$t('links.news'), link: '/' },
        { text: this.$t('links.about'), link: '/' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar_style {
  padding: 0 5%;
  max-width: 1440px;
  min-width: 1000px;
  margin: 0 auto;
}
.v-btn--active::before {
  opacity: 0;
}
</style>
