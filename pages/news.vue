<template>
  <div class="news-background">
    <v-container>
      <v-row class="pt-8 pb-5 px-2">
        <h1>Новости</h1>
        <TagsSlider />
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="9"
          class="news-list-col px-2"
        >
          <NewsList />
        </v-col>
        <v-col
          cols="6"
          md="3"
          class="sadaka-col px-2"
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
