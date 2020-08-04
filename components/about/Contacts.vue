<template>
  <v-container class="pa-0 mt-5">
    <h2>{{ $t('about.contacts') }}</h2>
    <Map
      class="mt-5"
    />
    <p class="mt-5">
      {{ address }}
    </p>

    <v-row>
      <v-col
        cols="auto"
      >
        <p>
          <v-icon class="mr-3 mt-n1">
            mdi-email
          </v-icon>
          {{ email }}
        </p>
      </v-col>
      <v-col
        cols="auto"
        class="ml-5"
      >
        <p>
          <v-icon class="mr-3">
            mdi-phone
          </v-icon>
          {{ phone }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Map from '@/components/about/Map.vue';

export default Vue.extend({
  name: 'Employee',
  components: {
    Map,
  },
  data () {
    return {
      address: 'Мы находимся по адресу: г. Казань, ул. Габдуллы Тукая, 89/14',
      email: 'fondzakyat@yandex.ru',
      phone: '8 (843) 225-33-22',
    };
  },
});
</script>
