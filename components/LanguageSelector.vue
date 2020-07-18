<template>
  <v-overflow-btn
    :value="$i18n.locale"
    :items="$i18n.locales"
    item-text="shortName"
    item-value="code"
    class="ma-0"
    hide-selected
    hide-details
    return-object
    dense
    dark
    @input="setLocale"
  >
    <template v-slot:item="{ item }">
      {{ item.name }}
    </template>
  </v-overflow-btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { NuxtVueI18n } from 'nuxt-i18n';

export default Vue.extend({
  methods: {
    setLocale (locale: NuxtVueI18n.Options.LocaleObject) {
      this.$i18n.setLocale(locale.code);
      this.$vuetify.rtl = locale.rtl;
      // TODO: enable after translating the missing Vuetify keys
      // this.$vuetify.lang.current = locale.code;
    },
  },
});
</script>
