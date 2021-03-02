<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="9"
      >
        <SpecificNewsCard
          v-bind="post"
        />
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <GreyCard />
      </v-col>
    </v-row>
    <OtherNews
      class="my-10 mx-0"
      :posts="posts"
    />
  </v-container>
</template>

<script>
import Vue from 'vue';
import SpecificNewsCard from '@/components/news/_id/SpecificNewsCard';
import GreyCard from '@/components/news/_id/GreyCard';
import OtherNews from '@/components/news/_id/OtherNews';

import gql from 'graphql-tag';

export default Vue.extend({
  components: {
    SpecificNewsCard,
    GreyCard,
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
              bio
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
