<template>
  <div class="recovery-password-form rounded">
    <h2>
      {{ $t('auth.recoverPassword.title') }}
    </h2>
    <p class="pt-2 text-body-2">
      {{ $t('auth.recoverPassword.description') }}
    </p>
    <v-text-field
      v-model="email"
      class="mt-5"
      :placeholder="$t('auth.emailPlaceholder')"
      type="email"
      dense
      solo
      flat
      rounded
      outlined
      height="40"
    />
    <v-btn
      color="primary"
      block
      rounded
      dark
      @click="$emit('set-dialog', 'SuccessDialog')"
    >
      {{ $t('auth.recoverPassword.sendEmail') }}
    </v-btn>
    <v-row justify="center">
      <v-col cols="auto" class="mt-1">
        <v-btn text color="primary" @click="$emit('set-dialog', 'SignInDialog')">
          {{ $t('auth.recoverPassword.goBack') }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PasswordRecoveryDialog',
  data () {
    return {
      email: '',
    };
  },
});
</script>

<style lang="scss" scoped>
  .recovery-password-form {
    padding: 5px 50px 35px 50px;
  }
</style>
