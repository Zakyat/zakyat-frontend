<template>
  <v-system-bar class="header-bar" height="50" style="padding: 0 5%;">
    <img src="@/assets/images/heart.svg" class="ml-12 mr-3">
    <span class="descriptor">{{ $t('collected', [rubles(amount)]) }}</span>
    <v-spacer />
    <v-btn text small @click="isSearcherOpen = !isSearcherOpen">
      <v-icon class="icon" size="20">
        mdi-magnify
      </v-icon>
      {{ $t('search.buttonName') }}
    </v-btn>
    <v-btn text small>
      <v-icon class="icon" size="20">
        mdi-vk
      </v-icon>
      {{ $t('VK') }}
    </v-btn>
    <v-btn text small>
      <v-icon class="icon" size="20">
        mdi-instagram
      </v-icon>
      {{ $t('instagram') }}
    </v-btn>
    <v-btn text small>
      <v-icon class="icon" size="20" color="white">
        mdi-account-circle
      </v-icon>
      {{ $t('login') }}
    </v-btn>
    <v-flex lg1 md2 xs4>
      <LanguageSelector class="icon" />
    </v-flex>
    <v-col v-show="isSearcherOpen" class="searcher">
      <v-autocomplete
        class="searcher__input"
        :items="items"
        :placeholder="$t('search.placeholder')"
        :no-data-text="$t('search.noDataText')"
        append-icon=""
        dense
        clearable
        rounded
      />
    </v-col>
  </v-system-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import LanguageSelector from '@/components/LanguageSelector.vue';
import { rubles } from '@/plugins/currency';

export default Vue.extend({
  components: {
    LanguageSelector,
  },
  data () {
    return {
      amount: 6234234,
      items: this.$t('search.suggestions'),
      isSearcherOpen: false,
    };
  },
  methods: {
    rubles,
  },
});
</script>

<style lang="scss" scoped>
  .header-bar {
    background-color: black;
  }

  .header-bar button,
  .header-bar .icon,
  .descriptor {
    color: white;
  }

  .searcher {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 55px;
    padding-left: 0;
    padding-right: 0;
    height: 60px;
    width: 600px;
    font-family: "Roboto", Arial, sans-serif;
    color: black;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 2;
  }

  #list-24 {
    padding-left: 10px;
    font-family: "Roboto", Arial, sans-serif;
  }
</style>
