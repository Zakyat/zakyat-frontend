<template>
  <v-container>
    <v-row justify="space-between">
      <v-col align-self="center">
        <h1>
          {{ $t('home.partners.title') }}
        </h1>
      </v-col>
      <v-col align-self="center" class="text-right">
        <v-btn
          fab
          x-small
          elevation="2"
          color="white"
          class="mr-5"
          @click="currentPage--"
        >
          <v-icon size="24" color="black">
            mdi-chevron-left
          </v-icon>
        </v-btn>
        <v-btn
          fab
          x-small
          elevation="2"
          color="white"
          @click="currentPage++"
        >
          <v-icon size="24" color="black">
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-carousel v-model="currentPage" hide-delimiters :show-arrows="false" height="350">
      <v-carousel-item v-for="page in Math.ceil(partners.length / perPage)" :key="page">
        <v-row>
          <v-col
            v-for="(partner, j) in partners.slice((page-1)*perPage, (page)*perPage)"
            :key="j"
            class="text-center"
            align-self="center"
            cols="6"
            md="3"
          >
            <img :src="partner.src">
          </v-col>
        </v-row>
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
      currentPage: 0,
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
</style>
