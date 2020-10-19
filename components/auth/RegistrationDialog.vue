<template>
  <v-container class="registration-form rounded">
    <v-row justify="space-between" class="mx-0">
      <h2>
        {{ $t('auth.registration.title') }}
      </h2>
      <v-btn text class="mt-1" color="primary" @click="$emit('set-dialog', 'SignInDialog')">
        {{ $t('auth.login.login') }}
      </v-btn>
    </v-row>
    <p class="pt-2 mb-0 text-body-2">
      {{ $t('auth.registration.description') }}
    </p>
    <v-row justify="space-between">
      <v-col cols="4">
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
          block
        >
          <img src="@/assets/images/social-icons/vk.svg" alt="vk">
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
          block
        >
          <img src="@/assets/images/social-icons/instagram.svg" alt="instagram">
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          color="rgba(0, 0, 0, 0.2)"
          outlined
          rounded
          block
        >
          <img src="@/assets/images/social-icons/google.svg" alt="google">
        </v-btn>
      </v-col>
    </v-row>
    <v-text-field
      v-model="email"
      type="email"
      class="mt-2"
      :placeholder="$t('auth.emailPlaceholder')"
      outlined
      height="40"
      hide-details
      autofocus
      dense
      solo
      flat
      rounded
    />
    <v-text-field
      v-model="password"
      class="mt-5"
      :placeholder="$t('auth.passwordPlaceholder')"
      :hint="passwordMessage"
      required
      height="40"
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
      <template #progress>
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
        color="primary"
      >
        <template #label>
          <i18n path="auth.registration.agreement.text" style="font-size: 14px;">
            <template #userAgreement>
              <a href="#">{{ $t('auth.registration.agreement.userAgreement') }}</a>
            </template>
            <template #dataProcessingConsent>
              <a href="#">{{ $t('auth.registration.agreement.dataProcessingConsent') }}</a>
            </template>
          </i18n>
        </template>
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
      <span class="text-body-1">
        {{ $t('auth.registration.register') }}
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
      email: '',
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
    padding: 0 50px 35px 55px;
  }

  a {
    text-decoration: none;
  }
</style>
