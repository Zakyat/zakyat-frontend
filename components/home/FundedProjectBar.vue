<template>
  <v-container style="padding: 80px 6% 70px; max-width: 100%;">
    <v-row>
      <span class="mx-4 mb-4">
        {{ $t('home.funded_project.title') }}
      </span>
    </v-row>
    <v-row style="min-width: 1000px;">
      <v-col
        v-for="(item, j) in projects"
        :key="j"
        :cols="item.flex"
      >
        <v-card
          rounded
          flat
          solo
          class="funded"
          :style="backgroundImg(item.src)"
        >
          <v-card-title style="word-break: normal;">
            {{ item.title }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      projects: [
        { title: 'Собрали 6 234 234 ₽ для инвалидов за 2019 год ', button: 'Хочу помочь', flex: 6, src: require('@/assets/images/news/tubetey.png') },
        { title: '327 занятий провели с детьми за последний год', button: 'Хочу помочь', flex: 3, src: require('@/assets/images/news/tubetey.png') },
        { title: '653 человека накормили за месяц', button: 'Хочу помочь', flex: 3, src: require('@/assets/images/news/tubetey.png') },
        { title: '234 волонтера присоединились к нам за год', button: 'Хочу помочь', flex: 3, src: require('@/assets/images/news/tubetey.png') },
        { title: '2 345 семьям раздали одежды благодаря вам', button: 'Хочу помочь', flex: 3, src: require('@/assets/images/news/tubetey.png') },
        { title: 'Собрали 456 234 ₽ на лекарства всем нуждающимся за 2019 год ', button: 'Хочу помочь', flex: 6, src: require('@/assets/images/news/tubetey.png') },
      ],
    };
  },

  methods: {
    backgroundImg (img: string) {
      return `background: url(${img}) no-repeat right !important;`;
    },
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

.funded {
  height: 246px;
  background-size: contain;
  zoom: 110%;
}

a {
  float: right;
}
</style>
