<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-text-field
        :placeholder="$t('charity.contacts.name')"
        v-model="name"
        onchange="userData()"
        rounded
        flat
        outlined
        color="grey"
        hide-details
        dense
      />
      <v-text-field
        :placeholder="$t('charity.contacts.email')"
        v-model="email"
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
          v-model="lastName"
          rounded
          flat
          outlined
          color="grey"
          dense
          hide-details
        />
        <v-text-field
          :placeholder="$t('charity.contacts.phone')"
          v-model="phone"
          :onchange="userData()"
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
  data () {
    return {
      name: '',
      lastName: '',
      email: '',
      phone: '',
    };
  },
  methods: {
    userData () {
      const user = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,

      };
      this.$emit('user', user);
    },
  },
});
</script>
