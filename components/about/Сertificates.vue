<template>
  <v-container class="pa-0 mt-10">
    <h2>
      {{ $t('about.certificates') }}
    </h2>

    <v-row class="mt-3">
      <v-col
        v-for="certificate in certificates"
        :key="certificate.name"
        cols="12"
        md="4"
      >
        <Certificate v-bind="certificate" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Certificate from '@/components/about/Сertificate.vue';

export default Vue.extend({
  name: 'Certificates',
  components: {
    Certificate,
  },
  props: {
    certificates: {
      type: Array,
      required: true,
    },
  },
});
</script>
