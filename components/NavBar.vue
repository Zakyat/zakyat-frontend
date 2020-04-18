<template>
  <v-app-bar flat color="white" height="100">
    <img src="@/assets/logo.svg">
    <v-toolbar-title>
      <p class="title primary--text">
        Благотворительный фонд «Закят»
      </p>
      <p class="subtitle-2">
        Духовного управления мусульман
      </p>
      <p class="subtitle-2">
        Республики Татарстан
      </p>
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      v-for="(page, i) in pages"
      :key="i"
      :to="page.link"
      text
      nuxt
    >
      {{ page.text }}
    </v-btn>
    <v-btn rounded dark color="primary">
      Хочу помочь
    </v-btn>
    <v-btn rounded dark color="accent">
      Получить помощь
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      pages: [
        { text: 'Сборы', link: '/' },
        { text: 'Проекты', link: '/' },
        { text: 'Отчеты', link: '/' },
        { text: 'Новости', link: '/' },
        { text: 'О фонде', link: '/' },
        { text: 'Выплатить закят', link: '/' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.v-btn--active::before {
  opacity: 0;
}
.v-toolbar__title {
  margin-left: 1em;
  p {
    margin-bottom: 0;
    &.subtitle-2 {
      color: #736D5A;
    }
  }
}
</style>
