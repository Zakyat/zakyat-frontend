<template>
  <v-system-bar dark height="50" style="padding: 0 5%;">
    <img src="@/assets/images/heart.svg" class="ml-4 mr-3">
    <span class="white--text">{{ $t('collected', [rubles(amount)]) }}</span>
    <v-spacer />
    <v-btn text small @click="isSearcherOpen = !isSearcherOpen">
      <v-icon color="white" size="20">
        mdi-magnify
      </v-icon>
      {{ $t('search.buttonName') }}
    </v-btn>
    <v-btn text small>
      <v-icon color="white" size="20">
        mdi-vk
      </v-icon>
      {{ $t('VK') }}
    </v-btn>
    <v-btn text small>
      <v-icon color="white" size="20">
        mdi-instagram
      </v-icon>
      {{ $t('instagram') }}
    </v-btn>
    <v-btn text small>
      <v-icon color="white" size="20">
        mdi-account-circle
      </v-icon>
      {{ $t('login') }}
    </v-btn>
    <v-flex lg1 md2 xs4>
      <LanguageSelector />
    </v-flex>
    <v-autocomplete
      v-show="isSearcherOpen"
      class="searcher mx-auto"
      :items="items"
      :placeholder="$t('search.placeholder')"
      :no-data-text="$t('search.noDataText')"
      append-icon=""
      height="60"
      autofocus
      light
      solo
      rounded
      shaped
      clearable
    />
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
.searcher {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 70px;
  width: 600px;
  z-index: 2;
}
</style>
