<template>
  <v-container class="pa-0 mt-5">
    <h2>{{ $t('about.contacts') }}</h2>

    <Map class="mt-5" />

    <p class="mt-5">
      {{ address }}
    </p>

    <v-row>
      <v-col cols="auto">
        <v-btn class="px-0" text :href="'mailto:' + email">
          <v-icon class="mr-3 mt-n1">
            mdi-email
          </v-icon>&nbsp;
          {{ email }}
        </v-btn>
      </v-col>
      <v-col cols="auto" class="ml-5">
        <v-btn class="px-0" text :href="'tel:' + phone">
          <v-icon class="mr-3">
            mdi-phone
          </v-icon>&nbsp;
          {{ phone }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Map from '@/components/about/Map.vue';

export default Vue.extend({
  name: 'Contacts',
  components: {
    Map,
  },
  data () {
    return {
      address: this.$t('about.address'),
      email: 'fondzakyat@yandex.ru',
      phone: '8 (843) 225-33-22',
    };
  },
});
</script>
