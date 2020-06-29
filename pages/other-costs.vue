<template>
  <div class="reports grey lighten-5">
    <OtherCostsSubsection />
  </div>
</template>

<script>
import Vue from 'vue';

import OtherCostsSubsection from '@/components/reports/OtherCostsSubsection.vue';

export default Vue.extend({
  components: {
    OtherCostsSubsection,
  },
});
</script>

<style lang="scss" scoped>
  .reports {
    min-height: calc(100vh - 290px);
  }
</style>
