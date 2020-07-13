<template>
  <v-layout white>
    <v-container>
      <CharityBanner
        class="mt-5"
      />
      <h1 class="mt-12">
        {{ $t('charity.title') }}
      </h1>
      <GatheringSelection
        :gatheringId="gatheringId"
        :gatherings="gatherings"
        :items="items"
      />
      <PaymentMethod class="mb-12" />
    </v-container>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import CharityBanner from '@/components/charity/CharityBanner.vue';
import GatheringSelection from '@/components/charity/GatheringSelection.vue';
import PaymentMethod from '@/components/charity/PaymentMethod.vue';

export default Vue.extend({
  components: {
    CharityBanner,
    GatheringSelection,
    PaymentMethod,
  },
  data () {
    return {
      gatheringId: this.$route.query.id,
      items: [
        'Бурганова Альфия, сбор 309',
        'Садыков Амирхан, сбор 400',
      ],
      gatherings: [
        {
          name: 'Бурганова Альфия',
          age: 16,
          gatheringNo: 309,
          problem: 'Идиопатический прогрессирующий сколиоз 4-й степени, спасет операция',
          text: 'Альфие 16 лет. В 9 месяцев ей поставили диагноз — ДЦП. Врачи сказали, что ходить она не сможет. Никогда. Но в 2 годика она сделала первые робкие шаги. В первый класс она пошла в обычную школу. Ей было очень тяжело, ее пальчики не слушались и не получалось писать красивые буквы. Но она настойчиво старалась писать и добилась каллиграфического почерка. Альфия научилась играть на курае и даже заняла второе место в международном конкурсе. К сожалению, болезнь не отступает до конца и она вынуждена проходить неприятные процедуры. Сумма к сбору на лечение Альфии составляет 500 тысяч 500 рублей.',
          collected: 65065,
          left: 435435,
          total: 500500,
          collectedPercent: 13,
        },
        {
          name: 'Садыков Амирхан',
          age: 12,
          gatheringNo: 400,
          problem: 'Идиопатический прогрессирующий сколиоз 4-й степени, спасет операция',
          text: 'Амирхану 12 лет. В 9 месяцев ей поставили диагноз — ДЦП. Врачи сказали, что ходить она не сможет. Никогда. Но в 2 годика она сделала первые робкие шаги. В первый класс она пошла в обычную школу.',
          collected: 300000,
          left: 200500,
          total: 500500,
          collectedPercent: 60,
        },
      ],
    };
  },
});
</script>

<style scoped>
  .white-background {
    background-color: white;
  }
</style>
