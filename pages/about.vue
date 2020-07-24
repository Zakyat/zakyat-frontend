<template>
  <v-container>
    <v-card
      flat
      rounded
      color="white"
      class="pa-7"
    >
      <v-row>
        <v-col>
          <h2>Задачи фонда</h2>
          <p class="pt-3">Благотворительный фонд «Закят» учрежден Централизованной Религиозной Организацией Духовного управления мусульман в Республике Татарстан в 1998 году. БФ «Закят» занимается сбором и распределением Закята и Садака в Республике Татарстан. Деятельность по сбору Закята и Садака осуществляют специалисты фонда. Распределение Закята и Садака осуществляется по решению комиссии. Консультации по осуществлению деятельности фонда оказывает Совет Улемов ЦРО-ДУМ РТ.</p>
        </v-col>
        <v-col>
          <v-img
            rounded
            class="main-img"
            :src="require('@/assets/images/about/102113 1.png')"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  layout: 'grey',
});
</script>

<style scoped>
.main-img {
  border-radius: 10px;
}
</style>
