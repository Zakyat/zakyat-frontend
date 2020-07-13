<template>
  <div class="px-3">
    <v-row
      justify="space-between"
      class="mt-5"
    >
      <v-col
        cols="12"
        md="4"
        class="pa-0 ma-0"
      >
        <v-select
          v-model="selectedGathering"
          append-icon="mdi-chevron-down"
          outlined
          rounded
          flat
          solo
          :placeholder="$t('charity.gathering.gatheringSelection')"
          :items="items"
          class="pa-0 ma-0"
        >
        </v-select>
      </v-col>
      <v-spacer/>
      <v-col
        cols="auto"
        class="pa-0 md-0"
      >
        <v-checkbox
          class="pa-0 md-0 black-label"
          :label="$t('charity.gathering.anonymous')"
          on-icon="mdi-check-box-outline"
        >
        </v-checkbox>
      </v-col>
    </v-row>
    <CharityCard
      v-if="selectedGathering"
      :gatherings="gatherings"
      :id="items.indexOf(selectedGathering)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CharityCard from '@/components/charity/CharityCard.vue';

export default Vue.extend({
  name: 'GatheringSelection',
  components: {
    CharityCard,
  },
  props: [
    'gatheringId',
  ],
  data () {
    return {
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
        {
          name: 'Садыков Амирхан',
          age: 12,
          gatheringNo: 400,
          problem: 'Идиопатический прогрессирующий сколиоз 4-й степени, спасет операция',
          text: 'Амирхану 12 лет. В 9 месяцев ей поставили диагноз — ДЦП. Врачи сказали, что ходить она\n' +
            '        не сможет. Никогда. Но в 2 годика она сделала первые робкие шаги. В первый класс она пошла\n' +
            '        в обычную школу.',
          collected: 300000,
          left: 200500,
          total: 500500,
          collectedPercent: 60,
        },
      ],
      selectedGathering: this.gatheringId,
    };
  },
});
</script>

<style scoped>
  .black-label /deep/ label {
    color: black;
  }
</style>
