<template>
  <div class="sadaka-container">
    <v-card
      flat
      class="sadaka-card"
      style="border-radius: 10px;"
    >
      <v-card-title>Совершите садака</v-card-title>
      <v-card-text>Любое ваше благодеяние, совершенное искренне, мы распределим между нуждающимися</v-card-text>
      <v-card-text class="mt-3">
        <v-text-field
          v-model.number="input"
          label="Сумма садака, ₽"
          type="number"
          min="0"
          rounded
          outlined
          hide-details
          color="black"
          class="sadaka-input"
        />
      </v-card-text>
      <v-flex xs12 md12 class="donate-selector">
        <v-radio-group
          v-model="amount"
          row
          hide-details
          class="amounts"
        >
          <v-radio
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
  padding: 20px;
}

.sadaka-input {
  margin: 0;
  padding: 0;
}

.donate-selector {
  margin: 0 auto;
  width: 100%;
}

.amounts {
  border: 1px solid black;
  border-radius: 25px;
  padding: 10px 10px 10px 10px;
}
</style>
