<template>
  <v-container style="padding: 80px 6% 64px; max-width: 100%; background-color: #f2f2f2;">
    <v-row>
      <span class="mx-4">
        {{ $t('links.news') }}
      </span>
      <v-spacer />
      <span>
        <v-btn class="mt-5 black--text" text>
          {{ $t('home.news.all') }}
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </span>
    </v-row>
    <v-layout row>
      <v-flex
        v-for="(item, j) in posts"
        :key="j"
        xs6
        md3
        class="px-2"
      >
        <v-card class="ma-4" rounded flat :to="`news/${item.id}`">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="item.image"
          />
          <v-card-title style="word-break: normal; line-height: 25px; font-weight: bold;">
            {{ item.title }}
          </v-card-title>

          <v-card-text class="text--primary">
            <div class="description" style="line-height: 20px;">
              {{ item.description }}
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  apollo: {
    posts: gql`query{
      posts {
        id,
        title,
        description,
        image,
      }
    }`,
  },
  data () {
    return {
      newsSample: [
        { src: require('@/assets/images/news/1.png'), title: 'Горячие обеды в холодные дни', desc: 'Холода пришли внезапно. Тем больше потребность у бездомных людей в горячем питании. РК «Ту ...' },
        { src: require('@/assets/images/news/2.png'), title: 'Горячие обеды в холодные дни', desc: 'Холода пришли внезапно. Тем больше потребность у бездомных людей в горячем питании. РК «Ту ...' },
        { src: require('@/assets/images/news/3.png'), title: 'Горячие обеды в холодные дни', desc: 'Холода пришли внезапно. Тем больше потребность у бездомных людей в горячем питании. РК «Ту ...' },
        { src: require('@/assets/images/news/4.png'), title: 'Горячие обеды в холодные дни', desc: 'Холода пришли внезапно. Тем больше потребность у бездомных людей в горячем питании. РК «Ту ...' },
      ],
      posts: [],
    };
  },
});
</script>

<style scoped>
span {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
  color: #000;
}

a {
  float: right;
}

.description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 40px;
}
</style>
