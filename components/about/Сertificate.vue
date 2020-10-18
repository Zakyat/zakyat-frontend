<template>
  <v-container class="pa-0">
    <v-img
      max-height="200"
      :src="img"
      style="cursor: pointer;"
      position="center top"
      @click="overlay = !overlay"
    />
    <p class="mt-3">
      {{ name }}
    </p>
    <v-overlay :value="overlay">
      <v-row>
        <v-col>
          <v-img
            :src="fullImg"
            max-width="500"
            max-height="100vh"
            contain
          />
        </v-col>
        <v-col>
          <v-btn icon @click="overlay = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-overlay>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Certificate',
  props: {
    fullImg: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      overlay: false,
    };
  },
});
</script>
