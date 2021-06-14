<template>
  <v-layout white>
    <div class="container mt-10" v-if="projects">
      <HelpCard :id="projects[0].frontId" :project="projects[0]" />
      <FeedCard :id="projects[1].frontId" :project="projects[1]" />
      <WearCard :id="projects[2].frontId" :project="projects[2]" />
      <HayatCard :id="projects[3].frontId" :project="projects[3]" />
      <SoulCard :id="projects[4].frontId" :project="projects[4]" />
      <HafizCard :id="projects[5].frontId" :project="projects[5]" />
      <TaxiCard :id="projects[6].frontId" :project="projects[6]" />
      <SchoolCard :id="projects[7].frontId" :project="projects[7]" />
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
  head: {
    title: 'Проекты | Благотворительный фонд "Закят"',
  },
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
            frontId
          }
        }
      `,
    },
  },
});
</script>
