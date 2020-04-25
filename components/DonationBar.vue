<template>
  <v-app-bar color="#00AC00" height="200">
    <v-container>
      <v-row class="pa-4" row>
        <h1>{{ $t('Make_sadaka') }}</h1>
        <p style="width: 85%;">
          {{ $t('Make_sadaka_details') }}
        </p>
      </v-row>
      <v-layout row />
    </v-container>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped>
h1 {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
  color:#FFF;
}
p{
  color:#FFF;

}
</style>
