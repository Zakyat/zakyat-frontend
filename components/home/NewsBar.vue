<template>
  <v-container style="padding: 3% 0;">
    <v-row>
      <span class="ma-4">
        {{ $t('links.news') }}
      </span>
    </v-row>
    <v-layout row>
      <v-flex
        v-for="(item, j) in news"
        :key="j"
        xs6
        md3
      >
        <v-card class="ma-4" rounded>
          <v-img
            class="white--text align-end"
            height="200px"
            :src="item.src"
          />
          <v-card-title>{{ item.title }}</v-card-title>

          <v-card-text class="text--primary">
            <div> {{ item.desc }}</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
</style>
