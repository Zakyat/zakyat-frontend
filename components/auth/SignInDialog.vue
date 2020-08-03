<template>
  <v-container class="sign-in-form rounded">
    <v-row justify="space-between" class="mx-0">
      <h2>
        {{ $t('auth.login.title') }}
      </h2>
      <v-btn
        text
        class="font-weight-regular"
        color="primary"
        @click="$emit('set-dialog', 'RegistrationDialog')"
      >
        {{ $t('auth.registration.register') }}
      </v-btn>
    </v-row>
    <p class="pt-2 mb-0 body-2">
      {{ $t('auth.login.description') }}
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
      height="40"
      :placeholder="$t('auth.emailPlaceholder')"
      dense
      solo
      flat
      rounded
      outlined
      autofocus
    />
    <v-text-field
      v-model="password"
      :placeholder="$t('auth.passwordPlaceholder')"
      required
      dense
      solo
      flat
      rounded
      outlined
      height="40"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
      @click:append="showPassword = !showPassword"
    />
    <v-btn
      color="primary"
      block
      dense
      rounded
      dark
      class="font-weight-regular"
    >
      <span class="body-1">
        {{ $t('auth.login.login') }}
      </span>
    </v-btn>
    <div class="link-wrapper text-center mt-5">
      <v-btn
        text
        class="mt-1 font-weight-regular"
        color="primary"
        height="40"
        @click="$emit('set-dialog', 'PasswordRecoveryDialog')"
      >
        {{ $t('auth.login.forgotPassword') }}
      </v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SignInDialog',
  data () {
    return {
      email: '',
      password: '',
      showPassword: false,
    };
  },
});
</script>

<style lang="scss" scoped>
  .sign-in-form {
    padding: 0 50px 35px 50px;
    background-color: white;
  }
</style>
