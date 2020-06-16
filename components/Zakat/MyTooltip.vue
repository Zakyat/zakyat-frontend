<template>
  <v-tooltip top max-width="400px">
    <template v-slot:activator="{ on }">
      <span style="background-color: rgba(224, 246, 224, 1) border: 1px solid rgba(86, 61, 124,.15)" v-on="on">
        {{ word }}
      </span>
    </template>
    <span>{{ description }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    word: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>
