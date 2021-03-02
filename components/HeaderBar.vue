<template>
  <v-system-bar dark height="50" style="padding: 0 5%;">
    <img src="@/assets/images/heart.svg" class="ml-4 mr-3">
    <span class="white--text">{{ $t('collected', [rubles(amount)]) }}</span>
    <v-spacer />
    <v-btn text small @click="isSearcherOpen = !isSearcherOpen">
      <v-icon color="white" size="20">
        mdi-magnify
      </v-icon>
      {{ $t('search.buttonName') }}
    </v-btn>
    <v-btn text small>
      <v-icon color="white" size="20">
        mdi-vk
      </v-icon>
      {{ $t('VK') }}
    </v-btn>
    <v-btn text small>
      <v-icon color="white" size="20">
        mdi-instagram
      </v-icon>
      {{ $t('instagram') }}
    </v-btn>
    <v-btn text small @click="authDialog = !authDialog">
      <v-icon color="white" size="20">
        mdi-account-circle
      </v-icon>
      {{ $t('login') }}
    </v-btn>
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
        @set-dialog="currentDialog = $event"
      />
    </v-dialog>
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

<script lang="ts">
import Vue from 'vue';
import { rubles } from '@/plugins/currency';
import RegistrationDialog from '@/components/auth/RegistrationDialog.vue';
import SignInDialog from '@/components/auth/SignInDialog.vue';
import PasswordRecoveryDialog from '@/components/auth/PasswordRecoveryDialog.vue';
import SuccessDialog from '@/components/auth/SuccessDialog.vue';

export default Vue.extend({
  components: {
    PasswordRecoveryDialog,
    RegistrationDialog,
    SuccessDialog,
    SignInDialog,
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
  },
});
</script>

<style lang="scss" scoped>
.searcher {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 65px;
  width: 600px;
  z-index: 2;
  border-radius: 10px;
}
</style>
