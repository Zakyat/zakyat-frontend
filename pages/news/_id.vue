<template>
  <v-container>
    <v-row
    >
      <v-col
        cols="12"
        md="9"
      >
        <SpecificNewsCard
          :id="this.$route.params.id"
        />
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
import SpecificNewsCard from '~/components/aboutNews/SpecificNewsCard';
import GreyCard from '~/components/aboutNews/GreyCard';
import OtherNews from '~/components/aboutNews/OtherNews';

export default Vue.extend({
  components: {
    SpecificNewsCard,
    GreyCard,
    OtherNews,
  },
});
</script>
