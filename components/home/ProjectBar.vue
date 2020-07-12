<template>
  <v-container style="padding: 5% 0px;">
    <span>{{ $t('home.projects.title') }}</span>
    <v-layout class="mt-4" row>
      <v-flex
        v-for="(item, j) in projects"
        :key="j"
        xs12
        sm6
        md4
        lg3
        class="d-flex"
      >
        <v-card class="ma-4 project flex" outlined color="#F2F2F2">
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-text class="text-center" style="position:absolute; bottom:0;">
            <v-img
              v-if="item.src"
              :src="item.src"
              contain
              height="155"
              width="250"
            />

            <v-card-actions style="position:absolute; bottom:5px;">
              <v-btn rounded dark color="primary">
                {{ $t('home.projects.help') }}
              </v-btn>
            </v-card-actions>
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
      projects: [
        { title: 'Пункт приема и раздачи одежды', src: require('@/assets/images/projects/2.png') },
        { title: 'Центр помощи', src: require('@/assets/images/projects/2.png') },
        { title: 'Пункт приема и раздачи одежды', src: require('@/assets/images/projects/3.png') },
        { title: 'Работа с нуждающимися', src: require('@/assets/images/projects/2.png') },
        { title: 'Духовная поддержка', src: require('@/assets/images/projects/4.png') },
        { title: 'Пункт приема и раздачи одежды', src: require('@/assets/images/projects/5.png') },
        { title: 'Стать волонтером', src: require('@/assets/images/projects/2.png') },
        { title: 'Пункт приема и раздачи одежды', src: require('@/assets/images/projects/2.png') },
      ],
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
