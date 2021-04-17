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
            На протяжении многих лет фонд «Закят» организует питание и обеспечивает продуктами нуждающихся и обездоленных. Помощь реализуется и за счет средств, полученных фондом в качестве Фидья-садака и Нязир.
          </p>

          <p class="description">
            За время реализации проекта мы слышали сотни историй о жизни людей на улице, стали свидетелям положительных перемен в самых разных судьбах. Далеко не все бездомные — тунеядцы и алкоголики. Среди наших подопечных встречаются и пожилые, и беременные, и дети. Часто к нам приходят малоимущие пенсионерки и матери-одиночки, стесняясь своего вынужденного положения.
          </p>

          <p class="description">
            Мы верим, что организуя горячее питание обездоленным, мы не только улучшаем качество их жизни, но и дарим веру в доброту окружающего мира. Сытная домашняя еда, человеческое тепло и забота придают силы на пути к благополучной, счастливой жизни.
          </p>

          <p class="description">
            Мы организуем питание бездомных и нуждающихся:
          </p>
        </div>

        <div class="maps">
          <div class="map">
            <p>Сквер</p>
            <a target="_blank" href="https://goo.gl/maps/sa5yxcsns3NdF1HC9">
              <img width="250" height="150" style="border: 10px;" :src="require('@/assets/images/maps/map.png')" alt="">
            </a>
            <div class="address mt-3 mb-3">
              <img width="15" :src="require('@/assets/images/projects/svg/icons/pin.svg')" alt="">
              <p class="ml-3 mb-0">
                ул. Бурхана Шахиди, дом 17
              </p>
            </div>
            <div class="address mt-3 mb-3">
              <img width="15" :src="require('@/assets/images/projects/svg/icons/clock.svg')" alt="">
              <p class="ml-3 mb-0">
                Среда, Пятница
              </p>
            </div>
          </div>
          <div class="map" style="margin-left: 100px;">
            <p>&laquo;Дом ветеранов&raquo;</p>
            <a target="_blank" href="https://goo.gl/maps/sa5yxcsns3NdF1HC9">
              <img width="250" height="150" style="border: 10px;" :src="require('@/assets/images/maps/map.png')" alt="">
            </a>
            <div class="address mt-3 mb-3">
              <img width="15" :src="require('@/assets/images/projects/svg/icons/pin.svg')" alt="">
              <p class="ml-3 mb-0">
                ул. Бурхана Шахиди, дом 17
              </p>
            </div>
            <div class="address">
              <img width="15" :src="require('@/assets/images/projects/svg/icons/clock.svg')" alt="">
              <p class="ml-3 mb-0">
                Вторник
              </p>
            </div>
          </div>
        </div>
      </v-col>
      <v-col
        class="pb-0"
      >
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
        <v-card
          flat
          color="white"
          class="project-info-card mb-3 pa-7"
        >
          <v-row justify="space-between">
            <b>{{ project.secondNumber }}</b>
            <img width="50" :src="require('@/assets/images/projects/svg/colored/stat_icon.svg')" alt="">
          </v-row>
          <v-row>
            <p class="ma-0">
              обедов раздали за 2019 <br> год
            </p>
          </v-row>
        </v-card>
        <div class="food">
          <img :src="require('@/assets/images/projects/svg/colored/food.svg')" alt="">
          <p>Вы можете пожертвовать любую сумму, чтобы поддержать данный проект.</p>
          <v-btn
            rounded
            dark
            depressed
            color="primary"
            height="40px"
            to="/charity"
            class="mb-5"
            style="align-self: center;"
          >
            Пожертвовать
          </v-btn>
          <p>Мы готовы выслушать ваши идеи и предложения по проекту по номеру </p>
          <div class="phone">
            <img width="20" :src="require('@/assets/images/projects/svg/icons/phone.svg')" alt="">
            <p class="ml-5 mb-0">
              8-987-225-33-22.
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FeedCard',
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

  .maps {
    display: flex;
    flex-wrap: wrap;
  }

  .food {
    display: flex;
    flex-direction: column;
  }

  .phone {
    display: flex;
    align-items: center;
  }

  .address {
    display: flex;
    align-items: center;
  }
}
</style>
