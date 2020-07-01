<template>
  <div style="background-color: black">
    <v-system-bar dark height="50" class="header_style">
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
        <LanguageSelector class="icon" />
      </v-flex>
      <v-autocomplete
        v-show="isSearcherOpen"
        class="searcher mx-auto"
        :items="items"
        :placeholder="$t('search.placeholder')"
        :no-data-text="$t('search.noDataText')"
        append-icon=""
        height="60"
        light
        solo
        rounded
        shaped
        clearable
      />
    </v-system-bar>
  </div>
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
.header_style {
  padding: 0 5%;
  max-width: 1440px;
  min-width: 1000px;
  margin: 0 auto;
}
.searcher {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 65px;
  width: 600px;
  z-index: 2;
}
</style>
