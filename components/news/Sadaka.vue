<template>
  <div class="sadaka-container pl-2">
    <v-card
      flat
      class="pa-5 sadaka-card"
      style="border-radius: 10px;"
    >
      <v-card-title class="pa-0 ma-0">Совершите садака</v-card-title>
      <v-card-text class="pa-0 ma-0">Любое ваше благодеяние, совершенное искренне, мы распределим между нуждающимися</v-card-text>
      <v-card-text class="mt-3 pa-0 ma-0">
        <v-text-field
          v-model.number="input"
          label="Сумма садака, ₽"
          type="number"
          min="0"
          rounded
          outlined
          hide-details
          color="black"
        />
      </v-card-text>
      <v-flex xs12 md12>
        <v-radio-group
          v-model="amount"
          row
          hide-details
          class="amounts pa-2"
        >
          <v-radio
            class="pa-0 mr-2"
            v-for="a in amounts"
            :key="a"
            :label="`${a} ₽`"
            :value="a"
          />
        </v-radio-group>
      </v-flex>
      <v-btn
        rounded
        dark
        color="primary"
        width="100%"
        class="mt-4"
      >
        Пожертвовать
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Sadaka',
  data () {
    return {
      amounts: [1, 50, 100],
      amount: null,
    };
  },
};
</script>

<style scoped>
.sadaka-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.sadaka-card {
  width: 310px;
}

.amounts {
  border: 1px solid black;
  border-radius: 25px;
}
</style>
