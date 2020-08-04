<template>
  <v-card
    flat
  >
    <v-img
      rounded
      class="main-img"
      :src="img"
    />
    <v-card-title class="pa-0 mt-3" style="font-size: 26px;">
      {{ name }}
    </v-card-title>
    <v-card-subtitle class="pa-0 mt-1">
      {{ position }}
    </v-card-subtitle>
    <v-card-text class="pa-0 black--text">
      {{ $t('about.employee.duties') }}:
    </v-card-text>
    <v-card-text class="pa-0 black--text" style="width: 80%;">
      {{ duties }}
    </v-card-text>
    <v-card-text class="pa-0 mt-3 black--text">
      <v-icon>mdi-phone</v-icon> {{ phone }}
    </v-card-text>
  </v-card>
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
    position: {
      type: String,
      required: true,
    },
    duties: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.main-img {
  border-radius: 10px !important;
}
</style>
