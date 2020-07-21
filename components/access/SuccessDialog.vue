<template>
  <div class="success__container rounded info-wrapper">
    <img src="@/assets/images/dialog-icons/success-dialog/send.svg" alt="success">
    <p class="pt-2 description">
      <!--{{ $t('access.login.recoveryPassword.success') }}-->
      Письмо для восстановления пароля успешно отправлено. Проверьте вашу почту.
    </p>
    <v-btn text class="mt-1 custom-transform-class text-none buttonTo" color="#00AC00" @click="$emit('set-dialog', 'SignInDialog');">
      <span>
        <!--{{ $t('access.login.recoveryPassword.redirectionName') }}-->
        Вернуться ко входу
      </span>
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
  .success__container {
    padding: 5px 50px 40px 50px;
    background-color: white;
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  .buttonTo {
    letter-spacing: normal;
    font-weight: normal;
  }

  .description {
    font-size: 14px;
  }
</style>
