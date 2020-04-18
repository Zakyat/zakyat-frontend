<template>
  <v-app>
    <HeaderBar />
    <NavBar />
    <v-divider />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer fixed app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import HeaderBar from '@/components/HeaderBar.vue';
import NavBar from '@/components/NavBar.vue';

export default Vue.extend({
  components: {
    HeaderBar,
    NavBar,
  },
});
</script>
