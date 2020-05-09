<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <img :src="slide.src">
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      slides: [
        { src: require('@/assets/images/slideshow.png'), title: 'Пункт приема и раздачи одежды' },
        { src: require('@/assets/images/slideshow.png'), title: 'Пункт приема и раздачи одежды' },
      ],
    };
  },
});
</script>
