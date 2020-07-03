<template>
  <v-container>
    <CharityBanner />
    <h1 class="mt-12">
      {{ $t('charity.title') }}
    </h1>
    <GatheringSelection />
    <Contacts/>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import CharityBanner from '@/components/charity/CharityBanner.vue';
import GatheringSelection from '@/components/charity/GatheringSelection.vue';
import Contacts from '~/components/charity/Contacts.vue';

export default Vue.extend({
  components: {
    CharityBanner,
    GatheringSelection,
    Contacts,
  },
});
</script>

<style scoped>
</style>
