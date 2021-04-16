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
        dense
        :rules="rules.name"
        required
      />
      <v-text-field
        :placeholder="$t('charity.contacts.email')"
        v-model="email"
        rounded
        flat
        outlined
        color="grey"
        dense
        required
        :rules="rules.email"
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
          required
          :rules="rules.lastName"
        />
        <v-text-field
          :placeholder="$t('charity.contacts.phone')"
          v-model="phone"
          :onchange="userData()"
          rounded
          flat
          outlined
          color="grey"
          dense
          required
          :rules="rules.phone"
          class="mt-3"
        />
      </v-col>
  </v-row>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'Contacts',
  data () {
    return {
      name: '',
      lastName: '',
      email: '',
      phone: '',

      rules: {
        name: [val => (val || '').length > 0 || 'Заполните это поле'],
        lastName: [val => (val || '').length > 0 || 'Заполните это поле'],
        email: [val => (val || '').length > 0 || 'Заполните это поле'],
        phone: [val => (val || '').length > 0 || 'Заполните это поле'],
      },
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
