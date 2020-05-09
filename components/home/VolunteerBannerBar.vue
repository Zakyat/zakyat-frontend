<template>
  <v-layout class="volunteer-container" row>
    <v-flex xs12 md6>
      <h1>{{ $t('home.volunteer.title') }}</h1>
      <p>{{ $t('home.volunteer.description') }}</p>
      <v-btn rounded>
        {{ $t('home.volunteer.join') }}
      </v-btn>
    </v-flex>
    <v-flex xs12 md6>
      <v-img
        max-width="507px"
        width="100%"
        :src="require('@/assets/images/banners/2.png')"
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
.volunteer-container {
  background-color: #3840f1;
  padding: 2% 7% 2% 7%;
  color: #fff;

  h1 {
    font: bold 36px Lato;
    line-height: 43px;
  }
}
</style>
