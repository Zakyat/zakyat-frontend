<template>
  <v-container>
    <v-row
    >
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
    <OtherNews class="mt-10 mx-0 mb-10" />
  </v-container>
</template>

<script>
import Vue from 'vue';
import SpecificNewsCard from '~/components/news/aboutNews/SpecificNewsCard';
import GreyCard from '~/components/news/aboutNews/GreyCard';
import OtherNews from '~/components/news/aboutNews/OtherNews';

export default Vue.extend({
  components: {
    SpecificNewsCard,
    GreyCard,
    OtherNews,
  },
});
</script>

<style scoped>

</style>
