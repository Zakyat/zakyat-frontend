<template>
  <v-tooltip top max-width="400px">
    <template v-slot:activator="{ on }">
      <span style="background-color: rgba(224, 246, 224, 1) border: 1px solid rgba(86, 61, 124,.15)" v-on="on">{{ item.word }}</span>
    </template>
    <span>{{ item.description }}</span>
  </v-tooltip>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    item: {},
  },
});
</script>
