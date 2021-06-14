<template>
  <v-app class="app-wrapper">
<!--    <div class="mobile">-->
<!--      <div class="loader-inner">-->
<!--        <img :src="require(`@/assets/logo/ru.svg`)">-->
<!--      </div>-->
<!--      <h1>Сайт временно не доступен для маленьких экранов</h1>-->
<!--      <h2>Пожалуйста перейдите на компьютер</h2>-->
<!--    </div>-->
    <div class="app">
      <Loader />
    </div>
    <HeaderBar :siteSettings="siteSettings" />
    <NavBar />
    <v-divider />
    <v-main>
      <nuxt />
    </v-main>
    <FooterBar :siteSettings="siteSettings" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

import HeaderBar from '@/components/HeaderBar.vue';
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import Loader from '~/components/loader/Loader.vue';

export default Vue.extend({
  name: 'Default',
  components: {
    HeaderBar,
    NavBar,
    FooterBar,
    Loader,
  },
  apollo: {
    siteSettings: gql`query{
      siteSettings {
        email,
        phone,
        vk,
        fb,
        insta,
        fondInformation,
        allCollectedMoney
      }
    }`,
  },
  data () {
    return {
      siteSettings: '',
    };
  },
  head () {
    return {
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'Благотворительный фонд "Закят"',
          content: 'Духовного управления мусульман Республики Татарстан'
        }
      ]
    };
  },
});
</script>

<style lang="scss" scoped>
.app-wrapper {
  max-width: 1440px;
  background-color: #f2f2f2;
  margin: 0 auto;

  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div {
    word-break: normal !important;
  }
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 1060px) {
  .mobile {
    display: none;
  }
}

@media screen and (max-width: 1060px) {
  .mobile {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: white;
    width: 100%;
    height: 100%;
  }
}
</style>
