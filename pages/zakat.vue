<template>
  <v-container class="grey lighten-5">
    <h1> {{ $t('ZakatPage.title') }} </h1>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        md="8"
      >
        <v-card
          class="pa-2"
          outlined
          tile
          style="border-radius: 10px"
        >
          <ZakatAbout />
          <QuestionList />
        </v-card>
      </v-col>
      <v-col
        cols="6"
        md="4"
      >
        <v-card
          style="border-radius: 10px"
        >
          <ZakatCalculator />
        </v-card>
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
