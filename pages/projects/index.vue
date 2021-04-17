<template>
  <v-layout white>
    <div class="container mt-10">
      <HelpCard :project="projects[0]" />
      <FeedCard :project="projects[1]" />
      <WearCard :project="projects[2]" />
      <HayatCard :project="projects[3]" />
      <SoulCard :project="projects[4]" />
      <HafizCard :project="projects[5]" />
      <TaxiCard :project="projects[6]" />
      <SchoolCard :project="projects[7]" />
    </div>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import HelpCard from '@/components/projects/HelpCard.vue';
import FeedCard from '@/components/projects/FeedCard.vue';
import WearCard from '@/components/projects/WearCard.vue';
import HayatCard from '@/components/projects/HayatCard.vue';
import SoulCard from '@/components/projects/SoulCard.vue';
import HafizCard from '@/components/projects/HafizCard.vue';
import TaxiCard from '@/components/projects/TaxiCard.vue';
import SchoolCard from '@/components/projects/SchoolCard.vue';
import gql from 'graphql-tag';

export default Vue.extend({
  name: 'Index',
  components: {
    SchoolCard,
    TaxiCard,
    HafizCard,
    SoulCard,
    HayatCard,
    WearCard,
    FeedCard,
    HelpCard,
  },
  data () {
    return {
      projects: '',
    };
  },
  apollo: {
    projects: {
      query: gql`
        query {
          projects {
            id
            title
            description
            firstNumber
            secondNumber
          }
        }
      `,
    },
  },
});
</script>
