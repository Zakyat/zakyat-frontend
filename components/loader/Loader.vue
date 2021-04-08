<template>
  <transition name="slide-fade">
    <div v-if="loading" class="loader">
      <div>
        <img :src="require(`@/assets/logo/${$i18n.locale}.svg`)">
        <v-progress-linear
          rounded
          color="#006838"
          height="6px"
          :value="loaderValue"
        />
      </div>
    </div>
  </transition>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Loader',
  data () {
    return {
      loading: false,
      loaderValue: 0,
    };
  },
  methods: {
    // https://nuxtjs.org/docs/2.x/features/loading/#using-a-custom-loading-component
    start () {
      this.loading = true;
    },
    finish () {
      this.loading = false;
    },
    fail (error: string) {
      alert(error);
    },
    increase (amount: number) {
      this.loaderValue = amount;
    },
  },
});
</script>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  z-index: 999;
  background: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
