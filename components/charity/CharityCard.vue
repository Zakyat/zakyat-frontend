<template>
  <v-row>
    <v-col
      cols="12"
      md="auto"
      class="py-0 pl-0"
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
          <h2>{{ gathering.name }}, {{ gathering.age }} лет</h2>
          <p>{{ gathering.problem }}</p>
        </v-col>
        <v-col
          class="py-0"
          cols="auto"
        >
          <v-progress-circular
            color="primary"
            :value="gathering.collectedPercent"
            size="55"
            rotate="-90"
          >
            <b>{{ gathering.collectedPercent }}%</b>
          </v-progress-circular>
        </v-col>
      </v-row>
      <p class="description">
        {{ gathering.text }}
      </p>
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
              <v-card-text class="pa-0 ma-0 progress-text">
                {{ $t('charity.gathering.charityCard.collected') }}
              </v-card-text>
              <b>{{ gathering.collected }} ₽</b>
            </div>
            <div>
              <v-card-text class="pa-0 ma-0 progress-text">
                {{ $t('charity.gathering.charityCard.left') }}
              </v-card-text>
              <b>{{ gathering.left }} ₽</b>
            </div>
            <div>
              <v-card-text class="pa-0 ma-0 progress-text">
                {{ $t('charity.gathering.charityCard.total') }}
              </v-card-text>
              <b>{{ gathering.total }} ₽</b>
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
          <n-link style="text-decoration: none;" to="/">
            {{ $t('charity.gathering.charityCard.seeGatherings') }}
          </n-link>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CharityCard',
  data () {
    return {
      tab: null,
      gathering: {
        name: 'Бурганова Альфия',
        age: 16,
        problem: 'Идиопатический прогрессирующий сколиоз 4-й степени, спасет операция',
        text: 'Альфие 16 лет. В 9 месяцев ей поставили диагноз — ДЦП. Врачи сказали, что ходить она\n' +
          '        не сможет. Никогда. Но в 2 годика она сделала первые робкие шаги. В первый класс она пошла\n' +
          '        в обычную школу. Ей было очень тяжело, ее пальчики не слушались и не получалось писать красивые\n' +
          '        буквы. Но она настойчиво старалась писать и добилась каллиграфического почерка. Альфия научилась\n' +
          '        играть на курае и даже заняла второе место в международном конкурсе. К сожалению, болезнь не отступает\n' +
          '        до конца и она вынуждена проходить неприятные процедуры. Сумма к сбору на лечение Альфии составляет 500\n' +
          '        тысяч 500 рублей.',
        collected: 65065,
        left: 435435,
        total: 500500,
        collectedPercent: 13,
      },
    };
  },
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
  color: #9da3a6;
}
</style>
