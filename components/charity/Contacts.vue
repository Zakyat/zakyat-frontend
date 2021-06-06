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
        :onchange="userData()"
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
          :onchange="userData()"
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
          class="mt-3"
          required
          :rules="rules.phone"
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
        email: [val => ((val || '').length > 0 && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(val || ''))) || 'Проверьте правильность заполнения этого поля'],
        phone: [val => ((val || '').length > 0 && /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(String(val || ''))) || 'Проверьте правильность заполнения этого поля'],
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
