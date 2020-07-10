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
      >
        <v-card class="ma-4 project" outlined color="#F2F2F2" min-height="350">
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text class="text-center">
            <img v-if="item.src" :src="item.src" style="max-width: 100%;">
          </v-card-text>
          <v-spacer />
          <v-card-actions style="padding: 15px;">
            <v-btn rounded dark color="primary">
              {{ $t('home.projects.help') }}
            </v-btn>
          </v-card-actions>
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
        { title: 'Пункт приема и раздачи одежды' },
        { title: 'Пункт приема и раздачи одежды', src: require('@/assets/images/projects/2.png') },
        { title: 'Пункт приема и раздачи одежды', src: require('@/assets/images/projects/3.png') },
        { title: 'Пункт приема и раздачи одежды' },
        { title: 'Пункт приема и раздачи одежды', src: require('@/assets/images/projects/4.png') },
        { title: 'Пункт приема и раздачи одежды', src: require('@/assets/images/projects/5.png') },
        { title: 'Пункт приема и раздачи одежды' },
        { title: 'Пункт приема и раздачи одежды' },
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
