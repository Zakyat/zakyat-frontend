<template>
  <v-system-bar dark height="50" style="padding: 0 5%;">
    <img src="@/assets/images/heart.svg" class="ml-12 mr-3">
    {{ $t('collected', [rubles(amount)]) }}
    <v-spacer />
    <v-btn text small @click="toggleSearcher">
      <v-icon size="20">
        mdi-magnify
      </v-icon>
      {{ $t('search') }}
    </v-btn>
    <v-btn text small>
      <v-icon size="20">
        mdi-vk
      </v-icon>
      {{ $t('VK') }}
    </v-btn>
    <v-btn text small>
      <v-icon size="20">
        mdi-instagram
      </v-icon>
      {{ $t('instagram') }}
    </v-btn>
    <v-btn text small>
      <v-icon size="20" color="white">
        mdi-account-circle
      </v-icon>
      {{ $t('login') }}
    </v-btn>
    <v-flex lg1 md2 xs4>
      <LanguageSelector />
    </v-flex>
  </v-system-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import LanguageSelector from '~/components/LanguageSelector.vue';
import { rubles } from '~/plugins/currency';

export default Vue.extend({
  components: {
    LanguageSelector,
  },
  data () {
    return {
      amount: 6234234,
    };
  },
  methods: {
    rubles,
    toggleSearcher () {
      const searchModalWindow = document.getElementById('searcher');
      const isSearcherOpen = (localStorage.getItem('isSearcherOpen') === 'true');

      if (searchModalWindow) {
        if (isSearcherOpen) {
          searchModalWindow.style.display = 'none';
          localStorage.setItem('isSearcherOpen', 'false');
        } else {
          searchModalWindow.style.display = 'block';
          localStorage.setItem('isSearcherOpen', 'true');
        }
      }
    },
  },
});
</script>
