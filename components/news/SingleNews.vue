<template>
  <v-card
    flat
    class="mb-5 pl-5 pr-5 pt-3 pb-2"
    style="border-radius: 10px;"
  >
    <v-row>
      <v-col
        cols="4"
        md="4"
        class="card-img-col"
      >
        <v-img
          :src="require('@/assets/images/news/1.png')"
          width="300px"
          style="border-radius: 10px;"
        />
      </v-col>

      <v-col
        cols="8"
        md="8"
      >
        <v-row style="min-height: 155px;">
          <v-col
            class="pa-0"
          >
            <v-card-title class="news-card-title pt-0">
              {{ news.title }}
            </v-card-title>
            <v-card-text class="pb-0">
              {{ news.description }}
            </v-card-text>
          </v-col>
        </v-row>
        <v-row align="end">
          <v-card-text
            class="pb-0"
            style="color: #9da3a6;"
          >
            {{ localeDate() }} <v-icon class="px-1" style="color: inherit;">mdi-circle-small</v-icon> {{ news.author }}
          </v-card-text>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SingleNews',
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      d: new Date(2020, 6, 2, 10),
      options: { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' },
    };
  },
  methods: {
    localeDate () {
      return this.d.toLocaleDateString(undefined, this.options);
    },
  },
});
</script>

<style scoped>
  .news-card-title {
    font-size: 24px;
  }
</style>
