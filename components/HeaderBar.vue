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
    <v-btn text small @click="dialog = !dialog">
      <v-icon color="white" size="20">
        mdi-account-circle
      </v-icon>
      {{ $t('login') }}
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="440"
      class="rounded-lg"
    >
      <div class="button-wrapper white" align="right">
        <img src="@/assets/images/dialog-icons/close.svg" alt="close" @click="dialog = !dialog" class="mt-3 mr-3">
      </div>
      <DialogWrapper />
    </v-dialog>
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
</template>

<script lang="ts">
import Vue from 'vue';
import LanguageSelector from '@/components/LanguageSelector.vue';
import { rubles } from '@/plugins/currency';
import DialogWrapper from '@/components/access/DialogWrapper.vue';

export default Vue.extend({
  components: {
    LanguageSelector,
    DialogWrapper,
  },
  data () {
    return {
      amount: 6234234,
      items: this.$t('search.suggestions'),
      isSearcherOpen: false,
      dialog: false,
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
  margin-top: 65px;
  width: 600px;
  z-index: 2;
}
</style>
