<template>
  <v-system-bar dark height="40" >
    <v-spacer />
    <img src="@/assets/images/header/heart_symbol.svg" class="ml-12 mr-3">
    <!-- TODO: make number format with empty spaces. Ex.6234234 as 6 234 234 -->
    {{ $t('collected', [6234234]) }}
    <v-spacer />
    <v-spacer />
    <v-spacer />
    <v-spacer />
    <v-spacer />
    <v-spacer />
    <!-- TODO: replace these v-spacers to correct way  -->
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
    <v-btn text >
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
