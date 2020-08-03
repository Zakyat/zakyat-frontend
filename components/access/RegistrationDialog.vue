<template>
  <v-container class="registration-form rounded">
    <v-row justify="space-between" class="mx-0">
      <h2>
        {{ $t('access.registration.title') }}
      </h2>
      <v-btn text class="mt-1 button" color="#00AC00" @click="$emit('set-dialog', 'SignInDialog')">
        {{ $t('access.login.linkAndButtonName') }}
      </v-btn>
    </v-row>
    <p class="pt-2 mb-0 registration-form__description">
      {{ $t('access.registration.description') }}
    </p>
    <v-row justify="space-between">
      <v-col>
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
          class="recovery-password-form__social-media-link"
        >
          <img src="@/assets/images/social-icons/vk.svg" alt="vk">
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
          class="recovery-password-form__social-media-link"
        >
          <img src="@/assets/images/social-icons/instagram.svg" alt="instagram">
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
          class="recovery-password-form__social-media-link"
        >
          <img src="@/assets/images/social-icons/google.svg" alt="google">
        </v-btn>
      </v-col>
    </v-row>
    <v-text-field
      type="email"
      class="mt-2"
      :placeholder="$t('access.global.emailPlaceholder')"
      dense
      solo
      flat
      rounded
    />
    <v-text-field
      v-model="password"
      class="mt-5 recovery-password-form__text-field"
      :placeholder="$t('access.global.passwordPlaceholder')"
      required
      dense
      solo
      flat
      rounded
      loading
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
      @click:append="showPassword = !showPassword"
    >
      <template v-slot:progress>
        <v-progress-linear
          :value="progress"
          :color="color"
          absolute
          height="6"
          class="mt-3 ml-2 rounded progress-bar"
        />
      </template>
    </v-text-field>

    <template v-if="progress">
      <p v-if="progress === 34" class="progress-bar__progress-result ml-2 mt-6">
        {{ $t('access.registration.errors.weekPassword') }}
      </p>
      <p v-if="progress === 68" class="progress-bar__progress-result ml-2 mt-6">
        {{ $t('access.registration.errors.averagePassword') }}
      </p>
      <p v-if="progress === 100" class="progress-bar__progress-result ml-2 mt-6">
        {{ $t('access.registration.errors.goodPassword') }}
      </p>
    </template>
    <v-row justify="space-between mx-0 mb-3 mt-5">
      <v-checkbox
        v-model="agreedToTerms"
        class="mt-n2"
        color="#00AC00"
      >
        <div slot="label" class="registration-form__assigment">
          {{ $t('access.registration.agreements.textFirstPart') }}
          <a href="#">{{ $t('access.registration.agreements.userAgreementName') }}</a>,
          {{ $t('access.registration.agreements.textSecondPart') }}
          <a href="#">{{ $t('access.registration.agreements.confidentialAgreementName') }}</a>
        </div>
      </v-checkbox>
    </v-row>
    <v-btn
      color="#00AC00"
      dark
      block
      rounded
      height="40px"
      class="button mt-n2 mb-1"
    >
      <span class="button__name">
        {{ $t('access.registration.linkAndButtonName') }}
      </span>
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'RegistrationDialog',
  data () {
    return {
      password: '',
      showPassword: false,
      agreedToTerms: false,
    };
  },
  computed: {
    /*
       add into the progress() method  your own conditions for password
       here just an example of password validating
    */
    // progress () {},
    // into the color() method you can add logic of color change depending on password input
    // color () {},
  },
});
</script>

<style lang="scss" scoped>

  .registration-form {
    padding: 0 50px 40px 55px;
    background-color: white;
  }

  a {
    text-decoration: none;
  }

  .button {
    letter-spacing: normal;
    font-weight: normal;
  }

  .button__name {
    font-size: 16px;
  }

  .progress-bar {
    width: 320px;
    border-radius: 10px;
  }

  .progress-bar__progress-result {
    font-size: 13px;
  }

  .registration-form__description {
    font-size: 14px;
  }

  .registration-form__assigment {
    font-size: 14px;
    width: 300px;
  }

  .recovery-password-form__text-field {
    border: 1px solid black;
    height: 40px;
  }

  .recovery-password-form__text-field:focus {
    border: 1px solid black;
  }

  .recovery-password-form__social-media-link {
    width: 100%;
  }
</style>
