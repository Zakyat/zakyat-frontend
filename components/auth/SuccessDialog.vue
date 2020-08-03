<template>
  <div class="success-dialog text-center">
    <v-icon size="60" color="success">
      mdi-checkbox-marked-circle
    </v-icon>
    <p class="pt-2 body-2">
      {{ $t('auth.recoverPassword.success') }}
    </p>
    <v-btn text class="mt-1" color="primary" @click="$emit('set-dialog', 'SignInDialog')">
      {{ $t('auth.recoverPassword.goBack') }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SuccessDialog',
});
</script>

<style lang="scss">
  .success-dialog {
    padding: 5px 50px 40px 50px;
  }
</style>
