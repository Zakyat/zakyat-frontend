<template>
  <Swiper :options="swiperOptions">
    <SwiperSlide
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-img :src="slide.src" class="background">
        <v-card class="overlay" flat>
          <v-row>
            <v-col cols="8">
              <v-card-title class="pb-0">
                {{ slide.title }}
              </v-card-title>
              <v-card-text>
                {{ slide.description }}
                <v-row justify="space-between">
                  <v-col class="pb-1">
                    <p class="subtitle">
                      {{ $t('home.slideshow.collected') }}
                    </p>
                    <p class="font-weight-bold mb-0">
                      {{ slide.collected | rubles }}
                    </p>
                  </v-col>
                  <v-spacer />
                  <v-col class="pb-1">
                    <p class="subtitle">
                      {{ $t('home.slideshow.remaining') }}
                    </p>
                    <p class="font-weight-bold mb-0">
                      {{ slide.required - slide.collected | rubles }}
                    </p>
                  </v-col>
                  <v-spacer />
                  <v-col class="pb-1 text-right">
                    <p class="subtitle">
                      {{ $t('home.slideshow.required') }}
                    </p>
                    <p class="font-weight-bold mb-0">
                      {{ slide.required | rubles }}
                    </p>
                  </v-col>
                </v-row>
                <v-progress-linear
                  height="5"
                  rounded
                  background-color="#DADADA"
                  :value="100*slide.collected/slide.required"
                />
              </v-card-text>
            </v-col>
            <v-col cols="3">
              <v-row justify="end">
                <v-col cols="auto">
                  <v-progress-circular
                    rotate="-90"
                    color="primary"
                    background-color="#DADADA"
                    size="60"
                    class="font-weight-bold title"
                    :value="100*slide.collected/slide.required"
                  >
                    {{ Math.floor(100 * slide.collected / slide.required) }}%
                  </v-progress-circular>
                </v-col>
              </v-row>
              <v-row justify="end">
                <v-col cols="auto">
                  <v-btn rounded depressed color="primary">
                    {{ $t('home.slideshow.donate') }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-img>
    </SwiperSlide>
    <SwiperSlide class="parrentSlide">
      <v-container class="linkContainer">
        <nuxt-link to="/gatherings" class="showMore">
          Посмотреть все <img src="@/assets/images/gatherings/arrow-point-to-right 1.svg" alt="go-to">
        </nuxt-link>
      </v-container>
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
        {
          src: require('@/assets/images/slideshow1.jpg'),
          title: 'Бурганова Альфия, 16 лет',
          description: 'Идиопатический прогрессирующий сколиоз 4-й степени, спасет операция',
          required: 500_500,
          collected: 65_065,
        },
        {
          src: require('@/assets/images/slideshow2.jpg'),
          title: 'Садыков Амирхан, 11 лет',
          description: 'ДЦП',
          required: 500_500,
          collected: 335_065,
        },
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

  .swiper-slide {
    width: 75%;
    padding: 30px 0 80px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    font-size: 2em;
    font-weight: bold;

    &::after {
      display: none;
    }
  }
}

.overlay {
  margin: 25px;
  position: absolute;
  bottom: 0;
  width: calc(100% - 50px);
}

.background {
  border-radius: $card-border-radius;
}

.subtitle {
  margin-bottom: 0;
  color: #9da3a6;
}

.parrentSlide {
  width: 40% !important;
}

.linkContainer {
  height: 440px;
  display: grid;
  place-items: center;
}

.showMore {
  padding-top: 70px;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 400;
  color: #161414;
}
</style>
