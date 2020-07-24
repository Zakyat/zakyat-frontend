<template>
  <v-container>
    <v-card
      flat
      rounded
      color="white"
      class="pa-7"
    >
      <v-row>
        <v-col>
          <h2>
            {{ $t('about.foundation_tasks') }}
          </h2>
          <p class="pt-3">
            {{ $t('about.foundation_about_text') }}
          </p>
        </v-col>
        <v-col>
          <v-img
            rounded
            class="main-img"
            :src="require('@/assets/images/about/102113 1.png')"
          />
        </v-col>
      </v-row>
      <Employees />
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Employees from '@/components/about/Employees.vue';

export default Vue.extend({
  layout: 'grey',
  components: {
    Employees,
  },
});
</script>

<style scoped>
.main-img {
  border-radius: 10px;
}
</style>
