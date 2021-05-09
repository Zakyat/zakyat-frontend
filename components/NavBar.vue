<template>
  <div flat color="white" height="120" style="padding: 10px 5%; display: flex; flex-wrap: wrap; align-items: center; background-color: white;">
    <nuxt-link to="/">
      <img :src="require(`@/assets/logo/${$i18n.locale}.svg`)">
    </nuxt-link>
    <v-spacer />
    <div class="links">
      <nuxt-link
        v-for="(page, i) in pages"
        :key="i"
        :to="page.link"
        class="mx-3"
      >
      <span style="color: black;">
        {{ page.text }}
      </span>
      </nuxt-link>
      <nuxt-link
        to="/zakat"
        class="mx-3"
      >
        <span style="color: #00ac00;">
          {{ $t('links.pay') }}
        </span>
      </nuxt-link>
    </div>
    <v-spacer />
    <div class="btns">
      <v-btn
        rounded
        depressed
        dark
        color="primary"
        height="40px"
        to="/charity?id=-1"
        class="give-help"
      >
        {{ $t('give_help') }}
      </v-btn>
      <v-btn
        rounded
        depressed
        dark
        color="accent"
        height="40px"
        to="/help-request"
        style="margin-top: 10px;"
      >
        {{ $t('get_help') }}
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      pages: [
        { text: this.$t('links.fees'), link: '/gatherings' },
        { text: this.$t('links.projects'), link: '/projects' },
        { text: this.$t('links.reports'), link: '/reports' },
        { text: this.$t('links.news'), link: '/news' },
        { text: this.$t('links.about'), link: '/about' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
img {
  @media screen and (max-width: 650px) {
    width: 100%;
  }
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.btns {
  display: flex;
  flex-wrap: wrap;

  .give-help {
    margin-top: 10px;
    margin-right: 10px;
  }
}

.v-btn--active::before {
  opacity: 0;
}

.v-btn {
  text-transform: none;
}

span {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}

a {
  text-decoration: none;
}
</style>
