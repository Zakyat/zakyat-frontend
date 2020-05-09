<template>
  <v-layout class="zakat-container" row>
    <v-flex xs12 md8>
      <h1>{{ $t('home.zakat.title') }}</h1>
      <p>{{ $t('home.zakat.description') }}</p>
      <v-btn rounded>
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
  padding: 5% 7% 0% 7%;
  width: 100%;
  color: #fff;

  h1 {
    font: bold 36px Lato;
    line-height: 43px;
  }
}
</style>
