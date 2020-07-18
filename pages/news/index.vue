<template>
  <v-container>
    <v-row class="pt-8 pb-5 px-2">
      <h1>{{ $t('news.title') }}</h1>
      <TagsSlider />
    </v-row>
    <v-row>
      <NewsList />
      <Sadaka />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import TagsSlider from '@/components/news/TagsSlider.vue';
import NewsList from '@/components/news/NewsList.vue';
import Sadaka from '@/components/news/Sadaka.vue';

export default Vue.extend({
  components: {
    Sadaka,
    NewsList,
    TagsSlider,
  },
});
</script>
