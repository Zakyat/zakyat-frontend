<template>
  <div v-if="!isLoaded" class="loader">
    <img :src="require(`@/assets/logo/${$i18n.locale}.svg`)">
    <v-progress-linear
      rounded
      color="#006838"
      height="6px"
      :value=loaderValue />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Loader',
  data() {
    return {
      isLoaded: false,
      loaderValue: 0,
    }
  },
  methods: {
    makeLoad() {
      this.isLoaded = true
    },
  },

  beforeMount () {
    console.log(document.readyState);
    document.onreadystatechange = () => {
      if (document.readyState === 'loading') {
        this.loaderValue = 30;
      }
      else if (document.readyState === 'interactive') {
        this.loaderValue = 60;
      }
      else if (document.readyState === 'complete') {
        this.loaderValue = 100;
        setTimeout(this.makeLoad, 1000 );
      }
    };
    if (document.readyState === 'loading') {
      this.loaderValue = 30;
    }
    else if (document.readyState === 'interactive') {
      this.loaderValue = 60;
    }
    else if (document.readyState === 'complete') {
      this.loaderValue = 100;
      setTimeout(this.makeLoad, 1000 );
    }
  },
});
</script>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  z-index: 999;
  background: white;
  width: 100%;
  height: 100%;
}
</style>
