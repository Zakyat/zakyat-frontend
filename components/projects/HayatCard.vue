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
        <h2 class="title mb-5">Центр помощи детям с&nbsp;особенностями развития и&nbsp;их&nbsp;родителям &laquo;Хаят&raquo;</h2>

        <div>
          <p class="description">
            Центр для детей с особенностями и их родителей — один из важнейших проектов нашего фонда, реализованный на базе гранта Президента РФ. В рамках проекта мы организуем занятия для детей с тяжелыми заболеваниями нервной и опорно-двигательной системы, сложными нарушениями развития.
          </p>

          <p class="description">
            Цель таких занятий — улучшить их физическое и психическое здоровье, помочь социализироваться в обществе.
          </p>
          <p class="description">
            Первый сезон уникального для Татарстана проекта стартовал в ноябре 2017 года, тогда мы организовали около 500 занятий для 130 семей. В новом сезоне проект получил название «Хаят» и расширил число своих посетителей до 250 человек.
            <span>Посещение Центра для особенных детей и их родителей бесплатное.</span>
          </p>
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
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.9104027536914!2d49.121010616127506!3d55.794793680564595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead14469679e7%3A0x296da0eb2a902db1!2z0YPQuy4g0JTQt9C10YDQttC40L3RgdC60L7Qs9C-LCAyNywg0JrQsNC30LDQvdGMLCDQoNC10YHQvy4g0KLQsNGC0LDRgNGB0YLQsNC9LCA0MjAxMTE!5e0!3m2!1sru!2sru!4v1615845776334!5m2!1sru!2sru" width="250" height="150" style="border: 10px;" loading="lazy"></iframe>
          <div class="address mt-3 mb-3">
            <img width="15" :src="require('@/assets/images/projects/svg/icons/pin.svg')" alt="">
            <p class="ml-1 mb-0">ул. Дзержинского, д. 27</p>
          </div>
          <div class="address">
            <img width="15" :src="require('@/assets/images/projects/svg/icons/clock.svg')" alt="">
            <p class="ml-1 mb-0">
              9.00 – 18.00, обед 13.00 – 14.00
            </p>
          </div>
          <p class="ml-5">Воскресенье – Четверг</p>
        </div>
      </v-col>
      <v-col class="pb-0">
        <div class='second-description'>
          <div>
            <p class="description">Посетители Центра — дети с различной способностью к самообслуживанию и диагнозами:</p>
            <ul class="mb-5">
              <li>ДЦП (от ходячих до полностью обездвиженных)</li>
              <li>Расстройство аутистического спектра</li>
              <li>Ранний детский аутизм</li>
              <li>Тяжелые множественные нарушения развития</li>
              <li>Слепота</li>
              <li>Глухота</li>
              <li>Слепоглухота</li>
              <li>Сложные генетические заболевания.</li>
            </ul>
            <p class="description">С самых первых занятий наши юные подопечные показывают хорошие результаты.  За время работы Центра многие из них научились общаться, заботиться друг о  друге и дружить. </p>
            <p class="description">Истории наших подопечных мы публикуем на наших страничках в Instagram и Вконтакте.</p>
            <p class="description">Вы можете пожертвовать любую сумму, чтобы поддержать данный проект</p>
          </div>
          <div>
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

<script>
export default {
  name: 'HayatCard',
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

    .second-description {
      display: flex;
      justify-content: space-between;
      align-content: center;
    }

    .address {
      display: flex;
      align-items: center;
    }
  }
</style>
