<template>
  <v-overflow-btn
    :value="$i18n.locale"
    :items="$i18n.locales"
    item-text="shortName"
    item-value="code"
    class="ma-0"
    hide-selected
    hide-details
    dense
    dark
    @input="$i18n.setLocale"
  >
    <template v-slot:item="{ item }">
      {{ item.name }}
    </template>
  </v-overflow-btn>
</template>
