<template>
  <v-system-bar dark height="40">
    <img src="@/assets/images/heart.svg" class="ml-12 mr-3">
    {{ $t('collected', [6234234]) }}
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
    <v-flex md2 xs6>
      <v-overflow-btn
        :value="$i18n.locale"
        :items="$i18n.locales"
        item-text="name"
        item-value="code"
        hide-selected
        dense
        @input="$i18n.setLocale"
      />
    </v-flex>
  </v-system-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>
