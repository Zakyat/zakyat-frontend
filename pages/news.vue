<template>
  <div class="news-container">
    <div style="padding: 0 10%;">
      <v-layout>
        <h1>Новости</h1>
        <TagsSlider />
      </v-layout>
      <v-row
        no-gutters
        class="news-main-content"
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TagsSlider from '~/components/News/TagsSlider.vue';
import NewsList from '~/components/News/NewsList.vue';
import Sadaka from '~/components/News/Sadaka.vue';

export default Vue.extend({
  components: {
    Sadaka,
    NewsList,
    TagsSlider,
  },
});
</script>

<style scoped>
  .news-container {
    background-color: #f2f2f2;
  }
  .news-main-content {
    margin-bottom: 10px;
  }
</style>
