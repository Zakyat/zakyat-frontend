<template>
  <div class="news-container">
    <div style="padding: 0 5%;">
      <v-row
        no-gutters
      >
        <v-col
          cols="6"
          md="2"
          class="news-list-col"
        >
          <h2>Новости</h2>
        </v-col>
        <v-col
          cols="12"
          md="10"
          class="sadaka-col"
        >
          <Tags />
        </v-col>
      </v-row>
      <v-row
        no-gutters
      >
        <v-col
          cols="12"
          md="8"
          class="news-list-col"
        >
          <NewsList />
        </v-col>
        <v-col
          cols="6"
          md="4"
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
import Tags from '@/components/News/Tags.vue';
import NewsList from '~/components/News/NewsList.vue';
import Sadaka from '~/components/News/Sadaka.vue';

export default Vue.extend({
  components: {
    Sadaka,
    NewsList,
    Tags,

  },
});
</script>

<style scoped>
  .news-container {
    background-color: #f2f2f2;
  }
</style>
