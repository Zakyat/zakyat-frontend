<template>
  <v-layout class="zakat-container" column>
    <h1>{{ $t('zakat.title') }}</h1>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="8"
        class="pt-2 pr-2"
      >
        <ZakatAbout />
        <QuestionList />
      </v-col>
      <v-col
        cols="6"
        md="4"
        class="pt-2 pl-5"
      >
        <ZakatCalculator />
      </v-col>
    </v-row>
  </v-layout>
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

<style lang="scss" scoped>
.zakat-container {
  background-color: #f2f2f2;
  width: 100%;
  padding: 2% 6%;
  }
</style>
