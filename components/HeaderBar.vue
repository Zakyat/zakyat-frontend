<template>
  <v-system-bar dark style="padding: 0 5%; height: auto; min-height: 50px; flex-wrap: wrap;">
<!--    <img src="@/assets/images/heart.svg" class="ml-4 mr-3">-->
<!--    <span class="white&#45;&#45;text">{{ $t('collected', [rubles(siteSettings.allCollectedMoney)]) }}</span>-->
    <div style="font-size: 13px">
      <a :href="`mailto:${siteSettings.phone}`" class="white--text">{{ siteSettings.email }}</a>
      <a :href="`tel:${siteSettings.phone}`" class="white--text ml-5">{{ siteSettings.phone }}</a>
    </div>
    <v-spacer />

<!--    Search-->
<!--    <v-btn text small @click="isSearcherOpen = !isSearcherOpen">-->
<!--      <v-icon color="white" size="20">-->
<!--        mdi-magnify-->
<!--      </v-icon>-->
<!--      {{ $t('search.buttonName') }}-->
<!--    </v-btn>-->

    <v-btn text smal :href="siteSettings.vk" style="text-transform: none;">
      <v-icon color="white" size="20">
        mdi-vk
      </v-icon>
<!--      {{ $t('VK') }}-->
      Вконтакте
    </v-btn>
    <v-btn text small :href="siteSettings.insta" style="text-transform: none; font-size: 14px;">
      <v-icon color="white" size="21">
        mdi-instagram
      </v-icon>
<!--      {{ $t('instagram') }}-->
      Инстаграм
    </v-btn>

<!--    Authentication-->
    <v-btn v-if="!this.$apolloHelpers.getToken()" text small @click="authDialog = !authDialog">
      <v-icon color="white" size="20">
        mdi-account-circle
      </v-icon>
      {{ $t('login') }}
    </v-btn>
    <div v-if="this.$apolloHelpers.getToken()">
      <v-btn text small to="/profile">
        <v-icon color="white" size="20">
          mdi-account-circle
        </v-icon>
        ЛК
      </v-btn>
      <v-btn text small @click="logout()">
        Выйти
      </v-btn>
    </div>

    <v-dialog
      v-model="authDialog"
      width="440"
      :fullscreen="$vuetify.breakpoint.mobile"
    >
      <div class="text-right white">
        <v-btn icon class="mt-3 mr-3" @click="authDialog = !authDialog">
          <v-icon color="black" large>
            mdi-close
          </v-icon>
        </v-btn>
      </div>
      <component
        :is="currentDialog"
        style="background-color: white;"
        @auth="closeAuth"
        @set-dialog="currentDialog = $event"
      />
    </v-dialog>
<!--    <v-flex lg1 md2 xs4>-->
<!--      <LanguageSelector class="icon" />-->
<!--    </v-flex>-->
    <v-autocomplete
      v-show="isSearcherOpen"
      class="searcher mx-auto"
      :items="items"
      :placeholder="$t('search.placeholder')"
      :no-data-text="$t('search.noDataText')"
      append-icon=""
      height="50"
      light
      solo
      clearable
    />
  </v-system-bar>
</template>

<script>
import Vue from 'vue';
import { rubles } from '@/plugins/currency';
import LanguageSelector from '@/components/LanguageSelector.vue';
import RegistrationDialog from '@/components/auth/RegistrationDialog.vue';
import SignInDialog from '@/components/auth/SignInDialog.vue';
import PasswordRecoveryDialog from '@/components/auth/PasswordRecoveryDialog.vue';
import SuccessDialog from '@/components/auth/SuccessDialog.vue';

export default Vue.extend({
  components: {
    LanguageSelector,
    PasswordRecoveryDialog,
    RegistrationDialog,
    SuccessDialog,
    SignInDialog,
  },
  props: {
    siteSettings: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      amount: 6234234,
      items: this.$t('search.suggestions'),
      isSearcherOpen: false,
      authDialog: false,
      currentDialog: 'SignInDialog',
    };
  },
  methods: {
    rubles,
    logout () {
      this.$router.push('/');
      this.$apolloHelpers.onLogout();
    },
    closeAuth () {
      this.authDialog = !this.authDialog;
    },
  },
});
</script>

<style lang="scss" scoped>
.searcher {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 130px;
  width: 600px;
  z-index: 2;
  border-radius: 10px;
}
</style>
