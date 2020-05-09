<template>
  <v-container>
    <h1>
      {{ $t('home.partners.title') }}
    </h1>
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="page in Math.ceil(partners.length / perPage)" :key="page">
        <v-layout row>
          <v-flex
            v-for="(partner, j) in partners.slice((page-1)*perPage, (page)*perPage)"
            :key="j"
            xs6
            md3
          >
            <img
              class="ma-2 pa-4"
              :src="partner.src"
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
        { src: require('@/assets/images/partners/1.svg') },
        { src: require('@/assets/images/partners/2.png') },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2014/09/logo_info_islam.png' },
        { src: require('@/assets/images/partners/3.png') },
        { src: require('@/assets/images/partners/4.png') },
        { src: require('@/assets/images/partners/5.png') },
        { src: require('@/assets/images/partners/6.png') },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
        { src: 'http://zakyatrt.ru/wp-content/uploads/2016/06/1-e1466931484244.jpg' },
      ],
      perPage: 8,
    };
  },
});
</script>

<style scoped>
span {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
  color: #000;
}
</style>
