<template>
  <v-container class="grey lighten-4">
    <h1> {{ $t('zakat.title') }} </h1>
    <v-row no-gutters>
      <v-col
        md="8"
      >
        <ZakatAbout />
        <QuestionList />
      </v-col>
      <v-col
        md="4"
      >
        <ZakatCalculator />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import QuestionList from '@/components/Zakat/QuestionList.vue';
import ZakatCalculator from '@/components/Zakat/ZakatCalculator.vue';
import ZakatAbout from '@/components/Zakat/ZakatAbout.vue';

export default Vue.extend({
  components: {
    QuestionList,
    ZakatCalculator,
    ZakatAbout,
  },
});
</script>
