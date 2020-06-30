<template>
  <v-col
    cols="12"
    md="9"
    class="news-list-col px-2"
  >
    <SingleNews />
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';
import SingleNews from '~/components/news/SingleNews.vue';
export default Vue.extend({
  name: 'NewsList',
  components: {
    SingleNews,
  },
});
</script>

<style scoped>
.news-card-title {
  font-size: 24px;
}
</style>
