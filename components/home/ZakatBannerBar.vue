<template>
  <v-layout class="zakat-container">
    <v-row>
      <v-col cols="12" md="8">
        <h1>{{ $t('home.zakat.title') }}</h1>
        <p class="my-4">
          {{ $t('home.zakat.description') }}
        </p>
        <p>{{ $t('home.zakat.for_pay') }}</p>
        <v-btn class="mb-5" to="/zakat" height="45" rounded depressed>
          {{ $t('home.zakat.pay') }}
        </v-btn>
      </v-col>
      <v-col class="d-none d-sm-flex" cols="12" md="4">
        <v-img
          class="zakat-img"
          max-width="256px"
          width="100%"
          :src="require('@/assets/images/banners/mans.svg')"
        />
      </v-col>
    </v-row>
  </v-layout>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style lang="scss" scoped>
.zakat-container {
  background-color: #006838;
  padding: 30px 6% 0 6%;
  width: 100%;
  color: #fff;

  .zakat-img {
    float: right;
  }

  h1 {
    font-size: 36px;
    font-weight: bold;
    line-height: 43px;
  }
}
</style>
