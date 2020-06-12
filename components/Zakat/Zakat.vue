<template>
  <div>
    <h1>Zakat  Page</h1>
    <ZakatAbout/>
     <v-tooltip top>
        <template v-slot:activator="{ on }">
          <span v-on="on">This text has a tooltip</span>
        </template>
        <span>Tooltip</span>
      </v-tooltip>132
    <v-container fluid>
    <v-card max-width="90%" class="d-flex flex-row mb-6">
      <v-card max-width="70%">
        <QuestionList/>
      </v-card>
      <v-card max-width="30%">
        <div>
          <ZakatCalculator/>
        </div>
      </v-card>
    </v-card>
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import QuestionList from '@/components/Zakat/QuestionList.vue';
import ZakatCalculator from '@/components/Zakat/ZakatCalculator.vue'
import ZakatAbout from '@/components/Zakat/ZakatAbout.vue'
export default Vue.extend({
  components: {
    QuestionList,
    ZakatCalculator,
    ZakatAbout
  },
});
</script>
