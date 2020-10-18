<template>
  <v-container class="pa-0">
    <h2>{{ $t('about.employees') }}</h2>
    <v-row class="mt-5">
      <v-col
        v-for="employee in employees"
        :key="employee.id"
        cols="12"
        md="6"
      >
        <Employee v-bind="employee" />
      </v-col>
    </v-row>
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
  props: {
    employees: {
      type: Array,
      required: true,
    },
  },
});
</script>
