<template>
  <div class="news-background">
    <v-container>
      <v-layout class="pt-8 pb-5">
        <h1>Новости</h1>
        <TagsSlider />
      </v-layout>
      <v-row
        no-gutters
      >
        <v-col
          cols="12"
          md="9"
          class="news-list-col"
        >
          <NewsList />
        </v-col>
        <v-col
          cols="6"
          md="3"
          class="sadaka-col"
        >
          <Sadaka />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TagsSlider from '~/components/news/TagsSlider.vue';
import NewsList from '~/components/news/NewsList.vue';
import Sadaka from '~/components/news/Sadaka.vue';

export default Vue.extend({
  components: {
    Sadaka,
    NewsList,
    TagsSlider,
  },
});
</script>

<style scoped>
.news-background {
  background-color: #f2f2f2;
}
</style>
