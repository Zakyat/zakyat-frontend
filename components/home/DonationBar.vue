<template>
  <v-layout class="donation-container" column>
    <v-flex xs11 md8>
      <h1>{{ $t('home.sadaka.title') }}</h1>
      <p>{{ $t('home.sadaka.description') }}</p>
    </v-flex>
    <v-flex xs11>
      <v-layout row wrap align-center justify-space-between>
        <v-flex xs10 md3>
          <v-text-field
            v-model.number="amount"
            rounded
            dense
            single-line
            hide-details
            class="amount"
            :placeholder="`${$t('home.sadaka.enter_amount')}, ₽`"
            outlined
            dark
            type="number"
            min="1"
          />
        </v-flex>
        <v-flex xs8 md7>
          <v-radio-group
            v-model="amount"
            row
            dark
            dense
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
        <v-flex xs1>
          <v-btn rounded>
            {{ $t('home.sadaka.donate') }}
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      amounts: [1, 5, 10, 50, 100, 200, 300, 500],
      amount: null,
    };
  },
});
</script>

<style lang="scss" scoped>
.donation-container {
  background-color: #00ac00;
  width: 100%;
  padding: 2% 7% 2% 7%;
  color: #fff;

  h1 {
    font: bold 36px;
    line-height: 43px;
  }

  p {
    width: 80%;
  }

  .amounts {
    border: 1px solid #fff;
    border-radius: 25px;
    padding: 10px;
    margin-top: 0;
  }

  .amount {
    border: thin solid;
  }
}
</style>
