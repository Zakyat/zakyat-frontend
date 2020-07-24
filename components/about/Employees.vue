<template>
  <v-container class="pa-0">
    <h2>Сотрудники фонда</h2>
    <Employee />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Employee from '@/components/about/Employee.vue';

export default Vue.extend({
  name: 'Employees',
  components: {
    Employee,
  },
});
</script>
