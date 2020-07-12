<template>
  <v-row>
    <v-row
      justify="space-between"
    >
      <v-col
        cols="auto"
      >
        <h2 class="">
          {{ $t('news.specific_news.other_news') }}
        </h2>
      </v-col>
      <v-col
        cols="auto"
      >
        <v-btn
          text
        >
          {{ $t('news.specific_news.see_all') }} <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(item, j) in otherNews"
        :key="j"
        cols="12"
        md="3"
      >
        <v-card
          rounded
          flat
          class="pb-3"
        >
          <v-img
            height="200px"
            :src="item.src"
          />
          <v-card-title>{{ item.title }}</v-card-title>

          <v-card-text class="text--primary description">
            {{ item.desc }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    otherNews: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>
.description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 70px;
}
</style>
