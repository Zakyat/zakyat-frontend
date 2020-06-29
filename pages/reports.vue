<template>
  <div class="reports grey lighten-5">
    <FeesSection />
  </div>
</template>

<script>
import Vue from 'vue';

import FeesSection from '@/components/reports/FeesSection.vue';

export default Vue.extend({
  components: {
    FeesSection,
  },
});
</script>

<style lang="scss" scoped>
  .reports {
    min-height: calc(100vh - 290px);
  }
</style>
