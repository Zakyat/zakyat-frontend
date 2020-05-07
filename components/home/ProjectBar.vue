<template>
  <v-container>
    <v-row>
      <span>{{ $t('links.projects') }}
      </span>
    </v-row>
    <v-layout row>
      <v-flex
        v-for="(item, j) in projects"
        :key="j"
        xs6
        md3
      >
        <v-card class="ma-4" rounded solo color="#F2F2F2" min-height="350">
          <v-card-title>{{ item.title }}</v-card-title>
          <div v-if="item.src">
            <center>
              <img :src="item.src">
            </center>
          </div>
          <div v-else>
            <br><br><br> <br>
          </div>
          <center>
            <v-btn rounded dark color="primary">
              {{ item.button }}
            </v-btn>
            <br>
          </center>
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
        { src: '', title: 'Пункт приема и раздачи одежды', button: 'Хочу помочь' },
        { src: '/pr2.png', title: 'Пункт приема и раздачи одежды', button: 'Хочу помочь' },
        { src: '/pr3.png', title: 'Пункт приема и раздачи одежды', button: 'Хочу помочь' },
        { src: '', title: 'Пункт приема и раздачи одежды', button: 'Хочу помочь' },
        { src: '/pr4.png', title: 'Пункт приема и раздачи одежды', button: 'Хочу помочь' },
        { src: '/pr5.png', title: 'Пункт приема и раздачи одежды', button: 'Хочу помочь' },
        { src: '', title: 'Пункт приема и раздачи одежды', button: 'Хочу помочь' },
        { src: '', title: 'Пункт приема и раздачи одежды', button: 'Хочу помочь' },
      ],
    };
  },
});
</script>
<style scoped>
span {
  font-family: 'Lato';
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
