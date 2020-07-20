<template>
  <div class="mt-n6">
    <h3 v-if="userLogin" class="mt-12 mb-2">{{ $t('charity.contacts.title') }}</h3>
    <v-row
      v-if="userLogin"
    >
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
        >
        </v-text-field>
        <v-text-field
          :placeholder="$t('charity.contacts.email')"
          rounded
          flat
          outlined
          color="grey"
          hide-details
          dense
          class="mt-3"
        >
        </v-text-field>
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
        >
        </v-text-field>
        <v-text-field
          :placeholder="$t('charity.contacts.phone')"
          rounded
          flat
          outlined
          color="grey"
          hide-details
          dense
          class="mt-3"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row
      justify="space-between"
    >
      <v-col
        cols="12"
        md="auto"
      >
        <v-checkbox
          class="my-0 py-0"
          on-icon="mdi-check-box-outline"
        >
          <label>
            <span name="label" class="black--text">Я принимаю <n-link color="primary" to="/">условия публичной оферты</n-link> и даю согласие на <n-link color="primary" to="/">обработку персональных данных</n-link></span>
          </label>
        </v-checkbox>
      </v-col>
      <v-col
        cols="12"
        md="auto"
      >
        <v-btn
          rounded
          color="primary"
          flat
        >{{ $t('charity.contacts.resumeBtn') }}</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Contacts',
  data () {
    return {
      userLogin: true,
    };
  },
});
</script>
