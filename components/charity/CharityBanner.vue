<template>
  <v-card
    flat
    color="#F5B820"
    class="pa-0 ma-0 charity-banner"
  >
    <v-row>
      <v-col
        cols="12"
        md="8"
        align-self="center"
      >
        <v-card-title
          class="charity-banner-text"
        >
          {{ $t('charity.banner.title') }}
        </v-card-title>
      </v-col>
      <v-col
        cols="12"
        md="4"
        class="pa-md-0"
      >
        <v-img
          width="300"
          :src="require('@/assets/images/banners/3.png')"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CharityBanner',
});
</script>

<style scoped>
.charity-banner {
  border-radius: 15px !important;
}

.charity-banner-text {
  color: white;
  font-weight: bold;
  font-size: 26px;
  line-height: 36px;
}
</style>
