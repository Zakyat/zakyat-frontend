<template>
  <v-layout white>
    <div class="container mt-10">
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
            <h2 class="title mb-5">Помощь тяжелобольным детям и взрослым</h2>

            <p class="description">Фонд «Закят» оказывает помощь и поддержку детям и взрослым, имеющим тяжелые
              заболевания и нуждающимся в лечении и реабилитации.</p>

            <p class="description">
              Поддержав этот проект, вы можете стать причастным к чьей-то большой победе — над недугом, болью и
              страданиями.
              Каждая такая победа — результат работы большой команды, и вы можете стать её частью.
              Каждое пожертвование — это чей-то первый шаг после затяжной болезни, чья-то долгожданная ремиссия.
            </p>

            <p class="description"> Истории наших подопечных мы публикуем на наших страничках в Instagram и
              Вконтакте.</p>

            <p class="description">Вы можете пожертвовать любую сумму, чтобы поддержать данный проект</p>
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
                <img width="40" :src="require('@/assets/images/heart.svg')" alt="">
              </v-row>
              <v-row>
                <p class="ma-0">человек получило <br> помощь в 2019 год</p>
              </v-row>
            </v-card>
            <v-card
              flat
              color="white"
              class="project-info-card mb-3 pa-7"
            >
              <v-row justify="space-between">
                <b>1 000 000</b>
                <img width="40" :src="require('@/assets/images/heart.svg')" alt="">
              </v-row>
              <v-row>
                <p class="ma-0">руб собрано на помощь за <br> 2019 год</p>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: 'index',
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
