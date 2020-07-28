<template>
  <div class="recovery-password-form rounded">
    <h2>
      {{ $t('access.login.recoveryPassword.title') }}
    </h2>
    <p class="pt-2 recovery-password-form__description">
      {{ $t('access.login.recoveryPassword.description') }}
    </p>
    <v-text-field
      class="mt-5 recovery-password-form__text-field"
      :placeholder="$t('access.global.emailPlaceholder')"
      type="email"
      dense
      solo
      flat
      rounded
      height="40px"
    />
    <v-btn
      color="#00AC00"
      block
      dense
      rounded
      dark
      class="button mt-4"
      @click="$emit('set-dialog', 'SuccessDialog')"
    >
      {{ $t('access.login.recoveryPassword.buttonName') }}
    </v-btn>
    <div class="text-center mt-5">
      <v-btn text class="mt-1  button" color="#00AC00" @click="$emit('set-dialog', 'SignInDialog')">
        {{ $t('access.login.recoveryPassword.redirectionName') }}
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PasswordRecoveryDialog',
});
</script>

<style lang="scss" scoped>
  .recovery-password-form {
    padding: 5px 50px 35px 50px;
    background-color: white;
  }

  .recovery-password-form__description {
    font-size: 14px;
  }

  .button {
    letter-spacing: normal;
    font-weight: normal;
  }

  .recovery-password-form__text-field {
    border: 1px solid black;
    height: 42px;
  }
</style>
