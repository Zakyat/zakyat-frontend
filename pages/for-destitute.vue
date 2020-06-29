<template>
  <div class="reports grey lighten-5">
    <ForDestituteSubsection />
  </div>
</template>

<script>
import Vue from 'vue';

import ForDestituteSubsection from '@/components/reports/ForDestituteSubsection.vue';

export default Vue.extend({
  components: {
    ForDestituteSubsection,
  },
});
</script>

<style lang="scss" scoped>
  .reports {
    min-height: calc(100vh - 290px);
  }
</style>
