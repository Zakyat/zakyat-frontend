<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="9"
      >
        <SpecificNewsCard />
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <GreyCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';
import SpecificNewsCard from '~/components/news/aboutNews/SpecificNewsCard';
import GreyCard from '~/components/news/aboutNews/GreyCard';

export default Vue.extend({
  components: {
    SpecificNewsCard,
    GreyCard,
  },
});
</script>

<style scoped>

</style>
