<template>
  <v-col
    cols="12"
    md="9"
    class="px-2"
  >
    <NewsCard
      v-for="newsItem in posts"
      :key="newsItem.id"
      v-bind="newsItem"
    />
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';
import NewsCard from '@/components/news/NewsCard.vue';

import gql from 'graphql-tag';

export default Vue.extend({
  name: 'NewsList',
  components: {
    NewsCard,
  },
  apollo: {
    posts: gql`query{
      posts {
        id,
        title,
        description,
        createdAt,
        createdBy {
          bio
        }
      }
    }`
  },
  data () {
    return {
      news: [
        {
          id: 1,
          title: 'Вкусности для бездомных',
          content: 'Какие же настали морозные дни в нашей Казани. Особенно это чувствуют бездомные люди. Не всегда удается найти теплый ночлег. Единственным спасением становятся горячие бесплатные обеды. Добрый фудтрак и сотрудники «Закята» были встречены в сквере на Б.Шахиди с большой радостью в глазах.',
          date: new Date(),
          author: 'Майя Бурганова',
        },
        {
          id: 2,
          title: 'Назер — курбан для малоимущих',
          content: 'В фонд «Закят» принесли мясо барана назер-курбана. Сотрудники Закята распределили его подопечным семьям фонда «Закята». Среди благополучателей — многодетные матери, малоимущие, одинокие старики. Все подопечные благодарят за мясную продукцию и воздают дуа за благотворителей. Пусть Аллах одарит их барактом и дарует Рай. Амин.',
          date: new Date(),
          author: 'Ринат Гарипов',
        },
      ],
      posts: [],
    };
  },
});
</script>
