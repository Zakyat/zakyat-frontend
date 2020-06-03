<template>
  <v-system-bar dark height="50" style="padding: 0 5%;">
    <img src="@/assets/images/heart.svg" class="ml-12 mr-3">
    {{ $t('collected', [rubles(amount)]) }}
    <v-spacer />
    <v-btn text small>
      <v-icon medium>
        mdi-magnify
      </v-icon>
      {{ $t('search') }}
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
    <v-btn text small>
      <v-icon medium>
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
import LanguageSelector from '@/components/LanguageSelector.vue';
import { rubles } from '@/plugins/currency';

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
  },
});
</script>
