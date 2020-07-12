<template>
  <v-card
    rounded
    flat
    class="pb-3"
  >
    <v-img
      height="200px"
      :src="item.src"
    />
    <v-card-title>{{ item.title }}</v-card-title>

    <v-card-text class="text--primary description">
      {{ item.desc }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    item: {
      type: Object,
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
