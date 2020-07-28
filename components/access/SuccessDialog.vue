<template>
  <div class="success-dialog rounded">
    <img src="@/assets/images/dialog-icons/success-dialog/send.svg" alt="success">
    <p class="pt-2 success-dialog__description">
      <!--{{ $t('access.login.recoveryPassword.success') }}-->
      Письмо для восстановления пароля успешно отправлено. Проверьте вашу почту.
    </p>
    <v-btn text class="mt-1 button" color="#00AC00" @click="$emit('set-dialog', 'SignInDialog')">
      <!--{{ $t('access.login.recoveryPassword.redirectionName') }}-->
      Вернуться ко входу
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
