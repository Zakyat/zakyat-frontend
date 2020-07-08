<template>
  <v-card
    flat
    class="pa-5"
  >
    <v-img
      :src="require('@/assets/images/news/1.png')"
      height = "300px"
      style="border-radius: 10px;"
    >
    </v-img>
    <h1
      class="pa-0 mt-5"
    >
      Вкусности для бездомных
    </h1>
    <p class="mt-3 mb-2">Какие же настали морозные дни в нашей Казани. Особенно это чувствуют бездомные люди. Не всегда
      удается найти теплый ночлег. Единственным спасением становятся горячие бесплатные обеды. Добрый фудтрак и
      сотрудники «Закята» были встречены в сквере на Б.Шахиди с большой радостью в глазах. Мне вспоминается случай,
      как в одну из жестких морозных зим, один наш подопечный рассказывал мне, что все ночлежки были переполнены и
      он остался на улице в минус тридцать. Чтоб не замерзнуть он с одного конца Казани шел пешком в другой конец, и
      так провел долгие ночные часы. К утру он продрог и устал, но ночлега так и не было. Он не спал целые сутки.
      Сейчас у него все хорошо, он нашел работу, читает намаз и с удовольствием рассказывает как прекрасно ложиться
      вечером в чистую, теплую кровать. Недавно он приходил в гости и мы вспоминали с ним ту страшную ночь в его
      жизни, мы оба расплакались.</p>

    <v-card-text
      class="pa-0 mb-5"
      style="color: #9da3a6;"
    >
      {{ localeDate }}
      dfd
      <v-icon class="px-1" style="color: inherit;">
        mdi-circle-small
      </v-icon>
      {{ author }}
      dfd
    </v-card-text>
    <v-row
    >
      <v-col
        cols="auto"
        v-for="tag in 15"
        :key="tag"
        class="py-0"
      >
        <v-card-text
          class="pa-0"
          style="color: #00ac00;"
        >
          #закят
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: Date as PropType<Date>,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  // computed: {
  //   localeDate (): string {
  //     return this.date.toLocaleDateString(this.$i18n.locale, {
  //       year: 'numeric',
  //       month: 'long',
  //       day: 'numeric',
  //       hour: 'numeric',
  //       minute: 'numeric',
  //     });
  //   },
  // },
});
</script>
