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
        <h2 class="title mb-5">Воспитай Коран-хафиза</h2>

        <div>
          <p class="description">
            Фонд «Закят» оказывает поддержку школе хафизов, которая готовит
            юных чтецов Корана.
          </p>

          <p class="description">
            <img style="float: right;" width="180" :src="require('@/assets/images/projects/svg/colored/boy.svg')" alt="">
            Хафиз — это человек, который наизусть знает все 600 страниц Корана — от самого
            первого до самого последнего аята. Хафизы хранят устную традицию священной
            книги, принимают участие во многих религиозных мероприятиях.
          </p>
          <p class="description">
            В школе чтецов Корана много внимания уделяется духовному развитию учеников.
            На занятиях большое значение придают вопросам нравственности
            и совершению благодеяний в обществе, заботе о слабых и любви
            к Родине.
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
            <p class="ma-0">человек получило <br> помощь в 2019 год</p>
          </v-row>
        </v-card>
        <p>Вы можете пожертвовать любую сумму, чтобы поддержать данный проект.</p>
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
  name: 'HafizCard',
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
