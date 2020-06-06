<template>
  <v-footer absolute app color="#202020">
    <v-row
      justify="center"
    >
      <v-col
        v-for="(page, i) in pages"
        :key="i"
        class="text-center white--text"
        cols="auto"
      >
        <v-btn
          :to="page.link"
          text
          nuxt
          small
          class="pa-4"
          active-class="active"
        >
          {{ page.text }}
        </v-btn>
      </v-col>
      <v-col cols="4" sm="2" lg="1" class="py-2 px-0">
        <LanguageSelector />
      </v-col>
    </v-row>
    <v-row class="my-3">
      <v-col class="py-2 text-center white--text" cols="12">
        <v-btn text small>
          ©{{ new Date().getFullYear() }}  {{ $t('copyright') }}
        </v-btn>
        <v-btn text small href="tel:+78432253322">
          +7 (843) 225-33-22
        </v-btn>
        <v-btn text small href="mailto:fondzakyat@yandex.ru">
          fondzakyat@yandex.ru
        </v-btn>
        <v-btn text small>
          <v-icon medium>
            mdi-vk
          </v-icon>
          {{ $t('VK') }}
        </v-btn>
        <v-btn text small>
          <v-icon medium>
            mdi-instagram
          </v-icon>
          {{ $t('instagram') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import LanguageSelector from '@/components/LanguageSelector.vue';

export default Vue.extend({
  components: {
    LanguageSelector,
  },
  data () {
    return {
      pages: [
        { text: this.$t('links.fees'), link: '/' },
        { text: this.$t('links.projects'), link: '/' },
        { text: this.$t('links.reports'), link: '/' },
        { text: this.$t('links.news'), link: '/' },
        { text: this.$t('links.about'), link: '/' },
        { text: this.$t('links.volunteers'), link: '/' },
      ],
    };
  },
});
</script>

<style scoped>
.v-btn,
.v-icon,
.v-overflow-btn {
  color: white;
}

.active {
  background-color: black;
}

.select {
  display: inline-flex;
}

</style>
