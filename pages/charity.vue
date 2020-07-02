<template>
  <v-container>
    <CharityBanner />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import CharityBanner from '@/components/charity/CharityBanner.vue';

export default Vue.extend({
  components: {
    CharityBanner,
  },
});
</script>

<style scoped>
</style>
