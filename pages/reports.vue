<template>
  <v-layout
    class="grey lighten-5"
    column
    justify-center
    align-center
  >
    <ReportBar />
  </v-layout>
</template>

<script>
import Vue from 'vue';

import ReportBar from '@/components/reports/ReportBar.vue';

export default Vue.extend({
  components: {
    ReportBar,
  },
});
</script>
