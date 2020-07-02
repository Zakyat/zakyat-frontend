<template>
  <v-col
    cols="6"
    md="3"
    class="px-2"
  >
    <v-card
      flat
      class="pa-5 sadaka-card"
    >
      <v-card-title class="pa-0">
        {{ $t('news.sadaka.title') }}
      </v-card-title>
      <v-card-text class="pa-0">
        {{ $t('news.sadaka.description') }}
        <v-text-field
          :label="$t('news.sadaka.money_amount_input')"
          type="number"
          min="0"
          rounded
          outlined
          hide-details
          color="black"
          class="mt-3"
        />
      </v-card-text>
      <v-radio-group
        v-model="amount"
        row
        hide-details
        class="amounts pa-2"
      >
        <v-radio
          v-for="a in amounts"
          :key="a"
          class="pa-0 mr-2"
          :label="`${a} ₽`"
          :value="a"
        />
      </v-radio-group>
      <v-btn
        rounded
        dark
        block
        color="primary"
        class="mt-4"
      >
        Пожертвовать
      </v-btn>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Sadaka',
  data () {
    return {
      amounts: [1, 50, 100],
      amount: null,
    };
  },
});
</script>

<style scoped>
.sadaka-card {
  width: 310px;
}

.amounts {
  border: 1px solid black;
  border-radius: 25px;
}
</style>
