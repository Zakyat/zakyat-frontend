<template>
  <div class="success-dialog rounded">
    <v-icon size="60" color="success">
      mdi-checkbox-marked-circle
    </v-icon>
    <p class="pt-2 success-dialog__description">
      {{ $t('auth.recoverPassword.success') }}
    </p>
    <v-btn text class="mt-1 button" color="#00AC00" @click="$emit('set-dialog', 'SignInDialog')">
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
    background-color: white;
    text-align: center;
  }

  .button {
    letter-spacing: normal;
    font-weight: normal;
  }

  .success-dialog__description {
    font-size: 14px;
  }
</style>
