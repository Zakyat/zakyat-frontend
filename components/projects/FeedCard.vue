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
        <h2 class="title mb-5">Накорми нуждающегося</h2>

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

          <p class="description">Мы организуем питание бездомных и нуждающихся:</p>
        </div>

        <div class='maps'>
          <div class="map">
            <p>Сквер</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.369274358174!2d49.104533716127314!3d55.786825480562506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead1956a7f5a7%3A0xafc21b107e13433f!2z0YPQuy4g0JHRg9GA0YXQsNC90LAg0KjQsNGF0LjQtNC4LCAxNywg0JrQsNC30LDQvdGMLCDQoNC10YHQvy4g0KLQsNGC0LDRgNGB0YLQsNC9LCA0MjAxMTE!5e0!3m2!1sru!2sru!4v1615844257396!5m2!1sru!2sru" width="250" height="150" style="border: 10px;" loading="lazy"></iframe>
            <p>ул. Бурхана Шахиди, дом 17</p>
            <p>Среда, Пятница</p>
          </div>
          <div class="map" style="margin-left: 100px;">
            <p>&laquo;Дом ветеранов&raquo;</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.369274358174!2d49.104533716127314!3d55.786825480562506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead1956a7f5a7%3A0xafc21b107e13433f!2z0YPQuy4g0JHRg9GA0YXQsNC90LAg0KjQsNGF0LjQtNC4LCAxNywg0JrQsNC30LDQvdGMLCDQoNC10YHQvy4g0KLQsNGC0LDRgNGB0YLQsNC9LCA0MjAxMTE!5e0!3m2!1sru!2sru!4v1615844257396!5m2!1sru!2sru" width="250" height="150" style="border: 10px;" loading="lazy"></iframe>
            <p>ул. Бурхана Шахиди, дом 17</p>
            <p>Среда, Пятница</p>
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
            <b>1525</b>
            <img width="50" :src="require('@/assets/images/projects/svg/colored/stat_icon.svg')" alt="">
          </v-row>
          <v-row>
            <p class="ma-0">людей накормлено <br> за 2019 год</p>
          </v-row>
        </v-card>
        <v-card
          flat
          color="white"
          class="project-info-card mb-3 pa-7"
        >
          <v-row justify="space-between">
            <b>100 000</b>
            <img width="50" :src="require('@/assets/images/projects/svg/colored/stat_icon.svg')" alt="">
          </v-row>
          <v-row>
            <p class="ma-0">обедов раздали за 2019 <br> год</p>
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
          <p>8-987-225-33-22.</p>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'FeedCard',
};
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
  }
</style>
