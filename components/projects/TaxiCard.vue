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
            От старости и болезней не застрахован ни один человек. Особенно трудно приходится людям с ограниченными возможностями передвижения, которые из-за болезней вынуждены находиться дома.
          </p>

          <p class="description">
            <img style="float: right;" width="370" :src="require('@/assets/images/projects/svg/colored/taxi_fond.svg')" alt="">
            Наш проект «Социальное такси» призван помочь маломобильным группам людей свободно передвигаться по городу. Мы хотим, чтобы они могли вести полноценную, насыщенную жизнь, участвовать в общественных активностях, посещать музеи, театры и развлекательные центры.
          </p>
          <p class="description">
            Это своеобразный вид психологической реабилитации — человек понимает, что, несмотря на трудности со здоровьем, он все так же востребован и интересен обществу.
          </p>
          <p class="description mb-0">
            Как реализуется проект:
          </p>
          <ul class="pl-2">
            <li>Диспетчер принимает звонки и формирует заявки</li>
            <li>Водитель забирает пассажиров согласно путевым листам</li>
            <li>Куратор следит за своевременным обслуживанием клиентов.</li>
          </ul>
          <p class="description mb-0 free">
            Услуги «социального такси» бесплатны и реализуются за счет пожертвований в фонд «Закят».
          </p>
          <p>Подарим людям с ограниченными возможностями простые радости жизни!</p>
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
              человек получило <br> помощь в 2019 год
            </p>
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

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TaxiCard',
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

  li {
    list-style-type: '- ';
  }

  .free {
    color: #00ac00;
  }
}
</style>
