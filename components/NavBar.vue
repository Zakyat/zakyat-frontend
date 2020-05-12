<template>
  <v-app-bar flat color="white" height="100">
    <v-spacer />
    <img src="@/assets/logo.svg">
    <v-spacer />
    <v-btn
      class="toolbar_text"
      v-for="(page, i) in pages"
      :key="i"
      :to="page.link"
      text
      nuxt
    >
      {{ page.text }}
    </v-btn>
    <v-btn class="toolbar_text" text nuxt color="#00AC00" >
      {{ $t('links.pay') }}
    </v-btn>
    <v-btn class="toolbar_text mr-3" rounded dark color="primary" >
      {{ $t('give_help') }}
    </v-btn>
    <v-btn class="toolbar_text" rounded dark color="accent">
      {{ $t('get_help') }}
    </v-btn>
    <v-spacer />
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
      ],
      green_text: [
        { text: this.$t('links.pay'), link: '/' },
      ]
    };
  },
});
</script>

<style lang="scss" scoped>

.toolbar_text {
  font-family: Lato;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform:none !important;
}

.v-btn--active::before {
  opacity: 0;
}

.v-toolbar__title {
  margin-left: 10px;

  p {
    margin-bottom: 0;

    &.subtitle-2 {
      color: #736d5a;
    }
  }
}
</style>
