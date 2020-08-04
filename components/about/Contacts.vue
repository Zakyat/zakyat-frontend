<template>
  <v-container class="pa-0 mt-5">
    <h2>Контакты</h2>
    <Map
      class="mt-5"
    />
    <p class="mt-5">
      Мы находимся по адресу: г. Казань, ул. Габдуллы Тукая, 89/14
    </p>

    <v-row>
      <v-col
        cols="auto"
      >
        <p><v-icon>mdi-email</v-icon> fondzakyat@yandex.ru</p>
      </v-col>
      <v-col
        cols="auto"
        class="ml-5"
      >
        <p><v-icon>mdi-phone</v-icon> 8 (843) 225-33-22</p>
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
});
</script>
