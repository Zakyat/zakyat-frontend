<template>
  <v-card
    flat
    color="#f2f2f2"
    class="project-card mb-5"
  >
    <v-row>
      <v-col
        cols="9"
        class="pb-0"
      >
        <h2 class="title mb-5">
          {{ project.title }}
        </h2>

        <div>
          <p class="description">
            Мы организуем сбор одежды, обуви, игрушек и предметов быта для малоимущих. В наш пункт выдачи приходят самые разные люди — многодетные матери, рабочие из стран ближнего зарубежья, люди, оказывающие помощь жителям дальних деревень. Мы делаем всё возможное, чтобы у каждого ребенка были игрушки и хорошая одежда, а малоимущие семьи могли позволить себе больше, сэкономив на вещах первой необходимости.
          </p>

          <p class="description">
            <img style="float: right;" width="340" :src="require('@/assets/images/projects/svg/colored/wear.svg')" alt="">
            Приносите нам залежавшуюся в шкафах одежду и обувь, постельное белье, игрушки, косметику и хозяйственные товары — благодаря этому жизнь десятков людей и семей станет лучше, комфортнее и счастливее.
          </p>
          <p class="description">
            Наши пункты выдачи никогда не&nbsp;пустуют&nbsp;&mdash; посетители приходят
            с&nbsp;утра и&nbsp;до&nbsp;вечера.
            У&nbsp;нас они могут не&nbsp;только получить одежду и&nbsp;вещи, но&nbsp;и&nbsp;отдохнуть за&nbsp;чашечкой горячего чая с&nbsp;угощениями.
          </p>
        </div>
      </v-col>
      <v-col class="pb-0">
        <v-card
          flat
          color="white"
          class="project-info-card mb-3 pa-7"
        >
          <v-row justify="space-between">
            <b>{{ project.firstNumber }}</b>
            <img width="50" :src="require('@/assets/images/projects/svg/colored/stat_icon.svg')" alt="">
          </v-row>
          <v-row>
            <p class="ma-0">
              людей накормлено <br> за 2019 год
            </p>
          </v-row>
        </v-card>
        <div class="map">
          <a target="_blank" href="https://goo.gl/maps/XKTsPsBkx2kCFpef7">
            <img width="250" height="150" style="border: 10px;" :src="require('@/assets/images/maps/map.png')" alt="">
          </a>
          <div class="address mt-3 mb-3">
            <img width="15" :src="require('@/assets/images/projects/svg/icons/pin.svg')" alt="">
            <p class="ml-1 mb-0">
              ул. Дзержинского, д. 27
            </p>
          </div>
          <div class="address">
            <img width="15" :src="require('@/assets/images/projects/svg/icons/clock.svg')" alt="">
            <p class="ml-1 mb-0">
              9.00 – 18.00, обед 13.00 – 14.00
            </p>
          </div>
          <p class="ml-5">
            Воскресенье – Четверг
          </p>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WearCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.project-card {
  padding: 30px;
  border-radius: 10px;

  .title {
    font-size: 2rem !important;
    font-weight: 700;
  }

  .description {
    font-size: 16px;
  }

  .project-info-card {
    border-radius: 10px;

    b {
      font-size: 30px;
    }

    p {
      font-size: 15px;
    }
  }

  .address {
    display: flex;
    align-items: center;
  }
}
</style>
