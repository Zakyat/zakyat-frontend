<template>
  <v-col
    cols="12"
    md="9"
    class="px-2"
  >
    <NewsCard
      v-for="newsItem in posts"
      :key="newsItem.id"
      v-bind="newsItem"
    />
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';
import NewsCard from '@/components/news/NewsCard.vue';

import gql from 'graphql-tag';

export default Vue.extend({
  name: 'NewsList',
  components: {
    NewsCard,
  },
  apollo: {
    posts: gql`query{
      posts {
        id,
        image,
        title,
        description,
        createdAt,
        createdBy {
          bio
        }
      }
    }`,
  },
  data () {
    return {
      posts: [],
    };
  },
});
</script>
