<template>
  <v-card flat>
    <v-img
      style="border-radius: 10px;"
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
      <ol class="pl-4">
        <li v-for="duty in duties" :key="duty" v-text="duty" />
      </ol>
    </v-card-text>
    <v-btn text :href="'tel:' + phone" class="px-1 mt-3">
      <v-icon>mdi-phone</v-icon>&nbsp;{{ phone }}
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

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
      type: Array as PropType<string[]>,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
});
</script>
