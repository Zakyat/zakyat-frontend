<template>
  <v-container class="registration-form rounded">
    <v-row justify="space-between" class="mx-0">
      <h2>
        {{ $t('auth.registration.title') }}
      </h2>
      <v-btn text class="mt-1" color="primary" @click="$emit('set-dialog', 'SignInDialog')">
        {{ $t('auth.login.linkAndButtonName') }}
      </v-btn>
    </v-row>
    <p class="pt-2 mb-0 registration-form__description">
      {{ $t('auth.registration.description') }}
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
      :placeholder="$t('auth.global.emailPlaceholder')"
      outlined
      height="50"
      hide-details
      dense
      solo
      flat
      rounded
    />
    <v-text-field
      v-model="password"
      class="mt-5"
      :placeholder="$t('auth.global.passwordPlaceholder')"
      :hint="passwordMessage"
      required
      height="50"
      outlined
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
          :value="passwordStrength * 25"
          :color="progressColor"
          rounded
          absolute
          height="5"
        />
      </template>
    </v-text-field>
    <v-row justify="space-between" class="mx-0 mb-3 mt-5">
      <v-checkbox
        v-model="agreedToTerms"
        class="mt-n2"
        color="#00AC00"
      >
        <div slot="label" class="registration-form__assigment">
          {{ $t('auth.registration.agreements.textFirstPart') }}
          <a href="#">{{ $t('auth.registration.agreements.userAgreementName') }}</a>,
          {{ $t('auth.registration.agreements.textSecondPart') }}
          <a href="#">{{ $t('auth.registration.agreements.confidentialAgreementName') }}</a>
        </div>
      </v-checkbox>
    </v-row>
    <v-btn
      color="primary"
      block
      rounded
      height="40px"
      class="mt-n2 mb-1"
      :disabled="passwordStrength === 0"
    >
      <span class="button__name">
        {{ $t('auth.registration.linkAndButtonName') }}
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
    passwordStrength (): number {
      if (this.password.length < 6) {
        return 0;
      }
      const hasLower = /[a-z]/.test(this.password) ? 1 : 0;
      const hasUpper = /[A-Z]/.test(this.password) ? 1 : 0;
      const hasDigit = /[\d]/.test(this.password) ? 1 : 0;
      const hasSymbol = /[\W]/.test(this.password) ? 1 : 0;
      return hasLower + hasUpper + hasDigit + hasSymbol;
    },
    progressColor (): string {
      switch (this.passwordStrength) {
        case 0:
          return 'error';
        case 1:
        case 2:
          return 'warning';
        case 3:
        case 4:
          return 'success';
        default:
          return '';
      }
    },
    passwordMessage () {
      switch (this.passwordStrength) {
        case 0:
          return this.$t('auth.registration.errors.weekPassword');
        case 1:
        case 2:
          return this.$t('auth.registration.errors.averagePassword');
        case 3:
        case 4:
          return this.$t('auth.registration.errors.goodPassword');
        default:
          return '';
      }
    },
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

  .button__name {
    font-size: 16px;
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

  .recovery-password-form__social-media-link {
    width: 100%;
  }
</style>
