<template>
  <Swiper :options="swiperOptions">
    <SwiperSlide
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-img :src="slide.src" />
    </SwiperSlide>
    <v-btn slot="button-prev" class="swiper-button-prev" fab>
      <v-icon x-large>
        mdi-chevron-left
      </v-icon>
    </v-btn>
    <v-btn slot="button-next" class="swiper-button-next" fab>
      <v-icon x-large>
        mdi-chevron-right
      </v-icon>
    </v-btn>
  </Swiper>
</template>

<script lang="ts">
import Vue from 'vue';

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { SwiperOptions } from 'swiper';
import 'swiper/css/swiper.css';

export default Vue.extend({
  components: {
    Swiper,
    SwiperSlide,
  },
  data () {
    return {
      slides: [
        { src: require('@/assets/images/slideshow1.jpg') },
        { src: require('@/assets/images/slideshow2.jpg') },
      ],
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      } as SwiperOptions,
    };
  },
});
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 88%;
  min-height: 200px;
  padding: 0px 5%;
  .swiper-slide {
    width: 75%;
    padding: 20px 0;
  }
  .swiper-button-prev, .swiper-button-next {
    font-size: 2em;
    font-weight: bold;
    &::after {
      display: none;
    }
  }
}
</style>
