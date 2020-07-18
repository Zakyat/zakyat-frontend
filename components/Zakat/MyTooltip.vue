<template>
  <v-tooltip top max-width="400px">
    <template v-slot:activator="{ on }">
      <span class="word" v-on="on">
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

<style lang="scss" scoped>
.word {
  background-color: rgba(224, 246, 224, 1);
  border-radius: 10px;
  padding: 3px;
  padding-right: 0;
}
</style>
