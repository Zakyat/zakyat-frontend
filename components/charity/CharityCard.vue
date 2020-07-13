<template>
  <v-row
  >
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
            size="70"
            rotate="-90"
          >
            <b class="percent-text">{{ gathering.collectedPercent }}%</b>
          </v-progress-circular>
        </v-col>
      </v-row>
      <p class="description mt-3">
        {{ gathering.text }}
      </p>
      <v-row justify="space-between" class="px-3 mt-8">
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
              <b>{{ gathering.collected | rubles }}</b>
            </div>
            <div>
              <v-card-text class="pa-0 ma-0 progress-text">
                {{ $t('charity.gathering.charityCard.left') }}
              </v-card-text>
              <b>{{ gathering.left | rubles}}</b>
            </div>
            <div>
              <v-card-text class="pa-0 ma-0 progress-text">
                {{ $t('charity.gathering.charityCard.total') }}
              </v-card-text>
              <b>{{ gathering.total | rubles }}</b>
            </div>
          </v-row>
          <v-progress-linear
            class="pa-0"
            color="primary"
            :value="gathering.collectedPercent"
            height="8"
            rounded
            background-color="#DADADA"
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
  props: [
    'gathering',
  ],
});
</script>

<style scoped>
.charity-card-img {
  border-radius: 10px;
}

.percent-text {
  font-size: 24px;
}

.description {
  font-size: 14px;
}

.progress-text {
  color: #9da3a6;
}
</style>
