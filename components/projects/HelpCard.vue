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
            Фонд «Закят» оказывает помощь и поддержку детям и взрослым, имеющим тяжелые
            заболевания и нуждающимся в лечении и реабилитации.
          </p>

          <p class="description">
            <img style="float: right;" width="300" :src="require('@/assets/images/projects/svg/colored/arms.svg')" alt="">
            Поддержав этот проект, вы можете стать причастным к чьей-то большой победе — над недугом, болью и
            страданиями.
            Каждая такая победа — результат работы большой команды, и вы можете стать её частью.
            Каждое пожертвование — это чей-то первый шаг после затяжной болезни, чья-то долгожданная ремиссия.
          </p>

          <p class="description">
            Истории наших подопечных мы публикуем на наших страничках <br> в Instagram и
            Вконтакте.
          </p>

          <p class="description">
            Вы можете пожертвовать любую сумму, чтобы поддержать данный проект
          </p>
        </div>

        <v-btn
          rounded
          dark
          depressed
          color="primary"
          height="40px"
          to="/gatherings"
        >
          Пожертвовать
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
            <b>{{ project.firstNumber }}</b>
            <img width="50" :src="require('@/assets/images/projects/svg/colored/stat_icon.svg')" alt="">
          </v-row>
          <v-row>
            <p class="ma-0">
              человек получило <br> помощь в 2019 год
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
              руб собрано на помощь за <br> 2019 год
            </p>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelpCard',
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
}
</style>
