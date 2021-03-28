<template>
  <v-card
    flat
    color="#f2f2f2"
    class="project-card mb-5"
  >
    <v-row>
      <v-col
        cols="9"
        class="pb-0 mb-0"
      >
        <h2 class="title mb-5">
          Центр помощи детям с&nbsp;особенностями развития и&nbsp;их&nbsp;родителям &laquo;Хаят&raquo;
        </h2>

        <div>
          <p class="description">
            Центр для детей с особенностями и их родителей — один из важнейших проектов нашего фонда, реализованный на базе гранта Президента РФ. В рамках проекта мы организуем занятия для детей с тяжелыми заболеваниями нервной и опорно-двигательной системы, сложными нарушениями развития.
          </p>

          <p class="description">
            Цель таких занятий — улучшить их физическое и психическое здоровье, помочь социализироваться в обществе.
          </p>
          <p class="description">
            Первый сезон уникального для Татарстана проекта стартовал в ноябре 2017 года, тогда мы организовали около 500 занятий для 130 семей. В новом сезоне проект получил название «Хаят» и расширил число своих посетителей до 250 человек.
            <span class="green-text">Посещение Центра для особенных детей и их родителей бесплатное.</span>
          </p>
        </div>
        <div class="second-description">
          <div>
            <p class="description mb-0">
              Посетители Центра — дети с различной способностью к самообслуживанию и диагнозами:
            </p>
            <ul class="mb-5 pl-2">
              <li>ДЦП (от ходячих до полностью обездвиженных)</li>
              <li>Расстройство аутистического спектра</li>
              <li>Ранний детский аутизм</li>
              <li>Тяжелые множественные нарушения развития</li>
              <li>Слепота</li>
              <li>Глухота</li>
              <li>Слепоглухота</li>
              <li>Сложные генетические заболевания.</li>
            </ul>
          </div>
        </div>
      </v-col>
      <v-col
        class="pb-0 mb-0"
      >
        <v-card
          flat
          color="white"
          class="project-info-card mb-3 pa-7"
        >
          <v-row justify="space-between">
            <b>1525</b>
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
      <v-col class="py-0 mt-0">
        <div class="second-description">
          <div>
            <p class="description">
              С самых первых занятий наши юные подопечные показывают хорошие результаты. За время работы Центра многие из них научились общаться, заботиться друг о друге и дружить.
            </p>
            <p class="description">
              Истории наших подопечных мы публикуем на наших страничках в Instagram и Вконтакте.
            </p>
            <p class="description">
              Вы можете пожертвовать любую сумму, чтобы поддержать данный проект
            </p>
          </div>
          <div class="people-img">
            <img width="400" :src="require('@/assets/images/projects/svg/colored/people.svg')" alt="">
          </div>
        </div>

        <v-btn
          rounded
          dark
          depressed
          color="primary"
          height="40px"
          to="/charity"
        >
          Пожертвовать
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HayatCard',
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

  .second-description {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .address {
    display: flex;
    align-items: center;
  }

  .green-text {
    color: #00ac00;
  }

  .people-img {
    margin-top: -100px;
  }

  li {
    list-style-type: '- ';
  }
}
</style>
