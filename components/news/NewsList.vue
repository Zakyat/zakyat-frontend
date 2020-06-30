<template>
  <div>
    <v-card
      v-for="n in 5"
      :key="n"
      flat
      class="mb-5 pl-5 pr-5 pt-3 pb-2"
      style="border-radius: 10px;"
    >
      <v-row>
        <v-col
          cols="4"
          md="4"
          class="card-img-col"
        >
          <v-img
            :src="require('@/assets/images/news/1.png')"
            width="300px"
            style="border-radius: 10px;"
          />
        </v-col>

        <v-col
          cols="8"
          md="8"
        >
          <v-row>
            <v-col class="pa-0">
              <v-card-title class="news-card-title pt-0">
                Вкусности для бездомных
              </v-card-title>
              <v-card-text class="pb-0">
                Какие же настали морозные дни в нашей Казани. Особенно это чувствуют
                бездомные люди. Не всегда удается найти теплый ночлег. Единственным спасением становятся горячие
                бесплатные обеды.
              </v-card-text>
              <v-card-text class="pb-0" style="color: #9da3a6;">
                21 февраля 2020 <b>&bull;</b> Майя Бурганова
              </v-card-text>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'NewsList',
});
</script>

<style scoped>
.news-card-title {
  font-size: 24px;
}
</style>
