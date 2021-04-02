<template>
  <v-card flat>
    <v-img
      style="border-radius: 10px;"
      :src="photo"
    />
    <v-card-title class="pa-0 mt-3" style="font-size: 26px;">
      {{ fullName }}
    </v-card-title>
    <v-card-subtitle class="pa-0 mt-1">
      {{ position }}
    </v-card-subtitle>
    <v-card-text class="pa-0 black--text">
      {{ $t('about.employee.duties') }}:
    </v-card-text>
    <v-card-text class="pa-0 black--text" style="width: 80%;">
      <p>{{bio}}</p>
    </v-card-text>
    <v-btn text :href="'tel:' + phoneNumber" class="px-1 mt-3">
      <v-icon>mdi-phone</v-icon>&nbsp;{{ phoneNumber }}
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Employee',
  props: {
    fullName: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
});
</script>
