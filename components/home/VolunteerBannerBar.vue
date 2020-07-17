<template>
  <v-layout class="volunteer-container" row>
    <v-flex xs12 md7>
      <h1>{{ $t('home.volunteer.title') }}</h1>
      <p class="my-5" style="width: 88%;">
        {{ $t('home.volunteer.description') }}
      </p>
      <v-btn height="40" rounded>
        {{ $t('home.volunteer.join') }}
      </v-btn>
    </v-flex>
    <v-flex xs12 md5>
      <v-img
        max-width="506px"
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
  padding: 80px 6% 30px 6%;
  color: #fff;
  max-width: 100%;

  h1 {
    font: bold 36px;
    line-height: 43px;
  }
}
</style>
