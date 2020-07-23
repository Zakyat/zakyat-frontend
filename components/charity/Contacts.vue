<template>
  <div class="mt-n6">
    <h3 v-if="userLogin" class="mt-12 mb-2">
      {{ $t('charity.contacts.title') }}
    </h3>
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
          <template v-slot:label>
            <i18n path="charity.contacts.terms_conditions.text" tag="span" class="black--text">
              <template #terms>
                <nuxt-link to="/" color="primary">
                  {{ $t('charity.contacts.terms_conditions.terms') }}
                </nuxt-link>
              </template>
              <template #data>
                <nuxt-link to="/" color="primary">
                  {{ $t('charity.contacts.terms_conditions.data_processing') }}
                </nuxt-link>
              </template>
            </i18n>
          </template>
        </v-checkbox>
      </v-col>
      <v-col
        cols="12"
        md="auto"
      >
        <v-btn
          rounded
          color="primary"
          text
        >
          {{ $t('charity.contacts.resumeBtn') }}
        </v-btn>
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
