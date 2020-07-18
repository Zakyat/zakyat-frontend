<template>
  <v-layout class="zakat-container" row>
    <v-flex xs12 md8>
      <h1>{{ $t('home.zakat.title') }}</h1>
      <p class="my-4">
        {{ $t('home.zakat.description') }}
      </p>
      <p>{{ $t('home.zakat.for_pay') }}</p>
      <v-btn height="45" rounded>
        {{ $t('home.zakat.pay') }}
      </v-btn>
    </v-flex>
    <v-flex xs12 md4>
      <v-img
        max-width="256px"
        width="100%"
        :src="require('@/assets/images/banners/1.png')"
      />
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style lang="scss" scoped>
.zakat-container {
  background-color: #00ac00;
  padding: 30px 6% 0% 6%;
  width: 100%;
  color: #fff;

  h1 {
    font: bold 36px;
    line-height: 43px;
  }
}
</style>
