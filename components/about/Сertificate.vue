<template>
  <v-container class="pa-0">
    <v-img
      width="200"
      :src="img"
      @click="overlay = !overlay"
    />
    <p>{{ name }}</p>
    <v-overlay
      :value="overlay"
    >
      <v-row>
        <v-img
          :src="img"
          max-width="500"
        />
      </v-row>
      <v-row class="justify-center">
        <v-btn
          icon
          class="mt-3"
          @click="overlay = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>
    </v-overlay>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Employee',
  props: {
    img: {
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
