<template>
  <div class="loader">
    <img :src="require(`@/assets/logo/${$i18n.locale}.svg`)">
    <v-progress-linear
      rounded
      color="#006838"
      height="6px"
      value="15" />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Loader',
});
</script>

<style scoped>
.loader {
  position: fixed;
  top: 50%;
  z-index: 999;
  background: white;
}
</style>
