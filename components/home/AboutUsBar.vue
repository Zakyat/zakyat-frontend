<template>
  <v-container style="padding: 2% 1%;">
    <v-row>
      <span>{{ $t('home.about.title') }}</span>
    </v-row>
    <v-layout row>
      <v-flex xs12 md6>
        <div class="py-6">
          <p>{{ $t('home.about.paragraph1') }}</p>
          <p>{{ $t('home.about.paragraph2') }}</p>
          <v-btn height="40" rounded dark color="accent">
            {{ $t('home.about.learn_more') }}
          </v-btn>
        </div>
      </v-flex>
      <v-flex xs12 md6 class="text-center">
        <video height="340px" controls>
          <source :src="require('@/assets/videos/aboutUs.mp4')" type="video/mp4">
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
span {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
  color: #000;
}

p {
  font-style: normal;
  font-weight: normal;
  color: #000;
}
</style>
