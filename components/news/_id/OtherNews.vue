<template>
  <div>
    <v-row
      justify="space-between"
    >
      <v-col
        cols="auto"
      >
        <h2>
          {{ $t('news.specific_news.other_news') }}
        </h2>
      </v-col>
      <v-col
        cols="auto"
      >
        <v-btn
          text
          nuxt
          exact
          to="/news"
        >
          {{ $t('news.specific_news.see_all') }}
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="item in filteredPosts.slice(0, 4)"
        :key="item.id"
        cols="3"
      >
        <OtherNewsCard
          v-bind="item"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import OtherNewsCard from '@/components/news/_id/OtherNewsCard.vue';

export default Vue.extend({
  components: {
    OtherNewsCard,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      routeParams: this.$route.params,
      filteredPosts: this.posts.filter((post: any) => post.id !== this.$route.params.id),
    };
  },
});
</script>
