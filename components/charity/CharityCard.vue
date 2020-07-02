<template>
  <v-row>
    <v-col
      cols="12"
      md="auto"
      class="py-0"
    >
      <v-img
        width="250"
        height="280"
        class="charity-card-img"
        :src="require('@/assets/images/slideshow1.jpg')"
      />
    </v-col>
    <v-col
      class="pa-0"
    >
      <v-row>
        <v-col
          class="py-0"
        >
          <h2>Бурганова Альфия, 16 лет</h2>
          <p>Идиопатический прогрессирующий сколиоз 4-й степени, спасет операция</p>
        </v-col>
        <v-col
          class="py-0"
          cols="auto"
        >
          <v-progress-circular
            color="primary"
            value="13"
            size="55"
            rotate="-90"
          >
            <b>13%</b>
          </v-progress-circular>
        </v-col>
      </v-row>
      <p class="description">Альфие 16 лет. В 9 месяцев ей поставили диагноз — ДЦП. Врачи сказали, что ходить она
        не сможет. Никогда. Но в 2 годика она сделала первые робкие шаги. В первый класс она пошла
        в обычную школу. Ей было очень тяжело, ее пальчики не слушались и не получалось писать красивые
        буквы. Но она настойчиво старалась писать и добилась каллиграфического почерка. Альфия научилась
        играть на курае и даже заняла второе место в международном конкурсе. К сожалению, болезнь не отступает
        до конца и она вынуждена проходить неприятные процедуры. Сумма к сбору на лечение Альфии составляет 500
        тысяч 500 рублей.</p>
      <v-row justify="space-between" class="px-3 mt-11">
        <v-col
          cols="12"
          md="8"
          class="pa-0"
        >
          <v-row
            justify="space-between"
            class="px-3"
          >
            <div>
              <v-card-text class="pa-0 ma-0 progress-text">Собрано</v-card-text>
              <b>65 065 ₽</b>
            </div>
            <div>
              <v-card-text class="pa-0 ma-0 progress-text">Осталось</v-card-text>
              <b>435 435 ₽</b>
            </div>
            <div>
              <v-card-text class="pa-0 ma-0 progress-text">Необходимо</v-card-text>
              <b>500 500 ₽</b>
            </div>
          </v-row>
          <v-progress-linear
            class="pa-0"
            color="primary"
            value="13"
            height="8"
            rounded
          >
          </v-progress-linear>
        </v-col>
        <v-col
          cols="12"
          md="auto"
          align-self="end"
          class="pa-0 ma-0"
        >
          <n-link style="text-decoration: none;" to="/">Посмотреть пожертвования</n-link>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CharityCard',
});
</script>

<style scoped>
  .charity-card-img {
    border-radius: 10px !important;
  }
  .description {
    font-size: 14px;
  }
  .progress-text {
    color: #9DA3A6;
  }
</style>
