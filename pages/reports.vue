<template>
  <v-layout
    class="grey lighten-5"
    column
    justify-center
    align-center
  >
    <Reports />
  </v-layout>
</template>

<script>
import Vue from 'vue';

import Reports from '~/components/reports/Reports.vue';

export default Vue.extend({
  components: {
    Reports,
  },
});
</script>
