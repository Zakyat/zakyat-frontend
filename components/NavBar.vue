<template>
  <v-app-bar flat color="white" height="120" style="padding: 0 5%;">
    <nuxt-link to="/">
      <img :src="require(`@/assets/logo/${$i18n.locale}.svg`)">
    </nuxt-link>
    <v-spacer />
    <v-spacer />
    <v-spacer />
    <nuxt-link
      v-for="(page, i) in pages"
      :key="i"
      :to="page.link"
      class="mx-3"
    >
      <span style="color: black;">
        {{ page.text }}
      </span>
    </nuxt-link>
    <nuxt-link
      to="/zakat"
      class="mx-3"
    >
      <span style="color: #00ac00;">
        {{ $t('links.pay') }}
      </span>
    </nuxt-link>
    <v-spacer />
    <v-btn
      rounded
      dark
      color="primary"
      height="40px"
    >
      {{ $t('give_help') }}
    </v-btn>
    <v-spacer />
    <v-btn
      rounded
      dark
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

span {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}

a {
  text-decoration: none;
}
</style>
