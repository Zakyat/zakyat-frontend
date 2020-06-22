<template>
  <div class="reports grey lighten-5">
    <Reports />
  </div>
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

<style lang="scss" scoped>
  .reports {
    min-height: calc(100vh - 290px);
  }
</style>
