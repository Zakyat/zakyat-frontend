<template>
  <v-container style="max-width: 100%; padding: 80px 6% 64px;">
    <v-row>
      <span>{{ $t('home.projects.title') }}</span>
      <v-spacer />
      <span>
        <v-btn class="mt-5 black--text" text to="/projects">
          Узнать подробнее
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </span>
    </v-row>
    <v-layout class="mt-4 wrap" row>
      <v-flex
        v-for="(item, j) in projects"
        :key="j"
        xs12
        sm6
        md4
        lg3
        class="d-flex"
      >
        <v-card class="ma-4 project flex" outlined color="#F2F2F2" :to="`projects/#${item.frontId}`">
          <v-card-title style="word-break: normal; font-size: 22px;">
            {{ item.title }}
          </v-card-title>
          <v-card-text class="text-center" style="position: absolute; bottom: 0;">
            <v-img
              :src="projectsSample[item.frontId-1].src"
              contain
              height="155"
              width="250"
            />

            <!--            <v-card-actions style="position: absolute; bottom: 5px;">-->
            <!--              <v-btn rounded dark color="primary">-->
            <!--                {{ $t('home.projects.help') }}-->
            <!--              </v-btn>-->
            <!--            </v-card-actions>-->
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
    projects: gql` query {
      projects {
        title
        frontId
      }
    }`,
  },
  data () {
    return {
      projectsSample: [
        { title: 'Помощь тяжелобольным детям и взрослым', src: require('@/assets/images/projects/svg/arms.svg') },
        { title: 'Накорми нуждающегося', src: require('@/assets/images/projects/svg/food.svg') },
        { title: 'Пункт приема и раздачи одежды', src: require('@/assets/images/projects/svg/wear.svg') },
        { title: 'Центр помощи «Хаят»', src: require('@/assets/images/projects/svg/people.svg') },
        { title: 'Духовная поддержка', src: require('@/assets/images/projects/svg/book.svg') },
        { title: 'Воспитай Коран-хафиза', src: require('@/assets/images/projects/svg/boy.svg') },
        { title: 'Социальное такси', src: require('@/assets/images/projects/svg/taxi_fond.svg') },
        { title: 'Помоги собраться в школу', src: require('@/assets/images/projects/svg/backpack.svg') },
      ],
      projects: [],
    };
  },
});
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: column;
  border-radius: 10px !important;
  height: 250px;
  width: 270px;
}

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
