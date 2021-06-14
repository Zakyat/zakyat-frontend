<template>
  <v-container class="mt-5">
    <v-row>
      <SpecificNewsCard
        v-if="post"
        v-bind="post"
      />
    </v-row>
    <OtherNews
      class="my-10 mx-0"
      v-if="posts"
      :posts="posts"
    />
  </v-container>
</template>

<script lang="js">
import Vue from 'vue';
import SpecificNewsCard from '@/components/news/_id/SpecificNewsCard.vue';
import OtherNews from '@/components/news/_id/OtherNews.vue';

import gql from 'graphql-tag';

export default Vue.extend({
  head: {
    title: 'Новость | Благотворительный фонд "Закят"',
  },
  components: {
    SpecificNewsCard,
    OtherNews,
  },
  data () {
    return {
      routeParams: this.$route.params,
      post: '',
      posts: [],
    };
  },
  apollo: {
    post: {
      query: gql`
        query getPost($id:ID!) {
          post (
            id: $id,
          ) {
            id,
            image,
            title,
            description,
            createdAt,
            createdBy {
              fullName
            },
            tags {
              id,
              name
            }
          }
        }
      `,
      variables () {
        return { id: this.routeParams.id };
      },
    },
    posts: gql`
      query {
        posts {
          id
          image
          title
          description
        }
      }
    `,
  },
});
</script>
