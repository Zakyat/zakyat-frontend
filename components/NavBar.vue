<template>
  <v-app-bar flat color="white" height="120" style="padding: 0 5%;">
    <router-link to="/">
      <img :src="require(`@/assets/logo/${$i18n.locale}.svg`)">
    </router-link>
    <v-spacer />
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
    <v-spacer />
    <v-btn
      rounded
      dark
      small
      color="primary"
      height="40px"
      to="/charity"
    >
      {{ $t('give_help') }}
    </v-btn>
    <v-spacer />
    <v-btn
      rounded
      dark
      small
      color="accent"
      height="40px"
    >
      {{ $t('get_help') }}
    </v-btn>
  </v-app-bar>
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
        { text: this.$t('links.news'), link: '/news' },
        { text: this.$t('links.about'), link: '/' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.v-btn--active::before {
  opacity: 0;
}
</style>
