<template>
  <v-row no-gutters>
    <v-col
      cols="12"
      md="auto"
      class="pr-3"
    >
      <v-img
        width="250"
        height="280"
        class="charity-card-img"
        :src="require('@/assets/images/slideshow1.jpg')"
      />
    </v-col>
    <v-col>
      <v-row no-gutters>
        <v-col>
          <h2>{{ name }}, {{ age }} лет</h2>
          <p>{{ problem }}</p>
        </v-col>
        <v-col
          cols="auto"
        >
          <v-progress-circular
            color="primary"
            :value="collectedPercent"
            size="70"
            rotate="-90"
          >
            <b class="percent-text">{{ collectedPercent }}%</b>
          </v-progress-circular>
        </v-col>
      </v-row>
      <p class="description mt-3">
        {{ description }}
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
            no-gutters
          >
            <v-col>
              <v-card-text class="pa-0 ma-0 progress-text">
                {{ $t('charity.gathering.charityCard.collected') }}
              </v-card-text>
              <b>{{ collected | rubles }}</b>
            </v-col>
            <v-spacer />
            <v-col>
              <v-card-text class="pa-0 ma-0 progress-text">
                {{ $t('charity.gathering.charityCard.left') }}
              </v-card-text>
              <b>{{ remaining | rubles }}</b>
            </v-col>
            <v-spacer />
            <v-col class="text-right">
              <v-card-text class="pa-0 ma-0 progress-text">
                {{ $t('charity.gathering.charityCard.total') }}
              </v-card-text>
              <b>{{ required | rubles }}</b>
            </v-col>
          </v-row>
          <v-progress-linear
            class="pa-0"
            color="primary"
            :value="collectedPercent"
            height="8"
            rounded
            background-color="#DADADA"
          />
        </v-col>
        <v-col
          cols="12"
          md="auto"
          align-self="end"
          class="pa-0 ma-0"
        >
          <nuxt-link style="text-decoration: none;" to="/">
            {{ $t('charity.gathering.charityCard.seeGatherings') }}
          </nuxt-link>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CharityCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    collected: {
      type: Number,
      required: true,
    },
    required: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    problem: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
  },
  computed: {
    remaining (): number {
      return this.required - this.collected;
    },
    collectedPercent (): number {
      return Math.floor(100 * this.collected / this.required);
    },
  },
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
