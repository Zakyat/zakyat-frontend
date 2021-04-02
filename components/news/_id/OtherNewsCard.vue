<template>
  <v-card
    rounded
    flat
    class="pb-3"
    :to="`${id}`"
  >
    <v-img
      height="200px"
      :src="image"
    />
    <v-card-title>{{ title }}</v-card-title>

    <v-card-text class="text--primary description">
      {{ description }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
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

<style scoped>
  .description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 70px;
  }
</style>
