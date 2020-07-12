<template>
  <v-container style="padding: 4% 0;">
    <v-row>
      <span class="mx-4 mb-4">
        {{ $t('home.funded_project.title') }}
      </span>
    </v-row>
    <v-layout row>
      <v-col
        v-for="(item, j) in projects"
        :key="j"
        :cols="item.flex"
      >
        <v-card rounded outlined solo color="#F2F2F2" height="250px">
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text v-if="item.src">
            <v-img :src="item.src" contain height="155" style="position:absolute; right:0;" />
          </v-card-text>
          <v-card-actions>
            <v-btn rounded dark color="primary" class="mx-4" style="position:absolute; bottom:15px;">
              {{ item.button }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      projects: [
        { title: 'Собрали 6 234 234 ₽ для инвалидов за 2019 год ', button: 'Хочу помочь', flex: 6, src: require('@/assets/images/projects/funded/3.png') },
        { title: '327 занятий провели с детьми за последний год', button: 'Хочу помочь', flex: 3 },
        { title: '653 человека накормили за месяц', button: 'Хочу помочь', flex: 3, src: require('@/assets/images/projects/funded/1.png') },
        { title: '234 волонтера присоединились к нам за год', button: 'Хочу помочь', flex: 3 },
        { title: '2 345 семьям раздали одежды благодаря вам', button: 'Хочу помочь', flex: 3 },
        { title: 'Собрали 456 234 ₽ на лекарства всем нуждающимся за 2019 год ', button: 'Хочу помочь', flex: 6, src: require('@/assets/images/projects/funded/2.png') },
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
