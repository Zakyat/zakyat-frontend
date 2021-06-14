<template>
  <v-container class="zakat-container" fluid>
    <h1 class="mb-5">{{ $t('zakat.title') }}</h1>
    <v-row>
      <v-col
        cols="12"
        md="9"
        class="pt-2"
      >
        <ZakatAbout />
        <QuestionList />
      </v-col>
      <v-col
        cols="12"
        md="3"
        class="pt-2 mb-5"
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
  head: {
    title: 'Закят | Благотворительный фонд "Закят"',
  },
});
</script>

<style lang="scss" scoped>
.zakat-container {
  background-color: #f2f2f2;
  padding: 2% 6%;
}
</style>
