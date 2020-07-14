<template>
  <v-system-bar dark height="50" style="padding: 0 5%;">
    <img src="@/assets/images/heart.svg" class="ml-12 mr-3">
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
    <v-dialog
      v-model="dialog.registration"
      width="440"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          small
          v-bind="attrs"
          v-on="on"
        >
          <v-icon color="white" size="20">
            mdi-account-circle
          </v-icon>
          {{ $t('login') }}
        </v-btn>
      </template>
      <div class="button-wrapper white" align="right">
        <v-btn
          icon
          color="black"
          @click="dialog.registration = !dialog.registration"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

<!--      <v-card>-->
<!--        <v-tabs>-->
<!--          <v-tab>Registration</v-tab>-->
<!--          <v-tab>SignIn</v-tab>-->
<!--          <v-tab>RecoveryPas</v-tab>-->
<!--        </v-tabs>-->
<!--        <v-tabs-items>-->
<!--          <v-tab-item>-->
<!--            <v-card>-->
<!--              <RegistrationDialog/>-->
<!--            </v-card>-->
<!--          </v-tab-item>-->
<!--          <v-tab-item>-->
<!--            <v-card>-->
<!--              <SignInDialog/>-->
<!--            </v-card>-->
<!--          </v-tab-item>-->
<!--          <v-tab-item>-->
<!--            <v-card>-->
<!--              <RecoveryPasDialog/>-->
<!--            </v-card>-->
<!--          </v-tab-item>-->
<!--        </v-tabs-items>-->
<!--      </v-card>-->
     <RegistrationDialog/>
    </v-dialog>
    <v-flex lg1 md2 xs4>
      <LanguageSelector />
    </v-flex>
    <v-autocomplete
      v-show="isSearcherOpen"
      class="searcher mx-auto"
      :items="items"
      :placeholder="$t('search.placeholder')"
      :no-data-text="$t('search.noDataText')"
      append-icon=""
      height="60"
      autofocus
      light
      solo
      rounded
      shaped
      clearable
    />
  </v-system-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import LanguageSelector from '@/components/LanguageSelector.vue';
import { rubles } from '@/plugins/currency';
import RegistrationDialog from '@/components/access/RegistrationDialog.vue';
import RecoveryPasDialog from "~/components/access/RecoveryPasDialog.vue";
import SignInDialog from "~/components/access/SignInDialog.vue";
import SuccessDialog from "~/components/access/SuccessDialog.vue";

export default Vue.extend({
  components: {
    SuccessDialog,
    RecoveryPasDialog,
    SignInDialog,
    LanguageSelector,
    RegistrationDialog,
  },
  data () {
    return {
      amount: 6234234,
      items: this.$t('search.suggestions'),
      isSearcherOpen: false,
      dialog: {
        registration: false,
        recovery: false,
        signin: false,
        success: false,
      }
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
  margin-top: 70px;
  width: 600px;
  z-index: 2;
}
</style>
