<template>
  <v-app-bar flat color="white" height="100">
    <img src="@/assets/logo.svg">
    <v-toolbar-title>
      <p class="title primary--text">
        {{ $t('title') }}
      </p>
      <p class="subtitle-2">
        {{ $t('subtitle') }}
      </p>
      <p class="subtitle-2">
        {{ $t('tatarstan') }}
      </p>
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      v-for="(page, i) in pages"
      :key="i"
      :to="page.link"
      text
      nuxt
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
        { text: this.$t('fees'), link: '/' },
        { text: this.$t('projects'), link: '/' },
        { text: this.$t('reports'), link: '/' },
        { text: this.$t('news'), link: '/' },
        { text: this.$t('about'), link: '/' },
        { text: this.$t('pay'), link: '/' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.v-btn--active::before {
  opacity: 0;
}
.v-toolbar__title {
  margin-left: 1em;
  p {
    margin-bottom: 0;
    &.subtitle-2 {
      color: #736D5A;
    }
  }
}
</style>
