<template>
  <v-container>
    <v-row>
      <span>{{ $t('partners') }}
      </span>
    </v-row>
    <v-carousel hide-delimiters>
      <v-carousel-item>
        <v-layout row>
          <v-flex
            v-for="(partner, j) in partners.slice(0,8)"
            :key="j"
            xs6
            md3
          >
            <img
              class="ma-2 pa-4"
              :src="partner.src"
              aspect-ratio="1.5"
            >
          </v-flex>
        </v-layout>
      </v-carousel-item>
      <v-carousel-item>
        <v-layout row>
          <v-flex
            v-for="(partner, j) in partners.slice(9,16)"
            :key="j"
            xs6
            md3
          >
            <img
              class="ma-2 pa-4"
              :src="partner.src"
              aspect-ratio="1.5"
            >
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      partners: [
        { src: '/p1.png' },
        { src: '/p2.png' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2014/09/logo_info_islam.png' },
        { src: '/p3.png' },
        { src: '/p4.png' },
        { src: '/p5.png' },
        { src: '/p6.png' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },

      ],
    };
  },
});
</script>

<style scoped>
span{font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 43px;
color: #000000;
}
</style>
