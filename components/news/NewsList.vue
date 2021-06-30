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

export default Vue.extend({
  name: 'NewsList',
  components: {
    NewsCard,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
});
</script>
