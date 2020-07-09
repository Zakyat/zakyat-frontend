<template>
  <v-row>
    <v-row
      justify="space-between"
    >
      <v-col
        cols="auto"
      >
        <h2 class="">
          {{ $t('about_news.other_news') }}
        </h2>
      </v-col>
      <v-col
        cols="auto"
      >
        <v-btn
          text
        >
          {{ $t('about_news.see_all') }} <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row
    >
      <v-col
        v-for="(item, j) in news"
        :key="j"
        cols="12"
        md="3"
      >
        <v-card
          rounded
          flat
          style="border-radius: 10px;"
        >
          <v-img
            height="200px"
            :src="item.src"
          />
          <v-card-title>{{ item.title }}</v-card-title>

          <v-card-text class="text--primary">
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
  data () {
    return {
      news: [
        { src: require('@/assets/images/news/1.png'), title: 'Горячие обеды в холодные дни', desc: 'Холода пришли внезапно. Тем больше потребность у бездомных людей в горячем питании. РК «Ту ...' },
        { src: require('@/assets/images/news/2.png'), title: 'Горячие обеды в холодные дни', desc: 'Холода пришли внезапно. Тем больше потребность у бездомных людей в горячем питании. РК «Ту ...' },
        { src: require('@/assets/images/news/3.png'), title: 'Горячие обеды в холодные дни', desc: 'Холода пришли внезапно. Тем больше потребность у бездомных людей в горячем питании. РК «Ту ...' },
        { src: require('@/assets/images/news/4.png'), title: 'Горячие обеды в холодные дни', desc: 'Холода пришли внезапно. Тем больше потребность у бездомных людей в горячем питании. РК «Ту ...' },
      ],
    };
  },
});
</script>

<style scoped>
</style>
