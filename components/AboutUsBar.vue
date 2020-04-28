<template>
  <v-container>
    <v-row>
      <span>{{ $t('about_us') }}</span>
    </v-row>
    <v-layout row>
      <v-flex xs12 md6>
        <div class="pa-4">
          {{ $t('about_us_text_1') }}
          <br>
          {{ $t('about_us_text_2') }}
          <br><br>
          <v-btn rounded dark color="accent">
            {{ $t('learn_more') }}
          </v-btn>
        </div>
      </v-flex>
      <v-flex xs12 md6>
        <video rounded height="340px" controls>
          <source
            src="aboutUs.mp4"
            type="video/mp4"
          > Your browser does not support HTML5 video.
        </video>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>
<style scoped>
span{
  font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 43px;
color: #000000;
}
</style>
