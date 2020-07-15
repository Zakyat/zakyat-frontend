<template>
  <div class="registration">
    <v-container class="registration__container rounded">
      <v-row justify="space-between ml-0 mr-0">
        <h2>
          {{ $t('access.registration.title') }}
        </h2>
        <v-btn text class="mt-1 custom-transform-class text-none buttonTo" color="success" @click="toSignInDialog">
          <span>
            {{ $t('access.login.linkAndButtonName') }}
          </span>
        </v-btn>
      </v-row>
      <p class="pt-4">
        {{ $t('access.registration.description') }}
      </p>
      <div class="d-flex justify-space-between">
        <v-btn
          width="31%"
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
        >
          <img src="@/assets/images/social-icons/vk.svg">
        </v-btn>
        <v-btn
          width="31%"
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
        >
          <img src="@/assets/images/social-icons/instagram.svg">
        </v-btn>
        <v-btn
          width="31%"
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
        >
          <img src="@/assets/images/social-icons/google.svg">
        </v-btn>
      </div>
      <v-text-field
        class="mt-5"
        :label="$t('access.global.emailPlaceholder')"
        dense
        rounded
        outlined
      />
      <v-text-field
        class="mt-n4"
        :label="$t('access.global.passwordPlaceholder')"
        dense
        rounded
        outlined
      />
      <v-checkbox
        class="agreement text-12 mt-n4 mb-4"
        :v-model="selected"
        :label="$t('access.registration.agreements.textFirstPart') + ' ' + $t('access.registration.agreements.userAgreementName') + ' '
          + $t('access.registration.agreements.textSecondPart') + ' ' + $t('access.registration.agreements.confidentialAgreementName')"
        color="success"
        :value="selected"
        hide-details
      />
      <v-btn
        color="success"
        block
        dense
        rounded
        class="custom-transform-class text-none buttonTo"
      >
        {{ $t('access.registration.linkAndButtonName') }}
      </v-btn>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'RegistrationDialog',
  methods: {
    toSignInDialog () : void {
      this.$emit('set-dialog', 'SignInDialog');
    },
  },
});
</script>

<style lang="scss" scoped>
  .registration__container {
    padding: 10px 50px 50px 50px;
    background-color: white;
  }

  a {
    text-decoration: none;
  }

  .buttonTo {
    letter-spacing: normal;
    font-weight: normal;
  }
</style>
