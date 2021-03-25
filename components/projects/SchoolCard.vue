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
        <h2 class="title mb-5">Помоги собраться в школу</h2>

        <div>
          <p class="description">
            День знаний — яркий и очень важный праздник в жизни каждого ребенка. К сожалению, далеко не каждая семья может обеспечить своего первоклассника всем необходимым и сделать его по-настоящему счастливым в этот день.
          </p>

          <p class="description">
            «Помоги собраться в школу» — наше большое, общее и нужное дело.
          </p>
          <p class="description">
            Цель проекта — помочь каждому первокласснику достойно начать свой путь в мире знаний, вне зависимости от его социального статуса. Каждое пожертвование — чьё-то первое написанное слово, портрет мамы в альбоме для рисования, чья-то первая пятёрка в дневнике.
          </p>
          <p class="description">
            Приглашаем всех неравнодушных и отзывчивых людей поддержать этот проект. Вместе мы можем творить добрые, а главное полезные и радостные для детей дела. Мы верим, что День знаний может быть красочным, ярким и запоминающимся для всех детей.
          </p>
        </div>
        <v-btn
          rounded
          dark
          depressed
          color="grey"
          height="40px"
        >
          Сбор временно приостановлен
        </v-btn>
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
            <p class="ma-0">детей получили <br> помощь за 2019 год</p>
          </v-row>
        </v-card>
        <img :src="require('@/assets/images/projects/svg/colored/backpack.svg')" alt="">
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'SchoolCard',
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
