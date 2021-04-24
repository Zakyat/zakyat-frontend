<template>
  <v-row no-gutters>
    <v-col
      cols="12"
      md="3"
      class="pr-3"
    >
      <v-img
        width="250"
        height="280"
        class="charity-card-img"
        :src="photo"
      />
    </v-col>
    <v-col>
      <v-row no-gutters>
        <v-col>
<!--          <h2>{{ name }}, {{ age }} лет</h2>-->
          <h2>{{ title }}</h2>
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
<!--              <b>{{ collected | rubles }}</b>-->
              <b>{{ moneyCollected | rubles }}</b>
            </v-col>
            <v-spacer />
            <v-col>
              <v-card-text class="pa-0 ma-0 progress-text">
                {{ $t('charity.gathering.charityCard.left') }}
              </v-card-text>
<!--              <b>{{ remaining | rubles }}</b>-->
              <b>{{ goal - moneyCollected | rubles }}</b>
            </v-col>
            <v-spacer />
            <v-col class="text-right">
              <v-card-text class="pa-0 ma-0 progress-text">
                {{ $t('charity.gathering.charityCard.total') }}
              </v-card-text>
              <b>{{ goal | rubles }}</b>
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
          v-if="transactions.length !== 0"
        >
          <nuxt-link style="text-decoration: none;" :to="`all-incomes?id=${id}`">
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
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    problem: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    goal: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: Object,
      required: true,
    },
    project: {
      type: Object,
      required: false,
    },
    moneyCollected: {
      type: Number,
      required: true,
    },
    transactions: {
      type: Array,
    },
  },
  computed: {
    remaining (): number {
      return this.goal - this.moneyCollected;
      // required - collected
    },
    collectedPercent (): number {
      return Math.floor(100 * this.moneyCollected / this.goal);
      // 100 * collected / required
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
