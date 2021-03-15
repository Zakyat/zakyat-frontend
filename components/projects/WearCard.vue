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
        <h2 class="title mb-5">Пункт приема и раздачи одежды</h2>

        <div>
          <p class="description">
            Мы организуем сбор одежды, обуви, игрушек и предметов быта для малоимущих. В наш пункт выдачи приходят самые разные люди — многодетные матери, рабочие из стран ближнего зарубежья, люди, оказывающие помощь жителям дальних деревень. Мы делаем всё возможное, чтобы у каждого ребенка были игрушки и хорошая одежда, а малоимущие семьи могли позволить себе больше, сэкономив на вещах первой необходимости.
          </p>

          <p class="description">
            <img style="float: right;" width="340" :src="require('@/assets/images/projects/svg/colored/wear.svg')" alt="">
            Приносите нам залежавшуюся в шкафах одежду и обувь, постельное белье, игрушки, косметику и хозяйственные товары — благодаря этому жизнь десятков людей и семей станет лучше, комфортнее и счастливее.
          </p>
          <p class="description">Наши пункты выдачи никогда не пустуют — посетители приходят с утра и до вечера. У нас они могут не только получить одежду и вещи, но и отдохнуть за чашечкой  горячего чая с угощениями.</p>
        </div>
      </v-col>
      <v-col class="pb-0">
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
          <p>ул. Дзержинского, д. 27</p>
          <span>9.00 – 18.00, обед 13.00 – 14.00 </span>
          <span>Воскресенье – Четверг</span>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'WearCard',
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
  }
</style>
