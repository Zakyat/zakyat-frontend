<template>
  <v-app-bar flat color="white" height="100" style="padding: 0 5%;">
    <img :src="require(`@/assets/logo/${$i18n.locale}.svg`)">
    <v-spacer />
    <v-btn
      v-for="(page, i) in pages"
      :key="i"
      :to="page.link"
      text
      nuxt
      class="text-capitalize font-weight-bold"
    >
      {{ page.text }}
    </v-btn>
    <v-btn rounded dark color="primary">
      {{ $t('give_help') }}
    </v-btn>
    <v-btn rounded dark color="accent">
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
        { text: this.$t('links.news'), link: '/' },
        { text: this.$t('links.about'), link: '/' },
        { text: this.$t('links.pay'), link: '/zakat' },
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
