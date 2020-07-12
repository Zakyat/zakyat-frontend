<template>
  <v-card
    flat
    class="pa-5"
  >
    <v-img
      :src="require('@/assets/images/news/1.png')"
      height="300px"
      style="border-radius: 10px;"
    />
    <h1
      class="pa-0 mt-5"
    >
      {{ specificNews.title }}
    </h1>
    <p class="mt-3 mb-2 news-content">
      {{ specificNews.content }}
    </p>
    <v-card-text
      class="pa-0 mb-5"
      style="color: #9da3a6;"
    >
      {{ localeDate }}
      <v-icon class="px-1" style="color: inherit;">
        mdi-circle-small
      </v-icon>
      {{ specificNews.author }}
    </v-card-text>
    <v-row
      style="width: 80%;"
    >
      <v-col
        v-for="tag in specificNews.tags"
        :key="tag"
        cols="auto"
        class="py-0"
      >
        <v-card-text
          class="pa-0"
          style="color: #00ac00;"
        >
          {{ tag }}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    specificNews: {
      type: Object,
      required: true,
    },
  },
  computed: {
    localeDate (): string {
      return this.specificNews.date.toLocaleDateString(this.$i18n.locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    },
  },
});
</script>

<style scoped>
.news-content {
  white-space: pre-wrap;
}
</style>
