<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-text-field
        :placeholder="$t('charity.contacts.name')"
        rounded
        flat
        outlined
        color="grey"
        hide-details
        dense
      />
      <v-text-field
        :placeholder="$t('charity.contacts.email')"
        rounded
        flat
        outlined
        color="grey"
        hide-details
        dense
        class="mt-3"
      />
    </v-col>
    <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          :placeholder="$t('charity.contacts.lastName')"
          rounded
          flat
          outlined
          color="grey"
          dense
          hide-details
        />
        <v-text-field
          :placeholder="$t('charity.contacts.phone')"
          rounded
          flat
          outlined
          color="grey"
          hide-details
          dense
          class="mt-3"
        />
      </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Contacts',
});
</script>
